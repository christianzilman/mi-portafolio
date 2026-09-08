import type { ProfileMetric } from "@/data/types";
import { Section } from "./Section";

const profileMetrics: ProfileMetric[] = [
  { value: "+12", label: "Años en desarrollo de software" },
  { value: ".NET / C#", label: "Especialidad principal" },
  { value: "FinTech · TravelTech", label: "Industrias de alta concurrencia" },
  { value: "AWS", label: "Infraestructura cloud" },
];

export function About() {
  return (
    <Section id="sobre-mi" label="01 · Perfil" title="Sobre mí" tone="dark">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:gap-14">
        <div className="space-y-4 text-lg leading-relaxed text-ink-muted text-pretty">
          <p>
            Soy Ingeniero en Sistemas de Información con más de doce años
            construyendo software sobre el ecosistema{" "}
            <span className="font-medium text-ink-foreground">.NET / C#</span>.
            Mi foco es el Backend: diseño de arquitecturas de microservicios,
            sistemas distribuidos de alta concurrencia e integraciones con
            proveedores globales mediante APIs.
          </p>
          <p>
            Trabajé en profundidad en{" "}
            <span className="font-medium text-ink-foreground">FinTech</span>{" "}
            (streaming masivo de cotizaciones, operaciones bursátiles,
            cumplimiento normativo) y en{" "}
            <span className="font-medium text-ink-foreground">TravelTech</span>{" "}
            (motores de reservas, conciliación financiera e integración con
            proveedores globales), con trabajo sobre infraestructura cloud en
            AWS.
          </p>
          <p>
            Me interesa el diseño de sistemas mantenibles: arquitecturas
            modulares, mensajería asíncrona y código con responsabilidad técnica
            de punta a punta, desde el diseño hasta la certificación en
            producción.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 md:grid-cols-1">
          {profileMetrics.map((fact) => (
            <li
              key={fact.label}
              className="rounded-xl border border-ink-border bg-ink-elevated p-5"
            >
              <p className="font-heading text-2xl font-bold tracking-tight text-accent-bright">
                {fact.value}
              </p>
              <p className="mt-1 text-sm leading-snug text-ink-muted">
                {fact.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
