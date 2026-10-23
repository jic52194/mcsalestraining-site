// Free resources (Sales Vault + the three downloads), the strategy-call calendar, and the landing/article pages.
import { page, hero, section, cards, bullets, steps, faqBlock, related, ghlForm, formEmbedScript, formButton, bookingEmbed, pic, ctas } from "../scripts/lib.mjs";

const C = (...c) => [["Home", "/"], ...c];

// ── /free-resources (The Sales Vault; /sales-vault and /Sales-vault merged here) ──
export function freeResources() {
  const body = hero({ kicker: "Free • Instant Downloads", h1: "The Sales Vault", lede: "Free dealership sales tools you can run today. Word tracks, follow‑up cadence, and execution standards built for real Sales + BDC workflows.",
    note: "Pick a resource → enter your info → delivered instantly. No spam.", chips: ["Built for dealership floors + BDC", "Scripts tied to exact moments", "Follow‑up that earns replies"] })
  + section("Pick One. Run It for 7 Days.", `<p class="lead-in">Use it exactly as written. Measure replies, appointments, and next steps—then tighten. Don’t “customize” on day one.</p><div class="cards c3">
<article class="card" id="daily-non-negotiables"><p class="ck">Ready • Instant · Habits • 1‑Page</p><h3><a href="/daily-non-negotiables">Daily Non‑Negotiables</a></h3><p>A first‑hour routine that forces momentum before excuses show up.</p>${bullets(["Stops drift and forces first‑hour execution", "Fast checklist you can run today", "Built for real dealership floors"])}<p class="ctas">${formButton("Get Instant Download →", "dnn", "/daily-non-negotiables#get", "sm", "Daily Non-Negotiables")}</p></article>
<article class="card" id="sales-mini-book"><p class="ck">Ready • Instant · Blueprint • PDF</p><h3><a href="/free-mini-book">Sales Mini‑Book</a></h3><p>Habits, scripts, and follow‑up standards that make consistent months normal.</p>${bullets(["Daily structure + clean language", "Follow‑up that earns replies", "Built from real dealership floors"])}<p class="ctas">${formButton("Get Instant Download →", "minibook", "/free-mini-book#get", "sm", "Sales Mini-Book")}</p></article>
<article class="card" id="word-tracks"><p class="ck">Ready • Instant · Scripts • Rebuttals</p><h3><a href="/free-word-tracks">Word Tracks &amp; Rebuttals</a></h3><p>Say the words. Re‑open stalled deals without sounding pushy.</p>${bullets(["Price, spouse, “think about it”", "Use on text, phone, and the floor", "Tone + posture guidance"])}<p class="ctas">${formButton("Get Instant Download →", "wordtracks", "/free-word-tracks#get", "sm", "Word Tracks & Rebuttals")}</p></article></div>
<p class="note">🔒 Locked &amp; private. We hate spam too.</p>`, { kicker: "Start here", soft: true })
  + related([["How the System Works", "/how-the-system-works", "Structure, language and habits."], ["8-Week Challenge", "/8-week-challenge", "Weekly accountability: $392 for 8 weeks."], ["Book a strategy call", "/sales-calendar", "Find the one leak costing you deals."]], "Want weekly accountability?");
  return page({ path: "/free-resources", title: "The Sales Vault: Free Sales Tools | MC Sales Training", desc: "Free dealership sales tools you can run today: Daily Non-Negotiables, the Sales Mini-Book, and Word Tracks & Rebuttals. Delivered instantly.",
    h1: "The Sales Vault", body, crumbs: C(["Free Resources", "/free-resources"]), priority: "0.9" });
}

