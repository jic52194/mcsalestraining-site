/* mcsalestraining.com — small progressive enhancements. Every feature works as a plain link without this file. */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  // mobile menu
  var burger = $("[data-burger]"), drawer = $("[data-drawer]");
  if (burger && drawer) burger.addEventListener("click", function () {
    var open = drawer.hasAttribute("hidden");
    if (open) drawer.removeAttribute("hidden"); else drawer.setAttribute("hidden", "");
    burger.setAttribute("aria-expanded", String(open)); burger.textContent = open ? "Close" : "Menu";
  });
  // desktop dropdowns: click/Enter toggles (hover + focus-within handled in CSS)
  $$(".dd > button").forEach(function (b) {
    b.addEventListener("click", function () {
      var dd = b.parentNode, open = !dd.classList.contains("open");
      $$(".dd.open").forEach(function (o) { o.classList.remove("open"); o.firstElementChild.setAttribute("aria-expanded", "false"); });
      if (open) { dd.classList.add("open"); b.setAttribute("aria-expanded", "true"); }
    });
  });
  document.addEventListener("click", function (e) { if (!e.target.closest(".dd")) $$(".dd.open").forEach(function (o) { o.classList.remove("open"); o.firstElementChild.setAttribute("aria-expanded", "false"); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") $$(".dd.open").forEach(function (o) { o.classList.remove("open"); o.firstElementChild.setAttribute("aria-expanded", "false"); o.firstElementChild.focus(); }); });

  // cookie settings link → the analytics notice in t.js
  $$("[data-consent-open]").forEach(function (a) { a.addEventListener("click", function (e) { e.preventDefault(); window.dispatchEvent(new Event("cso:consent-open")); }); });

  // dialogs
  function dialog(id, title, html) {
    var d = document.getElementById(id);
    if (!d) {
      d = document.createElement("dialog"); d.id = id; d.className = "fd"; d.setAttribute("aria-labelledby", id + "-t");
      d.innerHTML = '<div class="fd-head"><h2 id="' + id + '-t"></h2><button type="button" class="fd-x" aria-label="Close">×</button></div><div class="fd-body"></div>';
      document.body.appendChild(d);
      d.querySelector(".fd-x").addEventListener("click", function () { d.close(); });
      d.addEventListener("click", function (e) { if (e.target === d) d.close(); });
    }
    d.querySelector("h2").textContent = title;
    if (html != null) d.querySelector(".fd-body").innerHTML = html;
    if (typeof d.showModal === "function") d.showModal(); else return null;
    return d;
  }
  function loadScript(src) { if (document.querySelector('script[src="' + src + '"]')) return; var s = document.createElement("script"); s.src = src; s.async = true; document.head.appendChild(s); }

  // GoHighLevel form in a dialog (same embed as the inline forms)
  $$("[data-form]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      if (typeof HTMLDialogElement !== "function") return; // old browser: follow the link to the inline form
      e.preventDefault();
      var id = a.getAttribute("data-form"), h = a.getAttribute("data-form-h") || 660, name = a.getAttribute("data-form-name") || "Form";
      var html = '<div class="embed form-embed"><iframe src="https://links.mcsalestraining.com/widget/form/' + id + '" id="inline-' + id + '" data-layout="{\'id\':\'INLINE\'}" data-trigger-type="alwaysShow" data-activation-type="alwaysActivated" data-deactivation-type="neverDeactivate" data-form-name="' + name.replace(/"/g, "&quot;") + '" data-height="' + h + '" data-layout-iframe-id="inline-' + id + '" data-form-id="' + id + '" title="' + name.replace(/"/g, "&quot;") + '" style="width:100%;height:' + h + 'px;border:none;border-radius:8px"></iframe><p class="small">🔒 Private. No spam. If the form doesn’t load, disable ad blockers for this domain.</p></div>';
      dialog("form-dialog", a.getAttribute("data-form-title") || a.textContent.replace(/[→↓]/g, "").trim(), html);
      loadScript("https://links.mcsalestraining.com/js/form_embed.js");
    });
  });

  // Home: enroll ($392) dialog with the live Stripe Buy Button
  var pay = document.getElementById("pay-template");
  $$("[data-enroll]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      if (!pay || typeof HTMLDialogElement !== "function") return;
      e.preventDefault();
      var d = document.getElementById("pay-dialog");
      if (!d) { d = dialog("pay-dialog", "8-Week Sales Challenge", pay.innerHTML); } else d.showModal();
      loadScript("https://js.stripe.com/v3/buy-button.js");
    });
  });

  // YouTube lite embeds
  function play(box, id) {
    var params = box.getAttribute("data-yt-params") || "rel=0&modestbranding=1";
    box.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id + "?autoplay=1&" + params + '" title="Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  }
  $$(".yt").forEach(function (box) {
    var a = box.querySelector(".yt-btn"); if (!a) return;
    a.addEventListener("click", function (e) { e.preventDefault(); play(box, box.getAttribute("data-yt")); });
  });
  // 8-week lesson list: swap the main player
  $$("[data-lesson]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      var box = document.getElementById("mc8wPlayer"); if (!box) return;
      e.preventDefault();
      $$("[data-lesson][aria-current]").forEach(function (x) { x.removeAttribute("aria-current"); });
      a.setAttribute("aria-current", "true");
      var t = document.getElementById("nowPlaying"); if (t) t.textContent = a.getAttribute("data-title");
      play(box, a.getAttribute("data-lesson"));
      box.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
})();
