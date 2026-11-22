document.getElementById("site-header").outerHTML = `<header class="site-header">

  <div class="menu-bar">
    <div class="nav-wrap">

      <button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">
        <span></span>
        <span></span>
      </button>

      <nav class="main-nav" aria-label="Main navigation">

        <a href="index.html">Home</a>
        <a href="articles.html">All Articles</a>
        <a href="skincare.html">Skin Concerns</a>
          <a href="contact.html">Contact</a>
        <a href="beauty.html">Product Guides</a>
        <a href="haircare.html">Haircare</a>
        <a href="ingredients.html">Ingredients</a>
        <a href="about.html">About The Mulbé Leaf</a>
        <a class="nav-contact" href="disclosures.html">Disclosures</a>

        <form class="nav-search"
          action="articles.html"
          method="get"
          role="search"
          aria-label="Search articles">

          <label class="sr-only" for="site-search">
            Search articles
          </label>

          <input
            id="site-search"
            type="search"
            name="search"
            placeholder="Search articles..."
            autocomplete="off">

          <div
            class="nav-search-suggestions"
            id="nav-search-suggestions"
            role="listbox"
            aria-label="Article suggestions"
            hidden>
          </div>

          <button type="submit" aria-label="Submit search">
            <svg viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false">
              <circle cx="10.8" cy="10.8" r="6.8"></circle>
              <path d="m16 16 5 5"></path>
            </svg>
          </button>

        </form>

      </nav>
    </div>
  </div>

  <div class="logo-bar">
    <a class="brand" href="index.html" aria-label="The Mulbé Leaf home">

      <img
        src="themulbeleaf/Screenshot_2026-11-13_091710-removebg-preview.webp"
        alt="The Mulbé Leaf logo" decoding="async"
        style="height: 120px; width: auto; object-fit: contain;">

    </a>
  </div>

</header>`;


document.getElementById("site-footer").outerHTML = `<footer class="site-footer mf">

  <div class="mf-cta section-shell">
    <div class="mf-cta-copy">
      <span class="mf-eyebrow">THE WEEKLY EDIT</span>
      <h2>Skincare notes, <em>delivered gently.</em></h2>
    </div>
    <button class="mf-cta-btn" type="button" data-subscribe>
      <span>Subscribe</span><i aria-hidden="true">→</i>
    </button>
  </div>

  <div class="mf-grid section-shell">

    <div class="mf-brand">
      <a class="brand" href="index.html" aria-label="The Mulbé Leaf home">
        <img src="themulbeleaf/Screenshot_2026-11-13_091710-removebg-preview.webp"
          alt="The Mulbé Leaf logo" decoding="async" loading="lazy">
      </a>
      <p>Thoughtful skincare and beauty guidance for everyday exploration. Simple routines, honest picks, no hype.</p>
      <div class="mf-social">
        <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".6"/></svg></a>
        <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/></svg></a>
        <a href="#" aria-label="Pinterest"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M11 8.5c2.5-1 4.5.5 4 3s-2.2 3.5-3.5 2.8M11.5 11l-2 8"/></svg></a>
        <a href="#" aria-label="X"><svg viewBox="0 0 24 24"><path d="M4 4l16 16M20 4L4 20"/></svg></a>
        <a href="contact.html" aria-label="Email"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></a>
      </div>
    </div>

    <nav class="mf-col" aria-label="Explore">
      <h3>Explore</h3>
      <a href="index.html">Home</a>
      <a href="articles.html">All Articles</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </nav>

    <nav class="mf-col" aria-label="Topics">
      <h3>Topics</h3>
      <a href="skincare.html">Skincare</a>
      <a href="beauty.html">Beauty &amp; Makeup</a>
      <a href="haircare.html">Haircare</a>
      <a href="ingredients.html">Ingredients</a>
    </nav>

    <div class="mf-col mf-note">
      <h3>Good to know</h3>
      <a href="disclosures.html">Disclosures</a>
      <p>Everything here is general information, not medical advice. For persistent concerns, please see a professional.</p>
    </div>

  </div>

  <div class="mf-word" aria-hidden="true">The Mulb&eacute; Leaf</div>

  <div class="footer-bottom mf-bottom section-shell">
    <span>&copy; <span id="year"></span> The Mulb&eacute; Leaf</span>
    <span class="mf-tag">A softer approach to skincare and beauty</span>
    <a href="#">Back to top <b>&uarr;</b></a>
  </div>

</footer>`;

document.addEventListener("click", (e) => {
  if (!e.target.closest("[data-subscribe]")) return;
  if (window.mblSubscribe) window.mblSubscribe.open();
  else location.href = "index.html?subscribe=1";
});


