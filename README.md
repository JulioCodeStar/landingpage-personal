# 🐼 PandaNoir — Portafolio

Portafolio personal de **PandaNoir**, desarrollador full-stack.
Diseño minimalista y moderno, modo oscuro/claro y animaciones suaves.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-20232a?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000?style=flat)

🔗 **Demo:** _(añade aquí tu URL de Vercel cuando despliegues)_

---

## ✨ Características

- Diseño minimalista con acento azul eléctrico y brillos sutiles
- Tema **oscuro / claro / sistema** con `next-themes`
- Hero con degradado animado, marquee de tecnologías y glows de fondo
- Secciones: Servicios, Proyectos, Sobre mí, Testimonios y Contacto
- Formulario de contacto funcional (vía `mailto`, sin backend)
- Scroll suave y animaciones de aparición respetando _reduce motion_
- Renderizado del lado del servidor (rápido y bueno para SEO)

## 🛠️ Stack

- [Next.js 16](https://nextjs.org/) (App Router · Turbopack)
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## 🚀 Empezar

Requisitos: Node.js 20+ y [pnpm](https://pnpm.io/).

```bash
# Clonar
git clone https://github.com/JulioCodeStar/portfolio.git
cd portfolio

# Instalar dependencias
pnpm install

# Levantar en desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## ✏️ Personalizar

Todo el contenido vive en un solo archivo: **`lib/site.ts`**.
Edita ahí tu nombre, alias, enlaces, servicios, proyectos y testimonios
(busca los comentarios `// EDITA`).

Imágenes que van en la carpeta `public/`:

| Archivo | Para qué |
|---|---|
| `public/logo.png` | Logo del header |
| `public/about-dev.svg` | Ilustración de la sección "Sobre mí" |
| `public/cv.pdf` | Tu CV (botón "Descargar CV") |
| `app/icon.png` | Favicon (opcional: usa el mismo logo) |

Los colores y animaciones están al final de `app/globals.css`
(variable `--accent` para el color de acento).

## 📦 Build de producción

```bash
pnpm build
pnpm start
```

## ☁️ Despliegue

Pensado para [Vercel](https://vercel.com/): conecta el repositorio y haz deploy.
Cada `push` a `main` actualiza el sitio automáticamente.

---

## 📫 Contacto

- **GitHub:** [@JulioCodeStar](https://github.com/JulioCodeStar)
- **LinkedIn:** [Julio Vargas](https://www.linkedin.com/in/julio-vargas-2b1a42203)

---

<p align="center">Hecho con 🐼 por <strong>PandaNoir</strong></p>