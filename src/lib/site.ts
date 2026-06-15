// lib/site.ts
// -----------------------------------------------------------------------------
// Único archivo que editas para personalizar todo. Busca // EDITA
// -----------------------------------------------------------------------------

export const site = {
  nombre: "PandaNoir",
  rol: "Desarrollador Full-Stack",
  ubicacion: "Lima, Perú",
  disponible: true,

  bienvenida: "Bienvenido a mi mundo",
  intro:
    "Desarrollador full-stack apasionado. Construyo aplicaciones web y móviles intuitivas, del backend con Laravel a la interfaz con React.",

  // Tu foto/avatar. Por defecto uso tu avatar de GitHub.
  // EDITA: para una foto propia, ponla en /public (ej: /public/yo.png) y usa "/yo.png".
  // avatar: "https://avatars.githubusercontent.com/u/80499534?v=4",
  avatar: "assets/img/logo-init.png",

  // Logo (guarda tu PNG en /public/logo.png)
  logo: "assets/img/logo-init.png",
  // Ilustración para la sección "Sobre mí" (guárdala en /public/about-dev.svg)
  sobreImagen: "assets/img/svg/about.svg",

  github: "https://github.com/JulioCodeStar",
  linkedin: "https://www.linkedin.com/in/julio-vargas-2b1a42203", // EDITA: verifica
  email: "tu-correo@ejemplo.com", // EDITA
  cv: "/cv.pdf", // EDITA: pon tu CV en /public/cv.pdf (o deja "" para ocultar el botón)

  sobreMi:
    "Soy un desarrollador full-stack de Lima, Perú. Mi fuerte es PHP/Laravel en el backend y React / React Native en frontend y móvil. Llevo cada proyecto desde el modelo de datos hasta una interfaz que la gente disfruta usar.", // EDITA
  sobreMi2:
    "Trabajo con APIs REST, bases de datos relacionales y aplicaciones móviles multiplataforma, siempre buscando soluciones limpias y centradas en el usuario. Hoy formo parte de SOINFO SAC.", // EDITA
  sobreMiHighlight:
    "Pongo creatividad y precisión en cada proyecto para entregar una experiencia única y efectiva.",

  stack: ["PHP", "Laravel", "JavaScript", "React", "React Native", "Node.js", "PostgreSQL", "MySQL", "Tailwind", "Git"],

  // EDITA: servicios que ofreces
  servicios: [
    {
      titulo: "Desarrollo Web Full-Stack",
      descripcion: "Aplicaciones web completas con Laravel y React, del backend a la interfaz.",
      destacado: true,
    },
    {
      titulo: "Apps Móviles",
      descripcion: "Apps multiplataforma con React Native para iOS y Android.",
      destacado: false,
    },
    {
      titulo: "APIs y Backend",
      descripcion: "APIs REST robustas y lógica de servidor con Laravel y Node.js.",
      destacado: false,
    },
    {
      titulo: "Bases de Datos",
      descripcion: "Modelado y optimización con PostgreSQL y MySQL.",
      destacado: false,
    },
  ],

  // EDITA: tus mejores proyectos. categoria -> insignia. imagen -> /public/proyecto.png o "" para placeholder.
  proyectos: [
    {
      nombre: "Nombre del proyecto",
      descripcion: "Qué hace y qué problema resuelve, en una frase clara.",
      categoria: "Web",
      tags: ["Laravel", "React", "PostgreSQL"],
      anio: "2025",
      imagen: "",
      link: "https://github.com/JulioCodeStar/...",
    },
    {
      nombre: "App móvil de ejemplo",
      descripcion: "Una app construida con React Native. Describe su función principal.",
      categoria: "Móvil",
      tags: ["React Native", "Node.js"],
      anio: "2024",
      imagen: "",
      link: "https://github.com/JulioCodeStar/...",
    },
    {
      nombre: "Sistema web de ejemplo",
      descripcion: "Un sistema full-stack. Qué gestiona y para quién.",
      categoria: "Web",
      tags: ["PHP", "MySQL"],
      anio: "2024",
      imagen: "",
      link: "https://github.com/JulioCodeStar/...",
    },
  ],

  // EDITA o BORRA esta sección si no tienes testimonios reales.
  testimonios: [
    {
      texto: "Julio hizo un trabajo excelente. Su atención al detalle y compromiso marcaron la diferencia en nuestro proyecto.",
      nombre: "Nombre Apellido",
      cargo: "Cargo, Empresa",
    },
    {
      texto: "Entregó a tiempo y con una calidad superior a la esperada. Volvería a trabajar con él sin dudarlo.",
      nombre: "Nombre Apellido",
      cargo: "Cargo, Empresa",
    },
  ],
} as const;