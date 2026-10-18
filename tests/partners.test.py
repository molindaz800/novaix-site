import importlib.util
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
import unittest
ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('partners',ROOT/'scripts/generate-partners.py')
g=importlib.util.module_from_spec(spec);spec.loader.exec_module(g)
class Markup(HTMLParser):
 def __init__(self,text):super().__init__();self.tags=[];self.feed(text)
 def handle_starttag(self,t,a):self.tags.append((t,dict(a)))
class Tests(unittest.TestCase):
 def test_build_idempotent(self):
  paths=[ROOT/'partners/index.html',ROOT/'en/partners/index.html',ROOT/'sitemap.xml'];before=[p.read_bytes() for p in paths];g.main();self.assertEqual(before,[p.read_bytes() for p in paths])
 def test_routes_assets_and_labels(self):
  for route in ('partners','en/partners'):
   tags=Markup((ROOT/route/'index.html').read_text()).tags
   ids={a['id'] for _,a in tags if 'id' in a}
   for tag,a in tags:
    if tag=='label':self.assertIn(a.get('for'),ids) if 'for' in a else None
    for key in ('src','href'):
     url=a.get(key,'');path=urlsplit(url).path
     if path.startswith('/'):self.assertTrue((ROOT/path.lstrip('/')).exists(),path)
   names={a.get('name') for t,a in tags if t in ('input','select','textarea')}
   self.assertTrue({'name','email','linkedin','markets','model','experience','consent','website'}<=names)
   self.assertEqual(sum(t=='h1' for t,_ in tags),1)
   self.assertTrue(any(t=='button' and 'disabled' in a for t,a in tags))
 def test_no_personal_storage_or_third_party_forms(self):
  source=(ROOT/'partners/partners.js').read_text()
  self.assertNotIn('localStorage.',source);self.assertNotIn('sessionStorage.',source)
  self.assertIn("data.status !== 'received'",source);self.assertIn("credentials:'omit'",source)
 def test_home_and_sitemap(self):
  self.assertIn('href="/partners/"',(ROOT/'index.html').read_text())
  self.assertIn('href="/en/partners/"',(ROOT/'en/index.html').read_text())
  for route in ('/partners/','/en/partners/'):
   self.assertIn('<loc>https://novaix.es'+route+'</loc>',(ROOT/'sitemap.xml').read_text())
if __name__=='__main__':unittest.main()
