#!/usr/bin/env python3
"""Build the small independent Partners surface in both languages."""
from pathlib import Path
from html import escape as e
ROOT=Path(__file__).resolve().parents[1]
COPY={
'es':dict(title='Colaboradores comerciales internacionales',home='Volver a NOVAIX',language='English',other='/en/partners/',hero='Construyamos nuevas oportunidades de negocio',intro='Buscamos profesionales comerciales independientes para desarrollar alianzas B2B en Latinoamérica y Estados Unidos.',cta='Propón tu colaboración',about='Tu conocimiento del mercado. Nuestro equipo técnico',body='En NOVAIX desarrollamos software a medida, conectamos herramientas y automatizamos procesos. Buscamos personas que sepan abrir conversaciones con empresas y reconocer dónde podemos aportar valor.',terms='Una colaboración, no una oferta de empleo',details='Exploramos acuerdos independientes por comisión o fórmulas mixtas. Las condiciones, el alcance y la remuneración se acuerdan en cada caso; enviar una propuesta no garantiza una colaboración ni una retribución fija.',next='Qué ocurre después',steps=['Nos cuentas tu experiencia y los mercados donde trabajas.','Nuestro equipo revisa el encaje de tu propuesta.','Si hay una oportunidad de colaboración, contactamos contigo.'],formintro='Cuéntanos tu experiencia y cómo podríamos trabajar juntos. Los campos marcados con * son obligatorios.',name='Nombre y apellidos',email='Correo electrónico',linkedin='Perfil de LinkedIn (opcional)',markets='Países y mercados',markethelp='Por ejemplo: México, Colombia o Estados Unidos.',model='¿Qué tipo de colaboración te interesa?',options=['Selecciona una modalidad','Exclusivamente por comisión','Modelo mixto: fijo más variable','Abierto a ambas modalidades'],experience='Una oportunidad B2B que hayas generado personalmente',exphelp='Mínimo 40 caracteres. Describe el sector, cómo contactaste con el cliente y tu participación en la venta. No incluyas nombres de clientes ni información confidencial.',consent='He leído la información de privacidad y acepto enviar mi solicitud para su evaluación.',privacy='Información de privacidad',legal='NOVAIX (Daniel Molina Maquieira) utilizará estos datos para evaluar tu propuesta y contactarte sobre esta colaboración. Esta solicitud no te suscribe a comunicaciones comerciales. Puedes escribir a info@novaix.es para ejercer tus derechos.',retention='El registro técnico del formulario se elimina automáticamente a los 90 días. La correspondencia por correo se conserva durante la evaluación y, si procede, la colaboración y los plazos de responsabilidad aplicables. Consulta los detalles en nuestra política de privacidad.',send='Enviar propuesta de colaboración',fallback='¿Prefieres escribirnos directamente?',footer='Software a medida. Conexiones con sentido.',privacyfooter='Privacidad',noscript='Para enviar el formulario necesitas activar JavaScript. También puedes escribirnos a info@novaix.es.',formtitle='Propón tu colaboración',skip='Ir al formulario'),
'en':dict(title='International commercial partners',home='Back to NOVAIX',language='Español',other='/partners/',hero='Let’s build new business opportunities',intro='We are looking for independent sales professionals to develop B2B partnerships across Latin America and the United States.',cta='Propose a partnership',about='Your market knowledge. Our technical team',body='At NOVAIX, we build custom software, connect business tools and automate processes. We are looking for people who can start conversations with businesses and identify where we can add value.',terms='A partnership, not an employment offer',details='We explore independent commission-based or mixed arrangements. Scope, terms and remuneration are agreed individually; submitting a proposal does not guarantee a partnership or fixed compensation.',next='What happens next',steps=['Tell us about your experience and the markets you work in.','Our team reviews how your proposal fits.','If there is a potential partnership, we get in touch.'],formintro='Tell us about your experience and how we could work together. Fields marked * are required.',name='Full name',email='Email address',linkedin='LinkedIn profile (optional)',markets='Countries and markets',markethelp='For example: Mexico, Colombia or the United States.',model='What type of partnership interests you?',options=['Select an option','Commission only','Mixed: fixed fee plus variable remuneration','Open to either model'],experience='A B2B opportunity you personally generated',exphelp='At least 40 characters. Describe the sector, how you contacted the client and your role in the sale. Do not include client names or confidential information.',consent='I have read the privacy information and agree to submit my application for evaluation.',privacy='Privacy information',legal='NOVAIX (Daniel Molina Maquieira) will use these details to evaluate your proposal and contact you about this partnership. This application does not subscribe you to marketing communications. You can write to info@novaix.es to exercise your data rights.',retention='The technical form record is automatically deleted after 90 days. Email correspondence is retained during evaluation and, where applicable, the partnership and applicable liability periods. See our privacy policy for details.',send='Submit partnership proposal',fallback='Prefer to contact us directly?',footer='Custom software. Meaningful connections.',privacyfooter='Privacy (ES)',noscript='Please enable JavaScript to submit this form. You can also email info@novaix.es.',formtitle='Propose a partnership',skip='Skip to the form')}

