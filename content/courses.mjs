// Courses: Courses On Demand, The Mechanics of Sales, The Language of Persuasion (/learn-to-earn), How the System Works.
import { page, hero, section, cards, bullets, steps, faqBlock, related, ghlForm, formEmbedScript, formButton, ctas, SITE, SKOOL } from "../scripts/lib.mjs";

const C = (...c) => [["Home", "/"], ...c];
const course = (path, name, description, instructors) => ({ "@context": "https://schema.org", "@type": "Course", name, description, url: SITE + path, provider: { "@id": `${SITE}/#org` }, hasCourseInstance: { "@type": "CourseInstance", courseMode: "online", instructor: instructors.map(([n, u]) => ({ "@type": "Person", name: n, url: SITE + u })) } });

// ── /courses-on-demand ──
const COD_FAQ = [
  ["Which course should I start with?", "If your calls stall or feel scattered, start with Mechanics of Sales. If you’re losing deals at the value/price moment, start with The Language of Persuasion."],
  ["Will this work for my industry?", "Yes—these courses are built from dealership sales + BDC reality. The structure is universal, but the examples and word tracks are designed for live customer conversations and follow-up."],
  ["What if I’m not sure which one fits?", "Open either course form and submit. If you leave a note, we’ll route you to the right track. Or use the <a href=\"/contact\">Contact</a> page."],
];
export function coursesOnDemand() {
  const getM = (l = "Get Mechanics of Sales →", cls = "") => formButton(l, "mechanics", "#get-mechanics", cls, "The Mechanics of Sales");
  const getP = (l = "Get Language of Persuasion →", cls = "") => formButton(l, "persuasion", "#get-persuasion", cls, "The Language of Persuasion");
  const body = `<section class="hero"><div class="wrap"><p class="kicker">Courses On Demand</p><h1>Run a sales system — not a personality</h1>
<p class="lede">Built for dealership sales + BDC teams that need a repeatable process and clean language under pressure. If your results swing month to month, it’s rarely effort—it’s the lack of a system you can execute daily.</p>
<p class="ctas">${getM()}${getP(undefined, "ghost")}</p><p class="note">Want proof before you buy? <a href="/proof">See Proof / Results →</a> Want a free preview first? <a href="/free-resources">Get Free Tools</a></p>
<ul class="chips"><li>Clarity on calls</li><li>Control next steps</li><li>Less discounting</li><li>More decisions</li></ul></div></section>`
  + section("Choose based on the failure point", `<p class="lead-in">Don’t overthink it. Match the course to where deals break—and fix that first.</p>` + cards([
    { k: "Deals stall", t: "Good call… no commitment", d: "You need next-step control and a full process. That’s Mechanics." },
    { k: "Price friction", t: "Discount requests", d: "You need value framing and decision language. That’s Persuasion." },
    { k: "Follow-up fails", t: "Ghosting", d: "You need structure + language that earns replies. Start with Mechanics." }]) + `<p class="note">Still unsure? <a href="/contact">Talk to us →</a></p>`, { kicker: "Pick fast", soft: true })
  + section("Watch the explainer. Pick your track. Get access.", `<p class="lead-in">The videos build trust. The content builds results. This page makes the decision simple.</p><div class="cards c2">
<article class="card"><p class="ck">Flagship System</p><h3><a href="/the-mechanics-of-sales">The Mechanics of Sales</a></h3><p>The complete operating system for selling—what to do, what to say, and how to control the sale from first contact to commitment.</p><p class="ck">You’ll install this</p>${bullets(["Discovery that converts: stop “nice chats” that go nowhere.", "Next-step control: remove stalls and “I’ll get back to you.”", "Objections handled clean: no pressure, no awkwardness.", "Process you can repeat: stable months replace random swings."])}<p class="small">Instructors: Mark &amp; Jared Casper</p><p class="ctas">${getM()}<a class="btn ghost sm" href="/free-resources">Preview Free Tools</a></p><p class="small">Best for: you want control on live calls and a system you can run under pressure.</p></article>
<article class="card"><p class="ck">Psychology + Language</p><h3><a href="/learn-to-earn">The Language of Persuasion</a></h3><p>Behavioral word tracks that help you frame value, guide decisions, and reduce discount pressure without sounding scripted or pushy.</p><p class="ck">You’ll gain this</p>${bullets(["Value framing: price stops being the battlefield.", "Clean rebuttals: handle objections without tension.", "Confidence language: lead the call instead of hoping.", "Decision language: move “maybe” to “yes/no” faster."])}<p class="small">Instructor: Jared Casper</p><p class="ctas">${getP()}<a class="btn ghost sm" href="/contact">Quick Question? Talk To Us</a></p><p class="small">Best for: you’re closing, but discounting too often or losing deals at the value/price moment.</p></article></div>
<p class="note">Want coaching, role-play, or team rollout? <a href="/program-pricing">Compare Programs →</a></p>`, { kicker: "Courses", id: "courses" })
  + faqBlock(COD_FAQ, "The questions before you buy", "Quick answers. No fluff.")
  + section("Get course access", `<div class="two"><div id="get-mechanics"><p class="ck">Course</p><h3>The Mechanics of Sales</h3><p>Enter your info to get access details + next steps for Mechanics of Sales. You’ll receive a confirmation immediately.</p>${ghlForm("mechanics", { title: "Mechanics of Sales course access" })}</div>
<div id="get-persuasion"><p class="ck">Course</p><h3>The Language of Persuasion</h3><p>Enter your info to get access details + next steps for The Language of Persuasion. You’ll receive a confirmation immediately.</p>${ghlForm("persuasion", { title: "The Language of Persuasion course access" })}</div></div>
<p class="note"><a href="/sales-calendar">Need help choosing? Book a free strategy call →</a></p>${formEmbedScript}`, { kicker: "Access", soft: true, id: "access" });
  return page({ path: "/courses-on-demand", title: "Sales Courses On Demand | MC Sales Training", desc: "On-demand dealership sales courses: The Mechanics of Sales for next-step control and The Language of Persuasion for value framing.",
    h1: "Run a sales system — not a personality", body, crumbs: C(["Courses", "/courses-on-demand"]), faqs: COD_FAQ, priority: "0.8" });
}

