import importlib.util, json, re, unittest
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('generator',ROOT/'scripts/generate-en-pages.py')
g=importlib.util.module_from_spec(spec);spec.loader.exec_module(g)
class Markup(HTMLParser):
    def __init__(self,text):
        super().__init__();self.tags=[];self.copy=[];self.raw=0;self.in_head=False;self.links_in_head=[];self.feed(text)
    def handle_starttag(self,t,a):
        self.tags.append((t,dict(a)))
        if t=='head':self.in_head=True
        if t=='link' and self.in_head:self.links_in_head.append(dict(a))
        if t in ('style','script','svg'):self.raw+=1
        for k,v in a:
            if k in g.TRANSLATABLE_ATTRS and v:self.copy.append(v)
    def handle_endtag(self,t):
        if t=='head':self.in_head=False
        if t in ('style','script','svg'):self.raw-=1
    def handle_data(self,d):
        if not self.raw and d.strip():self.copy.append(d.strip())
class BuildTests(unittest.TestCase):
    def test_all_landing_routes_have_english_counterparts(self):
        self.assertEqual(set(g.PAGES),{p.name for p in ROOT.glob('landing-*.html')}|{'index.html'})
        for page in g.PAGES:
            self.assertTrue((ROOT/'en'/page).is_file(),page)
    def test_new_page_copy_is_translated_including_attributes(self):
        neutral=re.compile(r'^(?:https?:|#|width=|website$|summary_large_image$|NOVAIX|Online$|info@novaix.es$|[\d\W]+$|[<]?60s$)')
        for page in g.PAGES[10:]:
            es=Markup((ROOT/page).read_text());en=Markup((ROOT/'en'/page).read_text())
            for text in es.copy:
                if neutral.search(text):continue
                self.assertTrue(g.normalize(text) in g.TRANSLATIONS,(page,text))
                self.assertNotIn(text,en.copy,(page,text))
    def test_canonicals_and_hreflang_inside_head(self):
        for page in g.PAGES:
            for lang,base,canonical in [('es',ROOT,g.es_url(page)),('en',ROOT/'en',g.en_url(page))]:
                tags=Markup((base/page).read_text()).links_in_head
                self.assertEqual([t['href'] for t in tags if t.get('rel')=='canonical'],[canonical])
                self.assertEqual({t.get('hreflang') for t in tags if t.get('rel')=='alternate'},{'es','en','x-default'})
    def test_asset_and_internal_page_references(self):
        for page in g.PAGES:
            for base in [ROOT,ROOT/'en']:
                for tag,attrs in Markup((base/page).read_text()).tags:
                    for key in ('src','href','data-src','poster'):
                        url=attrs.get(key,'');parts=urlsplit(url)
                        if not url or url.startswith('#') or parts.scheme or parts.netloc:continue
                        path=unquote(parts.path)
                        target=ROOT/path.lstrip('/') if path.startswith('/') else base/path
                        self.assertTrue(target.exists(),f'{base/page}: {url}')
    def test_sitemap_preserves_legal_and_adds_all_locales(self):
        xml=(ROOT/'sitemap.xml').read_text()
        for fn in (g.es_url,g.en_url):
            for page in g.PAGES:self.assertIn(f'<loc>{fn(page)}</loc>',xml)
        for path in ('privacy','terms','data-deletion'):self.assertIn(f'<loc>https://novaix.es/{path}/</loc>',xml)
    def test_no_eager_presentation_video_or_duplicate_preview(self):
        for base in [ROOT,ROOT/'en']:
            tags=Markup((base/'index.html').read_text()).tags
            video=next(a for t,a in tags if a.get('id')=='novaix-presentation-video')
            self.assertNotIn('src',video);self.assertEqual(video['preload'],'none');self.assertIn('muted',video)
            self.assertFalse(any('novaix-presentacion.mp4' in a.get('src','') for t,a in tags))
            self.assertEqual(next(t for t,a in tags if a.get('id')=='chat-fab'),'button')
    def test_build_is_idempotent(self):
        files=[ROOT/page for page in g.PAGES]+[ROOT/'en'/page for page in g.PAGES]+[ROOT/'sitemap.xml']
        before={p:p.read_bytes() for p in files}
        g.main()
        self.assertTrue(all(p.read_bytes()==data for p,data in before.items()))
    def test_no_punctuation_translation(self):
        self.assertEqual(g.translate_text("."),".")

    def test_generator_preserves_absolute_home_link(self):
        self.assertEqual(g.rewrite_url_for_en('/'),'./')
        self.assertEqual(g.rewrite_url_for_en('home-core.js'),'../home-core.js')
    def test_svg_self_closing_paths_remain_siblings_in_english(self):
        renderer=g.EnglishRenderer("index.html")
        renderer.feed('<svg viewBox="0 0 20 20"><path d="M0 0H20"/><path d="M0 10H20"/></svg>')
        rendered="".join(renderer.out)
        self.assertIn('d="M0 0H20"/>', rendered)
        self.assertIn('d="M0 10H20"/>', rendered)

if __name__=='__main__':unittest.main()
