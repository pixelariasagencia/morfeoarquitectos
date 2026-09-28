# Morfeo Arquitectos

Sitio de demostración en Astro para un estudio de arquitectura en Duitama, Boyacá.

## Desarrollo

```sh
npm install
npx astro dev --background
```

Para gestionar el servidor en segundo plano: `npx astro dev status`, `npx astro dev logs` y `npx astro dev stop`.

## Producción

```sh
npm run build
```

Las imágenes originales del sitio están en `public/images/` en formato WebP. El contenido del portafolio y sus imágenes son **conceptuales y ficticios**; no deben presentarse como obras construidas ni como encargos de clientes reales. La información de contacto aún requiere datos reales antes de publicar el sitio.

El componente de imágenes usa `srcset` para servir versiones WebP de 320, 640, 960 y 1280 px según el ancho de pantalla. Si se reemplaza una imagen original, regenera sus tamaños con `npm run images:optimize` antes de compilar.

Los botones de contacto y el formulario abren WhatsApp. El número `573000000000` en `src/data/site.ts` es solo una muestra; debe cambiarse por un número real con cuenta activa antes de publicar. El formulario prepara el mensaje en el navegador y no guarda datos en el sitio.
