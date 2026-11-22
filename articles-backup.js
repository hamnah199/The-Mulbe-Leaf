const IMG = [
  "photo-1608248543803-ba4f8c70ae0b", "photo-1556228720-195a672e8a03",
  "photo-1596462502278-27bfdc403348", "photo-1601049541289-9b1b7bbbfe19"
];

const u = (i, w = 1000) => {
  if (typeof i === "string" && (i.startsWith("http") || i.startsWith("data:"))) return i;
  const idx = typeof i === "number" ? i : 0;
  return `https://images.unsplash.com/${IMG[idx % 4]}?auto=format&fit=crop&w=${w}&q=85`;
};

// Default articles array with author and date
const DEFAULT_ARTICLES = [
  { 
    id: "simple-skincare-routine", 
    cat: "skincare", 
    tags: ["routine"], 
    img: 1, 
    min: 6,
    author: "TheMulbéLeaf Editorial",
    date: "October 15, 2026",
    title: "Skin Care Routine for Busy Mornings.",
    ex: "A clear starting point for everyday care, centered on gentle cleansing, moisturizing, and daytime sun protection.",
    body: [
      ["p", "A skincare routine does not need ten steps to be useful. For most people, three habits do the heavy lifting: cleansing, moisturizing, and protecting your skin from the sun. Everything else is optional and can be added slowly, once the basics feel comfortable."],
      ["h", "Step one: cleanse gently"],
      ["p", "Cleansing removes sweat, oil, pollution, and leftover products from the day. A gentle, non-stripping cleanser is usually enough. If your skin feels tight, squeaky, or hot after washing, the cleanser may be too harsh for you."],
      ["ul", ["Use lukewarm water rather than very hot water.", "Massage for about 30 to 60 seconds, then rinse well.", "Pat dry with a clean towel instead of rubbing."]],
      ["img", 0, "Keep your products few and familiar while you learn what your skin likes."],
      ["h", "Step two: moisturize"],
      ["p", "A moisturizer helps hold water in the skin and supports its natural barrier. Lighter lotions and gels often suit oilier skin, while creams suit dry skin. Even oily skin can benefit from a lightweight formula."],
      ["q", "The best routine is the one you can comfortably repeat."],
      ["h", "Step three: protect"],
      ["p", "Daily sunscreen is the single most widely recommended step for long-term skin health. Choose a broad-spectrum formula you enjoy wearing, apply it generously as the last step of your morning routine, and reapply if you are outdoors for long periods."],
      ["h", "Morning and evening at a glance"],
      ["ul", ["Morning: cleanse (or simply rinse), moisturize, sunscreen.", "Evening: cleanse, moisturize. Add other products only if you need them."]],
      ["p", "Introduce any new product on its own, one at a time, so you can tell how your skin responds. If you notice lasting irritation, stop and consider speaking to a dermatologist."]
    ] 
  },
  { 
    id: "natural-looking-makeup", 
    cat: "beauty", 
    tags: ["makeup", "everyday"], 
    img: 2, 
    min: 6,
    author: "Amina R.",
    date: "October 18, 2026",
    title: "Natural-Looking Makeup: A Thoughtful Everyday Approach",
    ex: "Explore light coverage and softly defined features, with room to adapt each step to your own preferences.",
    body: [
      ["p", "Natural-looking makeup is less about hiding and more about softly supporting your features. The goal is light coverage, gentle definition, and a finish that still looks like skin."],
      ["h", "Start with prepared skin"],
      ["p", "Makeup sits best on comfortable, moisturized skin. A light moisturizer and, in the daytime, sunscreen give you a smooth base. Wait a minute or two so products can settle before applying color."],
      ["img", 2, "A small, versatile collection often goes further than a full drawer."],
      ["h", "Even out, don't cover up"],
      ["p", "Instead of a full-coverage foundation, try a skin tint or a small amount of foundation applied only where you want evenness, such as around the nose and chin. A tiny dot of concealer under the eyes and on blemishes is usually plenty."],
      ["ul", ["Blend with fingertips or a damp sponge for a seamless finish.", "Build coverage in thin layers rather than one thick layer.", "Press, don't drag, to keep the base looking fresh."]],
      ["h", "Add soft color"],
      ["p", "Cream blush pressed onto the cheeks looks like a natural flush. A neutral brow product used in light strokes, a coat of mascara, and a tinted lip balm complete the look without much effort."],
      ["q", "Make-up can be a pleasure, not a requirement. Do what feels like you."],
      ["h", "Adapt it to you"],
      ["p", "Shades, textures, and steps are personal. Swap, skip, or add steps freely. Test shades in natural light, and patch-test new products if your skin is sensitive."]
    ] 
  },
  { 
    id: "sunscreen-basics", 
    cat: "skincare", 
    tags: ["sunscreen", "routine"], 
    img: 3, 
    min: 7,
    author: "The Mulbé Leaf Editorial",
    date: "October 20, 2026",
    title: "Sunscreen Basics: Choosing and Wearing It Daily",
    ex: "What SPF and broad-spectrum mean, how much to apply, and how to find a formula you will actually use.",
    body: [
      ["p", "Sunscreen is often called the most important step in a skincare routine, and the reasoning is straightforward: ultraviolet light contributes to sunburn, uneven tone, and premature signs of aging, and it is a major risk factor for skin cancer."],
      ["h", "What the labels mean"],
      ["p", "SPF mainly describes protection from UVB rays, the ones that cause sunburn. Broad-spectrum means the product also protects against UVA rays, which penetrate deeper. Most dermatology bodies suggest a broad-spectrum SPF of 30 or higher for daily use."],
      ["img", 3, "Texture matters: the sunscreen you enjoy is the one you will wear."],
      ["h", "Mineral or chemical?"],
      ["p", "Mineral sunscreens use zinc oxide or titanium dioxide and sit on the skin's surface. Chemical sunscreens use filters that absorb UV light. Both are effective when used properly. Sensitive skin often prefers mineral formulas, while chemical ones tend to feel lighter and leave less of a white cast."],
      ["h", "How to apply it"],
      ["ul", ["Use generous amounts: roughly a teaspoon for the face and neck is a common guide.", "Apply as the last skincare step in the morning, before makeup.", "Reapply about every two hours outdoors, and after swimming or sweating.", "Don't forget ears, the back of the neck, and the lips."]],
      ["q", "The right sunscreen is the one you will actually put on."],
      ["p", "Sunscreen works best alongside shade, hats, and sunglasses. If you are unsure which formula suits your skin, a pharmacist or dermatologist can help."]
    ] 
  },
  { 
    id: "understanding-ingredients", 
    cat: "skincare", 
    tags: ["ingredients"], 
    img: 0, 
    min: 7,
    author: "Dr. Sara Khan",
    date: "October 22, 2026",
    title: "Understanding Ingredients: Hyaluronic Acid, Niacinamide and More",
    ex: "A friendly glossary of everyday ingredients, what they are commonly used for, and how to introduce them.",
    body: [
      ["p", "Ingredient lists can feel like a foreign language. A few well-known ingredients show up again and again, so learning them makes shopping far less confusing."],
      ["h", "Hyaluronic acid"],
      ["p", "A humectant, meaning it attracts and holds water. It is commonly used in lightweight serums and moisturizers to help skin feel plump and hydrated. It works best on slightly damp skin, followed by a moisturizer."],
      ["h", "Niacinamide"],
      ["p", "A form of vitamin B3 used to support the skin barrier and to help with the look of uneven tone and enlarged-looking pores. It is generally well tolerated, though very high concentrations can bother some people."],
      ["img", 0, "Introduce one active at a time and give it a few weeks."],
      ["h", "Vitamin C"],
      ["p", "An antioxidant used in the morning to help with brightness and with protection against environmental stress. It can be unstable and sometimes irritating, so start with a low concentration."],
      ["h", "Retinoids and exfoliating acids"],
      ["p", "Retinoids and acids such as AHAs and BHAs are stronger actives. They can help with texture and congestion, but they can also cause dryness and sensitivity. Begin slowly, a couple of evenings per week, and always use sunscreen during the day."],
      ["ul", ["Patch-test new products on a small area first.", "Add one new product at a time.", "Less is often more: not every active belongs in every routine."]],
      ["p", "If your skin has a specific concern, such as persistent acne or eczema, a dermatologist can recommend what is right for you."]
    ] 
  },
  { 
    id: "caring-for-skin-barrier", 
    cat: "skincare", 
    tags: ["routine", "ingredients"], 
    img: 1, 
    min: 6,
    author: "The Mulbé Leaf Editorial",
    date: "October 25, 2026",
    title: "Caring for Your Skin Barrier: Calming Over-Done Skin",
    ex: "Signs your skin barrier needs a rest, and how to return to the basics when your routine has become too much.",
    body: [
      ["p", "The skin barrier is the outermost layer of your skin. It keeps moisture in and irritants out. When it is disrupted, skin can feel tight, stingy, flaky, or unusually reactive."],
      ["h", "Common signs of a stressed barrier"],
      ["ul", ["Stinging when applying products that used to feel fine.", "Redness, dryness, or rough patches.", "Skin that is both oily and tight at the same time."]],
      ["h", "What often causes it"],
      ["p", "Over-exfoliating, using too many strong actives together, very hot water, and harsh cleansers are common triggers. Weather changes and lack of sleep can play a part too."],
      ["img", 1, "When in doubt, simplify."],
      ["h", "Going back to basics"],
      ["p", "Pause your actives for a couple of weeks. Use a gentle cleanser, a fragrance-free moisturizer, and sunscreen in the morning. Look for soothing, supportive ingredients such as ceramides, glycerin, and petrolatum-based balms."],
      ["q", "Skincare should feel comfortable, not like a punishment."],
      ["p", "Once your skin feels calm again, reintroduce products slowly. If irritation persists for more than a few weeks, speak to a healthcare professional."]
    ] 
  },
  { 
    id: "everyday-makeup-essentials", 
    cat: "beauty", 
    tags: ["makeup", "tools"], 
    img: 2, 
    min: 6,
    author: "Amina R.",
    date: "October 28, 2026",
    title: "Everyday Makeup Essentials: A Small, Useful Kit",
    ex: "A pared-back list of products and tools that cover most everyday looks, without the clutter.",
    body: [
      ["p", "You do not need a huge collection to feel put together. A small kit of versatile products can create dozens of different looks."],
      ["h", "Complexion"],
      ["p", "A skin tint or light foundation, a concealer close to your skin tone, and optionally a loose or pressed powder for areas that tend to shine. Choose shades in natural light."],
      ["img", 2, "Choose multi-use products to keep your routine light."],
      ["h", "Color"],
      ["ul", ["A cream blush in a soft peach, pink, or rose.", "A neutral eyeshadow or brow product.", "A tinted lip balm or a lipstick in a shade close to your natural lip color."]],
      ["h", "Tools worth having"],
      ["p", "A damp sponge or a fluffy brush for blending, a small brush for brows, and an eyelash curler if you like a lifted look. Wash brushes and sponges regularly, about once a week, to keep skin happy."],
      ["q", "A good kit supports your routine. It doesn't run it."],
      ["h", "Take it off properly"],
      ["p", "Remove makeup at the end of the day with a gentle cleanser or cleansing balm. Your skin recovers overnight, and a clean start makes the next morning easier."]
    ] 
  }
];

