# SEO y publicación · 2026-11-05

## Auditoría inicial

Prioridad alta: no había canonical, sitemap, robots ni JSON-LD; tampoco metadatos sociales. Astro ya prerenderizaba todo el contenido y los enlaces de navegación eran HTML. No existía bloqueo noindex. Una sola página; las secciones con ancla no son páginas independientes ni entradas del sitemap.

Prioridad media: título/descripción mejorables para intención cinematográfica; H1 visual basado en lema, no en título. Imágenes con alt y dimensiones; retratos WebP y lazy loading ya presentes. Cartel de 3601 × 5400 (~824 KiB) servido completo en portada y diálogo; fondos ~396 KiB en total. No hay vídeo activo ni fuentes externas. CWV reales todavía no medibles sin publicación y tráfico.

## Cambios y archivos

- `astro.config.mjs`, `src/site.mjs`, `.env.example`: origen HTTPS único configurable y barra final consistente.
- `src/seo.mjs`, `src/layouts/BaseLayout.astro`, `src/pages/index.astro`: título/descripción específicos, canonical limpio, OG/Twitter y Movie con reparto/dirección/productora confirmados. El año es previsión facilitada por Marc; sin día de estreno inventado, reseñas ni valoraciones.
- `src/pages/sitemap.xml.ts`, `src/pages/robots.txt.ts`: generación estática nativa, una URL indexable, rastreo abierto y sin lastmod artificial.
- `src/pages/404.astro`: página de error noindex, fuera de sitemap y sin canonical al inicio. El alojamiento debe devolver estado 404 real.
- `src/components/Hero.astro`: nombre accesible completo en H1, conservando lema visible y diseño; cartel responsive. No se reescriben sinopsis ni textos creativos.
- `public/images/belmez-poster-{480,960,1440}.webp`: versiones de ~104/376/560 KiB frente a ~824 KiB. Cartel completo intacto para ampliación. El cartel del diálogo tiene carga diferida nativa para evitar descargarlo anticipadamente mientras está oculto; se conserva el original para ampliar.
- `public/images/belmez-social.jpg`: 1200 × 630, ~44 KiB, basada en la imagen de título entregada (era JPG, no PNG), adaptada mediante imagen generada y normalizada para compartir. Original intacto en `assets/originals/belmez-title-delivered.jpg`. Revisar tarjeta en plataformas antes de publicar; Instagram no garantiza tarjeta en todos sus contextos.
- `AGENTS.md`, `MEMORY.md`, este documento y `scripts/check_seo.py`: continuidad y validación.

## Palabras clave y contenidos propuestos (no publicados)

La investigación cualitativa devuelve noticias recientes de esta película para título completo y «Caras de Bélmez película», junto a resultados históricos, geográficos y de otras producciones. No hay datos verificados de volumen, dificultad, posiciones ni previsión de tráfico.

Priorizar título oficial completo y «Bélmez película», apoyados por terror, Maravilla Films, Eduardo Álvarez y reparto. «Carne y Cal película» conecta con la novela; «nueva película de las Caras de Bélmez» resulta útil en noticias reales sin repetirlo artificialmente. La página ya contiene referencias visibles a la película, novela, responsables y misterio.

Propuestas pendientes de aprobación: ficha oficial con estreno previsto; relación entre novela y película sin spoilers; nota documentada que distinga ficción del fenómeno y de las localidades; noticias reales del rodaje; página del teaser cuando exista, con transcripción y subtítulos; materiales de prensa autorizados. Crear páginas solo si hay contenido propio suficiente; títulos/metadescripciones individuales, enlaces internos y alta en `indexablePaths`. Proponer para revisión editorial un H1 visible con el nombre completo de la película; no se aplica ahora para respetar el diseño y lema aprobados.

Fuentes consultadas el 5 de noviembre de 2026:
- https://tramafilms.com/nuestros-actores-unax-ugalde-michel-tejerina-y-karra-elejalde-comienzan-el-rodaje-de-la-pelicula-belmez-la-historia-de-carne-y-cal-dirigida-por-eduardo-alvarez/ (noticia de agencia de actores sobre esta producción).
- https://www.aullidos.com/noticia/45230/caras-belmez-salto-gran-pantlala-belmez-historia-carne-cal/ (competencia editorial sobre la misma película).
- https://www.canalsur.es/rtva/comunicacion/secreto-belmez-misterio-caras_1_1161572.html (otra producción que aparece en búsquedas del fenómeno).