// ── /the-mechanics-of-sales ──
const MS_FAQ = [
  ["Is this for beginners or experienced reps?", "Both. New reps get a clear standard to follow. Experienced reps tighten language, reduce objections, and build predictable cadence."],
  ["What makes this different from typical sales training?", "It’s not motivation. It’s a protocol: actions + language + measurement—so you know what to do next instead of guessing."],
  ["Is this taught by both Mark and Jared?", "Yes. Mark teaches floor execution and closing standards. Jared teaches digital leverage, systems, and follow-up mechanics."],
  ["Where do I access it?", "Access is through the MC Sales Training community (Skool). That’s where the content, updates, and support live."],
];
export function mechanicsOfSales() {
  const unlock = ["Unlock the Course →", SKOOL];
  const body = hero({ kicker: "Course • Mark + Jared Led", h1: "The Mechanics of Sales", lede: "This isn’t motivation. It’s a clean execution protocol for automotive professionals who want control. Learn what to do, what to say, and how to run a repeatable cadence that produces consistent outcomes.",
    ctas: [unlock, ["View Curriculum →", "#curriculum", "ghost"]], note: "Mark = floor execution + closing standards • Jared = digital leverage + systems • Together = the protocol." })
  + section("What you’ll learn", `<p class="lead-in">You’ll install standards that reduce stalls, protect value, and keep deals moving—so your month stops depending on luck.</p>${bullets(["Daily cadence that keeps 10 deals working (so one deal can’t control your week)", "Conversation structure that prevents price fights instead of reacting to them", "Follow-up mechanics that get replies (not “just checking in”)", "Digital leverage that turns attention into appointments without sounding pushy"])}${ctas([["See the breakdown →", "#curriculum", "ghost"], unlock])}`, { kicker: "Overview" })
  + section("What you’ll install", `<p class="lead-in">Practical standards that show up on the floor the same day.</p>` + cards([
    { t: "A repeatable sales cadence", d: "Daily and weekly actions that eliminate drift and keep your pipeline moving." },
    { t: "Language that prevents objections", d: "Cleaner investigation and commitment so “price fights” happen less often." },
    { t: "Digital leverage that feeds deals", d: "Simple systems to turn attention into appointments without living on walk-ins." }]) + ctas([unlock]), { kicker: "Outcomes", soft: true })
  + section("The 8-week breakdown", `<p class="lead-in">A structured sequence that builds control week-by-week.</p>` + cards([
    { k: "Weeks 1–2", d: "Foundation + standards. Your cadence, your control points, and the habits that stop drift." },
    { k: "Weeks 3–4", d: "Investigation. Decision drivers, timeline, money, and removing “mystery objections.”" },
    { k: "Weeks 5–6", d: "Commitment. Cleaner closes, cleaner numbers, fewer stalls and fewer “think about it” loops." },
    { k: "Weeks 7–8", d: "Follow-up + leverage. Post-visit process, referrals, and digital systems that keep deals coming." }], 4) + ctas([unlock, ["Ask a Question →", "/contact", "ghost"]]), { kicker: "Curriculum", id: "curriculum" })
  + section("Mark + Jared", `<p class="lead-in">Old-school execution. Modern systems. One protocol.</p>` + cards([
    { t: "Mark Casper", d: "Floor execution and closing standards. What to do, what to say, and how to run the deal without guessing.", cta: ["View Mark →", "/mark"] },
    { t: "Jared Casper", d: "Digital leverage and systems. Turning attention into appointments and building pipeline you can predict.", cta: ["View Jared →", "/jared"] }], 2), { kicker: "Instructors", soft: true })
  + faqBlock(MS_FAQ, "Common questions", "Quick clarity before you unlock.")
  + related([["Courses On Demand", "/courses-on-demand", "Get access details for either course."], ["The Language of Persuasion", "/learn-to-earn", "Jared’s value-framing course."], ["How the System Works", "/how-the-system-works", "Structure, language and habits."]]);
  return page({ path: "/the-mechanics-of-sales", title: "The Mechanics of Sales Course | MC Sales Training", desc: "A clean execution protocol for automotive pros: daily cadence, conversation structure, follow-up mechanics and digital leverage, taught by Mark and Jared.",
    h1: "The Mechanics of Sales", body, crumbs: C(["Courses", "/courses-on-demand"], ["The Mechanics of Sales", "/the-mechanics-of-sales"]), faqs: MS_FAQ, priority: "0.8",
    schema: [course("/the-mechanics-of-sales", "The Mechanics of Sales", "An execution protocol for automotive sales professionals: cadence, conversation structure, follow-up mechanics and digital leverage.", [["Mark Casper", "/mark"], ["Jared Casper", "/jared"]])] });
}