// ── /free-word-tracks ──
const WT_FAQ = [
  ["Is this free?", "Yes. Enter your info and we’ll send the PDF immediately."],
  ["Who is this for?", "Reps who freeze at stalls, lose posture, or need clean rebuttals that don’t sound pushy."],
  ["Should I memorize the scripts?", "No. Say them once out loud in your natural voice. Tone and posture matter more than perfect wording."],
];
export function freeWordTracks() {
  const body = hero({ kicker: "Free • Word Tracks & Rebuttals", h1: "Stop Freezing. Reopen the Deal.", lede: "Most reps lose deals at the first stall. These are clean, professional word tracks to keep control without sounding pushy or needy.",
    ctas: [["Send me the scripts", "#get"], ["Back to Free Resources", "/free-resources", "ghost"]], note: "Rule: Don’t memorize. Say it once out loud in your voice—tone and posture matter more than the exact wording.",
    aside: pic("word-tracks-preview", [480, 800], "Word Tracks & Rebuttal Scripts preview", { w: 480, h: 720, sizes: "(min-width: 900px) 380px, 90vw", eager: true, cls: "preview" }) })
  + section("What’s inside", `<p class="lead-in">Quick scripts for the most common stalls—built to keep you professional while still moving the deal forward. Use these on the phone, on text, and on the floor.</p>` + cards([
    { k: "01", t: "“I’m just looking.”", d: "Open the conversation without being a clown." }, { k: "02", t: "The Walmart Exit", d: "Stop the “I gotta run” stall before they vanish." },
    { k: "03", t: "The Spouse Delay", d: "Bring the missing decision-maker into the frame." }, { k: "04", t: "The Reopen Text", d: "Wake up ghosted leads without sounding desperate." }], 4) + ctas([["Get the word tracks", "#get"], ["Ask a Question", "/contact", "ghost"]]), { soft: true })
  + section("Get the Word Tracks & Rebuttal Guide", `<div class="two"><div><p>Enter your info and we’ll send the PDF immediately.</p><p class="note">🔒 Locked &amp; private. We hate spam too.</p></div><div>${ghlForm("wordtracks", { title: "Word Tracks & Scripts" })}</div></div>${formEmbedScript}`, { kicker: "Free download", id: "get" })
  + section("Want weekly accountability?", `<p class="lead-in">Scripts are step one. Structure and reps are what make them automatic.</p>${ctas([["See the 8-Week Challenge", "/8-week-challenge"], ["Program Pricing", "/program-pricing", "ghost"]])}`, { kicker: "Next step", soft: true })
  + faqBlock(WT_FAQ, "Word Tracks Questions", "Quick clarity before you download.");
  return page({ path: "/free-word-tracks", title: "Free Word Tracks & Rebuttals | MC Sales Training", desc: "Free dealership word tracks to reopen stalled deals: just looking, the Walmart exit, the spouse delay and the reopen text. No pressure.",
    h1: "Stop Freezing. Reopen the Deal.", body, crumbs: C(["Free Resources", "/free-resources"], ["Free Word Tracks", "/free-word-tracks"]), faqs: WT_FAQ, image: "/img/word-tracks-preview-800.webp" });
}

// ── /daily-non-negotiables ──
const DN_FAQ = [
  ["Is this free?", "Yes. Daily Non-Negotiables is a free one-page routine you can download instantly."],
  ["Who is it for?", "Automotive sales professionals who want a consistent morning routine that eliminates drift and creates momentum."],
  ["What should I do after I download it?", "Run it exactly for 7 days without customizing it. Then adjust based on what you learn."],
];
export function dailyNonNegotiables() {
  const body = hero({ kicker: "Free Resources", h1: "Daily Non-Negotiables", lede: "Grab the 1-page routine and control your first hour.", ctas: [["Send it to me →", "#get"], ["See Programs →", "/program-pricing", "ghost"]], note: "Free • 1-page routine • built to stop drift",
    aside: pic("daily-non-negotiables-preview", [768, 1200], "Daily Non-Negotiables checklist preview", { w: 768, h: 512, sizes: "(min-width: 900px) 460px, 92vw", eager: true, cls: "preview" }) })
  + section("", cards([
    { k: "Start here", t: "Inventory walk", d: "Stop sounding like you don’t know your own product." },
    { k: "Momentum", t: "Early follow-up", d: "Hit your “not-yet” list before the day gets noisy." },
    { k: "Process", t: "Service drive", d: "Spot customers tired of repair bills and flip them." }]) + ctas([["Get the routine →", "#get"]]), { soft: true })
  + section("The first-hour routine that kills hesitation", `<p class="lead-in">Most reps don’t have a sales problem—they have a drift problem. This one-page checklist forces momentum before excuses show up. Run it fast. Repeat it daily. Build pressure toward results.</p>${ctas([["Get the checklist →", "#get"], ["Ask a Question →", "/contact", "ghost"]], "Rule: don’t “adjust” it on day one. Run it for 7 days exactly as written.")}`, { kicker: "What’s inside" })
  + section("Where should we send your 1-page checklist?", `<div class="two"><div><p class="ck">Free routine • 1-page</p><p>Enter your info and the checklist is delivered instantly.</p><p class="note">🔒 Locked &amp; private. We hate spam too. Rule: Don’t customize on day one. Run it for 7 days as written.</p><p><a href="/program-pricing">I want training →</a></p></div><div>${ghlForm("dnn", { title: "Daily Non-Negotiables" })}</div></div>${formEmbedScript}`, { kicker: "Free routine", id: "get", soft: true })
  + section("Want the full system?", `<p class="lead-in">Start with the routine, then add structure and accountability.</p>${ctas([["See Programs →", "/program-pricing"], ["Get Word Tracks →", "/free-word-tracks", "ghost"]])}`, { kicker: "Next step" })
  + faqBlock(DN_FAQ, "Daily Non-Negotiables Questions", "Quick clarity before you download.");
  return page({ path: "/daily-non-negotiables", title: "Daily Non-Negotiables (Free Checklist) | MC Sales Training", desc: "A free one-page first-hour routine for car salespeople: inventory walk, early follow-up and service drive. Run it for 7 days as written.",
    h1: "Daily Non-Negotiables", body, crumbs: C(["Free Resources", "/free-resources"], ["Daily Non-Negotiables", "/daily-non-negotiables"]), faqs: DN_FAQ, image: "/img/daily-non-negotiables-preview-1200.webp" });
}

