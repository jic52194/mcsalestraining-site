// Programs: 8-Week Challenge (overview + apply), Program Pricing, Individual Coaching, Team Training, Private Advisory,
// Private Sales Advisory, Membership, AI Executive. Copy is the live site's wording.
import { page, hero, section, cards, bullets, steps, faqBlock, quote, related, ghlForm, formEmbedScript, formButton, bookingEmbed, BOOKING_AI, yt, ctas, SITE, EMAIL } from "../scripts/lib.mjs";

const C = (...c) => [["Home", "/"], ...c];
const course = (path, name, description, extra = {}) => ({ "@context": "https://schema.org", "@type": "Course", name, description, url: SITE + path, provider: { "@id": `${SITE}/#org` }, ...extra });

// ── /8-week-challenge (overview + clickable 35-lesson curriculum; the Mark-led course page was merged here) ──
const LESSONS = [
  ["Week 1: Habits", "Daily cadence that creates consistency.", [["i2tDJWSKAmc", "Dealership Inventory Walk"], ["uz9yoeNf7rM", "Car Sales Morning Routine"], ["lGWu5wZnoNE", "Old School Car Sales Habits"], ["C_19TZtnFLo", "Sales Habits That Increase Results"], ["YyOs6DqEGKI", "One Deal a Day Mindset"]]],
  ["Week 2: Building Relationships", "Listen, connect, and create VIP experiences.", [["agGg0jn86rA", "Why Listening Closes Deals"], ["RVRN1HGlySI", "Answer “Dumb” Questions"], ["rxII-8Tsjac", "Answer Questions Without Getting Defensive"], ["uD0xM26qZW0", "Relationship Selling"]]],
  ["Week 3: Sales Process", "The step-by-step path to closing without guessing.", [["hrhMV2XiM0o", "How the Internet Changed Car Shopping"], ["myS_GgTS2L0", "New to Car Sales? The Process"], ["AqucDj0xS_0", "8-Step Sales Process"], ["3kIkn1S3H14", "Good Talker ≠ Good Closer"]]],
  ["Week 4: Qualifying", "Find needs fast. Control the direction.", [["rCipspPoMBE", "How to Qualify Customers"], ["cXEYY2JulM8", "Service Drive Prospecting"], ["_aUw_CLjDJE", "Build a Book of Business"], ["rRHhN4SEvcQ", "Free Mini-Book (Resource)"]]],
  ["Week 5: Working the Deal", "Negotiation + delivery without losing momentum.", [["MSp_sWxeapg", "Car Delivery Checklist"], ["iRhcrkuFRh0", "Radio Station Trick"], ["u6RNV1-4iH0", "Payment Too High Objection"], ["Ou4UJ47W8io", "What Value Means in Sales"]]],
  ["Week 6: Common Objections", "Turn “no” into “yes” using proven scripts.", [["IIpqarko_FE", "Follow-Up Unfinished Leads"], ["hgw08O_rz_Q", "Think About It Objection"], ["IH9Yze_Zk04", "Just Looking Script"], ["zNkn1yjP7Sk", "Price Too High Objection"], ["N5l3cWkTYKw", "4 Common Objections"]]],
  ["Week 7: Being a Sales Professional", "Standards that separate pros from dabblers.", [["a3rcyDk538g", "Don’t Rely on Managers"], ["u0z8ayb3xg4", "10 Min Training Won’t Help"], ["Wbtd3G7Wacc", "#1 Reason Salespeople Lose Deals"], ["rRmZbQKm30o", "Good Talker Doesn’t Make Good Sales"], ["ihGciP5fLy8", "3 Traits of Top Performers"]]],
  ["Week 8: Final Thoughts", "Wrap-up and how to keep momentum.", [["cWVczIDShGc", "Reopen Dead Conversations"], ["ivlQs0qY2TQ", "Thinking About Car Sales?"], ["qINTTwOMoN4", "No-Fluff Training"], ["fDafAOrOqWg", "Struggling in Car Sales?"]]],
];
const CH_FAQ = [
  ["Who teaches it?", "Mark Casper leads the program and the week-by-week curriculum."],
  ["What’s the time commitment?", "Weekly lessons + execution prompts built to fit dealership pace. You implement during normal rhythm."],
  ["Is it for new reps or veterans?", "Both — new reps get structure; vets get consistency, cleaner qualifying, and stronger commitment."],
  ["Is this BDC-only?", "No — the structure applies to floor + BDC: habits, follow-up, qualifying, commitment, and objections."],
  ["What’s included?", "Weekly videos, coaching cadence guidance, scripts/word-tracks, and roleplay-style prompts."],
  ["How much does it cost?", "Starts at $49/week (see enrollment for current options)."],
];
export function challenge() {
  const total = LESSONS.reduce((n, w) => n + w[2].length, 0);
  const body = hero({ kicker: "Mark Casper led • 8-week execution system", h1: "Build consistent sales habits in 8 weeks — with a weekly structure your team actually runs.",
    lede: "Weekly videos + coaching cadence + scripts/word-tracks + roleplay prompts — organized into an 8-week map so floor + BDC always know what to run next.",
    ctas: [["Apply / Join the Challenge", "/8-week-challenge-apply"], ["See the week-by-week map", "#curriculum", "ghost"]],
    note: "Takes ~60 seconds • Starts at $49/week • Built for floor reps, BDC/Internet reps, and desk/BDC managers",
    chips: ["Mark Casper led", "Week-by-week curriculum (not “tips”)", `${total} lesson videos`, "Weekly cadence installed"] })
  + section("Who it’s for, what it fixes, and what you’ll run each week.", `<div class="cards c2">
<article class="card"><h3>Who it’s for</h3>${bullets(["Floor sales reps", "BDC / Internet reps", "Desk & BDC managers who need consistent weekly execution (not “tips”)"])}</article>
<article class="card"><h3>What it feels like today</h3>${bullets(["Results swing week to week", "Reps “know what to do” but don’t do it consistently", "Follow-up slips, leads go cold", "Managers are tired of repeating basics"])}</article>
<article class="card"><h3>The outcome</h3><p>Install an 8-week sales routine that makes daily activity non-negotiable — tightening follow-up discipline, improving appointment consistency, and reducing stalls (especially “I’ll think about it”).</p><p>KPI focus areas you can track weekly: follow-up compliance, appointments set, show rate, and “think about it” stall-to-commit conversions.</p></article>
<article class="card"><h3>How it works</h3>${bullets(["8-week map: Habits → Relationships → Process → Qualifying → Deal → Objections → Professionalism → Final", "Weekly video lessons (Mark-led)", "Coaching cadence + roleplay-style prompts", "Scripts / word-tracks tied to real moments"])}</article></div>`, { kicker: "The snapshot", soft: true })
  + section("Watch the program structure", `<div class="two"><div>${yt("myS_GgTS2L0", "MC Sales Training — 8-Week Challenge Preview", { playerId: "mc8wPlayer" })}<p class="small">Now playing: <span id="nowPlaying">8-Week Challenge preview</span></p></div>
<div><p>Click any lesson below to swap the main video instantly. Built for weekly execution — not “motivation content.”</p>
<div class="panel"><h3>Join the 8-Week Challenge</h3><p>A week-by-week operating system you run: habits, follow-up discipline, qualifying, commitment, objections, and professionalism — with scripts + roleplay prompts to keep execution consistent.</p>
<p class="price">$49 / week</p><p class="small">Starts at $49/week (see enrollment for current options)</p>
${bullets(["Cap: 25 seats per weekly intake", "Includes: videos + cadence + scripts + prompts", "Support included: CarSalesSoftware.com support (Mon–Fri) + monthly CRM group coaching (last Friday each month)"])}
${ctas([["Apply / Join", "/8-week-challenge-apply"], ["Talk to us first", "/sales-calendar", "ghost"]])}<p class="note">Not ready yet? <a href="/free-resources">Start with Free Resources →</a></p></div></div></div>`, { id: "watch" })
  + section("Everything needed to make daily activity non-negotiable.", cards([
    { t: "8-week curriculum map", d: "Run the right focus this week (not “everything at once”)." }, { t: "Weekly Mark-led videos", d: "Short lessons tied to real floor/BDC moments." },
    { t: "Coaching cadence guidance", d: "Manager rhythm for consistency and accountability." }, { t: "Scripts / word-tracks", d: "Qualifying, commitment, objections, and follow-up." },
    { t: "Roleplay-style prompts", d: "Practice what happens on Tuesday, not theory." }, { t: "Structure that reduces stalls", d: "Cleaner commitment so “I’ll think about it” doesn’t drift." }]), { kicker: "What you get", soft: true })
  + section("Three steps. Then you run the cadence.", steps([["Apply / Join", "Enroll (starts at $49/week) on the <a href=\"/8-week-challenge-apply\">application page</a> or <a href=\"/#enroll\">enroll directly</a>."], ["Follow the week-by-week map", "Videos + scripts + prompts tell you what to run."], ["Execute on the floor / in BDC", "Managers coach this week’s focus — and repetition builds consistency."]]), { kicker: "How it works" })
  + section("8-week map (click a lesson to play)", `<div class="lessons">${LESSONS.map(([t, d, ls]) => `<div class="week"><h3>${t}</h3><p class="small">${d} • ${ls.length} lessons</p><ul>${ls.map(([id, n]) => `<li><a href="https://www.youtube.com/watch?v=${id}" data-lesson="${id}" data-title="${n.replace(/"/g, "&quot;")}" target="_blank" rel="noopener">${n}</a></li>`).join("")}</ul></div>`).join("")}</div>
<div class="panel" style="margin-top:18px"><h3>What Mark focuses on</h3><p>Mark teaches the floor: habits, investigation, commitment, turnover, and follow-up—built to create consistent performance. This isn’t theory. It’s the weekly execution sequence—what to do, what to say, and how to stop drifting so your results stabilize.</p>
${bullets(["Weeks 1–2: Habit reconstruction + daily cadence.", "Weeks 3–4: Investigation (finding the decision drivers and money).", "Weeks 5–6: Commitment + numbers (no more price fights).", "Weeks 7–8: Turnover + follow-up (residual + referrals)."])}<p>Read more about <a href="/mark">Mark Casper</a>.</p></div>`, { kicker: "Curriculum • Habits → Relationships → Process → Qualifying → Deal → Objections → Professionalism → Final", id: "curriculum", soft: true })
  + faqBlock(CH_FAQ, "Quick clarity before you apply.", "No fluff — just what you need to decide.")
  + section("", ctas([["Apply / Join the Challenge", "/8-week-challenge-apply"], ["Compare all programs", "/program-pricing", "ghost"]], "60 seconds • Starts at $49/week • Weekly intake capped at 25 seats"), { center: true });
  return page({ path: "/8-week-challenge", title: "8-Week Challenge Curriculum | MC Sales Training", desc: "The Mark Casper-led 8-week map: 35 lesson videos, scripts, roleplay prompts and a coaching cadence for floor and BDC. Starts at $49/week.",
    h1: "Build consistent sales habits in 8 weeks", body, crumbs: C(["Programs", "/program-pricing"], ["8-Week Challenge", "/8-week-challenge"]), faqs: CH_FAQ, priority: "0.9",
    schema: [course("/8-week-challenge", "8-Week Challenge", "Mark Casper-led 8-week execution system with weekly video lessons, scripts and roleplay prompts for dealership floor and BDC reps.", { offers: { "@type": "Offer", price: "49", priceCurrency: "USD", category: "Subscription", description: "Starts at $49/week", url: SITE + "/8-week-challenge-apply" }, hasCourseInstance: { "@type": "CourseInstance", courseMode: "online", instructor: { "@type": "Person", name: "Mark Casper", url: SITE + "/mark" } } })] });
}

