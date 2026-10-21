(()=>{"use strict";
const d=document,root=d.documentElement,$=(s,c=d)=>c.querySelector(s),$$=(s,c=d)=>Array.from(c.querySelectorAll(s));
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ============ TESTI (lo spagnolo è nell'HTML) ============ */
const I18N={
it:{
"skip":"Vai al contenuto","aria.sections":"Sezioni","aria.lang":"Lingua","aria.open":"Apri il menu","aria.close":"Chiudi il menu","aria.menu":"Menu","aria.ribbon":"Piatti","aria.contact":"Contatti",
"nav.rest":"Ristorante","nav.menu":"Il menù","nav.reviews":"Recensioni","nav.catering":"Catering","nav.visit":"Orari e indirizzo","nav.cta":"Prenota",
"mh.sub":"Cucina fusion · Las Palmas","hero.eyebrow":"Ristorante · Las Palmas de Gran Canaria","hero.title":"Cucina fusion a due passi da <em>Las Canteras</em>",
"hero.lead":"Ingredienti, ricette e tecniche di tradizioni lontane, uniti in ogni piatto. Dal martedì al sabato, a pranzo e a cena.",
"cta.book":"Prenota un tavolo","cta.map":"Come arrivare","rating":"4,7","rating.aria":"4,7 su 5","hero.m1":"230 recensioni su Tripadvisor","hero.cue":"Scopri","st.open":"Aperto ora","st.closed":"Chiuso ora",
"ph.eyebrow":"Il ristorante","ph.title":"Come il viaggiatore del nostro logo, ogni piatto porta con sé <em>tradizioni lontane</em>.",
"ph.body":"Siamo un ristorante di cucina fusion: combiniamo ingredienti, sapori, ricette e tecniche di cottura di due o più tradizioni culinarie geograficamente e culturalmente distanti. Professionisti con anni nel settore, diamo valore alla qualità del prodotto, all'elaborazione e ai dettagli che fanno la differenza.",
"v1.t":"Prodotto","v1.d":"Selezioniamo ogni ingrediente: la qualità del prodotto è il punto di partenza.","v2.t":"Elaborazione","v2.d":"Tecnica e tempo in ogni preparazione, dal primo aperitivo al dolce.","v3.t":"Dettaglio","v3.d":"L'impiattamento, il ritmo del servizio, la tavola. I dettagli fanno la differenza.","v4.t":"Ospitalità","v4.d":"Uno staff attento che parla la tua lingua e ti accoglie come a casa.",
"ca.eyebrow":"Il menù","ca.title":"Sapori che attraversano gli <em>oceani</em>","ca.lead":"Piatti da condividere, pesce, carne e risotti che reinterpretano ricette tradizionali. Ecco alcuni di quelli che i nostri clienti ricordano di più.","dt1":"Opzioni vegetariane","dt2":"Opzioni vegane","dt3":"Opzioni senza glutine","ds.lbl":"Citati nelle recensioni","ca.note":"Il menù cambia con i prodotti di stagione. Informazioni sugli allergeni disponibili al ristorante.",
"d1":"Ceviche","d2":"Torre di melanzane","d3":"Capesante","d4":"Polpo","d5":"Risotto ai funghi e tartufo","d6":"Tartare di tonno","d7":"Arancini","d8":"Plátano macho",
"rv.eyebrow":"Recensioni","rv.title":"Le parole di chi si è già seduto alla nostra tavola","rv.count":"230 recensioni","rv.on":"su Tripadvisor","rv.guest":"Cliente","rv.swipe":"Scorri","rv.more":"Leggi tutte le recensioni su Tripadvisor",
"r1":"«Ceviche, torre di melanzane, capesante, polpo e tutti i risotti: piatti che adoro.»","r2":"«Il miglior ristorante di tutta l'isola. E un impiattamento bellissimo in ogni piatto.»","r3":"«Il miglior pasto del nostro viaggio di tre settimane alle Canarie.»","r4":"«Spettacolare qualsiasi portata. Personale multilingue, gentile e disponibile.»","r5":"«Massima professionalità, e in ogni portata una tradizione arricchita dagli aromi dell'arcipelago.»","r6":"«Ingredienti freschi e abbinamenti geniali. Il personale, eccezionale.»","r7":"«Piatti super gustosi, con un'ottima presentazione. Il risotto con funghi e tartufo era spettacolare.»","r8":"«Dopo la prima cena siamo ritornati altre due volte durante la vacanza. Bravo chef e ottimo servizio.»","r9":"«Sentirsi a casa, gusti incredibili, servizio eccellente.»",
"ct.eyebrow":"Catering ed eventi","ct.title":"La cucina che <em>viaggia</em> fino al tuo evento","ct.lead":"Matrimoni, lauree, compleanni e feste private. Portiamo la nostra cucina fusion e il nostro staff di sala ovunque tu festeggi, con la stessa cura del ristorante.",
"e1.tag":"Il grande giorno","e1.t":"Matrimoni","e1.d":"Un menù pensato per il grande giorno e uno staff di sala che accompagna ogni momento.","e2.tag":"Un traguardo da festeggiare","e2.t":"Lauree","e2.d":"Una proposta da condividere con famiglia e amici, in piedi o al tavolo.","e3.tag":"Un anno in più","e3.t":"Compleanni","e3.d":"Feste intime o grandi celebrazioni, con un menù su misura per i tuoi ospiti.",
"ev.also":"Anche","c1":"Comunioni e battesimi","c2":"Eventi aziendali","c3":"Anniversari","c4":"Cene private","sv.eyebrow":"Come lavoriamo",
"s1.t":"Ci racconti l'evento","s1.d":"Data, luogo, numero di ospiti e cosa immagini.","s2.t":"Menù su misura","s2.d":"Prepariamo una proposta e un preventivo personalizzati, con opzioni vegetariane, vegane e senza glutine.","s3.t":"Sala e servizio","s3.d":"Dirigiamo, strutturiamo e posizioniamo tutto in sala. Tu devi solo festeggiare.",
"ct.cta":"Chiedi un preventivo senza impegno","ct.copy":"Copia","copied":"Copiato","copy.sel":"Numero selezionato","ct.call":"Chiama",
"vi.eyebrow":"Orari e indirizzo","vi.title":"Ti aspettiamo a <em>Las Palmas</em>","vi.near":"Tra la spiaggia di Las Canteras e Santa Catalina.","f1":"Terrazza","f2":"Si accettano prenotazioni","f3":"Cibo da asporto","f4":"Cani ammessi",
"vi.hours":"Orari","dy1":"Lunedì","dy2":"Martedì","dy3":"Mercoledì","dy4":"Giovedì","dy5":"Venerdì","dy6":"Sabato","dy0":"Domenica","closed":"Chiuso",
"ft.tag":"Ristorante di cucina fusion a Las Palmas de Gran Canaria. Catering per matrimoni, lauree, compleanni ed eventi.","ft.cat":"Catering ed eventi","ft.rest":"Ristorante","ft.days":"Da martedì a sabato","ft.nav":"Navigazione","ft.top":"Torna su","mb.call":"Prenota",
"wa":"Ciao Lupé! Vorrei un preventivo di catering per il mio evento.","ta":"https://www.tripadvisor.it/Restaurant_Review-g187471-d21506844-Reviews-Lupe-Gran_Canaria_Canary_Islands.html"},
en:{
"skip":"Skip to content","aria.sections":"Sections","aria.lang":"Language","aria.open":"Open menu","aria.close":"Close menu","aria.menu":"Menu","aria.ribbon":"Dishes","aria.contact":"Contact",
"nav.rest":"Restaurant","nav.menu":"Menu","nav.reviews":"Reviews","nav.catering":"Catering","nav.visit":"Hours & address","nav.cta":"Book",
"mh.sub":"Fusion cooking · Las Palmas","hero.eyebrow":"Restaurant · Las Palmas de Gran Canaria","hero.title":"Fusion cooking a short walk from <em>Las Canteras</em>",
"hero.lead":"Ingredients, recipes and techniques from distant traditions, brought together in every dish. Tuesday to Saturday, lunch and dinner.",
"cta.book":"Book a table","cta.map":"Get directions","rating":"4.7","rating.aria":"4.7 out of 5","hero.m1":"230 reviews on Tripadvisor","hero.cue":"Discover","st.open":"Open now","st.closed":"Closed now",
"ph.eyebrow":"The restaurant","ph.title":"Like the traveller in our logo, every dish carries <em>distant traditions</em> with it.",
"ph.body":"We are a fusion restaurant: we combine ingredients, flavours, recipes and cooking techniques from two or more culinary traditions that are geographically and culturally far apart. Professionals with years in hospitality, we care about quality produce, careful preparation and the details that make the difference.",
"v1.t":"Produce","v1.d":"We choose every ingredient: quality produce is where it all starts.","v2.t":"Craft","v2.d":"Technique and time in every preparation, from the first canapé to dessert.","v3.t":"Detail","v3.d":"The plating, the pace of service, the table. Details make the difference.","v4.t":"Hospitality","v4.d":"An attentive team that speaks your language and makes you feel at home.",
"ca.eyebrow":"The menu","ca.title":"Flavours that cross <em>oceans</em>","ca.lead":"Sharing plates, fish, meat and risottos that reinterpret traditional recipes. Here are some of the ones our guests remember most.","dt1":"Vegetarian options","dt2":"Vegan options","dt3":"Gluten-free options","ds.lbl":"Mentioned in reviews","ca.note":"The menu changes with seasonal produce. Allergen information is available at the restaurant.",
"d1":"Ceviche","d2":"Aubergine tower","d3":"Scallops","d4":"Octopus","d5":"Mushroom and truffle risotto","d6":"Tuna tartare","d7":"Rice balls","d8":"Plantain",
"rv.eyebrow":"Reviews","rv.title":"What guests who have sat at our table say","rv.count":"230 reviews","rv.on":"on Tripadvisor","rv.guest":"Guest","rv.swipe":"Swipe","rv.more":"Read all reviews on Tripadvisor",
"r1":"“Ceviche, aubergine tower, scallops, octopus and every risotto: dishes I love.”","r2":"“The best restaurant on the whole island, with beautiful plating on every dish.”","r3":"“The best meal of our three-week trip around the Canary Islands.”","r4":"“Every course was spectacular. Multilingual, kind and attentive staff.”","r5":"“Utmost professionalism, and in every dish a tradition enriched with flavours of the islands.”","r6":"“Fresh ingredients and brilliant combinations. Wonderful staff.”","r7":"“Very tasty dishes, beautifully presented. The mushroom and truffle risotto was spectacular.”","r8":"“After the first dinner we came back twice more during our holiday. Great chef, excellent service.”","r9":"“Feeling at home: incredible flavours and excellent service.”",
"ct.eyebrow":"Catering & events","ct.title":"The kitchen that <em>travels</em> to your event","ct.lead":"Weddings, graduations, birthdays and private parties. We bring our fusion cooking and our floor team wherever you celebrate, with the same standards as in the restaurant.",
"e1.tag":"The big day","e1.t":"Weddings","e1.d":"A menu designed for the big day and a floor team with you at every moment.","e2.tag":"An achievement to celebrate","e2.t":"Graduations","e2.d":"A spread to share with family and friends, standing or seated.","e3.tag":"Another year","e3.t":"Birthdays","e3.d":"Intimate gatherings or big parties, with a menu tailored to your guests.",
"ev.also":"Also","c1":"Communions and christenings","c2":"Corporate events","c3":"Anniversaries","c4":"Private dinners","sv.eyebrow":"How we work",
"s1.t":"Tell us about your event","s1.d":"Date, venue, number of guests and what you have in mind.","s2.t":"A menu made for you","s2.d":"We prepare a personalised proposal and quote, with vegetarian, vegan and gluten-free options.","s3.t":"Room and service","s3.d":"We direct, plan and arrange the whole room. All you have to do is celebrate.",
"ct.cta":"Ask for a free, no-obligation quote","ct.copy":"Copy","copied":"Copied","copy.sel":"Number selected","ct.call":"Call",
"vi.eyebrow":"Hours & address","vi.title":"See you in <em>Las Palmas</em>","vi.near":"Between Las Canteras beach and Santa Catalina.","f1":"Terrace","f2":"Reservations accepted","f3":"Takeaway","f4":"Dogs welcome",
"vi.hours":"Opening hours","dy1":"Monday","dy2":"Tuesday","dy3":"Wednesday","dy4":"Thursday","dy5":"Friday","dy6":"Saturday","dy0":"Sunday","closed":"Closed",
"ft.tag":"Fusion restaurant in Las Palmas de Gran Canaria. Catering for weddings, graduations, birthdays and events.","ft.cat":"Catering & events","ft.rest":"Restaurant","ft.days":"Tuesday to Saturday","ft.nav":"Navigation","ft.top":"Back to top","mb.call":"Book",
"wa":"Hi Lupé! I'd like a catering quote for my event.","ta":"https://www.tripadvisor.com/Restaurant_Review-g187471-d21506844-Reviews-Lupe-Gran_Canaria_Canary_Islands.html"}
};
const ES={"copied":"Copiado","copy.sel":"Número seleccionado","st.open":"Abierto ahora","st.closed":"Cerrado ahora","wa":"¡Hola Lupé! Me gustaría un presupuesto de catering para mi evento.","ta":"https://www.tripadvisor.es/Restaurant_Review-g187471-d21506844-Reviews-Lupe-Gran_Canaria_Canary_Islands.html"};
$$("[data-i18n]").forEach(e=>{if(!(e.dataset.i18n in ES))ES[e.dataset.i18n]=e.textContent});
$$("[data-i18n-html]").forEach(e=>{ES[e.dataset.i18nHtml]=e.innerHTML});
$$("[data-i18n-aria]").forEach(e=>{const k=e.dataset.i18nAria;if(!(k in ES))ES[k]=e.getAttribute("aria-label")});
I18N.es=ES;
let lang="es";
const t=k=>(I18N[lang]&&I18N[lang][k]!=null?I18N[lang][k]:ES[k]);
function setLang(l,save){
  lang=I18N[l]?l:"es";
  $$("[data-i18n]").forEach(e=>{const v=t(e.dataset.i18n);if(v!=null&&e.textContent!==v)e.textContent=v});
  $$("[data-i18n-html]").forEach(e=>{const v=t(e.dataset.i18nHtml);if(v!=null&&e.innerHTML!==v)e.innerHTML=v});
  $$("[data-i18n-aria]").forEach(e=>{const v=t(e.dataset.i18nAria);if(v!=null)e.setAttribute("aria-label",v)});
  root.lang=lang;
  $$(".lang button").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.lang===lang)));
  const wa="https://wa.me/34634903295?text="+encodeURIComponent(t("wa"));
  $$("a[data-wa]").forEach(a=>{a.href=wa});
  const ta=$("#ta-link");if(ta)ta.href=t("ta");
  if(typeof status==="function")status();
  if(save){try{localStorage.setItem("lupe-lang",lang)}catch(e){}}
}
$$(".lang button").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.lang,true)));
let saved=null;try{saved=localStorage.getItem("lupe-lang")}catch(e){}
setLang(saved||"es",false);

