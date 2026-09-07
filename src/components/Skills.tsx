import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { skillGroups } from "../data/skills";

export function Skills() {
  return (
    <Section
      id="tecnologias"
      label="03 · Stack"
      title="Tecnologías"
      tone="dark"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 70}>
            <div className="h-full rounded-2xl border border-ink-border bg-ink-elevated p-6">
              <h3 className="font-heading text-lg font-bold tracking-tight text-ink-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-ink-border px-2.5 py-1 text-sm font-medium text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
