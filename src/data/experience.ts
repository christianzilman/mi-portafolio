import type { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    company: "Travcoding",
    role: "Senior Full Stack .NET Developer",
    period: "03/2022 – 08/2026",
    summary:
      "Plataforma global de reservas para la industria de viajes. Me incorporé en las primeras etapas y participé en su evolución hasta la operación en producción, con responsabilidad técnica sobre flujos críticos de reservas, pagos y catálogos.",
    highlights: [
      "Diseñé y desarrollé desde cero el microservicio genérico de actividades (Search, List, Avail, Checkout, Cancel), con una arquitectura modular basada en DLLs independientes que permite incorporar proveedores sin alterar el core del motor.",
      "Rediseñé el flujo de generación de ofertas de condominios con colas de mensajería (RabbitMQ), mejorando los tiempos de procesamiento mediante operaciones asíncronas.",
      "Diseñé e implementé el motor de conciliación financiera automatizado integrado con las APIs de Stripe y PayWithExtend.",
      "Reconfiguré Application Load Balancers (ALB) en AWS para reducir tiempos de respuesta y eliminar errores por timeout en producción.",
      "Implementé el proceso de Room Mapping y optimicé el de Hotel Mapping integrando Verbotech, centralizando políticas de cancelación y regímenes alimenticios.",
      "Fui responsable técnico de la integración y certificación en producción frente a auditores de proveedores como Hotelbeds (Activities API) y GUESTY.",
      "Diseñé el motor de recomendaciones Cross-Sell integrando hoteles, condominios, autos y actividades, con homologación geográfica (Place Mapping).",
      "Integré herramientas de IA al ciclo de ingeniería (Cursor en modo Composer/Agent y Claude vía MCP) manteniendo revisión y control sobre el código generado.",
    ],
    stack: [
      ".NET 8",
      ".NET Core",
      "AWS (ALB, S3, Lambda)",
      "Microservicios (Convey)",
      "RabbitMQ",
      "PostgreSQL / PostGIS",
      "React.js",
      "xUnit",
      "Git",
    ],
  },
  {
    company: "InvertirOnline.com S.A.",
    role: "Senior Full Stack .NET Developer",
    period: "03/2015 – 03/2022",
    summary:
      "Broker financiero digital (FinTech) líder del mercado bursátil en Argentina y Estados Unidos. Durante siete años asumí responsabilidades críticas en la arquitectura, diseñando soluciones asíncronas de alta concurrencia y los microservicios core de las operaciones bursátiles diarias.",
    highlights: [
      "Participé en la modernización de un sistema heredado de 10 años, migrando la lógica de negocio de ASP.NET 4.5 a monolitos modulares de .NET Core 3.1 con arquitectura limpia y API REST.",
      "Co-diseñé el motor transaccional de streaming masivo de cotizaciones del mercado americano con WebSockets (C#), SignalR y actores distribuidos con Microsoft Orleans (Grains).",
      "Desarrollé los microservicios core para automatizar operaciones de Cauciones (Colocadoras/Tomadoras) y los flujos de suscripción en Fondos Comunes de Inversión (FCI).",
      "Implementé reglas normativas y de validación en tiempo real para transacciones en especies cruzadas (Parking de bonos D y C) con cálculo automatizado de saldos.",
      "Automaticé la integración con administradoras de fondos (SAM, Convexity) e integré flujos de cobros con Mercado Pago.",
      "Integré la API internacional de prevención de fraude de LexisNexis para el cumplimiento normativo en validaciones de identidad (KYC).",
      "Colaboré en la mentoría del equipo mediante revisiones de código (PRs) y onboarding técnico de nuevos desarrolladores.",
    ],
    stack: [
      "C#",
      "ASP.NET MVC 5",
      ".NET Core 3.1",
      "SQL Server",
      "Redis",
      "Microsoft Orleans (Grains)",
      "WebSockets / SignalR",
      "Arquitecturas Distribuidas",
      "TeamCity / Jenkins",
    ],
  },
  {
    company: "Tucma Software",
    role: "Analista Programador",
    period: "06/2014 – 02/2015",
    summary:
      "Desarrollo de soluciones e-commerce, sistemas de firma digital y proyectos de modernización para clientes internacionales y gubernamentales, bajo metodologías ágiles (Scrum).",
    highlights: [
      "Participé en el desarrollo, mantenimiento y evolución de soluciones e-commerce con integraciones de pasarelas de pago (Mercado Pago, NPS) mediante C#, MVC y Web Services (WCF).",
      "Refactoricé código y optimicé la arquitectura para un cliente en Francia, implementando procesos asíncronos y jobs diarios de indexado masivo de documentos con Apache Solr.",
      "Ejecuté análisis técnico, depuración y resolución de incidentes críticos sobre aplicativos de firma digital en producción.",
    ],
    stack: [
      "C#",
      "ASP.NET MVC",
      "WCF",
      "MySQL",
      "Apache Solr",
      "Apache Tomcat",
      "Scrum",
    ],
  },
  {
    company: "NOANET S.A.",
    role: "Desarrollador de Software / Soporte Técnico",
    period: "06/2012 – 05/2014",
    summary:
      "Desarrollo, soporte y reingeniería de sistemas de gestión empresarial y aplicaciones web y móviles para corporaciones del sector agroindustrial (Argenti Lemon) y energético (Grupo EDET), bajo metodologías ágiles (Scrum).",
    highlights: [
      "Desarrollé aplicaciones nativas móviles (.NET Compact Framework) y módulos web (ASP.NET MVC 4) para registro de tareas en campo, evaluación de desempeño y control de asistencia.",
      "Planifiqué y ejecuté la arquitectura de la reingeniería integral de la Intranet corporativa compartida entre NoaNet y el Grupo EDET.",
      "Brindé soporte y mantenimiento evolutivo a sistemas legacy, gestionando módulos de control de contratistas sobre múltiples motores de bases de datos relacionales.",
    ],
    stack: [
      "C#",
      "ASP.NET MVC 4",
      ".NET Compact Framework",
      "NHibernate",
      "SQL Server",
      "Informix",
      "Sybase",
      "TFS",
    ],
  },
];