// ── /learn-to-earn (The Language of Persuasion) ──
const LP_FAQ = [
  ["Is this only for automotive sales?", "No. The training is built around decision-making psychology and high-ticket communication—usable in any industry where buyers hesitate or compare options."],
  ["Is this a live program or self-paced?", "It’s designed to be self-paced. You install the frameworks at your speed, then apply them immediately in real conversations."],
  ["What should I do if I’m new to this style of training?", "Start with <a href=\"/free-resources\">Free Resources</a> to install the basics, then come back to this masterclass when you’re ready for advanced persuasion frameworks."],
];
export function learnToEarn() {
  const body = hero({ kicker: "The Universal Skill • The Language of Persuasion", h1: "Learn to Earn $10k–$15k Per Month", lede: "Master high-ticket persuasion: decision-making psychology, objection prevention, and language that travels across industries.",
    ctas: [["Enroll in the Masterclass", "/courses-on-demand#get-persuasion"], ["Get Free Sales Tools", "/free-resources", "ghost"]], note: "Income examples are not guarantees; results depend on your effort, market and execution. See our <a href=\"/disclaimer\">disclaimer</a>." })
  + section("The Instructor: Jared Casper", `<div class="two"><div><p>This isn’t “car sales tricks.” This is human decision-making—why buyers hesitate, where objections come from, and how to lead with clarity instead of pressure.</p><p>Whether you sell software, real estate, finance, or high-end services, the mechanics of how someone says “yes” don’t change.</p><p>Read more about <a href="/jared">Jared Casper</a>.</p></div>
<div class="panel"><h3>What You’ll Master</h3>${bullets(["The 4 stages of persuasion", "Eliminating objections before they happen", "Posture, command, and decision leadership", "Frameworks that support $2,000+ commission checks"])}${ctas([["View All Programs", "/program-pricing", "ghost"], ["Ask a Question", "/contact", "ghost"]])}</div></div>`)
  + section("Who This Is For", `<p class="lead-in">People who want a repeatable persuasion framework they can use without sounding scripted, salesy, or aggressive.</p>${ctas([["Start Free", "/free-resources"], ["Enroll / Compare Options", "/courses-on-demand#courses", "ghost"]])}`, { kicker: "Fit check", soft: true })
  + faqBlock(LP_FAQ, "Language of Persuasion Questions", "Quick clarity before you enroll.")
  + section("Keep Building the System", `<p class="lead-in">Start free, compare programs, or talk to the team.</p>` + cards([
    { k: "Free", t: "Free Resources", d: "Install the foundation first with tools you can use immediately.", cta: ["Start Free", "/free-resources"] },
    { k: "Compare", t: "Program Pricing", d: "Review training options for individuals, teams, and advisory.", cta: ["View Pricing", "/program-pricing"] },
    { k: "Support", t: "Contact", d: "Ask a question and we’ll point you to the best next step.", cta: ["Talk to Us", "/contact"] }]), { kicker: "Explore" });
  return page({ path: "/learn-to-earn", title: "Learn to Earn: Language of Persuasion | MC Sales Training", desc: "Jared Casper’s self-paced persuasion masterclass: decision-making psychology, objection prevention and language that works across industries.",
    h1: "Learn to Earn $10k–$15k Per Month", body, crumbs: C(["Courses", "/courses-on-demand"], ["The Language of Persuasion", "/learn-to-earn"]), faqs: LP_FAQ, priority: "0.7",
    schema: [course("/learn-to-earn", "The Language of Persuasion", "A self-paced masterclass on decision-making psychology, objection prevention and persuasion language for high-ticket sales.", [["Jared Casper", "/jared"]])] });
}

