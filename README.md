# Innovathon Mollendo 2026 — Landing Page Oficial & Suite de Pruebas

[![Playwright Tests](https://img.shields.io/badge/Playwright-34%20Passed-2EAD33?logo=playwright&logoColor=white)](https://playwright.dev/)
[![Brave Browser](https://img.shields.io/badge/Browser-Brave-FB542B?logo=brave&logoColor=white)](https://brave.com/)
[![React](https://img.shields.io/badge/React-19.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

Landing page completa, moderna e interactiva para la **Innovathon Mollendo 2026** en Arequipa, desarrollada bajo los principios de diseño de **Emil Kowalski Design Engineering**, **Impeccable** y **Taste Skill**, con identidad visual oficial extraída del Brandkit (`PROPUESTA BRANDKIT.pdf`).

> **Lema Oficial:** *“Las ideas también tienen marea.”*  
> **Propósito:** *“Una Innovathon frente al mar para crear soluciones que transformen nuestro futuro.”*

---

## 🎯 Características Principales

1. **Identidad Costera & Brandkit Oficial**:
   - Paleta marina oficial: Deep Ocean Navy (`#030c1f`), Aqua Marina (`#03c4c5`), Electric Violet (`#741cf3`), Solar Lime (`#b8da02`) y Sunset Coral (`#fc6c91`).
   - Logotipo oficial `MOL·LEN·DO` en variantes clara y oscura extraídas del vector oficial.
   - Los 5 iconos de marca oficiales: **Mar**, **Historia**, **Innovación**, **Colaboración** e **Impacto**.
2. **Marea Oceánica Interactiva**:
   - Canvas animado con capas multicapa de olas que se deforman y reaccionan a la posición del cursor en tiempo real.
3. **Cursor Dinámico de Gota de Agua**:
   - Puntero fluido con física de resorte (*Spring/Lerp*), halo acuático y transformación contextual al posarse sobre enlaces, botones y campos de texto.
   - Se desactiva automáticamente en pantallas táctiles y bajo `prefers-reduced-motion`.
4. **Tarjetas con Perspectiva 3D (TiltCard)**:
   - Inclinación espacial suave y reflejo de luz que acompaña al mouse.
5. **Formulario de Registro Completo & Accesible**:
   - Validación en tiempo real (email con regex, celular de 9 dígitos, nombres y edad).
   - Campos condicionales: despliega nombre de equipo y miembros al elegir modalidad *En Equipo*.
   - Estados de carga (*loading spinner*) y tarjeta de confirmación (*success state*) con pulso de agua y código único de registro.
6. **Cronograma y Datos 100% Desacoplados**:
   - Todo el contenido editable está centralizado en archivos de datos en `src/data/`.
7. **Suite de 34 Pruebas Automatizadas en Brave Browser**:
   - Validación de accesibilidad, responsive en 1440px y 390px, menú móvil, acordeón FAQ, ausencia de scroll horizontal y capturas visuales completas.

---

## 📁 Estructura del Proyecto

```text
MOLLETHON/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Barra sticky + drawer mobile accesible
│   │   ├── OceanCanvas.jsx  # Simulación canvas de olas y marea reactiva
│   │   ├── CustomCursor.jsx # Cursor de gota marina con física de resorte
│   │   ├── TiltCard.jsx     # Tarjeta con inclinación 3D y brillo reactivo
│   │   ├── Timeline.jsx     # Dinámica del evento con línea de progreso
│   │   └── Accordion.jsx    # FAQ animado y accesible (aria-expanded)
│   ├── sections/
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── DynamicSection.jsx
│   │   ├── ScheduleSection.jsx
│   │   ├── MentorsSection.jsx
│   │   ├── RegisterSection.jsx
│   │   ├── FAQSection.jsx
│   │   └── FooterSection.jsx
│   ├── data/                # Archivos de configuración editables
│   │   ├── eventData.js     # Datos maestros, manifiesto y lemas
│   │   ├── scheduleData.js  # Cronograma interactivo por días y horas
│   │   ├── mentorsData.js   # Mentores y aliados (con placeholders marcados)
│   │   └── faqData.js       # Preguntas frecuentes
│   ├── lib/
│   │   └── apiMock.js       # Simulación de registro y endpoint de integración
│   ├── styles/
│   │   ├── tokens.css       # Tokens de color, tipografía y curvas de motion
│   │   ├── animations.css   # Keyframes de olas, pulso de agua y transiciones
│   │   └── main.css         # Reset, botones táctiles y layout general
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── assets/              # Logos oficiales, iconos del brandkit y fotos costeras
├── tests/
│   ├── landing-verification.spec.js  # 20 pruebas E2E (Desktop + Mobile)
│   └── screenshots/         # Capturas generadas automáticamente
├── playwright.config.js     # Configuración con Brave Browser y servidor local
├── package.json
└── vite.config.js
```

---

## 🚀 Inicio Rápido

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

3. **Construir para producción:**
   ```bash
   npm run build
   ```

---

## 🧪 Ejecución de Pruebas con Playwright y Brave

| Comando | Acción |
| :--- | :--- |
| `npm test` | Ejecuta las 34 pruebas en Brave Desktop y Brave Mobile |
| `npm run test:desktop` | Ejecuta las pruebas únicamente en vista Desktop (1440x900) |
| `npm run test:mobile` | Ejecuta las pruebas en emulación móvil (Pixel 5) |
| `npm run test:headed` | Ejecuta las pruebas mostrando la ventana de Brave en pantalla |
| `npm run test:report` | Abre el reporte interactivo HTML de Playwright |

Las capturas de pantalla completas se guardan automáticamente en:
- `tests/screenshots/brave-desktop-fullpage.png`
- `tests/screenshots/brave-mobile-fullpage.png`
- `tests/screenshots/register-success.png`

---

## ✏️ Guía de Personalización de Contenidos

### 1. Cambiar Fecha, Ubicación o Textos Principales
Edita el archivo [src/data/eventData.js](file:///c:/Users/luisg/OneDrive/Documentos/Universidad/MOLLETHON/src/data/eventData.js):
```javascript
export const EVENT_DATA = {
  date: "24 al 26 de Abril, 2026",
  city: "Mollendo, Arequipa, Perú",
  venue: "Malecón Ratti & Estación Cultural",
  headline: "Las ideas también tienen marea.",
  // ...
};
```

### 2. Modificar el Cronograma de Actividades
Edita el archivo [src/data/scheduleData.js](file:///c:/Users/luisg/OneDrive/Documentos/Universidad/MOLLETHON/src/data/scheduleData.js) agregando o modificando días y actividades con hora, título, descripción y responsable.

### 3. Actualizar Mentores y Aliados Reales
Edita el archivo [src/data/mentorsData.js](file:///c:/Users/luisg/OneDrive/Documentos/Universidad/MOLLETHON/src/data/mentorsData.js). Actualmente cuenta con placeholders como `[Mentor/a por Confirmar]` listos para reemplazarse con los datos definitivos.

### 4. Preguntas Frecuentes
Edita el archivo [src/data/faqData.js](file:///c:/Users/luisg/OneDrive/Documentos/Universidad/MOLLETHON/src/data/faqData.js).

---

## 🔌 Conexión del Formulario a un Backend Real

El formulario utiliza el módulo desacoplado [src/lib/apiMock.js](file:///c:/Users/luisg/OneDrive/Documentos/Universidad/MOLLETHON/src/lib/apiMock.js). Para conectarlo a un backend real (Google Sheets con Apps Script, Supabase o API REST):

1. Abre `src/lib/apiMock.js`.
2. Asigna la URL de tu endpoint a `PRODUCTION_WEBHOOK_URL`:
   ```javascript
   const PRODUCTION_WEBHOOK_URL = "https://script.google.com/macros/s/.../exec";
   ```
3. El formulario enviará automáticamente un POST con:
   ```json
   {
     "fullName": "...",
     "email": "...",
     "phone": "...",
     "city": "...",
     "age": "...",
     "occupation": "...",
     "interestArea": "...",
     "participationType": "...",
     "teamName": "...",
     "motivation": "...",
     "registeredAt": "2026-09-18T..."
   }
   ```

---

## 🎨 Branding y Animaciones

- **Tokens de Color y Estilos:** [src/styles/tokens.css](file:///c:/Users/luisg/OneDrive/Documentos/Universidad/MOLLETHON/src/styles/tokens.css)
- **Animaciones y Curvas de Física:** [src/styles/animations.css](file:///c:/Users/luisg/OneDrive/Documentos/Universidad/MOLLETHON/src/styles/animations.css)
- **Activos Oficiales de Marca:** Carpeta `public/assets/` con logotipos e iconos del Brandkit.
- **Accesibilidad:** La aplicación detecta y respeta automáticamente la preferencia de sistema operativo `prefers-reduced-motion`, silenciando el cursor y las ondulaciones cuando el usuario lo solicite.

---

## 👤 Autor

Desarrollado para la **Innovathon Mollendo** por **Luis Gabriel ([@Choflis](https://github.com/Choflis))**.
