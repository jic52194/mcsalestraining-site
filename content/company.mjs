// Company pages: About, Our Philosophy, Why Work With Us, The Secret Sauce, Our Team, Mark, Jared, Proof, FAQ, Contact.
import { page, hero, section, cards, bullets, steps, faqBlock, related, ghlForm, formEmbedScript, pic, ctas, SITE, EMAIL, PHONE_TEXT, PHONE_TEL, PHONE_VANITY, SKOOL } from "../scripts/lib.mjs";

const C = (...c) => [["Home", "/"], ...c];

export function about() {
  const body = hero({ kicker: "MC Sales Training", h1: "Dealership Sales Training Built for Real Conversations.", lede: "No gimmicks—just a repeatable system for openings, discovery, next-step control, and follow-up so teams set more appointments, close more deals, and protect gross.",
    ctas: [["How The System Works →", "/how-the-system-works"], ["The Secret Sauce →", "/the-secret-sauce", "ghost"]], chips: ["Process • Ethics • Repeatable Execution"] })
  + section("Three principles", cards([
    { k: "Principle 1", t: "Clarity Over Pressure", d: "Deals close faster when the buyer understands the path. We teach language and structure that reduces confusion and stalls." },
    { k: "Principle 2", t: "Process Over Personality", d: "Talent helps, but a system scales. We build repeatable steps that hold up on good days and bad days." },
    { k: "Principle 3", t: "Protect Value", d: "Gross is protected by better discovery, cleaner transitions, and stronger commitment — not by being aggressive." }]) + `<p class="note">If you’ve tried training before: we don’t sell hype—this is word tracks + sequence + daily execution.</p>`, { soft: true })
  + section("Two coaches. One system.", `<div class="two"><div class="panel person">${pic("mark-casper", [480, 800], "Mark Casper", { w: 480, h: 480, sizes: "220px" })}<div><p class="ck">Mark Casper</p><h3>The Fundamentals</h3><p>Real dealership floor + finance experience—focused on the moments that decide outcomes: discovery, trade talk, payments, and commitment.</p><p>Mark brings the reality of “the floor”: objections, market shifts, customer patterns, and the daily habits that separate high earners from inconsistent months.</p><p>The goal is simple — teach fundamentals that hold up when you’re knee-to-knee with a buyer who wants a discount. <a href="/mark">More about Mark →</a></p></div></div>
<div class="panel person">${pic("jared-casper", [480, 800], "Jared Casper", { w: 480, h: 480, sizes: "220px" })}<div><p class="ck">Jared Casper</p><h3>The System</h3><p>Turns the “floor reality” into a repeatable operating system—word tracks, sequence, and daily execution standards your team can run.</p><p>Jared focuses on the architecture: how to open, investigate, transition, and close without being aggressive or robotic.</p><p>The result is a clean operating system that reduces guesswork and helps performance become easier to repeat. <a href="/jared">More about Jared →</a></p></div></div></div>`)
  + section("Not Theory. Coachable Standards.", `<p class="lead-in">Our method is simple and measurable: sharpen the language, install a follow-up cadence, and run daily standards so results don’t depend on mood or “rockstar” reps.</p>` + cards([
    { k: "Mechanism", t: "Word Tracks", d: "Scripts tied to exact moments—opening → discovery → transition → next step." },
    { k: "Mechanism", t: "Follow-Up Cadence", d: "Copy/paste structure that earns replies and protects next steps." },
    { k: "Execution", t: "Daily Standards", d: "Non-negotiables + accountability so results don’t depend on motivation." }]), { kicker: "Credibility", soft: true })
  + section("Ready to Install the System?", `<p class="lead-in">Start with the Vault: free word tracks, follow-up cadence, and daily standards you can run for 7 days.</p>${ctas([["Get Free Word Tracks & Tools →", "/free-resources"], ["View Programs", "/program-pricing", "ghost"]])}`, { kicker: "Next step", center: true });
  return page({ path: "/about", title: "About MC Sales Training | Dealership Sales & BDC Training", desc: "MC Sales Training is dealership sales training built for real conversations: openings, discovery, next-step control and follow-up by Mark & Jared Casper.",
    h1: "Dealership Sales Training Built for Real Conversations.", body, crumbs: C(["About", "/about"]), priority: "0.8" });
}

