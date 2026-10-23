# mcsalestraining.com — MC Sales Training

Static rebuild of the GoHighLevel site. Plain Node build (no framework) → `dist/`, published to GitHub Pages by `.github/workflows/deploy.yml` (custom domain via `CNAME`). Same pattern as the fmycar.com repo.

## Build
```
npm ci            # only needed for `npm run images` (sharp)
npm run build     # node scripts/build.mjs → dist/ (fails on a title > 60 chars, description outside 50–155, ≠ 1 h1, duplicate title/description)
npm run check     # internal link check: fails on a link to a missing page or a page with < 3 in-content links
python3 -m http.server -d dist 8000
```
- `scripts/lib.mjs` — page shell (header/nav, footer, meta, Open Graph, JSON-LD: WebPage + EducationalOrganization + BreadcrumbList + FAQPage), helpers, every form/calendar/payment embed ID.
- `content/*.mjs` — page copy, taken from the live site (rendered with Playwright, Oct 2026). Wording kept; only placeholders and internal builder notes were removed.
- `static/` — copied into `dist/` as is: `assets/site.css`, `assets/app.js` (menu, form dialogs, enroll dialog, YouTube lite embeds), `assets/t.js` (first-party analytics + cookie notice, `data-site="mcsalestraining"`), `img/` (optimized WebP from the live site; regenerate with `npm run images <dir of originals>`), favicon, IndexNow key file.
- Generated: `sitemap.xml` (indexable pages only), `robots.txt` (all crawlers incl. AI bots allowed), `llms.txt`, `404.html`, `CNAME`, `.nojekyll`, redirect pages, `data/urls.txt` (IndexNow list).

## Pages (37 indexable)
/ (8-Week Sales Challenge sales page) · /8-week-challenge · /8-week-challenge-apply · /program-pricing · /individual-coaching · /team-training · /private-advisory · /private-sales-advisory · /membership · /ai-executive · /courses-on-demand · /the-mechanics-of-sales · /learn-to-earn · /how-the-system-works · /free-resources · /free-word-tracks · /daily-non-negotiables · /free-mini-book · /sales-calendar · /get-trained · /dealership-sales-bdc-more-appointments · /sales-training-built-on-process · /make-more-money-using-sales · /about · /our-philosophy · /why-work-with-us · /the-secret-sauce · /our-team · /mark · /jared · /proof · /faq · /contact · /privacy-policy · /terms-of-service · /terms-of-use · /disclaimer

Also: /sitemap (human site directory, noindex) and 404.html.

### Redirect pages (old URLs → closest real page; canonical + meta refresh + noindex)
| Old URL | Goes to | Why |
|---|---|---|
| /home, /courses | / | duplicates of the home page |
| /sales-vault, /Sales-vault | /free-resources | duplicate of the Sales Vault (its canonical already pointed there) |
| /courses/mark-casper/8-week-challenge | /8-week-challenge | stub ("Video Placeholder", builder notes); its curriculum map was merged |
| /private-advisory-membership | /private-sales-advisory | older duplicate of the advisory tiers page |
| /instructor, /instructors | /our-team | redirected home on the old site |
| /instructors/mark-casper, /instructors/jared-casper | /mark, /jared | redirected home |
| /private-advisory/individuals, /teams, /leadership | /individual-coaching, /team-training, /private-advisory | redirected home |
| /mechanics-of-sales | /the-mechanics-of-sales | redirected home |
| /language-of-persuasion | /learn-to-earn | the old canonical of /learn-to-earn; redirected home |
| /ai-executives | /ai-executive | the old canonical of /ai-executive; redirected home |
| /word-tracks-rebuttals | /free-word-tracks | redirected home |
| /privacy, /terms | /privacy-policy, /terms-of-service | common guesses |
| /mini-book | /free-mini-book | the free mini-book page moved to /free-mini-book (owner decision) |

