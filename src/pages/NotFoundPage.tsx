import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
      <p className="kicker text-accent">Error 404</p>
      <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight">
        Proyecto no encontrado
      </h1>
      <Link
        to="/proyectos"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        Volver a proyectos
      </Link>
    </main>
  );
}
