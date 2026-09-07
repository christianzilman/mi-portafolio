import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Tone = "light" | "dark" | "subtle";

interface SectionProps {
  id: string;
  label: string;
  title: string;
  tone?: Tone;
  intro?: ReactNode;
  children: ReactNode;
}

const bands: Record<Tone, string> = {
  light: "bg-background text-foreground",
  subtle: "bg-subtle text-foreground",
  dark: "bg-ink text-ink-foreground",
};

export function Section({
  id,
  label,
  title,
  tone = "light",
  intro,
  children,
}: SectionProps) {
  const accentClass = tone === "dark" ? "text-accent-bright" : "text-accent";
  const lineClass = tone === "dark" ? "bg-ink-border" : "bg-border";

  return (
    <section id={id} className={`scroll-mt-20 ${bands[tone]}`}>
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <Reveal>
          <div className="mb-5 flex items-center gap-4">
            <span className={`kicker ${accentClass}`}>{label}</span>
            <span className={`h-px flex-1 ${lineClass}`} aria-hidden="true" />
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-[2.75rem] md:leading-[1.05]">
            {title}
          </h2>
          {intro ? <div className="mt-5 max-w-2xl">{intro}</div> : null}
        </Reveal>
        <div className="mt-10 md:mt-14">{children}</div>
      </div>
    </section>
  );
}
