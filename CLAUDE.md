# LUGERO e-shop — handoff pro Claude Design

Projekt je prototyp e-shopu **LUGERO** (manipulační technika: paletové vozíky, VZV, rudly, díly). Vznikl podle Figmy „lugero-cz“ a screenshotů klienta. Komunikace s uživatelem probíhá **česky**, stručně a věcně.

## Úkol pro nový účet
Přenést projekt **1:1**. Při importu z gitu:
- Nic neredesignovat, nezaokrouhlovat hodnoty, neměnit barvy, rozestupy ani texty.
- Zachovat strukturu souborů a relativní cesty (`img/…`, `logos/…`, `icons.js`, `support.js`).
- Po importu otevřít `Lugero Eshop.dc.html` a projít všechny stránky přes tweak `startPage`. Konzole musí být bez chyb.
- Další změny dělat jen cílenými editacemi (`dc_html_str_replace` / `dc_js_str_replace`), soubor celý nepřepisovat.

## Soubory
- `Lugero Eshop.dc.html` — **celý e-shop v jednom Design Componentu** (~1000 řádků). Šablona je jen s inline styly, logika je ve třídě `Component`.
- `icons.js` — `window.LUGERO_ICONS` (96 ikon, `currentColor`), použití: `<l-icon name="search" size="20"></l-icon>`. Načítá se v `<helmet>`.
- `support.js` — runtime DC. Generuje se automaticky, **neupravovat**.
- `img/` — produktové fotky, kategorie, banner (`slider-1.png`, `hero-cbd15.png`), loga (`logo-a.png`, `logo-b.png`). Názvy jsou hashe z Figmy, ponechat je.
- `logos/` — loga dopravců a plateb z Figmy: `Components.bundle.js` + `.d.ts`, `fig-assets.css`, `fig-tokens.css`. Linkují se v helmet.
- `tokens/fig-tokens.css`, `figtok/fig-tokens.css` — Figma tokeny. `styles.css` je importuje.
- `uploads/` — podklady od klienta: screenshoty XXL/XXS, detail, megamenu, foto slideru a zdrojová SVG ikon. Jsou to jen reference.
- `scraps/`, `screenshots/` — pracovní snímky.

## Design pravidla (závazná)
- **Písmo:** Inter 400/500/700/800 (Google Fonts), fallback `system-ui, sans-serif`.
- **Nadpisy (všechny h1–h4, titulky):** `rgb(73,82,90)` — stejně jako h2 „Nejprodávanější“. **Nikdy `rgb(12,12,12)` pro nadpisy.**
- **Primární / CTA / akcent:** `rgb(205,0,0)`. Hover tmavší: `rgb(160,0,0)` až `rgb(180,0,0)`.
- Text základní: `rgb(73,82,90)`. Sekundární: `rgb(126,138,149)`. Tmavý text v obsahu: `rgb(12,12,12)` (jen ne pro nadpisy).
- Pozadí stránky: `rgb(242,245,247)`. Karty jsou bílé. Linky a okraje: `rgb(228,232,236)`, `rgb(209,216,222)`.
- Top lišta: `rgb(49,49,49)` s textem `rgb(206,206,206)`. Červený oznamovací pruh je nad ní.
- Skladem: `rgb(91,121,0)` (zelená, akcent `rgb(139,182,0)`). Na objednávku: `rgb(36,127,206)`. Hvězdy: `rgb(251,191,36)`.
- Kontejner má `max-width: 1320px` a padding 20px.
- Odkazy: `a` je `rgb(205,0,0)`, hover `rgb(160,0,0)` + underline.
- Hodnoty z Figmy se kopírují doslova (13px, 27px atd.). Nesnapovat je na mřížku 4/8.
- Žádné emoji, gradienty ani vymyšlené barvy. Ikony brát pouze z `icons.js`.

## Architektura komponenty
- Navigace je stavová: `state.page` ∈ `home | category | product | cart | step2 | step3 | done | account`. Přechod přes `this.go({...})`, který zároveň scrolluje nahoru.
- Data jsou v logice: `CATS` (kategorie), `P` (produkty: id, cat, model, name, code, price bez DPH, old, img/imgs, stock, pop, chips, bullets…), `MEGA_SUBS` / `MEGA_GENERIC` (podkategorie megamenu). `VAT` a `fmt()` slouží k formátování cen.
- `card(p)` vrací všechna zobrazovaná pole produktu: slevu, ceny s DPH i bez DPH, štítek skladu a handlery.
- Další stav:
  - košík: `cart` [{id, qty}]
  - minikošík na hover: `mini`
  - login popup: `login`, `auth`, `loggedIn`
  - slider: `slide`
  - megamenu: `mega`, `megaTop`
  - mobil (<1200px): `mobile`, `burger`, `mSec`, `mCat`
  - našeptávač: `sq`, `sFocus`
  - checkout: `ship`, `pay`, `company`
  - detail produktu: `tab`, `img`, `qty`
- **Tweaks (props):**
  - `vatFirst` (boolean) — pořadí cen s DPH a bez DPH.
  - `startPage` (enum) — úvodní stránka prototypu.
- `data-screen-label` sekce: Homepage, Hero slider, Megamenu (Produkty), Výpis produktů, Detail produktu, Video, Hodnocení, Košík, Přihlášení, Popup Košík, Popup Přihlášení, Hamburger menu.

## Hotové funkce
- **Homepage:**
  - Red pruh, top lišta, header s našeptávačem (množství +/− a přidání do košíku přímo z výsledků).
  - Levé menu kategorií je sticky. Z „Produkty“ se rozbaluje full-bleed megamenu s dlaždicemi.
  - Hero slider se 3 slidy, šipkami a tečkami.
  - 2 sekce produktových karet.
  - Footer s logy dopravců a plateb, odkazy a jazykovým výběrem.
- **Výpis kategorie:** filtr „jen skladem“ a řazení (Nejprodávanější / Nejlevnější / Nejdražší / Nejnovější).
- **Detail produktu:** galerie, chipy, ceny, záložky (Popis…), video, hodnocení.
- **Košík ve 3 krocích:** položky → doprava a platba (QR, osobní odběr…) → údaje, firma volitelně → potvrzení `done`.
- **Login popup** na 25% černém overlay. Je v něm registrace i přihlášení, existuje i stránka `account`.
- **Mobil pod 1200px:** hamburger menu s podsekcemi.
- Hover stavy: tlačítka, menu (červená linka pod aktivní položkou), dlaždice megamenu, karty.

## Otevřené body (čekají na klienta)
- Skutečné bannery do slideru (zatím `img/slider-1.png` / šedá plocha).
- Ikony a loga: prasátko u „Ceny za doručení“, ikona knížky u záložky Popis, kompletní loga Mastercard a GoPay.
- Reálné podkategorie pro ostatní kategorie (zatím `MEGA_GENERIC`).
- Reálné texty v detailu produktu (EAN, výrobce, záruka, popisy jsou zatím natvrdo ze screenu).
- URL videa v detailu (zatím tmavý rámeček).
- Položky hamburger menu Půjčovna, Servis a Akce jsou vymyšlené pro demo.
- Možné další stránky: Akce, Půjčovna, Servis.

## Zdroj
- Figma: „lugero-cz - CLAUDE import.fig“. Je zdrojem pravdy pro rozměry, barvy a assety. Bitmapy kopírovat přesně, nekreslit je jako SVG.
- Design system projektu (výchozí): id `437bfa2d-0590-43eb-a194-fd09471fb25d`. Pokud se liší od Figmy nebo od tohoto souboru, mají přednost tento soubor a Figma.