// ── /8-week-challenge-apply ──
const AP_FAQ = [
  ["Is this for beginners or experienced reps?", "Both. Beginners get structure fast. Experienced reps clean up the gaps that cause stalls, price grinders, and inconsistent months."],
  ["What if I’m busy—can I still keep up?", "Yes. The point is a repeatable weekly focus so you can apply it inside real conversations, not add hours of theory."],
  ["What should I do before unlocking access?", "Start with Free Tools to see the framework, then unlock the 8-week structure when you want accountability."],
];
export function challengeApply() {
  const unlock = ["Unlock the Challenge →", "#apply"];
  const body = hero({ kicker: "Program", h1: "The 8-Week Challenge", lede: "Structured weekly execution built to fix follow-up, sharpen language, and create predictable commission months. This isn’t motivation—it’s a cadence you can run.",
    ctas: [unlock, ["Unlock Free Tools →", "/free-resources", "ghost"]], note: "Built for: new reps who need structure + experienced reps who want higher close rates and cleaner gross." })
  + section("What you’re installing", `<p class="lead-in">A weekly system you can run without guessing.</p>` + cards([
    { k: "01", t: "Execution rhythm", d: "Weekly focus areas so you stop improvising and start stacking repeatable actions that produce results.", after: "Outcome: consistency without burnout." },
    { k: "02", t: "Word tracks that work", d: "Clean language that prevents objections instead of chasing them after they happen.", after: "Outcome: less price grinding." },
    { k: "03", t: "Accountability + coaching", d: "Structure that creates follow-through—so the training shows up in your numbers.", after: "Outcome: measurable improvement." }]) + ctas([unlock, ["Ask a Question →", "/contact", "ghost"]]), { kicker: "Overview" })
  + section("Built for", cards([
    { k: "Built for", t: "Sales consultants", list: ["New reps who need a real foundation", "Reps getting ghosted after “good” conversations", "Reps stuck in price grinders and mini-commissions", "Reps with follow-up gaps and weak process"], cta: ["Unlock Free Tools →", "/free-resources"] },
    { k: "Built for", t: "Managers + owners", list: ["Standardizing a store-wide sales process", "Improving consistency across reps", "Reducing “wing it” culture", "Increasing close rate without pressure tactics"], cta: ["Talk to Us →", "/contact"] }], 2), { soft: true })
  + section("8 weeks. Clear focus. Real progress.", `<p class="lead-in">Each week locks in one core skill set so performance becomes easier to repeat. See every lesson on the <a href="/8-week-challenge#curriculum">8-week curriculum map</a>.</p>` + cards([
    { k: "Weeks 1–2", t: "Habits + relationships", d: "Daily non-negotiables, professional routines, and a customer approach that builds trust quickly.", after: "Theme: foundation first." },
    { k: "Weeks 3–4", t: "Sales process + qualifying", d: "Greeting, investigation, transitions, and qualification systems that prevent wasted time and weak deals.", after: "Theme: control the room." },
    { k: "Weeks 5–6", t: "Working the deal", d: "Structure for presenting numbers, handling stalls, and keeping momentum without sounding aggressive.", after: "Theme: clarity beats pressure." },
    { k: "Weeks 7–8", t: "Objections + professional standard", d: "Modern rebuttals, confidence language, and standards that protect your income long-term.", after: "Theme: repeatable excellence." }], 4) + ctas([unlock, ["Talk to Us →", "/contact", "ghost"]]), { kicker: "Curriculum" })
  + faqBlock(AP_FAQ, "8-week challenge questions", "Quick clarity before you unlock access.")
  + section("Unlock the 8-Week Challenge", `<div class="two"><div><p>Enter your info and we’ll route you to access. Keep it simple—then execute week-by-week.</p>${bullets(["Weekly focus so your month stops depending on luck.", "Language + structure that prevents price fights.", "Accountability that forces follow-through.", "Built for real dealership floors—no fluff."])}<p class="note">Tip: After you unlock, run it for 7 days before “tweaking” anything. Prefer to pay and start now? <a href="/#enroll">Enroll at $49/week</a>.</p></div><div>${ghlForm("challenge", { title: "8-Week Challenge application" })}</div></div>${formEmbedScript}`, { kicker: "Unlock access", id: "apply" })
  + section("Ready to stop improvising?", `<p class="lead-in">Unlock the 8-week cadence. Install the standards. Make “consistent” normal.</p>${ctas([unlock, ["Talk to Us →", "/contact", "ghost"]])}`, { center: true, soft: true });
  return page({ path: "/8-week-challenge-apply", title: "Apply: 8-Week Sales Challenge | MC Sales Training", desc: "Apply for the 8-Week Challenge: weekly execution that fixes follow-up, sharpens language and builds predictable commission months.",
    h1: "The 8-Week Challenge", body, crumbs: C(["Programs", "/program-pricing"], ["8-Week Challenge", "/8-week-challenge"], ["Apply", "/8-week-challenge-apply"]), faqs: AP_FAQ, priority: "0.8" });
}

