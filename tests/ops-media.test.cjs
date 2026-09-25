const test = require('node:test');
const assert = require('node:assert/strict');
const createPlayer = require('../ops-media.js');
function fixture(connection) {
  const ctx = {all:[], mounted:null, playHandler:()=>Promise.resolve()};
  function make() {
    const v={id:'nx-card-video',paused:true,loads:0,plays:0,error:null,readyState:0,duration:NaN,currentTime:0,events:{},buffered:{length:0,end:()=>0},
      getAttribute(k){return this[k] ?? null;},setAttribute(k,v){this[k]=v;},removeAttribute(k){delete this[k];},
      pause(){this.paused=true;},load(){this.loads++;this.error=null;this.readyState=this.src?4:0;this.duration=this.src?8:NaN;this.buffered={length:this.src?1:0,end:()=>this.src?8:0};},
      play(){this.plays++;this.paused=false;return ctx.playHandler();},
      addEventListener(k,fn){this.events[k]=fn;},cloneNode(){return make();},replaceWith(next){assert.equal(ctx.mounted,this);ctx.mounted=next;}};
    ctx.all.push(v);return v;
  }
  ctx.mounted=make();
  const status={textContent:''};const control={addEventListener(k,fn){this[k]=fn;}};
  const player=createPlayer({video:ctx.mounted,status,control,connection});
  return {ctx,status,control,player,get video(){return ctx.mounted;},get listeners(){return ctx.mounted.events;}};
}
test('idle and offscreen selection do not download',()=>{
 const f=fixture();assert.equal(f.video.src,undefined);f.player.select('a.mp4','a.webp');
 assert.equal(f.video.src,undefined);assert.equal(f.video.poster,'a.webp');assert.equal(f.video.plays,0);
 f.player.setActive(true);assert.equal(f.video.src,'a.mp4');assert.equal(f.video.plays,1);
});
test('switch retains completed clip but only one video plays',()=>{
 const f=fixture();f.player.setActive(true);f.player.select('a.mp4','a.webp');const a=f.video;
 f.player.select('b.mp4','b.webp');assert.equal(a.paused,true);assert.equal(a.src,'a.mp4');
 assert.equal(f.video.src,'b.mp4');assert.equal(f.ctx.all.filter(v=>!v.paused).length,1);
});
test('intent prepares without playing; selection reuses that exact element and download',()=>{
 const f=fixture();f.player.prepare('a.mp4','a.webp',true);const a=f.ctx.all.find(v=>v.src==='a.mp4');
 assert.ok(a);assert.equal(a.paused,true);assert.equal(a.loads,1);
 f.player.setActive(true);f.player.select('a.mp4','a.webp');assert.equal(f.video,a);assert.equal(a.loads,1);assert.equal(a.plays,1);
});
test('return to recent agent and replay do not call load again',()=>{
 const f=fixture();f.player.setActive(true);f.player.select('a.mp4','a.webp');const a=f.video;
 f.player.select('b.mp4','b.webp');f.player.select('a.mp4','a.webp');assert.equal(f.video,a);assert.equal(a.loads,1);
 a.currentTime=5;f.player.select('a.mp4','a.webp');assert.equal(a.currentTime,0);assert.equal(a.loads,1);
});
test('cache retains at most three agents, evicting least recent',()=>{
 const f=fixture();f.player.setActive(true);
 for(const name of ['a','b','c','a','d']) f.player.select(name+'.mp4',name+'.webp');
 assert.deepEqual(f.ctx.all.filter(v=>v.src).map(v=>v.src).sort(),['a.mp4','c.mp4','d.mp4']);
 assert.equal(f.ctx.all.filter(v=>!v.paused).length,1);
});
test('cancel crossed-hover dwell avoids a download',async()=>{
 const f=fixture();f.player.prepare('a.mp4','a.webp');f.player.cancelPrepare();
 await new Promise(r=>setTimeout(r,180));assert.equal(f.ctx.all.filter(v=>v.src).length,0);
});
test('save-data and 2g suppress speculative downloads, not explicit selection',()=>{
 for(const connection of [{saveData:true},{effectiveType:'2g'},{effectiveType:'slow-2g'}]) {
 const f=fixture(connection);f.player.prepare('a.mp4','a.webp',true);assert.equal(f.ctx.all.filter(v=>v.src).length,0);
 f.player.setActive(true);f.player.select('a.mp4','a.webp');assert.equal(f.video.src,'a.mp4');}
});
test('aborts incomplete prior selection and unrelated pending preload',()=>{
 const f=fixture();f.player.setActive(true);f.player.select('a.mp4','a.webp');const a=f.video;
 f.player.prepare('b.mp4','b.webp',true);const b=f.ctx.all.find(v=>v.src==='b.mp4');
 a.buffered={length:0};b.buffered={length:0};f.player.select('c.mp4','c.webp');
 assert.equal(a.src,undefined);assert.equal(b.src,undefined);assert.equal(f.video.src,'c.mp4');
});
test('preloading does not compete with buffering active video',()=>{
 const f=fixture();f.player.setActive(true);f.player.select('a.mp4','a.webp');f.video.readyState=2;
 f.player.prepare('b.mp4','b.webp',true);assert.equal(f.ctx.all.filter(v=>v.src).length,1);
});
test('offscreen pauses; return does not reload; manual pause persists',()=>{
 const f=fixture();f.player.setActive(true);f.player.select('a.mp4','a.webp');const loads=f.video.loads;
 f.player.setActive(false);assert.equal(f.video.paused,true);f.player.setActive(true);assert.equal(f.video.loads,loads);
 f.listeners.playing();f.control.click();f.player.setActive(false);f.player.setActive(true);assert.equal(f.video.paused,true);
 f.control.click();assert.equal(f.video.paused,false);
});
test('error retry and stop release resources',()=>{
 const f=fixture();f.player.setActive(true);f.player.select('a.mp4','a.webp');f.video.error={code:4};f.listeners.error();
 assert.equal(f.control.textContent,'Reintentar vídeo');f.control.click();assert.equal(f.video.src,'a.mp4');
 f.player.prepare('b.mp4','b.webp',true);f.player.stop();assert.equal(f.ctx.all.filter(v=>v.src).length,0);assert.equal(f.control.hidden,true);
});
test('stale rejected play and old media events cannot change active state',async()=>{
 const f=fixture();f.player.setActive(true);let reject;
 f.ctx.playHandler=()=>new Promise((_,r)=>reject=r);f.player.select('a.mp4','a.webp');const a=f.video;
 f.ctx.playHandler=()=>Promise.resolve();f.player.select('b.mp4','b.webp');f.listeners.playing();reject(new Error('old request'));
 a.events.waiting();a.events.playing();await Promise.resolve();assert.equal(a.paused,true);
 assert.equal(f.status.textContent,'');assert.equal(f.control.textContent,'Pausar vídeo');
});
test('blocked autoplay offers accessible play action',async()=>{
 const f=fixture();f.ctx.playHandler=()=>Promise.reject(Object.assign(new Error('blocked'),{name:'NotAllowedError'}));
 f.player.setActive(true);f.player.select('a.mp4','a.webp');await Promise.resolve();
 assert.match(f.status.textContent,/Pulsa reproducir/);assert.equal(f.control.hidden,false);
});
test('buffering transitions to playback without reloading',()=>{
 const f=fixture();f.player.setActive(true);f.player.select('a.mp4','a.webp');const loads=f.video.loads;
 f.listeners.waiting();assert.equal(f.status.textContent,'Preparando reproducción…');assert.equal(f.video['aria-busy'],'true');
 f.listeners.playing();assert.equal(f.status.textContent,'');assert.equal(f.video['aria-busy'],'false');assert.equal(f.video.loads,loads);
});
test('a failed speculative request is retried on explicit selection',()=>{
 const f=fixture();f.player.prepare('a.mp4','a.webp',true);const a=f.ctx.all.find(v=>v.src==='a.mp4');
 a.error={code:2};f.player.setActive(true);f.player.select('a.mp4','a.webp');
 assert.equal(f.video,a);assert.equal(a.loads,2);assert.equal(a.error,null);
});
