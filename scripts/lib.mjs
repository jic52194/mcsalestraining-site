// Shared layout + helpers for mcsalestraining.com (static build).
// Brand (kept from the live GoHighLevel site): navy #0a2463, ink #0f1222, rose #e11d48 / hot pink #ff0051 accents,
// Poppins headings, Inter body, Oswald on the home sales page, MC Trains logo.
import { fileURLToPath } from "node:url";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { ANSWERS } from "../content/answers.mjs";

export const SITE = "https://mcsalestraining.com";
export const NAME = "MC Sales Training";
export const EMAIL = "support@mcsalestraining.com";
export const PHONE_TEXT = "1-240-628-7246";
export const PHONE_TEL = "+12406287246";
export const PHONE_VANITY = "1-240-MC-TRAIN";
export const SKOOL = "https://www.skool.com/mctrains-sales-training-6122/about?ref=52547ddb88b24c3597bb2aef21f4d3e2";
export const SOCIAL = [
  ["YouTube", "https://www.youtube.com/@MCSALESTRAINING-rv3yb"],
  ["Facebook", "https://www.facebook.com/profile.php?id=61559934899571"],
  ["Instagram", "https://www.instagram.com/mc.sales.training"],
  ["TikTok", "https://www.tiktok.com/@carman911"],
  ["LinkedIn", "https://www.linkedin.com/company/mc-sales-training"],
  ["Skool community", SKOOL],
];
export const LOGO = `${SITE}/img/logo-500.png`;
export const OUT = fileURLToPath(new URL("../dist/", import.meta.url));
export const TODAY = new Date().toISOString().slice(0, 10);

// GoHighLevel / LeadConnector embeds, reused exactly as the live site uses them (see README › Forms).
export const FORM_HOST = "https://links.mcsalestraining.com";
export const FORMS = {
  dnn: { id: "vtbWfWaKP6EfnOoVyfaX", name: "Daily Non-Negotiables", h: 660 },
  minibook: { id: "TypgSQCgVFK6A8WgF8E2", name: "Mini Book", h: 729 },
  wordtracks: { id: "tPCjyasLts8WoE23olH4", name: "Word Track & Rebuttal Guide", h: 660 },
  vault: { id: "dYaDuULDCncuazV0nxRT", name: "Unlock Sales Vault", h: 659 },
  challenge: { id: "nURQL3vg8iC5aEZ3ktWw", name: "8 WEEK CHALLENGE", h: 659 },
  advisory: { id: "F0mMjdVMM0gK05aUPWx8", name: "Private Advisory", h: 659 },
  mechanics: { id: "QBj4C1u8OSbpOOqEiAhC", name: "mechanics of sales", h: 659 },
  persuasion: { id: "0sojTdIVWwDZZYYWxd6x", name: "THE LANGUAGE OF PERSUASION", h: 659 },
  contact: { id: "bXQFJ5HWLAQ8FJME7UDO", name: "Newsletter-Footer", h: 520 },
};
export const BOOKING = { src: `${FORM_HOST}/widget/booking/QW4prYPBrGG4cWTGiqbF`, title: "MC Sales Training Booking Calendar" };
// /ai-executive embeds the same calendar through the link.casperportal.net white-label domain, as it does today.
export const BOOKING_AI = { src: "https://link.casperportal.net/widget/booking/QW4prYPBrGG4cWTGiqbF", title: "MC Sales Training Booking Calendar" };
export const STRIPE = { buyButtonId: "buy_btn_1SvzjHLxNPxBXAaWICbr71M1", publishableKey: "pk_live_51NyRtwLxNPxBXAaWv6AvvBjBAoNLwO7DXI1ii2II3JlmMGobHGltpXRzF0YnhZ7NhwQqpgbpqboTdK9hEXS2Sxed00cA39Gjkp" };

// Google Fonts load without blocking first paint (each CSS font stack already has system fallbacks).
const FONTS = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Poppins:wght@700;800&amp;family=Oswald:wght@600;700&amp;display=swap";