// ── /program-pricing ──
const PP_FAQ = [
  ["Is there pricing on this page?", "No. This page helps you choose the right path. Pricing and fit are handled on a short call."],
  ["Which option should I pick?", "Individuals → <a href=\"/individual-coaching\">Individual Coaching</a>. Teams → <a href=\"/team-training\">Team Training</a>. Leaders → <a href=\"/private-advisory\">Private Advisory</a>."],
  ["What makes this different from other training?", "This is scripts + sequence + daily execution—installed and measured, not motivational content."],
];
export function programPricing() {
  const body = hero({ kicker: "MC Sales Training", h1: "Dealership Sales, BDC & Leadership Programs", lede: "Three ways to increase appointments, closes, and gross by installing word tracks, follow-up cadence, and accountability.",
    ctas: [["Compare Programs ↓", "#program-options"], ["Free Tools", "/free-resources", "ghost"]], chips: ["Word tracks for real moments", "Follow-up cadence you can copy", "Standards that protect gross"] })
  + section("3 Ways to Get Trained", `<p class="lead-in">Pick what fits your situation today. Each option has its own page with full details.</p>` + cards([
    { k: "For Individuals", t: "Individual Coaching", d: "Fast execution fixes tied directly to your pipeline.", list: ["Discovery + objections cleaned up fast", "Follow-up cadence that converts", "Weekly targets + reps"], cta: [["Learn More →", "/individual-coaching"], ["Book a Fit Call →", "/sales-calendar"]] },
    { k: "For Teams", t: "Team Training", d: "Standardize language and performance across the entire store.", list: ["Unified scripts + process", "Coaching cadence", "Metrics that drive behavior"], cta: [["Learn More →", "/team-training"], ["See Proof →", "/proof"]] },
    { k: "High-Touch", t: "Private Advisory", d: "Direct advisory for owners and leaders.", list: ["Leadership cadence", "Standards + accountability", "Messaging + system clarity"], cta: [["Learn More →", "/private-advisory"], ["Talk to Us →", "/contact"]] }]), { kicker: "Programs", id: "program-options" })
  + section("Other ways to start", cards([
    { t: "8-Week Challenge", d: "A structured sprint with weekly live coaching. $49/week, cancel anytime.", cta: ["See the Challenge →", "/8-week-challenge"] },
    { t: "Courses On Demand", d: "Self-paced: The Mechanics of Sales and The Language of Persuasion.", cta: ["Browse Courses →", "/courses-on-demand"] },
    { t: "Membership", d: "Community and membership levels, from free Vault access to VIP Advisory.", cta: ["See Membership →", "/membership"] }]), { soft: true })
  + faqBlock(PP_FAQ);
  return page({ path: "/program-pricing", title: "Sales, BDC & Leadership Programs | MC Sales Training", desc: "Compare Individual Coaching, Team Training and Private Advisory for dealership Sales, BDC and leaders. Pricing and fit are set on a short call.",
    h1: "Dealership Sales, BDC & Leadership Programs", body, crumbs: C(["Programs", "/program-pricing"]), faqs: PP_FAQ, priority: "0.9" });
}

