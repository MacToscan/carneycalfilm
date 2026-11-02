# Bélmez · web oficial en Astro

Web estática independiente con Astro 7.4.4. Node.js >=22.23.4.

## Desarrollo

`npm ci`, `npm run dev` (puerto predeterminado 4321; abrir la URL indicada en la terminal), `npm run build` (dist/) y `npm run preview` (http://127.0.0.1:4173).

Usar Node.js >=22.23.4. El archivo `.nvmrc` permite seleccionar Node 22 con `nvm use`.

Astro actualiza la vista al editar. No se utilizan frameworks de cliente, fuentes externas ni servicios de seguimiento.

## Arquitectura

- `src/pages/index.astro`: composición de la página.
- `src/layouts/BaseLayout.astro`: metadatos, navegación y pie.
- `src/components/`: marca oficial, portada, ficha y reparto.
- `src/content.mjs`: datos confirmados por PROJECT_BRIEF.md. Los ocho intérpretes principales admiten `photo`; los cuatro adicionales quedan sin fotografía.
- `src/styles.css`: estilos mobile-first, foco visible y movimiento reducido.

Teaser y foto fija muestran espacios pendientes autorizados en el borrador. Prensa contiene cuatro noticias enlazadas a sus medios. Making-of, tráiler y social se incorporarán cuando exista material.

## Identidad de la película

El nombre NO se escribe con Georgia ni con otra fuente aproximada. `FilmBrand.astro` muestra mediante una ventana SVG la región del título del propio cartel: conserva letras, proporciones, composición y textura. Es arte raster oficial, no una identificación de la fuente ni un logotipo vectorizado. Si se entrega el master transparente o vectorial, sustituir esta ventana por dicho archivo. La tipografía editorial secundaria no sustituye a la marca.

El original se conserva intacto en `assets/originals/Belmez_FinalDelivery.jpg`. La web utiliza su copia optimizada `public/images/belmez-poster.jpg`. El archivo original de Downloads permanece intacto.

Referencia de ritmo editorial: https://www.thespacebetweenfilm.com/. No se copia su código ni su identidad.

## Publicación

No se ha configurado alojamiento. No publicar, desplegar, hacer commit ni push sin autorización expresa. Antes de cualquier push, comprobar `npm run dev` y `npm run build`.

## Formato del código

Mantener sangría de dos espacios, elementos y propiedades en líneas separadas y líneas en blanco entre bloques y secciones. Evitar archivos fuente comprimidos en una sola línea.

`npm run format` aplica el formato; `npm run format:check` lo verifica. La configuración de Prettier incluye soporte para Astro. La salida de producción en `dist/` la genera Astro; editar siempre los archivos de `src/`.

## Borrador de la página completa

La ampliación del 29 de octubre incluye espacios de material pendiente autorizados por Marc. Los textos publicitarios de `editorial` en `src/content.mjs` son provisionales y deben validarse con el equipo. La página incorpora suscripción, historia, teaser, producción, reparto, equipo y prensa, con numeración 00–06.

- Teaser: asignar a `film.media.teaser` el ID del vídeo oficial de YouTube. El marco se convierte en reproductor y aparece el enlace al canal.
- Fotografías: añadir a `film.media.stills` objetos `{ src, alt, caption }` con archivos oficiales en `public/images/`. Los marcos pendientes se sustituyen automáticamente.
- Reparto: completar `photo` en los ocho intérpretes principales. Los cuatro adicionales continúan sin fotografía.
- Prensa: añadir `{ title, outlet, date, url }` a `film.media.press`. No se generan publicaciones ficticias.
- Suscripción: `newsletter.action` y `newsletter.privacyUrl` deben apuntar al servicio real y a la política definitiva. Los campos y el envío están desactivados mientras falte cualquiera de ellos. Adaptar los nombres de campos al proveedor elegido y verificar confirmación, baja y entrega antes de activar. No existe recogida local ni mensajes de éxito simulados.
- Cartel: hover, ampliación en diálogo y cierre por botón, Escape o fondo; el foco vuelve al botón original.
