import { ArrowLeft, ArrowUpRight, Lock } from "lucide-react";
import { Link } from "react-router";
import { projects } from "../data/projects";
import type { ProjectCase } from "../data/types";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function ProjectDetail({ project }: { project: ProjectCase }) {
  const index = projects.findIndex((p) => p.slug === project.slug);
  const total = projects.length;
  const prev = projects[(index - 1 + total) % total];
  const next = projects[(index + 1) % total];

  const meta = [
    { label: "Rol", value: project.role },
    { label: "Modalidad", value: project.modality },
    { label: "Cliente", value: project.client },
    { label: "Stack", value: project.tech.slice(0, 3).join(" · ") },
  ];

  return (
    <article>
      {/* Encabezado */}
      <header className="border-b border-border bg-background">
        <div className="mx-auto max-w-5xl px-6 pt-12 pb-14 md:pt-16">
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/proyectos"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Volver a proyectos
            </Link>
            <span className="font-mono text-xs tracking-widest text-muted uppercase">
              Proyecto {pad(index + 1)} / {pad(total)}
            </span>
          </div>

          <p className="kicker mt-8 text-accent">{project.category}</p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-balance md:text-6xl md:leading-[1.03]">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
            {project.summary}
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-8 md:grid-cols-4">
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="font-mono text-[0.7rem] font-medium tracking-widest text-muted uppercase">
                  {item.label}
                </dt>
                <dd className="mt-1.5 font-heading text-sm font-semibold text-pretty">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          {project.siteUrl ? (
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Ir al sitio web
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          ) : (
            <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-dashed border-border px-4 py-2 text-sm text-muted">
              <Lock className="size-3.5" aria-hidden="true" />
              Proyecto privado / comercial — sin repositorio público
            </p>
          )}
        </div>
      </header>

      {/* Imagen conceptual */}
      <div className="bg-ink">
        <div className="mx-auto max-w-5xl px-6 py-10 md:py-14">
          <div className="overflow-hidden rounded-2xl border border-ink-border">
            <img
              src={project.image || "/placeholder.svg"}
              alt={`Visual conceptual del proyecto ${project.title}`}
              className="aspect-video w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 01 · El desafío */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
          <p className="kicker text-accent">01 · El desafío</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-14">
            <p className="font-heading text-2xl font-semibold leading-snug text-balance md:text-[1.75rem]">
              {project.context}
            </p>
            <div className="space-y-4 text-lg leading-relaxed text-muted text-pretty">
              <p>{project.problem}</p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-subtle p-6 md:p-8">
            <p className="kicker text-accent">Mi contribución</p>
            <p className="mt-3 text-lg leading-relaxed text-foreground/90 text-pretty">
              {project.contribution}
            </p>
          </div>
        </div>
      </section>

      {/* 02 · Arquitectura */}
      <section className="border-y border-border bg-subtle">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
          <div className="flex items-baseline justify-between gap-4">
            <p className="kicker text-accent">02 · Arquitectura</p>
            <span className="hidden font-heading text-sm font-semibold text-muted md:block">
              Lo que construí
            </span>
          </div>

          <ol className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {project.architecture.map((block, i) => (
              <li key={block.title} className="flex gap-4">
                <span className="font-mono text-sm font-medium text-accent">
                  {pad(i + 1)}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold tracking-tight">
                    {block.title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-muted text-pretty">
                    {block.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 border-t border-border pt-8">
            <p className="kicker text-accent">Tecnologías</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-lg border border-border bg-surface px-3 py-1 font-mono text-sm text-foreground/90"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 03 · Resultado */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
          <p className="kicker text-accent-bright">03 · Resultado</p>
          <p className="mt-6 max-w-3xl font-heading text-2xl font-semibold leading-snug text-balance md:text-3xl">
            {project.result}
          </p>
          <Link
            to="/contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Hablemos de tu proyecto
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Navegación entre proyectos */}
      <nav
        className="border-t border-border bg-background"
        aria-label="Navegación entre proyectos"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-border">
          <Link
            to={`/proyecto/${prev.slug}`}
            className="group px-6 py-8 transition-colors hover:bg-subtle"
          >
            <span className="font-mono text-xs tracking-widest text-muted uppercase">
              ← Anterior
            </span>
            <p className="mt-1.5 font-heading font-semibold text-balance transition-colors group-hover:text-accent">
              {prev.title}
            </p>
          </Link>
          <Link
            to={`/proyecto/${next.slug}`}
            className="group px-6 py-8 text-right transition-colors hover:bg-subtle"
          >
            <span className="font-mono text-xs tracking-widest text-muted uppercase">
              Siguiente →
            </span>
            <p className="mt-1.5 font-heading font-semibold text-balance transition-colors group-hover:text-accent">
              {next.title}
            </p>
          </Link>
        </div>
      </nav>
    </article>
  );
}
