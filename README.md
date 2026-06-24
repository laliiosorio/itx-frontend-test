# CELUKOS

Aplicación frontend para consultar un catálogo de teléfonos móviles, ver el detalle de cada producto y añadir configuraciones de color y almacenamiento al carrito.

## Stack

- React 19
- Vite
- Tailwind CSS
- React Router
- TanStack Query
- Axios
- Vitest y Testing Library
- ESLint y Prettier

## Diseño

Para la exploración visual y definición inicial de la interfaz se usó Stitch de Google como apoyo de diseño. La implementación final está construida con React y Tailwind CSS, adaptando los componentes a las necesidades de la prueba.

## Requisitos

- Node.js 20 o superior
- npm

## Instalación

```bash
npm install
```

El proyecto incluye un `.env.example` con la URL base de la API:

```bash
API_BASE_URL=https://itx-frontend-test.onrender.com
```

Si necesitas usar otra API, crea un archivo `.env` a partir de `.env.example` y cambia el valor de `API_BASE_URL`.

## Scripts

```bash
npm run dev
```

Levanta el entorno de desarrollo.

```bash
npm run build
```

Genera la versión de producción en `dist/`.

```bash
npm run preview
```

Sirve localmente el build de producción.

```bash
npm run lint
```

Ejecuta ESLint.

```bash
npm test
```

Ejecuta los tests con Vitest.

## Estructura

| Ruta | Descripción |
| --- | --- |
| `public/` | Assets públicos como favicon e iconos. |
| `src/cart/` | Carrito, contador y API para añadir productos. |
| `src/products/` | Listado, detalle, selectores y hooks de productos. |
| `src/shared/` | API client, layout, componentes comunes y utilidades. |
| `src/App.jsx` | Componente raíz de la aplicación. |
| `src/router.jsx` | Definición de rutas. |
| `index.html` | HTML base usado por Vite. |
| `vite.config.js` | Configuración de Vite. |

## Funcionalidades

- Listado de teléfonos móviles.
- Búsqueda por marca o modelo.
- Página de detalle con especificaciones técnicas.
- Selector de color y almacenamiento.
- Añadir producto al carrito.
- Persistencia del contador del carrito en `localStorage`.
- Caché de consultas para mejorar la experiencia de navegación.
- Estados de carga, error y listado vacío.

## Ajustes de interfaz

- Los textos visibles de la aplicación están en español para evitar mezcla de idiomas.
- En móvil, el breadcrumb queda más cerca del listado y del detalle para reducir espacio vertical innecesario.
- En la página de detalle, el breadcrumb marca `Detalles` como estado actual: no es clickeable y se muestra en azul subrayado.
- En desktop, el breadcrumb tiene más separación respecto al carrito para mejorar la lectura visual del header.

## Verificación

Antes de entregar cambios, se recomienda ejecutar:

```bash
npm run lint
npm test
npm run build
```
