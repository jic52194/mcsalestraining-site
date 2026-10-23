// Builds mcsalestraining.com into dist/ (static, GitHub Pages). node scripts/build.mjs
import { rmSync, mkdirSync, cpSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { SITE, OUT, TODAY, urls, PAGES, write, redirect, page, hero, section, esc, EMAIL, PHONE_TEXT, PHONE_VANITY, wordCount } from "./lib.mjs";
import { home } from "../content/home.mjs";
import { challenge, challengeApply, programPricing, individualCoaching, teamTraining, privateAdvisory, privateSalesAdvisory, membership, aiExecutive } from "../content/programs.mjs";
import { coursesOnDemand, mechanicsOfSales, learnToEarn, howItWorks } from "../content/courses.mjs";
import { freeResources, freeWordTracks, dailyNonNegotiables, miniBook, salesCalendar, getTrained, bdcAppointments, builtOnProcess, makeMoreMoney } from "../content/resources.mjs";
import { about, ourPhilosophy, whyWorkWithUs, secretSauce, ourTeam, mark, jared, proof, faq, contact } from "../content/company.mjs";
import { privacy, termsOfService, termsOfUse, disclaimer } from "../content/legal.mjs";


rmSync(OUT, { recursive: true, force: true }); mkdirSync(OUT, { recursive: true });
const STATIC = new URL("../static/", import.meta.url).pathname;
if (existsSync(STATIC)) cpSync(STATIC, OUT, { recursive: true });

// ── pages (order = sitemap order) ──
const BUILDERS = [
  ["/", home], ["/8-week-challenge", challenge], ["/8-week-challenge-apply", challengeApply], ["/program-pricing", programPricing],
  ["/individual-coaching", individualCoaching], ["/team-training", teamTraining], ["/private-advisory", privateAdvisory], ["/private-sales-advisory", privateSalesAdvisory],
  ["/membership", membership], ["/ai-executive", aiExecutive], ["/courses-on-demand", coursesOnDemand], ["/the-mechanics-of-sales", mechanicsOfSales],
  ["/learn-to-earn", learnToEarn], ["/how-the-system-works", howItWorks], ["/free-resources", freeResources], ["/free-word-tracks", freeWordTracks],
  ["/daily-non-negotiables", dailyNonNegotiables], ["/free-mini-book", miniBook], ["/sales-calendar", salesCalendar], ["/get-trained", getTrained],
  ["/dealership-sales-bdc-more-appointments", bdcAppointments], ["/sales-training-built-on-process", builtOnProcess], ["/make-more-money-using-sales", makeMoreMoney],
  ["/about", about], ["/our-philosophy", ourPhilosophy], ["/why-work-with-us", whyWorkWithUs], ["/the-secret-sauce", secretSauce], ["/our-team", ourTeam],
  ["/mark", mark], ["/jared", jared], ["/proof", proof], ["/faq", faq], ["/contact", contact],
  ["/privacy-policy", privacy], ["/terms-of-service", termsOfService], ["/terms-of-use", termsOfUse], ["/disclaimer", disclaimer],
];
const titles = new Map(), descs = new Map();
for (const [path, fn] of BUILDERS) {
  const html = fn();
  const t = html.match(/<title>([^<]*)<\/title>/)[1], d = html.match(/<meta name="description" content="([^"]*)"/)[1];
  if (titles.has(t)) throw new Error(`duplicate title "${t}" on ${path} and ${titles.get(t)}`);
  if (descs.has(d)) throw new Error(`duplicate description on ${path} and ${descs.get(d)}`);
  titles.set(t, path); descs.set(d, path);
  write(path, html);
}

// ── human site directory (the old /sitemap page; noindex, kept so the old URL works) ──
const GROUPS = [["Programs", /^\/(8-week|program-pricing|individual|team|private|membership|ai-exec)/], ["Courses", /^\/(courses|the-mechanics|learn-to-earn|how-the)/], ["Free resources", /^\/(free|daily|mini-book|sales-calendar)/],
  ["Company", /^\/(about|our-|why-work|the-secret|mark|jared|proof|faq|contact)/], ["Articles & landing pages", /^\/(get-trained|dealership|sales-training|make-more)/], ["Legal", /^\/(privacy|terms|disclaimer)/]];
const dirBody = hero({ kicker: "Index", h1: "Site Directory", lede: "A clean, human-friendly index of every published page. Crawlers should use the <a href=\"/sitemap.xml\">XML sitemap</a>." })
  + section("", `<p><a href="/">Home: 8-Week Sales Challenge</a></p>` + GROUPS.map(([g, re]) => `<h2>${g}</h2><ul class="related">${PAGES.filter((p) => re.test(p.path)).map((p) => `<li><a href="${p.path}">${esc(p.title.replace(/ \| MC Sales Training$/, ""))}</a><span>${esc(p.desc)}</span></li>`).join("")}</ul>`).join(""));
