# Tortollandia — strona (link-hub)

Strona-wizytówka „link in bio" dla **Tortollandii** (Ełk), na którą kieruje kod QR
z baneru. Zbudowana na **Astro 5 + Tailwind v4**, hostowana na **GitHub Pages**
pod adresem **https://tortollandia.pl**. To jest baza pod pełną stronę w przyszłości.

## Rozwój lokalny

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # generuje statyczny katalog dist/
npm run preview  # podgląd zbudowanej strony
```

## Struktura

- `src/data/site.ts` — **jedno źródło prawdy**: telefon, e-mail, linki social, klucze API.
- `src/pages/index.astro` — strona główna (link-hub).
- `src/pages/kontakt.astro` — kontakt + formularz.
- `src/layouts/BaseLayout.astro` — `<head>`, SEO, OpenGraph, JSON-LD, fonty, znak wodny.
- `public/` — favicony, `og.jpg`, `CNAME`, `robots.txt`, manifest.

## Do uzupełnienia przez właściciela (placeholdery w `src/data/site.ts`)

1. **`web3formsAccessKey`** — formularz kontaktowy. Wejdź na https://web3forms.com,
   wpisz `tortollandiaelk@gmail.com`, klucz przyjdzie mailem. Wklej go w `site.ts`.
   Do tego czasu strona kontaktu pokazuje działające przyciski (WhatsApp / e-mail / telefon).
2. **`cloudflareToken`** — liczenie skanów QR / wizyt. Załóż darmowe konto
   https://dash.cloudflare.com → **Web Analytics**, dodaj `tortollandia.pl`,
   skopiuj token. Beacon wczytuje się tylko gdy token jest ustawiony.

## Deploy (GitHub Pages)

Push na gałąź `main` uruchamia workflow `.github/workflows/deploy.yml`, który
buduje `dist/` i publikuje na GitHub Pages. W ustawieniach repo:
**Settings → Pages → Build and deployment → Source: GitHub Actions**,
oraz **Enforce HTTPS**. Domena własna jest w `public/CNAME` (`tortollandia.pl`).

### DNS (u rejestratora domeny)

Rekordy **A** dla domeny głównej (apex) `tortollandia.pl`:

```
A   @   185.199.108.153
A   @   185.199.109.153
A   @   185.199.110.153
A   @   185.199.111.153
```

Opcjonalnie `www`:

```
CNAME   www   artekfitt.github.io
```
