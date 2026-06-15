"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

const ORDER = ["light", "dark", "system"] as const;

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Evita el desajuste de hidratación: el tema no se conoce en el servidor.
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-9 w-9" />;

  const current = (theme as (typeof ORDER)[number]) ?? "system";
  const next = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];
  const Icon = current === "dark" ? Moon : current === "light" ? Sun : Monitor;

  return (
    <button
      onClick={() => setTheme(next)}
      aria-label={`Tema: ${current}. Cambiar a ${next}.`}
      title={`Tema: ${current}`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:text-accent hover:border-accent"
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}