export function ourPhilosophy() {
  const body = hero({ kicker: "Established Principles", h1: "Sales is a Mechanical Skill.", lede: "We reject the myth of the “born salesman.” We believe in the engineered process, measured response, and quiet execution of logic—built for real dealership floors, phones, and internet leads.",
    ctas: [["Get Free Word Tracks →", "/free-resources"], ["How the System Works →", "/how-the-system-works", "ghost"]] })
  + section("Four Pillars That Create Consistent Outcomes", `<p class="lead-in">Not motivation. Not tricks. A repeatable system that holds up when the store is chaos.</p>` + cards([
    { k: "01", t: "Logic Over Charisma", d: "Charm is volatile. Charisma is inconsistent. We build systems that rely on the structural integrity of your argument rather than the warmth of your personality. If the logic holds, the sale follows." },
    { k: "02", t: "The Quiet Professional", d: "The loudest person in the room is rarely the most dangerous. We center listening and precise, surgical questioning. Learn how to lead without shouting—by controlling the next step." },
    { k: "03", t: "Detached Execution", d: "Desperation kills deals. By mastering the mechanics, you gain the ability to stay emotionally neutral. That detachment is where your posture, authority, and negotiation power live." },
    { k: "04", t: "Mechanical Repetition", d: "Success isn’t the “big play.” It’s the boring, consistent application of the blueprint—every time. We value discipline: run the process even when you don’t feel like it." }], 4), { kicker: "The Philosophy", soft: true })
  + section("No Hacks. Just Laws of Decision-Making.", `<p class="lead-in">We don’t teach “tricks.” We teach fundamentals: word tracks tied to sequence, follow-up cadence, and daily standards that create clarity and commitment—without pressure.</p>` + cards([
    { k: "Instead of hype", t: "We Provide Data", d: "Scoreboards, reps, and measurable execution—so you can coach what you can see." },
    { k: "Instead of scripts", t: "We Build Frameworks", d: "Language that adapts to real conversations without sounding robotic." },
    { k: "Instead of pressure", t: "We Create Clarity", d: "Clear next steps and clean commitments that reduce stalls and ghosting." },
    { k: "Instead of guessing", t: "We Use Mechanics", d: "Process + sequence + repetition that holds up across staff changes and markets." }], 4) + ctas([["See Programs →", "/program-pricing"], ["Book a Fit Call →", "/sales-calendar", "ghost"]]), { kicker: "The MC Standard" })
  + section("Ready to Upgrade Your Mechanics?", `<p class="lead-in">Start free, or talk to us and we’ll point you to the smallest fix that produces the fastest win.</p>${ctas([["Start Free →", "/free-resources"], ["Book a Fit Call →", "/sales-calendar", "ghost"], ["Why Work With Us", "/why-work-with-us", "ghost"]])}`, { kicker: "Next step", soft: true, center: true });
  return page({ path: "/our-philosophy", title: "Our Philosophy: Sales Is Mechanical | MC Sales Training", desc: "Logic over charisma, the quiet professional, detached execution and mechanical repetition: the four pillars behind MC Sales Training.",
    h1: "Sales is a Mechanical Skill.", body, crumbs: C(["About", "/about"], ["Our Philosophy", "/our-philosophy"]), priority: "0.7" });
}

export function whyWorkWithUs() {
  const body = hero({ kicker: "Structure • Language • Accountability", h1: "The Philosophy: Ethical Leverage.", lede: "Most sales training teaches you how to trap a customer. We teach you how to lead them — by creating clarity, not pressure.", ctas: [["Start Free", "/free-resources"], ["View Programs", "/program-pricing", "ghost"]] })
  + section("Clarity Creates Commitment.", `<div class="two"><div><p>We focus on two things that remove friction from the sales process:</p><p><b>Behavioral Psychology</b> (how objections form, what buyers fear, why they stall) and <b>Strict Process Architecture</b> (how the conversation is structured so the deal moves forward).</p><p>When the process is tight, price stops being the battlefield — because the buyer understands value and next steps.</p>${ctas([["About Us", "/about", "ghost"], ["Talk to Us", "/contact", "ghost"]])}</div>
<div class="panel"><p class="ck">Standards</p><h3>Our Core Rules</h3><ol><li>No scripts that sound like scripts.</li><li>Respect the buyer, protect the profit.</li><li>Consistency is a byproduct of system, not luck.</li></ol><p><a href="/free-resources">Get Free Tools</a> — start with the basics, then upgrade when you’re ready.</p></div></div>`, { soft: true })
  + section("Less Guessing. More Control.", `<p class="lead-in">The outcome is a cleaner process that protects your time and your income.</p>` + cards([
    { k: "Consistency", t: "Repeatable Weeks", d: "Reduce the “hot streak / cold streak” problem by tightening what happens in the middle of the deal." },
    { k: "Follow-up", t: "Fewer Ghosts", d: "Clear next steps + clean commitment language improves response rates and appointment show rates." },
    { k: "Value", t: "Value Protection", d: "Price pressure drops when discovery and framing are structured correctly." }]) + ctas([["See Training Options", "/program-pricing"], ["Read FAQ", "/faq", "ghost"]]), { kicker: "What changes" });
  return page({ path: "/why-work-with-us", title: "Why Work With Us: Ethical Leverage | MC Sales Training", desc: "Process-based dealership sales training, not high-pressure closing: behavioral psychology, strict process architecture and clear next steps.",
    h1: "The Philosophy: Ethical Leverage.", body, crumbs: C(["About", "/about"], ["Why Work With Us", "/why-work-with-us"]), priority: "0.7" });
}

