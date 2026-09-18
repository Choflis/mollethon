/**
 * Mock API de Registro - Innovathon Mollendo 2026
 * 
 * Este módulo gestiona el envío y validación de inscripciones de forma simulada.
 * Está preparado con puntos de integración para conectar fácilmente con:
 * - Google Sheets (vía Google Apps Script Web App)
 * - Supabase REST API
 * - Backend Node/Python personalizado
 */

// Para conectar a producción, reemplace esta URL o configure la variable de entorno correspondiente
const PRODUCTION_WEBHOOK_URL = ""; 

export async function submitRegistration(formData) {
  // Simulación de latencia de red para mostrar estado de carga interactivo (1.2s)
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // Validación básica del lado de la API
  if (!formData.fullName || !formData.email || !formData.phone) {
    return {
      success: false,
      error: "Por favor, completa todos los campos requeridos."
    };
  }

  // Validación de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return {
      success: false,
      error: "El formato de correo electrónico no es válido."
    };
  }

  // Validación de celular (Perú: 9 dígitos iniciando en 9, o formato internacional)
  const cleanPhone = formData.phone.replace(/[\s\-()]/g, "");
  if (!/^\+?\d{8,15}$/.test(cleanPhone)) {
    return {
      success: false,
      error: "Por favor ingresa un número de teléfono válido (ej. 987654321)."
    };
  }

  // Punto de integración para Backend Real / Webhook
  if (PRODUCTION_WEBHOOK_URL) {
    try {
      const response = await fetch(PRODUCTION_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          registeredAt: new Date().toISOString(),
          source: "web_landing_mollendo"
        })
      });
      if (!response.ok) {
        throw new Error("Error en el servidor de registro.");
      }
      return { success: true, data: await response.json() };
    } catch (err) {
      return {
        success: false,
        error: "Hubo un problema al conectar con el servidor. Inténtalo nuevamente."
      };
    }
  }

  // Retorno de éxito simulado (no loguea datos sensibles)
  return {
    success: true,
    data: {
      registrationId: `MOL-${Math.floor(100000 + Math.random() * 900000)}`,
      registeredName: formData.fullName,
      registeredEmail: formData.email,
      participationType: formData.participationType,
      teamName: formData.teamName || null,
      timestamp: new Date().toISOString()
    }
  };
}