// ── /free-mini-book (the free Sales Mini-Book; GHL form "Mini Book" delivers the PDF; old URL /mini-book redirects here) ──
const MB_FAQ = [
  ["Is this free?", "Yes. Enter your info and we’ll send the PDF immediately."],
  ["Who is it for?", "Automotive sales professionals who want structure: habits, follow-up standards, and language that prevents price grinding."],
  ["What should I do after I download it?", "Run it exactly for 7 days without customizing it. Then adjust based on what you learn from real results."],
];
export function miniBook() {
  const body = hero({ kicker: "Free Resources", h1: "Get the Free Mini-Book", lede: "Get the PDF and run it for 7 days exactly as written.", ctas: [["Send it to me →", "#get"], ["See Programs →", "/program-pricing", "ghost"]], note: "Free • tactical PDF • no fluff",
    aside: pic("mini-book-preview", [768, 1200], "Free Mini-Book preview", { w: 768, h: 512, sizes: "(min-width: 900px) 460px, 92vw", eager: true, cls: "preview" }) })
  + section("", cards([
    { k: "Start here", t: "Morning routine", d: "Start the day in order so the floor doesn’t run you." },
    { k: "Language", t: "Follow-up standards", d: "Messages that earn replies without sounding desperate or “checking in.”" },
    { k: "Process", t: "Consistency checklist", d: "Small daily moves that stack into predictable income." }]) + ctas([["Get the PDF →", "#get"]]), { soft: true })
  + section("Structure you can run today", `<p class="lead-in">This isn’t motivation. It’s a clean sequence: daily habits, follow-up standards, and language control. Use it as written for 7 days—then adjust based on real results.</p>${ctas([["Get the mini-book →", "#get"], ["Ask a Question →", "/contact", "ghost"]])}`, { kicker: "What you’ll get" })
  + section("Where should we send your PDF?", `<div class="two"><div><p class="ck">Free mini-book • Tactical PDF</p><p>Enter your info and the PDF is delivered instantly.</p><p class="note">🔒 Locked &amp; private. We hate spam too. Rule: Don’t customize on day one. Run it for 7 days as written.</p><p><a href="/program-pricing">I want training →</a></p></div><div>${ghlForm("minibook", { title: "Mini-Book Registration" })}</div></div>${formEmbedScript}`, { kicker: "Get the PDF", id: "get", soft: true })
  + section("Want accountability and structure?", `<p class="lead-in">Start with the mini-book, then move into a weekly cadence that forces execution.</p>${ctas([["See the 8-Week Challenge →", "/8-week-challenge"], ["Program Pricing →", "/program-pricing", "ghost"]])}`, { kicker: "Next step" })
  + faqBlock(MB_FAQ, "Mini-Book Questions", "Quick clarity before you download.");
  return page({ path: "/free-mini-book", title: "Free Sales Mini-Book (PDF) | MC Sales Training", desc: "Download the free MC Sales Training mini-book: a morning routine, follow-up standards and a consistency checklist for dealership salespeople.",
    h1: "Get the Free Mini-Book", body, crumbs: C(["Free Resources", "/free-resources"], ["Free Mini-Book", "/free-mini-book"]), faqs: MB_FAQ, image: "/img/mini-book-preview-1200.webp" });
}