const SS_FAQ = [
  ["Is this for salespeople, BDC, or managers?", "All three. The father–son approach works because it covers both sides: fundamentals on the floor + modern lead-handling systems in the CRM—plus accountability managers can run daily."],
  ["Will this make us sound scripted?", "No. Word tracks are guardrails—not a “robot script.” You’ll sound more natural because you’ll know what to say next, especially when the customer hesitates."],
  ["What’s the fastest win we can get?", "Speed + sequence. Fix first-response discipline, run a simple follow-up cadence for 7 days, and tighten the “next step” language. That alone usually moves appointment volume quickly."],
];
export function secretSauce() {
  const body = hero({ kicker: "The Differentiator", h1: "The Secret Sauce: The Father–Son Advantage", lede: "Most training leans too old-school or too “internet-only.” We run both—because your store lives in both. Old School Mark brings fundamentals that never expire. New School Jared brings modern systems that turn leads into appointments. Together, you get ethical leverage + repeatable execution.",
    ctas: [["Get Free Word Tracks →", "/free-resources"], ["Book a Fit Call →", "/sales-calendar", "ghost"]], chips: ["Word Tracks", "Follow-Up System", "Daily Accountability", "Sales + BDC", "Leadership"] })
  + section("Old School + New School = Full-Spectrum Coaching", `<p class="lead-in">You don’t need more hype. You need a system that works on: walk-ins, phone-ups, internet leads, equity-mining, service lane, and long-cycle follow-up.</p><div class="cards c2">
<article class="card"><p class="ck">Old School Mark</p><h3>Fundamentals that don’t expire</h3><p>The “old school” isn’t about being outdated—it’s about being undeniable. You win deals when your basics are sharp: presence, control, clarity, and a clean next step.</p>${bullets(["<b>Work ethic + standards:</b> non-negotiables, daily reps, and discipline.", "<b>Real conversations:</b> discovery that earns the right to ask for the appointment.", "<b>Phone + floor:</b> how to take control without sounding pushy.", "<b>Trust-building:</b> simple language that makes customers feel safe saying “yes.”", "<b>Closer instincts:</b> how to recognize momentum and finish clean."])}<p><a href="/mark">About Mark →</a></p></article>
<article class="card"><p class="ck">New School Jared</p><h3>Systems for today’s buyer</h3><p>The buyer changed. Your CRM and your process have to match that reality. “New school” means speed, sequence, and consistency—without spam.</p>${bullets(["<b>Lead-to-appointment:</b> contact strategy that actually gets replies.", "<b>Modern follow-up:</b> text/email/phone sequencing with the right language.", "<b>CRM hygiene:</b> pipeline clarity, next actions, and clean activity tracking.", "<b>Video + personalization:</b> high-trust touches that don’t feel gimmicky.", "<b>Scoreboards:</b> activity → appointments → shows → closes."])}<p><a href="/jared">About Jared →</a></p></article></div>
<p class="note">The secret sauce isn’t a trick. It’s the combination of timeless fundamentals and a repeatable modern system— so your results don’t depend on one “rockstar” personality.</p>`, { kicker: "Two Generations. One Standard. Built for real dealerships.", soft: true })
  + section("Consistency, Not Personality", `<p class="lead-in">Mark keeps the training grounded. Jared keeps the execution modern. The result is a team that speaks the same language, runs the same playbook, and follows up the same way—every day.</p>` + cards([
    { k: "Language", t: "Word Tracks That Close", d: "What to say, when to say it, and how to say it without sounding scripted—so the customer feels guided, not pressured.", list: ["Open → discovery → transition", "Objections → rebuttals → next step", "Follow-up language that gets responses"] },
    { k: "Process", t: "A Follow-Up System", d: "If your store “follows up,” but it’s inconsistent, random, or late—this is the fix: a simple sequence your team can run on autopilot.", list: ["First-hour response discipline", "7-day appointment push", "30-day long-cycle structure"] },
    { k: "Accountability", t: "Daily Standards", d: "Training doesn’t work without reps. We turn “motivation” into a scoreboard—so activity and results are visible.", list: ["Daily non-negotiables", "Manager-ready reporting", "Coaching that sticks"] }]), { kicker: "What you get when both are in the room" })
  + section("This Is Built For Stores That Want Predictable Production", `<div class="two"><div class="panel"><h3>If your team is…</h3>${bullets(["“Following up” but not consistently (or not at all).", "Talking too much and asking too little (weak discovery).", "Texting like a robot or calling like it’s 1998.", "Relying on 1–2 closers to carry the month.", "Letting leads age out while the CRM fills up with “no contact.”"])}</div>
<div class="panel"><h3>Then we fix…</h3>${bullets(["<b>Message clarity:</b> what to say to earn the appointment.", "<b>Sequence:</b> what happens after the first “no response.”", "<b>Next steps:</b> every conversation ends with a clear commitment.", "<b>Execution:</b> daily reps until the process becomes normal.", "<b>Leadership visibility:</b> managers can coach what they can see."])}</div></div>
<p class="note">Note: Results vary by market, inventory, and effort. We teach structure and execution—no “guarantees,” just repeatable habits.</p>${ctas([["See Program Options →", "/program-pricing"], ["Talk to Us →", "/contact", "ghost"]])}`, { kicker: "If this sounds familiar…", soft: true })
  + faqBlock(SS_FAQ, "Secret Sauce FAQ", "Quick answers.")
  + section("", ctas([["Open Free Resources →", "/free-resources"], ["Book a Fit Call →", "/sales-calendar", "ghost"]]), { center: true });
  return page({ path: "/the-secret-sauce", title: "The Secret Sauce: Father–Son Advantage | MC Sales Training", desc: "Old-school fundamentals from Mark Casper plus modern lead-handling systems from Jared Casper: one standard for dealership Sales, BDC and leaders.",
    h1: "The Secret Sauce: The Father–Son Advantage", body, crumbs: C(["About", "/about"], ["The Secret Sauce", "/the-secret-sauce"]), faqs: SS_FAQ, priority: "0.7" });
}