def main():
 for lang,c in COPY.items():
  route='/partners/' if lang=='es' else '/en/partners/'
  home='/' if lang=='es' else '/en/'
  options=''.join(f'<option value="{v}">{e(t)}</option>' for v,t in zip(['','commission','mixed','either'],c['options']))
  steps=''.join(f'<li>{e(t)}</li>' for t in c['steps'])
  text=f'''<!doctype html>
<html lang="{lang}">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(c['title'])} | NOVAIX Partners</title>
<meta name="description" content="{e(c['intro'])}">
<link rel="canonical" href="https://novaix.es{route}">
<link rel="alternate" hreflang="es" href="https://novaix.es/partners/">
<link rel="alternate" hreflang="en" href="https://novaix.es/en/partners/">
<link rel="alternate" hreflang="x-default" href="https://novaix.es/partners/">
<meta property="og:title" content="{e(c['title'])} | NOVAIX Partners">
<meta property="og:description" content="{e(c['intro'])}">
<meta property="og:url" content="https://novaix.es{route}"><meta property="og:type" content="website">
<meta property="og:image" content="https://novaix.es/og-image.png">
<link rel="icon" href="/favicon.ico"><link rel="stylesheet" href="/partners/partners.css">
<script src="/partners/partners.js" defer></script>
</head>
<body>
<a class="skip" href="#application">{e(c['skip'])}</a>
<header class="shell masthead"><a href="{home}" aria-label="{e(c['home'])}"><img src="/imagenes/texto.webp" width="1116" height="192" alt="NOVAIX"></a><span class="division">Partners</span><nav aria-label="{'Navegación' if lang=='es' else 'Navigation'}"><a href="{home}">{e(c['home'])}</a><a href="{c['other']}" lang="{'en' if lang=='es' else 'es'}" hreflang="{'en' if lang=='es' else 'es'}">{e(c['language'])}</a></nav></header>
<main>
<section class="hero shell" aria-labelledby="heading"><div class="hero-copy"><h1 id="heading">{e(c['hero'])}</h1><p class="lead">{e(c['intro'])}</p><a class="button" href="#application">{e(c['cta'])}<svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></a></div><img class="earth" src="/imagenes/tierra-conectada.webp" width="2106" height="747" alt="" fetchpriority="high"></section>
<div class="shell application-layout">
<aside class="opportunity"><h2>{e(c['about'])}</h2><p>{e(c['body'])}</p><h3>{e(c['terms'])}</h3><p>{e(c['details'])}</p><h3>{e(c['next'])}</h3><ol>{steps}</ol><p class="direct">{e(c['fallback'])}<br><a href="mailto:info@novaix.es">info@novaix.es</a></p></aside>
<section id="application" aria-labelledby="form-title"><h2 id="form-title">{e(c['formtitle'])}</h2><p class="form-intro">{e(c['formintro'])}</p>
<form id="partner-form" data-endpoint="https://hooks.novaix.es/api/partners" method="post" action="https://hooks.novaix.es/api/partners">
<div class="field-pair"><div class="field"><label for="full-name">{e(c['name'])} *</label><input id="full-name" name="name" autocomplete="name" required maxlength="120"></div><div class="field"><label for="email">{e(c['email'])} *</label><input id="email" name="email" type="email" autocomplete="email" required maxlength="254"></div></div>
<div class="field"><label for="linkedin">{e(c['linkedin'])}</label><input id="linkedin" name="linkedin" type="url" inputmode="url" placeholder="https://www.linkedin.com/in/…" maxlength="300"></div>
<div class="field"><label for="markets">{e(c['markets'])} *</label><input id="markets" name="markets" required maxlength="240" aria-describedby="markets-help"><p class="help" id="markets-help">{e(c['markethelp'])}</p></div>
<div class="field"><label for="model">{e(c['model'])} *</label><select id="model" name="model" required>{options}</select></div>
<div class="field"><label for="experience">{e(c['experience'])} *</label><p class="help" id="experience-help">{e(c['exphelp'])}</p><textarea id="experience" name="experience" rows="5" required minlength="40" maxlength="3000" aria-describedby="experience-help"></textarea></div>
<div hidden aria-hidden="true"><label for="company-site">Company website</label><input id="company-site" name="website" tabindex="-1" autocomplete="off"></div>
<details class="privacy"><summary>{e(c['privacy'])}</summary><p>{e(c['legal'])}</p><p>{e(c['retention'])}</p><a href="/privacy/">{e(c['privacyfooter'])}</a></details>
<label class="consent"><input type="checkbox" name="consent" required><span>{e(c['consent'])} <a href="/privacy/">{e(c['privacyfooter'])}</a></span></label>
<button class="button" type="submit" disabled>{e(c['send'])}</button><p id="form-status" role="status" aria-live="polite" tabindex="-1"></p>
<noscript><p>{e(c['noscript'])}</p></noscript>
</form></section></div>
</main>
<footer class="shell"><p>NOVAIX · {e(c['footer'])}</p><a href="/privacy/">{e(c['privacyfooter'])}</a><a href="mailto:info@novaix.es">info@novaix.es</a></footer>
</body></html>
'''
  out=ROOT/route.lstrip('/')/'index.html';out.parent.mkdir(parents=True,exist_ok=True);out.write_text(text)
 sitemap=ROOT/'sitemap.xml'
 xml=sitemap.read_text()
 for route in ('/partners/','/en/partners/'):
  if f'<loc>https://novaix.es{route}</loc>' not in xml:
   row=f'  <url>\n    <loc>https://novaix.es{route}</loc>\n    <xhtml:link rel="alternate" hreflang="es" href="https://novaix.es/partners/" />\n    <xhtml:link rel="alternate" hreflang="en" href="https://novaix.es/en/partners/" />\n    <xhtml:link rel="alternate" hreflang="x-default" href="https://novaix.es/partners/" />\n  </url>\n'
   xml=xml.replace('</urlset>',row+'</urlset>')
 sitemap.write_text(xml)
if __name__=='__main__':main()