## Forms, calendars, payments (unchanged GoHighLevel / Stripe embeds)
| Where | Embed | Goes to |
|---|---|---|
| / (every Enroll / Get my seat button) | Stripe Buy Button `buy_btn_1SvzjHLxNPxBXAaWICbr71M1` (live publishable key in `lib.mjs`) in a dialog | Stripe checkout for "MC Sales Training - 8 Week…" |
| /8-week-challenge-apply #apply | GHL form `nURQL3vg8iC5aEZ3ktWw` "8 WEEK CHALLENGE" | GHL sub-account behind links.mcsalestraining.com |
| /private-advisory #apply | GHL form `F0mMjdVMM0gK05aUPWx8` "Private Advisory" | same |
| /courses-on-demand (buttons → dialog; inline at #get-mechanics / #get-persuasion) | GHL forms `QBj4C1u8OSbpOOqEiAhC` "mechanics of sales", `0sojTdIVWwDZZYYWxd6x` "THE LANGUAGE OF PERSUASION" | same |
| /free-resources (buttons → dialog), /daily-non-negotiables, /free-mini-book and the home page #free-mini-book section (Mini Book form), /free-word-tracks (inline #get) | GHL forms `vtbWfWaKP6EfnOoVyfaX` Daily Non-Negotiables, `TypgSQCgVFK6A8WgF8E2` Mini Book, `tPCjyasLts8WoE23olH4` Word Track & Rebuttal Guide | same (delivers the PDFs) |
| /dealership-sales-bdc-more-appointments #unlock | GHL forms `dYaDuULDCncuazV0nxRT` "Unlock Sales Vault", Mini Book, Daily Non-Negotiables | same |
| /contact #mcFormSection | GHL form `bXQFJ5HWLAQ8FJME7UDO` (named "Newsletter-Footer" in GHL) | same |
| /sales-calendar #book | GHL calendar `links.mcsalestraining.com/widget/booking/QW4prYPBrGG4cWTGiqbF` | GHL calendar ("Complimentary 20-minute Call W/ Mark") |
| /ai-executive #install | same calendar via `link.casperportal.net/widget/booking/QW4prYPBrGG4cWTGiqbF` (as on the old page) | same |
| /the-mechanics-of-sales | link to the Skool community | skool.com/mctrains-sales-training-6122 |

All GHL embeds use the same iframe + `form_embed.js` the old site used. No form was submitted during the rebuild.
The old /ai-executive "Installation checklist" was a plain HTML form with no action (submissions went nowhere); it is now a checklist of what to bring plus the booking calendar.

## Owner decisions applied (2026-10)
- Price: the 8-Week Challenge shows **$392** (the Stripe Buy Button amount, "for the 8-week program") everywhere the old
  "$49/week" appeared: copy, enroll buttons, FAQ, Course/Offer schema (price 392), meta descriptions, llms.txt.
  "Cancel anytime" next to the price was dropped (the Stripe button is a $392 charge, not a weekly subscription).
- Mark Casper: "over 40 years" of experience (home coaches card, /about, /our-team, /mark, llms.txt).
- Free mini-book: the existing Sales Mini-Book (GHL form `TypgSQCgVFK6A8WgF8E2` "Mini Book", delivers the PDF) now lives
  at /free-mini-book (old /mini-book redirects), has a sign-up section on the home page (#free-mini-book) and a top-level
  nav link plus footer link.

## Content the owner must decide (left out of the copy)
- Top advisory tier: /private-sales-advisory "Elite 1-on-1 $1,499/mo" vs /membership "VIP Advisory $1,500/mo". Both prices removed ("pricing on the fit call").
- Strategy/fit call length: "15-Min Fit Call" (nav), "about 20–30 minutes" (/sales-calendar FAQ, BDC page), the calendar itself says "Complimentary 20-minute call", 30 min slot. Durations removed from labels.
- Terms of Service (New Hampshire law; "digital products generally non-refundable once accessed") vs Terms of Use ("laws of the United States"; "all sales are final"). Both kept verbatim; consolidate into one.
- Removed as placeholders: /proof "Receipts" and "field notes" (labelled "Placeholder"), /how-the-system-works "[+__%]" stats and "[Insert founder credential]", the /ai-executive "3×" stat ("Replace these stats any time"), /8-week-challenge internal "Offer Strategy Snapshot / convert harder" notes, empty video blocks, and the stale "March cohort now open" banner.
- Removed from the home footer: "CasperPortal is software offered by CasperB2B" (CasperPortal and CasperB2B are kept separate). Footer now says "Owned and operated by Raibro LLC."
- Kept but worth a look: /learn-to-earn H1 "Learn to Earn $10k–$15k Per Month" and "$2,000+ commission checks" (income claims next to a no-guarantee disclaimer); Instagram handle differs (@mc.sales.training in the header, @therealjaredcasper in the old legal footer; the new site uses @mc.sales.training).
- t.js cookie notice text mentions "cars viewed" and links to fmycar.com/privacy (shared script, copied unchanged).

## DNS (GitHub Pages)
- Apex `mcsalestraining.com`: A records 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- `www`: CNAME → jic52194.github.io
- Then: repo Settings → Pages → Source "GitHub Actions", custom domain mcsalestraining.com, Enforce HTTPS.
- GHL keeps serving `links.mcsalestraining.com` (forms, calendar); do not change that record.