export function ourTeam() {
  const body = hero({ kicker: "Our Team", h1: "Decades of Floor Experience.", lede: "A team built on fundamentals, modern psychology, and the discipline of repeatable execution.", ctas: [["About the Company", "/about"], ["Contact", "/contact", "ghost"]] })
  + section("", `<div class="two"><div class="panel person">${pic("mark-casper", [480, 800], "Mark Casper", { w: 480, h: 480, sizes: "220px" })}<div><h2>Mark Casper</h2><p class="ck">Founder • Fundamentals</p><p>Mark has decades across automotive and finance. Mark teaches the fundamentals that never go out of style—so results stop being random.</p>${ctas([["Read Mark’s Story →", "/mark"], ["Get Free Tools →", "/free-resources", "ghost"]])}</div></div>
<div class="panel person">${pic("jared-casper", [480, 800], "Jared Casper", { w: 480, h: 480, sizes: "220px" })}<div><h2>Jared Casper</h2><p class="ck">Co-Founder • System Architecture</p><p>Jared focuses on structure and buyer behavior—turning real floor lessons into a repeatable operating system that survives pressure.</p>${ctas([["Read Jared’s Story →", "/jared"], ["View Programs →", "/program-pricing", "ghost"]])}</div></div></div>`, { soft: true })
  + section("We’re always looking for serious operators.", `<p class="lead-in">If you care about process, standards, and measurable outcomes, we want to hear from you.</p><p>Partnership, hiring, media, or collaboration: use the <a href="/contact">contact page</a> and include “Team” in the subject line.</p>${ctas([["Contact Us →", "/contact"], ["Learn More →", "/about", "ghost"]])}`, { kicker: "Join our team" });
  return page({ path: "/our-team", title: "Our Team: Mark & Jared Casper | MC Sales Training", desc: "Meet the MC Sales Training coaches: Mark Casper on fundamentals and Jared Casper on system architecture, built on decades of floor experience.",
    h1: "Decades of Floor Experience.", body, crumbs: C(["About", "/about"], ["Our Team", "/our-team"]), priority: "0.7" });
}

