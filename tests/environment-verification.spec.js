import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FIXTURE_URL = 'file://' + path.resolve(__dirname, 'fixtures', 'test-app.html').replace(/\\/g, '/');

test.describe('Verificación del Entorno Playwright con Brave Browser', () => {

  test('1. Abrir la aplicación local y verificar carga inicial', async ({ page }) => {
    await page.goto(FIXTURE_URL);
    await expect(page).toHaveTitle(/Playwright Verification Test App/);
    const brand = page.locator('#brand-logo');
    await expect(brand).toBeVisible();
    await expect(brand).toHaveText('Mollethon Prototype');
  });

  test('2. Tomar screenshots en viewport actual', async ({ page }, testInfo) => {
    await page.goto(FIXTURE_URL);
    const projectName = testInfo.project.name;
    const screenshotPath = path.resolve(__dirname, 'screenshots', `${projectName}-fullpage.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });

    const cardPath = path.resolve(__dirname, 'screenshots', `${projectName}-card-interaction.png`);
    await page.locator('#card-interaction').screenshot({ path: cardPath });

    expect(screenshotPath).toBeTruthy();
  });

  test('3. Inspeccionar elementos del DOM, atributos y estilos', async ({ page }) => {
    await page.goto(FIXTURE_URL);
    const badge = page.locator('#env-badge');
    await expect(badge).toBeVisible();
    await expect(badge).toHaveClass(/status-badge/);
    await expect(badge).toHaveText('Listo para Prototipado');

    const inputName = page.locator('#input-name');
    await expect(inputName).toHaveAttribute('placeholder', 'Ingresa tu nombre');
    await expect(inputName).toHaveAttribute('required', '');
  });

  test('4. Probar botones, formularios y flujo de navegación', async ({ page }, testInfo) => {
    await page.goto(FIXTURE_URL);

    // 4.1 Probar botón e incremento reactivo
    const counter = page.locator('#counter-value');
    const incrementBtn = page.locator('#btn-increment');
    await expect(counter).toHaveText('0');
    await incrementBtn.click();
    await incrementBtn.click();
    await expect(counter).toHaveText('2');

    // 4.2 Probar llenado y envío de formulario
    await page.fill('#input-name', 'Carlos Pérez');
    await page.fill('#input-email', 'carlos@ejemplo.com');
    await page.click('#btn-submit');

    const formResult = page.locator('#form-result');
    await expect(formResult).toBeVisible();
    await expect(formResult).toContainText('¡Recibido con éxito! Bienvenido, Carlos Pérez (carlos@ejemplo.com)');

    // 4.3 Probar navegación interna (responsive aware)
    if (testInfo.project.name === 'brave-mobile') {
      await page.click('#mobile-toggle');
      await expect(page.locator('#main-nav')).toBeVisible();
    }
    await page.click('a[href="#features"]');
    await expect(page).toHaveURL(/.*#features/);
    const navSection = page.locator('#features');
    await expect(navSection).toBeVisible();
  });

  test('5. Revisar responsive design (Desktop vs Mobile)', async ({ page }, testInfo) => {
    await page.goto(FIXTURE_URL);

    if (testInfo.project.name === 'brave-desktop') {
      // Desktop assertions
      await expect(page.locator('#main-nav')).toBeVisible();
      await expect(page.locator('#mobile-toggle')).toBeHidden();

      const gridColumns = await page.locator('.card-grid').evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('grid-template-columns');
      });
      // 2 columns expected on desktop
      expect(gridColumns.split(' ').length).toBe(2);
    } else if (testInfo.project.name === 'brave-mobile') {
      // Mobile assertions
      await expect(page.locator('#main-nav')).toBeHidden();
      await expect(page.locator('#mobile-toggle')).toBeVisible();

      const gridColumns = await page.locator('.card-grid').evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('grid-template-columns');
      });
      // 1 column expected on mobile
      expect(gridColumns.split(' ').length).toBe(1);
    }
  });

});