// ── /individual-coaching ──
const IC_FAQ = [
  ["Who is individual coaching for?", "Dealership salespeople and BDC reps who want fast execution fixes, clearer language, and consistent follow-up."],
  ["Will this make me sound scripted?", "No. Word tracks are guardrails—not robot scripts. You’ll sound more natural because you’ll know what to say next."],
  ["How quickly will I see improvement?", "Many people feel momentum inside the first week because we focus on speed, sequence, and next-step control. Results vary based on leads, market, and execution."],
  ["What if I’m not sure this is the right fit?", "Book a short fit call. We’ll diagnose your bottleneck and recommend the simplest next step—whether that’s coaching, a program, or just free tools."],
];
export function individualCoaching() {
  const body = hero({ kicker: "For Individuals", h1: "Individual Coaching for Dealership Sales & BDC Execution", lede: "Tight feedback loops, real roleplay, and high accountability—built around your pipeline. Install word tracks, follow-up cadence, and daily standards so you set more appointments, close more deals, and protect gross.",
    ctas: [["Book a Fit Call →", "/sales-calendar"], ["Start Free (Sales Vault) →", "/free-resources", "ghost"]], chips: ["Discovery", "Objections", "Follow-Up", "Next Steps", "Confidence"] })
  + section("", `<div class="cards c2"><article class="card"><p class="ck">Best fit if you’re…</p><h3>Good—but not consistent</h3>${bullets(["Getting leads, but your follow-up is inconsistent.", "Stalling at “I’m just looking” or “I need to think.”", "Talking too much / asking too little (weak discovery).", "Letting deals die after the first contact.", "Relying on “hope” instead of a repeatable plan."])}</article>
<article class="card"><p class="ck">We install…</p><h3>A simple operating system</h3>${bullets(["Word tracks tied to exact moments in the sale.", "A follow-up cadence that earns replies (not “checking in”).", "Next-step control so every conversation ends with a commitment.", "Daily non-negotiables that force momentum.", "Coaching that turns wins into habits."])}</article></div>`)
  + section("Fix the leak. Run it for 7 days. Tighten.", `<p class="lead-in">We don’t “motivate.” We install a small system, run it, measure it, and adjust based on what breaks.</p>${steps([["Diagnose", "Identify your bottleneck: contact, appointment, show, close, or follow-up."], ["Install", "Put in the word tracks + cadence + next-step language that fixes the bottleneck."], ["Execute", "Daily reps + accountability so the system becomes normal—not optional."]])}${ctas([["Book a Fit Call →", "/sales-calendar"], ["See the Full System →", "/how-the-system-works", "ghost"]], "No pressure. If it’s not a fit, we’ll tell you.")}`, { kicker: "How it works", soft: true })
  + section("What You’ll Walk Away With", `<p class="lead-in">Clear language + clear actions + clear standards.</p>` + cards([
    { k: "Language", t: "Word Tracks", d: "Exact phrasing for opening, discovery, transitions, objections, and next steps." },
    { k: "Sequence", t: "Follow-Up Cadence", d: "A repeatable plan for day 0–7 and long-cycle follow-up that earns replies." },
    { k: "Standards", t: "Daily Non-Negotiables", d: "Activity standards that force momentum and give you a scoreboard. Get the free <a href=\"/daily-non-negotiables\">one-page routine</a>." }]), { kicker: "Deliverables" })
  + faqBlock(IC_FAQ)
  + section("", ctas([["Book a Fit Call →", "/sales-calendar"], ["Start Free →", "/free-resources", "ghost"], ["Compare programs", "/program-pricing", "ghost"]]), { center: true });
  return page({ path: "/individual-coaching", title: "Individual Dealership Sales Coaching | MC Sales Training", desc: "1:1 coaching for dealership sales and BDC reps: word tracks, follow-up cadence and daily standards to set more appointments and protect gross.",
    h1: "Individual Coaching for Dealership Sales & BDC Execution", body, crumbs: C(["Programs", "/program-pricing"], ["Individual Coaching", "/individual-coaching"]), faqs: IC_FAQ, priority: "0.8" });
}

