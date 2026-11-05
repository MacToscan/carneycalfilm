"""Verifica la salida estática, sin red ni dependencias externas. Ejecutar después de build."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
import json
import xml.etree.ElementTree as ET

root = Path(__file__).resolve().parents[1]
dist = root / 'dist'
class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.tags = []
        self.json_ld = []
        self.in_json = False
        self.feed(path.read_text())
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.tags.append((tag, attrs))
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.in_json = True
    def handle_endtag(self, tag):
        if tag == 'script':
            self.in_json = False
    def handle_data(self, data):
        if self.in_json:
            self.json_ld.append(json.loads(data))
    def meta(self, key):
        return [a.get('content') for t, a in self.tags if t == 'meta' and (a.get('name') == key or a.get('property') == key)]

home = Page(dist / 'index.html')
error = Page(dist / '404.html')
canonical = [a['href'] for t, a in home.tags if t == 'link' and a.get('rel') == 'canonical']
assert len(canonical) == 1
origin = canonical[0]
assert urlparse(origin).scheme == 'https' and urlparse(origin).path == '/'
assert home.meta('robots') == ['index, follow']
assert error.meta('robots') == ['noindex, follow']
assert not [a for t, a in error.tags if t == 'link' and a.get('rel') == 'canonical']
assert home.meta('og:url') == [origin]
assert home.meta('twitter:card') == ['summary_large_image']
for key in ['description', 'og:title', 'og:description', 'og:image', 'twitter:title', 'twitter:description', 'twitter:image']:
    assert len(home.meta(key)) == 1 and home.meta(key)[0], key
assert home.meta('og:image') == home.meta('twitter:image')
image = urlparse(home.meta('og:image')[0])
assert image.scheme == 'https' and image.netloc == urlparse(origin).netloc
assert (dist / image.path.lstrip('/')).is_file()
assert home.meta('og:image:width') == ['1200'] and home.meta('og:image:height') == ['630']
assert len([t for t, a in home.tags if t == 'h1']) == 1
assert len(home.json_ld) == 1
movie = home.json_ld[0]
assert movie['@type'] == 'Movie' and movie['@context'] == 'https://schema.org'
assert movie['url'] == origin and len(movie['actor']) == 12
assert movie['director']['name'] == 'Eduardo Álvarez'
assert movie['productionCompany']['name'] == 'Maravilla Films'
assert 'datePublished' not in movie and 'aggregateRating' not in movie
locations = [e.text for e in ET.parse(dist / 'sitemap.xml').findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
assert locations == [origin]
robots = (dist / 'robots.txt').read_text()
assert 'Allow: /' in robots and 'Disallow:' not in robots
assert 'Sitemap: ' + origin + 'sitemap.xml' in robots
ids = {a['id'] for t, a in home.tags if 'id' in a}
for tag, attrs in home.tags:
    if tag == 'img':
        assert 'alt' in attrs and attrs.get('width') and attrs.get('height'), attrs
    for key in ['src', 'href']:
        value = attrs.get(key, '')
        if value.startswith('#'):
            assert value[1:] in ids, value
        elif value.startswith('/') and not value.startswith('//'):
            path = dist / value.lstrip('/')
            assert path.exists(), value
    if tag == 'img' and 'srcset' in attrs:
        for variant in attrs['srcset'].split(','):
            assert (dist / variant.strip().split()[0].lstrip('/')).is_file()
print('SEO OK: HTML, canonical, metadatos, Movie, sitemap, robots, imágenes, enlaces y 404.')
