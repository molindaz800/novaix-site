const test = require('node:test');
const assert = require('node:assert/strict');
const createPlayer = require('../ops-media.js');
function fixture() {
  const listeners = {};
  const video = {src:'', paused:true, loads:0, plays:0, error:null,
    getAttribute(k){return this[k] || null;},setAttribute(k,v){this[k]=v;},removeAttribute(k){delete this[k];},
    pause(){this.paused=true;},load(){this.loads++;},
    play(){this.plays++;this.paused=false;return Promise.resolve();},
    addEventListener(k,fn){listeners[k]=fn;}};
  const status={textContent:''};
  const control={addEventListener(k,fn){this[k]=fn;}};
  const player=createPlayer({video,status,control});
  return {video,status,control,player,listeners};
}
test('idle has no source and selecting offscreen only sets poster',()=>{
 const f=fixture();assert.equal(f.video.src,'');f.player.select('a.mp4','a.webp');
 assert.equal(f.video.src,undefined);assert.equal(f.video.poster,'a.webp');assert.equal(f.video.plays,0);
 f.player.setActive(true);assert.equal(f.video.src,'a.mp4');assert.equal(f.video.plays,1);
});
test('switch aborts prior download; one source remains',()=>{
 const f=fixture();f.player.setActive(true);f.player.select('a.mp4','a.webp');f.player.select('b.mp4','b.webp');
 assert.equal(f.video.src,'b.mp4');assert.equal(f.video.loads,4);assert.equal(f.video.poster,'b.webp');
});
test('offscreen pauses and returns without reloading',()=>{
 const f=fixture();f.player.setActive(true);f.player.select('a.mp4','a.webp');const loads=f.video.loads;
 f.player.setActive(false);assert.equal(f.video.paused,true);f.player.setActive(true);
 assert.equal(f.video.loads,loads);assert.equal(f.video.paused,false);
});
test('manual pause persists across visibility changes',()=>{
 const f=fixture();f.player.setActive(true);f.player.select('a.mp4','a.webp');f.listeners.playing();f.control.click();
 f.player.setActive(false);f.player.setActive(true);assert.equal(f.video.paused,true);
 f.control.click();assert.equal(f.video.paused,false);
});
test('error offers retry, stop removes all media',()=>{
 const f=fixture();f.player.setActive(true);f.player.select('a.mp4','a.webp');f.video.error={code:4};f.listeners.error();
 assert.equal(f.control.textContent,'Reintentar vídeo');f.video.error=null;f.control.click();assert.equal(f.video.src,'a.mp4');
 f.player.stop();assert.equal(f.video.src,undefined);assert.equal(f.video.poster,undefined);assert.equal(f.control.hidden,true);
});
test('stale rejected play cannot override newer selection',async()=>{
 const f=fixture();f.player.setActive(true);let reject;
 f.video.play=()=>new Promise((_,r)=>reject=r);f.player.select('a.mp4','a.webp');
 f.video.play=()=>Promise.resolve();f.player.select('b.mp4','b.webp');f.listeners.playing();reject(new Error('old request'));
 await Promise.resolve();assert.equal(f.status.textContent,'');assert.equal(f.control.textContent,'Pausar vídeo');
});
test('autoplay rejection has accessible play action and localized state',async()=>{
 const f=fixture();f.video.play=()=>Promise.reject(Object.assign(new Error('blocked'),{name:'NotAllowedError'}));
 f.player.setActive(true);f.player.select('a.mp4','a.webp');await Promise.resolve();
 assert.match(f.status.textContent,/Pulsa reproducir/);assert.equal(f.control.hidden,false);
});
test('buffering transitions back to playback without reloading',()=>{
 const f=fixture();f.player.setActive(true);f.player.select('a.mp4','a.webp');const loads=f.video.loads;
 f.listeners.waiting();assert.equal(f.status.textContent,'Preparando reproducción…');assert.equal(f.video['aria-busy'],'true');
 f.listeners.playing();assert.equal(f.status.textContent,'');assert.equal(f.video['aria-busy'],'false');assert.equal(f.video.loads,loads);
});
