const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const script=fs.readFileSync('process-walkthrough.js','utf8');
function setup({reduce=false,missing=false}={}) {
 const listeners={},winListeners={};let animations=0,cancelled=0;
 function el(){return {hidden:false,disabled:false,attrs:{},events:{},textContent:'',addEventListener(n,f){this.events[n]=f;},setAttribute(n,v){this.attrs[n]=v;},removeAttribute(n){delete this.attrs[n];}};}
 const panels=Array.from({length:4},(_,i)=>Object.assign(el(),{querySelector:()=>({textContent:'Stage '+i}),querySelectorAll:()=>[{animate(){animations++;return {cancel(){cancelled++;}};}}]}));
 const steps=Array.from({length:4},el),explanations=Array.from({length:4},el),controls=el(),back=el(),next=el(),restart=el(),announcement=el();controls.hidden=true;
 const singles={'[data-walk-controls]':controls,'[data-walk-back]':back,'[data-walk-next]':next,'[data-walk-restart]':restart,'[data-walk-announcement]':announcement};
 const root={dataset:{},querySelector:q=>singles[q],querySelectorAll:q=>q==='[data-walk-panel]'?panels:q==='[data-walk-step]'?steps:explanations};
 const document={hidden:false,querySelector:()=>missing?null:root,addEventListener(n,f){listeners[n]=f;}};
 vm.runInNewContext(script,{document,window:{matchMedia:()=>({matches:reduce}),addEventListener:(n,f)=>winListeners[n]=f}});
 return {root,panels,steps,explanations,controls,back,next,restart,announcement,document,listeners,winListeners,get animations(){return animations;},get cancelled(){return cancelled;}};
}
test('initialises independently from the contact form and without autoplay',()=>{
 const s=setup();assert.equal(s.root.dataset.enhanced,'true');assert.equal(s.controls.hidden,false);assert.deepEqual(s.panels.map(p=>p.hidden),[false,true,true,true]);assert.equal(s.back.disabled,true);assert.equal(s.animations,0);assert.equal(s.announcement.textContent,'');
 assert.doesNotMatch(script,/fetch\(|setInterval|setTimeout|localStorage|innerHTML|FormData|\.focus\(/);
});
test('step selection updates one shared case and its accessible current state',()=>{
 const s=setup();s.steps[2].events.click();assert.deepEqual(s.panels.map(p=>p.hidden),[true,true,false,true]);assert.equal(s.steps[2].attrs['aria-current'],'step');assert.equal(s.steps[0].attrs['aria-current'],undefined);assert.equal(s.announcement.textContent,'3 / 4 · Stage 2');assert.equal(s.explanations[2].hidden,false);
});
test('previous, next, last state and restart preserve valid bounds',()=>{
 const s=setup();s.back.events.click();assert.equal(s.panels[0].hidden,false);s.next.events.click();s.next.events.click();s.next.events.click();assert.equal(s.next.disabled,true);assert.equal(s.restart.hidden,false);s.next.events.click();assert.equal(s.panels[3].hidden,false);s.back.events.click();assert.equal(s.panels[2].hidden,false);s.restart.events.click();assert.equal(s.panels[0].hidden,false);assert.equal(s.restart.hidden,true);
});
test('rapid changes cancel old motion; hidden page stops motion without resetting state',()=>{
 const s=setup();s.steps[1].events.click();s.steps[3].events.click();assert.equal(s.cancelled,1);s.document.hidden=true;s.listeners.visibilitychange();assert.equal(s.cancelled,2);assert.equal(s.panels[3].hidden,false);s.steps[2].events.click();assert.equal(s.animations,2);
});
test('reduced motion updates the full state without animation',()=>{
 const s=setup({reduce:true});s.steps[3].events.click();assert.equal(s.panels[3].hidden,false);assert.equal(s.animations,0);assert.equal(s.steps[3].attrs['aria-current'],'step');s.winListeners['novaix:languagechange']();assert.equal(s.announcement.textContent,'');
});
test('missing section is safe, with no dependency on another feature',()=>assert.doesNotThrow(()=>setup({missing:true})));
test('ES and EN ship the complete no-JS narrative, stable identifiers and honest review',()=>{
 for(const f of ['index.html','en/index.html']){
  const html=fs.readFileSync(f,'utf8');const block=html.match(/<section id="ejemplo"[\s\S]*?<\/section>/)[0];
  assert.equal((block.match(/data-walk-panel="/g)||[]).length,4);assert.equal((block.match(/data-walk-step="/g)||[]).length,4);assert.match(block,/data-walk-controls hidden/);assert.doesNotMatch(block,/data-walk-panel="\d"[^>]*hidden/);assert.match(block,/process.walk.disclaimer/);assert.match(block,/process.walk.3.note/);assert.match(block,f.startsWith('en/')?/Q-014/:/P-014/);
  assert.match(html,/process-walkthrough.css/);assert.match(html,/process-walkthrough.js/);
 }
});

test('walkthrough body and controls do not ship sub-12px labels',()=>{
 const css=fs.readFileSync('process-walkthrough.css','utf8');
 for(const match of css.matchAll(/font-size:\s*([.\d]+)rem/g)) assert.ok(Number(match[1])>=.75,match[0]);
 assert.match(css,/walk-stage-copy strong[^}]*font-size:\.875rem/);
});
