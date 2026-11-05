# Memoria operativa

Última actualización: 2026-11-05.

- Astro estático independiente; una página principal con secciones, 404 y endpoints sitemap/robots. Sin framework cliente ni nuevas dependencias.
- Git estaba limpio al iniciar la auditoría. Sin commit, push, publicación, DNS ni cambios en la web corporativa.
- Origen previsto, todavía NO confirmado: https://belmez.maravillafilms.com. `SITE_URL` centraliza configuración y exige HTTPS; cambiar y recompilar si varía.
- Estrategia: título completo + intención cinematográfica (película/terror/Caras de Bélmez), no competir por Bélmez genérico. No se dispone de volúmenes de búsqueda verificados.
- SEO incorporado: metadatos por página, canonical, OG/Twitter, JSON-LD Movie con responsables/reparto confirmados, sitemap/robots estáticos, 404 noindex, verificación opcional Search Console y cartel responsive. Tarjeta social basada en título entregado; conservar fuente.
- No se modifican sinopsis, lema, diseño ni contenido creativo. El H1 conserva su lema visible y añade nombre accesible de la película; el título también figura en texto visible existente. Fecha de estreno prevista en octubre de 2027; sin fecha exacta en JSON-LD.
- Pendiente: confirmar dominio, validar textos editoriales con equipo, configurar alojamiento/HTTPS/redirecciones/404, aportar teaser/foto fija y activar suscripción solo con servicio y privacidad reales.
- Próximos pasos: consultar `SEO.md`, ejecutar compilación/validación, revisar móvil/escritorio, publicar solo tras autorización; verificar Search Console, enviar sitemap, inspeccionar URL y medir CWV reales.
- Node predeterminado del equipo falla por biblioteca compartida ausente. Node alternativo funcional encontrado en `/opt/homebrew/opt/node@22/bin/node` (22.23.4); usarlo para comprobaciones sin alterar el sistema.

- Validación final: build y formato OK; comprobación SEO OK; HTTP local 200/404 correcto; revisión escritorio y móvil 390 × 844, menú y diálogo OK. `.env` admite SITE_URL; la variable del proceso prevalece. Fuentes y propuestas no publicadas documentadas en `SEO.md`.
