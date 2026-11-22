const IMG = [
  "photo-1608248543803-ba4f8c70ae0b", "photo-1556228720-195a672e8a03",
  "photo-1596462502278-27bfdc403348", "photo-1601049541289-9b1b7bbbfe19"
];

const u = (i, w = 1000) => {
  if (typeof i === "string" && (i.startsWith("http") || i.startsWith("data:"))) return i;
  const idx = typeof i === "number" ? i : 0;
  return `https://images.unsplash.com/${IMG[idx % 4]}?auto=format&fit=crop&w=${w}&q=76`;
};


// ---- Affiliate links: put YOUR Amazon Associates tag here (one place) ----
const AMAZON_TAG = "YOUR-TAG-20";
const aff = (label, query) =>
  `<a href="https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}" target="_blank" rel="sponsored nofollow noopener noreferrer">${label}</a>`;

// Default articles array with author and date
const DEFAULT_ARTICLES = [
  { 
    id: "simple-skincare-routine",
    seo_title: "Simple Skincare Routine for Busy Mornings",
    seo_description: "A simple 3-step skincare routine for busy mornings: cleanse gently, moisturize and apply sunscreen. Easy steps that suit most skin types.", 
    cat: "skincare", 
    tags: ["routine"], 
    img: 1, 
    min: 6,
    author: "The Mulbé Leaf Editorial",
    date: "October 15, 2026",
    title: "Simple Skincare Routine for Busy Mornings",
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
    seo_title: "Natural-Looking Makeup: Easy Everyday Steps",
    seo_description: "How to do natural-looking makeup: prep your skin, even out tone with a skin tint, add cream blush and keep every step light and wearable.", 
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
    seo_title: "Sunscreen Basics: How to Choose and Wear SPF",
    seo_description: "What SPF and broad-spectrum mean, mineral vs chemical sunscreen, and how much to apply and reapply for easy daily sun protection.", 
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
    seo_title: "Skincare Ingredients Explained for Beginners",
    seo_description: "A beginner's guide to hyaluronic acid, niacinamide, vitamin C, retinoids and exfoliating acids: what they do and how to introduce them.", 
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
    seo_title: "Skin Barrier Repair: Signs and How to Calm It",
    seo_description: "Is your skin barrier stressed? Learn the signs, common causes and how to calm an over-done routine by going back to gentle basics.", 
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
    seo_title: "Everyday Makeup Essentials: A Simple Kit",
    seo_description: "A pared-back everyday makeup kit: complexion, cream blush, brows and tools worth having, plus how to remove makeup properly.", 
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
  },
  {
    id: "best-face-cleansers-for-sensitive-skin",
    cat: "beauty", tags: ["products", "cleanser"], img: 1, min: 6,
    author: "The Mulbé Leaf Editorial", date: "November 2, 2026",
    title: "Best Face Cleansers for Sensitive Skin in 2026: 3 Gentle Picks",
    ex: "Looking for the best face cleanser for sensitive skin? We compare CeraVe, Cetaphil and La Roche-Posay gentle cleansers and explain how to choose.",
    seo_title: "Best Face Cleansers for Sensitive Skin (2026)",
    seo_description: "The best face cleansers for sensitive skin in 2026. Compare CeraVe Hydrating, Cetaphil Gentle and La Roche-Posay Toleriane, with who each one suits.",
    body: [
      ["p", `The best face cleanser for sensitive skin is one that removes sweat, oil and sunscreen without leaving your skin tight, stingy or squeaky. We looked at three widely loved, gentle formulas and explain who each one suits, so you can pick with confidence.`],
      ["h", "Quick picks"],
      ["ul", [
        `Best all-rounder: ${aff("CeraVe Hydrating Facial Cleanser", "CeraVe Hydrating Facial Cleanser")}`,
        `Best for simple, classic gentleness: ${aff("Cetaphil Gentle Skin Cleanser", "Cetaphil Gentle Skin Cleanser")}`,
        `Best for a creamy, comforting feel: ${aff("La Roche-Posay Toleriane Hydrating Gentle Cleanser", "La Roche-Posay Toleriane Hydrating Gentle Cleanser")}`
      ]],
      ["img", 1, "A gentle cleanser should leave skin feeling comfortable, not tight."],
      ["h", "1. CeraVe Hydrating Facial Cleanser"],
      ["p", `This is the cleanser many dermatologists and pharmacists mention first. It is a low-foam, creamy formula that, according to the brand, contains ceramides and hyaluronic acid and is fragrance-free. It suits normal to dry and sensitive skin, and it is easy to find in most drugstores. If you wear heavy waterproof makeup, you may want a balm first. ${aff("Check the current price of CeraVe Hydrating Facial Cleanser", "CeraVe Hydrating Facial Cleanser")}.`],
      ["h", "2. Cetaphil Gentle Skin Cleanser"],
      ["p", `A long-standing favourite for very reactive skin. It is a light, soap-free lotion that you can use with or without water. It is simple and affordable, which makes it a good first cleanser if you are rebuilding a routine. Some people find it less “fresh” feeling than foaming options. ${aff("See Cetaphil Gentle Skin Cleanser", "Cetaphil Gentle Skin Cleanser")}.`],
      ["h", "3. La Roche-Posay Toleriane Hydrating Gentle Cleanser"],
      ["p", `A creamy, comforting cleanser made with sensitive skin in mind. The brand lists ceramide-3 and niacinamide, and it is fragrance-free. It tends to feel a little more luxurious than the other two, and it is a nice choice for dry, tight-feeling skin in cooler months. ${aff("Browse La Roche-Posay Toleriane Hydrating Gentle Cleanser", "La Roche-Posay Toleriane Hydrating Gentle Cleanser")}.`],
      ["h", "Cleanser comparison at a glance"],
      ["table", [
        ["Cleanser", "Best for", "Feel", "Worth knowing"],
        ["CeraVe Hydrating", "Normal to dry, sensitive", "Creamy, low foam", "Fragrance-free, widely available"],
        ["Cetaphil Gentle", "Very reactive skin", "Light lotion", "Use with or without water"],
        ["La Roche-Posay Toleriane", "Dry, tight-feeling skin", "Rich, creamy", "Comforting for cooler months"]
      ]],
      ["h", "How to choose a gentle cleanser"],
      ["ul", [
        "Look for “fragrance-free” and a non-foaming or low-foam texture.",
        "Avoid cleansers that leave your skin feeling squeaky or tight.",
        "Use lukewarm water and pat dry rather than rubbing.",
        "Patch-test any new product on a small area for a few days first."
      ]],
      ["h", "Common questions"],
      ["p", `<strong>How often should I cleanse?</strong> Most people do well with a gentle cleanse in the evening and a simple rinse in the morning. Our guide to a ${"<a href=\"article.html?id=simple-skincare-routine\">simple skincare routine</a>"} shows how this fits together.`],
      ["p", `<strong>Can I use these cleansers to remove makeup?</strong> They handle light makeup. For waterproof formulas, remove makeup first with a balm or oil, then cleanse.`],
      ["hr"],
      ["p", "<em>Some links may be affiliate links.</em>"]
    ]
  },
  {
    id: "best-daily-sunscreens-for-face",
    cat: "beauty", tags: ["products", "sunscreen"], img: 3, min: 7,
    author: "The Mulbé Leaf Editorial", date: "November 4, 2026",
    title: "Best Daily Sunscreens for Your Face in 2026: Lightweight Picks Compared",
    ex: "The best face sunscreens for everyday wear: Beauty of Joseon Relief Sun, La Roche-Posay Anthelios and Supergoop Unseen compared by finish and feel.",
    seo_title: "Best Daily Face Sunscreens (2026): 3 Top Picks",
    seo_description: "Compare the best daily face sunscreens of 2026: Beauty of Joseon Relief Sun, La Roche-Posay Anthelios and Supergoop Unseen. Finish, feel and who each suits.",
    body: [
      ["p", `The best sunscreen is the one you actually enjoy wearing every day. If you are new to SPF, start with our ${"<a href=\"article.html?id=sunscreen-basics\">sunscreen basics guide</a>"}, then use this comparison to find a face sunscreen with a finish you like.`],
      ["h", "Quick picks"],
      ["ul", [
        `Best lightweight, no-white-cast feel: ${aff("Beauty of Joseon Relief Sun: Rice + Probiotics", "Beauty of Joseon Relief Sun Rice Probiotics SPF 50")}`,
        `Best trusted pharmacy-brand option: ${aff("La Roche-Posay Anthelios", "La Roche-Posay Anthelios sunscreen face")}`,
        `Best under makeup: ${aff("Supergoop! Unseen Sunscreen", "Supergoop Unseen Sunscreen SPF 40")}`
      ]],
      ["img", 3, "Texture matters: you will wear the sunscreen you enjoy."],
      ["h", "1. Beauty of Joseon Relief Sun: Rice + Probiotics"],
      ["p", `A cult favourite for its light, moisturizing, cream-like texture that sinks in without a heavy feel. It is popular for daily wear under makeup and for people who dislike greasy sunscreens. Because formulas can differ between regions, always check the label for your local SPF and filters. ${aff("Check Beauty of Joseon Relief Sun", "Beauty of Joseon Relief Sun Rice Probiotics SPF 50")}.`],
      ["h", "2. La Roche-Posay Anthelios"],
      ["p", `The Anthelios range is a go-to for people who want a dependable, dermatologist-recommended sunscreen. There are several textures (milks, fluids and gel-creams), so pick the one that suits your skin type. Read the product page for the exact SPF and filter details in your market. ${aff("Browse La Roche-Posay Anthelios", "La Roche-Posay Anthelios sunscreen face")}.`],
      ["h", "3. Supergoop! Unseen Sunscreen"],
      ["p", `A clear, silky, primer-like sunscreen that many people layer under makeup. It is a good option if you dislike the feel of traditional sunscreens, though it is a premium-priced pick. ${aff("See Supergoop! Unseen Sunscreen", "Supergoop Unseen Sunscreen SPF 40")}.`],
      ["h", "Sunscreen comparison at a glance"],
      ["table", [
        ["Sunscreen", "Finish", "Great for", "Worth knowing"],
        ["Beauty of Joseon Relief Sun", "Soft, dewy", "Daily wear, dry to normal skin", "Check regional label"],
        ["La Roche-Posay Anthelios", "Varies by texture", "Sensitive-leaning skin", "Many formats to choose from"],
        ["Supergoop! Unseen", "Clear, silky", "Under makeup", "Premium price"]
      ]],
      ["h", "How to wear it properly"],
      ["ul", [
        "Apply generously as the last skincare step in the morning.",
        "Reapply about every two hours when outdoors.",
        "Pair it with shade, a hat and sunglasses for best protection."
      ]],
      ["hr"],
      ["p", "<em>Some links may be affiliate links.</em>"]
    ]
  },
  {
    id: "best-moisturizers-for-dry-skin",
    cat: "beauty", tags: ["products", "moisturizer"], img: 0, min: 6,
    author: "The Mulbé Leaf Editorial", date: "November 6, 2026",
    title: "Best Moisturizers for Dry Skin in 2026: Rich Creams Worth Trying",
    ex: "Our picks for the best moisturizers for dry skin: CeraVe Moisturizing Cream, First Aid Beauty Ultra Repair Cream and Vanicream compared.",
    seo_title: "Best Moisturizers for Dry Skin (2026)",
    seo_description: "Find the best moisturizer for dry skin. We compare CeraVe Moisturizing Cream, First Aid Beauty Ultra Repair Cream and Vanicream by texture and who they suit.",
    body: [
      ["p", `Dry skin needs a moisturizer that both attracts water and helps hold it in. Here are three well-loved creams for dry, tight or flaky skin, with notes on texture and who each suits.`],
      ["h", "Quick picks"],
      ["ul", [
        `Best everyday value: ${aff("CeraVe Moisturizing Cream", "CeraVe Moisturizing Cream")}`,
        `Best for a rich, comforting finish: ${aff("First Aid Beauty Ultra Repair Cream", "First Aid Beauty Ultra Repair Cream")}`,
        `Best for very sensitive skin: ${aff("Vanicream Moisturizing Cream", "Vanicream Moisturizing Cream")}`
      ]],
      ["img", 0, "Rich creams work best applied to slightly damp skin."],
      ["h", "1. CeraVe Moisturizing Cream"],
      ["p", `A thick, no-fuss cream that comes in a tub, widely recommended for dry skin. The brand lists ceramides and hyaluronic acid. It can feel rich, so many people use it at night or on body and face in colder weather. ${aff("Check CeraVe Moisturizing Cream", "CeraVe Moisturizing Cream")}.`],
      ["h", "2. First Aid Beauty Ultra Repair Cream"],
      ["p", `A dense, comforting cream that is popular for skin that feels stressed or flaky. It has a slightly more luxurious feel and works well on dry patches. ${aff("See First Aid Beauty Ultra Repair Cream", "First Aid Beauty Ultra Repair Cream")}.`],
      ["h", "3. Vanicream Moisturizing Cream"],
      ["p", `Made without common irritants like fragrance and dyes, according to the brand, this is a gentle option for easily reactive skin. ${aff("Browse Vanicream Moisturizing Cream", "Vanicream Moisturizing Cream")}.`],
      ["h", "Moisturizer comparison at a glance"],
      ["table", [
        ["Moisturizer", "Texture", "Best for", "Worth knowing"],
        ["CeraVe Moisturizing Cream", "Thick cream", "Dry skin, face and body", "Great value"],
        ["First Aid Beauty Ultra Repair", "Dense, comforting", "Dry, flaky patches", "Rich finish"],
        ["Vanicream", "Smooth cream", "Very sensitive skin", "Free of common irritants"]
      ]],
      ["h", "Tips for getting more from your moisturizer"],
      ["ul", [
        "Apply to slightly damp skin to help lock in water.",
        "Use a smaller amount on the face than the body.",
        "If your barrier feels stressed, read our guide on <a href=\"article.html?id=caring-for-skin-barrier\">caring for your skin barrier</a>."
      ]],
      ["hr"],
      ["p", "<em>Some links may be affiliate links.</em>"]
    ]
  },
  {
    id: "best-niacinamide-serums",
    cat: "beauty", tags: ["products", "serum"], img: 0, min: 6,
    author: "The Mulbé Leaf Editorial", date: "November 8, 2026",
    title: "Best Niacinamide Serums in 2026: The Ordinary, Paula’s Choice & More",
    ex: "Niacinamide serum picks compared: The Ordinary, Paula’s Choice and Good Molecules, with who each suits and how to use them.",
    seo_title: "Best Niacinamide Serums (2026): 3 Top Picks",
    seo_description: "Compare the best niacinamide serums of 2026 including The Ordinary, Paula’s Choice and Good Molecules, plus how to use niacinamide in your routine.",
    body: [
      ["p", `Niacinamide, a form of vitamin B3, is popular for supporting the skin barrier and the look of uneven tone and visible pores. Our guide to ${"<a href=\"article.html?id=understanding-ingredients\">understanding ingredients</a>"} explains more. Here are three serums worth comparing.`],
      ["h", "Quick picks"],
      ["ul", [
        `Best budget classic: ${aff("The Ordinary Niacinamide 10% + Zinc 1%", "The Ordinary Niacinamide 10% + Zinc 1%")}`,
        `Best for a more elegant texture: ${aff("Paula’s Choice 10% Niacinamide Booster", "Paula's Choice 10% Niacinamide Booster")}`,
        `Best gentle, affordable alternative: ${aff("Good Molecules Niacinamide Serum", "Good Molecules Niacinamide Serum")}`
      ]],
      ["img", 0, "Introduce one active at a time and give it a few weeks."],
      ["h", "1. The Ordinary Niacinamide 10% + Zinc 1%"],
      ["p", `One of the most recognised niacinamide serums, and very affordable. The texture is lightweight and slightly watery. Some people find 10% a lot, so start a few times a week. ${aff("Check The Ordinary Niacinamide 10% + Zinc 1%", "The Ordinary Niacinamide 10% + Zinc 1%")}.`],
      ["h", "2. Paula’s Choice 10% Niacinamide Booster"],
      ["p", `A smooth, lotion-like booster that layers nicely under moisturizer. It suits people who want a more polished feel. ${aff("See Paula’s Choice 10% Niacinamide Booster", "Paula's Choice 10% Niacinamide Booster")}.`],
      ["h", "3. Good Molecules Niacinamide Serum"],
      ["p", `A simple, budget-friendly serum that is popular with people wanting a straightforward formula. ${aff("Browse Good Molecules Niacinamide Serum", "Good Molecules Niacinamide Serum")}.`],
      ["h", "Niacinamide serum comparison at a glance"],
      ["table", [
        ["Serum", "Feel", "Best for", "Worth knowing"],
        ["The Ordinary 10% + Zinc 1%", "Light, watery", "Budget-friendly routines", "Start slowly"],
        ["Paula’s Choice 10% Booster", "Smooth, lotion-like", "Layering under moisturizer", "Elegant finish"],
        ["Good Molecules", "Light", "Simple routines", "Affordable"]
      ]],
      ["h", "How to use niacinamide"],
      ["ul", [
        "Apply after cleansing, before moisturizer and sunscreen.",
        "Start a few times per week, then increase if your skin is comfortable.",
        "Patch-test first, and stop if you notice lasting irritation."
      ]],
      ["hr"],
      ["p", "<em>Some links may be affiliate links.</em>"]
    ]
  },
  {
    id: "best-mascaras-for-natural-lashes",
    cat: "beauty", tags: ["products", "makeup"], img: 2, min: 6,
    author: "The Mulbé Leaf Editorial", date: "November 10, 2026",
    title: "Best Mascaras for Natural-Looking Lashes in 2026: 3 Easy Picks",
    ex: "The best mascaras for a natural, wispy look: Maybelline Sky High, L’Oréal Lash Paradise and essence Lash Princess compared.",
    seo_title: "Best Mascaras for Natural Lashes (2026)",
    seo_description: "Our best mascaras for natural-looking lashes in 2026: Maybelline Lash Sensational Sky High, L’Oréal Voluminous Lash Paradise and essence Lash Princess compared.",
    body: [
      ["p", `A good mascara lifts and defines lashes without clumping. If you are building a small, easy kit, see our ${"<a href=\"article.html?id=everyday-makeup-essentials\">everyday makeup essentials</a>"} and then pick one of these mascaras.`],
      ["h", "Quick picks"],
      ["ul", [
        `Best for length and lift: ${aff("Maybelline Lash Sensational Sky High", "Maybelline Lash Sensational Sky High Mascara")}`,
        `Best for soft volume: ${aff("L’Oréal Paris Voluminous Lash Paradise", "L'Oreal Paris Voluminous Lash Paradise Mascara")}`,
        `Best budget pick: ${aff("essence Lash Princess Volume Mascara", "essence Lash Princess Volume Mascara")}`
      ]],
      ["img", 2, "A small, versatile collection often goes further than a full drawer."],
      ["h", "1. Maybelline Lash Sensational Sky High"],
      ["p", `A flexible wand that stretches and separates lashes for a long, fluttery effect. It is popular for everyday wear. ${aff("Check Maybelline Lash Sensational Sky High", "Maybelline Lash Sensational Sky High Mascara")}.`],
      ["h", "2. L’Oréal Paris Voluminous Lash Paradise"],
      ["p", `A fuller, softly dramatic finish that still looks wearable, with a feathery brush that coats lashes evenly. ${aff("See L’Oréal Paris Voluminous Lash Paradise", "L'Oreal Paris Voluminous Lash Paradise Mascara")}.`],
      ["h", "3. essence Lash Princess Volume Mascara"],
      ["p", `A very affordable option with a cone-shaped brush that adds volume. A good place to start if you are just exploring mascaras. ${aff("Browse essence Lash Princess", "essence Lash Princess Volume Mascara")}.`],
      ["h", "Mascara comparison at a glance"],
      ["table", [
        ["Mascara", "Effect", "Best for", "Worth knowing"],
        ["Maybelline Sky High", "Length and lift", "Everyday, flutter look", "Flexible wand"],
        ["L’Oréal Lash Paradise", "Soft volume", "Fuller everyday look", "Feathery brush"],
        ["essence Lash Princess", "Volume", "Budget pick", "Cone-shaped brush"]
      ]],
      ["h", "Tips for wearing mascara"],
      ["ul", [
        "Wiggle the wand at the base of lashes, then comb through.",
        "Replace mascara every three months to keep eyes happy.",
        "Remove it fully at night with a gentle eye makeup remover."
      ]],
      ["hr"],
      ["p", "<em>Some links may be affiliate links.</em>"]
    ]
  },
  {
    id: "best-cream-blushes-for-a-natural-flush",
    cat: "beauty", tags: ["products", "makeup"], img: 2, min: 6,
    author: "The Mulbé Leaf Editorial", date: "November 12, 2026",
    title: "Best Cream Blushes for a Natural Flush in 2026: Rare Beauty, e.l.f. & Fenty",
    ex: "Our favourite cream and liquid blushes for a soft, natural flush: Rare Beauty Soft Pinch, e.l.f. Halo Glow and Fenty Cheeks Out compared.",
    seo_title: "Best Cream Blushes for a Natural Flush (2026)",
    seo_description: "The best cream and liquid blushes for a natural flush in 2026. Compare Rare Beauty Soft Pinch, e.l.f. Halo Glow and Fenty Beauty Cheeks Out Freestyle.",
    body: [
      ["p", `Cream blush melts into skin for a soft, believable flush. It is one of the easiest ways to achieve the look in our guide to ${"<a href=\"article.html?id=natural-looking-makeup\">natural-looking makeup</a>"}. Here are three favourites to compare.`],
      ["h", "Quick picks"],
      ["ul", [
        `Best for a little goes a long way: ${aff("Rare Beauty Soft Pinch Liquid Blush", "Rare Beauty Soft Pinch Liquid Blush")}`,
        `Best budget-friendly: ${aff("e.l.f. Halo Glow Blush Beauty Wand", "e.l.f. Halo Glow Blush Beauty Wand")}`,
        `Best for a portable cream: ${aff("Fenty Beauty Cheeks Out Freestyle Cream Blush", "Fenty Beauty Cheeks Out Freestyle Cream Blush")}`
      ]],
      ["img", 2, "Press cream blush on with your fingertips for a seamless finish."],
      ["h", "1. Rare Beauty Soft Pinch Liquid Blush"],
      ["p", `A highly pigmented liquid blush; just a dot or two blends out to a soft wash of colour. Start small because it is strong. ${aff("Check Rare Beauty Soft Pinch Liquid Blush", "Rare Beauty Soft Pinch Liquid Blush")}.`],
      ["h", "2. e.l.f. Halo Glow Blush Beauty Wand"],
      ["p", `A wand-style liquid blush with a radiant finish at an easy-to-try price. A good option if you want to experiment with colour. ${aff("See e.l.f. Halo Glow Blush Beauty Wand", "e.l.f. Halo Glow Blush Beauty Wand")}.`],
      ["h", "3. Fenty Beauty Cheeks Out Freestyle Cream Blush"],
      ["p", `A creamy, buildable blush in a compact, travel-friendly format that is easy to apply with fingers or a brush. ${aff("Browse Fenty Beauty Cheeks Out Freestyle Cream Blush", "Fenty Beauty Cheeks Out Freestyle Cream Blush")}.`],
      ["h", "Cream blush comparison at a glance"],
      ["table", [
        ["Blush", "Format", "Best for", "Worth knowing"],
        ["Rare Beauty Soft Pinch", "Liquid", "Strong, blendable colour", "Start with a tiny amount"],
        ["e.l.f. Halo Glow", "Liquid wand", "Budget, radiant finish", "Easy to apply"],
        ["Fenty Cheeks Out", "Cream", "Travel and touch-ups", "Buildable"]
      ]],
      ["h", "How to apply cream blush"],
      ["ul", [
        "Dot onto the apples and upper cheeks, then blend with fingertips or a damp sponge.",
        "Apply before powder so it melts into skin.",
        "Build slowly; you can always add more."
      ]],
      ["hr"],
      ["p", "<em>Some links may be affiliate links.</em>"]
    ]
  }

];


