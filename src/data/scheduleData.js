// Cronograma editable de la Innovathon Mollendo 2026
// Organizado por días, horas, actividades, descripción y responsables.

export const SCHEDULE_DATA = [
  {
    dayId: "dia-1",
    dayLabel: "Viernes 24 de Abril",
    theme: "Bienvenida, Inspiración y Marea de Ideas",
    activities: [
      {
        time: "15:00 - 16:30",
        title: "Acreditación & Kit de Bienvenida",
        description: "Recepción de participantes en la Estación Cultural de Mollendo, entrega de credenciales y swag oficial de la Innovathon.",
        speaker: "Equipo Organizador Mollendo",
        type: "logistica"
      },
      {
        time: "16:30 - 17:30",
        title: "Ceremonia de Inauguración",
        description: "Palabras de apertura, presentación del lema 'Las ideas también tienen marea' y anuncio de los retos regionales.",
        speaker: "Directorio Innovathon & Autoridades Aliadas",
        type: "keynote"
      },
      {
        time: "17:30 - 19:00",
        title: "Team Matching & Rompehielos Playero",
        description: "Dinámica interactiva para conectar a participantes individuales y consolidar equipos multidisciplinarios.",
        speaker: "Facilitadores de Comunidad",
        type: "networking"
      },
      {
        time: "19:00 - 20:30",
        title: "Workshop: De la Problemática Costera a la Hipótesis",
        description: "Metodologías ágiles de Design Thinking aplicadas a los retos de la ciudad y el mar de Mollendo.",
        speaker: "Mentor UX/Design Thinking [Por confirmar]",
        type: "taller"
      },
      {
        time: "20:30 - 00:00",
        title: "Inicio del Hack & Primera Arquitectura",
        description: "Apertura formal de salas de trabajo, configuración de repositorios y primeros bocetos técnicos.",
        speaker: "Mentores Técnicos de Guardia",
        type: "desarrollo"
      }
    ]
  },
  {
    dayId: "dia-2",
    dayLabel: "Sábado 25 de Abril",
    theme: "Desarrollo Intensivo, Código y Validación",
    activities: [
      {
        time: "08:00 - 09:00",
        title: "Desayuno Energético & Activación",
        description: "Energía matutina con productos de la costa y café de especialidad.",
        speaker: "Equipo de Bienestar",
        type: "logistica"
      },
      {
        time: "09:30 - 12:30",
        title: "Ronda de Mentorías 1:1 (Técnica y Producto)",
        description: "Feedback personalizado en arquitectura de software, inteligencia artificial, modelos de datos y viabilidad.",
        speaker: "Pool de Mentores Especialistas",
        type: "mentoria"
      },
      {
        time: "13:00 - 14:30",
        title: "Almuerzo Tradicional de Mollendo",
        description: "Espacio de descanso y recarga con gastronomía marina de la provincia de Islay.",
        speaker: "Comunidad Anfitriona",
        type: "logistica"
      },
      {
        time: "15:00 - 16:30",
        title: "Lightning Talks: Buenas Prácticas de Pitching",
        description: "Cómo estructurar una demostración técnica efectiva en menos de 4 minutos sin aburrir al jurado.",
        speaker: "Especialista en Pitch & Storytelling [Por confirmar]",
        type: "taller"
      },
      {
        time: "17:00 - 20:00",
        title: "Checkpoint de Progreso (Check-in 50%)",
        description: "Validación de funcionalidad básica del prototipo con mentores asignados para asegurar entregable viable.",
        speaker: "Comité de Evaluación Técnica",
        type: "mentoria"
      },
      {
        time: "21:00 - Noche",
        title: "Noche de Código Frente al Océano",
        description: "Sprint nocturno con snacks, música chill marina y soporte técnico de guardia.",
        speaker: "Comunidad de Hackers",
        type: "desarrollo"
      }
    ]
  },
  {
    dayId: "dia-3",
    dayLabel: "Domingo 26 de Abril",
    theme: "Demos en Vivo, Evaluación y Premiación",
    activities: [
      {
        time: "08:30 - 10:30",
        title: "Sprint Final & Congelamiento de Código",
        description: "Últimos retoques de despliegue, preparación de diapositivas y cierre de envíos a la plataforma.",
        speaker: "Comité Técnico",
        type: "desarrollo"
      },
      {
        time: "11:00 - 13:30",
        title: "Demo Day: Presentaciones en Vivo",
        description: "Cada equipo sube al escenario para exponer su solución en 3 minutos de pitch + 2 minutos de preguntas del jurado.",
        speaker: "Equipos Finalistas & Jurado",
        type: "keynote"
      },
      {
        time: "14:00 - 15:00",
        title: "Deliberación del Jurado & Almuerzo de Cierre",
        description: "Evaluación según criterios de impacto, viabilidad técnica, originalidad y diseño centrado en Mollendo.",
        speaker: "Mesa de Jurados",
        type: "logistica"
      },
      {
        time: "15:30 - 17:00",
        title: "Ceremonia de Premiación & Clausura",
        description: "Entrega de premios, reconocimientos especiales, anuncios de incubación y despedida oficial frente al mar.",
        speaker: "Organizadores, Patrocinadores & Ganadores",
        type: "premiacion"
      }
    ]
  }
];
