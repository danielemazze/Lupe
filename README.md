# Lupé · sito web — pacchetto di consegna

Sito one page del ristorante **Lupé** (cocina fusión, Calle del Doctor Miguel Rosas 8, 35007 Las Palmas de Gran Canaria), con una sezione dedicata al **catering**.
Versione online: https://danielemazze.github.io/lupe/ (GitHub Pages, cartella `docs/` del branch `main`). Versione precedente: https://lupe.bejadam-bb.workers.dev/ (Cloudflare Workers).

Sito statico puro: niente framework, niente build, niente dipendenze esterne a runtime. Si modifica direttamente `docs/`.

---

## 1. Contenuto del pacchetto

```
docs/                     ← è il sito pubblicato: si carica così com'è su Cloudflare
  index.html              pagina unica (HTML + CSS inline + sprite SVG del logo e dei disegni)
  assets/js/site.js       tutto il JavaScript (traduzioni IT/EN, menu, animazioni, stato "aperto ora")
  assets/fonts/           font self-hosted (woff2) + licenze OFL
  assets/brand/           logo SVG
  404.html                pagina "non trovata" con logo
  _headers                header HTTP di Cloudflare (sicurezza + cache) — vedi §6
  favicon.ico/.svg, apple-touch-icon.png, icon-*.png, site.webmanifest
  og-image.png            immagine di anteprima per WhatsApp/Facebook (1200×630)
  robots.txt, sitemap.xml
brand/                    materiali grafici per chi lavora al sito
  lupe-logo.svg           logo vettoriale (ricavato dal PNG originale)
  logo-source/            PNG originale del cliente + parti vettoriali del logo (JSON)
  disegni-ingredienti-*.svg  i disegni a tratto (symbol SVG) usati nel sito
  fonts/                  copie dei font
  og-image.png, favicon.svg, icon-512.png
```

## 2. Identità visiva

| Elemento | Valore |
|---|---|
| Colore scuro (marchio) | `#151D1E` — `--ink` |
| Azzurro (marchio) | `#98D7E5` — `--sky` |
| Azzurro scuro per testo su chiaro | `#1D5F6E` — `--sky-ink` (contrasto AA) |
| Fondo chiaro | `#F8F6F1` lino (`--linen`) con grana di carta; bianco `#FFFFFF` |
| Nome "Lupé" | **Combo** (font del logo) — solo per il nome, mai per altri testi |
| Titoli | **Outfit** (variabile 100–900) — scelto dal cliente perché più leggibile |
| Testo | **Figtree** 400/500/600 |

Tutti i colori sono variabili CSS nel blocco `:root` all'inizio dello `<style>` di `index.html`.
Il sito ha un solo tema (chiaro con sezioni scure), voluto.

