const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const create = require('../earth-connections.js');
function setup(observer = true) {
  const classes = new Set(); const events = {}; const envEvents = {};
  let observation, reducedEvent;
  const doc = {hidden:false, addEventListener:(t,f)=>events[t]=f,removeEventListener:t=>delete events[t]};
  const reduced = {matches:false,addEventListener:(t,f)=>reducedEvent=f,removeEventListener:()=>{reducedEvent=null;}};
  const host = {ownerDocument:doc,classList:{toggle:(n,on)=>on?classes.add(n):classes.delete(n)}};
  const env = {matchMedia:()=>reduced,addEventListener:(t,f)=>envEvents[t]=f,removeEventListener:t=>delete envEvents[t]};
  if(observer) env.IntersectionObserver = class {constructor(f){observation=f;}observe(){}unobserve(){}disconnect(){observation=null;}};
  const instance=create(host,env);
  return {classes,doc,reduced,events,envEvents,instance,intersect:on=>observation([{isIntersecting:on}]),motion:()=>reducedEvent()};
}
test('starts static and only animates while visible',()=>{
 const s=setup();assert.equal(s.classes.has('earth-running'),false);
 s.intersect(true);assert.equal(s.classes.has('earth-running'),true);
 s.intersect(false);assert.equal(s.classes.has('earth-running'),false);
 s.intersect(true);assert.equal(s.classes.has('earth-running'),true);
});
test('hidden documents and reduced motion stop and restore appropriately',()=>{
 const s=setup();s.intersect(true);s.doc.hidden=true;s.events.visibilitychange();assert.equal(s.classes.size,0);
 s.doc.hidden=false;s.events.visibilitychange();assert.equal(s.classes.size,1);
 s.reduced.matches=true;s.motion();assert.equal(s.classes.size,0);
 s.reduced.matches=false;s.motion();assert.equal(s.classes.size,1);
});
test('page lifecycle and teardown do not leak running animation',()=>{
 const s=setup();s.intersect(true);s.envEvents.pagehide();assert.equal(s.classes.size,0);
 s.envEvents.pageshow();assert.equal(s.classes.size,0);s.intersect(true);assert.equal(s.classes.size,1);
 s.instance.destroy();assert.equal(s.classes.size,0);assert.deepEqual(s.events,{});assert.deepEqual(s.envEvents,{});
});
test('missing observer or hero is safe and static',()=>{
 assert.equal(create(null,{}),null);const s=setup(false);assert.equal(s.classes.size,0);s.instance.destroy();
});
test('ES and EN use one shared scene and no old canvas, hero video or replacement logo',()=>{
 for(const path of ['index.html','en/index.html']){
  const s=fs.readFileSync(path,'utf8');
  const hero=s.slice(s.indexOf('class="container hero'),s.indexOf('</header>'));
  assert.match(hero,/viewBox="0 0 2106 747"/i);assert.match(hero,/width="2106" height="747"/);
  assert.equal((hero.match(/class="earth-track"/g)||[]).length,5);
  assert.equal((hero.match(/class="earth-signal"/g)||[]).length,5);
  assert.match(hero,/data-earth-art aria-hidden="true"/);
  assert.doesNotMatch(hero,/<video|<canvas|studio-wordmark|studio-identity/);
  assert.doesNotMatch(s,/src="planet-space.js/);
  assert.match(s,/earth-connections.js/);assert.match(s,/home-earth.css/);
  assert.match(s,/imagenes\/texto.webp/);
 }
});
test('animation CSS is paused by default, reduced-motion safe, and uses no media network calls',()=>{
 const css=fs.readFileSync('home-earth.css','utf8');const js=fs.readFileSync('earth-connections.js','utf8');
 assert.match(css,/infinite paused/);assert.match(css,/prefers-reduced-motion/);
 assert.match(css,/\.earth-running/);assert.match(css,/aspect-ratio: 2106 \/ 747/);
 assert.doesNotMatch(js,/\bfetch\(|requestAnimationFrame|setInterval|setTimeout|localStorage/);
});
test('Spain beacon and both incoming routes share the corrected Iberian anchor in ES and EN',()=>{
 for(const path of ['index.html','en/index.html']){
  const html=fs.readFileSync(path,'utf8');
  const beacon=html.match(/<g class="earth-node" data-earth-location="spain"[^>]*>(.*?)<\/g>/s)?.[1];
  assert.ok(beacon,`${path}: named Spain beacon`);
  assert.equal((beacon.match(/cx="1875" cy="266"/g)||[]).length,2);
  assert.equal((html.match(/1875 266" pathLength="100"/gi)||[]).length,6);
  assert.doesNotMatch(html,/1812 272|cx="1812" cy="272"/);
 }
});
test('Earth hero reaches viewport edges with a fluid reading inset independent of page containers',()=>{
 const css=fs.readFileSync('home-earth.css','utf8');
 const hero=css.match(/\.home-earth \.hero\.earth-hero\s*\{([^}]+)\}/)?.[1];
 const copy=css.match(/\.home-earth \.earth-copy-shell\s*\{([^}]+)\}/)?.[1];
 assert.match(hero,/width: 100%/);assert.match(hero,/margin: 0;/);
 assert.doesNotMatch(hero,/var\(--container\)|100vw/);
 assert.match(copy,/width: 92%/);assert.match(copy,/margin-inline: auto/);
 assert.doesNotMatch(copy,/var\(--container\)/);
 assert.doesNotMatch(css,/linear-gradient\(270deg/,'no artificial right-edge fade');
});