/* =========================================================
   THE MULBÉ LEAF — LIVE SEARCH AUTOCOMPLETE
   ========================================================= */

(() => {

  const form = document.querySelector(".nav-search");

  if (!form) return;

  const input = form.querySelector('input[type="search"]');
  const panel = form.querySelector("#nav-search-suggestions");

  if (!input || !panel) return;

  const fallbackArticles = [
    {
      id: "simple-skincare-routine",
      title: "Skin Care Routine for Busy Mornings",
      ex: "A simple everyday skincare routine"
    },
    {
      id: "natural-looking-makeup",
      title: "Natural-Looking Makeup",
      ex: "Everyday makeup tips"
    },
    {
      id: "sunscreen-basics",
      title: "Sunscreen Basics",
      ex: "SPF and sun protection"
    },
    {
      id: "understanding-ingredients",
      title: "Understanding Skincare Ingredients",
      ex: "Skincare ingredients explained"
    },
    {
      id: "caring-for-skin-barrier",
      title: "Caring for Your Skin Barrier",
      ex: "Skin barrier care"
    }
  ];

  let activeIndex = -1;

  function getArticles() {

    if (typeof window.skinoraGetSearchArticles === "function") {

      const live = window.skinoraGetSearchArticles();

      if (Array.isArray(live) && live.length) {
        return live;
      }

    }

    return fallbackArticles;

  }


  function closeSuggestions() {

    panel.hidden = true;
    panel.innerHTML = "";
    activeIndex = -1;

    input.setAttribute("aria-expanded", "false");

  }


  function escapeHTML(value) {

    return String(value || "").replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);

  }


  function showSuggestions() {

    const query = input.value.trim().toLowerCase();

    if (query.length < 2) {
      closeSuggestions();
      return;
    }

    const matches = getArticles().filter(article => {

      const searchable = `
        ${article.title || ""}
        ${article.ex || ""}
        ${(article.tags || []).join(" ")}
        ${article.cat || ""}
      `.toLowerCase();

      return searchable.includes(query);

    }).slice(0, 6);


    if (!matches.length) {

      panel.innerHTML = `
        <div class="nav-search-empty">
          No matching articles found
        </div>
      `;

      panel.hidden = false;

      input.setAttribute("aria-expanded", "true");

      return;

    }


    panel.innerHTML = matches.map(article => `

      <a
        class="nav-search-suggestion"
        role="option"
        href="article.html?id=${encodeURIComponent(article.id)}">

        <span class="nav-suggestion-icon" aria-hidden="true">
          ⌕
        </span>

        <span class="nav-suggestion-copy">

          <strong>${escapeHTML(article.title)}</strong>

          <small>${escapeHTML(article.cat || "Article")}</small>

        </span>

        <span class="nav-suggestion-arrow" aria-hidden="true">
          ↗
        </span>

      </a>

    `).join("");


    panel.hidden = false;

    input.setAttribute("aria-expanded", "true");

    activeIndex = -1;

  }


  input.setAttribute("role", "combobox");
  input.setAttribute("aria-autocomplete", "list");
  input.setAttribute("aria-controls", "nav-search-suggestions");
  input.setAttribute("aria-expanded", "false");


  input.addEventListener("input", showSuggestions);

  input.addEventListener("focus", showSuggestions);


  input.addEventListener("keydown", event => {

    const options = [
      ...panel.querySelectorAll(".nav-search-suggestion")
    ];

    if (event.key === "Escape") {
      closeSuggestions();
      return;
    }

    if (!options.length) return;


    if (
      event.key === "ArrowDown" ||
      event.key === "ArrowUp"
    ) {

      event.preventDefault();

      activeIndex = event.key === "ArrowDown"
        ? (activeIndex + 1) % options.length
        : (activeIndex - 1 + options.length) % options.length;


      options.forEach((option, index) => {

        option.classList.toggle(
          "is-active",
          index === activeIndex
        );

      });

    }


    if (event.key === "Enter" && activeIndex >= 0) {

      event.preventDefault();

      options[activeIndex].click();

    }

  });


  form.addEventListener("submit", event => {

    const query = input.value.trim();

    if (!query) {

      event.preventDefault();

      input.focus();

      return;

    }

    event.preventDefault();

    window.location.href =
      `articles.html?q=${encodeURIComponent(query)}`;

  });


  document.addEventListener("click", event => {

    if (!form.contains(event.target)) {
      closeSuggestions();
    }

  });

})();

/* Smart subscribe popup (loaded on every page, once) */
(() => {
  const me = document.currentScript;
  const s = document.createElement("script");
  s.src = me && me.src ? new URL("subscribe.js", me.src).href : "js/subscribe.js";
  s.defer = true;
  document.body.appendChild(s);
})();
