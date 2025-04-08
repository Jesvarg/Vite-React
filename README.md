# Proyecto React con Vite

Este es un proyecto de React utilizando Vite como bundler, con una estructura de carpetas optimizada y configuración de imports absolutos.

## Estructura del Proyecto

```
src/
  ├── components/    # Componentes de React
  ├── utils/        # Utilidades y funciones auxiliares
  ├── assets/       # Imágenes, fuentes y otros recursos
  └── main.jsx      # Punto de entrada de la aplicación
```

## Características

- ⚡️ Vite como bundler
- ⚛️ React 18
- 📁 Estructura de carpetas organizada
- 🔄 Imports absolutos configurados
- 🎨 CSS modular

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Previsualiza la versión de producción

## Configuración

El proyecto incluye configuración para imports absolutos mediante `jsconfig.json` y `vite.config.js`, permitiendo imports como:

```javascript
import Component from '@components/Component'
import { utility } from '@utils/utility'
import image from '@assets/image.png'
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
