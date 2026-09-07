import type { CSSProperties, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** retraso en ms para escalonar la aparición. */
  delay?: number;
}

/** Envuelve contenido con una aparición discreta al entrar en viewport. */
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const style: CSSProperties | undefined = delay
    ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties)
    : undefined;

  return (
    <div style={style} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
