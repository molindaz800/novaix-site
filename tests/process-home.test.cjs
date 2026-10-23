const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const es = fs.readFileSync('index.html','utf8');
const en = fs.readFileSync('en/index.html','utf8');
const script = fs.readFileSync('home-process.js','utf8');
function setup(language='es',valid=true) {
  const listeners={};const fields={name:'Example Person',company:'Example & Co',email:'person@example.com',process:'We prepare quotes and need a clear next action.'};
  const form={addEventListener:(n,f)=>listeners[n]=f,reportValidity:()=>valid};
  const status={textContent:''}; const location={href:'http://localhost:8080/'};
  vm.runInNewContext(script,{document:{documentElement:{lang:language},getElementById:id=>id==='process-inquiry-form'?form:status},window:{location},FormData:class{[Symbol.iterator](){return Object.entries(fields)[Symbol.iterator]();}},encodeURIComponent});
  return {listeners,fields,status,location};
}
test('enquiry prepares a fixed-destination email without claiming delivery',()=>{
  const s=setup();s.listeners.submit({preventDefault(){}});const u=new URL(s.location.href);
  assert.equal(u.protocol,'mailto:');assert.equal(u.pathname,'info@novaix.es');
  assert.match(u.searchParams.get('body'),/Example & Co/);assert.match(s.status.textContent,/Revisa y envía/);
  assert.doesNotMatch(script,/fetch\(|localStorage|sessionStorage|sendBeacon|form\.reset/);
});
test('invalid enquiry stays on the page and does not prepare an email',()=>{
  const s=setup('en',false);s.listeners.submit({preventDefault(){}});assert.equal(s.location.href,'http://localhost:8080/');assert.equal(s.status.textContent,'');
});
test('English enquiry state and message labels are adapted',()=>{
  const s=setup('en');s.listeners.submit({preventDefault(){}});const u=new URL(s.location.href);
  assert.match(u.searchParams.get('subject'),/Business process enquiry/);assert.match(s.status.textContent,/Review and send/);assert.match(u.searchParams.get('body'),/Company:/);
});
test('the hybrid home explains process before showing technical demonstrations and scoped plans',()=>{
  for(const html of [es,en]) {
    assert.match(html,/id="ejemplo"/);assert.match(html,/id="proceso"/);assert.match(html,/id="planes"/);assert.match(html,/id="proyecto"/);
    assert.match(html,/id="nx-stage"/);assert.match(html,/class="price-main"/);assert.match(html,/capacidades.html/);
    assert.ok(html.indexOf('id="proceso"') < html.indexOf('id="nx-stage"'));
    assert.match(html,/data-i18n="process.hybrid.opscontext"/);assert.match(html,/data-i18n="process.hybrid.planscope"/);
    assert.match(html,/data-i18n="process.example.label"/);assert.match(html,/data-i18n="process.example.human"/);assert.match(html,/data-i18n="process.example.measure"/);
  }
});
test('technical demonstrations and current prices remain available in both languages',()=>{
  for(const f of ['capacidades.html','en/capacidades.html']) {
    const html=fs.readFileSync(f,'utf8');assert.match(html,/id="nx-stage"/);assert.match(html,/id="seguridad"/);assert.match(html,/id="servicios"/);
    for(const p of ['299','499','999'])assert.ok(html.includes('>'+p+'€</strong>'));
    assert.match(html,/data-i18n="process.tech.demolabel"/);assert.doesNotMatch(html,/Canal cifrado|Encrypted channel/);
  }
});
test('every process copy key has one bilingual dictionary entry and fully translated output',()=>{
  const dictionary=fs.readFileSync('i18n.js','utf8');const entries=new Map();
  for(const m of dictionary.matchAll(/^\s*E\((.*)\);\s*$/gm)) {let e;try{e=JSON.parse('['+m[1]+']');}catch{continue;}if(e[3]?.startsWith('process.')){assert.ok(!entries.has(e[3]),e[3]);entries.set(e[3],e);}}
  for(const m of es.matchAll(/<(?:span|strong|small)[^>]*data-i18n="(process\.[^"]+)"[^>]*>([^<]+)</g)){
    const e=entries.get(m[1]);assert.ok(e,m[1]);assert.equal(m[2].replace(/&amp;/g,'&').replace(/&#x27;/g,"'"),e[1]);
    assert.ok(en.includes(e[2].replaceAll('&','&amp;').replaceAll('<','&lt;')) || en.includes(e[2]),m[1]);
  }
});
test('legacy reveal animations cannot hide process sections',()=>{
  assert.match(fs.readFileSync('home-core.js','utf8'),/body:not\(\.home-process\) section/);
  const css=fs.readFileSync('home-process.css','utf8');assert.match(css,/process-section\.reveal\s*\{[^}]*filter:none/);assert.match(css,/prefers-reduced-motion/);
});
test('contact has limits and does not request budget or sensitive attachments',()=>{
  for(const html of [es,en]){
    const form=html.match(/<form id="process-inquiry-form">[\s\S]*?<\/form>/)[0];
    for(const name of ['name','company','email','process'])assert.match(form,new RegExp('name="'+name+'"'));
    assert.doesNotMatch(form,/type="file"|name="budget"|name="password"/);
    assert.match(form,/minlength="20"/);assert.match(form,/role="status" aria-live="polite"/);
  }
});

// Restored depth must remain directly discoverable, not only on another page.
test('hybrid home retains full capabilities with unique destinations in ES and EN',()=>{
 for(const html of [es,en]) {
  for(const id of ['soluciones','casos','sectores','beneficios','proceso','capacidades','servicios','integraciones','seguridad','ops-hub','planes','colaboracion','metricas','proyecto']) {
   assert.equal((html.match(new RegExp('id="'+id+'"','g'))||[]).length,1,id);
  }
  assert.equal((html.match(/class="hybrid-service"/g)||[]).length,6);
  const tools=html.match(/<ul class="hybrid-tool-list">[\s\S]*?<\/ul>/)[0];
  assert.equal((tools.match(/<li>/g)||[]).length,11);
  for(const price of ['299','499','999']) assert.ok(html.includes('>'+price+'€</strong>'));
  assert.doesNotMatch(html,/149€|249€|449€|oferta temporal|temporary offer|Despliegue ágil con integración/);
  assert.match(html,/data-i18n="process.hybrid.controls"/);
 }
});