// ── /team-training ──
const TT_FAQ = [
  ["Is this for Sales, BDC, or both?", "Both. Team training works best when Sales + BDC run the same language and follow-up cadence—especially around appointment setting and handoffs."],
  ["Will this make the team sound scripted?", "No. Word tracks are guardrails, not robot scripts. The goal is consistent posture and next-step control while keeping each rep natural."],
  ["How do managers keep it from fading after 2 weeks?", "We install scoreboards + a coaching rhythm. When standards are visible, managers can coach execution daily instead of repeating “motivation talks.”"],
  ["What if we’ve tried training before?", "This is installation: scripts tied to sequence + daily execution standards. You run it for 7 days, measure results, then tighten what breaks."],
];
export function teamTraining() {
  const body = hero({ kicker: "For Dealership Teams", h1: "Team Training for Dealership Sales, BDC & Leadership", lede: "Standardize word tracks, follow-up cadence, and daily accountability across the whole store—so performance doesn’t depend on a few “naturals.”",
    ctas: [["Book a Fit Call →", "/sales-calendar"], ["See Proof / Results →", "/proof", "ghost"]], chips: ["Unified Language", "BDC → Sales Handoff", "Scoreboards", "Coaching Rhythm", "Process Adoption"] })
  + section("", `<div class="cards c2"><article class="card"><p class="ck">Best fit if your store has…</p><h3>Inconsistent output across reps</h3>${bullets(["Great months followed by random months.", "Strong closers carrying the board.", "Inconsistent follow-up and weak next steps.", "BDC setting appointments that don’t show.", "Managers repeating the same coaching every week."])}</article>
<article class="card"><p class="ck">We install…</p><h3>A repeatable team operating system</h3>${bullets(["Unified word tracks for the exact moments that stall deals.", "A follow-up cadence everyone runs (not “when they feel like it”).", "Clear next-step control in every conversation.", "Daily standards + scoreboards for visibility.", "A manager coaching rhythm that sticks."])}</article></div>`)
  + section("Language + Sequence + Accountability", `<p class="lead-in">This isn’t “training content.” It’s process installation—so your store runs the same playbook, every day.</p>` + cards([
    { k: "Language", t: "Word Tracks", d: "Scripts tied to exact moments: opening → discovery → transition → next step → objections.", list: ["Better discovery = less price grinding", "Cleaner transitions = fewer stalls", "Stronger commitments = higher shows"] },
    { k: "Sequence", t: "Follow-Up Cadence", d: "Day 0–7 appointment push + long-cycle follow-up your entire team can repeat.", list: ["Text/email/phone sequencing", "What to say after “no response”", "Simple CRM execution rules"] },
    { k: "Execution", t: "Accountability", d: "Daily non-negotiables and scoreboards so managers can coach what they can see.", list: ["Daily activity standards", "Appointment + show visibility", "Weekly coaching rhythm"] }]) + ctas([["Book a Fit Call →", "/sales-calendar"], ["How the System Works →", "/how-the-system-works", "ghost"]], "If it’s not a fit, we’ll tell you."), { kicker: "What’s included", soft: true })
  + section("Install. Practice. Normalize.", `<p class="lead-in">You don’t need more meetings. You need a cadence the store can actually keep running.</p>${steps([["Align", "Define standards, roles, and what “done” looks like (Sales, BDC, managers)."], ["Install", "Put word tracks + sequence into the day-to-day, with reps and call review."], ["Coach", "Managers run scoreboards and coach the same way every week."]])}${ctas([["Book a Fit Call →", "/sales-calendar"], ["Grab Free Tools →", "/free-resources", "ghost"]])}`, { kicker: "Rollout" })
  + faqBlock(TT_FAQ)
  + related([["Private Advisory", "/private-advisory", "For owners and leadership teams."], ["Proof / Results", "/proof", "What we track and tighten first."], ["8-Week Challenge", "/8-week-challenge", "A weekly cadence floor + BDC can run."]]);
  return page({ path: "/team-training", title: "Dealership Team Training: Sales & BDC | MC Sales Training", desc: "Standardize word tracks, follow-up cadence and daily accountability across your whole store so performance doesn’t depend on a few naturals.",
    h1: "Team Training for Dealership Sales, BDC & Leadership", body, crumbs: C(["Programs", "/program-pricing"], ["Team Training", "/team-training"]), faqs: TT_FAQ, priority: "0.8" });
}

