# Portafolio de Christian Julio C. Zilman

Portafolio profesional de **Christian Julio C. Zilman**, Senior Full Stack .NET Software Engineer con foco en backend, microservicios, sistemas distribuidos, AWS y React.

[Ver portafolio online](https://christianzilman.github.io/mi-portafolio/) · [LinkedIn](https://www.linkedin.com/in/christian-zilman-4187aa47) · [GitHub](https://github.com/christianzilman)

## Contenido

- Perfil profesional y datos de contacto.
- Más de 12 años de experiencia en FinTech, TravelTech y desarrollo de software.
- Stack técnico organizado por backend, frontend, bases de datos, cloud y DevOps.
- Casos de proyectos con contexto, contribución, arquitectura, tecnologías y capturas.
- CV descargable desde el sitio.
- Diseño responsive y navegación por rutas compatible con GitHub Pages.

## Tecnologías

- React 19 y TypeScript.
- Vite 8.
- Tailwind CSS 4.
- React Router.
- Lucide React y React Icons.
- ESLint.

## Desarrollo local

Requisitos: Node.js y npm.

```bash
git clone https://github.com/christianzilman/mi-portafolio.git
cd mi-portafolio
npm install
npm run dev
```

Vite mostrará en la terminal la URL local del servidor de desarrollo.

## Comandos disponibles

```bash
npm run dev      # Inicia el entorno de desarrollo
npm run build    # Valida TypeScript y genera la versión de producción
npm run lint     # Ejecuta ESLint
npm run preview  # Previsualiza localmente la versión de producción
```

## Estructura principal

```text
src/
├── assets/       # Imágenes, capturas y CV
├── components/   # Secciones y componentes de interfaz
├── data/         # Perfil, experiencia, habilidades y proyectos
├── pages/        # Páginas del portafolio
└── router/       # Rutas y loaders
```

Los datos profesionales están separados de la interfaz para facilitar su actualización:

- `src/data/profile.ts`: perfil y enlaces de contacto.
- `src/data/experience.ts`: experiencia laboral.
- `src/data/skills.ts`: tecnologías y habilidades.
- `src/data/projects.ts`: proyectos y casos de estudio.

## Despliegue

El proyecto está configurado con la ruta base `/mi-portafolio/` para su publicación en GitHub Pages. La compilación de producción se genera con:

```bash
npm run build
```

El resultado queda disponible en `dist/`.

## Contacto

- GitHub: [@christianzilman](https://github.com/christianzilman)
- LinkedIn: [christian-zilman-4187aa47](https://www.linkedin.com/in/christian-zilman-4187aa47)
- Email: [christianzilman@gmail.com](mailto:christianzilman@gmail.com)

---

Desarrollado por Christian Julio C. Zilman.
