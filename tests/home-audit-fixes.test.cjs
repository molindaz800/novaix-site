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

test('current design sidecar follows the approved font roles', () => {
  const design = JSON.parse(read('.impeccable/design.json'));
  const earth = design.components.find(component => component.name === 'Connected Earth heading');
  assert.ok(earth);
  assert.match(earth.css, /Instrument Sans/);
  assert.match(earth.css, /#f5f4ef/);
  assert.doesNotMatch(JSON.stringify(design.components), /Space Grotesk/);
  assert.match(design.narrative.keyCharacteristics.join(' '), /Instrument Sans 500/);
});
