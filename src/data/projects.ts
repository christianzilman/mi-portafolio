import type { ProjectCase } from "./types";

// Casos basados en proyectos independientes (freelance) del CV.
// Son proyectos privados/comerciales: se presentan por contexto, problema,
// contribución y arquitectura, sin código ni enlace a repositorio.
export const projects: ProjectCase[] = [
  {
    slug: "multimedia-360",
    title: "Software de Procesamiento Multimedia 360",
    category: "Software de escritorio · .NET 8 / WPF",
    role: "Desarrollo integral (desktop)",
    modality: "Freelance · Comercial",
    client: "Confidencial",
    summary:
      "Aplicación de escritorio comercial para renderizar video 360 pesado sin bloquear la captura durante el evento.",
    image: "/images/projects/multimedia-360.png",
    context:
      "Producto comercial para eventos donde se captura y procesa video 360 en simultáneo. El renderizado es intensivo y no puede frenar la aplicación mientras el operador sigue capturando material en vivo.",
    problem:
      "Eventos que requerían renderizado de video pesado sin bloquear la aplicación de escritorio durante la captura.",
    contribution:
      "Desarrollé una aplicación de escritorio comercial en .NET 8 (WPF) con procesamiento asíncrono para el renderizado de video mediante Xabe.FFmpeg, persistiendo con Entity Framework.",
    architecture: [
      {
        title: "UI desacoplada (WPF)",
        description:
          "Interfaz de captura y control construida en WPF, separada del pipeline de render para mantener la aplicación fluida durante el evento.",
      },
      {
        title: "Render asíncrono",
        description:
          "Procesamiento de video con Xabe.FFmpeg ejecutado de forma asíncrona, evitando el bloqueo del hilo de UI en tareas pesadas.",
      },
      {
        title: "Persistencia con EF",
        description:
          "Gestión de trabajos y estados de render con Entity Framework sobre PostgreSQL.",
      },
      {
        title: "Pipeline de medios 360",
        description:
          "Orquestación de las etapas de importación, transformación y exportación del material 360.",
      },
    ],
    result:
      "Producto comercial entregado y utilizado en eventos, con render de video 360 en segundo plano sin interrumpir la captura.",
    tech: [".NET 8", "WPF", "Xabe.FFmpeg", "Entity Framework", "PostgreSQL"],
    isPrivate: true,
  },
  {
    slug: "gestion-expedientes",
    title: "Sistema Integral de Gestión de Expedientes",
    category: "Software de escritorio · .NET 8 / WinForms",
    role: "Desarrollo integral (desktop)",
    modality: "Freelance · Comercial",
    client: "Sector institucional / gubernamental",
    summary:
      "Aplicación de escritorio para la trazabilidad y administración de documentación institucional a lo largo de todo el ciclo del trámite.",
    image: "/images/projects/gestion-expedientes.png",
    context:
      "Organismo con alto volumen de expedientes que necesitaba trazabilidad completa del trámite, control por usuarios y roles, y visibilidad estadística de la operación.",
    problem:
      "Trazabilidad y administración de documentación institucional/gubernamental a lo largo de todo el ciclo de vida del trámite.",
    contribution:
      "Construí una aplicación de escritorio en .NET 8 (WinForms) con paneles estadísticos, gestión del ciclo del trámite (ingreso, en curso, reserva, archivo), administración de dependencias de origen y un módulo de RR.HH., todo bajo control de usuarios y roles.",
    architecture: [
      {
        title: "Ciclo del trámite",
        description:
          "Gestión de estados del expediente —ingreso, en curso, reserva y archivo— con trazabilidad de cada movimiento.",
      },
      {
        title: "Paneles estadísticos",
        description:
          "Tableros con métricas de la operación para seguimiento y toma de decisiones.",
      },
      {
        title: "Usuarios y roles",
        description:
          "Control de acceso por roles sobre todos los módulos del sistema.",
      },
      {
        title: "Módulos de gestión",
        description:
          "Administración de dependencias de origen y módulo de RR.HH. integrados.",
      },
    ],
    result:
      "Sistema en uso para administrar el ciclo de vida documental con control de acceso y reportería estadística.",
    tech: [".NET 8", "WinForms", "Entity Framework", "SQL Server"],
    isPrivate: true,
  },
  {
    slug: "plataforma-financiera",
    title: "Plataforma de Gestión Financiera",
    category: "Aplicación web · Java / Spring",
    role: "Desarrollo integral",
    modality: "Freelance · Comercial",
    client: "Confidencial",
    summary:
      "Sistema en producción para la administración de préstamos, con motor de cobros, alertas automatizadas y reportería.",
    image: "/images/projects/plataforma-financiera.png",
    context:
      "Operatoria de préstamos con distintas frecuencias (diarios, semanales, mensuales) que requería seguimiento de cobros, alertas y reportes confiables.",
    problem:
      "Administración operativa de préstamos (diarios, semanales, mensuales) con seguimiento de cobros y alertas.",
    contribution:
      "Construí e implementé un sistema integral, actualmente en producción, con motor de cobros y alertas automatizadas, y reportería con JasperReports.",
    architecture: [
      {
        title: "Motor de cobros",
        description:
          "Cálculo y seguimiento de cobros para préstamos diarios, semanales y mensuales.",
      },
      {
        title: "Alertas automatizadas",
        description:
          "Avisos generados automáticamente sobre vencimientos y estados de cada préstamo.",
      },
      {
        title: "Reportería",
        description: "Generación de reportes operativos con JasperReports.",
      },
      {
        title: "Persistencia",
        description:
          "Modelo de datos gestionado con Hibernate sobre PostgreSQL.",
      },
    ],
    result:
      "Sistema integral actualmente en producción, operando la gestión de préstamos y cobros.",
    tech: ["Java", "Spring", "Hibernate", "PostgreSQL", "JasperReports"],
    isPrivate: true,
  },
  {
    slug: "fotocabina-interactiva",
    title: "Sistema de Fotocabina Interactiva",
    category: "Software de escritorio · Java",
    role: "Desarrollo integral (desktop + hardware)",
    modality: "Freelance · Comercial",
    client: "Confidencial",
    summary:
      "Solución en producción para captura fotográfica en eventos, con integración de hardware externo y monitores duales.",
    image: "/images/projects/fotocabina-interactiva.png",
    context:
      "Fotocabina para eventos que debía integrarse con hardware físico (cámaras, impresoras) y coordinar una experiencia sobre dos pantallas.",
    problem:
      "Captura fotográfica en eventos con integración de hardware externo (cámaras, impresoras) y monitores duales.",
    contribution:
      "Desarrollé una solución en producción que integra el hardware de captura e impresión y gestiona monitores duales.",
    architecture: [
      {
        title: "Integración de hardware",
        description:
          "Control de cámara vía webcam-capture (sarxos) e integración con impresoras.",
      },
      {
        title: "Monitores duales",
        description:
          "Gestión de una pantalla para el operador y otra para el público.",
      },
      {
        title: "Flujo de captura",
        description:
          "Orquestación del ciclo capturar → previsualizar → imprimir en el evento.",
      },
    ],
    result:
      "Solución desplegada y utilizada en eventos, con integración de hardware de captura e impresión.",
    tech: ["Java", "sarxos:webcam-capture"],
    isPrivate: true,
  },
  {
    slug: "saindex",
    title: "Plataforma SaIndex",
    category: "Aplicación web · C# MVC4",
    role: "Diseño y desarrollo web",
    modality: "Freelance · Comercial",
    client: "Sector construcción",
    summary:
      "Sistema web transaccional para el control de perfiles, estadísticas y gestión documental de obras de construcción.",
    image: "/images/projects/saindex.png",
    context:
      "Empresa de construcción que necesitaba centralizar perfiles, estadísticas y documentación de obras en un sistema web transaccional.",
    problem:
      "Control de perfiles, estadísticas y gestión documental de obras de construcción.",
    contribution:
      "Diseñé un sistema web transaccional para el control de perfiles, estadísticas y gestión documental.",
    architecture: [
      {
        title: "Gestión documental",
        description:
          "Administración de la documentación de obras en un repositorio central.",
      },
      {
        title: "Perfiles y permisos",
        description: "Control de perfiles de acceso al sistema.",
      },
      {
        title: "Estadísticas",
        description: "Visualización de métricas y estadísticas de las obras.",
      },
      {
        title: "Núcleo transaccional",
        description:
          "Modelo transaccional sobre SQL Server con Entity Framework.",
      },
    ],
    result:
      "Sistema web transaccional entregado para el control documental y estadístico de obras.",
    tech: ["C# MVC4", "SQL Server", "Entity Framework"],
    isPrivate: true,
  },
];
