# Resumen del proyecto

Este proyecto es un sitio web en React + Vite que muestra una tienda ficticia llamada "Faraday Fit".

## Estructura principal

- `src/main.jsx`: punto de entrada de la aplicación. Importa `index.css` y renderiza el componente `App` dentro de `#root`.
- `src/App.jsx`: componente principal de la app. Incluye:
  - `Header` para el encabezado.
  - `Navbar` para la navegación con enlaces de ancla.
  - `MainContent` que contiene el contenido principal y las secciones de la página.
  - `Footer` para el pie de página.

## Componentes clave

- `src/components/Header.jsx`:
  - Renderiza el título de la marca y la descripción principal.
- `src/components/Navbar.jsx`:
  - Muestra los enlaces de navegación.
  - Marca la sección activa según el estado `activeSection` en `App.jsx`.
- `src/components/MainContent.jsx`:
  - Es la parte esencial para el scroll horizontal.
  - Usa un contenedor `main` con clase `main-content` y `ref` para controlar el scroll.
  - Captura eventos `wheel` y convierte el desplazamiento vertical en desplazamiento horizontal.
  - Controla el cambio de sección activa al hacer scroll y al hacer clic en enlaces de ancla.
  - Contiene secciones con `id` como `inicio`, `camisetas`, `sudaderas`, `accesorios` y `contacto`.
  - Cada sección tiene `scroll-snap-align: start` y `flex: 0 0 100vw`, por lo que la página se desplaza en bloques de ancho completo.
  - Dentro de cada categoría hay un carrusel horizontal de productos usando la clase `product-carousel`.
- `src/components/Footer.jsx`:
  - Presenta un texto de pie de página y un enlace de contacto ficticio.

## Estilos importantes

- `src/App.css`:
  - Define la estructura general del layout y la navegación.
  - `main-content` está configurado con `overflow-x: auto`, `overflow-y: hidden`, `scroll-snap-type: x proximity` y `scroll-behavior: smooth`.
  - Las secciones `.hero-section`, `.products-section` y `.contact-section` usan `flex: 0 0 100vw` para obligar el desplazamiento horizontal en pantallas grandes.
- `src/index.css`:
  - Establece estilos globales.
  - `body` oculta el overflow y `#root` ocupa `100vh` y `100vw`.

## Recursos

- `src/assets/`: carpeta con imágenes usadas en el hero, productos y mapa.
- `vite.config.js` y `package.json`: configuración de Vite y dependencias del proyecto.

## Comportamiento relevante

- El sitio está diseñado para navegarse horizontalmente en la parte principal de contenido.
- El `MainContent` intercepta el scroll del ratón (`wheel`) para desplazar el contenedor horizontalmente.
- Los enlaces de navegación y botones dentro del contenido llevan a secciones específicas y actualizan el estado de sección activa.
- El diseño usa `scroll-snap` para que cada sección se alinee de forma natural al desplazarse.

## Cómo funciona

1. `main.jsx` renderiza `App`.
2. `App` mantiene la sección activa en el estado y pasa `setActiveSection` al `MainContent`.
3. `MainContent` renderiza las secciones de la página y gestiona el scroll horizontal.
4. La barra de navegación resalta el enlace correspondiente a la sección visible.

## Ejecutar el proyecto

```bash
npm install
npm run dev
```

Abre la URL que indique Vite en la terminal para ver el sitio en el navegador.
