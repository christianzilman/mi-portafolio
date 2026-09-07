// Tipos del contenido del portfolio.
// Editá los datos en los archivos de esta carpeta (profile.ts, experience.ts, etc.).

export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  /** Ruta del CV dentro de /public. */
  cvFile: string;
  summary: string;
}

export interface SocialLink {
  label: string;
  /** Dejar la URL vacía ("") si todavía no la tenés: se marca como pendiente en la UI. */
  href: string;
  handle: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  /** Resumen breve del contexto del puesto. */
  summary: string;
  /** Contribuciones clave sintetizadas. Las primeras 4 se muestran por defecto. */
  highlights: string[];
  stack: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

/** Bloque numerado de arquitectura / "lo que construí" en la página de detalle. */
export interface ArchitectureBlock {
  title: string;
  description: string;
}

export interface ProjectCase {
  /** Identificador para la URL, ej. "multimedia-360" → #/proyecto/multimedia-360 */
  slug: string;
  title: string;
  /** Etiqueta breve tipo categoría, ej. "Software de escritorio · .NET". */
  category: string;
  /** Rol desempeñado. */
  role: string;
  /** Modalidad (Freelance, Comercial, etc.). */
  modality: string;
  /** Cliente o "Confidencial" para proyectos privados. */
  client: string;
  /** Resumen corto para la tarjeta y el encabezado del caso. */
  summary: string;
  /** Imagen conceptual dentro de /public. */
  image: string;
  /** Contexto ampliado del proyecto. */
  context: string;
  /** Problema o desafío que resolvía el proyecto. */
  problem: string;
  /** Tu contribución personal concreta. */
  contribution: string;
  /** Bloques de arquitectura / lo que se construyó. */
  architecture: ArchitectureBlock[];
  /** Resultado o estado final del proyecto. */
  result: string;
  tech: string[];
  /** true para proyectos privados/comerciales (sin repositorio). */
  isPrivate: boolean;
  /** URL pública opcional; si está vacía no se muestra el botón. */
  siteUrl?: string;
}