/* ============ aperto ora + giorno di oggi (ora delle Canarie) ============ */
function status(){
  const st=$("[data-status]");if(!st)return;
  let wd,mins;
  try{const p=new Intl.DateTimeFormat("en-GB",{timeZone:"Atlantic/Canary",weekday:"short",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(new Date());
    wd={Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6}[p.find(x=>x.type==="weekday").value];mins=(+p.find(x=>x.type==="hour").value%24)*60+(+p.find(x=>x.type==="minute").value)}catch(e){return}
  const open=wd>=2&&wd<=6&&((mins>=780&&mins<990)||(mins>=1170&&mins<1380));
  $$(".htab tr").forEach(r=>r.classList.toggle("today",+r.dataset.day===wd));
  st.classList.toggle("open",open);$(".status-t",st).textContent=t(open?"st.open":"st.closed");
}
status();setInterval(status,60000);

/* ============ logo disegnato a pennello (SMIL) ============ */
function arm(svg){$$("animate,animateTransform",svg).forEach(a=>{const el=a.parentElement,v=a.getAttribute("values").split(";")[0];if(a.tagName==="animateTransform")el.setAttribute("transform","translate("+v+")");else el.setAttribute(a.getAttribute("attributeName"),v)})}
function draw(svg,delay){$$("animate,animateTransform",svg).forEach(a=>{try{a.beginElementAt((+a.dataset.at||0)+(delay||0))}catch(e){}})}
if(reduce){$$("svg.ink-auto").forEach(s=>{try{s.pauseAnimations();s.setCurrentTime(30)}catch(e){}})}

/* ============ comparse allo scroll ============ */
if(!reduce&&"IntersectionObserver" in window){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target;io.unobserve(el);if(el.matches("[data-draw]"))draw(el);else{el.classList.add("in");el.classList.remove("pre")}}),{rootMargin:"0px 0px -10% 0px",threshold:.01});
  $$("[data-reveal],[data-draw]").forEach(el=>{if(el.matches("[data-draw]"))arm(el);else el.classList.add("pre");io.observe(el)});
}

