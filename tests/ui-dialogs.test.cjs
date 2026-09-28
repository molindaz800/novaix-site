const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
function fixture() {
 const listeners={},attrs={},handlers={};let sync,open=false;
 const opener={isConnected:true,closest:()=>null,focus(){doc.activeElement=this;listeners.focusin?.({target:this});}};
 const dialog={inert:false,classList:{contains:()=>open},setAttribute:(k,v)=>attrs[k]=v,
   querySelectorAll:()=>items,contains:el=>items.includes(el)||el===dialog,
   addEventListener:(k,v)=>handlers[k]=v,focus(){doc.activeElement=this;}};
 const items=[0,1].map(id=>({id,disabled:false,closest:selector=>selector.includes('inert')?(dialog.inert?dialog:null):dialog,
   getClientRects:()=>[{}],focus(){if(dialog.inert)return;doc.activeElement=this;listeners.focusin?.({target:this});}}));
 const doc={activeElement:opener,querySelectorAll:()=>[dialog],addEventListener:(k,v)=>listeners[k]=v};
 vm.runInNewContext(fs.readFileSync(require.resolve('../ui-dialogs.js'),'utf8'),{document:doc,MutationObserver:class {constructor(fn){sync=fn;}observe(){}}});
 return {doc,dialog,attrs,items,opener,setOpen(v){open=v;sync();},tab(shiftKey=false){let prevented=false;handlers.keydown({key:'Tab',shiftKey,preventDefault(){prevented=true;}});return prevented;}};
}
test('closed modal starts inert and hidden to assistive technology',()=>{const f=fixture();assert.equal(f.dialog.inert,true);assert.equal(f.attrs['aria-hidden'],'true');assert.equal(f.doc.activeElement,f.opener);});
test('opening focuses first control and closing restores opener',()=>{const f=fixture();f.setOpen(true);assert.equal(f.dialog.inert,false);assert.equal(f.doc.activeElement,f.items[0]);f.setOpen(false);assert.equal(f.doc.activeElement,f.opener);assert.equal(f.dialog.inert,true);});
test('Tab and Shift+Tab stay in open modal',()=>{const f=fixture();f.setOpen(true);assert.equal(f.tab(true),true);assert.equal(f.doc.activeElement,f.items[1]);assert.equal(f.tab(),true);assert.equal(f.doc.activeElement,f.items[0]);});
test('focus outside an open modal is recovered; redundant close never steals focus',()=>{const f=fixture();f.setOpen(true);f.opener.focus();assert.equal(f.doc.activeElement,f.items[0]);f.setOpen(false);f.doc.activeElement=f.items[1];f.setOpen(false);assert.equal(f.doc.activeElement,f.items[1]);});