// Load articles from Supabase
// Newest first. Database rows carry published_at; the built-in articles use their date text.
const articleTime = (a) => {
  const t = new Date(a.published_at || a.date).getTime();
  return Number.isNaN(t) ? 0 : t;
};
const sortNewest = (list) => [...list].sort((a, b) => articleTime(b) - articleTime(a));
const isPublic = (a) => a.status !== "draft" || window.skinoraIsAdmin;
const esc = (v) => String(v == null ? "" : v).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

let ARTICLES = sortNewest(DEFAULT_ARTICLES);

/* ---------------------------------------------------------------------
   PAGE TOPICS
   A listing page declares what it is about with data-topic="..." on #a-list.
   The topic follows the page HEADING (e.g. "Haircare, made simpler"), not the
   .html file name. An article belongs to a topic when its category, one of its
   tags, or a keyword in its title/tags matches. Add tags/keywords here to
   widen a topic.
   --------------------------------------------------------------------- */
const TOPICS = {
  all: null,
  skincare: {
    cats: ["skincare"],
    tags: ["routine", "sunscreen", "cleanser", "moisturizer", "serum", "ingredients", "skin-barrier", "acne", "spf"],
    words: ["skincare", "skin care", "skin barrier", "sunscreen", "spf", "moisturi", "cleanser", "serum", "acne", "face wash"]
  },
  beauty: {
    cats: ["beauty"],
    tags: ["makeup", "products", "everyday", "tools", "mascara", "blush", "lipstick", "foundation"],
    words: ["makeup", "make-up", "mascara", "blush", "lipstick", "concealer", "eyeshadow"]
  },
  haircare: {
    cats: ["haircare", "hair"],
    tags: ["hair", "haircare", "scalp", "shampoo", "conditioner", "hair-oil", "hair-mask"],
    words: ["hair", "scalp", "shampoo", "conditioner"]
  },
  ingredients: {
    cats: [],
    tags: ["ingredients", "niacinamide", "vitamin-c", "hyaluronic-acid", "retinol", "retinoids", "actives", "serum", "ceramides"],
    words: ["ingredient", "niacinamide", "hyaluronic", "vitamin c", "retinol", "retinoid", "ceramide", "salicylic", "glycolic", "peptide"]
  }
};
const TOPIC_NAMES = { skincare: "skincare", beauty: "beauty and makeup", haircare: "haircare", ingredients: "ingredient" };