// ── /private-advisory (application form) ──
const PA_FAQ = [
  ["Is Private Advisory a good fit for individual reps?", "Usually no. Advisory is designed for owners and leadership teams. Individual reps should start with <a href=\"/free-resources\">Free Resources</a> or <a href=\"/program-pricing\">Program Pricing</a>."],
  ["What outcomes do teams typically focus on?", "Process consistency, cleaner transitions, follow-up standards, accountability cadence, and reducing unnecessary price pressure."],
  ["What should I do first?", "Apply if you’re leadership and you’re ready for implementation. If you’re still exploring, start with Free Resources and compare options on Program Pricing."],
];
export function privateAdvisory() {
  const apply = ["Unlock the application →", "#apply"];
  const body = hero({ kicker: "Advisory • Leadership Only", h1: "Private Advisory & Consulting", lede: "Direct advisory for owners and leadership teams who want cleaner process, tighter execution, and measurable improvement.",
    ctas: [apply, ["Ask a Question →", "/contact", "ghost"]], note: "Best for leadership teams who want standards, accountability, and consistent execution." })
  + section("Not a course. A partnership.", `<p class="lead-in">Private Advisory is built for leaders who want a sales operating system that survives staffing changes. We diagnose how deals actually move, where the leaks live, and what needs to be standardized.</p>
<div class="tiles"><div class="tile"><b>Focus</b>Process + leadership cadence + execution standards</div><div class="tile"><b>Outcome</b>More consistency, fewer stalls, cleaner transitions</div><div class="tile"><b>Format</b>Advisory calls + alignment + implementation guidance</div><div class="tile"><b>Fit</b>Owners &amp; leadership teams</div></div>`, { kicker: "What this is" })
  + section("Owners & leadership teams", `<p class="lead-in">Built for decision-makers who want to standardize the floor: language, steps, accountability, and follow-up discipline.</p>${bullets(["Managers who want a repeatable rhythm (not hero reps)", "Stores with inconsistent closing and weak follow-up discipline", "Teams losing gross to avoidable stalls and price pressure", "Leadership that wants training to become culture (not a one-time event)"])}${ctas([["Apply →", "#apply"], ["Compare paths →", "/program-pricing", "ghost"]])}`, { kicker: "Who it’s for", soft: true })
  + section("A simple 3-step engagement", `<p class="lead-in">Clarity first. Fit second. Execution always.</p>${steps([["Apply", "Share your role, goals, and what feels “stuck” in the process right now."], ["Confirm fit", "If it’s a match, we outline priorities and the best first implementation move."], ["Install the system", "We standardize language, steps, cadence, and accountability across the floor."]])}<p class="note">See the advisory tiers on <a href="/private-sales-advisory">Private Sales Advisory</a> and <a href="/membership">Membership</a>.</p>`, { kicker: "How it works" })
  + section("Apply for Private Advisory", `<span id="mcAdvisoryApply"></span><div class="two"><div><p>Share the basics and we’ll route it correctly. If it’s a fit, we’ll respond with the next step. If not, we’ll route you to the best program path.</p>${bullets(["Leadership cadence + execution standards built for your store.", "Process design that survives staffing changes.", "Accountability rhythm that shows up in numbers."])}<p class="note">Prefer email? <a href="mailto:${EMAIL}?subject=Private%20Advisory%20Inquiry">${EMAIL}</a></p></div><div>${ghlForm("advisory", { title: "Private Advisory application" })}</div></div>${formEmbedScript}`, { kicker: "Application", id: "apply", soft: true })
  + faqBlock(PA_FAQ, "Advisory questions", "Quick clarity before you apply.");
  return page({ path: "/private-advisory", title: "Private Advisory & Consulting | MC Sales Training", desc: "High-touch advisory for dealership owners and leaders: standards, accountability, leadership cadence and a sales system that survives turnover.",
    h1: "Private Advisory & Consulting", body, crumbs: C(["Programs", "/program-pricing"], ["Private Advisory", "/private-advisory"]), faqs: PA_FAQ, priority: "0.8" });
}

