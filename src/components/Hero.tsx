import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { profile, socials } from "../data/profile";

const meta = [
  { label: "Ubicación", value: profile.location },
  { label: "Experiencia", value: "+12 años" },
  { label: "Industrias", value: "FinTech · TravelTech" },
  { label: "Modalidad", value: "Remoto · Freelance" },
];

export function Hero() {
  const linkedin = socials.find((s) => s.label === "LinkedIn");

  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-border bg-background scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-6xl px-6 pt-16 pb-14 md:pt-24 md:pb-20">
        <p className="kicker text-accent">
          Ingeniero en Sistemas · Backend .NET
        </p>

        <h1 className="mt-6 max-w-4xl font-heading text-5xl font-bold tracking-tight text-balance md:text-7xl md:leading-[1.02]">
          {profile.name}
        </h1>
        <p className="mt-4 font-heading text-2xl font-medium text-accent md:text-3xl">
          {profile.role}
        </p>

        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
          {profile.summary}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Ver proyectos
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          <a
            href={profile.cvFile}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowDownToLine className="size-4" aria-hidden="true" />
            Descargar CV
          </a>
          {linkedin?.href ? (
            <a
              href={linkedin.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-8 md:mt-16 md:grid-cols-4">
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-[0.7rem] font-medium tracking-widest text-muted uppercase">
                {item.label}
              </dt>
              <dd className="mt-1.5 font-heading text-base font-semibold text-pretty">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