// ── /how-the-system-works ──
const HW_FAQ = [
  ["Is this just scripts?", "No. Scripts only work inside a process. MCST installs what to do next (structure), what to say in money moments (word tracks), and how to repeat it (daily habits + accountability)."],
  ["How fast will I feel a difference?", "Most people feel it immediately because they stop guessing. The first shift is cleaner next steps, better follow-up cadence, and fewer stalls in live conversations."],
  ["I’ve tried training before — what’s different?", "MCST isn’t theory. It’s a system built for live dealership moments: a repeatable sequence, word tracks for objections, and an execution cadence so it sticks. If it doesn’t show up in real conversations, it doesn’t count."],
  ["Will this work if my store is chaos or my manager won’t support it?", "Yes. Start with the free tools and run the next-step framework in your own conversations today. If you want team execution, the program path adds cadence and accountability so the process doesn’t drift."],
  ["Where should I start?", "Start with <a href=\"/free-resources\">Free Resources</a> to install the baseline framework, then choose the paid path that fits your next skill gap (follow-up, transitions, objections, or consistency)."],
];
export function howItWorks() {
  const body = hero({ kicker: "Dealership Sales + BDC + Managers", h1: "How MCST Works: More Appointments. More Closes. Better Grosses.", lede: "A dealership-ready system: word tracks + a repeatable process + daily execution habits— so follow-up improves, objections stop stalling deals, and results get consistent.",
    ctas: [["Start With Free Tools", "/free-resources"], ["Choose a Paid Path", "/program-pricing", "ghost"]], note: "Before: weak follow-up, price-first conversations, stalls at close. After: cleaner process, stronger value, more cars out. Want the fastest win? Start with the free vault and run one tool for 7 days." })
  + section("The Real Problem Isn’t Effort — It’s Guessing in Money Moments", `<p class="lead-in">Most reps don’t lose because they don’t care. They lose because they hesitate at the exact moments that decide appointments, closes, and gross.</p>` + cards([
    { k: "Moment 1", t: "Openings Stall", d: "Leads go cold when the next step isn’t clear: confirmation, commitment, and a clean ask." },
    { k: "Moment 2", t: "Value Breaks Down", d: "“What’s your best price?” wins when discovery, framing, and trade language aren’t tight." },
    { k: "Moment 3", t: "Commitment Slips", d: "Deals fade out when transitions, urgency, and closes are improvised—then follow-up becomes begging." }]), { kicker: "The truth", soft: true })
  + section("Three Pillars That Create Control", `<p class="lead-in">Not theory. Installed moves—so results stop swinging.</p>` + cards([
    { k: "Pillar A", t: "Structure", d: "A repeatable deal roadmap: greeting → discovery → value frame → commitment → close → follow-up.", after: "Tools: next-step prompts • transition checklist • “what to do next” cues" },
    { k: "Pillar B", t: "Language", d: "Word tracks for the moments that cost you money: price, payment, trade, “just looking,” spouse, “think about it.”", after: "Tools: objection handling • firm-but-not-pushy framing • commitment asks" },
    { k: "Pillar C", t: "Habits", d: "Daily non-negotiables that make the system stick: follow-up blocks, confirmations, pipeline review.", after: "Tools: daily cadence • weekly scorecard rhythm • accountability so execution doesn’t drift" }]), { kicker: "The system" })
  + section("A Simple 1–2–3 Path", `<p class="lead-in">Start free. Install the baseline. Upgrade only when you want more support.</p>${steps([
    ["Start With Free Tools", "Get immediate structure you can use today—so you stop guessing in live conversations. What you get: core word tracks + follow-up framework • Takes: ~10 minutes to install. <a href=\"/free-resources\">Get Free Tools</a>"],
    ["Pick Your Next Skill Gap", "Choose based on what’s bleeding money right now—not what sounds interesting. Pick: objections/discounts vs process stalls/follow-up gaps. <a href=\"/courses-on-demand\">View On-Demand Courses</a>"],
    ["Get Accountability", "If you want coaching cadence or a team rollout, move into a program built for execution. For teams: rollout + coaching cadence + accountability so it sticks. <a href=\"/program-pricing\">Compare Programs</a>"]])}`, { kicker: "How it works", soft: true })
  + section("Built for Live Dealership Moments", `<p class="lead-in">This is for the moment a real buyer is ready, willing, and able—phone, text, internet lead, or on the lot. The system is designed to hold up under pressure and time constraints.</p>${bullets(["Short lessons: practical, direct, no filler.", "One move at a time: install a next step you can run today.", "Repeatable: works in real conversations, not just “classroom” scenarios."])}`, { kicker: "What to expect" })
  + section("Control the Pace → Control Income", `<p class="lead-in">When you control the pace, you control the process. When you control the process, you stop relying on luck (and random months).</p>${bullets(["Less hesitation in objections and transitions.", "Cleaner value framing that reduces discounting.", "More predictable outcomes week after week."])}${ctas([["Talk to Us", "/contact"]], "Want a quick win first? Start with the <a href=\"/free-resources\">free tools</a>.")}`, { kicker: "The promise", soft: true })
  + faqBlock(HW_FAQ, "Quick Answers", "Clarity that keeps you moving.")
  + section("Ready to Stop Guessing?", `<p class="lead-in">Start free to install control fast—then choose the paid path when you want deeper support.</p>${ctas([["Start Free", "/free-resources"], ["Compare Programs", "/program-pricing", "ghost"]])}`, { center: true });
  return page({ path: "/how-the-system-works", title: "How the MC Sales Training System Works", desc: "Word tracks, follow-up cadence and daily accountability installed for dealership Sales, BDC and leaders: more appointments, closes and gross.",
    h1: "How MCST Works", body, crumbs: C(["How the System Works", "/how-the-system-works"]), faqs: HW_FAQ, priority: "0.8" });
}