## Validación y límites

Compilar: `npm run build`. Formato: `npm run format:check`. Comprobar salida: `python3 scripts/check_seo.py`. En este equipo usar Node 22.23.4 de `/opt/homebrew/opt/node@22/bin` delante del PATH porque el Node predeterminado falla por una biblioteca ausente; no se ha modificado el sistema ni instalado dependencias.

Validación local no equivale a validación de Google, indexación, disponibilidad del dominio ni medición CWV. El JSON-LD identifica una película, pero no garantiza resultados enriquecidos.

## Antes de publicar y Search Console

1. Confirmar dominio definitivo. Copiar `.env.example` a `.env` y ajustar `SITE_URL` (origen HTTPS sin ruta), o pasarlo como variable al compilar (`SITE_URL=https://dominio-definitivo npm run build`); recompilar: actualiza canonical, sitemap, robots, OG y Movie conjuntamente. No desplegar este borrador accidentalmente.
2. Revisar textos provisionales, previsión de estreno y materiales con el equipo. Aprobar la tarjeta social. La newsletter sigue desactivada y no recoge datos.
3. Cuando se autorice publicar: configurar certificado HTTPS y un único host. Redirigir HTTP/hosts alternativos e `/index.html` al canonical con 301/308. No se han tocado alojamiento, DNS ni Cloudflare. Evitar fallback universal a inicio: rutas inexistentes deben devolver 404. Las previsualizaciones públicas deben protegerse con acceso del alojamiento.
4. Comprobar públicamente inicio 200, canonical del dominio final, robots/sitemap 200 con tipo correcto, imagen social 200 pública, 404 real, ausencia de X-Robots-Tag noindex o autenticación en producción. Revisar móvil/escritorio, menú, enlaces, ampliación de cartel, Search Console y validador Schema.org.
5. En Search Console, añadir propiedad de prefijo de URL del subdominio final. Verificar con la etiqueta HTML: poner el token real en `PUBLIC_GOOGLE_SITE_VERIFICATION`, recompilar y publicar con autorización. También se puede usar archivo HTML entregado por Google en `public/`. No hay token ficticio. Propiedad de dominio requiere verificación DNS manual autorizada.
6. Enviar `/sitemap.xml`; usar Inspección de URLs para probar la URL publicada y solicitar indexación del inicio. Revisar indexación y canonical elegido posteriormente; el envío no garantiza indexación ni plazo.
7. Añadir desde la web corporativa, solo en un encargo autorizado independiente, un enlace editorial a la película; alinear notas de prensa con URL/título oficial. Medir PageSpeed/CWV con URL real y datos de campo cuando existan; no se prometen puntuaciones.

Referencias técnicas: https://docs.astro.build/en/reference/configuration-reference/ · https://schema.org/Movie · https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap · https://support.google.com/webmasters/answer/9008080

## Resultado final de esta sesión

- Compilación de producción y formato: correctos con Node 22.23.4.
- `python3 scripts/check_seo.py`: correcto sobre HTML final (metadatos, canonical, Movie con 12 intérpretes, sitemap XML, robots, alt/dimensiones, archivos y anclas internas, 404 excluido).
- HTTP de vista previa: inicio 200; robots 200; sitemap 200; ruta inexistente 404. Esto no valida un alojamiento futuro.
- Revisión visual en escritorio y móvil 390 × 844: correcta, sin desbordamiento horizontal en móvil; menú abre y se cierra tras navegar a Historia; ampliación/cierre del cartel correctos. Formulario permanece desactivado como estaba previsto.
- Sin cambios en CSS, textos creativos ni fuentes editoriales existentes; sin dependencias nuevas. Diseño conservado.
- Pendientes antes de publicación: confirmar dominio, revisión editorial y tarjeta, alojamiento y pruebas públicas, Search Console y CWV de campo. No se ha solicitado indexación ni se afirma que exista.