// ── /sales-calendar ──
// The FAQ there said "about 20–30 minutes" while the nav calls it a "15-Min Fit Call": durations left out (README › Conflicts).
const SC_FAQ = [
  ["Is the call free?", "Yes — this is a free strategy call focused on diagnosing your leak and mapping next steps."],
  ["What should I bring?", "One real example: a stalled deal, objection, follow-up message thread, or a “what do I say next?” moment."],
  ["Will I get scripts?", "You’ll leave with language tied to your scenario and the step-by-step sequence to run it."],
  ["Is this for a specific industry?", "Yes—this is built for dealership sales + BDC/Internet. The framework also applies elsewhere, but the examples, language, and follow-up standards are dealership reality."],
  ["What happens after I book?", "You’ll receive a confirmation and calendar invite. Show up with your scenario and we’ll tighten the sequence."],
  ["What if I’m not a fit?", "We’ll tell you directly. If we can’t help, we’ll point you to the best next step we can."],
  ["Can my team book?", "Yes — book one slot first so we can route the right next step for the group."],
  ["Is this a sales pitch?", "No. The call is for clarity and next steps. If training is a fit, you’ll get an option — not pressure."],
];
export function salesCalendar() {
  const body = hero({ kicker: "Dealership Sales + BDC • Free Strategy Call", h1: "Book a Sales Strategy Call", lede: "We find the one leak costing you deals and map a clean 7-day plan you can run daily — more appointments, cleaner next steps, better follow-up replies, and less price-grinding.",
    ctas: [["Open Calendar →", "#book"], ["Not ready to book? Get Free Tools →", "/free-resources", "ghost"]], note: "Book your slot • Confirmation + invite sent instantly" })
  + section("", steps([["Choose a time", "Pick a slot that works. Book it in under a minute."], ["Bring one scenario", "A stalled deal, objection, or follow-up problem you want fixed."], ["Leave with next steps", "A clean sequence you can run for the next 7 days."]]), { soft: true })
  + section("Select a Time", `<ul class="chips"><li>Free strategy call</li><li>No pressure</li><li>Leave with word tracks + a 7-day plan</li><li>Clarity first (no pitch)</li></ul>${bookingEmbed()}`, { kicker: "Book", id: "book" })
  + faqBlock(SC_FAQ, "FAQ", "Straight answers so you can book with confidence.")
  + related([["Program Pricing", "/program-pricing", "Compare coaching, team training and advisory."], ["The Sales Vault", "/free-resources", "Free word tracks and checklists."], ["How the System Works", "/how-the-system-works", "What we install, and why."]], "Before your call");
  return page({ path: "/sales-calendar", title: "Book a Sales Strategy Call | MC Sales Training", desc: "Book a free strategy call: bring one stalled deal or objection and leave with word tracks and a clean 7-day plan you can run daily.",
    h1: "Book a Sales Strategy Call", body, crumbs: C(["Book a Call", "/sales-calendar"]), faqs: SC_FAQ, priority: "0.9" });
}