// ── /private-sales-advisory (tiers; /private-advisory-membership merged here) ──
// Elite 1-on-1 is $1,499/mo here but /membership calls the top tier "VIP Advisory, $1,500/mo": price left out (see README › Conflicts).
const PSA_FAQ = [
  ["Do you guarantee results?", "No. We install mechanics and execution standards. Outcomes vary by market, lead flow, inventory, and effort."],
  ["Is the Sales Vault included in paid tiers?", "Yes—High-Impact includes full access. Elite 1-on-1 typically includes whatever resources support your execution."],
  ["What happens on the fit call?", "We diagnose your bottleneck and recommend the smallest fix with the fastest win. If it’s not a fit, we’ll tell you."],
  ["Can leadership/owners do this?", "Yes. Advisory is often best for leaders who want standards, scoreboards, and a coaching cadence installed across the store."],
];
export function privateSalesAdvisory() {
  const body = hero({ kicker: "High-Touch Support • Advisory slots open", h1: "Private Sales Advisory", lede: "For professionals and leaders who want to eliminate guesswork and run a mechanical system: word tracks, sequence, and execution standards—installed with accountability.",
    ctas: [["Book a Fit Call →", "/sales-calendar"], ["Start Free (Sales Vault) →", "/free-resources", "ghost"]], note: "Note: Outcomes vary by market, lead flow, inventory, and execution. We install mechanics—no hype, no guarantees." })
  + section("Pick the Level of Support", `<p class="lead-in">Choose what fits your situation now. If you’re unsure, take the fit call and we’ll guide you.</p>` + cards([
    { k: "The Foundation", t: "Sales Vault", d: "Essential tools for the quiet professional to start installing the system.", price: "$0 access", list: ["Daily Non-Negotiables (execution standard)", "Sales Mini-Book (blueprint + habits)", "Word Tracks & Rebuttals"], cta: ["Get Free Access →", "/free-resources"] },
    { k: "Most Requested", t: "High-Impact", d: "Deep-dive specialization into your market and mechanics—tight feedback loops.", price: "$499 /mo", list: ["Bi-weekly group advisory", "Live roleplay + negotiation reps", "Deal desk support (async)", "Full Sales Vault access"], cta: [["Apply / Fit Call →", "/sales-calendar"], ["Questions? Contact →", "/contact"]] },
    { k: "Limited Availability", t: "Elite 1-on-1", d: "Weekly private calls and custom system reconstruction for your role and market.", price: "Pricing on the fit call", list: ["Weekly 1-on-1 advisory calls", "Custom script development", "Call review + analysis", "Direct access channel (as agreed)"], cta: ["Request a Consult →", "/sales-calendar"] }]) + `<p class="note">Pricing shown is a starting point. Final fit depends on role, goals, and availability.</p>`, { kicker: "Tiers", id: "tiers" })
  + section("Not Generic. Built Around Your Reality.", `<p class="lead-in">We focus on your specific environment: lead types, objections, market, and role. The goal is mechanical precision—language + sequence + standards.</p>${quote("The 1-on-1 advisory didn’t just help me close more; it helped me understand exactly why I was winning. The mechanics are everything.", "Top Producer, Northeast Region")}${ctas([["Book a Fit Call →", "/sales-calendar"], ["Questions? Contact →", "/contact", "ghost"]])}`, { kicker: "Specialized Coaching", soft: true })
  + faqBlock(PSA_FAQ)
  + related([["Private Advisory for leaders", "/private-advisory", "Apply for leadership advisory."], ["Membership levels", "/membership", "Free, Premium and VIP Advisory."], ["Individual Coaching", "/individual-coaching", "Fast execution fixes for one rep."]]);
  return page({ path: "/private-sales-advisory", title: "Private Sales Advisory | MC Sales Training", desc: "Private sales advisory tiers: the free Sales Vault, High-Impact group advisory at $499/mo and Elite 1-on-1 coaching for sales pros and leaders.",
    h1: "Private Sales Advisory", body, crumbs: C(["Programs", "/program-pricing"], ["Private Sales Advisory", "/private-sales-advisory"]), faqs: PSA_FAQ, priority: "0.8",
    schema: [{ "@context": "https://schema.org", "@type": "Service", name: "High-Impact Private Sales Advisory", serviceType: "Sales coaching", provider: { "@id": `${SITE}/#org` }, url: SITE + "/private-sales-advisory", offers: { "@type": "Offer", price: "499", priceCurrency: "USD", description: "$499 per month; pricing shown is a starting point", url: SITE + "/private-sales-advisory#tiers" } }] });
}

// ── /membership ──
const MB_FAQ = [
  ["Should I start free or go Premium?", "Start free if you want to install the basics and get a quick win today. Go Premium if you want accountability, higher standards, and deeper training focus."],
  ["Is VIP Advisory the same as membership?", "No. VIP Advisory is direct consulting for owners and leadership teams focused on outcomes, execution standards, and systems that hold up through staffing changes."],
  ["Where do I compare all programs?", "Use <a href=\"/program-pricing\">Program Pricing</a> to compare individual training, team training, and advisory paths side-by-side."],
];
export function membership() {
  const body = hero({ kicker: "Membership", h1: "Private Advisory & Membership", lede: "Community and membership exist to build consistency. VIP exists for leadership outcomes.", ctas: [["Start Free", "/free-resources"], ["Explore VIP Advisory", "/private-advisory", "ghost"]] })
  + section("Membership Levels", `<p class="lead-in">Pick the level that fits your goals right now. Upgrade anytime.</p>` + cards([
    { k: "Community", t: "Standard (Free)", price: "$0", d: "Best for: installing the basics.", list: ["The Sales Vault access", "Proven car sales habits", "Daily habit mastery"], cta: ["Join Vault", "/free-resources"], after: "Start here if you want a quick win today." },
    { k: "Membership", t: "Premium", price: "$20 /mo", d: "Best for: accountability + standards.", list: ["Elite community access", "Top performer thinking", "Professional training focus"], cta: ["Upgrade Now", "/program-pricing"], after: "If you want consistency, this is the move." },
    { k: "Advisory", t: "VIP Advisory", price: "Confirmed on a consult", d: "Best for: owners + leadership outcomes.", list: ["Confidential consulting", "Outcome-aligned priorities", "Systems that survive turnover"], cta: ["Request Consult", "/private-advisory#apply"], after: "We’ll confirm fit before recommending VIP." }]), { kicker: "Choose a level" })
  + section("Want Structure Beyond Membership?", `<p class="lead-in">Compare training paths, or ask us what fits your goals.</p>${ctas([["Program Pricing", "/program-pricing"], ["Contact", "/contact", "ghost"], ["Private Advisory", "/private-advisory", "ghost"]])}`, { kicker: "Next step", soft: true })
  + faqBlock(MB_FAQ, "Membership Questions", "Quick clarity before you choose.");
  return page({ path: "/membership", title: "Membership & VIP Advisory | MC Sales Training", desc: "MC Sales Training membership levels: free Sales Vault access, Premium at $20/mo for accountability, and VIP Advisory for owners and leaders.",
    h1: "Private Advisory & Membership", body, crumbs: C(["Programs", "/program-pricing"], ["Membership", "/membership"]), faqs: MB_FAQ, priority: "0.7" });
}