const PERSON_FAQ = (verb) => [
  ["Is the Sales Vault really free?", "Yes. The free resources exist so you can experience the framework before committing to a paid program."],
  ["What should I do first?", `Start with <a href="/free-resources">Free Resources</a>. Pick one tool to use today, then ${verb} <a href="/program-pricing">Program Pricing</a> when you want structure and accountability.`],
  ["Do you offer team training?", "Yes. Contact us with your rep count and goals and we’ll recommend the best setup."],
];
const person = ({ slug, name, job, lede, chips, h2, intro, para, teach, teaches, first, firstList, mgrT, mgrD, verb, desc, title, knows, sameAs }) => {
  const faqs = PERSON_FAQ(verb);
  const body = hero({ kicker: "Our Team", h1: name, lede, ctas: [["Start Free", "/free-resources"], ["View Programs", "/program-pricing", "ghost"]],
    aside: pic(slug, [480, 800], name, { w: 480, h: 480, sizes: "(min-width: 900px) 380px, 80vw", eager: true, cls: "preview" }) })
  + section(h2, `<p class="lead-in">${intro}</p><ul class="chips">${chips.map((c) => `<li>${c}</li>`).join("")}</ul><p style="margin-top:16px">${para}</p>`, { kicker: `About ${name.split(" ")[0]}` })
  + section(`What ${name.split(" ")[0]} Teaches`, `<p class="lead-in">${teach}</p>` + cards(teaches) + ctas([["Get Free Tools", "/free-resources"], ["Our Philosophy", "/why-work-with-us", "ghost"], ["Back to Our Team", "/our-team", "ghost"]]), { kicker: "Focus", soft: true })
  + section("", `<div class="two"><div class="panel"><p class="ck">Best first step</p><h3>${first[0]}</h3><p>${first[1]}</p><ol>${firstList.map((x) => `<li>${x}</li>`).join("")}</ol></div><div class="panel"><p class="ck">${mgrT[0]}</p><h3>${mgrT[1]}</h3><p>${mgrD}</p>${ctas([["Talk to Us", "/contact"], ["See Options", "/program-pricing", "ghost"]])}</div></div>`)
  + faqBlock(faqs, "Quick Answers", "A few common questions about getting started.");
  return page({ path: "/" + slug.split("-")[0], title, desc, h1: name, body, crumbs: C(["Our Team", "/our-team"], [name, "/" + slug.split("-")[0]]), faqs, image: `/img/${slug}-800.webp`,
    schema: [{ "@context": "https://schema.org", "@type": "Person", "@id": `${SITE}/${slug.split("-")[0]}#person`, name, jobTitle: job, url: `${SITE}/${slug.split("-")[0]}`, image: `${SITE}/img/${slug}-800.webp`, worksFor: { "@id": `${SITE}/#org` }, knowsAbout: knows, ...(sameAs ? { sameAs } : {}) }] });
};
export const mark = () => person({ slug: "mark-casper", name: "Mark Casper", job: "Founder, MC Sales Training", lede: "Floor-tested fundamentals that hold up in real customer conversations.", h2: "Fundamentals. Repetition. Consistency.",
  intro: "Mark’s approach is simple: master the basics that never change, then execute them the same way—every deal, every day.", chips: ["Floor Experience", "Process-First", "Ethical Selling", "Repeatable Results"],
  para: "This is built for real life: time pressure, price grinders, stalls, and the moments where good intentions don’t close— structure does. Mark leads the <a href=\"/8-week-challenge\">8-Week Challenge</a> curriculum.",
  teach: "The foundational system: opening, discovery, transitions, and disciplined next steps.", teaches: [
    { k: "Opening", t: "Control the First 60 Seconds", d: "Earn attention quickly, establish clarity, and set the tone for an organized process." },
    { k: "Discovery", t: "Find the Real Motive", d: "Ask better questions so you stop selling features and start selling relevance." },
    { k: "Next Steps", t: "Move the Deal Forward", d: "Reduce stalls by making every step clear, earned, and easy to agree to." }],
  first: ["Start With the Free Framework", "Before you pay for anything, install the baseline habits and language."], firstList: ["Grab the free tools and pick one to use today.", "Watch the foundation modules to tighten your process.", "Upgrade when you want coaching and accountability."],
  mgrT: ["If you’re a manager", "Standardize the Store"], mgrD: "If you want process consistency across reps, we can help you roll out a clean framework store-wide.", verb: "review",
  title: "Mark Casper | MC Sales Training", desc: "Mark Casper teaches floor-tested dealership fundamentals: control the first 60 seconds, find the real motive and move the deal forward.",
  knows: ["dealership sales", "automotive finance", "sales management", "objection handling"], sameAs: ["https://www.facebook.com/mark.casper.927"] });
export const jared = () => person({ slug: "jared-casper", name: "Jared Casper", job: "Co-Founder, MC Sales Training", lede: "Modern buyer psychology and process architecture—built for repeatable execution.", h2: "Structure Turns Talent Into Results.",
  intro: "Jared focuses on the system: how conversations move, where objections form, and how to build a process that stays consistent under pressure.", chips: ["Buyer Psychology", "Process Design", "Execution Systems", "Automation-Ready"],
  para: "The goal isn’t “slick.” It’s clean: opening, discovery, transitions, and next steps that sound human, protect value, and reduce stalls. Jared teaches <a href=\"/learn-to-earn\">The Language of Persuasion</a>.",
  teach: "A modern framework that makes performance easier to repeat.", teaches: [
    { k: "Behavior", t: "Why Buyers Stall", d: "Identify what’s actually happening when “I need to think” shows up—and resolve it without pressure." },
    { k: "Architecture", t: "Conversation Design", d: "Build a clean path from hello to commitment, so each step earns the next." },
    { k: "Systems", t: "Repeatability", d: "Turn good days into consistent weeks by tightening the middle of the deal." }],
  first: ["Install the Baseline System", "Start free, learn the framework, then upgrade when you want coaching and accountability."], firstList: ["Choose one free tool and apply it today.", "Standardize your opening and transitions.", "Upgrade to build consistency and close more reliably."],
  mgrT: ["If you’re building a team", "Standardize Language Store-Wide"], mgrD: "If you’re a manager/owner, we can help you implement a unified process that survives staffing changes.", verb: "explore",
  title: "Jared Casper | MC Sales Training", desc: "Jared Casper turns floor experience into a repeatable system: buyer psychology, conversation design and execution standards that reduce stalls.",
  knows: ["buyer psychology", "sales process design", "CRM follow-up systems", "sales automation"], sameAs: ["https://www.linkedin.com/in/jaredcasper94/"] });

