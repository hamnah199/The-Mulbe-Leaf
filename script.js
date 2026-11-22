const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
navigation.querySelectorAll("a").forEach((l) => l.addEventListener("click", () => {
  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));
const y = document.querySelector("#year");
if (y) y.textContent = new Date().getFullYear();

// Highlight the current page in the navbar.
const markActive = () => {
  let page = location.pathname.split("/").pop() || "index.html";
  if (page === "article.html") page = "articles.html";
  navigation.querySelectorAll("a").forEach((l) => {
    l.classList.toggle("active", l.getAttribute("href") === page);
  });
};
markActive();

// "Back to top" in the footer scrolls up instead of reloading the page.
document.addEventListener("click", (e) => {
  if (!e.target.closest(".footer-bottom a")) return;
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =====================================================================
   MOTION LAYER (added): scroll reveal, parallax, header shadow,
   reading progress, page transitions
   ===================================================================== */
(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Header shadow once the page scrolls
  const menuBar = document.querySelector(".menu-bar");
  // Reading progress bar (article page only)
  let bar = null;
  const syncBar = () => {
    const hasPost = !!document.getElementById("post");
    if (hasPost && !bar) {
      bar = document.createElement("div");
      bar.className = "read-progress";
      document.body.appendChild(bar);
    } else if (!hasPost && bar) {
      bar.remove();
      bar = null;
    }
  };
  syncBar();
  // Parallax targets
  const plx = () => document.querySelectorAll(".hero-image img, .journal-art-main img, .post-hero img");

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      if (menuBar) menuBar.classList.toggle("scrolled", y > 8);
      if (bar) {
        const max = document.documentElement.scrollHeight - innerHeight;
        bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      }
      if (!reduce) {
        const vh = innerHeight;
        plx().forEach((img) => {
          const r = img.parentElement.getBoundingClientRect();
          if (r.bottom < 0 || r.top > vh) return;
          const p = (r.top + r.height / 2 - vh / 2) / vh; // -1..1
          img.style.setProperty("--py", `${(p * -26).toFixed(1)}px`);
        });
      }
      ticking = false;
    });
  };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);
  onScroll();

  // Scroll reveal
  const SELECTORS = [
    ".section-heading", ".feature-card", ".topic-card", ".journal-art", ".journal-copy",
    ".journal-links a", ".journal-anchor", ".about-grid > *", ".values > div",
    ".contact-form", ".post > *", ".related h2", ".a-card", ".footer-main"
  ].join(",");

  const io = "IntersectionObserver" in window && !reduce ? new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      io.unobserve(el);
      el.classList.add("in");
      // After the entrance finishes, drop the helper classes so normal hover transitions return.
      const done = () => { el.classList.remove("reveal", "in"); el.style.removeProperty("--d"); el.style.removeProperty("transition"); };
      el.addEventListener("transitionend", (ev) => { if (ev.propertyName === "opacity") done(); }, { once: true });
      setTimeout(done, 1800);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }) : null;

  const scan = () => {
    if (!io) return;
    document.querySelectorAll(SELECTORS).forEach((el) => {
      if (el.dataset.rv) return;
      el.dataset.rv = "1";
      if (el.closest(".page-hero, .hero")) return;
      // Stagger siblings that sit in the same row/group
      const sibs = [...el.parentElement.children].filter((c) => c.matches(SELECTORS));
      const i = Math.min(sibs.indexOf(el), 6);
      if (el.matches(".post > *")) {
        // Article content: same animation, but quicker and with a tighter stagger
        el.style.transition = "opacity .4s ease, transform .4s cubic-bezier(.2,.7,.2,1)";
        el.style.setProperty("--d", `${Math.min(i, 4) * 40}ms`);
      } else {
        el.style.setProperty("--d", `${i * 90}ms`);
      }
      el.classList.add("reveal");
      io.observe(el);
    });
  };
  scan();

  // Cards that articles.js draws later (search / filter / article page)
  let observers = [];
  const observeDynamic = () => {
    observers.forEach((m) => m.disconnect());
    observers = [];
    ["a-list", "related", "post"].forEach((id) => {
      const node = document.getElementById(id);
      if (!node) return;
      const m = new MutationObserver(scan);
      m.observe(node, { childList: true });
      observers.push(m);
    });
  };
  observeDynamic();

  // Called after the page content is swapped without a reload
  window.__skinoraRefresh = () => { syncBar(); observeDynamic(); scan(); onScroll(); splitHeadlines(); };
})();

/* =====================================================================
   IN-PAGE NAVIGATION: moving between pages swaps only the <main> content,
   so the header/footer stay put and the browser does not reload.
   (Browsers block this on file:// — it switches on automatically when the
   site is opened through http(s), e.g. Live Server or real hosting.)
   ===================================================================== */
