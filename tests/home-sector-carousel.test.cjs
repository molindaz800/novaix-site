const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const script = fs.readFileSync('home-sector-carousel.js', 'utf8');

test('one industry discovery block remains and former applications links resolve to it in ES and EN', () => {
  for (const file of ['index.html', 'en/index.html']) {
    const html = fs.readFileSync(file, 'utf8');
    assert.doesNotMatch(html, /id="aplicaciones"|href="#aplicaciones"|class="usecase-card"/);
    assert.equal((html.match(/id="sectores"/g) || []).length, 1);
    assert.match(html, /<section id="casos"[\s\S]*?<\/section>\s*<section id="planes"/);
    const actions = html.match(/<div class="case-actions">([\s\S]*?)<\/div>/)?.[1];
    assert.ok(actions);
    assert.match(actions, /href="#sectores"/);
    assert.match(actions, /href="https:\/\/demo\.novaix\.es"/);
    assert.match(actions, file.startsWith('en/') ? /Solutions for your industry/ : /Soluciones para tu sector/);
  }
  for (const file of ['home-base.css', 'home-type.css']) {
    assert.doesNotMatch(fs.readFileSync(file, 'utf8'), /\.usecase(?:s|-card|-icon)\b/);
  }
});

function setup({ reduced = false, fits = false, missing = false, resizeObserver = true } = {}) {
  class Button {
    constructor() { this.attributes = {}; this.events = {}; }
    getAttribute(key) { return this.attributes[key]; }
    setAttribute(key, value) { this.attributes[key] = value; }
    addEventListener(event, callback) { this.events[event] = callback; }
  }
  const previous = new Button(), next = new Button();
  const track = {
    clientWidth: 600, scrollWidth: fits ? 600 : 1560, scrollLeft: 0,
    children: Array.from({ length: 7 }, (_, i) => ({ offsetLeft: 304 + i * 220 })), events: {}, calls: [],
    addEventListener(type, callback) { this.events[type] = callback; },
    scrollTo(options) { this.calls.push(options); this.scrollLeft = Math.max(0, Math.min(options.left, this.scrollWidth - this.clientWidth)); this.events.scroll(); }
  };
  const controls = { hidden: true, querySelector: selector => selector.includes('previous') ? previous : next };
  const events = {}, media = { matches: reduced };
  let resize;
  vm.runInNewContext(script, {
    window: { matchMedia: () => media, addEventListener: (event, callback) => { events[event] = callback; } },
    document: { getElementById: () => missing ? null : track, querySelector: () => controls },
    ResizeObserver: resizeObserver ? class { constructor(callback) { resize = callback; } observe() {} } : undefined
  });
  return { track, controls, previous, next, events, media, resize };
}

test('arrows advance to real card boundaries and stop at both ends', () => {
  const s = setup();
  assert.equal(s.controls.hidden, false);
  assert.equal(s.previous.attributes['aria-disabled'], 'true');
  s.previous.events.click(); assert.equal(s.track.calls.length, 0);
  s.next.events.click(); assert.equal(s.track.scrollLeft, 220);
  assert.equal(s.track.calls[0].behavior, 'smooth');
  assert.equal(s.previous.attributes['aria-disabled'], 'false');
  for (let i = 0; i < 10; i++) s.next.events.click();
  assert.equal(s.track.scrollLeft, 960);
  assert.equal(s.next.attributes['aria-disabled'], 'true');
  const count = s.track.calls.length;
  s.next.events.click(); assert.equal(s.track.calls.length, count);
  s.previous.events.click(); assert.equal(s.track.scrollLeft, 880);
});
test('touch and keyboard scrolling update controls without hijacking input', () => {
  const s = setup(); s.track.scrollLeft = 500; s.track.events.scroll();
  assert.equal(s.previous.attributes['aria-disabled'], 'false');
  s.previous.events.click(); assert.equal(s.track.scrollLeft, 440);
  assert.doesNotMatch(script, /preventDefault|setInterval|setTimeout|requestAnimationFrame/);
});
test('reduced motion is read at click time, including changed preferences', () => {
  const s = setup({ reduced: true });
  s.next.events.click(); assert.equal(s.track.calls[0].behavior, 'instant');
  s.media.matches = false; s.next.events.click(); assert.equal(s.track.calls[1].behavior, 'smooth');
});
test('keyboard focus reveals the whole link when tabbing backwards', () => {
  const s = setup(); s.track.scrollLeft = 960;
  s.track.events.focusin({ target: { closest: () => ({ parentElement: { offsetLeft: 1184, offsetWidth: 206 } }) } });
  assert.equal(s.track.scrollLeft, 880);
  assert.equal(s.track.calls[0].behavior, 'instant');
});
test('resize hides unnecessary controls and tolerates absent markup or ResizeObserver', () => {
  const s = setup({ fits: true }); assert.equal(s.controls.hidden, true);
  s.track.scrollWidth = 1500; s.resize(); assert.equal(s.controls.hidden, false);
  assert.doesNotThrow(() => setup({ missing: true }));
  const fallback = setup({ resizeObserver: false });
  fallback.track.scrollWidth = 600; fallback.events.resize(); assert.equal(fallback.controls.hidden, true);
});
test('ES and EN ship seven real links and lazy local photos without relying on JS', () => {
  for (const file of ['index.html', 'en/index.html']) {
    const html = fs.readFileSync(file, 'utf8');
    const block = html.match(/<div class="atlas-sectors"[\s\S]*?<\/ul>\s*<\/div>/)[0];
    assert.equal((block.match(/class="atlas-sector-card"/g) || []).length, 7);
    assert.doesNotMatch(block, /CrossFit|BAYO|NUBIAN|CARSPLUS|Ya confían|Trusted by/);
    for (const m of block.matchAll(/href="([^"]+)"/g)) assert.ok(fs.existsSync(path.resolve(path.dirname(file), m[1])), m[1]);
    for (const m of block.matchAll(/<img\b[^>]+>/g)) {
      assert.match(m[0], /loading="lazy"/); assert.match(m[0], /alt=""/);
      assert.match(m[0], /width="\d+" height="\d+"/);
      assert.ok(fs.existsSync(path.resolve(path.dirname(file), m[0].match(/src="([^"]+)"/)[1])));
    }
    assert.match(block, /class="atlas-sector-controls" hidden/);
    assert.match(block, /aria-labelledby="atlas-sectors-title"/);
    assert.match(html, /home-sector-carousel.js/);
    if (file.startsWith('en/')) {
      assert.match(block, /Solutions for your industry/);
      assert.match(block, /aria-label="Previous industries"/);
      assert.match(block, /href="landing-gimnasios.html"/);
    }
  }
});