function inTopic(a, key) {
  const t = TOPICS[key];
  if (!t) return true;
  const cat = String(a.cat || "").toLowerCase().trim();
  const tags = (a.tags || []).map((x) => String(x).toLowerCase());
  if (t.cats.includes(cat)) return true;
  if (tags.some((x) => t.tags.includes(x))) return true;
  const hay = `${a.title || ""} ${tags.join(" ")}`.toLowerCase();
  return t.words.some((w) => hay.includes(w) && new RegExp("(^|[^a-z])" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).test(hay));
}
// Tracks whether the Supabase fetch has finished, so an article that only
// exists in the database is not reported as "not found" while still loading.
let articlesReady = false;
let articlesFailed = false;
let articlesLoading = null;
window.skinoraIsAdmin = false;

function formatArticleDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function mapDatabaseArticle(row) {
  const image = row.featured_image || 0;

  return {
    id: row.slug,
    cat: row.category || "skincare",
    tags: row.tags || [],
    img: !Number.isNaN(Number(image)) && String(image).trim() !== ""
      ? Number(image)
      : image,
    min: parseInt(row.read_time, 10) || 5,
    author: (!row.author || /^skinora/i.test(row.author)) ? "The Mulbé Leaf Editorial" : row.author,
    date: formatArticleDate(row.published_at || row.created_at),
    published_at: row.published_at || row.created_at || "",
    title: row.title,
    ex: row.excerpt || "",
    body: row.content || [],
    status: row.status || "published",
    updated: row.updated_at || row.published_at || row.created_at || "",
    seo_title: row.seo_title || "",
    seo_description: row.seo_description || ""
  };
}