/** The site's primary calls to action, one label each (matches the header: "Book a Fit Call" / "Get Free Word Tracks"). Tuples for btn()/ctas(). */
export const CTA = {
  enroll: ["Enroll for $392 →", "/#enroll", "", "data-enroll"], // opens the Stripe Buy Button dialog (app.js); without JS it goes to the home page enroll section
  call: ["Book a Fit Call →", "/sales-calendar"],
  free: ["Get Free Word Tracks →", "/free-resources"],
  programs: ["Compare Programs →", "/program-pricing"],
};
export const ghost = (c) => [c[0], c[1], "ghost", c[3] || ""];
/** The 8-Week Challenge checkout (live Stripe Buy Button), opened in a dialog by any [data-enroll] link (app.js). page() adds it to any page with one. */
export const payTemplate = `<template id="pay-template"><div class="paybox"><p>Coaching + Training + Bonus Tech Stack</p><p class="price">$392</p><p class="small">for the 8-week program</p><stripe-buy-button buy-button-id="${STRIPE.buyButtonId}" publishable-key="${STRIPE.publishableKey}"></stripe-buy-button><p class="small">Immediate access to portal &amp; bonus tech</p></div></template>`;

export const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
export const ld = (o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, "\\u003c")}</script>`;
const strip = (h) => String(h).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

export const ORG_ID = `${SITE}/#org`;
// The agency that built and runs the site (same entity facts as casperb2b.com/portfolio).
export const CASPERB2B = { "@type": "Organization", "@id": "https://casperb2b.com/#organization", name: "CasperB2B", url: "https://casperb2b.com/" };
export const ORG = {
  "@context": "https://schema.org", "@type": "EducationalOrganization", "@id": ORG_ID, name: NAME, legalName: "MC Sales Training, LLC", url: SITE + "/", logo: LOGO,
  description: "Dealership sales, BDC and leadership training built on word tracks, follow-up cadence and daily accountability.",
  email: EMAIL, telephone: PHONE_TEL,
  address: { "@type": "PostalAddress", streetAddress: "252 Daniel Webster Hwy #1093", addressLocality: "Nashua", addressRegion: "NH", postalCode: "03060", addressCountry: "US" },
  founder: [{ "@type": "Person", name: "Mark Casper", url: SITE + "/mark" }, { "@type": "Person", name: "Jared Casper", url: SITE + "/jared" }],
  contactPoint: [{ "@type": "ContactPoint", contactType: "customer support", email: EMAIL, telephone: PHONE_TEL, availableLanguage: "English", hoursAvailable: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] } }],
  sameAs: SOCIAL.map(([, u]) => u.split("?")[0]),
  knowsAbout: ["dealership sales training", "BDC training", "automotive sales word tracks", "sales follow-up cadence", "objection handling", "sales leadership"],
  creator: CASPERB2B,
};

export const NAV = [
  ["Home", "/"],
  ["About", [["About Us", "/about"], ["Our Philosophy", "/our-philosophy"], ["Why Work With Us", "/why-work-with-us"], ["The Secret Sauce", "/the-secret-sauce"], ["Our Team", "/our-team"], ["Proof / Results", "/proof"], ["FAQ", "/faq"], ["Contact", "/contact"]]],
  ["Programs", [["8-Week Challenge", "/8-week-challenge"], ["Program Pricing", "/program-pricing"], ["Individual Coaching", "/individual-coaching"], ["Team Training", "/team-training"], ["Private Advisory", "/private-advisory"], ["Private Sales Advisory", "/private-sales-advisory"], ["Membership", "/membership"], ["AI Executive", "/ai-executive"]]],
  ["Courses", [["Courses On Demand", "/courses-on-demand"], ["The Mechanics of Sales", "/the-mechanics-of-sales"], ["The Language of Persuasion", "/learn-to-earn"], ["How the System Works", "/how-the-system-works"]]],
  ["Free Mini-Book", "/free-mini-book"],
  ["Free Resources", [["The Sales Vault", "/free-resources"], ["Free Mini-Book", "/free-mini-book"], ["Daily Non-Negotiables", "/daily-non-negotiables"], ["Word Tracks & Rebuttals", "/free-word-tracks"]]],
];

export const urls = []; // [path, lastmod, priority]
export const PAGES = []; // { path, title, desc, h1 } for llms.txt and the directory
export function write(path, html) {
  const file = join(OUT, path === "/" ? "index.html" : path.endsWith("/") ? path + "index.html" : path + (path.includes(".") ? "" : "/index.html"));
  mkdirSync(dirname(file), { recursive: true }); writeFileSync(file, html);
  // GitHub Pages answers /about with a 301 to /about/ when only about/index.html exists; a sibling about.html serves /about itself.
  if (path !== "/" && !path.endsWith("/") && !path.includes(".")) writeFileSync(join(OUT, path + ".html"), html);
}

