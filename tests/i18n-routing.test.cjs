const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const code = fs.readFileSync(require.resolve('../i18n.js'), 'utf8');
function page(href, stored='en', language='en-US', blocked=false) {
  let ready, redirected;
  const location = new URL(href);
  const storage = new Map(stored ? [['novaix_language', stored]] : []);
  const document = {readyState:'loading',body:null,title:'NOVAIX',documentElement:{},
    addEventListener(name,fn){if(name==='DOMContentLoaded')ready=fn;},
    querySelector(){return null;},querySelectorAll(){return [];},getElementById(){return null;}};
  location.replace = target => {redirected=target;};
  const window = {location,dispatchEvent(){},history:{replaceState(_s,_t,target){location.href=target;}}};
  vm.runInNewContext(code, {window,document,URL,URLSearchParams,CustomEvent:class{},navigator:{language},
    localStorage:{getItem:k=>{if(blocked)throw Error('disabled');return storage.get(k)||null;},setItem:(k,v)=>{if(blocked)throw Error('disabled');storage.set(k,v);}}});
  const initialLanguage=window.novaixGetLanguage();
  ready();return {window,document,storage,redirected,initialLanguage};
}
test('explicit ES overrides stored EN without a reload loop and preserves hash/query',()=>{
 const f=page('https://novaix.es/landing-peluquerias.html?lang=es&utm_source=test#sistema');
 assert.equal(f.redirected,undefined);assert.equal(f.document.documentElement.lang,'es');
 assert.equal(f.window.location.href,'https://novaix.es/landing-peluquerias.html?utm_source=test#sistema');
 assert.equal(f.storage.get('novaix_language'),'es');
});
test('legacy EN navigates to its static counterpart',()=>{
 const f=page('https://novaix.es/landing-academias.html?lang=en','es','es');
 assert.equal(f.redirected,'https://novaix.es/en/landing-academias.html');assert.equal(f.storage.get('novaix_language'),'en');
});
test('legacy ES on EN route persists before changing path',()=>{
 const f=page('https://novaix.es/en/?lang=es');assert.equal(f.redirected,'https://novaix.es/');assert.equal(f.storage.get('novaix_language'),'es');
});
test('explicit EN path wins over stored ES',()=>{const f=page('https://novaix.es/en/','es','es');assert.equal(f.document.documentElement.lang,'en');assert.equal(f.redirected,undefined);});
test('canonical Spanish routes remain Spanish despite stored English or browser language',()=>{
 for(const route of ['/', '/landing-transporte.html','/landing-facebook.html']) {
  const f=page('https://novaix.es'+route,'en','en-US');
  assert.equal(f.redirected,undefined);assert.equal(f.document.documentElement.lang,'es');
 }
});
test('clean English browser without storage does not auto-redirect a Spanish URL',()=>{
 const f=page('https://novaix.es/landing-transporte.html',null,'en-US');
 assert.equal(f.redirected,undefined);assert.equal(f.document.documentElement.lang,'es');
});
test('query ES works with unavailable storage on Spanish route',()=>{const f=page('https://novaix.es/?lang=es','en','en',true);assert.equal(f.document.documentElement.lang,'es');assert.equal(f.redirected,undefined);});
test('invalid query does not overwrite preference',()=>{const f=page('https://novaix.es/?lang=fr','es');assert.equal(f.document.documentElement.lang,'es');assert.equal(f.storage.get('novaix_language'),'es');});

test('English path is English before DOMContentLoaded and extra translations register',()=>{
 const f=page('https://novaix.es/en/landing-transporte.html','es','es');
 assert.equal(f.initialLanguage,'en');assert.equal(f.document.documentElement.lang,'en');
});
