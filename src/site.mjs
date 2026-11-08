import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');

// Dominio confirmado por Marc. Una sola fuente para todas las URLs.
export const siteUrl = new URL(
  process.env.SITE_URL || env.SITE_URL || 'https://belmezcarneycal.maravillafilms.com',
);
if (
  siteUrl.protocol !== 'https:' ||
  siteUrl.pathname !== '/' ||
  siteUrl.search ||
  siteUrl.hash ||
  siteUrl.username ||
  siteUrl.password
) {
  throw new Error(
    'SITE_URL debe ser un origen HTTPS sin ruta, credenciales, consulta ni fragmento.',
  );
}
export const indexablePaths = ['/'];