function loadSkinoraArticles() {
  if (articlesLoading) return articlesLoading;
  articlesLoading = loadSkinoraArticlesOnce().finally(() => { articlesLoading = null; });
  return articlesLoading;
}

async function loadSkinoraArticlesOnce() {
  const client = window.supabaseClient;

  if (!client) {
    console.error("Supabase client not found. Check js/supabase.js.");
    articlesReady = true;
    articlesFailed = true;
    if (typeof window.skinoraRenderPost === "function") window.skinoraRenderPost();
    return;
  }

  try {
    const { data: sessionData } = await client.auth.getSession();
    window.skinoraIsAdmin = !!sessionData.session;

    const { data, error } = await client
      .from("articles")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    const databaseArticles = (data || []).map(mapDatabaseArticle);

    // Keep the original six articles until they are imported into Supabase.
    const databaseSlugs = new Set(databaseArticles.map(article => article.id));
    const remainingDefaults = DEFAULT_ARTICLES.filter(
      article => !databaseSlugs.has(article.id)
    );

    ARTICLES = sortNewest([...databaseArticles, ...remainingDefaults]);
    articlesReady = true;
    articlesFailed = false;

    console.log("Articles loaded:", ARTICLES.length);

    if (typeof window.skinoraRenderList === "function") {
      window.skinoraRenderList();
    }

    if (typeof window.skinoraRenderPost === "function") {
      window.skinoraRenderPost();
    }

  } catch (error) {
    console.error("Could not load Skinora articles:", error);
    articlesReady = true;
    articlesFailed = true;
    if (typeof window.skinoraRenderPost === "function") {
      window.skinoraRenderPost();
    }
  }
}

