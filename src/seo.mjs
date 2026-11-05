import { film } from './content.mjs';

export const seo = {
  name: 'Bélmez, la historia de Carne y Cal',
  title: 'Bélmez, la historia de Carne y Cal | Película de terror 2027',
  description:
    'Descubre Bélmez, la historia de Carne y Cal, una película de terror inspirada en el misterio de las Caras de Bélmez. Sinopsis, reparto y estreno previsto en 2027.',
  image: '/images/belmez-social.jpg',
  imageAlt: 'Bélmez, la historia de Carne y Cal. Título oficial de la película.',
};

export function movieSchema(origin) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Movie',
    '@id': new URL('/#pelicula', origin).href,
    name: seo.name,
    url: new URL('/', origin).href,
    description: seo.description,
    image: new URL('/images/belmez-poster.jpg', origin).href,
    genre: 'Terror',
    inLanguage: 'es',
    director: { '@type': 'Person', name: film.director },
    actor: [
      ...film.cast.map(({ name }) => ({ '@type': 'Person', name })),
      ...film.additionalCast.map(([name]) => ({ '@type': 'Person', name })),
    ],
    productionCompany: { '@type': 'Organization', name: film.producer },
    // Octubre de 2027 es una previsión: no inventar una fecha de estreno exacta.
  };
}