const PR_FAQ = [
  ["What makes this different from typical “sales motivation” content?", "We coach behaviors tied to measurable outcomes: discovery, next steps, follow-up, objections, and standards. If it can’t be executed on a call tomorrow, it doesn’t belong."],
  ["Do you share scripts?", "Yes—scripts and frameworks. But the real win is learning when to use them and how to keep control without being pushy."],
  ["Is this for individuals or teams?", "Both. Individuals get execution coaching. Teams get standards + consistency so results don’t rely on a few “naturals.”"],
  ["Where can I see what’s inside?", "Start free with tools and frameworks, then check out the community room. If it fits, you’ll know fast."],
];
export function proof() {
  const body = hero({ kicker: "Proof", h1: "The Proof Is in the Paycheck.", lede: "Motivation doesn’t fix pipelines. Standards do. This page shows what changes when you run a real process: cleaner discovery, tighter follow-up, and higher-quality closes.",
    ctas: [["Get Started Free →", "/free-resources"], ["Visit the Skool Group", SKOOL, "ghost"]], chips: ["Close rate goes up", "Ghosting goes down", "Price fights stop", "Execution becomes repeatable"] })
  + section("Measurable, Not Magical", `<p class="lead-in">If you can’t measure it, you can’t coach it. Here’s what we tighten first.</p>` + cards([
    { k: "Pipeline Control", t: "Appointment Quality", d: "More real buyers, fewer “just looking” calls. Your calendar starts producing, not draining you.", list: ["Better qualification", "Cleaner next steps", "Less no-show leakage"] },
    { k: "Conversion", t: "Close Rate", d: "When discovery is sharp and the process is consistent, decisions happen faster—and with less friction.", list: ["Discovery map", "Objection flow", "Decision control"] },
    { k: "Profit Protection", t: "Gross Profit", d: "Price stops being the battlefield when value is clear and the path to yes is structured.", list: ["Value stacking", "Price anchoring", "Follow-up discipline"] }]), { kicker: "What We Track", soft: true })
  + section("See it for yourself", `<p class="lead-in">Start free with tools and frameworks, then check out the community room: the MC Sales Training group on Skool. If it fits, you’ll know fast. Results vary; see the <a href="/disclaimer">disclaimer</a>.</p>${ctas([["Join the Skool community", SKOOL], ["See the 8-Week Challenge", "/8-week-challenge", "ghost"], ["How the System Works", "/how-the-system-works", "ghost"]])}`, { kicker: "Inside the Room" })
  + faqBlock(PR_FAQ, "The Questions That Matter", "If you’re serious, these are the only questions worth asking.")
  + section("", `${ctas([["Get Started Free →", "/free-resources"], ["Visit the Skool Group", SKOOL, "ghost"]])}<p class="note">No gimmicks. No guru fluff. Just standards, reps, and execution.</p>`, { center: true });
  return page({ path: "/proof", title: "Results & Proof | MC Sales Training", desc: "What changes when you run a real sales process: appointment quality, close rate and gross profit, and the standards we tighten first.",
    h1: "The Proof Is in the Paycheck.", body, crumbs: C(["About", "/about"], ["Proof / Results", "/proof"]), faqs: PR_FAQ, priority: "0.6" });
}

