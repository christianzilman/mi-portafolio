import { useEffect, useState } from "react";
import { ArrowDownToLine } from "lucide-react";
import { Link } from "react-router";
import { profile } from "../data/profile";

const links = [
  { to: "/sobre-mi", label: "Perfil" },
  { to: "/experiencia", label: "Experiencia" },
  { to: "/tecnologias", label: "Tecnologías" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/contacto", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-heading text-base font-bold tracking-tight"
        >
          {profile.name}
        </Link>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={profile.cvFile}
          download
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          <ArrowDownToLine className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">Descargar CV</span>
          <span className="sm:hidden">CV</span>
        </a>
      </nav>
    </header>
  );
}
