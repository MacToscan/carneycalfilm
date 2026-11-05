# carneycalfilm

Web oficial estática de «Bélmez, la historia de Carne y Cal», de Maravilla Films. Objetivo: identidad cinematográfica, accesibilidad e indexación; estreno previsto en octubre de 2027, sin día confirmado.

- Astro 7.4.4, módulos ESM, CSS nativo. Node >=22.23.4 (`.nvmrc`: 22).
- `src/pages/`: inicio, 404 y endpoints estáticos SEO; `src/components/`: secciones; `src/layouts/`: documento; `src/content.mjs`: información/editorial; `src/seo.mjs`: metadatos; `src/site.mjs`: origen único; `public/images/`: recursos; `assets/originals/`: originales.
- Desarrollo: `npm run dev`. Compilación: `npm run build`. Vista local: `npm run preview`. Formato: `npm run format:check`. Validación SEO: `python3 scripts/check_seo.py` después de compilar. No hay suite funcional adicional.
- Dos espacios, ESM y Prettier existente. Priorizar Astro nativo; no añadir dependencias sin necesidad. No editar `dist/` directamente.
- Conservar diseño, tipografía, marca raster oficial, animaciones, vídeos y textos creativos. `PROJECT_BRIEF.md` y `README.md` contienen decisiones vigentes. Editorial provisional pendiente de aprobación.
- SEO permanente: título/descripción propios por página; canonical absoluto sin parámetros; OG/Twitter; un H1 y jerarquía coherente; alt y dimensiones; contenido/enlaces en HTML; Movie solo con datos confirmados; ninguna fecha exacta inventada.
- `SITE_URL` es un origen HTTPS configurable. Confirmar dominio antes de publicar. Añadir cada nueva página indexable a `indexablePaths`; excluir 404/duplicados; robots público abierto; no introducir noindex global. No confundir metadatos con configuración real de TLS/redirecciones del alojamiento.
- Antes de editar, revisar Git y preservar cambios previos y originales. No borrar materiales, hacer commit/push, publicar, desplegar, modificar DNS/Cloudflare ni tocar la web principal de Maravilla Films sin autorización explícita.
- Antes de desplegar: confirmar contenido y dominio; compilar y validar HTML, JSON-LD, sitemap, robots y tarjeta; revisar móvil/escritorio, menú y cartel; en alojamiento comprobar HTTPS, 301 de variantes y 404 real. Medir rendimiento público y completar Search Console según `SEO.md`.
