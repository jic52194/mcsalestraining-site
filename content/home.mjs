// Home = the 8-Week Sales Challenge sales page (as on the live site), with the live Stripe Buy Button in the enroll dialog.
import { page, section, cards, bullets, faqBlock, quote, yt, pic, esc, ghlForm, formEmbedScript, payTemplate, SITE } from "../scripts/lib.mjs";

const enroll = (label, cls = "") => `<a class="btn${cls ? " " + cls : ""}" href="#enroll" data-enroll>${label}</a>`;

const WEEKS = [
  ["Week 1", "Foundation & scorecard", "Install your daily sprint, define non-negotiables, and baseline your scorecard so improvement is measurable.", ["Activity scorecard + daily cadence", "Pipeline hygiene rules (what stays / what gets purged)", "Your script inventory (what’s working / leaking)", "Simple weekly review loop that keeps the month controlled"]],
  ["Week 2", "Phone control", "Lock the first 15 seconds and create a repeatable call flow that leads to next steps.", ["Openers that sound natural (not robotic)", "Bridging questions that keep control", "Appointment language that closes clean", "How to stop “talking too much” while increasing urgency"]],
  ["Week 3", "Text & email follow-up", "Templates + timing so you stop “checking in” and start getting responses.", ["Response-getting sequences (text + email)", "Voicemail + text pairing", "Re-engaging stale leads without begging", "Follow-up rules that protect your time and increase show rates"]],
  ["Week 4", "Needs & discovery", "Ask better questions so customers sell themselves on next steps.", ["Situation → problem → consequence questions", "Uncover real buying triggers", "Prevent price objections before they happen"]],
  ["Week 5", "Objection logic", "Install tracks that feel natural and keep momentum moving forward.", ["Payment/price objections", "“Let me think” / “I’ll talk to…” stalls", "Reframing without arguing"]],
  ["Week 6", "Show rates", "Reduce no-shows and improve kept appointment quality.", ["Confirmation language + reminders", "Pre-appointment micro-commitments", "Next-step clarity that makes people show up"]],
  ["Week 7", "Pipeline pressure", "Build pipeline that doesn’t collapse when you have a slow week.", ["Daily pipeline review method", "Reactivation + referral prompts", "Protecting momentum through the month"]],
  ["Week 8", "Lock it in", "Convert the install into a simple operating system you can run indefinitely.", ["Your personal playbook", "Weekly review + improvement loop", "Next 30-day execution plan"]],
];

const FAQS = [
  ["How much does it cost?", "It’s $392 for the 8-week program. No long contracts."],
  ["Is this for beginners or experienced reps?", "Both. Beginners get structure fast. Experienced reps tighten execution and remove leaks."],
  ["Do I get the bonus right away?", "Yes—portal access and bonus tech start immediately after you join."],
  ["What if I miss a live call?", "You’ll still execute the weekly install and rejoin the next live breakdown session."],
  ["Is this high-pressure “closing” training?", "No. It’s process-based execution: better questions, cleaner next steps, and follow-up structure."],
  ["How fast will I see results?", "Most people feel improvement quickly once phone flow and cadence are installed."],
];