// ── /get-trained ──
const GT_FAQ = [
  ["Where should I start?", "Start free in the Sales Vault. If you want direct help, book a strategy call. If you want a structured sprint with accountability, see the 8-Week Challenge."],
  ["What’s different about this vs “tips” training?", "Tips don’t compound. Systems do. You’ll run a repeatable sequence for opening, discovery, follow-up, and next steps—so results stop swinging."],
  ["Is this only for automotive?", "Automotive is the core. The sequence fits any high-ticket, consultative sale where discovery and next-step control matter."],
  ["What’s the best next step if I’m serious?", "If you want to move fast with direct help: book a strategy call. If you want the full structured sprint: see the 8-Week Challenge."],
];
export function getTrained() {
  const body = hero({ kicker: "Process • Psychology • Execution", h1: "Stop losing gross to “I need to think about it.”", lede: "The buyer changed. The dealership didn’t. We install a repeatable automotive sales sequence that gives you control from the first hello—so your month stops depending on luck, walk-ins, or one deal.",
    ctas: [["Access the Sales Vault (Free)", "/free-resources"], ["Book a Strategy Call", "/sales-calendar", "ghost"], ["See the 8-Week Challenge", "/8-week-challenge", "ghost"]], note: "No fluff. No guru talk. Built for real dealership floors. Systems you can run today." })
  + section("Mechanics that make “consistent” normal", `<p class="lead-in">Not theory. Control. The deal feels different when you run the sequence—openings, discovery, commitment, follow-up, and a daily execution plan.</p>` + cards([
    { k: "01", t: "Pattern-Interrupt Openings", d: "Earn attention in the first 30 seconds without sounding “salesy.”" }, { k: "02", t: "Psychological Discovery", d: "Know what matters before pricing becomes the fight." },
    { k: "03", t: "Follow-Up That Gets Replies", d: "Messaging structure that creates momentum instead of annoyance." }, { k: "04", t: "Daily Execution Blueprint", d: "Keep 10 deals working so one deal never controls your week again." }], 4) + ctas([["Start Free", "/free-resources"], ["Program Pricing", "/program-pricing", "ghost"]]), { kicker: "What you’ll control", soft: true })
  + section("Start here if you want wins fast", `<p class="lead-in">Get inside the Vault and install the basics that stop roller-coaster months.</p>${bullets(["Openings that don’t trigger the “car salesman” wall.", "Discovery that prevents price grinders.", "Follow-up that earns replies (not “checking in”).", "A daily plan to keep 10 deals working."])}${ctas([["Enter the Vault", "/free-resources"]], "Already serious? <a href=\"/sales-calendar\">Book your call →</a>")}`, { kicker: "Quick start" })
  + section("Why most reps drift at $4k months", `<p class="lead-in">This is not a motivation problem. It’s a mechanics problem. When the sequence is wrong, your income becomes random—even if you’re “good with people.”</p>` + cards([
    { k: "01", t: "The Follow-Up Trap", d: "“Just checking in” trains customers to ignore you. You need value + structure that earns replies." }, { k: "02", t: "The Price Grind", d: "If you’re arguing over $500, the deal was lost earlier. Discovery failed, so pricing becomes the fight." },
    { k: "03", t: "The Talent Myth", d: "Being a “people person” doesn’t scale. Systems do. Confidence comes from sequence, not vibes." }, { k: "04", t: "The One-Deal Week", d: "When one deal controls your mood, you stop selling. The system keeps 10 deals working at all times." }], 4) + ctas([["Send Me the Vault", "/free-resources"], ["Talk to Us First", "/sales-calendar", "ghost"]]), { kicker: "Diagnosis", soft: true })
  + section("Fundamentals + 2026 buyer psychology", `<p class="lead-in">Fundamentals that hold up for 50 years + modern buyer behavior for today. Process meets precision.</p>` + cards([
    { k: "Steel-Frame Fundamentals", t: "<a href=\"/mark\">Mark Casper</a>", d: "Mechanics. Habits. Real-world execution that makes results predictable." },
    { k: "2026 Buyer Psychology", t: "<a href=\"/jared\">Jared Casper</a>", d: "Modern messaging, digital leverage, and empathy-based discovery that closes." }], 2) + ctas([["Enter the Vault", "/free-resources"], ["Book Strategy Call", "/sales-calendar", "ghost"]]), { kicker: "The Casper Advantage" })
  + section("Choose your path", `<p class="lead-in">Start free, install the basics, then pick the level of support that matches your urgency.</p>` + cards([
    { k: "Free", t: "Sales Vault", d: "Guides, habits, and scripts that install fundamentals fast.", cta: ["Enter Free Vault", "/free-resources"] },
    { k: "Intensive", t: "8-Week Challenge", d: "The system to rebuild your pipeline, your language, and your consistency.", cta: ["See the Challenge", "/8-week-challenge"] },
    { k: "Direct Help", t: "Coaching / Advisory", d: "We diagnose your leaks and install a plan you can execute immediately.", cta: ["Book a Call", "/sales-calendar"] }]), { kicker: "Next step", soft: true })
  + faqBlock(GT_FAQ, "FAQ", "Straight answers before you waste time.")
  + section("Ready to stop guessing?", `<p class="lead-in">Install the sequence. Run it daily. Make “consistent” your normal.</p>${ctas([["Start Free", "/free-resources"], ["Book a Call", "/sales-calendar", "ghost"]])}<p class="small">MC Sales Training • The Casper Advantage • Automotive Sales Systems</p>`, { center: true });
  return page({ path: "/get-trained", title: "Get Trained: Dealership Sales Training | MC Sales Training", desc: "Stop losing gross to “I need to think about it.” Openings, discovery, follow-up and a daily plan that keeps 10 deals working.",
    h1: "Stop losing gross to “I need to think about it.”", body, crumbs: C(["Get Trained", "/get-trained"]), faqs: GT_FAQ, priority: "0.8" });
}

