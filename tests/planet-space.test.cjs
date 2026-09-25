const test=require('node:test');
const assert=require('node:assert/strict');
const create=require('../planet-space.js');
function fixture({reduced=false,width=700}={}) {
 const queue=new Map(), nodes=[], handlers={}, classes=new Set();let next=0,intersection,size,draws=0;
 const ctx={clearRect(){draws++;},beginPath(){},arc(){},fill(){},setTransform(){}};
 const media={matches:reduced,addEventListener(k,f){this.change=f;},removeEventListener(){}};
 const doc={hidden:false,documentElement:{lang:'es'},createElement(tag){const n={tag,textContent:'',setAttribute(){},getContext(){return ctx;},addEventListener(k,f){this[k]=f;},remove(){this.removed=true;}};nodes.push(n);return n;},addEventListener(k,f){handlers[k]=f;},removeEventListener(k){delete handlers[k];}};
 const env={devicePixelRatio:3,matchMedia(){return media;},requestAnimationFrame(f){queue.set(++next,f);return next;},cancelAnimationFrame(id){queue.delete(id);},addEventListener(k,f){handlers[k]=f;},removeEventListener(k){delete handlers[k];},IntersectionObserver:class{constructor(f){intersection=f;}observe(){}disconnect(){}},ResizeObserver:class{constructor(f){size=f;}observe(){}disconnect(){}}};
 const host={ownerDocument:doc,querySelector(){return null;},appendChild(){},classList:{toggle(c,on){if(on)classes.add(c);else classes.delete(c);}},getBoundingClientRect(){return {width,height:400};}};
 const player=create(host,env);
 return {player,doc,media,nodes,queue,classes,handlers,get draws(){return draws;},visible(on){intersection([{isIntersecting:on}]);},step(t){const callbacks=[...queue.values()];queue.clear();callbacks.forEach(f=>f(t));}};
}
test('starts only when visible; caps resolution',()=>{const f=fixture();assert.equal(f.queue.size,0);assert.equal(f.nodes[0].width,1050);f.visible(true);assert.equal(f.queue.size,1);assert.ok(f.classes.has('space-running'));f.visible(false);assert.equal(f.queue.size,0);assert.ok(!f.classes.has('space-running'));});
test('reduced motion is static including preference changes',()=>{const f=fixture({reduced:true});f.visible(true);assert.equal(f.queue.size,0);f.media.matches=false;f.media.change();assert.equal(f.queue.size,1);f.media.matches=true;f.media.change();assert.equal(f.queue.size,0);});
test('hidden tab cancels animation',()=>{const f=fixture();f.visible(true);f.doc.hidden=true;f.handlers.visibilitychange();assert.equal(f.queue.size,0);f.doc.hidden=false;f.handlers.visibilitychange();assert.equal(f.queue.size,1);});
test('render rate is bounded and pause has no pending draw',()=>{const f=fixture();f.visible(true);const initial=f.draws;f.step(0);f.step(16);assert.equal(f.draws,initial);f.step(50);assert.equal(f.draws,initial+1);f.visible(false);f.step(5000);assert.equal(f.draws,initial+1);});
test('decoration adds no button and resumes only one loop',()=>{const f=fixture();assert.deepEqual(f.nodes.map(n=>n.tag),['canvas']);f.visible(true);f.visible(true);assert.equal(f.queue.size,1);f.visible(false);f.visible(true);assert.equal(f.queue.size,1);});
test('destroy removes resources and listeners',()=>{const f=fixture();f.visible(true);f.player.destroy();assert.equal(f.queue.size,0);assert.ok(f.nodes.every(n=>n.removed));assert.equal(Object.keys(f.handlers).length,0);});
