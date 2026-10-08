const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const source=fs.readFileSync('home-core.js','utf8');
test('chat keeps public endpoint and bounded request with no full page URLs',()=>{
 assert.match(source,/CHAT_API_URL = 'https:\/\/hooks.novaix.es\/webhook\/ai-chat'/);
 assert.match(source,/new AbortController\(\)/);
 assert.match(source,/controller.abort\(\), 30000/);
 assert.match(source,/clearTimeout\(timeout\)/);
 assert.match(source,/if \(chatBusy\) return/);
 assert.match(source,/text.length > 2000/);
 const chat=source.slice(source.indexOf('// Chat público'),source.indexOf('window.sendQuick'));
 assert.doesNotMatch(chat,/window.location.href|metadata:|N8N/);
 assert.match(chat,/language: document.documentElement.lang/);
 assert.match(chat,/err.status === 429/);
 assert.match(chat,/typeof data.reply !== 'string'/);
});
test('legal disclosure identifies the actual assistant provider',()=>{
 assert.match(fs.readFileSync('privacy/index.html','utf8'),/Asistente web de NOVAIX y Google Gemini/);
 for (const p of ['index.html','en/index.html']) assert.doesNotMatch(fs.readFileSync(p,'utf8'),/servicio n8n de NOVAIX|NOVAIX's n8n service/);
});
test('assistant replies are safe readable text, not injected HTML or raw emphasis',()=>{
 assert.match(source,/text\.replace\(\/\\\*\\\*\(\[\^\*\]\+\)\\\*\\\*\/g/);
 assert.match(source,/bubble.textContent = sender === 'bot'/);
 assert.doesNotMatch(fs.readFileSync('index.html','utf8'),/IA privada<\/span>/);
});
