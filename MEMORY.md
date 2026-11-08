# Memoria operativa

Última actualización: 2026-11-06.

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
