import { useState, type CSSProperties } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "./Section";
import { experience } from "../data/experience";
import type { ExperienceItem } from "../data/types";

const INITIAL = 4;

function Job({ job, index }: { job: ExperienceItem; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = job.highlights.length > INITIAL;
  const shown = expanded ? job.highlights : job.highlights.slice(0, INITIAL);
  const hiddenCount = job.highlights.length - INITIAL;

  return (
    <li
      style={{ "--reveal-delay": `${index * 70}ms` } as CSSProperties}
      className="reveal relative ml-6 pb-12 last:pb-0 md:ml-8"
    >
      <span
        className="absolute top-1.5 left-[1.7rem] size-3 rounded-full border-2 border-accent bg-background md:left-[2.2rem]"
        aria-hidden="true"
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-heading text-xl font-bold tracking-tight">
          {job.company}
        </h3>
        <span className="font-mono text-sm text-muted">{job.period}</span>
      </div>
      <p className="mt-0.5 font-medium text-accent">{job.role}</p>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted text-pretty">
        {job.summary}
      </p>

      <ul className="mt-4 space-y-2">
        {shown.map((h, i) => (
          <li
            key={i}
            className="flex gap-3 text-[0.95rem] leading-relaxed text-foreground/90"
          >
            <span
              className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            <span className="text-pretty">{h}</span>
          </li>
        ))}
      </ul>

      {hasMore ? (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
        >
          {expanded ? "Ver menos" : `Ver ${hiddenCount} aportes más`}
          <ChevronDown
            className={`size-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      ) : null}

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {job.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-xs font-medium text-accent"
          >
            {tech}
          </li>
        ))}
      </ul>
    </li>
  );
}

export function Experience() {
  return (
    <Section
      id="experiencia"
      label="02 · Trayectoria"
      title="Experiencia profesional"
      tone="light"
    >
      <ol className="relative border-l border-border">
        {experience.map((job, i) => (
          <Job key={job.company + job.period} job={job} index={i} />
        ))}
      </ol>
    </Section>
  );
}