// ── /faq ──
const FAQ_GROUPS = [
  ["getting-started", "Getting Started", "Start here", [
    ["What is MC Sales Training?", "MC Sales Training is practical dealership training built around three things: word tracks, a follow-up system, and daily accountability. We focus on the moments that decide the deal—first contact, discovery, transitions, objections, and next steps."],
    ["Who is this for?", "<p>It’s built for dealerships that want consistent execution across:</p><ul><li><b>Sales:</b> floor, phone, and internet conversions</li><li><b>BDC:</b> contact → appointment → show</li><li><b>Leadership:</b> coaching structure, scoreboards, accountability</li></ul>"],
    ["What makes MC Sales Training different?", "<p>Most training leans too far “old school” or too far “new school.” Our edge is combining both:</p><ul><li><b>Old-school fundamentals</b> (real conversations, control, clarity, ethics)</li><li><b>Modern execution</b> (speed-to-lead, sequencing, CRM discipline, follow-up)</li></ul><p>That blend creates a system your whole team can run—not just your top 1–2 performers. See <a href=\"/the-secret-sauce\">The Secret Sauce</a>.</p>"],
    ["Is your approach “high pressure”?", "No. We train ethical leverage—language and process that builds trust, keeps control, and makes the next step clear without manipulating the customer."],
    ["What’s the best first step if I’m new here?", "<p>Start with the free tools, then book a short fit call if you want help choosing a path:</p><ul><li><a href=\"/free-resources\">Free Resources (Sales Vault)</a></li><li><a href=\"/how-the-system-works\">How the System Works</a></li><li><a href=\"/sales-calendar\">Fit Call</a></li></ul>"],
    ["We already have a process—will you replace it?", "Usually, no. We typically tighten what you already have: make the language cleaner, the next steps clearer, and the follow-up consistent. If something is missing, we plug the gap with a simple sequence your team can repeat."]]],
  ["programs-pricing", "Programs & Pricing", "Choosing a path", [
    ["How do I choose the right program?", "<p>The fastest way is to start with what’s currently “leaking” the most:</p><ul><li><b>Low contact / low appointments:</b> speed + follow-up sequence</li><li><b>Appointments but low shows:</b> confirmation language + pre‑frame</li><li><b>Shows but low closes:</b> discovery, transitions, and next steps</li><li><b>Inconsistent team output:</b> daily non‑negotiables + manager coaching rhythm</li></ul><p>You can review options here: <a href=\"/program-pricing\">Program Pricing</a>.</p>"],
    ["Is pricing per person or per dealership?", "It depends on the program and what you’re trying to solve. Some options are designed for individuals; others scale better for teams and dealerships. If you’re unsure, <a href=\"/sales-calendar\">book a quick call</a> and we’ll point you to the simplest fit."],
    ["Do you offer custom training for teams or leadership?", "Yes. If you need help building consistency across a team—or installing a coaching rhythm for managers— take a look at <a href=\"/private-advisory\">Private Advisory</a>."],
    ["What if we need help but don’t know exactly what’s broken?", "That’s common. A short <a href=\"/sales-calendar\">fit call</a> is the easiest way to identify: where the breakdown is happening (contact, appointment, show, close, follow-up), and what “one fix” will produce the fastest win."]]],
  ["execution", "Execution & Accountability", "Making it stick", [
    ["What do you mean by “daily accountability”?", "Training fails when people “like it” but don’t run it. Daily accountability means there’s a simple standard (non‑negotiables) and a scoreboard, so the team knows what “done” looks like and leaders can coach consistently."],
    ["How much time does this take each day?", "It depends on the program, but the goal is always the same: simple, repeatable reps that fit the reality of a dealership day. We’d rather you run a smaller system consistently than a bigger system “sometimes.”"],
    ["Do you provide word tracks and rebuttals?", "Yes—language for the real moments: first contact, discovery, price questions, “I’m just looking,” “I need to talk to my spouse,” “I’m not ready,” and follow-up that gets responses. Start with the <a href=\"/free-word-tracks\">free word tracks</a>."],
    ["Does this work for both Sales and BDC?", "<p>Yes. The language and sequencing are built to support:</p><ul><li><b>BDC:</b> convert leads into appointments and shows</li><li><b>Sales:</b> convert shows into closes without pressure</li></ul><p>The handoff improves when both departments run the same playbook.</p>"],
    ["What’s the fastest “quick win” most teams can implement?", "Speed + sequence. Tighten first response, run a consistent 7‑day follow-up cadence, and upgrade “next step” language so every conversation ends with a clear commitment."]]],
  ["courses", "Courses On Demand", "Self-paced", [
    ["What are “Courses On Demand”?", "Courses On Demand are self-paced trainings that let you sharpen specific skills: language, transitions, follow-up, objections, and process. Browse here: <a href=\"/courses-on-demand\">Courses On Demand</a>."],
    ["Should I do courses or a structured program?", "If you want to improve a skill, courses are great. If you want consistent production across time (and across a team), structured programs + accountability tend to be the better fit."],
    ["Can managers use the courses to coach their team?", "Yes—especially if you pair the course with a simple scoreboard and daily non‑negotiables. That’s what turns “training” into “execution.”"]]],
  ["advisory", "Private Advisory", "Hands-on support", [
    ["What is Private Advisory?", "Private Advisory is for people who want more direct help installing a system: individuals, teams, and leadership—depending on where you need support. Explore options: <a href=\"/private-advisory\">Private Advisory</a>."],
    ["Who should consider advisory?", "<ul><li>Managers who want a tighter coaching rhythm and real accountability</li><li>BDC leaders trying to raise contact/appointment/show rates</li><li>Sales leaders who want consistent execution beyond “rockstar” reps</li><li>Individuals who want a faster path with clearer standards</li></ul>"],
    ["Do you help with leadership and culture?", "Yes—culture improves when standards are clear and coaching is consistent. The goal is simple: fewer “random” days and more predictable production."]]],
  ["policies", "Policies & Expectations", "Important clarity", [
    ["Do you guarantee results or income?", "No. We don’t guarantee income, sales volume, or specific outcomes. Training provides structure, language, and accountability—but results depend on execution, market conditions, inventory, lead flow, and leadership follow-through."],
    ["Is this “one-size-fits-all”?", "The system is repeatable, but it’s not rigid. We keep the core language and sequence consistent while adapting to your store’s workflow, staffing, and lead sources."],
    ["How do we get help if we still have questions?", "If you didn’t find your answer here, reach out and we’ll point you in the right direction: <a href=\"/contact\">Contact</a>."]]],
];
export function faq() {
  const all = FAQ_GROUPS.flatMap((g) => g[3]);
  const body = hero({ kicker: "FAQ", h1: "FAQ", lede: "Quick answers to the most common questions about MC Sales Training—programs, delivery, who it’s for, and what to do next.",
    ctas: [["Get Free Word Tracks →", "/free-resources"], ["Book a Fit Call →", "/sales-calendar", "ghost"]] })
  + `<div class="wrap"><nav aria-label="FAQ sections"><ul class="chips" style="margin-top:18px">${FAQ_GROUPS.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join("")}</ul></nav></div>`
  + FAQ_GROUPS.map(([id, t, k, items], i) => section(t, `<div class="faq">${items.map(([q, a]) => `<details${i === 0 ? " open" : ""}><summary>${q}</summary><div class="ans">${a.startsWith("<") ? a : `<p>${a}</p>`}</div></details>`).join("")}</div>`, { kicker: k, id, soft: i % 2 === 1 })).join("")
  + section("Get a simple plan for the next 7 days.", `<p class="lead-in">If you tell us where the breakdown is (contact, appointments, shows, closes, follow-up), we’ll recommend the smallest fix that produces the fastest win.</p>${ctas([["Book a Fit Call →", "/sales-calendar"], ["Start Free →", "/free-resources", "ghost"]], "No pressure. Just clarity on what to run next.")}`, { kicker: "Still stuck?", center: true, soft: true });
  return page({ path: "/faq", title: "FAQ | MC Sales Training", desc: "Answers about MC Sales Training: who it’s for, programs and pricing, daily accountability, courses on demand, private advisory and policies.",
    h1: "FAQ", body, crumbs: C(["FAQ", "/faq"]), faqs: all, priority: "0.8" });
}

