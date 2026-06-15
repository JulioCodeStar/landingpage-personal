import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

const nav = [
  ["Servicios", "#servicios"],
  ["Proyectos", "#proyectos"],
  ["Sobre mí", "#sobre"],
  ["Contacto", "#contacto"],
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{children}</p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-4xl font-extrabold sm:text-5xl">{children}</h2>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-svh">
      <div className="bg-glows" aria-hidden />

      {/* NAV */}
      <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="logo-badge">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={site.logo} alt={site.nombre} className="h-9 w-9" />
            </span>
            <span className="font-display text-lg font-bold">
              {site.nombre.split(" ")[0]}<span className="text-accent">.</span>
            </span>
          </a>
          <div className="flex items-center gap-6">
            <nav className="hidden gap-7 text-sm md:flex">
              {nav.map(([label, href]) => (
                <a key={href} href={href} className="text-muted-foreground transition-colors hover:text-accent">
                  {label}
                </a>
              ))}
            </nav>
            <a href="#contacto" className={cn(buttonVariants({ size: "sm" }), "rounded-full")}>
              Contáctame
            </a>
            <ModeToggle />
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* HERO */}
        <section className="grid items-center gap-12 py-16 sm:py-24 md:grid-cols-2">
          <div>
            <Eyebrow>{site.bienvenida} ✦</Eyebrow>
            {site.disponible && (
              <div className="mt-4 flex items-center gap-2">
                <span className="status-dot" />
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Disponible para proyectos
                </span>
              </div>
            )}
            <h1 className="mt-6 font-display text-4xl font-medium leading-tight sm:text-5xl">
              Hola, soy <strong>{site.nombre.split(" ")[0]}</strong>
            </h1>
            <p className="mt-2 font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl">
              <span className="hero-gradient">{site.rol}</span>
            </p>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{site.intro}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#proyectos" className={cn(buttonVariants({ size: "lg" }), "rounded-full")}>
                Mis proyectos
              </a>
              {site.cv && (
                <a
                  href={site.cv}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-full")}
                >
                  Descargar CV ↓
                </a>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                [site.github, "GitHub"],
                [site.linkedin, "LinkedIn"],
                [`mailto:${site.email}`, "Email"],
              ].map(([href, label]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Avatar con marco brillante */}
          <div className="mx-auto w-full max-w-sm">
            <div className="avatar-frame aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={site.avatar} alt={site.nombre} />
            </div>
          </div>
        </section>

        {/* MARQUEE de skills */}
        <section className="marquee border-y py-6">
          <div className="marquee-track">
            {[...site.stack, ...site.stack].map((s, i) => (
              <span key={i} className="font-display text-3xl font-bold text-muted-foreground/30 sm:text-5xl">
                {s} <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="reveal py-20 text-center">
          <SectionTitle>Servicios</SectionTitle>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Convierto ideas en productos digitales que funcionan.
          </p>
          <div className="mt-12 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
            {site.servicios.map((s) => (
              <div key={s.titulo} className={cn("glow-card p-6", s.destacado && "glow-card--active")}>
                <h3 className="font-display text-lg font-semibold">{s.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="reveal py-20 text-center">
          <SectionTitle>Mis proyectos</SectionTitle>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Una muestra de lo que he construido.
          </p>
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {site.proyectos.map((p) => (
              <a
                key={p.nombre}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="glow-card group flex flex-col overflow-hidden"
              >
                {/* Portada: imagen si existe, si no un degradado con la inicial */}
                <div className="proj-cover relative flex aspect-[16/10] items-center justify-center overflow-hidden">
                  {p.imagen ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.imagen} alt={p.nombre} className="h-full w-full object-cover" />
                  ) : (
                    <span className="font-display text-5xl font-extrabold text-white/90">
                      {p.nombre.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-accent">
                      {p.nombre}
                    </h3>
                    <Badge variant="secondary" className="rounded-full font-normal">{p.categoria}</Badge>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.descripcion}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="outline" className="rounded-full font-normal">{t}</Badge>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section id="sobre" className="reveal grid items-center gap-12 border-t py-20 md:grid-cols-2">
          <div className="mx-auto w-full max-w-xs">
            <div className="avatar-frame aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={site.sobreImagen} alt="Desarrollo full-stack" />
            </div>
          </div>
          <div>
            <SectionTitle>Sobre mí</SectionTitle>
            <p className="mt-6 leading-relaxed text-muted-foreground">{site.sobreMi}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{site.sobreMi2}</p>
            <div className="glow-card glow-card--active mt-6 flex gap-3 p-4">
              <span className="text-accent">✦</span>
              <p className="text-sm leading-relaxed">{site.sobreMiHighlight}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {site.stack.map((s) => (
                <Badge key={s} variant="outline" className="rounded-full font-normal">{s}</Badge>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIOS  (borra esta sección si no tienes reseñas reales)
        {site.testimonios.length > 0 && (
          <section id="resenas" className="reveal border-t py-20 text-center">
            <SectionTitle>Testimonios</SectionTitle>
            <div className="mt-12 grid gap-6 text-left sm:grid-cols-2">
              {site.testimonios.map((t, i) => (
                <div key={i} className="glow-card p-6">
                  <p className="text-2xl text-accent">&ldquo;</p>
                  <p className="-mt-3 leading-relaxed text-muted-foreground">{t.texto}</p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 font-semibold text-accent">
                      {t.nombre.charAt(0)}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{t.nombre}</p>
                      <p className="text-xs text-muted-foreground">{t.cargo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )} */}

        {/* CONTACTO */}
        <section id="contacto" className="reveal grid gap-12 border-t py-20 md:grid-cols-2">
          <div>
            <Eyebrow>Contacto</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Creemos algo <span className="text-accent">increíble</span> juntos
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
              ¿Tienes un proyecto o una oportunidad en mente? Escríbeme y te respondo pronto.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-block font-display text-lg underline decoration-1 underline-offset-4 transition-colors hover:text-accent"
            >
              {site.email}
            </a>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {site.nombre} — Next.js + shadcn/ui
          </p>
        </div>
      </footer>
    </div>
  );
}