const cardHTML = (a) => `<article class="a-card">
  <a class="a-img" href="article.html?id=${a.id}"><img src="${u(a.img, 640)}" alt="${esc(a.title)}" loading="lazy" decoding="async"></a>
  <div class="card-meta"><span>${a.cat ? a.cat.toUpperCase() : ''}</span><span>${(a.tags && a.tags[0] ? a.tags[0] : 'GENERAL').toUpperCase()} · ${a.min || 5} MIN</span></div>
  <h3><a href="article.html?id=${a.id}">${a.title}</a></h3><p>${a.ex || ''}</p>
  <div style="font-size:12px; color:var(--muted); margin-top:10px;">By ${a.author || 'The Mulbé Leaf Editorial'} • ${a.date || ''}</div>
  <a class="text-link" href="article.html?id=${a.id}" style="margin-top:10px;">Read article <span>→</span></a></article>`;

// ---- Featured cards on the home page: always the two newest articles ----
const featureHTML = (a, i) => {
  const tag = (a.tags && a.tags[0] ? a.tags[0] : "guide");
  const cat = a.cat || "guide";
  return `<article class="feature-card">
  <a class="feature-image${i % 2 ? " feature-image-peach" : ""}" href="article.html?id=${a.id}" aria-label="Read: ${esc(a.title)}">
    <img src="${u(a.img, 1000)}" alt="${esc(a.title)}" loading="lazy" decoding="async">
    <span class="image-arrow">↗</span>
  </a>
  <div class="card-meta"><span>${cat.toUpperCase()}</span><span>${tag.toUpperCase()}</span></div>
  <h3><a href="article.html?id=${a.id}">${a.title}</a></h3>
  <p>${a.ex || ""}</p>
  <a class="text-link" href="article.html?id=${a.id}">Read the ${cat} guide <span>→</span></a>
</article>`;
};