const navHtml = (path) => NAV.map(([n, v]) => typeof v === "string"
  ? `<a class="nl" href="${v}"${path === v ? ' aria-current="page"' : ""}>${esc(n)}</a>`
  : `<div class="dd"><button type="button" class="nl" aria-expanded="false" aria-haspopup="true">${esc(n)}</button><div class="ddm">${v.map(([a, h]) => `<a href="${h}"${path === h ? ' aria-current="page"' : ""}>${esc(a)}</a>`).join("")}</div></div>`).join("");
const drawerHtml = () => NAV.map(([n, v]) => typeof v === "string" ? `<a href="${v}">${esc(n)}</a>` : `<p class="dh">${esc(n)}</p>${v.map(([a, h]) => `<a href="${h}">${esc(a)}</a>`).join("")}`).join("");

/** The page shell. crumbs = [[name, path]...] adds a visible breadcrumb + BreadcrumbList. faqs = [[q, a]...] adds FAQPage. */
export function page({ path, title, desc, body, h1, answer = ANSWERS[path], crumbs, faqs, schema = [], noindex = false, theme = "", image, priority = "0.7", preload = "", head = "", sticky }) {
  if (title.length > 60) throw new Error(`title > 60 chars on ${path}: ${title} (${title.length})`);
  if (desc.length > 155 || desc.length < 50) throw new Error(`description length ${desc.length} on ${path}`);
  const url = SITE + (path === "/" ? "/" : path);
  const img = image ? SITE + image : LOGO;
  const schemas = [{ "@context": "https://schema.org", "@type": "WebPage", "@id": url, url, name: title, description: desc, inLanguage: "en-US", isPartOf: { "@type": "WebSite", "@id": `${SITE}/#site`, name: NAME, url: SITE + "/", creator: CASPERB2B }, publisher: { "@id": ORG_ID } }];
  schemas.push(path === "/" ? ORG : { "@context": "https://schema.org", "@type": "EducationalOrganization", "@id": ORG_ID, name: NAME, url: SITE + "/", logo: LOGO, creator: CASPERB2B });
  if (crumbs && crumbs.length > 1) schemas.push({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: crumbs.map(([n, p], i) => ({ "@type": "ListItem", position: i + 1, name: n, item: SITE + (p || "/") })) });
  if (faqs && faqs.length) schemas.push({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: strip(q), acceptedAnswer: { "@type": "Answer", text: strip(a) } })) });
  schemas.push(...schema);
  if (!noindex) { urls.push([path, TODAY, priority]); PAGES.push({ path, title, desc, h1: strip(h1 || "") }); }
  if (!noindex && !answer) throw new Error(`${path} has no answer-first sentence in content/answers.mjs`);
  // Answer-first: the first paragraph after the H1 opens with what the page is and who it is for.
  if (answer) body = body.replace(/(<\/h1>\s*)(<p class="lede">)?/, (m, end, lede) => lede ? `${end}<p class="lede">${answer} ` : `${end}<p class="lede">${answer}</p>`);
  // sticky = [text, ctaTuple]: a bar fixed to the bottom of phone screens (same component as the home page's enroll bar)
  if (sticky) body += `<div class="sticky-enroll"><span>${sticky[0]}</span>${btn([sticky[1][0], sticky[1][1], "sm", sticky[1][3] || ""])}</div>`;
  // any Enroll button (data-enroll) opens the same Stripe Buy Button dialog as the home page
  if (/data-enroll/.test(body) && !/id="pay-template"/.test(body)) body += payTemplate;
  const h1count = (body.match(/<h1[\s>]/g) || []).length;
  if (h1count !== 1) throw new Error(`${path} has ${h1count} h1 elements`);
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title><meta name="description" content="${esc(desc)}"><link rel="canonical" href="${url}">
<meta name="robots" content="${noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1"}">
<meta property="og:type" content="website"><meta property="og:site_name" content="${NAME}"><meta property="og:locale" content="en_US"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${img}"><meta property="og:image:alt" content="${esc(image ? title : "MC Sales Training logo")}">
<meta name="twitter:card" content="summary"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(desc)}"><meta name="twitter:image" content="${img}"><meta name="theme-color" content="#0a2463">
<link rel="icon" type="image/png" href="/favicon.png"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="sitemap" type="application/xml" href="/sitemap.xml">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" as="style" href="${FONTS}" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${FONTS}"></noscript>
<link rel="stylesheet" href="/assets/site.css?v=${TODAY}">${preload}${head}
${schemas.map(ld).join("")}
</head><body${theme || sticky ? ` class="${[theme, sticky ? "has-sticky" : ""].filter(Boolean).join(" ")}"` : ""}>
<a class="skip" href="#main">Skip to content</a>
<div class="topbar"><div class="wrap"><span>Dealership Sales + BDC: More Appointments • More Closes • Better Grosses</span> <a href="/free-resources">Free Word Tracks &amp; Follow-Up Tools</a></div></div>
<header class="top"><div class="wrap row">
<a class="brand" href="/" aria-label="MC Sales Training home"><img src="/img/logo-96.webp" width="48" height="48" alt="MC Sales Training logo"><span><b>MC Sales Training</b><small>Word Tracks • Follow-Up System • Daily Accountability</small></span></a>
<nav class="mainnav" aria-label="Main">${navHtml(path)}</nav>
<div class="topcta"><a class="btn ghost sm" href="/sales-calendar">Book a Fit Call</a><a class="btn sm" href="/free-resources">Get Free Word Tracks</a></div>
<button class="burger" type="button" data-burger aria-label="Open menu" aria-expanded="false" aria-controls="drawer">Menu</button></div>
<nav class="drawer" id="drawer" data-drawer aria-label="Mobile" hidden>${drawerHtml()}<p class="dh">Get started</p><a class="btn" href="/free-resources">Get Free Word Tracks</a><a class="btn ghost" href="/sales-calendar">Book a Fit Call</a></nav>
</header>
<main id="main">${crumbs && crumbs.length > 1 ? `<div class="wrap"><nav class="crumbs" aria-label="Breadcrumb">${crumbs.map(([n, p], i) => (i < crumbs.length - 1 ? `<a href="${p || "/"}">${esc(n)}</a>` : `<span aria-current="page">${esc(n)}</span>`)).join(" / ")}</nav></div>` : ""}${body}</main>
<footer class="foot"><div class="wrap">
<div class="fcols">
<div class="fbrand"><p class="flogo"><img src="/img/logo-96.webp" width="56" height="56" alt="" loading="lazy"> <b>MC Sales Training</b></p><p>Practical sales training built on structure, ethics, and repeatable execution.</p>
<p><b>We respond Monday–Friday</b>, typically within 24 hours on business days.<br>Email <a href="mailto:${EMAIL}">${EMAIL}</a><br>Text <a href="sms:${PHONE_TEL}">${PHONE_TEXT}</a> · Call <a href="tel:${PHONE_TEL}">${PHONE_VANITY}</a></p>
<p class="social">${SOCIAL.map(([n, u]) => `<a href="${u}" rel="noopener me" target="_blank">${esc(n)}</a>`).join(" · ")}</p></div>
<div><p class="fh">Programs</p><p><a href="/8-week-challenge">8-Week Challenge</a><br><a href="/program-pricing">Program Pricing</a><br><a href="/individual-coaching">Individual Coaching</a><br><a href="/team-training">Team Training</a><br><a href="/private-advisory">Private Advisory</a><br><a href="/private-sales-advisory">Private Sales Advisory</a><br><a href="/membership">Membership</a><br><a href="/ai-executive">AI Executive</a></p></div>
<div><p class="fh">Courses &amp; free tools</p><p><a href="/courses-on-demand">Courses On Demand</a><br><a href="/the-mechanics-of-sales">The Mechanics of Sales</a><br><a href="/learn-to-earn">The Language of Persuasion</a><br><a href="/free-resources">The Sales Vault</a><br><a href="/free-mini-book">Free Mini-Book</a><br><a href="/daily-non-negotiables">Daily Non-Negotiables</a><br><a href="/free-word-tracks">Word Tracks &amp; Rebuttals</a></p></div>
<div><p class="fh">Company</p><p><a href="/about">About Us</a><br><a href="/our-team">Our Team</a><br><a href="/how-the-system-works">How the System Works</a><br><a href="/proof">Proof / Results</a><br><a href="/faq">FAQ</a><br><a href="/contact">Contact</a><br><a href="/sales-calendar">Book a Strategy Call</a><br><a href="/sitemap">Site Directory</a></p></div>
</div>
<p class="legal"><a href="/privacy-policy">Privacy Policy</a> · <a href="/terms-of-service">Terms of Service</a> · <a href="/terms-of-use">Terms of Use</a> · <a href="/disclaimer">Disclaimer</a> · <a href="#" data-consent-open>Cookie settings</a></p>
<p class="fine">Owned and operated by <a href="https://raibrollc.com" rel="noopener">Raibro LLC</a>. © ${TODAY.slice(0, 4)} MC Sales Training. All rights reserved. · <a href="https://casperb2b.com/portfolio" rel="noopener">Built by CasperB2B</a></p>
</div></footer>
<script src="/assets/app.js?v=${TODAY}" defer></script><script src="/assets/t.js" data-site="mcsalestraining" data-privacy="/privacy-policy" data-banner="1" defer></script>
</body></html>`;
}

// ── building blocks ──
/** Page hero. ctas = [[label, href, cls?, attrs?]...] */
export const hero = ({ kicker, h1, lede, ctas = [], note = "", chips = [], dark = false, aside = "" }) => `<section class="hero${dark ? " dark" : ""}"><div class="wrap${aside ? " split" : ""}"><div class="hero-copy">
${kicker ? `<p class="kicker">${kicker}</p>` : ""}<h1>${h1}</h1>${lede ? `<p class="lede">${lede}</p>` : ""}
${ctas.length ? `<p class="ctas">${ctas.map(btn).join("")}</p>` : ""}${note ? `<p class="note">${note}</p>` : ""}${chips.length ? `<ul class="chips">${chips.map((c) => `<li>${c}</li>`).join("")}</ul>` : ""}</div>${aside}</div></section>`;
export const btn = ([label, href, cls = "", attrs = ""]) => `<a class="btn${cls ? " " + cls : ""}" href="${href}"${href.startsWith("http") ? ' rel="noopener"' : ""}${attrs ? " " + attrs : ""}>${label}</a>`;
export const ctas = (items, note = "") => `<p class="ctas">${items.map(btn).join("")}</p>${note ? `<p class="note">${note}</p>` : ""}`;
export const section = (h2, inner, { kicker = "", lead = "", id = "", soft = false, dark = false, center = false } = {}) => `<section class="sec${soft ? " soft" : ""}${dark ? " dark" : ""}${center ? " center" : ""}"${id ? ` id="${id}"` : ""}><div class="wrap">${kicker ? `<p class="kicker">${kicker}</p>` : ""}${h2 ? `<h2>${h2}</h2>` : ""}${lead ? `<p class="lead-in">${lead}</p>` : ""}${inner}</div></section>`;
/** cards: [{ k (eyebrow), t (title), d (html), list:[], cta:[label, href] }] */
export const cards = (items, cols = 3) => `<div class="cards c${cols}">${items.map((c) => `<article class="card">${c.k ? `<p class="ck">${c.k}</p>` : ""}${c.t ? `<h3>${c.t}</h3>` : ""}${c.price ? `<p class="price">${c.price}</p>` : ""}${c.d ? `<p>${c.d}</p>` : ""}${c.list ? bullets(c.list) : ""}${c.after ? `<p class="small">${c.after}</p>` : ""}${c.cta ? `<p class="ctas">${[].concat(Array.isArray(c.cta[0]) ? c.cta : [c.cta]).map((x, i) => btn([x[0], x[1], i ? "ghost sm" : "sm", x[3] || ""])).join("")}</p>` : ""}</article>`).join("")}</div>`;
export const bullets = (items, cls = "checks") => `<ul class="${cls}">${items.map((x) => `<li>${x}</li>`).join("")}</ul>`;
export const steps = (items) => `<ol class="steps">${items.map(([t, d]) => `<li><h3>${t}</h3><p>${d}</p></li>`).join("")}</ol>`;
export const faqBlock = (items, h2 = "Common Questions", lead = "", id = "faq") => section(h2, `<div class="faq">${items.map(([q, a]) => `<details><summary>${q}</summary><div class="ans">${a.startsWith("<") ? a : `<p>${a}</p>`}</div></details>`).join("")}</div>`, { lead, id, soft: true });
export const quote = (q, who) => `<figure class="quote"><blockquote><p>${q}</p></blockquote>${who ? `<figcaption>${who}</figcaption>` : ""}</figure>`;
export const related = (items, h2 = "Keep building the system") => section(h2, `<ul class="related">${items.map(([t, h, d]) => `<li><a href="${h}">${t}</a>${d ? `<span>${d}</span>` : ""}</li>`).join("")}</ul>`, { id: "related" });

/** End-of-page "next step": a primary CTA (+ optional secondary), a short note of facts already on the site, and related pages with descriptive anchors. */
export const nextStep = ({ h2 = "Your next step", lead = "", ctas: c = [], note = "", links = [], soft = true }) => section(h2, `${lead ? `<p class="lead-in">${lead}</p>` : ""}${c.length ? ctas(c, note) : note ? `<p class="note">${note}</p>` : ""}${links.length ? `<ul class="related" style="margin-top:22px">${links.map(([t, h, d]) => `<li><a href="${h}">${t}</a>${d ? `<span>${d}</span>` : ""}</li>`).join("")}</ul>` : ""}`, { kicker: "Next step", id: "next-step", soft });

/** A GoHighLevel form embed (same iframe + form_embed.js the live site uses). Lazy: the iframe src loads when scrolled near. */
export const ghlForm = (key, { title, id } = {}) => {
  const f = FORMS[key];
  return `<div class="embed form-embed"${id ? ` id="${id}"` : ""}><iframe src="${FORM_HOST}/widget/form/${f.id}" id="inline-${f.id}" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-trigger-value="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-name="${esc(f.name)}" data-height="${f.h}" data-layout-iframe-id="inline-${f.id}" data-form-id="${f.id}" title="${esc(title || f.name)}" loading="lazy" style="width:100%;height:${f.h}px;border:none;border-radius:8px"></iframe><p class="small">🔒 Private. No spam. If the form doesn’t load, disable ad blockers for this domain or email <a href="mailto:${EMAIL}">${EMAIL}</a>.</p></div>`;
};
export const formEmbedScript = `<script src="${FORM_HOST}/js/form_embed.js" defer></script>`;
export const bookingEmbed = (b = BOOKING) => `<div class="embed cal-embed"><iframe src="${b.src}" title="${esc(b.title)}" loading="lazy" scrolling="no" id="${b.src.split("/").pop()}_cal" style="width:100%;border:none;overflow:hidden;min-height:760px" allow="payment *; geolocation *; microphone *; camera *" referrerpolicy="no-referrer-when-downgrade"></iframe></div><script src="${new URL(b.src).origin}/js/form_embed.js" defer></script>`;
/** A button that opens a GHL form in a dialog (app.js). Without JS it is a plain link to `fallback` (a page or anchor that has the same form inline). */
export const formButton = (label, key, fallback, cls = "", title = "") => `<a class="btn${cls ? " " + cls : ""}" href="${fallback}"${title ? ` data-form-title="${esc(title)}"` : ""} data-form="${FORMS[key].id}" data-form-h="${FORMS[key].h}" data-form-name="${esc(FORMS[key].name)}">${label}</a>`;
/** YouTube "lite" embed: a thumbnail button that swaps in the iframe on click (no YouTube JS until then). */
export const yt = (id, title, { params = "rel=0&modestbranding=1", playerId = "" } = {}) => `<div class="yt"${playerId ? ` id="${playerId}"` : ""} data-yt="${id}" data-yt-params="${esc(params)}"><a class="yt-btn" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener" aria-label="Play video: ${esc(title)}"><img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" width="480" height="360" alt="${esc(title)} (video thumbnail)" loading="lazy"><span class="yt-play" aria-hidden="true">▶</span></a></div>`;
export const pic = (name, widths, alt, { w, h, sizes = "100vw", eager = false, cls = "" } = {}) => `<img${cls ? ` class="${cls}"` : ""} src="/img/${name}-${widths[0]}.webp" srcset="${widths.map((x) => `/img/${name}-${x}.webp ${x}w`).join(", ")}" sizes="${sizes}" width="${w}" height="${h}" alt="${esc(alt)}"${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async">`;

/** Redirect page for an old URL (GitHub Pages can't 301): canonical + meta refresh + noindex. */
export const redirect = (to) => { const abs = to.startsWith("http") ? to : SITE + to; return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Moved | MC Sales Training</title><meta name="robots" content="noindex"><link rel="canonical" href="${abs}"><meta http-equiv="refresh" content="0; url=${to}"><script>location.replace(${JSON.stringify(to)} + location.hash)</script></head><body><p>This page moved to <a href="${to}">${abs}</a>.</p></body></html>`; };
export const wordCount = (html) => html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
