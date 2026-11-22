/* =====================================================================
   THE MULBÉ LEAF — Smart subscribe popup
   Shows ONCE the visitor has spent some time on the site, whichever
   comes first:  (a) time on site   (b) scrolled deep into a page
                 (c) about to leave (desktop exit-intent)
   Respectful: capped by frequency, never on contact/disclosures,
   bottom-sheet on phones (no full-screen takeover = Google-safe).
   ===================================================================== */
(() => {
  /* ---------- SETTINGS (change these) ---------- */
  const CFG = {
    delaySeconds: 12,        // time on site before showing (research sweet spot: 8–15s)
    scrollPercent: 35,       // OR scrolled this far down a page ...
    scrollMinSeconds: 6,     //   ... but only after at least this many seconds
    exitIntentMinSeconds: 6, // desktop: mouse leaves top of window after this many seconds
    closedCooldownDays: 7,   // if they close it, don't ask again for X days
    subscribedCooldownDays: 365,
    skipPages: ["contact.html", "disclosures.html"],
    supabaseUrl: "https://jsdnmyzgsuydssloczpc.supabase.co",
    supabaseKey: "sb_publishable_4Dq3OPhSFEgesT5quwWBTg_QAh6aYWA",
    table: "subscribers",
    image: "themulbeleaf/okan-you-qmJGo0v1YMg-unsplash.webp"
  };
  /* --------------------------------------------- */

  const DAY = 864e5;
  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} },
    sGet: (k) => { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    sSet: (k, v) => { try { sessionStorage.setItem(k, v); } catch (e) {} }
  };
  const within = (key, days) => { const t = +store.get(key); return t && Date.now() - t < days * DAY; };

  let root = null, lastFocus = null;
  const force = /[?&]subscribe=1\b/.test(location.search);
  const page = () => location.pathname.split("/").pop() || "index.html";
  const blocked = () => CFG.skipPages.includes(page());
  const eligible = () =>
    force || (!blocked() && !within("mbl_sub_done", CFG.subscribedCooldownDays) &&
      !within("mbl_sub_closed", CFG.closedCooldownDays) && !store.sGet("mbl_sub_shown"));

  if (!force && (within("mbl_sub_done", CFG.subscribedCooldownDays) || within("mbl_sub_closed", CFG.closedCooldownDays))) {
    window.mblSubscribe = { open: () => build(true) };
    return;
  }

  function build(manual) {
    if (root) return;
    lastFocus = document.activeElement;
    store.sSet("mbl_sub_shown", "1");
    root = document.createElement("div");
    root.className = "sub-overlay";
    root.innerHTML = `
      <div class="sub-card" role="dialog" aria-modal="true" aria-labelledby="sub-title">
        <button class="sub-close" type="button" aria-label="Close">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
        <div class="sub-visual"><img src="${CFG.image}" alt="" decoding="async"><span class="sub-badge">The Weekly Edit</span></div>
        <div class="sub-body">
          <span class="eyebrow"><span class="eyebrow-line"></span>STAY IN THE LOOP</span>
          <h2 id="sub-title">Gentle skincare &amp; beauty notes, <em>weekly.</em></h2>
          <p class="sub-copy">New guides, honest product picks and simple routines, straight to your inbox. No spam, unsubscribe anytime.</p>
          <form class="sub-form" novalidate>
            <label class="sr-only" for="sub-email">Email address</label>
            <input id="sub-email" type="email" name="email" placeholder="Your email address" autocomplete="email" required>
            <input class="sub-hp" type="text" name="company" tabindex="-1" autocomplete="off" aria-hidden="true">
            <button class="sub-btn" type="submit"><span>Subscribe</span><i aria-hidden="true">→</i></button>
          </form>
          <p class="sub-msg" role="status" aria-live="polite"></p>
          <button class="sub-skip" type="button">No thanks, I'll keep browsing</button>
        </div>
      </div>`;
    document.body.appendChild(root);
    requestAnimationFrame(() => root.classList.add("open"));

    const card = root.querySelector(".sub-card");
    const form = root.querySelector(".sub-form");
    const msg = root.querySelector(".sub-msg");
    const input = root.querySelector("#sub-email");
    const btn = root.querySelector(".sub-btn");

    const close = (remember = true) => {
      if (!root) return;
      if (remember) store.set("mbl_sub_closed", String(Date.now()));
      root.classList.remove("open");
      const r = root; root = null;
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("sub-lock");
      setTimeout(() => r.remove(), 500);
      if (lastFocus && lastFocus.focus) try { lastFocus.focus(); } catch (e) {}
    };
    const onKey = (e) => {
      if (e.key === "Escape") return close();
      if (e.key !== "Tab") return;
      const f = [...card.querySelectorAll("button, input:not(.sub-hp)")].filter((x) => !x.disabled);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    if (window.innerWidth > 640) document.documentElement.classList.add("sub-lock");

    root.querySelector(".sub-close").onclick = () => close();
    root.querySelector(".sub-skip").onclick = () => close();
    root.addEventListener("pointerdown", (e) => { if (e.target === root) close(); });
    setTimeout(() => { try { input.focus({ preventScroll: true }); } catch (e) {} }, 450);

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      msg.className = "sub-msg";
      const email = input.value.trim().toLowerCase();
      if (form.company.value) return;                       // honeypot: bots fill this
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email) || email.length > 254) {
        msg.textContent = "Please enter a valid email address.";
        msg.classList.add("err"); input.focus(); return;
      }
      btn.disabled = true; card.classList.add("loading");
      try {
        const res = await fetch(`${CFG.supabaseUrl}/rest/v1/${CFG.table}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: CFG.supabaseKey,
            Authorization: `Bearer ${CFG.supabaseKey}`,
            Prefer: "return=minimal"
          },
          body: JSON.stringify({ email, source: manual ? "manual" : "popup", page: page() + location.search })
        });
        // 409 = already subscribed → treat as success
        if (!res.ok && res.status !== 409) throw new Error(res.status);
        store.set("mbl_sub_done", String(Date.now()));
        card.classList.remove("loading"); card.classList.add("done");
        card.querySelector(".sub-body").innerHTML = `
          <div class="sub-check"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></div>
          <h2>You're <em>on the list.</em></h2>
          <p class="sub-copy">Thank you for subscribing. Look out for our next guide soon.</p>
          <button class="sub-skip" type="button">Continue reading</button>`;
        card.querySelector(".sub-skip").onclick = () => close(false);
        setTimeout(() => close(false), 4500);
      } catch (err) {
        btn.disabled = false; card.classList.remove("loading");
        msg.textContent = "Something went wrong. Please try again in a moment.";
        msg.classList.add("err");
      }
    });
  }

  window.mblSubscribe = { open: () => build(true) };
  if (force) { setTimeout(() => build(true), 600); return; }

  /* ---------- triggers ---------- */
  let seconds = +store.sGet("mbl_sub_t") || 0;     // active seconds this visit (survives page changes)
  let fired = false;

  const tryShow = () => {
    if (fired || !eligible()) return;
    const a = document.activeElement;
    if (a && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)) return;   // don't interrupt typing/search
    fired = true; clearInterval(timer);
    build(false);
  };

  const scrolled = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    return h > 0 ? (scrollY / h) * 100 : 0;
  };

  const timer = setInterval(() => {
    if (document.visibilityState !== "visible") return;
    seconds++; store.sSet("mbl_sub_t", String(seconds));
    if (blocked()) return;
    if (seconds >= CFG.delaySeconds) tryShow();
    else if (seconds >= CFG.scrollMinSeconds && scrolled() >= CFG.scrollPercent) tryShow();
  }, 1000);

  addEventListener("scroll", () => {
    if (!fired && seconds >= CFG.scrollMinSeconds && !blocked() && scrolled() >= CFG.scrollPercent) tryShow();
  }, { passive: true });

  if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.addEventListener("mouseout", (e) => {
      if (e.relatedTarget || e.clientY > 0) return;   // only when leaving through the top
      if (seconds >= CFG.exitIntentMinSeconds && !blocked()) tryShow();
    });
  }
})();