(() => {
  if (location.protocol === "file:") {
    // Pages load normally here; just skip the blank fade-in so it feels quicker.
    document.body.style.animation = "none";
    return;
  }
  if (!window.fetch || !history.pushState) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  history.scrollRestoration = "manual";

  const cache = new Map();
  const getPage = (url) => {
    const key = url.origin + url.pathname;
    if (!cache.has(key)) {
      const p = fetch(key).then((r) => { if (!r.ok) throw new Error(r.status); return r.text(); });
      p.catch(() => cache.delete(key));
      cache.set(key, p);
    }
    return cache.get(key);
  };

  const pageUrl = (a) => {
    if (!a || a.hasAttribute("download") || (a.target && a.target !== "_self")) return null;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || !/(\.html?|\/)$/.test(url.pathname)) return null;
    return url;
  };

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const loadScript = (src) => new Promise((res, rej) => {
    const s = document.createElement("script");
    s.src = src; s.onload = res; s.onerror = rej;
    document.body.appendChild(s);
  });

  let navId = 0;
  let current = location.pathname + location.search;

  const go = async (url, push) => {
    const id = ++navId;
    const main = document.querySelector("main");
    try {
      const html = await getPage(url);
      if (id !== navId) return;
      const doc = new DOMParser().parseFromString(html, "text/html");
      const next = doc.querySelector("main");
      if (!next || !main) throw new Error("no main");

      const swap = () => {
        if (push) history.pushState({}, "", url.href);
        current = location.pathname + location.search;
        document.title = doc.title;
        main.innerHTML = next.innerHTML;
        main.querySelectorAll("script").forEach((old) => {
          const fresh = document.createElement("script");
          fresh.textContent = old.textContent;
          old.replaceWith(fresh);
        });
        markActive();
        window.scrollTo(0, 0);
        if (window.__skinoraRefresh) window.__skinoraRefresh();
        if (typeof window.skinoraRenderList === "function" && doc.querySelector('script[src$="articles.js"]')) {
          window.skinoraRenderList();
          window.skinoraRenderPost();
        }
      };

      if (document.startViewTransition && !reduce) {
        await document.startViewTransition(swap).updateCallbackDone;
      } else {
        swap();
      }

      const articlesTag = doc.querySelector('script[src$="articles.js"]');
      if (articlesTag && typeof window.skinoraRenderList !== "function") {
        await loadScript(new URL(articlesTag.getAttribute("src"), url.href).href);
      }
      if (id !== navId) return;
      if (url.hash) { try { document.querySelector(url.hash).scrollIntoView(); } catch (e) {} }
    } catch (err) {
      if (id === navId) location.href = url.href;
    }
  };

  document.addEventListener("click", (e) => {
    if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const url = pageUrl(e.target.closest("a[href]"));
    if (!url) return;
    if (url.pathname === location.pathname && url.search === location.search) {
      if (url.hash) return; // in-page anchor: browser scrolls
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    e.preventDefault();
    go(url, true);
  });

  // Start loading the next page as soon as the pointer is over a link
  const warm = (e) => {
    const url = e.target.closest && pageUrl(e.target.closest("a[href]"));
    if (url) getPage(url).catch(() => {});
  };
  document.addEventListener("pointerover", warm, { passive: true });
  document.addEventListener("touchstart", warm, { passive: true });

  addEventListener("popstate", () => {
    if (location.pathname + location.search === current) return; // hash-only change
    go(new URL(location.href), false);
  });
})();

/* =====================================================================
   2026 MOTION: word-mask headlines + magnetic buttons
   ===================================================================== */
function splitHeadlines() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll(".hero-copy > h1, .page-hero > h1").forEach((h) => {
    if (h.dataset.split) return;
    h.dataset.split = "1";
    let i = 0;
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
            const w = document.createElement("span"); w.className = "w";
            const inner = document.createElement("span"); inner.textContent = part;
            inner.style.setProperty("--i", i++);
            w.appendChild(inner); frag.appendChild(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1) walk(n);
      });
    };
    walk(h);
  });
}
splitHeadlines();

(() => {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.addEventListener("pointermove", (e) => {
    document.querySelectorAll(".button").forEach((b) => {
      const r = b.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      const near = Math.hypot(dx, dy) < Math.max(r.width, 90);
      b.style.setProperty("--mx", near ? `${(dx * .25).toFixed(1)}px` : "0px");
      b.style.setProperty("--my", near ? `${(dy * .35).toFixed(1)}px` : "0px");
    });
  }, { passive: true });
})();

/* Cursor-follow glow on article cards */
document.addEventListener("pointermove", (e) => {
  const c = e.target.closest && e.target.closest(".a-card");
  if (!c) return;
  const r = c.getBoundingClientRect();
  c.style.setProperty("--gx", `${e.clientX - r.left}px`);
  c.style.setProperty("--gy", `${e.clientY - r.top}px`);
}, { passive: true });