export function home() {
  const priceCard = `<aside class="panel pricecard" aria-label="What you’ll get">
<p class="ck">Built for Sales + BDC</p><h2>What you’ll get</h2>
<p>Not motivation. An operating system: what to do, what to say, and how to track it so production becomes predictable.</p>
${bullets(["Word-for-word follow-up templates (text + email)", "Objection tracks that don’t sound pushy", "Daily sprint checklist + accountability scorecard", "Weekly live deal breakdown coaching", "CarSalesSoftware.com bonus tech stack"])}
<p><b>What changes fast (week 1–2):</b> Phone flow gets cleaner, follow-up gets consistent, and the “quiet days” stop killing your month.</p>
<p><b>What you’ll have (week 8):</b> A personal playbook you can run daily + a review loop that keeps you improving month after month.</p>
<p class="ck">Membership</p><p class="price">$392</p><p class="small">For the 8-week program • No contracts</p>
<p class="ctas">${enroll("Enroll now →")}</p><p class="small">Seats capped • enrollment closes when full</p></aside>`;

  const body = `<div class="cohort">Seats are capped • enroll before it’s full</div>
<div class="wrap"><nav aria-label="On this page"><ul class="jump"><li><a href="#overview">Overview</a></li><li><a href="#video">Message</a></li><li><a href="#what-you-get">What you get</a></li><li><a href="#curriculum">Curriculum</a></li><li><a href="#bonus">Bonus</a></li><li><a href="#coaches">Coaches</a></li><li><a href="#proof">Proof</a></li><li><a href="#faq">FAQ</a></li></ul></nav></div>
<section class="hero" id="overview"><div class="wrap split"><div class="hero-copy">
<p class="kicker">8-week system install • weekly live coaching</p>
<h1>Install a <em>sales system</em> you can run forever.</h1>
<p class="lede">Stop losing deals in the gaps. This program installs a repeatable framework for consistent appointments, cleaner closes, and predictable production—built for real dealership environments.</p>
<p class="ctas">${enroll("Get my seat →")}<a class="btn ghost" href="#video">Watch Mark’s message</a><a class="btn ghost" href="#curriculum">See the week-by-week plan</a></p>
<ul class="chips"><li>No contracts</li><li>Immediate portal access</li><li>Bonus tech included</li></ul>
<div class="tiles" style="margin-top:22px"><div class="tile"><b>8-week install</b>Build the habits + playbook</div><div class="tile"><b>Weekly live calls</b>Deal breakdown + correction</div><div class="tile"><b>Daily sprint</b>10 minutes that moves pipeline</div><div class="tile"><b>$392</b>For the 8-week program</div></div>
</div>${priceCard}</div></section>
${section("A quick message from Mark", `<div class="two"><div>${yt("fDafAOrOqWg", "A quick message from Mark Casper", { params: "controls=1&rel=0&modestbranding=1&playsinline=1" })}</div><div><p>If you’re coming from an ad, you deserve immediate clarity. This video explains what the program is, who it’s built for, and why the “system” matters more than motivation.</p><p>Watch it, then scroll down and compare the plan to your current month. The gaps will be obvious.</p><p class="ctas">${enroll("Enroll for $392 →")}<a class="btn ghost" href="#what-you-get">Show me what I get</a></p></div></div>`, { kicker: "Start here • 2-minute clarity before you decide", id: "video" })}
${section("The 8-Week Install", cards([
    { k: "Phone Control", t: "Open strong • guide next steps", d: "Master the first 15 seconds and bridge cleanly into next steps without sounding pushy." },
    { k: "Digital Mastery", t: "Text & email follow-up", d: "Templates that revive “ghosts” and convert inbox conversations into appointments." },
    { k: "Daily Cadence", t: "The 10-minute sprint", d: "A non-negotiable checklist that keeps pipeline moving—without wasting time." },
    { k: "Objection Logic", t: "Price • payment • timing", d: "Exactly what to say when they stall. No arguing. No begging. Clean direction." },
    { k: "Accountability", t: "Scorecard system", d: "Track what matters so improvement becomes obvious and consistent." },
    { k: "Live Coaching", t: "Weekly deal breakdown", d: "Bring real deals. Get corrected. Leave with the next best sentence and a plan." },
  ]) + `<p class="ctas">${enroll("Enroll for $392 →")}</p><p class="note">Immediate access • no contracts • seats capped</p>`, { kicker: "One mission: execution that shows up every day", id: "what-you-get", soft: true })}
${section("Week-by-Week Install Plan", `<div class="faq">${WEEKS.map(([w, t, d, l], i) => `<details${i < 3 ? " open" : ""}><summary>${w}: ${t}</summary><div class="ans"><p>${d}</p>${bullets(l)}</div></details>`).join("")}</div>`, { kicker: "Learn → rehearse → apply → review → repeat", id: "curriculum" })}
${section("Your weekly rhythm", `<p class="lead-in">This is not “watch content and hope.” It’s an execution loop: learn the play, run the play daily, then fix leaks live using real deals. You don’t just feel motivated—you build repeatable momentum.</p>
<ol class="steps s4"><li><h3>Weekly Play: one focus per week</h3><p>Each week has one install priority so execution stays clean and measurable.</p></li><li><h3>Templates: copy/paste follow-up</h3><p>You get tracks for common stalls so you never “make it up” under pressure.</p></li><li><h3>Daily Sprint: 10 minutes, non-negotiable</h3><p>A short checklist that keeps your pipeline alive on slow days and busy days.</p></li><li><h3>Live Breakdown: bring a real deal</h3><p>We workshop your next best sentence and your next best step—then you execute immediately.</p></li></ol>
<p class="ctas">${enroll("Get my seat →")}<a class="btn ghost" href="#faq">Read FAQs</a></p>`, { kicker: "How it works • cadence + coaching loop", soft: true })}
${section("Bonus: The Tech Stack Upgrade", `<div class="two"><div class="panel"><p class="ck">Included free</p><h3>CarSalesSoftware.com Full Integration</h3>
<ul class="checks"><li><b>Marketing number + rep-first CRM.</b> Keep every lead, call, text, and follow-up in one place—built for dealership speed. This is CRM for car sales that reduces missed opportunities and makes pipeline visibility obvious.</li>
<li><b>Personal microsite (digital showroom) + inquiry capture.</b> A clean personal landing page that converts clicks into conversations—trade-in, financing, and “next step” inquiries that turn browsing into booked appointments.</li>
<li><b>Smart forms + reminders to increase kept appointments.</b> Capture intent (timing, budget, trade, payment comfort) and trigger reminders automatically. Better data up front means fewer no-shows and more qualified showroom traffic.</li>
<li><b>Referral engine (reviews + referrals) post-sale.</b> Automated review requests and referral prompts after delivery—so your sold customers keep generating future deals without you chasing them manually.</li>
<li><b>Pipeline reporting so stalls don’t hide.</b> See where deals get stuck: contact attempts, appointment set, show rate, and next-step outcomes. You’ll know what to fix instead of guessing why the month feels “quiet.”</li>
<li><b>Content packs so you stay visible consistently.</b> Pre-built social content and posting support designed for dealership customers—stay top-of-mind, build trust, and generate inbound leads without living on your phone.</li></ul></div>
<div class="panel"><p class="ck">Bonus value</p><h3>Long-term asset upgrade</h3><p class="price">$0.00</p><p>Included when you join. See it at <a href="https://demo.carsalessoftware.com/" rel="noopener" target="_blank">demo.carsalessoftware.com</a>.</p>
<h3>How it helps you win</h3>${bullets(["Follow-up becomes automatic instead of emotional.", "Prospects get the right next step at the right time.", "You stay visible daily without posting daily.", "Your pipeline stops going “quiet” mid-month."])}
<p class="ctas">${enroll("I want the bonus → enroll now")}</p><p class="note">Bonus unlocks immediately after checkout</p></div></div>`, { kicker: "Included with membership • CarSalesSoftware.com integration included", id: "bonus" })}
${section("The Coaches", `<div class="two"><div class="panel person">${pic("mark-casper", [480, 800], "Mark Casper", { w: 480, h: 480, sizes: "220px" })}<div><h3><a href="/mark">Mark Casper</a></h3><p class="ck">Over 40 years • VP / GM / GSM operations</p><p>“This isn’t theory. It’s the system I used to drive consistent performance inside real dealerships.”</p></div></div>
<div class="panel person">${pic("jared-casper", [480, 800], "Jared Casper", { w: 480, h: 480, sizes: "220px" })}<div><h3><a href="/jared">Jared Casper</a></h3><p class="ck">Tech & process specialist</p><p>“I remove CRM noise and install follow-up structure so the right message hits at the right time, every time.”</p></div></div></div>
<p class="note">Meet the full team on <a href="/our-team">Our Team</a> or read <a href="/the-secret-sauce">the father–son advantage</a>.</p>`, { kicker: "Built by dealership operators • installed for real results", id: "coaches", soft: true })}
${section("What happens when you stop guessing", `<div class="cards c3">${[
    ["My follow-up used to be random. Now I run the sprint and my pipeline stays alive without stress.", "Sales Rep"],
    ["The objection tracks changed everything. I stopped arguing and started guiding—without losing momentum.", "Internet Sales"],
    ["The weekly breakdown calls are the difference. You bring a deal and leave with the next best sentence.", "Closer"],
  ].map(([q, w]) => quote(q, `★★★★★ <span class="sr-only">5 stars,</span> ${w}`)).join("")}</div>
<p class="ctas">${enroll("Join for $392 →")}</p><p class="note">Immediate access • $392 for the 8-week program. Results vary; see our <a href="/disclaimer">disclaimer</a> and <a href="/proof">what we track</a>.</p>`, { kicker: "Clear process • cleaner conversations • better outcomes", id: "proof" })}
${faqBlock(FAQS, "FAQ", "Clear answers before you join. More on the <a href=\"/faq\">full FAQ page</a>.")}
${section("Stop winging it. Start winning.", `<p class="lead-in">Your month changes when you install a system you can execute every day—without relying on luck.</p><p class="ctas">${enroll("Claim my seat →")}<a class="btn ghost" href="/8-week-challenge">See the 35-lesson curriculum</a></p><p class="note">$392 for the 8-week program • no contracts • bonus tech included</p>`, { id: "enroll", center: true, soft: true })}
${section("Get the free Sales Mini-Book", `<div class="two"><div>${pic("mini-book-preview", [768, 1200], "Free Sales Mini-Book preview", { w: 768, h: 512, sizes: "(min-width: 900px) 460px, 92vw", cls: "preview" })}<p class="lead-in">Habits, scripts, and follow-up standards that make consistent months normal: a morning routine, follow-up standards and a consistency checklist.</p>${bullets(["Daily structure + clean language", "Follow-up that earns replies", "Built from real dealership floors"])}<p class="note">Free • tactical PDF • run it for 7 days exactly as written. <a href="/free-mini-book">More about the mini-book →</a></p></div><div><p class="ck">Free mini-book • Tactical PDF</p><p>Enter your info and the PDF is delivered instantly.</p>${ghlForm("minibook", { title: "Free Mini-Book sign-up" })}</div></div>${formEmbedScript}`, { kicker: "Free • No cost", id: "free-mini-book" })}
${section("Not ready to enroll?", `<ul class="related"><li><a href="/free-resources">The Sales Vault (free)</a><span>Word tracks, the mini-book and the daily non-negotiables.</span></li><li><a href="/program-pricing">Compare programs</a><span>Individual coaching, team training and private advisory.</span></li><li><a href="/sales-calendar">Book a strategy call</a><span>Bring one real scenario; leave with a 7-day plan.</span></li></ul>`, { id: "related" })}
<div class="sticky-enroll"><span>$392 • 8-week program</span>${enroll("Enroll →", "sm")}</div>
${payTemplate}`;

  const course = { "@context": "https://schema.org", "@type": "Course", "@id": `${SITE}/#course`, name: "8-Week Sales Challenge", description: "An 8-week system install for dealership Sales and BDC: phone control, text and email follow-up, the daily 10-minute sprint, needs and discovery, objection logic, show rates, pipeline building and a scorecard, with weekly live deal-breakdown coaching.", provider: { "@type": "EducationalOrganization", "@id": `${SITE}/#org`, name: "MC Sales Training", url: SITE + "/" }, url: SITE + "/",
    offers: { "@type": "Offer", price: "392", priceCurrency: "USD", description: "$392 for the 8-week program, no contract", url: SITE + "/#enroll", availability: "https://schema.org/InStock" },
    hasCourseInstance: { "@type": "CourseInstance", courseMode: "online", instructor: [{ "@type": "Person", name: "Mark Casper" }, { "@type": "Person", name: "Jared Casper" }] } };
  return page({ path: "/", title: "8-Week Sales Challenge | MC Sales Training", desc: "Install a sales system you can run forever: word tracks, follow-up and weekly live coaching for dealership Sales and BDC. $392 for 8 weeks.",
    h1: "Install a sales system you can run forever.", body, faqs: FAQS, schema: [course], theme: "dark-home", priority: "1.0", image: "/img/logo-500.png",
    preload: `<link rel="preload" as="image" href="/img/hero-bg-1600.webp" media="(min-width:900px)">` });
}
