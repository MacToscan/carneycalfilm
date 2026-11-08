import { stills } from './stills.mjs';

// Fuente editorial: PROJECT_BRIEF.md. No publicar material pendiente.
export const film = {
  title: 'Bélmez',
  subtitle: 'La historia de Carne y cal',
  director: 'Eduardo Álvarez',
  writers: 'Ignacio Malagón y Máximo Bonatti',
  author: 'Dídac Toscano Martín',
  producer: 'Maravilla Films',
  cinematographer: 'Piter Fot',
  composer: 'Rafael Fernández',
  cast: [
    ['Karra Elejalde', 'Garrido'],
    ['Unax Ugalde', 'Julián'],
    ['Sandra Escacena', 'Claudia'],
    ['Paula Muñoz', 'Ángela'],
    ['Helena Ezquerro', 'Anna'],
    ['Michel Tejerina', 'Pablo'],
    ['Pol Forment', 'Nico'],
    ['Merche Montilla', 'Teresa'],
  ].map(([name, role], index) => ({
    name,
    role,
    photo:
      '/images/cast/' +
      [
        'karra-elejalde',
        'unax-ugalde',
        'sandra-escacena-oficial',
        'paula-munoz',
        'helena-ezquerro',
        'michel-tejerina-oficial',
        'pol-forment',
        'merche-montilla',
      ][index] +
      '.webp',
    photoWidth: [474, 474, 800, 257, 474, 800, 400, 474][index],
    photoHeight: [711, 711, 1200, 385, 663, 1200, 400, 632][index],
  })),
  additionalCast: [
    ['Julián Valcárcel', 'Ricardo'],
    ['Alexandra Olmo', 'Alba'],
    ['Héctor Naranjo', 'Manuel'],
    ['Nacho Guerreros', 'Leo'],
  ],
  // Material pendiente: se muestran espacios de espera autorizados para este borrador.
  media: {
    teaser: null,
    trailer: null,
    stills,
    makingOf: [],
    press: [
      {
        outlet: 'MónTerrassa',
        title: 'Terrassa acull el rodatge d’un film de terror sobre les cares de Bélmez',
        date: '2026-11-01',
        url: 'https://monterrassa.cat/cultura/terrassa-acull-rodatge-film-terror-sobre-cares-belmez-540578/',
      },
      {
        outlet: 'Diario Jaén',
        title:
          'Bélmez: la historia de carne y cal, un largometraje de terror con grandes rostros conocidos',
        date: '2026-11-01',
        url: 'https://www.diariojaen.es/cultura/belmez-la-historia-de-carne-y-cal-un-largometraje-de-terror-con-grandes-rostros-conocidos-MO11687856',
      },
      {
        outlet: 'Jaén Hoy',
        title:
          'Las Caras de Bélmez llegan al cine: el misterio más famoso de Jaén tendrá su propia película de terror',
        date: '2026-10-31',
        url: 'https://www.jaenhoy.es/ocio/caras-belmez-cine-pelicula-rodaje_0_2008379764.html',
      },
      {
        outlet: 'Aullidos',
        title:
          'Las Caras de Belmez dan el salto a la gran pantalla en «Belmez: La Historia de Carne y Cal»',
        date: '2026-10-29',
        url: 'https://www.aullidos.com/noticia/45230/caras-belmez-salto-gran-pantlala-belmez-historia-carne-cal/',
      },
      {
        outlet: 'Abandomoviez',
        title:
          'Los misteriosos rostros de Bélmez llegan al cine con una película de terror que comienza hoy su rodaje',
        date: '2026-10-29',
        url: 'https://www.abandomoviez.net/noticia.php?film=47444',
      },
      {
        outlet: 'El Blog de Cine Español',
        title:
          'La película «Bélmez, la historia de carne y cal» en rodaje con producción de Abismo Caracol ¡Exclusiva!',
        date: '2026-10-27',
        url: 'https://www.elblogdecineespanol.com/?p=85301',
      },
    ],
    social: [],
  },
};

// Textos de trabajo solicitados por Marc: pendientes de revisión con el equipo.
export const editorial = {
  status: 'draft',
  hook: 'Las paredes nunca están vacías.',
  pitch: 'Una herencia. Un viaje de amigos. Una casa que no quiere dejarte salir.',
  storyHeading: 'Las caras de Bélmez, en la gran pantalla.',
  synopsis: [
    'Julián recibe una herencia inesperada. Un viaje con sus amigos parece la oportunidad de volver a poner las cosas en su sitio.',
    'Pero no todo es lo que parece. En la casa que los espera, las paredes esconden algo. Y algunos secretos no permanecen en silencio para siempre.',
  ],
};

// Activar únicamente con un servicio real y la política de privacidad definitiva.
export const newsletter = { action: null, privacyUrl: null };
// teaser: ID de YouTube. stills: [{ src, alt, caption }].
// press: [{ title, outlet, date: 'YYYY-MM-DD', url }].