// Load articles safely
function getArticles() {
  try {
    const rawData = localStorage.getItem("TheMulbéLeaf_custom_articles");
    if (!rawData) return DEFAULT_ARTICLES;
    const custom = JSON.parse(rawData);
    if (Array.isArray(custom)) {
      return [...custom, ...DEFAULT_ARTICLES];
    }
    return DEFAULT_ARTICLES;
  } catch (e) {
    localStorage.removeItem("TheMulbéLeaf_custom_articles");
    return DEFAULT_ARTICLES;
  }
}

let ARTICLES = getArticles();

const cardHTML = (a) => `<article class="a-card">
  <a class="a-img" href="article.html?id=${a.id}"><img src="${u(a.img, 800)}" alt="${a.title}" loading="lazy"></a>
  <div class="card-meta"><span>${a.cat ? a.cat.toUpperCase() : ''}</span><span>${(a.tags && a.tags[0] ? a.tags[0] : 'GENERAL').toUpperCase()} · ${a.min || 5} MIN</span></div>
  <h3><a href="article.html?id=${a.id}">${a.title}</a></h3><p>${a.ex || ''}</p>
  <div style="font-size:12px; color:var(--muted); margin-top:10px;">By ${a.author || 'The Mulbé Leaf'} • ${a.date || ''}</div>
  <a class="text-link" href="article.html?id=${a.id}" style="margin-top:10px;">Read article <span>→</span></a></article>`;