// ── /contact ──
const CT_FAQ = [
  ["Is the Sales Vault really free?", "Yes. Start there to experience the framework before choosing a program."],
  ["Do you offer team training?", "Yes. Email us with your rep count and goals and we’ll recommend the best setup."],
  ["What should I do first?", "Start with <a href=\"/free-resources\">Free Resources</a>, then review <a href=\"/program-pricing\">Program Pricing</a> if you want structure and accountability."],
];
export function contact() {
  const body = hero({ kicker: "Contact", h1: "Contact", lede: "Tell us what you need — and we’ll point you to the right next step.", ctas: [["Start Free", "/free-resources"], ["View Programs", "/program-pricing", "ghost"]] })
  + section("Who Are You Reaching Out For?", `<p class="lead-in">Pick the option that fits so we can respond faster.</p>` + cards([
    { k: "Individual", t: "I’m a Sales Professional", d: "I want help choosing the right resource, accessing training, or getting support for my account.", cta: [["Go to Form", "#mcFormSection"], ["Email Support", `mailto:${EMAIL}?subject=MC%20Sales%20Training%20Support`]] },
    { k: "Manager / Owner", t: "I’m Looking for Team Training", d: "I want to train a sales staff, standardize process, and improve consistency with the MC system. See <a href=\"/team-training\">Team Training</a>.", cta: [["Inquire by Email", `mailto:${EMAIL}?subject=Team%20Training%20Inquiry%20%E2%80%94%20MC%20Sales%20Training`], ["Use the Form", "#mcFormSection"]] }], 2), { kicker: "Choose your path", soft: true })
  + section("", `<div class="two"><div class="panel"><p class="ck">Get in touch</p><h2>We Respond Monday–Friday</h2><p>For billing, access, technical issues, or “what should I start with?” questions — reach out and we’ll guide you.</p>
<ul class="checks"><li>Email <a href="mailto:${EMAIL}">${EMAIL}</a></li><li>Text <a href="sms:${PHONE_TEL}">${PHONE_TEXT}</a></li><li>Call <a href="tel:${PHONE_TEL}">${PHONE_VANITY}</a></li></ul><p class="small">Typical response time: within 24 hours on business days.</p>
<p><a href="/free-resources">Free Resources</a> · <a href="/faq">FAQ</a> · <a href="/program-pricing">Program Pricing</a> · <a href="/sales-calendar">Book a strategy call</a></p></div>
<div id="mcFormSection"><p class="ck">Message us</p><h2>Send a Quick Note</h2><p>Share the basics and we’ll route it correctly. Prefer email? Use <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>${ghlForm("contact", { title: "Contact MC Sales Training" })}</div></div>${formEmbedScript}`)
  + faqBlock(CT_FAQ, "Quick Answers", "A few common questions we receive.");
  return page({ path: "/contact", title: "Contact MC Sales Training", desc: "Email support@mcsalestraining.com or text 1-240-628-7246. We respond Monday–Friday, typically within 24 hours on business days.",
    h1: "Contact", body, crumbs: C(["Contact", "/contact"]), faqs: CT_FAQ, priority: "0.8",
    schema: [{ "@context": "https://schema.org", "@type": "ContactPage", url: SITE + "/contact", name: "Contact MC Sales Training", about: { "@id": `${SITE}/#org` } }] });
}
