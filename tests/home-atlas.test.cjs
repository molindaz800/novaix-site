const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const html = fs.readFileSync('index.html', 'utf8');
const script = fs.readFileSync('home-atlas.js', 'utf8');
function setup(search = '', withContact = true) {
  class Element {
    constructor(dataset = {}) { this.dataset = dataset; this.events = {}; this.attributes = {}; this.hidden = false; this.textContent = ''; }
    addEventListener(type, callback) { this.events[type] = callback; }
    setAttribute(name, value) { this.attributes[name] = value; }
  }
  const ids = {};
  for (const id of ['atlas-results','atlas-status']) ids[id] = new Element();
  if (withContact) ids['project-email-link'] = new Element();
  const filters = ['all','communication','integrations','software'].map(value => { const el = new Element({atlasFilter:value}); el.textContent=value; return el; });
  const entries = ['communication','integrations','software'].map(value => new Element({atlasCategory:value,atlasDefault:String(value!=='software')}));
  const interest = new Element({projectInterest:'connections'});
  const events = {};
  const window = { location: { search, href:`https://novaix.es/${search}` }, addEventListener(type,callback){events[type]=callback;}, novaixT:value=>value };
  const document = { getElementById:id=>ids[id], documentElement:{classList:{add(){}}}, querySelectorAll:selector=>selector==='[data-atlas-filter]'?filters:selector==='[data-atlas-category]'?entries:[interest] };
  vm.runInNewContext(script,{window,document,URLSearchParams});
  return {ids,filters,entries,interest,window,events};
}
test('overview and three category filters work without the retired form', () => {
  const s=setup(); assert.deepEqual(s.entries.map(e=>e.hidden),[false,false,true]);
  s.filters[1].events.click(); assert.deepEqual(s.entries.map(e=>e.hidden),[false,true,true]);
  s.filters[3].events.click(); assert.deepEqual(s.entries.map(e=>e.hidden),[true,true,false]);
  assert.equal(s.filters[3].attributes['aria-pressed'],'true');
  assert.match(s.ids['atlas-status'].textContent,/software/);
  s.filters[0].events.click(); assert.deepEqual(s.entries.map(e=>e.hidden),[false,false,true]);
});
test('missing optional email link cannot disable the atlas', () => {
  const s=setup('',false); s.filters[2].events.click();
  assert.deepEqual(s.entries.map(e=>e.hidden),[true,false,true]);
});
test('sector context enhances only the email subject and is allowlisted', () => {
  const subject=s=>new URL(s.ids['project-email-link'].attributes.href).searchParams.get('subject');
  assert.match(subject(setup('?sector=gimnasios')),/Gimnasios/);
  for(const value of ['__proto__','%3Cscript%3E','unknown%0D%0ABcc:bad@example.com']) {
    assert.equal(subject(setup(`?sector=${value}`)),'NOVAIX · Consulta de proyecto');
  }
});
test('solution selection updates a mailto without opening or sending anything', () => {
  const s=setup(); const before=s.window.location.href; s.interest.events.click();
  const url=new URL(s.ids['project-email-link'].attributes.href);
  assert.equal(url.protocol,'mailto:'); assert.equal(url.pathname,'info@novaix.es');
  assert.match(url.searchParams.get('subject'),/Conexiones entre herramientas/);
  assert.equal(url.searchParams.has('body'),false); assert.equal(s.window.location.href,before);
  assert.doesNotMatch(script,/\bfetch\(|localStorage|sessionStorage|clipboard|FormData|project-form/);
});
test('language changes refresh the selected email subject', () => {
  const s=setup('?sector=gimnasios');
  s.window.novaixT=value=>({'Consulta de proyecto':'Project inquiry','Gimnasios':'Gyms'}[value]||value);
  s.events['novaix:languagechange']();
  assert.equal(new URL(s.ids['project-email-link'].attributes.href).searchParams.get('subject'),'NOVAIX · Project inquiry · Gyms');
});
test('ES and EN remove the middle form and retain one bottom contact destination', () => {
  for(const path of ['index.html','en/index.html']) {
    const s=fs.readFileSync(path,'utf8');
    assert.doesNotMatch(s,/id="project-form"|class="atlas-contact"|Cuéntanos qué quieres hacer mejor|Tell us what you want to improve/);
    assert.match(s,/<section id="demo"[^>]*>\s*<div class="container" id="proyecto">/);
    assert.equal([...s.matchAll(/id="proyecto"/g)].length,1);
    assert.match(s,/id="project-email-link" href="mailto:info@novaix.es"/);
    assert.match(s,/<section id="proceso"[\s\S]*?<\/section>\s*<section id="capacidades"/);
    assert.match(s,/data-calendly-open/);
  }
});
test('every atlas key is unique and matches its Spanish source', () => {
  const i18n=fs.readFileSync('i18n.js','utf8'); const keys=new Map();
  for(const match of i18n.matchAll(/^\s*E\((.*)\);\s*$/gm)) {let entry;try{entry=JSON.parse(`[${match[1]}]`);}catch{continue;} if(entry[3]?.startsWith('atlas.')) {assert.ok(!keys.has(entry[3]),`duplicate ${entry[3]}`);keys.set(entry[3],entry[1]);}}
  for(const match of html.matchAll(/<span data-i18n="(atlas\.[^"]+)">([^<]+)<\/span>/g)) assert.equal(keys.get(match[1]),match[2].replace(/&amp;/g,'&'));
});
test('all sector routes retain a valid contact anchor in Spanish and English', () => {
  for(const name of fs.readdirSync('.').filter(n=>/^landing-.*\.html$/.test(n))) {
    const slug=name.slice(8,-5);
    assert.ok(fs.readFileSync(name,'utf8').includes(`index.html?sector=${slug}#proyecto`),name);
    assert.ok(fs.readFileSync(`en/${name}`,'utf8').includes(`./?sector=${slug}#proyecto`),`en/${name}`);
  }
  for(const path of ['index.html','en/index.html']) {const s=fs.readFileSync(path,'utf8'); assert.ok(s.includes('id="proyecto"')); assert.ok(s.includes('home-atlas.js'));}
});