// ---- Listing pages (articles / skincare / beauty) ----
function renderList() {
const list = document.getElementById("a-list");
if (list) {
  const base = list.dataset.cat || "";
  const params = new URLSearchParams(location.search);
  const q = document.getElementById("a-search"), chips = document.querySelectorAll(".chip");
  let tag = params.get("tag") || "";
  if (q) q.value = params.get("q") || "";
  const draw = () => {
    const term = (q ? q.value : "").toLowerCase().trim();
    const out = ARTICLES.filter((a) => (!base || a.cat === base) && (!tag || (a.tags && a.tags.includes(tag))) &&
      (!term || ((a.title || "") + (a.ex || "") + (a.tags ? a.tags.join(" ") : "")).toLowerCase().includes(term)));
    list.innerHTML = out.length ? out.map(cardHTML).join("") : '<p class="empty">No articles found. Try a different search.</p>';
    chips.forEach((c) => c.classList.toggle("on", c.dataset.tag === tag));
  };
  chips.forEach((c) => c.addEventListener("click", () => { tag = c.dataset.tag; draw(); }));
  if (q) q.addEventListener("input", draw);
  draw();
}
}
window.TheMulbéLeafRenderList = renderList;
renderList();

/* =====================================================================
   ADMIN BLOG POST CREATOR & EDITOR MODAL (CONSOLE UNLOCK)
   ===================================================================== */
