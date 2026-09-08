import {
  fotocabinaImages,
  gestionExpedientesImages,
  gestionFinancieraImages,
  multimedia360Images,
  saindexImages,
} from "@/assets";
import type { ProjectCase } from "./types";

// Casos basados exclusivamente en la sección de proyectos independientes del CV.
// Las capturas se importan desde src/assets para que Vite resuelva sus rutas.
export const projects: ProjectCase[] = [
  {
    slug: "multimedia-360",
    title: "Software de Procesamiento Multimedia 360",
    category: "Software de escritorio · .NET 8 / WPF",
    role: "Desarrollo de aplicación de escritorio",
    modality: "Proyecto independiente · Comercial",
    client: "No especificado",
    summary:
      "Aplicación de escritorio comercial para eventos, con procesamiento asíncrono y renderizado de video 360.",
    image: multimedia360Images.cover,
    imageAlt: "Pantalla principal del software de procesamiento multimedia 360",
    context:
      "Aplicación comercial de escritorio desarrollada para procesar contenido multimedia 360 en eventos.",
    problem:
      "Procesar y renderizar video 360 dentro de una aplicación de escritorio para eventos.",
    contribution:
      "Desarrollé la aplicación en .NET 8 con WPF e implementé procesamiento asíncrono para el renderizado de video mediante Xabe.FFmpeg, con persistencia local utilizando Entity Framework y SQLite.",
    architecture: [
      {
        title: "Aplicación de escritorio",
        description: "Aplicación para Windows desarrollada con .NET 8 y WPF.",
      },
      {
        title: "Procesamiento asíncrono",
        description:
          "Ejecución asíncrona del procesamiento requerido para el renderizado de video.",
      },
      {
        title: "Renderizado multimedia",
        description: "Renderizado de video implementado con Xabe.FFmpeg.",
      },
      {
        title: "Persistencia",
        description:
          "Persistencia local con Entity Framework y SQLite.",
      },
    ],
    result:
      "Aplicación comercial de escritorio desarrollada para el procesamiento multimedia 360 en eventos.",
    tech: [".NET 8", "WPF", "Xabe.FFmpeg", "Entity Framework", "SQLite"],
  },
  {
    slug: "gestion-expedientes",
    title: "Sistema Integral de Gestión de Expedientes",
    category: "Software de escritorio · .NET 8 / WinForms",
    role: "Desarrollo de aplicación de escritorio",
    modality: "Proyecto independiente · Comercial",
    client: "Sector institucional / gubernamental",
    summary:
      "Aplicación comercial de escritorio para la trazabilidad y administración de documentación institucional y gubernamental.",
    image: gestionExpedientesImages.cover,
    imageAlt: "Menú principal del Sistema Integral de Gestión de Expedientes",
    gallery: [
      {
        src: gestionExpedientesImages.gallery[0],
        alt: "Pantalla de registro de expedientes",
      },
      {
        src: gestionExpedientesImages.gallery[1],
        alt: "Pantalla de búsqueda y modificación de expedientes",
      },
      {
        src: gestionExpedientesImages.gallery[2],
        alt: "Pantalla de acceso al Sistema Integral de Gestión de Expedientes",
      },
    ],
    context:
      "Sistema orientado a la trazabilidad y administración del ciclo de vida de documentación institucional y gubernamental.",
    problem:
      "Gestionar el trámite desde su ingreso y curso hasta su reserva o archivo, con control de usuarios y roles.",
    contribution:
      "Desarrollé la aplicación en .NET 8 con WinForms e implementé paneles estadísticos, la gestión del ciclo de vida del trámite, la administración de dependencias de origen y un módulo de recursos humanos para parametrizar el personal.",
    architecture: [
      {
        title: "Ciclo de vida del trámite",
        description:
          "Gestión de los estados de ingreso, en curso, reserva y archivo.",
      },
      {
        title: "Paneles estadísticos",
        description: "Paneles para consultar información estadística del sistema.",
      },
      {
        title: "Usuarios y roles",
        description: "Control del acceso al sistema mediante usuarios y roles.",
      },
      {
        title: "Dependencias y recursos humanos",
        description:
          "Administración de dependencias de origen y parametrización del personal, incluidos nombramientos, planta permanente y capacidades especiales.",
      },
    ],
    result:
      "Aplicación comercial de escritorio desarrollada para administrar y dar trazabilidad al ciclo de vida documental.",
    tech: [".NET 8", "WinForms"],
  },
  {
    slug: "plataforma-financiera",
    title: "Plataforma de Gestión Financiera",
    category: "Software de escritorio · Java / Spring",
    role: "Construcción e implementación integral",
    modality: "Proyecto independiente · Comercial",
    client: "No especificado",
    summary:
      "Sistema de escritorio en producción para la administración operativa de préstamos, con motor de cobros, alertas automatizadas y reportería.",
    image: gestionFinancieraImages.cover,
    imageAlt: "Menú principal de la Plataforma de Gestión Financiera",
    gallery: [
      { src: gestionFinancieraImages.gallery[0], alt: "Pantalla de gestión de clientes" },
      { src: gestionFinancieraImages.gallery[1], alt: "Pantalla de carga de créditos" },
      { src: gestionFinancieraImages.gallery[2], alt: "Pantalla de ingreso de recibos" },
      { src: gestionFinancieraImages.gallery[3], alt: "Pantalla de liquidación" },
      { src: gestionFinancieraImages.gallery[4], alt: "Pantalla de consulta de ingresos" },
      { src: gestionFinancieraImages.gallery[5], alt: "Pantalla de verificación de recibos" },
      { src: gestionFinancieraImages.gallery[6], alt: "Pantalla de control de créditos" },
      { src: gestionFinancieraImages.gallery[7], alt: "Pantalla de control de ventas" },
      { src: gestionFinancieraImages.gallery[8], alt: "Pantalla de consulta de pagos parciales e impagos" },
      { src: gestionFinancieraImages.gallery[9], alt: "Pantalla de informe mensual" },
      { src: gestionFinancieraImages.gallery[10], alt: "Pantalla de control de atrasos" },
    ],
    context:
      "Sistema integral para administrar la operación de préstamos diarios, semanales y mensuales.",
    problem:
      "Gestionar préstamos y cobros con alertas automatizadas e información operativa mediante reportes.",
    contribution:
      "Construí e implementé el sistema de escritorio con Maven, Java, Spring e Hibernate, PostgreSQL y JasperReports.",
    architecture: [
      {
        title: "Gestión de préstamos",
        description:
          "Administración operativa de préstamos diarios, semanales y mensuales.",
      },
      {
        title: "Motor de cobros",
        description: "Motor para gestionar la operatoria de cobros.",
      },
      {
        title: "Alertas automatizadas",
        description: "Alertas generadas automáticamente por el sistema.",
      },
      {
        title: "Reportería",
        description: "Generación de reportes con JasperReports.",
      },
      {
        title: "Persistencia",
        description: "Acceso a datos con Hibernate y PostgreSQL.",
      },
    ],
    result:
      "Sistema integral actualmente en producción para la gestión operativa de préstamos y cobros.",
    tech: ["Maven", "Java", "Spring", "Hibernate", "PostgreSQL", "JasperReports"],
  },
  {
    slug: "fotocabina-interactiva",
    title: "Sistema de Fotocabina Interactiva",
    category: "Software de escritorio · Java",
    role: "Desarrollo e integración de hardware",
    modality: "Proyecto independiente · Comercial",
    client: "No especificado",
    summary:
      "Solución en producción para captura fotográfica, con integración de cámaras e impresoras y gestión de monitores duales.",
    image: fotocabinaImages.cover,
    imageAlt: "Pieza visual del Sistema de Fotocabina Interactiva en funcionamiento",
    gallery: [
      { src: fotocabinaImages.gallery[0], alt: "Segunda pieza visual del Sistema de Fotocabina Interactiva" },
      { src: fotocabinaImages.gallery[1], alt: "Menú principal del Sistema de Fotocabina Interactiva" },
      { src: fotocabinaImages.gallery[2], alt: "Pantalla de cantidad de fotografías a tomar" },
      { src: fotocabinaImages.gallery[3], alt: "Pantalla de selección de la fotocabina" },
      { src: fotocabinaImages.gallery[4], alt: "Pantalla de selección de arte" },
      { src: fotocabinaImages.gallery[5], alt: "Pantalla de selección de marco" },
    ],
    context:
      "Solución para captura fotográfica con hardware externo y monitores duales.",
    problem:
      "Integrar cámaras e impresoras y gestionar monitores duales dentro de una solución de fotocabina.",
    contribution:
      "Desarrollé la solución en Java e integré cámaras, impresoras y la gestión de monitores duales mediante sarxos:webcam-capture.",
    architecture: [
      {
        title: "Integración de hardware",
        description: "Integración del sistema con cámaras e impresoras.",
      },
      {
        title: "Monitores duales",
        description: "Gestión de dos monitores dentro de la experiencia de captura.",
      },
      {
        title: "Captura con Java",
        description:
          "Captura fotográfica implementada en Java con sarxos:webcam-capture.",
      },
    ],
    result:
      "Solución de fotocabina actualmente en producción para captura fotográfica con hardware externo.",
    tech: ["Java", "sarxos:webcam-capture"],
  },
  {
    slug: "saindex",
    title: "Plataforma SaIndex",
    category: "Aplicación web · C# MVC4",
    role: "Diseño del sistema web",
    modality: "Proyecto independiente · Comercial",
    client: "Sector construcción",
    summary:
      "Sistema web transaccional para el control de perfiles, estadísticas y gestión documental de obras de construcción.",
    image: saindexImages.cover,
    imageAlt: "Menú principal de autor de la Plataforma SaIndex",
    gallery: [
      { src: saindexImages.gallery[0], alt: "Página de inicio de la Plataforma SaIndex" },
      { src: saindexImages.gallery[1], alt: "Pantalla para cargar una obra en la Plataforma SaIndex" },
      { src: saindexImages.gallery[2], alt: "Pantalla de información para la carga de una obra" },
      { src: saindexImages.gallery[3], alt: "Pantalla de acceso a la Plataforma SaIndex" },
    ],
    context:
      "Sistema web transaccional orientado a la gestión de obras de construcción.",
    problem:
      "Controlar perfiles, estadísticas y documentación de obras de construcción.",
    contribution:
      "Diseñé el sistema web transaccional con C# MVC4, SQL Server y Entity Framework.",
    architecture: [
      {
        title: "Control de perfiles",
        description: "Gestión de perfiles dentro del sistema.",
      },
      {
        title: "Estadísticas",
        description: "Consulta de estadísticas relacionadas con las obras.",
      },
      {
        title: "Gestión documental",
        description: "Administración de documentación de obras de construcción.",
      },
      {
        title: "Sistema transaccional",
        description:
          "Implementación con C# MVC4, SQL Server y Entity Framework.",
      },
    ],
    result:
      "Sistema web transaccional diseñado para el control de perfiles, estadísticas y documentación de obras.",
    tech: ["C# MVC4", "SQL Server", "Entity Framework"],
  },
];
