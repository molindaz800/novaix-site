const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const css = read('home-base.css');

test('FAQ uses native details without a fixed answer height', () => {
  for (const html of [read('index.html'), read('en/index.html')]) {
    assert.match(html, /<details\s+open><summary>/);
    assert.match(html, /class="faq-content"/);
  }
  assert.doesNotMatch(css, /\.faq-content\s*\{[^}]*max-height:/);
  assert.doesNotMatch(css, /details\[open\]\s+\.faq-content\s*\{[^}]*max-height:/);
});

test('service copy stays readable without hover and controls have their own row', () => {
  const paragraph = css.match(/\.slide p\s*\{([^}]+)\}/)?.[1] || '';
  assert.doesNotMatch(paragraph, /line-clamp|max-height|overflow:\s*hidden/);
  assert.doesNotMatch(css, /\.service-block:hover p\s*\{/);
  assert.match(css, /\.slide\s*\{[^}]*padding:\s*24px 24px 76px/);
  assert.match(css, /\.carousel-arrows\s*\{[^}]*inset:\s*auto 14px 14px auto/);
  assert.match(css, /\.carousel-nav\s*\{[^}]*inset:\s*auto auto 14px 16px/);
});

test('integrations are a static accessible list without duplicated nodes', () => {
  assert.match(css, /\.integrations-track\s*\{[^}]*flex-wrap:\s*wrap/);
  assert.doesNotMatch(css, /@keyframes integrations-scroll|animation:\s*integrations-scroll/);
  assert.doesNotMatch(read('home-core.js'), /integration-item--clone/);
});

test('service icons sit beside headings without generic icon tiles', () => {
  for (const html of [read('index.html'), read('en/index.html')]) {
    assert.equal((html.match(/class="service-icon fa-solid/g) || []).length, 6);
    assert.doesNotMatch(html, /class="icon-badge"/);
  }
  assert.match(css, /\.service-icon\s*\{[^}]*grid-column:\s*1;[^}]*grid-row:\s*1/);
  assert.match(css, /\.slide h3\s*\{[^}]*grid-column:\s*2;[^}]*grid-row:\s*1/);
});

test('pricing is current and has no temporary-offer messaging in either language', () => {
  for (const html of [read('index.html'), read('en/index.html')]) {
    const plans = html.match(/<section id="planes"[\s\S]*?<\/section>/)?.[0] || '';
    assert.deepEqual([...plans.matchAll(/<div class="price-main"><small>[^<]+<\/small><strong>(\d+)€<\/strong>/g)].map(match => match[1]), ['299', '499', '999']);
    assert.doesNotMatch(plans, /oferta temporal|limited-time offer|offer-pill|price-meta/i);
  }
  assert.doesNotMatch(read('i18n.js'), /Oferta temporal|Limited-time offer/);
});

test('current design sidecar follows the approved font roles', () => {
  const design = JSON.parse(read('.impeccable/design.json'));
  const earth = design.components.find(component => component.name === 'Connected Earth heading');
  assert.ok(earth);
  assert.match(earth.css, /Instrument Sans/);
  assert.match(earth.css, /#f5f4ef/);
  assert.doesNotMatch(JSON.stringify(design.components), /Space Grotesk/);
  assert.match(design.narrative.keyCharacteristics.join(' '), /Instrument Sans 500/);
});

test('team section remains visible even when it exceeds the viewport', () => {
  for (const selector of ['.quienes-left', '.quienes-content']) {
    const rules = css.match(new RegExp(`${selector.replace('.', '\\.') }\\s*\\{([^}]+)\\}`))?.[1] || '';
    assert.ok(rules, `${selector} styles exist`);
    assert.doesNotMatch(rules, /opacity:\s*0(?:;|\s)/);
  }
  assert.doesNotMatch(read('home-core.js'), /qObs|quienes\.classList\.add\('visible'\)/);
});

test('Ops Hub does not render an empty image behind its videos', () => {
  for (const html of [read('index.html'), read('en/index.html')]) {
    assert.doesNotMatch(html, /<img[^>]*src=""/);
    assert.doesNotMatch(html, /id="nx-live-img"/);
  }
  assert.doesNotMatch(read('home-core.js'), /BLANK_IMG|liveImg/);
});

test('security controls use divided rows instead of nested cards', () => {
  const controlRules = css.match(/\.security-card\s*\{([^}]+)\}/)?.[1] || '';
  assert.match(controlRules, /border-top:\s*1px/);
  assert.doesNotMatch(controlRules, /border-radius:|background:|box-shadow:/);
  assert.match(css, /\.security-card i\s*\{[^}]*grid-row:\s*1\s*\/\s*span 2/);
});

test('typing dots only exist during an actual pending chat reply', () => {
  const js = read('home-core.js');
  assert.match(js, /function addLoadingMessage\(\)/);
  assert.match(js, /const loading = addLoadingMessage\(\);\s*try\s*\{/);
  assert.equal((js.match(/loading\.remove\(\)/g) || []).length, 2);
});

test('FAQ tracks shrink below 360px instead of clipping narrow screens', () => {
  assert.match(css, /\.faq\s*\{[^}]*grid-template-columns:\s*repeat\(auto-fit,\s*minmax\(min\(100%,\s*360px\),\s*1fr\)\)/);
});

test('mobile menu uses one stateful bilingual label handler', () => {
  for (const html of [read('index.html'), read('en/index.html')]) {
    const button = html.match(/<button class="nav-toggle"[^>]*>/)?.[0] || '';
    assert.match(button, /aria-expanded="false"/);
    assert.doesNotMatch(button, /data-inline-toggle|onclick=|ontouchstart=|data-i18n-attr-aria-label/);
  }
  const js = read('home-core.js');
  assert.match(js, /navToggle\.addEventListener\('click'/);
  assert.match(js, /const labelKey = open \? 'site\.nav\.close' : 'site\.nav\.open'/);
  assert.match(read('i18n.js'), /E\("Cerrar menú", "Cerrar menú", "Close menu", "site\.nav\.close"\)/);
});

test('active Ops Hub transmission stays within its panel on narrow screens', () => {
  for (const selector of ['.nx-tx', '.nx-tx-body', '#nx-live', '.nx-stream', '.nx-lines']) {
    const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const rules = css.match(new RegExp(`${escaped}\\s*\\{([^}]+)\\}`))?.[1] || '';
    assert.match(rules, /grid-template-columns:\s*minmax\(0,\s*1fr\)/, `${selector} must allow its grid track to shrink`);
  }
  assert.match(css, /\.nx-tx-card\s*\{[^}]*min-width:\s*0/);
  assert.match(css, /\.nx-lines\s*\{[^}]*overflow-wrap:\s*anywhere/);
});