// ── /dealership-sales-bdc-more-appointments ──
const BD_FAQ = [
  ["Where should I start?", "Start with the Vault. Click Get Free Word Tracks & Follow-Up Cadence above and unlock access."],
  ["Is this scripts or a full process?", "Both. Scripts only work when they’re attached to a sequence (opening → discovery → transition → next step → follow-up)."],
  ["Will this work if my store is chaos / I have no time?", "Yes—because it’s a sequence and a daily standard, not motivation. Start with one asset (Vault word tracks or follow-up cadence), run it for 7 days, and measure replies, appointments, and next steps."],
  ["What’s the fastest way to improve this week?", "Stop improvising follow-up. Use one cadence, one tone, and one next-step ask. Then iterate with real data."],
  ["Where can I see results?", "Visit <a href=\"/proof\">Proof / Results</a>."],
];
export function bdcAppointments() {
  const vault = ["Get Free Word Tracks & Follow-Up Cadence →", "#salesVault"], call = ["Book a Strategy Call →", "/sales-calendar", "ghost"];
  const body = hero({ kicker: "2026-ready execution • no fluff • repeatable", h1: "Dealership Sales & BDC: More Appointments. More Closes. Better Grosses.", lede: "A simple sales operating system for real dealership conversations: word tracks for openings, discovery questions that stop price-grinding, next-step control, and follow-up that gets replies.",
    ctas: [vault, call, ["How The System Works →", "/how-the-system-works", "ghost"]], chips: ["Word tracks tied to exact moments", "Follow-up cadence you can copy", "Standards that stop price-grinding"] })
  + section("Get a real win this week", cards([
    { k: "Free • Fastest start", t: "Word tracks + follow-up cadence", d: "Use today: openings, discovery prompts, next-step language, and a follow-up cadence that gets replies.", list: ["Copy/paste word tracks", "Clean next-step closes", "Follow-up cadence that earns replies"], cta: [vault[0], vault[1]], after: "No fluff. Just usable tools." },
    { k: "PDF", t: "The Mini-Book", d: "A practical, repeatable daily standard for selling—built for real conversations, not theory.", list: ["Daily execution rhythm", "Follow-up standards", "Momentum habits"], cta: ["Get The PDF →", "#miniBook"], after: "Run it for 7 days." },
    { k: "1-Page", t: "Daily Non-Negotiables", d: "A one-page routine to start your day with control: activity, standards, and the moves that create deals.", list: ["First-hour checklist", "Activity that matters", "Consistency without burnout"], cta: ["Get The Checklist →", "#dailyNonNeg"], after: "Simple. Brutal. Effective." }]), { kicker: "Start here", soft: true })
  + section("What this system fixes", `<p class="lead-in">These are the patterns that destroy close rate, gross, and momentum—no matter the industry.</p>` + cards([
    { k: "Stalls", t: "“I need to think about it”", d: "Usually not a closing problem. It’s a discovery + next-step control problem. We fix the sequence upstream." },
    { k: "Ghosting", t: "Follow-up that gets ignored", d: "“Checking in” trains people to ignore you. We replace it with value-driven follow-up + micro-commitments." },
    { k: "Price grinding", t: "Mini commissions & discounts", d: "If you’re fighting over small numbers, the deal was lost earlier. We install better discovery and transitions." }]) + ctas([["See The Mechanics →", "/courses-on-demand"], ["See Proof / Results →", "/proof", "ghost"]]), { kicker: "The money leaks" })
  + section("Choose your path", `<div class="two"><div><p class="lead-in">Start free. If you want speed + structure, pick a program path based on where you’re stuck.</p>${bullets(["Self-led: use free tools + assets", "Structured sprint: 8-week execution + accountability", "Guided: coaching / team training / advisory (when available)"])}${ctas([["View Program Options →", "/program-pricing"], ["8-Week Structure →", "/8-week-challenge-apply", "ghost"]])}</div>
<div class="panel"><p class="ck">Not sure what you need?</p><h3>Book a strategy call</h3><p>Bring one real scenario: stalled deal, objection, follow-up thread, or a “what do I say next?” moment.</p>${bullets(["Clarity first (not a pressure pitch)", "Leave with a 7-day execution plan"])}${ctas([["Book a Strategy Call →", "/sales-calendar"], ["Ask A Question →", "/contact", "ghost"]])}</div></div>`, { kicker: "Next step", soft: true })
  + faqBlock(BD_FAQ, "Quick answers")
  + section("Unlock the free tools", `<div class="cards c3"><div id="salesVault"><p class="ck">Free word tracks</p><h3>Unlock word tracks + follow-up cadence</h3>${ghlForm("vault", { title: "Unlock Sales Vault" })}</div><div id="miniBook"><p class="ck">PDF</p><h3>Get the Mini-Book</h3>${ghlForm("minibook", { title: "Mini Book" })}</div><div id="dailyNonNeg"><p class="ck">1-Page</p><h3>Daily Non-Negotiables</h3>${ghlForm("dnn", { title: "Daily Non-Negotiables" })}</div></div>${formEmbedScript}`, { kicker: "Ready to install the system? Start free. Then pick a path.", id: "unlock" });
  return page({ path: "/dealership-sales-bdc-more-appointments", title: "Sales & BDC: More Appointments | MC Sales Training", desc: "More appointments, more closes, better grosses for dealership Sales and BDC: word tracks, discovery, next-step control and follow-up that gets replies.",
    h1: "Dealership Sales & BDC: More Appointments", body, crumbs: C(["Sales & BDC Training", "/dealership-sales-bdc-more-appointments"]), faqs: BD_FAQ, priority: "0.8" });
}

