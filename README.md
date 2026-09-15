# Portfolio — Esteban Ledezma

Portfolio personal. Sitio estático de una sola página construido con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com), con secciones de experiencia, educación, certificados, proyectos y habilidades, selector de tema claro/oscuro y algunas paletas de color.

🔗 [esteban-lt.github.io](https://esteban-lt.github.io)

## Stack

- [Astro](https://astro.build) (output estático)
- [Tailwind CSS](https://tailwindcss.com)
- TypeScript
- [astro-icon](https://www.astroicon.dev/) (iconos de Iconify: mdi, ri, simple-icons)
- GSAP (animación del cursor personalizado)
- [@fancyapps/ui](https://fancyapps.com/) (lightbox)

## Requisitos

- Node.js 22.x (ver `engines` en [package.json](package.json))
- npm

## Instalación

```bash
npm install
```

## Comandos

| Comando | Acción |
| --- | --- |
| `npm run dev` | Levanta el servidor de desarrollo en `http://localhost:4321` |
| `npm run build` | Verifica tipos (`astro check`) y genera el sitio estático en `dist/` |
| `npm run preview` | Sirve localmente el contenido ya generado en `dist/` (después de `build`) |
