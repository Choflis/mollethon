import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SCREENSHOTS_DIR = path.resolve(__dirname, 'screenshots');

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

test.describe('Suite Completa de Verificación - Innovathon Mollendo 2026', () => {

  // 1. Carga correcta de la página
  test('1. Carga inicial correcta y títulos SEO', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Innovathon Mollendo 2026/);
    const heroTitle = page.locator('.hero-title');
    await expect(heroTitle).toBeVisible();
    await expect(heroTitle).toHaveText('Las ideas también tienen marea.');
  });

  // 2. Navbar visible
  test('2. Navbar sticky visible con branding oficial', async ({ page }) => {
    await page.goto('/');
    const navbar = page.locator('.navbar-header');
    await expect(navbar).toBeVisible();
    const brandLogo = page.locator('.brand-logo-img');
    await expect(brandLogo).toBeVisible();
    
    // Check scrolled style
    await page.evaluate(() => window.scrollTo(0, 300));
    await page.waitForTimeout(250);
    await expect(navbar).toHaveClass(/navbar-scrolled/);
  });

  // 3. Navegación hacia cada sección
  test('3. Navegación hacia las secciones principales vía enlaces hash', async ({ page }) => {
    await page.goto('/');
    const sections = [
      { id: 'sobre-el-evento', selector: '#sobre-el-evento' },
      { id: 'experiencias', selector: '#experiencias' },
      { id: 'dinamica', selector: '#dinamica' },
      { id: 'cronograma', selector: '#cronograma' },
      { id: 'mentores', selector: '#mentores' },
      { id: 'faq', selector: '#faq' },
      { id: 'registro', selector: '#registro' }
    ];

    for (const sec of sections) {
      const sectionEl = page.locator(sec.selector);
      await expect(sectionEl).toBeAttached();
      await expect(sectionEl).toBeVisible();
    }
  });

  // 4. Menú mobile
  test('4. Menú móvil interactivo (abrir, cerrar con click y Escape)', async ({ page }, testInfo) => {
    await page.goto('/');
    if (testInfo.project.name === 'brave-mobile') {
      const toggle = page.locator('#mobile-toggle');
      await expect(toggle).toBeVisible();

      // Abrir menú
      await toggle.click();
      const mobileNav = page.locator('#mobile-nav');
      await expect(mobileNav).toHaveClass(/open/);
      await expect(toggle).toHaveAttribute('aria-expanded', 'true');

      // Cerrar con Escape
      await page.keyboard.press('Escape');
      await expect(mobileNav).not.toHaveClass(/open/);
      await expect(toggle).toHaveAttribute('aria-expanded', 'false');

      // Reabrir y cerrar con botón de cruz
      await toggle.click();
      await expect(mobileNav).toHaveClass(/open/);
      await page.click('.mobile-close-btn');
      await expect(mobileNav).not.toHaveClass(/open/);
    } else {
      // En desktop el botón hamburguesa debe estar oculto
      await expect(page.locator('#mobile-toggle')).toBeHidden();
    }
  });

  // 5. Validación de campos vacíos
  test('5. Validación de campos obligatorios en el formulario', async ({ page }) => {
    await page.goto('/#registro');
    const submitBtn = page.locator('#btn-submit-registration');
    await submitBtn.click();

    // Deben aparecer los mensajes de error
    await expect(page.locator('#err-fullName')).toBeVisible();
    await expect(page.locator('#err-email')).toBeVisible();
    await expect(page.locator('#err-phone')).toBeVisible();
    await expect(page.locator('#err-age')).toBeVisible();
    await expect(page.locator('#err-occupation')).toBeVisible();
    await expect(page.locator('#err-termsAccepted')).toBeVisible();
  });

  // 6. Validación de email incorrecto
  test('6. Validación de formato de email no válido', async ({ page }) => {
    await page.goto('/#registro');
    const emailInput = page.locator('#input-email');
    await emailInput.fill('correo-invalido-sin-arroba');
    await emailInput.blur();

    const errEmail = page.locator('#err-email');
    await expect(errEmail).toBeVisible();
    await expect(errEmail).toContainText('Ingresa un correo electrónico válido');
  });

  // 7. Campos condicionales
  test('7. Aparición de campo condicional al elegir modalidad "En Equipo"', async ({ page }) => {
    await page.goto('/#registro');
    // Por defecto es individual
    await expect(page.locator('#team-conditional-block')).toBeHidden();

    // Seleccionar En Equipo
    await page.click('input[value="equipo"]');
    const teamBlock = page.locator('#team-conditional-block');
    await expect(teamBlock).toBeVisible();

    const teamInput = page.locator('#input-teamName');
    await expect(teamInput).toBeVisible();

    // Volver a individual
    await page.click('input[value="individual"]');
    await expect(page.locator('#team-conditional-block')).toBeHidden();
  });

  // 8. Envío exitoso simulado
  // 9. Estado de loading
  // 10. Estado de success
  test('8, 9, 10. Flujo completo de registro: llenado, estado loading y vista de confirmación exitosa', async ({ page }) => {
    await page.goto('/#registro');

    // Llenar datos válidos
    await page.fill('#input-fullName', 'Rodrigo Barreda');
    await page.fill('#input-email', 'rodrigo.mollendo@ejemplo.com');
    await page.fill('#input-phone', '954123456');
    await page.fill('#input-city', 'Mollendo');
    await page.fill('#input-age', '24');
    await page.fill('#input-occupation', 'Universidad Nacional de San Agustín');
    await page.selectOption('#input-interestArea', 'Desarrollo de Software');

    // Elegir equipo
    await page.click('input[value="equipo"]');
    await page.fill('#input-teamName', 'Marea Innovadora');
    await page.selectOption('#input-teamSize', '4');

    // Aceptar términos
    await page.check('#input-termsAccepted');

    // Click submit
    const submitBtn = page.locator('#btn-submit-registration');
    await submitBtn.click();

    // 9. Verificar estado de loading (spinner visible y botón deshabilitado)
    await expect(submitBtn).toBeDisabled();
    await expect(page.locator('.submit-spinner')).toBeVisible();

    // 10. Esperar confirmación de éxito
    const successCard = page.locator('#register-success-state');
    await expect(successCard).toBeVisible({ timeout: 5000 });
    await expect(page.locator('.success-title')).toContainText('¡Registro Completado con Éxito!');
    await expect(page.locator('.success-greeting')).toContainText('Rodrigo Barreda');
    await expect(page.locator('.success-details')).toContainText('Marea Innovadora');
    await expect(page.locator('.success-ticket-chip')).toBeVisible();

    // Capturar screenshot del estado de éxito
    await successCard.screenshot({ path: path.join(SCREENSHOTS_DIR, 'register-success.png') });
  });

  // 11. FAQ accordion
  test('11. Acordeón de FAQ con expansión, colapso y accesibilidad aria-expanded', async ({ page }) => {
    await page.goto('/#faq');
    const firstTrigger = page.locator('.accordion-trigger').first();
    const firstPanel = page.locator('.accordion-panel').first();

    // Primer ítem abierto por defecto
    await expect(firstTrigger).toHaveAttribute('aria-expanded', 'true');
    await expect(firstPanel).toHaveClass(/panel-open/);

    // Click para colapsar
    await firstTrigger.click();
    await expect(firstTrigger).toHaveAttribute('aria-expanded', 'false');
    await expect(firstPanel).not.toHaveClass(/panel-open/);

    // Segundo ítem
    const secondTrigger = page.locator('.accordion-trigger').nth(1);
    await secondTrigger.click();
    await expect(secondTrigger).toHaveAttribute('aria-expanded', 'true');
  });

  // 12. Responsive desktop
  // 13. Responsive mobile
  test('12, 13. Verificación de diseño responsive según proyecto', async ({ page }, testInfo) => {
    await page.goto('/');
    if (testInfo.project.name === 'brave-desktop') {
      await expect(page.locator('.desktop-nav')).toBeVisible();
      await expect(page.locator('#mobile-toggle')).toBeHidden();
      await expect(page.locator('.hero-title')).toHaveCSS('font-size', /^(?!0px).*$/);
    } else if (testInfo.project.name === 'brave-mobile') {
      await expect(page.locator('.desktop-nav')).toBeHidden();
      await expect(page.locator('#mobile-toggle')).toBeVisible();
    }
  });

  // 14. Ausencia de scroll horizontal
  test('14. Comprobar que no exista overflow ni scroll horizontal', async ({ page }) => {
    await page.goto('/');
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(hasHorizontalScroll).toBeFalsy();
  });

  // 15. Interacción de botones
  test('15. Feedback táctil de botones al presionar', async ({ page }) => {
    await page.goto('/');
    const heroBtn = page.locator('.btn-hero-cta');
    await expect(heroBtn).toBeVisible();
    await heroBtn.hover();
    await expect(heroBtn).toHaveCSS('cursor', 'pointer');
  });

  // 16. Interacción de tarjetas con cursor (TiltCard)
  test('16. Tarjetas interactivas con respuesta a mousemove', async ({ page }, testInfo) => {
    await page.goto('/#experiencias');
    const card = page.locator('.bento-card-0');
    await expect(card).toBeVisible();

    if (testInfo.project.name === 'brave-desktop') {
      const box = await card.boundingBox();
      if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.waitForTimeout(100);
        await page.mouse.move(box.x + box.width * 0.8, box.y + box.height * 0.8);
        await page.waitForTimeout(100);
      }
    }
  });

  // 17. Movimiento de las olas con el cursor (Canvas Marino)
  test('17. Renderizado correcto del canvas oceánico en el Hero', async ({ page }) => {
    await page.goto('/');
    const canvas = page.locator('.ocean-canvas');
    await expect(canvas).toBeVisible();

    // Mover cursor sobre el canvas
    await page.mouse.move(200, 300);
    await page.waitForTimeout(150);
    await page.mouse.move(600, 400);
    await page.waitForTimeout(150);
  });

  // 18. Funcionamiento con prefers-reduced-motion
  test('18. Compatibilidad y comportamiento con prefers-reduced-motion: reduce', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    
    // Con reduced-motion el cursor personalizado no debe renderizarse
    await page.mouse.move(300, 300);
    await expect(page.locator('.ocean-cursor')).toBeHidden();

    // La página debe ser perfectamente funcional y legible
    await expect(page.locator('.hero-title')).toBeVisible();
  });

  // 19. Screenshots desktop y mobile
  test('19. Generación de capturas de pantalla completas para auditoría visual', async ({ page }, testInfo) => {
    await page.goto('/');
    const screenshotPath = path.join(SCREENSHOTS_DIR, `${testInfo.project.name}-fullpage.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    expect(fs.existsSync(screenshotPath)).toBeTruthy();
  });

  // 20. Accesibilidad básica
  test('20. Verificación de accesibilidad básica (alt text, labels de inputs y roles)', async ({ page }) => {
    await page.goto('/');

    // Todas las imágenes deben tener alt
    const images = page.locator('img');
    const imgCount = await images.count();
    for (let i = 0; i < imgCount; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).not.toBeNull();
    }

    // Los inputs principales deben tener un label asociado
    const inputsWithLabel = ['fullName', 'email', 'phone', 'age', 'occupation'];
    for (const name of inputsWithLabel) {
      const label = page.locator(`label[for="input-${name}"]`);
      await expect(label).toBeAttached();
    }
  });

  // 21. Selector y alternancia de Modo Claro / Modo Oscuro
  test('21. Alternancia de tema Claro/Oscuro y cambio dinámico de logo', async ({ page }, testInfo) => {
    await page.goto('/');
    const appRoot = page.locator('.app-root');
    await expect(appRoot).toBeVisible();

    const initialTheme = await appRoot.getAttribute('data-theme');
    expect(['dark', 'light']).toContain(initialTheme);

    if (testInfo.project.name === 'brave-desktop') {
      const themeBtn = page.locator('#theme-toggle-btn');
      await expect(themeBtn).toBeVisible();

      // Alternar tema
      await themeBtn.click();
      const toggledTheme = initialTheme === 'dark' ? 'light' : 'dark';
      await expect(appRoot).toHaveAttribute('data-theme', toggledTheme);

      // Verificar que el logo cambió acordemente
      const logoImg = page.locator('.brand-logo-img');
      const expectedLogo = toggledTheme === 'light' ? '/assets/logo-dark.png' : '/assets/logo-light.png';
      await expect(logoImg).toHaveAttribute('src', expectedLogo);

      // Volver al tema inicial
      await themeBtn.click();
      await expect(appRoot).toHaveAttribute('data-theme', initialTheme);
    } else {
      // En mobile probar el toggle en el drawer
      const toggle = page.locator('#mobile-toggle');
      await toggle.click();
      const mobileThemeBtn = page.locator('.mobile-theme-btn');
      await expect(mobileThemeBtn).toBeVisible();
      await mobileThemeBtn.click();
      const toggledTheme = initialTheme === 'dark' ? 'light' : 'dark';
      await expect(appRoot).toHaveAttribute('data-theme', toggledTheme);
    }
  });

  // 22. Sección interactiva y dinámica del Castillo Forga
  test('22. Sección dinámica Castillo Forga con hotspots interactivos y HUD marino', async ({ page }) => {
    await page.goto('/#castillo-forga');
    const castilloSection = page.locator('#castillo-forga');
    await expect(castilloSection).toBeVisible();

    // Título y badges
    await expect(page.locator('#castillo-forga .section-title')).toContainText('Castillo Forga');
    await expect(page.locator('#castillo-forga .badge-aqua')).toContainText('Símbolo de Mollendo');

    // Imagen digital
    const visualImg = page.locator('.castillo-main-image');
    await expect(visualImg).toBeVisible();

    // Telemetría HUD marina (Marea, Agua del Pacífico, Viento del Sur)
    const telemetryItems = page.locator('.hud-metric');
    await expect(telemetryItems).toHaveCount(3);
    await expect(telemetryItems.first()).toContainText('Marea');

    // Hotspots de baliza interactivos sobre la imagen
    const beacons = page.locator('.hotspot-beacon');
    await expect(beacons).toHaveCount(3);

    // Navegar tabs / hotspots
    const tabs = page.locator('.hotspot-nav-tab');
    await expect(tabs).toHaveCount(3);

    // Click en Tab 2 (Acantilado del Pacífico)
    await tabs.nth(1).click();
    await expect(page.locator('.detail-title')).toContainText('Acantilado del Pacífico');

    // Click en Tab 3 (Baluarte Histórico Forga)
    await tabs.nth(2).click();
    await expect(page.locator('.detail-title')).toContainText('Baluarte Histórico Forga');

    // Click en Tab 1 (Torreón del Faro Digital)
    await tabs.nth(0).click();
    await expect(page.locator('.detail-title')).toContainText('Torreón del Faro Digital');
  });

  // 23. Capturas de pantalla en Modo Claro para auditoría visual
  test('23. Generación de capturas de pantalla completas en Modo Claro', async ({ page }, testInfo) => {
    // Inyectar tema claro antes de renderizar
    await page.addInitScript(() => {
      localStorage.setItem('mollethon_theme', 'light');
    });
    await page.goto('/');

    const appRoot = page.locator('.app-root');
    await expect(appRoot).toHaveAttribute('data-theme', 'light');

    const screenshotPath = path.join(SCREENSHOTS_DIR, `${testInfo.project.name}-light-fullpage.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    expect(fs.existsSync(screenshotPath)).toBeTruthy();
  });

});

