import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <Section
      id="proyectos"
      label="04 · Trabajo"
      title="Proyectos y casos"
      tone="light"
      intro={
        <p className="leading-relaxed text-muted text-pretty">
          Una selección de desarrollos independientes. Son proyectos
          privados/comerciales, por lo que se presentan por contexto,
          contribución y arquitectura. Entrá a cada caso para ver el detalle
          completo.
        </p>
      }
    >
      <div className="space-y-16 md:space-y-24">
        {projects.map((project, i) => {
          const flip = i % 2 === 1;
          return (
            <Reveal key={project.slug}>
              <article className="group grid items-center gap-6 md:grid-cols-2 md:gap-12">
                <Link
                  to={`/proyecto/${project.slug}`}
                  aria-label={`Ver caso: ${project.title}`}
                  className={`block overflow-hidden rounded-2xl border border-border bg-ink ${flip ? "md:order-2" : ""}`}
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`Visual conceptual del proyecto ${project.title}`}
                    loading="lazy"
                    className="aspect-video w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </Link>

                <div className={flip ? "md:order-1" : ""}>
                  <p className="kicker text-accent">{project.category}</p>
                  <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight text-balance md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted text-pretty">
                    {project.summary}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md bg-subtle px-2 py-0.5 font-mono text-xs text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/proyecto/${project.slug}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-accent"
                  >
                    Ver caso
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
