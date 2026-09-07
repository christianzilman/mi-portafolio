import type { LoaderFunctionArgs } from "react-router";
import { projects } from "../data/projects";

const portfolioSections = new Set([
  "inicio",
  "sobre-mi",
  "experiencia",
  "tecnologias",
  "proyectos",
  "contacto",
]);

export function portfolioSectionLoader({ params }: LoaderFunctionArgs) {
  const section = params.section ?? "inicio";

  if (!portfolioSections.has(section)) {
    throw new Response("Section not found", { status: 404 });
  }

  return section;
}

export function projectLoader({ params }: LoaderFunctionArgs) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    throw new Response("Project not found", { status: 404 });
  }

  return project;
}