write("/sitemap", page({ path: "/sitemap", title: "Site Directory | MC Sales Training", desc: "Every page on mcsalestraining.com: programs, courses, free resources, company pages and policies, grouped for quick browsing.", h1: "Site Directory", body: dirBody, crumbs: [["Home", "/"], ["Site Directory", "/sitemap"]], noindex: true }));

// ── 404 ──
writeFileSync(join(OUT, "404.html"), page({ path: "/404", title: "Page Not Found | MC Sales Training", desc: "That page doesn’t exist or has moved. Start with the free Sales Vault, the 8-Week Challenge or the full site directory.", noindex: true, h1: "Page not found",
  body: hero({ kicker: "404", h1: "Page not found", lede: "That page doesn’t exist or has moved.", ctas: [["Go to the home page", "/"], ["Free Sales Vault", "/free-resources", "ghost"], ["Site Directory", "/sitemap", "ghost"]] }) })
  .replace(`<link rel="canonical" href="${SITE}/404">`, ""));

// ── old URLs → closest real page (GitHub Pages can't 301: canonical + meta refresh + noindex) ──
export const LEGACY = {
  "/home": "/", "/courses": "/", "/sales-vault": "/free-resources", "/Sales-vault": "/free-resources",
  "/courses/mark-casper/8-week-challenge": "/8-week-challenge", "/private-advisory-membership": "/private-sales-advisory",
  "/instructor": "/our-team", "/instructors": "/our-team", "/instructors/mark-casper": "/mark", "/instructors/jared-casper": "/jared",
  "/private-advisory/individuals": "/individual-coaching", "/private-advisory/teams": "/team-training", "/private-advisory/leadership": "/private-advisory",
  "/mechanics-of-sales": "/the-mechanics-of-sales", "/language-of-persuasion": "/learn-to-earn", "/ai-executives": "/ai-executive",
  "/word-tracks-rebuttals": "/free-word-tracks", "/mini-book": "/free-mini-book", "/privacy": "/privacy-policy", "/terms": "/terms-of-service"
};
for (const [from, to] of Object.entries(LEGACY)) write(from, redirect(to));