(() => {
  const ADMIN_PASSWORD = "TheMulbéLeaf123";

  if (sessionStorage.getItem("TheMulbéLeaf_just_unlocked") === "true") {
    sessionStorage.removeItem("TheMulbéLeaf_just_unlocked");
  } else {
    sessionStorage.removeItem("TheMulbéLeaf_admin_authed");
  }

  const isAuthed = sessionStorage.getItem("TheMulbéLeaf_admin_authed") === "true";

  const adminMarkup = `
    <button id="admin-plus-btn" title="Add New Post" style="display:${isAuthed ? 'flex' : 'none'};">+</button>
    <div id="admin-modal" class="admin-modal-overlay">
      <div class="admin-modal-content">
        <div class="admin-modal-header">
          <h2 id="admin-modal-title">Create New Post</h2>
          <button id="admin-modal-close">&times;</button>
        </div>
        <form id="admin-post-form">
          <input type="hidden" id="adm-edit-id" value="" />
          <div class="admin-field-group">
            <label>Article Title</label>
            <input type="text" id="adm-title" placeholder="e.g. Morning Glow Essentials" required />
          </div>
          <div class="admin-form-row" style="grid-template-columns: 1fr 1fr;">
            <div class="admin-field-group">
              <label>Author Name</label>
              <input type="text" id="adm-author" placeholder="e.g. TheMulbéLeaf Editorial" value="TheMulbéLeaf Editorial" required />
            </div>
            <div class="admin-field-group">
              <label>Publish Date</label>
              <input type="text" id="adm-date" placeholder="e.g. November 10, 2026" required />
            </div>
          </div>
          <div class="admin-form-row">
            <div class="admin-field-group">
              <label>Category</label>
              <select id="adm-cat">
                <option value="skincare">Skincare</option>
                <option value="beauty">Beauty</option>
              </select>
            </div>
            <div class="admin-field-group">
              <label>Tags (comma separated)</label>
              <input type="text" id="adm-tags" placeholder="routine, ingredients" required />
            </div>
            <div class="admin-field-group">
              <label>Read Time (Mins)</label>
              <input type="number" id="adm-min" value="5" min="1" required />
            </div>
          </div>
          
          <div class="admin-field-group">
            <label>Featured Image (URL/Index OR Upload from Device)</label>
            <div style="display:flex; gap:10px; align-items:center;">
              <input type="text" id="adm-img" placeholder="https://... or 0" value="1" style="flex:1;" required />
              <input type="file" id="adm-img-file" accept="image/*" style="flex:1; font-size:12px;" />
            </div>
          </div>

          <div class="admin-field-group">
            <label>Short Excerpt</label>
            <textarea id="adm-ex" rows="2" placeholder="Brief summary for the card view..." required></textarea>
          </div>

          <hr style="margin:20px 0; border:0; border-top:1px solid var(--color-neutral);"/>
          <h3>Article Content Blocks</h3>
          <div id="adm-blocks-container"></div>

          <div class="admin-block-controls">
            <button type="button" class="chip" data-add="h">+ Heading</button>
            <button type="button" class="chip" data-add="p">+ Paragraph</button>
            <button type="button" class="chip" data-add="ul">+ Bullet List</button>
            <button type="button" class="chip" data-add="q">+ Quote</button>
            <button type="button" class="chip" data-add="img">+ Image</button>
            <button type="button" class="chip" data-add="hr">+ Divider Line</button>
            <button type="button" class="chip" data-add="table">+ Table</button>
            <button type="button" class="chip" data-add="a">+ Link Block</button>
          </div>

          <div style="margin-top:25px; text-align:right;">
            <button type="submit" class="button button-primary" id="adm-submit-btn">Publish Article ↗</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", adminMarkup);

  const renderPost = () => {
    // Sidebar Mini Articles Renderer inside renderPost function:
    const sidebarList = document.getElementById("sidebar-articles-list");
    if (sidebarList) {
      const miniArticles = ARTICLES.slice(0, 3); // Top 3 articles
      sidebarList.innerHTML = miniArticles.map(art => `
        <div class="mini-article-item">
          <div class="mini-thumb"><img src="${u(art.img, 200)}" alt="${art.title}" loading="lazy"></div>
          <div class="mini-info">
            <h4><a href="article.html?id=${art.id}">${art.title}</a></h4>
            <p>${art.ex || ''}</p>
          </div>
        </div>
      `).join("");
    }

    // Sidebar Search Handler
    const sideSearch = document.getElementById("sidebar-search");
    if (sideSearch) {
      sideSearch.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          const query = sideSearch.value.trim();
          if (query) {
            location.href = `articles.html?q=${encodeURIComponent(query)}`;
          }
        }
      });
    }
    const post = document.getElementById("post");
    if (post) {
      const articleId = new URLSearchParams(location.search).get("id");
      const a = ARTICLES.find((x) => x.id === articleId);
      if (!a) {
        post.innerHTML = '<h1>Article not found</h1><p><a class="text-link" href="articles.html">Back to all articles <span>→</span></a></p>';
      } else {
        document.title = `${a.title} — TheMulbéLeaf`;
        const body = (a.body || []).map((item) => {
          if (!Array.isArray(item)) return "";
          const t = item[0];
          if (t === "h") return `<h2>${item[1]}</h2>`;
          if (t === "p") return `<p>${item[1]}</p>`;
          if (t === "q") return `<blockquote>${item[1]}</blockquote>`;
          if (t === "hr") return `<hr style="margin:30px 0; border:0; border-top:1px solid var(--color-neutral);"/>`;
          if (t === "a") return `<p><a href="${item[1]}" target="_blank" rel="noopener noreferrer" class="text-link">${item[2] || item[1]} <span>↗</span></a></p>`;
          if (t === "ul" && Array.isArray(item[1])) return `<ul>${item[1].map((i) => `<li>${i}</li>`).join("")}</ul>`;
          if (t === "img") {
            const imgSrc = u(item[1], 900);
            const caption = item[2] || "";
            return `<figure><img src="${imgSrc}" alt="${caption}"><figcaption>${caption}</figcaption></figure>`;
          }
          if (t === "table" && Array.isArray(item[1])) {
            const rows = item[1];
            if (!rows.length) return "";
            const headerRow = rows[0];
            const bodyRows = rows.slice(1);
            const ths = headerRow.map(h => `<th>${h}</th>`).join("");
            const trs = bodyRows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("");
            return `<div class="table-wrap"><table><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
          }
          return "";
        }).join("");
        
        const adminButtonsHTML = isAuthed ? `
          <div>
            <button id="edit-article-btn" class="chip" data-id="${a.id}">✏️ Edit</button>
            <button id="delete-article-btn" class="chip" data-id="${a.id}" style="background:#e74c3c; color:white; border-color:#e74c3c; margin-left:8px;">🗑️ Delete</button>
          </div>` : '';

        post.innerHTML = `<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <span class="eyebrow" style="margin:0;"><span class="eyebrow-line"></span>${(a.cat || 'GENERAL').toUpperCase()} JOURNAL</span>
            ${adminButtonsHTML}
          </div>
          <h1>${a.title}</h1>
          <div class="post-meta">By ${a.author || 'TheMulbéLeaf'} · ${a.date || ''} · ${a.min || 5} MIN READ · ${(a.tags || []).join(", ").toUpperCase()}</div>
          <div class="post-hero"><img src="${u(a.img, 1400)}" alt="${a.title}"></div>${body}
          <div class="note">This article is general information, not medical advice. For persistent skin concerns, please see a qualified professional.</div>
          <p style="margin-top:30px"><a class="text-link" href="articles.html">← All articles</a></p>`;
        
        const relatedContainer = document.getElementById("related");
        if (relatedContainer) {
          relatedContainer.innerHTML = ARTICLES.filter((x) => x.id !== a.id).slice(0, 3).map(cardHTML).join("");
        }
      }
    }
  };
  window.TheMulbéLeafRenderPost = renderPost;
  renderPost();

  const plusBtn = document.getElementById("admin-plus-btn");
  const modal = document.getElementById("admin-modal");
  const closeBtn = document.getElementById("admin-modal-close");
  const blocksContainer = document.getElementById("adm-blocks-container");
  const postForm = document.getElementById("admin-post-form");

  window.unlockAdmin = function(pass) {
    if (pass === ADMIN_PASSWORD) {
      sessionStorage.setItem("TheMulbéLeaf_admin_authed", "true");
      sessionStorage.setItem("TheMulbéLeaf_just_unlocked", "true");
      console.log("🔓 Admin mode unlocked! Reloading page...");
      location.reload();
      return "Success: Admin unlocked!";
    } else {
      console.error("❌ Incorrect password!");
      return "Error: Incorrect password.";
    }
  };

  const imgFileInput = document.getElementById("adm-img-file");
  if (imgFileInput) {
    imgFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (uploadEvent) => {
          document.getElementById("adm-img").value = uploadEvent.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  plusBtn.addEventListener("click", () => {
    openModalForCreate();
  });

  document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "edit-article-btn") {
      const articleId = e.target.dataset.id;
      const articleToEdit = ARTICLES.find(x => x.id === articleId);
      if (articleToEdit) {
        openModalForEdit(articleToEdit);
      }
    }

    if (e.target && e.target.id === "delete-article-btn") {
      const articleId = e.target.dataset.id;
      if (confirm("Are you sure you want to delete this article?")) {
        let custom = [];
        try {
          custom = JSON.parse(localStorage.getItem("TheMulbéLeaf_custom_articles") || "[]");
        } catch (err) {
          custom = [];
        }
        const filtered = custom.filter(x => x.id !== articleId);
        localStorage.setItem("TheMulbéLeaf_custom_articles", JSON.stringify(filtered));
        alert("Article deleted successfully!");
        location.href = "articles.html";
      }
    }
  });

  closeBtn.addEventListener("click", () => modal.classList.remove("open"));

  const openModalForCreate = () => {
    document.getElementById("admin-modal-title").textContent = "Create New Post";
    document.getElementById("adm-edit-id").value = "";
    document.getElementById("adm-title").value = "";
    document.getElementById("adm-author").value = "The Mulbé Leaf Editorial";
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("adm-date").value = new Date().toLocaleDateString('en-US', options);
    document.getElementById("adm-cat").value = "skincare";
    document.getElementById("adm-tags").value = "";
    document.getElementById("adm-min").value = "5";
    document.getElementById("adm-img").value = "1";
    if (document.getElementById("adm-img-file")) document.getElementById("adm-img-file").value = "";
    document.getElementById("adm-ex").value = "";
    document.getElementById("adm-submit-btn").textContent = "Publish Article ↗";
    blocksContainer.innerHTML = "";
    addBlock("p", "");
    modal.classList.add("open");
  };

  const openModalForEdit = (art) => {
    document.getElementById("admin-modal-title").textContent = "Edit Article: " + art.title;
    document.getElementById("adm-edit-id").value = art.id;
    document.getElementById("adm-title").value = art.title;
    document.getElementById("adm-author").value = art.author || "The Mulbé Leaf Editorial";
    document.getElementById("adm-date").value = art.date || "";
    document.getElementById("adm-cat").value = art.cat;
    document.getElementById("adm-tags").value = (art.tags || []).join(", ");
    document.getElementById("adm-min").value = art.min;
    document.getElementById("adm-img").value = art.img;
    if (document.getElementById("adm-img-file")) document.getElementById("adm-img-file").value = "";
    document.getElementById("adm-ex").value = art.ex;
    document.getElementById("adm-submit-btn").textContent = "Update Article ↗";
    
    blocksContainer.innerHTML = "";
    if (art.body && art.body.length > 0) {
      art.body.forEach(block => {
        if (!Array.isArray(block)) return;
        const type = block[0];
        if (type === "ul") {
          addBlock(type, (block[1] || []).join("\n"));
        } else if (type === "img") {
          addBlock(type, block[1], block[2] || "");
        } else if (type === "a") {
          addBlock(type, block[1], block[2] || "");
        } else if (type === "table") {
          const csvText = (block[1] || []).map(r => r.join(",")).join("\n");
          addBlock(type, csvText);
        } else if (type === "hr") {
          addBlock(type, "");
        } else {
          addBlock(type, block[1]);
        }
      });
    } else {
      addBlock("p", "");
    }
    
    modal.classList.add("open");
  };

  const addBlock = (type, val1 = "", val2 = "") => {
    const div = document.createElement("div");
    div.className = "adm-block-row";
    div.dataset.type = type;
    
    if (type === "hr") {
      div.innerHTML = `
        <div style="flex:1;">
          <label style="font-size:12px; font-weight:bold; color:var(--color-primary);">Divider Line (Horizontal Rule)</label>
          <p style="margin:5px 0; font-size:13px; color:var(--muted);">A clean dividing line will be inserted here.</p>
        </div>
        <div style="display:flex; gap:4px;">
          <button type="button" class="adm-move-up" title="Move Up">↑</button>
          <button type="button" class="adm-move-down" title="Move Down">↓</button>
          <button type="button" class="adm-del-btn">&times;</button>
        </div>
      `;
    } else if (type === "a") {
      div.innerHTML = `
        <div style="flex:1; display:flex; flex-direction:column; gap:8px;">
          <label style="font-size:12px; font-weight:bold; color:var(--color-primary);">Link Block (URL & Text)</label>
          <input type="url" class="adm-input-link-url" placeholder="https://amazon.com/dp/example" value="${val1}" required />
          <input type="text" class="adm-input-link-text" placeholder="Link Display Text (e.g., Buy Product on Amazon)" value="${val2}" required />
        </div>
        <div style="display:flex; gap:4px;">
          <button type="button" class="adm-move-up" title="Move Up">↑</button>
          <button type="button" class="adm-move-down" title="Move Down">↓</button>
          <button type="button" class="adm-del-btn">&times;</button>
        </div>
      `;
    } else if (type === "img") {
      div.innerHTML = `
        <div style="flex:1; display:flex; flex-direction:column; gap:8px;">
          <label style="font-size:12px; font-weight:bold; color:var(--color-primary);">Inline Image & Caption</label>
          <div style="display:flex; gap:10px;">
            <input type="text" class="adm-input-img-src" placeholder="URL or index" value="${val1 && val1.toString().startsWith('data:') ? '' : val1}" style="flex:1;" required />
            <input type="file" class="adm-input-img-file" accept="image/*" style="flex:1; font-size:12px;" />
          </div>
          <input type="text" class="adm-input-img-cap" placeholder="Image caption..." value="${val2}" required />
        </div>
        <div style="display:flex; gap:4px;">
          <button type="button" class="adm-move-up" title="Move Up">↑</button>
          <button type="button" class="adm-move-down" title="Move Down">↓</button>
          <button type="button" class="adm-del-btn">&times;</button>
        </div>
      `;
      const fileInput = div.querySelector(".adm-input-img-file");
      const textInput = div.querySelector(".adm-input-img-src");
      fileInput.addEventListener("change", (ev) => {
        const file = ev.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            textInput.value = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      });
    } else if (type === "table") {
      div.innerHTML = `
        <div style="flex:1;">
          <label style="font-size:12px; font-weight:bold; color:var(--color-primary);">Table (Comma-separated rows, 1st row is header)</label>
          <textarea class="adm-input" rows="3" placeholder="Header1, Header2\nRow1Col1, Row1Col2" required>${val1}</textarea>
        </div>
        <div style="display:flex; gap:4px;">
          <button type="button" class="adm-move-up" title="Move Up">↑</button>
          <button type="button" class="adm-move-down" title="Move Down">↓</button>
          <button type="button" class="adm-del-btn">&times;</button>
        </div>
      `;
    } else {
      let labelText = type === "h" ? "Heading (H2)" : type === "p" ? "Paragraph" : type === "q" ? "Quote" : "Bullet Points (one item per line)";
      div.innerHTML = `
        <div style="flex:1;">
          <label style="font-size:12px; font-weight:bold; color:var(--color-primary);">${labelText}</label>
          ${type === "p" || type === "ul" ? `<textarea class="adm-input" rows="3" required>${val1}</textarea>` : `<input type="text" class="adm-input" value="${val1}" required />`}
        </div>
        <div style="display:flex; gap:4px;">
          <button type="button" class="adm-move-up" title="Move Up">↑</button>
          <button type="button" class="adm-move-down" title="Move Down">↓</button>
          <button type="button" class="adm-del-btn">&times;</button>
        </div>
      `;
    }

    div.querySelector(".adm-del-btn").addEventListener("click", () => div.remove());
    div.querySelector(".adm-move-up").addEventListener("click", () => {
      const prev = div.previousElementSibling;
      if (prev) blocksContainer.insertBefore(div, prev);
    });
    div.querySelector(".adm-move-down").addEventListener("click", () => {
      const next = div.nextElementSibling;
      if (next) blocksContainer.insertBefore(next, div);
    });

    blocksContainer.appendChild(div);
  };

  document.querySelectorAll(".admin-block-controls button").forEach(btn => {
    btn.addEventListener("click", () => addBlock(btn.dataset.add));
  });

  postForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const editId = document.getElementById("adm-edit-id").value;
    const title = document.getElementById("adm-title").value.trim();
    const author = document.getElementById("adm-author").value.trim();
    const date = document.getElementById("adm-date").value.trim();
    const cat = document.getElementById("adm-cat").value;
    const tags = document.getElementById("adm-tags").value.split(",").map(t => t.trim().toLowerCase()).filter(Boolean);
    const min = parseInt(document.getElementById("adm-min").value, 10);
    const rawImg = document.getElementById("adm-img").value.trim();
    const img = isNaN(rawImg) ? rawImg : parseInt(rawImg, 10);
    const ex = document.getElementById("adm-ex").value.trim();

    const body = [];
    document.querySelectorAll(".adm-block-row").forEach(row => {
      const type = row.dataset.type;
      if (type === "hr") {
        body.push(["hr"]);
      } else if (type === "a") {
        const linkUrl = row.querySelector(".adm-input-link-url").value.trim();
        const linkText = row.querySelector(".adm-input-link-text").value.trim();
        if (linkUrl) body.push(["a", linkUrl, linkText]);
      } else if (type === "img") {
        const imgSrcRaw = row.querySelector(".adm-input-img-src").value.trim();
        const imgCap = row.querySelector(".adm-input-img-cap").value.trim();
        const imgSrc = isNaN(imgSrcRaw) ? imgSrcRaw : parseInt(imgSrcRaw, 10);
        if (imgSrc !== "") body.push(["img", imgSrc, imgCap]);
      } else if (type === "table") {
        const val = row.querySelector(".adm-input").value.trim();
        if (val) {
          const rows = val.split("\n").map(r => r.split(",").map(c => c.trim()));
          body.push(["table", rows]);
        }
      } else {
        const val = row.querySelector(".adm-input").value.trim();
        if (!val) return;
        if (type === "ul") {
          const items = val.split("\n").map(i => i.trim()).filter(Boolean);
          body.push(["ul", items]);
        } else {
          body.push([type, val]);
        }
      }
    });

    let custom = [];
    try {
      custom = JSON.parse(localStorage.getItem("TheMulbéLeaf_custom_articles") || "[]");
      if (!Array.isArray(custom)) custom = [];
    } catch (err) {
      custom = [];
    }

    if (editId) {
      const index = custom.findIndex(x => x.id === editId);
      if (index !== -1) {
        custom[index] = { ...custom[index], cat, tags, img, min, title, author, date, ex, body };
      } else {
        const newArt = { id: editId, cat, tags, img, min, title, author, date, ex, body };
        custom.unshift(newArt);
      }
    } else {
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      const newArticle = { id, cat, tags, img, min, title, author, date, ex, body };
      custom.unshift(newArticle);
    }

    try {
      localStorage.setItem("TheMulbéLeaf_custom_articles", JSON.stringify(custom));
      alert(editId ? "Article updated successfully!" : "Article published successfully!");
      modal.classList.remove("open");
      location.reload();
    } catch (err) {
      alert("Browser storage limit reached! Please use image web URLs instead of uploading large image files from your device to save space.");
    }
  });
})();