**Logo:** è inline come sprite (`<symbol>`/`<path id="lp-full">` ecc.) ed è riusato ovunque con `<use href="#lp-full">`. Il logo è scomposto in 3 parti — `#lp-line` (linea d'orizzonte), `#lp-ring` (cerchio), `#lp-fig` (viaggiatore) — per l'animazione "disegnato a pennello" in apertura e per i motivi grafici (sottolineature, cerchietti, omino che cammina nella sezione catering).

**Tema "cibo + tocco siciliano"** (richiesto dal cliente):
- disegni a mano di ingredienti (`<symbol id="f-…">`, tratto `currentColor`, si disegnano con `stroke-dasharray` + `pathLength="1"`);
- carta impaginata come menù stampato, recensioni come comande, orari su lavagna;
- maioliche blu: fascia tra catering e orari, angoli del menù, trama leggera nella fascia azzurra. **Il cliente ha chiesto di non aggiungerne altre.**

## 3. Struttura della pagina (ancore)

1. `#top` — apertura: logo animato, "Cocina fusión a dos pasos de Las Canteras", Reservar / Cómo llegar, voto, stato aperto/chiuso
2. fascia azzurra con i piatti che scorrono
3. `#restaurante` — filosofia e valori
4. `#carta` — piatti citati nelle recensioni (non è la carta completa)
5. `#opiniones` — 9 recensioni reali (Tripadvisor + Google)
6. `#catering` — tipi di evento, come lavorano, preventivo
7. `#visitanos` — indirizzo, orari, servizi
8. footer

## 4. Testi e lingue

- Lo **spagnolo** è scritto direttamente nell'HTML.
- **Italiano e inglese** sono nel dizionario `I18N` all'inizio di `assets/js/site.js`.
- Ogni testo traducibile ha un attributo: `data-i18n="chiave"` (testo), `data-i18n-html` (testo con `<em>`), `data-i18n-aria` (etichette accessibili).
- **Per aggiungere un testo:** scrivilo in spagnolo nell'HTML con un `data-i18n` nuovo, poi aggiungi la stessa chiave in `it:{}` ed `en:{}`.
- La lingua scelta si ricorda in `localStorage` (`lupe-lang`). Le versioni IT/EN **non sono indicizzate da Google** (vedi roadmap).
- Il messaggio precompilato di WhatsApp e il link a Tripadvisor cambiano con la lingua (chiavi `wa` e `ta`).

## 5. Dati di contatto e orari

| | |
|---|---|
| Prenotazioni ristorante | +34 928 22 96 03 (`tel:+34928229603`) |
| Catering / WhatsApp | +34 634 903 295 (`tel:+34634903295`, `wa.me/34634903295`) |
| Orari | mar–sab 13:00–16:30 e 19:30–23:00, dom e lun chiuso |

Gli orari sono in **tre punti**, da tenere allineati se cambiano:
1. la tabella in `#visitanos` (`index.html`);
2. la funzione `status()` in `site.js` (minuti 780–990 e 1170–1380, giorni 2–6, fuso `Atlantic/Canary`);
3. il JSON-LD `openingHoursSpecification` nel `<head>`.

## 6. Pubblicazione e regole tecniche importanti

**Deploy GitHub Pages:** ogni push su `main` che modifica `docs/` aggiorna il sito in un paio di minuti. Su GitHub Pages `_headers` non viene applicato.

**Deploy Cloudflare (opzionale):** Cloudflare → Workers & Pages → progetto esistente → nuova versione → carica il contenuto di `docs/` (anche zippato). Valgono `_headers` e `404.html`.

**Content-Security-Policy (`_headers`) — attenzione:**
- È rigida: script, font, immagini e connessioni solo dal dominio stesso.
- L'unico script inline è `<script>document.documentElement.classList.add('js')</script>`, autorizzato con il suo hash sha256 nella CSP. Se lo modifichi, o aggiungi altri script inline, **ricalcola l'hash o la pagina perde il JavaScript**.
- Per aggiungere immagini esterne, Google Maps embed, analytics o un widget di prenotazione, aggiungi i domini in `img-src`, `script-src`, `frame-src` e `connect-src`.
- **Foto:** mettile in `docs/assets/img/` (stesso dominio), così non serve toccare la CSP.

**Cache:**
- I font hanno nomi con hash e cache "immutable" di un anno: se cambi un font, cambia il nome del file.
- `site.js` ha cache di un'ora.
- `index.html` non è in cache (header Cloudflare di default).

**URL assoluti da aggiornare quando arriva il dominio definitivo:** `<link rel="canonical">`, `og:url`, `og:image`, `twitter:image` in `index.html`, più `robots.txt` e `sitemap.xml`. Ora puntano a `danielemazze.github.io/lupe/`. Anche i link assoluti di `404.html` (`/lupe/...`) vanno adattati se cambia il percorso.

**Accessibilità e qualità (verificate):**
- Lighthouse mobile ≈ 95 prestazioni / 100 accessibilità / 100 best practices / 100 SEO.
- securityheaders.com A+.
- Nessuno scorrimento orizzontale da 320 a 2560 px.
- Funziona senza JavaScript (i contenuti restano visibili).
- Rispetta "riduci movimento" del sistema.
- Menu mobile con focus trap ed Esc.

## 7. Stato e cose da fare (in ordine di priorità)

**Contenuti dal cliente (bloccanti):**
1. **Foto vere** (12–20: piatti, sala, terrazza, squadra). Sono il limite principale. Le foto di Tripadvisor non sono utilizzabili né scaricabili.
2. **Carta reale**: piatti con descrizioni ed eventualmente prezzi, oppure un PDF. Ora ci sono solo 8 piatti citati nelle recensioni.
3. **Chi siamo**: chef e titolari (le recensioni citano Claudio e Simone), con due righe e una foto.
4. **Catering concreto**: formati (cóctel, buffet, al tavolo), prezzo indicativo a persona, minimo ospiti, zona servita, anticipo richiesto.
5. **Da far confermare al locale**: "a dos pasos de Las Canteras", i servizi (terrazza, cani ammessi, asporto), la frase sul "viajero del logo", l'uso di due numeri diversi.
6. Link a Instagram/Facebook, email, voto e numero di recensioni Google aggiornati.

**Sviluppo:**
7. **Pagine legali (Spagna):** Aviso legal con ragione sociale e CIF, Privacy e, se si aggiungono servizi che li usano, Cookie.
8. **Allergeni:** tabella o PDF, invece del solo "chiedere in sala".
9. **Prenotazione online** (TheFork, CoverManager o un modulo) e **modulo preventivo catering**. Ricordarsi la CSP.
10. **Pannello amministratore** per orari, chiusure, carta, recensioni e foto. Idea concordata col cliente: dati su Cloudflare (KV/D1) e accesso protetto con Cloudflare Access. Non ancora iniziato.
11. **Dominio proprio** con email dello stesso dominio, poi aggiornare gli URL assoluti (§6).
12. **Pagine `/it/` e `/en/` vere** per l'indicizzazione, con `hreflang`.
13. **Google Business Profile** collegato al sito.
14. **Statistiche:** Cloudflare Web Analytics, senza cookie.

## 8. Note

- Tutti i font sono SIL Open Font License, licenze incluse.
- Le recensioni riportate sono estratti brevi e reali da Tripadvisor e Google, tradotti; i nomi sono quelli pubblici dei recensori.
- Il voto (4,7 · 230 opinioni · Travellers' Choice 2026) viene da Tripadvisor ed è aggiornato a ottobre 2026.