// ── sitemap / robots / llms.txt / CNAME / IndexNow ──
writeFileSync(join(OUT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(([p, m, pr]) => `<url><loc>${SITE}${p}</loc><lastmod>${m}</lastmod><priority>${pr}</priority></url>`).join("\n")}\n</urlset>\n`);
writeFileSync(join(OUT, "robots.txt"), `User-agent: *\nAllow: /\n\n# AI answer engines and assistants are welcome\nUser-agent: GPTBot\nAllow: /\nUser-agent: OAI-SearchBot\nAllow: /\nUser-agent: ChatGPT-User\nAllow: /\nUser-agent: ClaudeBot\nAllow: /\nUser-agent: Claude-SearchBot\nAllow: /\nUser-agent: Claude-User\nAllow: /\nUser-agent: anthropic-ai\nAllow: /\nUser-agent: PerplexityBot\nAllow: /\nUser-agent: Perplexity-User\nAllow: /\nUser-agent: Google-Extended\nAllow: /\nUser-agent: Applebot-Extended\nAllow: /\nUser-agent: Bingbot\nAllow: /\nUser-agent: CCBot\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
const L = (p, t, d = "") => `- [${t}](${SITE}${p})${d ? `: ${d}` : ""}`;
writeFileSync(join(OUT, "llms.txt"), `# MC Sales Training

> MC Sales Training is practical sales training for car dealership Sales, BDC (business development center) and leadership teams. It installs a repeatable system built on three things: word tracks for the moments that decide a deal, a follow-up cadence, and daily accountability. It was founded by Mark Casper and Jared Casper.

## Key facts
- Who it is for: dealership salespeople (floor, phone and internet), BDC teams (contact to appointment to show) and sales leaders/managers.
- Approach: "ethical leverage", not high-pressure closing. Old-school fundamentals (real conversations, control, clarity, ethics) combined with modern execution (speed-to-lead, sequencing, CRM discipline, follow-up).
- Mark Casper ("The Fundamentals", founder): over 40 years of dealership floor and finance experience, focused on discovery, trade talk, payments and commitment. Leads the 8-Week Challenge curriculum.
- Jared Casper ("The System", co-founder): turns floor experience into a repeatable operating system of word tracks, sequence and daily execution standards. Teaches The Language of Persuasion.
- Flagship program: the 8-Week Sales Challenge, $392 for the 8-week program, no contract, immediate portal access. Covers phone control, text and email follow-up, the daily 10-minute sprint, needs and discovery, objection logic, show rates, pipeline building and a scorecard, with weekly live deal-breakdown coaching and 35 Mark-led lesson videos. Includes a CarSalesSoftware.com tech-stack bonus.
- Other programs: Individual Coaching (1:1), Team Training (standardize language and process across a store) and Private Advisory (high-touch, for owners and leaders); pricing for these is handled on a short fit call. Private Sales Advisory "High-Impact" group advisory is $499/month. Premium membership is $20/month. The AI Executive (24/7 AI webchat for dealerships) is $196/month plus AI usage fees.
- Self-paced courses: The Mechanics of Sales (Mark and Jared; accessed through the MC Sales Training Skool community) and The Language of Persuasion (Jared).
- Free resources ("Sales Vault"): Daily Non-Negotiables, a free Sales Mini-Book (https://mcsalestraining.com/free-mini-book), and free word tracks and rebuttals, delivered instantly by email.
- No income or results guarantees; results depend on effort, market, inventory and lead flow.
- Contact: ${EMAIL}; text ${PHONE_TEXT}; call ${PHONE_VANITY}. Responds Monday-Friday, typically within 24 hours on business days. MC Sales Training, LLC, 252 Daniel Webster Hwy #1093, Nashua, NH 03060.

## Programs
${L("/", "8-Week Sales Challenge", "Overview, weekly plan, bonus, pricing ($392 for the 8-week program) and FAQ; enroll online.")}
${L("/8-week-challenge", "8-Week Challenge curriculum", "The Mark-led 8-week map with 35 lesson videos.")}
${L("/8-week-challenge-apply", "Apply for the 8-Week Challenge")}
${L("/program-pricing", "Programs overview", "Individual Coaching, Team Training, Private Advisory.")}
${L("/individual-coaching", "Individual coaching")}
${L("/team-training", "Team training")}
${L("/private-advisory", "Private advisory & consulting", "Application for owners and leadership teams.")}
${L("/private-sales-advisory", "Private sales advisory tiers", "Sales Vault (free), High-Impact ($499/mo), Elite 1-on-1.")}
${L("/membership", "Membership", "Standard (free), Premium ($20/mo), VIP Advisory.")}
${L("/ai-executive", "AI Executive", "24/7 AI webchat for dealerships, $196/mo plus AI usage fees.")}

## Courses
${L("/courses-on-demand", "Courses on demand")}
${L("/the-mechanics-of-sales", "The Mechanics of Sales")}
${L("/learn-to-earn", "The Language of Persuasion (Learn to Earn)")}
${L("/how-the-system-works", "How the system works")}

## Free resources
${L("/free-resources", "The Sales Vault")}
${L("/free-word-tracks", "Free word tracks & rebuttals")}
${L("/daily-non-negotiables", "Daily non-negotiables")}
${L("/free-mini-book", "Free sales mini-book", "Free PDF: a morning routine, follow-up standards and a consistency checklist, sent by email.")}
${L("/sales-calendar", "Book a free strategy call")}

## About
${L("/about", "About MC Sales Training")}
${L("/our-philosophy", "Our philosophy")}
${L("/why-work-with-us", "Why work with us: ethical leverage")}
${L("/the-secret-sauce", "The secret sauce: father-son advantage")}
${L("/our-team", "Our team")}
${L("/mark", "Mark Casper")}
${L("/jared", "Jared Casper")}
${L("/proof", "Proof / results")}
${L("/faq", "FAQ")}
${L("/contact", "Contact")}

## Articles
${L("/get-trained", "Get trained: stop losing gross to \"I need to think about it\"")}
${L("/dealership-sales-bdc-more-appointments", "Dealership Sales & BDC: more appointments")}
${L("/sales-training-built-on-process", "Sales training built on process")}
${L("/make-more-money-using-sales", "Make more money using sales")}

## Policies
${L("/privacy-policy", "Privacy policy")}
${L("/terms-of-service", "Terms of service")}
${L("/terms-of-use", "Terms of use")}
${L("/disclaimer", "Disclaimer")}
`);
writeFileSync(join(OUT, "CNAME"), "mcsalestraining.com\n");
writeFileSync(join(OUT, ".nojekyll"), "");
mkdirSync(new URL("../data/", import.meta.url).pathname, { recursive: true });
writeFileSync(new URL("../data/urls.txt", import.meta.url).pathname, urls.map(([p]) => SITE + p).join("\n") + "\n");
console.log(`built ${urls.length} pages + ${Object.keys(LEGACY).length} redirects + /sitemap directory + 404 at ${TODAY}; home: ${wordCount((await import("node:fs")).readFileSync(join(OUT, "index.html"), "utf8"))} words`);
