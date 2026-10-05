const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

test('about labels retain intrinsic centered sizing rather than stretching with their grid row', () => {
  const css = read('home-base.css');
  const content = css.match(/\.quienes-content\s*\{([^}]+)\}/)?.[1];
  const badges = css.match(/\.quienes-badges\s*\{([^}]+)\}/)?.[1];
  const badge = css.match(/\.q-badge\s*\{([^}]+)\}/)?.[1];
  assert.match(content, /align-content:\s*center/);
  assert.match(badges, /flex-wrap:\s*wrap/);
  assert.match(badges, /align-items:\s*center/);
  assert.match(badge, /display:\s*inline-flex/);
  assert.match(badge, /align-items:\s*center/);
  assert.match(badge, /justify-content:\s*center/);
  assert.doesNotMatch(badge, /(?:^|;)\s*(?:min-|max-)?height:|white-space:\s*nowrap/);
  for (const file of ['index.html', 'en/index.html']) {
    const group = read(file).match(/<div class="quienes-badges">([\s\S]*?)<\/div>/)?.[1];
    assert.equal((group.match(/class="q-badge"/g) || []).length, 4);
    assert.doesNotMatch(group, /<button|<a\s|tabindex=/);
  }
});

test('both homepages use local critical font assets and the shared role stylesheet', () => {
  for (const file of ['index.html', 'en/index.html']) {
    const html = read(file);
    assert.match(html, /home-type\.css/);
    assert.equal((html.match(/as="font"/g) || []).length, 2);
    assert.doesNotMatch(html, /fonts\.googleapis\.com|Oxanium|Space\+Grotesk/);
    assert.match(html, /fonts\/instrument-sans-medium-latin\.woff2/);
    assert.match(html, /fonts\/inter-roman-latin\.woff2/);
    assert.match(html, /<h3 class="calendar-session-title">/);
    assert.doesNotMatch(html, /font-weight:\s*(?:[789]00|1000)/);
  }
});

test('hero copy has two natural-language phrases without a terminal period and localized CTA', () => {
  const es = read('index.html');
  const en = read('en/index.html');
  for (const html of [es, en]) {
    assert.equal((html.match(/class="earth-title-line"/g) || []).length, 2);
    assert.doesNotMatch(html, /data-i18n="earth.title.end"/);
  }
  assert.match(es, />Tu forma de trabajar,<\/span>/);
  assert.match(es, />convertida en software<\/span>/);
  assert.match(es, />Cuéntanos cómo trabajas<\/span>/);
  assert.match(en, />The way you work,<\/span>/);
  assert.match(en, />built into software<\/span>/);
  assert.match(en, />Tell us how you work<\/span>/);
});

test('homepage headings have no terminal periods while supporting sentences retain punctuation', () => {
  for (const file of ['index.html', 'en/index.html']) {
    const html = read(file);
    for (const heading of html.matchAll(/<h[1-6]\b[^>]*>([\s\S]*?)<\/h[1-6]>/g)) {
      const text = heading[1].replace(/<[^>]+>/g, '').trim();
      assert.ok(!text.endsWith('.'), `${file}: ${text}`);
    }
    assert.match(html, /class="subtitle"[\s\S]*?\.<\/span>/);
  }
});

test('floating homepage navigation has a complete rounded boundary and equal inner insets', () => {
  const css = read('home-atlas.css');
  const rules = css.match(/\.home-atlas \.nav\s*\{([^}]+)\}/)?.[1] || '';
  assert.match(rules, /top:\s*16px/);
  assert.match(rules, /padding:\s*12px;/);
  assert.match(rules, /border:\s*1px solid var\(--border\)/);
  assert.match(rules, /border-radius:\s*16px/);
  const mobile = css.match(/\.home-atlas \.nav, \.home-atlas \.nav\.nav--open\s*\{([^}]+)\}/)?.[1] || '';
  assert.match(mobile, /padding:\s*12px;/);
  assert.match(mobile, /border-radius:\s*16px/);
  assert.doesNotMatch(mobile, /border-inline:\s*0|border-top:\s*0/);
});

test('display/UI roles are centralized, accessible and reflow on mobile', () => {
  const css = read('home-type.css');
  for (const token of ['--font-display', '--font-body', '--font-editorial', '--type-hero', '--type-body']) assert.ok(css.includes(token));
  assert.match(css, /font-display:\s*swap/);
  assert.match(css, /size-adjust:/);
  assert.match(css, /--type-body:\s*1rem/);
  assert.match(css, /\.earth-title-line\s*\{\s*display:\s*inline/);
  assert.doesNotMatch(css, /white-space:\s*nowrap/);
  assert.doesNotMatch(css, /font-weight:\s*[789]00|Oxanium|Orbitron|Rajdhani/);
  assert.doesNotMatch(css, /\.earth-scene|\.earth-art|\.earth-connections|@keyframes/);
});

test('only two small licensed WOFF2 files are shipped, with source provenance', () => {
  const sources = JSON.parse(read('fonts/SOURCES.json'));
  assert.equal(sources.length, 2);
  let bytes = 0;
  for (const source of sources) {
    const buffer = fs.readFileSync(path.join(root, source.file));
    assert.equal(buffer.subarray(0, 4).toString(), 'wOF2');
    assert.equal(buffer.length, source.bytes);
    assert.match(source.source, /^https:\/\/fonts\.gstatic\.com\//);
    bytes += buffer.length;
  }
  assert.ok(bytes < 65000);
  for (const name of ['instrument-sans', 'inter']) assert.match(read(`fonts/${name}-OFL.txt`), /SIL OPEN FONT LICENSE/);
});
