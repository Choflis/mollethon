// Datos Maestros del Evento - Innovathon Mollendo 2026
// Todos los campos editables están centralizados aquí.

export const EVENT_DATA = {
  name: "Innovathon Mollendo",
  edition: "Edición 2026",
  headline: "Las ideas también tienen marea.",
  subtitle: "Una Innovathon frente al mar para crear soluciones reales que transformen nuestra ciudad y nuestro futuro.",
  
  // Fechas y Ubicación (Placeholders claramente identificados)
  date: "24 al 26 de Abril, 2026",
  dateNote: "[Fecha tentativa sujeta a confirmación oficial]",
  durationHours: "48 Horas de Co-creación Continua",
  city: "Mollendo, Arequipa, Perú",
  venue: "Malecón Ratti & Estación Cultural",
  venueAddress: "Av. Mariscal Castilla s/n, Mollendo",
  
  // Manifiesto extraído de la Propuesta de Brandkit oficial
  manifesto: {
    title: "Ideas que transforman el futuro",
    paragraphs: [
      "Innovathon Mollendo es un movimiento que conecta a las personas con su entorno para crear soluciones reales a los desafíos de nuestra ciudad.",
      "Mar, historia y futuro se unen para innovar hoy y transformar mañana. Queremos canalizar la energía del litoral arequipeño en proyectos de base tecnológica, sostenibilidad marina, turismo inteligente y desarrollo cívico.",
    ],
    whyMollendo: "Mollendo no es solo sol y playa; es el puerto histórico del sur, una comunidad resiliente con una juventud talentosa y un ecosistema costero que demanda soluciones sostenibles impulsadas por tecnología."
  },

  // Pilares de Marca Oficiales (Página 7 del Brandkit)
  brandPillars: [
    {
      id: "mar",
      title: "Mar",
      icon: "/assets/icons/mar.png",
      description: "La fuerza de nuestro litoral como fuente de inspiración, sostenibilidad y economía azul."
    },
    {
      id: "historia",
      title: "Historia",
      icon: "/assets/icons/historia.png",
      description: "La herencia portuaria y ferroviaria de Mollendo como base de nuestra identidad."
    },
    {
      id: "innovacion",
      title: "Innovación",
      icon: "/assets/icons/innovacion.png",
      description: "Tecnología, desarrollo de software y prototipado rápido para resolver problemas reales."
    },
    {
      id: "colaboracion",
      title: "Colaboración",
      icon: "/assets/icons/colaboracion.png",
      description: "Comunidad abierta donde convergen diseñadores, programadores, biólogos y soñadores."
    },
    {
      id: "impacto",
      title: "Impacto",
      icon: "/assets/icons/impacto.png",
      description: "Proyectos que trascienden el evento y se convierten en soluciones para la región."
    }
  ],

  // Sección ¿Qué vas a vivir? (6 Experiencias clave)
  experiences: [
    {
      id: "crear",
      title: "Crear",
      highlight: "De la idea al prototipo",
      description: "Transforma conceptos en código, interfaces y modelos tangibles en 48 horas intensivas.",
      color: "aqua",
      tag: "Prototipado"
    },
    {
      id: "aprender",
      title: "Aprender",
      highlight: "Masterclasses & Workshops",
      description: "Talleres prácticos con especialistas en Inteligencia Artificial, UX/UI, Cloud y Economía Circular.",
      color: "lime",
      tag: "Mentoring"
    },
    {
      id: "conectar",
      title: "Conectar",
      highlight: "Comunidad frente al océano",
      description: "Encuentra co-fundadores, amigos y mentores apasionados por crear soluciones de alto impacto.",
      color: "violet",
      tag: "Networking"
    },
    {
      id: "competir",
      title: "Competir",
      highlight: "Desafíos de ciudad",
      description: "Resuelve retos reales propuestos por organizaciones y municipalidades con soluciones disruptivas.",
      color: "coral",
      tag: "Hackathon"
    },
    {
      id: "presentar",
      title: "Presentar",
      highlight: "Pitch Day en vivo",
      description: "Muestra tu demo ante un jurado de inversionistas, autoridades y líderes de la industria.",
      color: "aqua",
      tag: "Demo Day"
    },
    {
      id: "transformar",
      title: "Transformar",
      highlight: "Incubación y despliegue",
      description: "Los proyectos ganadores recibirán acompañamiento para convertirse en iniciativas sostenibles.",
      color: "lime",
      tag: "Impacto Real"
    }
  ],

  // Pasos de la Dinámica
  timeline: [
    {
      step: "01",
      title: "Registro & Convocatoria",
      description: "Inscripciones abiertas a estudiantes, profesionales y entusiastas de todo el Perú."
    },
    {
      step: "02",
      title: "Formación de Equipos",
      description: "Dinámicas de integración para conformar equipos multidisciplinarios de 3 a 5 personas."
    },
    {
      step: "03",
      title: "Ideación & Lanzamiento de Retos",
      description: "Revelación de problemáticas de la costa sur y workshops de diseño centrado en el usuario."
    },
    {
      step: "04",
      title: "Desarrollo & Prototipado 48h",
      description: "Jornadas intensivas de programación, diseño y validación con soporte técnico continuo."
    },
    {
      step: "05",
      title: "Rondas de Mentorías",
      description: "Sesiones 1 a 1 con expertos técnicos, de negocio y validadores de la comunidad de Mollendo."
    },
    {
      step: "06",
      title: "Pitch & Evaluación Final",
      description: "Presentación de demos en vivo frente a un panel de expertos y retroalimentación directa."
    },
    {
      step: "07",
      title: "Premiación & Celebración Costera",
      description: "Reconocimiento a los proyectos más innovadores y cierre con networking frente al mar."
    }
  ],

  // Redes y Contacto
  socials: {
    instagram: "https://instagram.com/innovathonmollendo",
    facebook: "https://facebook.com/innovathonmollendo",
    linkedin: "https://linkedin.com/company/innovathon-mollendo",
    github: "https://github.com/Choflis/mollethon",
    email: "hola@innovathonmollendo.pe"
  }
};
