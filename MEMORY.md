# Memoria operativa

Última actualización: 2026-11-08.

- Astro estático independiente; una página principal con secciones, 404 y endpoints sitemap/robots. Sin framework cliente ni nuevas dependencias.
- Git estaba limpio al iniciar la auditoría. Sin commit, push, publicación, DNS ni cambios en la web corporativa.
- Origen confirmado por Marc: https://belmezcarneycal.maravillafilms.com. `SITE_URL` centraliza configuración y exige HTTPS; cambiar y recompilar si varía.
- Estrategia: título completo + intención cinematográfica (película/terror/Caras de Bélmez), no competir por Bélmez genérico. No se dispone de volúmenes de búsqueda verificados.
- SEO incorporado: metadatos por página, canonical, OG/Twitter, JSON-LD Movie con responsables/reparto confirmados, sitemap/robots estáticos, 404 noindex, verificación opcional Search Console y cartel responsive. Tarjeta social basada en título entregado; conservar fuente.
- No se modifican sinopsis, lema, diseño ni contenido creativo. El H1 conserva su lema visible y añade nombre accesible de la película; el título también figura en texto visible existente. Fecha de estreno prevista en octubre de 2027; sin fecha exacta en JSON-LD.
- Pendiente: confirmar dominio, validar textos editoriales con equipo, configurar alojamiento/HTTPS/redirecciones/404, aportar teaser/foto fija y activar suscripción solo con servicio y privacidad reales.
- Próximos pasos: consultar `SEO.md`, ejecutar compilación/validación, revisar móvil/escritorio, publicar solo tras autorización; verificar Search Console, enviar sitemap, inspeccionar URL y medir CWV reales.
- Node predeterminado del equipo falla por biblioteca compartida ausente. Node alternativo funcional encontrado en `/opt/homebrew/opt/node@22/bin/node` (22.23.4); usarlo para comprobaciones sin alterar el sistema.

- Validación final: build y formato OK; comprobación SEO OK; HTTP local 200/404 correcto; revisión escritorio y móvil 390 × 844, menú y diálogo OK. `.env` admite SITE_URL; la variable del proceso prevalece. Fuentes y propuestas no publicadas documentadas en `SEO.md`.

- Prensa ampliada el 2026-11-05: MónTerrassa (2026-11-01, título original en catalán) y Abandomoviez (2026-10-29), con enlaces y fechas contrastados. Se conservan las cuatro noticias anteriores y el orden por fecha descendente. Sin publicación.

- 2026-11-06: nueve fotografías oficiales incorporadas desde fija1–fija9. Originales intactos en `assets/originals/stills/`; WebP de galería y JPEG de ampliación (máximo 2400 px) en `public/images/stills/`; datos/alt/dimensiones en `src/stills.mjs`, importados por `src/content.mjs`.
- `ProductionStills.astro`: dos collages asimétricos de 5 y 4 imágenes (primer grupo fija7,2,9,3,5; segundo fija6,4,8,1). Sin recortes, filtros ni imágenes generadas. Cambio manual con deslizamiento e interferencia de cinta de 500 ms; respeta movimiento reducido. Altura estable para los controles. En móvil, dos columnas escalonadas.
- Visor modal nativo con foto completa, navegación circular por las nueve, botones y flechas de teclado, cierre por Escape/botón y retorno del foco. Sin JavaScript se muestran ambos collages con enlaces directos a las imágenes. Sin nuevas dependencias ni publicación.
- Validación de galería: build, formato y SEO correctos; comprobación visual 1440 × 1000 y 390 × 844, cambio entre composiciones, ampliación de la seleccionada, navegación, Escape y ancho móvil correctos. Imágenes web ~3,7 MB en total; originales ~208 MB.

- Ajuste posterior 2026-11-06: Imágenes, Equipo y Teaser ocupan el alto disponible bajo la cabecera en escritorio/tablet (ancho >700 px, alto >=480 px); títulos, espacios y collage escalan según viewport. Collages completos y controles dentro de la sección; vídeo siempre 16:9. En móvil, altura natural y espacios reducidos sin recortar fotos. Transición ampliada de 500 a 1100 ms (480 ms salida + 620 ms entrada). Verificado en 1280×720, 1280×600, 1024×768, 820×1180 y 390×844; build/formato/SEO OK.

## Estado vigente · 2026-11-08

- Web publicada en Cloudflare Pages: https://belmezcarneycal.maravillafilms.com. Según Marc, Search Console confirma que el inicio se puede indexar y se ha solicitado su indexación; no equivale a indexación completada.
- Contacto e Instagram mediante enlaces externos; no hay formulario de suscripción. Galería y ampliaciones WebP (~2,22 MB); nueve originales de rodaje conservados localmente y excluidos de Git. Estas notas sustituyen las previsiones anteriores sobre dominio, galería y suscripción.
- Ya existía `/sitemap.xml`; faltaba `/sitemap-index.xml`. Añadido índice XML estático con endpoint nativo de Astro que referencia el sitemap existente, sin dependencias nuevas. `robots.txt` anuncia el índice y permite el rastreo público. Corrección publicada en main mediante bbb7921.
- Única página pública indexable: `/`. 404 excluido y noindex; las secciones son anclas. Verificados dominio definitivo en sitemap, canonical, Open Graph, Twitter y Movie. `astro.config.mjs` usa `siteUrl.href`; no necesita cambios.
- Validación: npm ci, formato, build y check_seo.py (ampliado para validar índice) correctos; ambos XML generados en dist y HTTP local 200 para los XML y robots mediante servidor estático temporal de dist. La sesión antigua de Astro preview devolvía 500 tras reinstalar dependencias; no se utiliza para validar.
- Sin cambios en diseño, textos, imágenes o funcionalidades de la página ni en la web principal de Maravilla Films.
- Comprobación pública previa: Cloudflare devuelve 403 a peticiones automatizadas de ambos XML; robots responde 200 con reglas administradas por Cloudflare. No se modifica su configuración. Volver a comprobar tras desplegar; si persiste 403, revisar reglas de seguridad en Cloudflare.
- Enviar a Search Console: https://belmezcarneycal.maravillafilms.com/sitemap-index.xml. Marc autoriza publicar la corrección en main para activar el despliegue automático.

## Galería ampliada · 2026-11-13 (local, sin publicar)

- Añadidas 18 fotos entregadas por Marc a las 9 existentes: 27 en total. Nuevas versiones WebP a 1920, 960 y 240 px (grande, mediana y miniatura); originales de 17,35 MB conservados sin cambios en assets/originals/stills, excluidos de Git. Nuevos WebP ~4,76 MB en conjunto.
- Foto protagonista sin recortes, miniaturas horizontales, contador individual, flechas y transición breve de interferencia; navegación táctil y con teclado, movimiento reducido, cuadrícula desplegable Ver todas, visor modal nativo con Escape y retorno del foco. Sin avance automático. Sin JavaScript, las miniaturas/cuadrícula enlazan a los WebP completos.
- Validación en navegador: escritorio 1440×1000, móviles 390×844 y 375×667; 27 fotos, selección, navegación circular, cuadrícula, visor, cierre y ausencia de desbordamiento horizontal correctos. Formato, build y check_seo.py correctos. Originales comparados mediante SHA-256. Sin commit ni push.