// ── /ai-executive ──
const AI_FAQ = [
  ["Is this a chatbot?", "It’s an AI Executive—trained on your dealership’s content and processes to answer questions, qualify leads, and book appointments with a controlled voice."],
  ["Can it book appointments?", "Yes. The AI Executive is built to guide visitors to scheduling and can hand off cleanly when human involvement is needed."],
  ["Can we control how it talks?", "Yes. We refine the voice using a private testing process so you can approve what it says and reject what you don’t."],
  ["What does it cost?", "$196/month plus AI usage fees. Cancel anytime."],
];
export function aiExecutive() {
  const body = hero({ kicker: "Offer • Digital Sales Floor", h1: "Stop paying people to miss opportunities.", lede: "Your sales floor leaks after hours, between calls, and during slow response windows. A 24/7 AI Executive holds the line, answers cleanly, and pushes the conversation toward an appointment.",
    ctas: [["Install My AI Executive", "#install"], ["How It Works", "#how", "ghost"]], note: "Built to answer questions, protect gross, and book appointments — 24/7." })
  + section("The autonomous sales executive.", `<p class="lead-in">Buyers expect instant interaction. We deploy an AI Executive trained on your dealership’s logic, language, and scheduling paths—so your response speed stops depending on staff availability.</p>
<div class="tiles"><div class="tile"><b>24/7</b>Never sleeps or “gets busy”</div><div class="tile"><b>Booking</b>Appointment-first flow</div><div class="tile"><b>Control</b>Refine tone + logic</div><div class="tile"><b>MC logic</b>Mark + Jared selling language</div></div>`, { soft: true })
  + section("Install once. Run forever.", `<p class="lead-in">A practical deployment process designed for dealerships.</p>` + cards([
    { t: "Trained on your store", d: "We train your AI Executive using your website content, FAQs, offers, and your preferred selling language." },
    { t: "Playground refinement", d: "Private testing environment. Approve what you like, reject what you don’t, and tighten the voice." },
    { t: "Secure architecture", d: "Built for professional use with controlled data handling and clean handoff paths." },
    { t: "Appointment-first flow", d: "It doesn’t just “chat.” It guides visitors to booking and captures context for your team." }], 4) + ctas([["Start Installation", "#install"]]), { kicker: "How it works", id: "how" })
  + section("The AI Executive installation", `<p class="lead-in">One seat. Unlimited productivity. Built with MC logic.</p><div class="cards c2"><article class="card"><p class="ck">AI Webchat Executive</p><p class="price">$196/mo</p><p class="small">Cancel anytime • Plus AI usage fees</p>${bullets(["24/7 instant responses", "Custom trained on your site", "Appointment booking engine", "Mark + Jared logic"])}${ctas([["Install My AI Executive", "#install"]])}</article>
<article class="card"><h3>What we need from you</h3><p>We keep it simple. Bring these to your installation call so we can deploy fast:</p>${bullets(["<b>Primary goal:</b> what should the AI optimize for first?", "<b>Scheduling:</b> where should it send people to book?", "<b>Voice:</b> direct/professional (Mark Casper style), helpful/supportive, or high-energy.", "<b>Preferred next step:</b> book appointment immediately, capture info then book, or answer FAQs then book.", "Your name, business email and dealership name."])}</article></div>`, { kicker: "Pricing", soft: true, id: "pricing" })
  + section("Book your installation call", `<p class="lead-in">Pick a time on the calendar below. Talk through your use case and we’ll give you a clean recommendation. Not ready? <a href="/contact">Contact us</a> or start with the <a href="/free-resources">free resources</a>.</p>${bookingEmbed(BOOKING_AI)}`, { kicker: "Onboarding", id: "install" })
  + faqBlock(AI_FAQ, "Quick answers", "Clarity before you install.")
  + section("", ctas([["Install My AI Executive", "#install"], ["Book Strategy Call", "/sales-calendar", "ghost"]]), { center: true });
  return page({ path: "/ai-executive", title: "AI Executive: 24/7 Dealership AI Webchat | MC Sales Training", desc: "A 24/7 AI Executive trained on your dealership’s content answers questions and books appointments. $196/month plus AI usage fees, cancel anytime.",
    h1: "Stop paying people to miss opportunities.", body, crumbs: C(["Programs", "/program-pricing"], ["AI Executive", "/ai-executive"]), faqs: AI_FAQ, priority: "0.6",
    schema: [{ "@context": "https://schema.org", "@type": "Service", name: "AI Webchat Executive", serviceType: "AI webchat for car dealerships", provider: { "@id": `${SITE}/#org` }, url: SITE + "/ai-executive", offers: { "@type": "Offer", price: "196", priceCurrency: "USD", description: "$196/month plus AI usage fees, cancel anytime", url: SITE + "/ai-executive#pricing" } }] });
}