// ── /sales-training-built-on-process ──
const SP_FAQ = [
  ["Is the Sales Vault really free?", "Yes. The free vault is designed to give you real wins quickly."],
  ["Is this only for automotive sales?", "Automotive is our core, but the process applies broadly."],
  ["How fast will I see improvement?", "Most people feel improvement immediately by using structure."],
  ["Do you teach scripts or a full process?", "Scripts are tied to specific moments inside a full process."],
  ["Will this help with price objections?", "Yes. Better discovery and transitions reduce price pressure."],
  ["What should I do first?", "Start with <a href=\"/free-resources\">Free Resources</a>, then choose your path."],
];
export function builtOnProcess() {
  const body = hero({ kicker: "Built by real sales operators", h1: "Sales Training Built on Process.", lede: "A structured, ethical system that helps sales professionals communicate clearly, handle objections confidently, and improve consistency.",
    ctas: [["Get Free Tools", "/free-resources"], ["View Programs", "/program-pricing", "ghost"]], note: "Built by real sales operators. Designed for repeatable execution." })
  + section("", cards([
    { k: "What we do", t: "Turn “Good Conversations” into Consistent Results.", d: "Most teams rely on personality and improvisation. We install a repeatable process that makes performance easier to sustain.", cta: ["How the System Works", "/how-the-system-works"] },
    { k: "How it helps", t: "Simple Structure. Better Control.", d: "Improve your opening, discovery, transitions, and commitment — reducing uncertainty and unnecessary price pressure.", cta: ["Start with Free Tools", "/free-resources"] }], 2), { soft: true })
  + section("Built for Real-World Conversations", `<p class="lead-in">Practical training designed to hold up in live customer interactions.</p>` + cards([
    { k: "Clarity", t: "Process Over Guesswork", d: "Clear steps you can follow in the moment without sounding scripted." },
    { k: "Confidence", t: "Objection Handling", d: "Frameworks that help you stay calm and protect the value of your offer." },
    { k: "Consistency", t: "Repeatable Execution", d: "Systems that support follow-up, stronger conversations, and reliable months." }]), { kicker: "Why it works" })
  + section("A Clear Path to Get Started", `<p class="lead-in">Start simple. Build momentum. Choose the right level of support.</p>${steps([["Get Free Tools", "Immediate access to structure you can use right away."], ["Choose Your Program", "Select the track that matches your goals and experience."], ["Execute the System", "Apply the framework and improve week after week."]])}${ctas([["Talk to Us", "/contact"]])}`, { kicker: "How it works", soft: true })
  + section("Ready to Stop Improvising?", `<p class="lead-in">Start free to see the framework, or review programs to select the best next step.</p>${ctas([["Start Free", "/free-resources"], ["View Programs", "/program-pricing", "ghost"]])}`, { center: true })
  + faqBlock(SP_FAQ, "Quick Answers", "Clear answers that keep you moving.")
  + section("Start with Free Tools. Then Choose a Program.", `<p class="lead-in">Install the framework first, then scale it.</p>${ctas([["Get Free Tools", "/free-resources"], ["View Programs", "/program-pricing", "ghost"]])}`, { kicker: "Next step", center: true });
  return page({ path: "/sales-training-built-on-process", title: "Sales Training Built on Process | MC Sales Training", desc: "Dealership sales training built on a repeatable process instead of motivation: clear steps, objection frameworks and consistent execution.",
    h1: "Sales Training Built on Process.", body, crumbs: C(["Sales Training Built on Process", "/sales-training-built-on-process"]), faqs: SP_FAQ, priority: "0.6" });
}

