import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-ink-border bg-ink text-ink-muted">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs">
          Ingeniero en Sistemas · {profile.location}
        </p>
      </div>
    </footer>
  );
}