function renderFeatured() {
  const box = document.getElementById("featured-list");
  if (!box) return;
  const latest = sortNewest(ARTICLES.filter(isPublic)).slice(0, 2);
  if (latest.length) box.innerHTML = latest.map(featureHTML).join("");
}

// ---- Listing pages (articles / skincare / beauty / haircare / ingredients) ----
function renderList() {
  renderFeatured();
  const list = document.getElementById("a-list");
  if (!list) return;
  // Already set up on this page: just redraw with the latest data (keeps search text and chosen chip).
  if (list._draw) { list._draw(); return; }

  // data-topic is the new attribute; data-cat / data-base-tag still work as a fallback.
  const topic = (list.dataset.topic || "").toLowerCase();
  const legacyCat = list.dataset.cat || "";
  const legacyTag = list.dataset.baseTag || "";
  const params = new URLSearchParams(location.search);
  const q = document.getElementById("a-search"), chips = document.querySelectorAll(".chip");
  let tag = params.get("tag") || "";
  if (q) q.value = params.get("q") || params.get("search") || "";

  const pageArticles = () => ARTICLES.filter(isPublic).filter((a) => {
    if (topic) return inTopic(a, topic);
    return (!legacyCat || String(a.cat || "").toLowerCase().trim() === legacyCat.toLowerCase()) &&
           (!legacyTag || (a.tags && a.tags.includes(legacyTag)));
  });

  const draw = () => {
    const term = (q ? q.value : "").toLowerCase().trim();
    const base = pageArticles();
    const out = base.filter((a) => (!tag || (a.tags && a.tags.includes(tag))) &&
      (!term || ((a.title || "") + " " + (a.ex || "") + " " + (a.cat || "") + " " + (a.tags ? a.tags.join(" ") : "")).toLowerCase().includes(term)));
    if (out.length) {
      list.innerHTML = out.map(cardHTML).join("");
    } else if (!base.length && topic && TOPIC_NAMES[topic]) {
      list.innerHTML = `<p class="empty">New ${TOPIC_NAMES[topic]} guides are on the way. In the meantime, <a class="text-link" href="articles.html">browse all articles <span>→</span></a></p>`;
    } else {
      list.innerHTML = '<p class="empty">No articles found. Try a different search.</p>';
    }
    // Only show topic chips that actually have articles on this page.
    chips.forEach((c) => {
      const t = c.dataset.tag;
      c.style.display = t && !base.some((a) => a.tags && a.tags.includes(t)) ? "none" : "";
      c.classList.toggle("on", t === tag);
    });
  };
  chips.forEach((c) => c.addEventListener("click", () => { tag = c.dataset.tag; draw(); }));
  if (q) q.addEventListener("input", draw);
  list._draw = draw;
  draw();
}
window.skinoraGetSearchArticles = () =>
  ARTICLES.filter(article => article.status !== "draft");
window.skinoraRenderList = renderList;
renderList();
loadSkinoraArticles();

/* =====================================================================
   ADMIN BLOG POST CREATOR & EDITOR MODAL (CONSOLE UNLOCK)
   ===================================================================== */