/* ============ nav, progresso, testata, viaggiatore ============ */
const nav=$("#nav"),prog=$(".nav-prog"),mh=$("#masthead"),hero=$("#top");
const svPath=$("#sv-path"),walker=$(".walker"),svSec=$("#catering");
const TOPS=[605.6, 602.8, 599.4, 596.1, 592.8, 590.0, 586.7, 583.9, 581.1, 577.8, 575.0, 572.2, 569.4, 566.7, 563.9, 561.1, 558.9, 556.1, 553.3, 551.1, 548.3, 546.1, 543.9, 541.7, 539.4, 537.2, 534.4, 532.2, 530.6, 528.3, 526.7, 525.6, 524.4, 523.9, 523.3, 523.9, 524.4, 526.1, 528.9, 536.1, 556.7];
let vh=innerHeight,heroH=hero.offsetHeight,maxY=1,ww=0,wh=0,svOn=false,ticking=false;
function measure(){vh=innerHeight;heroH=hero.offsetHeight;maxY=Math.max(1,root.scrollHeight-vh);const r=walker.getBoundingClientRect();ww=r.width;wh=r.height;tick()}
function frame(){
  ticking=false;
  const y=scrollY;
  const sv=svOn?svSec.getBoundingClientRect():null,pr=svOn?svPath.getBoundingClientRect():null;
  prog.style.transform="scaleX("+Math.min(y/maxY,1).toFixed(4)+")";
  nav.classList.toggle("solid",y>Math.max(40,heroH*.42-70));
  if(reduce)return;
  if(y<heroH){const k=y/heroH;mh.style.transform="translate3d(0,"+(k*-70).toFixed(1)+"px,0) scale("+(1-k*.2).toFixed(3)+")";mh.style.opacity=Math.max(0,1-k*1.9).toFixed(3)}
  if(sv&&pr){
    let p=(vh*.82-sv.top)/(sv.height*.72);p=Math.min(Math.max(p,0),1);
    const xu=40+p*860,i=Math.min(Math.floor(xu/25),TOPS.length-2),f=(xu-i*25)/25,yu=TOPS[i]+(TOPS[i+1]-TOPS[i])*f;
    const px=xu/1000*pr.width,py=(yu-518)/94*pr.height;
    walker.style.transform="translate3d("+(px-ww*.56).toFixed(1)+"px,"+(py-wh+1).toFixed(1)+"px,0)";
  }
}
function tick(){if(!ticking){ticking=true;requestAnimationFrame(frame)}}
addEventListener("scroll",tick,{passive:true});
addEventListener("resize",measure,{passive:true});
if("ResizeObserver" in window)new ResizeObserver(measure).observe(d.body);
if("IntersectionObserver" in window){new IntersectionObserver(es=>es.forEach(e=>{svOn=e.isIntersecting;tick()}),{rootMargin:"20% 0px 20% 0px"}).observe(svSec)}else{svOn=true}
requestAnimationFrame(()=>requestAnimationFrame(measure));

