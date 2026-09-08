import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Section } from "./Section";
import { profile, socials } from "../data/profile";

const github = socials.find((s) => s.label === "GitHub");
const linkedin = socials.find((s) => s.label === "LinkedIn");

const linkClass =
  "group flex items-center justify-between gap-4 rounded-xl border border-ink-border bg-ink-elevated px-4 py-3.5 transition-colors hover:border-accent-bright";

export function Contact() {
  return (
    <Section
      id="contacto"
      label="05 · Contacto"
      title="Trabajemos juntos"
      tone="dark"
      intro={
        <p className="text-lg leading-relaxed text-ink-muted text-pretty">
          Mi experiencia se centra en backend, arquitectura de sistemas
          distribuidos, integraciones, .NET y cloud. Para conversar sobre un
          proyecto o una oportunidad profesional, escribime.
        </p>
      }
    >
      <ul className="grid gap-3 md:grid-cols-2">
        <li>
          <a href={`mailto:${profile.email}`} className={linkClass}>
            <span className="flex items-center gap-3">
              <Mail className="size-5 text-accent-bright" aria-hidden="true" />
              <span className="font-medium text-ink-foreground">
                {profile.email}
              </span>
            </span>
            <ArrowUpRight
              className="size-4 text-ink-muted transition-colors group-hover:text-accent-bright"
              aria-hidden="true"
            />
          </a>
        </li>
        <li>
          <a
            href={`tel:${profile.phone.replace(/[^0-9+]/g, "")}`}
            className={linkClass}
          >
            <span className="flex items-center gap-3">
              <Phone className="size-5 text-accent-bright" aria-hidden="true" />
              <span className="font-medium text-ink-foreground">
                {profile.phone}
              </span>
            </span>
            <ArrowUpRight
              className="size-4 text-ink-muted transition-colors group-hover:text-accent-bright"
              aria-hidden="true"
            />
          </a>
        </li>
        {linkedin?.href ? (
          <li>
            <a
              href={linkedin.href}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              <span className="flex items-center gap-3">
                <FaLinkedin
                  className="size-5 text-accent-bright"
                  aria-hidden="true"
                />
                <span className="font-medium text-ink-foreground">
                  {linkedin.handle}
                </span>
              </span>
              <ArrowUpRight
                className="size-4 text-ink-muted transition-colors group-hover:text-accent-bright"
                aria-hidden="true"
              />
            </a>
          </li>
        ) : null}
        {github?.href ? (
          <li>
            <a
              href={github.href}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              <span className="flex items-center gap-3">
                <FaGithub
                  className="size-5 text-accent-bright"
                  aria-hidden="true"
                />
                <span className="font-medium text-ink-foreground">
                  {github.handle}
                </span>
              </span>
              <ArrowUpRight
                className="size-4 text-ink-muted transition-colors group-hover:text-accent-bright"
                aria-hidden="true"
              />
            </a>
          </li>
        ) : (
          <li className="flex items-center gap-3 rounded-xl border border-dashed border-ink-border px-4 py-3.5 text-sm text-ink-muted">
            <FaGithub className="size-5" aria-hidden="true" />
            GitHub pendiente — agregá tu URL en{" "}
            <code className="font-mono text-xs">src/data/profile.ts</code>
          </li>
        )}
      </ul>
    </Section>
  );
}