(() => {


let isAuthed = false;

async function refreshAdminAuth() {
  const { data, error } =
    await window.supabaseClient.auth.getSession();

  if (error) {
    console.error("Could not check admin session:", error.message);
    return;
  }

  isAuthed = !!data.session;

  const adminButton = document.getElementById("admin-plus-btn");
const logoutButton = document.getElementById("admin-logout-btn");

if (logoutButton) {
  logoutButton.style.display = isAuthed ? "block" : "none";
}
  if (typeof window.skinoraRenderPost === "function") {
    window.skinoraRenderPost();
  }
}

window.supabaseClient.auth.onAuthStateChange(
  (_event, session) => {
    isAuthed = !!session;

    const adminButton = document.getElementById("admin-plus-btn");

    if (adminButton) {
      adminButton.style.display = isAuthed ? "flex" : "none";
    }
const logoutButton = document.getElementById("admin-logout-btn");

if (logoutButton) {
  logoutButton.style.display = isAuthed ? "block" : "none";
}
    if (typeof window.skinoraRenderPost === "function") {
      window.skinoraRenderPost();
    }
  }
);


  const adminMarkup = `
<button id="admin-logout-btn" style="
  display:none;
  position:fixed;
  bottom:24px;
  right:24px;
  z-index:9998;
  padding:12px 20px;
  border:0;
  border-radius:8px;
  background:#383331;
  color:white;
  cursor:pointer;
">
  Log Out
</button>
    <button id="admin-login-btn" style="
      position:fixed; bottom:24px; right:24px; z-index:9998;
      padding:12px 20px; border:0; border-radius:8px;
      background:#383331; color:white; cursor:pointer;
    ">Admin Login</button>

    <div id="admin-login-modal" style="
      display:none; position:fixed; inset:0; z-index:10000;
      background:rgba(0,0,0,.65); align-items:center;
      justify-content:center; padding:20px;
    ">
      <form id="admin-login-form" style="
        background:white; padding:28px; border-radius:12px;
        width:100%; max-width:380px; color:#383331;
      ">
        <h2>The Mulbé Leaf Admin Login</h2>

        <label>Email</label>
        <input id="admin-email" type="email" required
          style="display:block;width:100%;padding:12px;margin:8px 0 16px;">

        <label>Password</label>
        <input id="admin-password" type="password" required
          style="display:block;width:100%;padding:12px;margin:8px 0 16px;">

        <p id="admin-login-error" style="color:red;"></p>

        <button type="submit">Log In</button>
        <button type="button" id="admin-login-close">Cancel</button>
      </form>
    </div>

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
              <input type="text" id="adm-author" placeholder="e.g. The Mulbé Leaf Editorial" value="The Mulbé Leaf Editorial" required />
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
                <option value="haircare">Haircare</option>
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
// Admin logout
document.getElementById("admin-logout-btn").addEventListener("click", async () => {
  const { error } = await window.supabaseClient.auth.signOut();

  if (error) {
    console.error("Logout failed:", error.message);
    alert("Could not log out: " + error.message);
    return;
  }

  location.reload();
});
  // Admin login modal
  // Keep admin login hidden from public visitors
const loginModal = document.getElementById("admin-login-modal");

document.getElementById("admin-login-btn").style.display = "none";

// Private keyboard shortcut: Ctrl + Shift + A
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "a") {
    e.preventDefault();
    loginModal.style.display = "flex";
  }
});
  document.getElementById("admin-login-close").addEventListener("click", () => {
    loginModal.style.display = "none";
  });

  document.getElementById("admin-login-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("admin-email").value.trim();
    const password = document.getElementById("admin-password").value;
    const errorBox = document.getElementById("admin-login-error");

    errorBox.textContent = "Logging in...";

    const result = await window.unlockAdmin(email, password);

    if (result !== "Login successful!") {
      errorBox.textContent = result;
    }
  });

  const renderPost = () => {
    // Sidebar Mini Articles Renderer inside renderPost function:
    const sidebarList = document.getElementById("sidebar-articles-list");
    if (sidebarList) {
      const miniArticles = sortNewest(ARTICLES.filter(isPublic)).slice(0, 3); // 3 newest articles
      sidebarList.innerHTML = miniArticles.map(art => `
        <div class="mini-article-item">
          <div class="mini-thumb"><img src="${u(art.img, 200)}" alt="${esc(art.title)}" loading="lazy"></div>
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
      if (!a && !articlesReady) {
        // Database articles are still loading: do not show "not found" yet.
        post.innerHTML = '<p>Loading article…</p>';
      } else if (!a && articlesFailed) {
        post.innerHTML = '<h1>We could not load this article</h1><p>Please check your connection and <a class="text-link" href="" onclick="location.reload();return false;">try again <span>→</span></a></p>';
      } else if (!a) {
        document.title = "Article not found | The Mulbé Leaf";
        const robots = document.querySelector('meta[name="robots"]');
        if (robots) robots.content = "noindex, follow";
        post.innerHTML = '<h1>Article not found</h1><p><a class="text-link" href="articles.html">Back to all articles <span>→</span></a></p>';
      } else {
        const articleTitle = `${a.seo_title || a.title} | The Mulbé Leaf`;
        const articleDescription = a.seo_description || a.ex || `Read ${a.title} on The Mulbé Leaf.`;
        const articleUrl = `https://themulbeleaf.com/article.html?id=${encodeURIComponent(a.id)}`;
        const articleImage = u(a.img, 1400);
        document.title = articleTitle;
        const setMeta = (selector, attr, key, value) => {
          let node = document.head.querySelector(selector);
          if (!node) { node = document.createElement("meta"); node.setAttribute(attr, key); document.head.appendChild(node); }
          node.content = value;
        };
        setMeta('meta[name="description"]', "name", "description", articleDescription);
        setMeta('meta[name="robots"]', "name", "robots", "index, follow");
        setMeta('meta[property="og:type"]', "property", "og:type", "article");
        setMeta('meta[property="og:site_name"]', "property", "og:site_name", "The Mulbé Leaf");
        setMeta('meta[property="og:url"]', "property", "og:url", articleUrl);
        setMeta('meta[property="og:title"]', "property", "og:title", articleTitle);
        setMeta('meta[property="og:description"]', "property", "og:description", articleDescription);
        setMeta('meta[property="og:image"]', "property", "og:image", articleImage);
        setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
        setMeta('meta[name="twitter:title"]', "name", "twitter:title", articleTitle);
        setMeta('meta[name="twitter:description"]', "name", "twitter:description", articleDescription);
        setMeta('meta[name="twitter:image"]', "name", "twitter:image", articleImage);
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
        canonical.href = articleUrl;
        let ld = document.getElementById("article-ld");
        if (!ld) { ld = document.createElement("script"); ld.type = "application/ld+json"; ld.id = "article-ld"; document.head.appendChild(ld); }
        const publishedDate = a.date ? new Date(a.date) : null;
        ld.textContent = JSON.stringify({
          "@context": "https://schema.org", "@type": "Article",
          headline: a.seo_title || a.title, description: articleDescription, image: [articleImage],
          author: { "@type": /editorial/i.test(a.author || "") ? "Organization" : "Person", name: a.author || "The Mulbé Leaf Editorial" },
          articleSection: a.cat || "skincare", keywords: (a.tags || []).join(", "), inLanguage: "en",
          publisher: { "@type": "Organization", name: "The Mulbé Leaf", url: "https://themulbeleaf.com/" },
          mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
          ...(publishedDate && !Number.isNaN(publishedDate.getTime()) ? { datePublished: publishedDate.toISOString().slice(0, 10), dateModified: (() => { const m = a.updated ? new Date(a.updated) : null; return (m && !Number.isNaN(m.getTime()) ? m : publishedDate).toISOString().slice(0, 10); })() } : {})
        });
        let crumbs = document.getElementById("breadcrumb-ld");
        if (!crumbs) { crumbs = document.createElement("script"); crumbs.type = "application/ld+json"; crumbs.id = "breadcrumb-ld"; document.head.appendChild(crumbs); }
        const sectionPage = { skincare: ["Skincare", "skincare.html"], beauty: ["Beauty", "beauty.html"], haircare: ["Haircare", "haircare.html"] }[String(a.cat || "").toLowerCase()] || ["Articles", "articles.html"];
        crumbs.textContent = JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://themulbeleaf.com/" },
            { "@type": "ListItem", position: 2, name: sectionPage[0], item: "https://themulbeleaf.com/" + sectionPage[1] },
            { "@type": "ListItem", position: 3, name: a.title, item: articleUrl }
          ]
        });
        setMeta('meta[property="og:image:alt"]', "property", "og:image:alt", a.title);
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
            return `<figure><img src="${imgSrc}" alt="${esc(caption || a.title)}" loading="lazy" decoding="async"><figcaption>${caption}</figcaption></figure>`;
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
          <div class="post-meta">By ${a.author || 'The Mulbé Leaf Editorial'} · ${a.date || ''} · ${a.min || 5} MIN READ · ${(a.tags || []).join(", ").toUpperCase()}</div>
          <div class="post-hero"><img src="${u(a.img, 1400)}" alt="${esc(a.title)}" fetchpriority="high" decoding="async"></div>${body}
          <div class="note">This article is general information, not medical advice. For persistent skin concerns, please see a qualified professional.</div>
          <p style="margin-top:30px"><a class="text-link" href="articles.html">← All articles</a></p>`;
        
        const relatedContainer = document.getElementById("related");
        if (relatedContainer) {
          // Most closely related first (shared tags, same category), then newest.
          const score = (x) => (x.tags || []).filter((t) => (a.tags || []).includes(t)).length * 2 + (x.cat === a.cat ? 1 : 0);
          relatedContainer.innerHTML = sortNewest(ARTICLES.filter((x) => x.id !== a.id && isPublic(x)))
            .sort((x, y) => score(y) - score(x)).slice(0, 3).map(cardHTML).join("");
        }
      }
    }
  };
window.skinoraRenderPost = renderPost;
renderPost();

refreshAdminAuth();
loadSkinoraArticles();

  const plusBtn = document.getElementById("admin-plus-btn");
  const modal = document.getElementById("admin-modal");
  const closeBtn = document.getElementById("admin-modal-close");
  const blocksContainer = document.getElementById("adm-blocks-container");
  const postForm = document.getElementById("admin-post-form");


window.unlockAdmin = async function(email, password) {
  const { data, error } =
    await window.supabaseClient.auth.signInWithPassword({
      email: email,
      password: password
    });

  if (error) {
    console.error("Login failed:", error.message);
    return "Login failed: " + error.message;
  }


  console.log("Supabase login successful! Reloading...");
  location.reload();

  return "Login successful!";
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
          custom = JSON.parse(localStorage.getItem("skinora_custom_articles") || "[]");
        } catch (err) {
          custom = [];
        }
        const filtered = custom.filter(x => x.id !== articleId);
        localStorage.setItem("skinora_custom_articles", JSON.stringify(filtered));
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

 postForm.addEventListener("submit", async (e) => {
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

    
    try {
      // Confirm that an admin session exists.
      const { data: sessionData, error: sessionError } =
        await window.supabaseClient.auth.getSession();

      if (sessionError || !sessionData.session) {
        alert("Please log in with your admin account first.");
        return;
      }

      // Create or preserve the article URL slug.
      let slug = editId ||
        title.toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "") ||
        `article-${Date.now()}`;

      // Look for an existing database article.
      const { data: existing, error: lookupError } =
        await window.supabaseClient
          .from("articles")
          .select("id")
          .eq("slug", slug)
          .maybeSingle();

      if (lookupError) throw lookupError;

      // Avoid duplicate slugs when creating a new article.
      if (!editId && existing) {
        slug = `${slug}-${Date.now()}`;
      }

      const parsedDate = new Date(date);

      const articleData = {
        slug,
        title,
        author,
        category: cat,
        tags,
        read_time: String(min),
        featured_image: String(img),
        excerpt: ex,
        content: body,
        status: "published",
        seo_title: title,
        seo_description: ex,
        published_at: isNaN(parsedDate.getTime())
          ? new Date().toISOString()
          : parsedDate.toISOString(),
        updated_at: new Date().toISOString()
      };

      let saveResult;

      if (editId && existing) {
        saveResult = await window.supabaseClient
          .from("articles")
          .update(articleData)
          .eq("id", existing.id);
      } else {
        saveResult = await window.supabaseClient
          .from("articles")
          .insert(articleData);
      }

      if (saveResult.error) throw saveResult.error;

      alert(editId
        ? "Article updated successfully!"
        : "Article published successfully!");

      modal.classList.remove("open");
      location.reload();

    } catch (err) {
      console.error("Supabase article save error:", err);
      alert("Could not save article: " + err.message);
    }
  });
})();