/* ============ voce attiva nel menu ============ */
if("IntersectionObserver" in window){
  const links=$$(".links a,.m-links a");
  const spy=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;links.forEach(a=>{a.getAttribute("href")==="#"+e.target.id?a.setAttribute("aria-current","true"):a.removeAttribute("aria-current")})}),{rootMargin:"-45% 0px -50% 0px"});
  ["top","restaurante","carta","opiniones","catering","visitanos"].forEach(id=>{const s=d.getElementById(id);if(s)spy.observe(s)});
}

/* ============ barra contatti mobile / pulsante WhatsApp ============ */
if("IntersectionObserver" in window){
  let past=false;const end=new Set();
  const upd=()=>root.classList.toggle("show-bar",past&&!end.size);
  new IntersectionObserver(([e])=>{past=!e.isIntersecting&&e.boundingClientRect.top<0;upd()}).observe($("#hero-cta"));
  const endIO=new IntersectionObserver(es=>{es.forEach(e=>e.isIntersecting?end.add(e.target):end.delete(e.target));upd()},{rootMargin:"0px 0px -15% 0px"});
  endIO.observe($("#visitanos"));endIO.observe($("#footer"));
}

/* ============ menu mobile ============ */
const menu=$("#menu"),burger=$("#burger"),mclose=$("#mclose"),mmark=$(".menu-mark",menu);
let menuT=0;
function openMenu(){
  clearTimeout(menuT);menu.hidden=false;root.classList.add("menu-open");burger.setAttribute("aria-expanded","true");
  void menu.offsetWidth;menu.classList.add("open");
  if(!reduce&&mmark){arm(mmark);draw(mmark,.35)}
  setTimeout(()=>mclose.focus({preventScroll:true}),80);
}
function closeMenu(refocus){
  menu.classList.remove("open");root.classList.remove("menu-open");burger.setAttribute("aria-expanded","false");
  menuT=setTimeout(()=>{if(!menu.classList.contains("open"))menu.hidden=true},reduce?0:850);
  if(refocus)burger.focus({preventScroll:true});
}
burger.addEventListener("click",openMenu);
mclose.addEventListener("click",()=>closeMenu(true));
$$("a",menu).forEach(a=>a.addEventListener("click",()=>{if(a.getAttribute("href").charAt(0)==="#")closeMenu(false)}));
d.addEventListener("keydown",e=>{
  if(!menu.classList.contains("open"))return;
  if(e.key==="Escape"){closeMenu(true);return}
  if(e.key==="Tab"){const f=$$("a[href],button",menu).filter(x=>x.offsetParent!==null);const a=f[0],z=f[f.length-1];if(e.shiftKey&&d.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&d.activeElement===z){e.preventDefault();a.focus()}}
});
addEventListener("resize",()=>{if(innerWidth>=1080&&menu.classList.contains("open"))closeMenu(false)},{passive:true});

/* ============ copia numero ============ */
function legacyCopy(txt){const ta=d.createElement("textarea");ta.value=txt;ta.setAttribute("readonly","");ta.style.cssText="position:fixed;top:-200px;left:0;opacity:0";d.body.appendChild(ta);ta.select();let r=false;try{r=d.execCommand("copy")}catch(e){}ta.remove();return r}
$$("[data-copy]").forEach(b=>b.addEventListener("click",()=>{
  const lbl=$("span",b),txt=b.dataset.copy;
  const show=(k,cls)=>{lbl.textContent=t(k);b.classList.add(cls);setTimeout(()=>{lbl.textContent=t("ct.copy");b.classList.remove(cls)},1800)};
  const ok=()=>show("copied","done");
  const fb=()=>{if(legacyCopy(txt))return ok();const r=d.createRange();r.selectNodeContents($("#phone-num"));const s=getSelection();s.removeAllRanges();s.addRange(r);show("copy.sel","sel")};
  if(navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(txt).then(ok,fb);else fb();
}));

$("#yr").textContent=new Date().getFullYear();

})();