// ── /make-more-money-using-sales ──
const MM_FAQ = [
  ["Is the Sales Vault really free?", "Yes. The free vault is designed to give you real wins quickly."],
  ["Is this only for automotive sales?", "No. The system applies to any sales role where conversations, objections, and follow-up decide outcomes."],
  ["How fast will I see improvement?", "Many people feel improvement immediately because structure replaces guesswork in live conversations."],
  ["Do you teach scripts or a full process?", "Both — scripts are tied to specific moments inside a complete process you can repeat."],
  ["Will this help with objections?", "Yes. Better discovery, transitions, and language reduce pressure and increase commitment."],
  ["What should I do first?", "Start with Free Tools. Get quick wins. Then choose your path based on your goals."],
];
export function makeMoreMoney() {
  const body = hero({ kicker: "Clarity → Action → More Closed Deals", h1: "Make More Money Using Sales.", lede: "Stop guessing. Learn what to say, when to say it, and how to move every conversation closer to a close — with a clear, repeatable system built for real sales moments.",
    ctas: [["Get Free Sales Tools", "/free-resources"], ["View Training Paths", "/program-pricing", "ghost"]], note: "Before: guessing and hesitation. After: clarity and predictable outcomes." })
  + section("", cards([
    { k: "What we do", t: "Remove Guesswork From Selling.", d: "Most salespeople don’t lose because they’re lazy — they lose in the moments they hesitate. We install a simple operating system for conversations so you know the next move and execute with confidence.", cta: ["How the System Works →", "/how-the-system-works"] },
    { k: "How it helps", t: "Clarity → Action → More Closed Deals.", d: "Habits, best practices, and real-world language you can apply immediately — so you stop freezing up, stop rambling, and start moving deals forward.", cta: ["Start with Free Tools →", "/free-resources"] }], 2), { soft: true })
  + section("Built for the Moment That Decides the Sale", `<p class="lead-in">Sales isn’t won in theory — it’s won live, in real conversations. This framework is designed to hold up when it counts.</p>` + cards([
    { k: "Clarity", t: "Know the Next Move", d: "Clear steps and language so you don’t hesitate when the conversation gets real." },
    { k: "Confidence", t: "Handle Pushback Calmly", d: "Stay in control through objections, stalls, and “let me think about it” moments." },
    { k: "Consistency", t: "Predictable Outcomes", d: "Repeatable execution that improves follow-up, commitment, and monthly results." }]), { kicker: "Why it works" })
  + section("A Simple Path to Start Closing More", `<p class="lead-in">Start with clarity. Build the habits. Choose the support level that matches your goals.</p>${steps([["Get Free Tools", "Quick wins that install structure fast — so you can use it today."], ["Choose Your Program", "Pick a track based on your experience and how fast you want results."], ["Execute the System", "Apply the framework in real conversations and improve week after week."]])}${ctas([["Talk to Us →", "/contact"]])}`, { kicker: "How it works", soft: true })
  + section("Stop Guessing. Start Closing.", `<p class="lead-in">Get the free tools first. Then choose the path that helps you execute consistently and earn more.</p>${ctas([["Free Resources →", "/free-resources"], ["Program Pricing →", "/program-pricing", "ghost"]])}`, { center: true })
  + faqBlock(MM_FAQ, "Quick Answers", "Clear answers that keep you moving.")
  + section("Get Clarity First. Then Scale Your Results.", `<p class="lead-in">Install the framework, use it in real conversations, and build predictable outcomes.</p>${ctas([["Get Free Tools →", "/free-resources"], ["View Programs →", "/program-pricing", "ghost"]])}`, { kicker: "Next step", center: true });
  return page({ path: "/make-more-money-using-sales", title: "Make More Money in Car Sales | MC Sales Training", desc: "Learn what to say, when to say it and how to move every conversation closer to a close with a clear, repeatable sales system.",
    h1: "Make More Money Using Sales.", body, crumbs: C(["Make More Money Using Sales", "/make-more-money-using-sales"]), faqs: MM_FAQ, priority: "0.6" });
}
