# Mollethon Prototype — Automated Testing & Verification Suite

[![Playwright](https://img.shields.io/badge/Playwright-1.63+-2EAD33?logo=playwright&logoColor=white)](https://playwright.dev/)
[![Brave Browser](https://img.shields.io/badge/Browser-Brave-FB542B?logo=brave&logoColor=white)](https://brave.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

Entorno automatizado de pruebas end-to-end y verificación de prototipos desarrollado con **Playwright** y configurado sobre **Brave Browser**, diseñado para validar interfaces web, flujos interactivos, comportamiento responsivo (Desktop vs Mobile) e integración de diseño.

---

## 🎯 Características Principales

- **Ejecución en Brave Browser**: Pruebas automatizadas sobre el motor Chromium de Brave Browser tanto en entorno Desktop como emulación Mobile.
- **Validación de Componentes y DOM**: Pruebas de renderizado de elementos críticos, estilos calculados, estados activos e inspección de accesibilidad básica.
- **Flujos Interactivos y Formularios**: Verificación de interacciones complejas de usuario (botones con estado reactivo, inputs controlados y envío de formularios).
- **Cobertura Responsiva Multiplataforma**:
  - `brave-desktop`: Resolución 1280x720 para visualización de escritorio.
  - `brave-mobile`: Emulación de Pixel 5 con validación de menús colapsables y reorganización de layouts en una sola columna.
- **Capturas de Pantalla y Trazas**: Generación automática de screenshots completos e individuales por componente, con recolección de trazas en caso de fallos.
- **Integración con Figma & Model Context Protocol (MCP)**: Plantillas para conectar herramientas de diseño e inspección inteligente de interfaces.

---

## 📁 Estructura del Proyecto

```text
MOLLETHON/
├── tests/
│   ├── environment-verification.spec.js  # Suite de pruebas E2E y verificación de entorno
│   ├── fixtures/
│   │   └── test-app.html                # Aplicación interactiva de prueba y prototipado
│   └── screenshots/                     # Capturas generadas durante la ejecución
├── playwright.config.js                 # Configuración principal de proyectos y navegador
├── package.json                         # Scripts y dependencias del proyecto
├── .env.example                         # Plantilla de variables de entorno
├── mcp.example.json                     # Plantilla de configuración Model Context Protocol
└── README.md                            # Documentación del proyecto
```

---

## 🚀 Requisitos Previos

- **Node.js**: v18.0.0 o superior
- **Brave Browser** instalado (por defecto en `C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe` en Windows, o configurable mediante variable de entorno `BRAVE_PATH`).

---

## ⚙️ Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Choflis/mollethon.git
   cd mollethon
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno (opcional):**
   ```bash
   cp .env.example .env
   ```
   Si tienes Brave Browser instalado en una ruta personalizada, define `BRAVE_PATH` en tu archivo `.env` o en tus variables de sistema.

---

## 🧪 Ejecución de Pruebas

El proyecto cuenta con comandos configurados en `package.json` para facilitar las pruebas:

| Comando | Descripción |
| :--- | :--- |
| `npm test` | Ejecuta la suite completa de pruebas en modo headless (Desktop + Mobile) |
| `npm run test:desktop` | Ejecuta únicamente el proyecto Desktop (1280x720) |
| `npm run test:mobile` | Ejecuta únicamente la emulación móvil (Pixel 5) |
| `npm run test:headed` | Ejecuta las pruebas abriendo la ventana visible del navegador |
| `npm run test:report` | Abre el reporte interactivo HTML generado por Playwright |

---

## 📊 Casos de Prueba Incluidos

1. **Carga Inicial y Verificación de Título**: Asegura que el prototipo cargue correctamente y muestre los elementos de marca.
2. **Generación de Evidencia Visual**: Capturas de pantalla completa y de componentes clave guardadas en `tests/screenshots/`.
3. **Inspección de Atributos del DOM**: Validación de clases CSS, insignias de estado y restricciones de campos de entrada.
4. **Interacciones y Formularios**: Pruebas de incremento numérico, validación de inputs y mensajes de retroalimentación dinámicos.
5. **Responsividad (Desktop vs Mobile)**: Validación de visibilidad de menús de navegación y adaptación del sistema de cuadrícula (grid).

---

## 👤 Autor

Desarrollado por **Luis Gabriel ([@Choflis](https://github.com/Choflis))**.
