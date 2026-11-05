/**
 * Every piece of marketing copy on the page lives here, except the menu, which has its own file (nav.ts).
 *
 * This is deliberately the only file a non-developer needs to touch to
 * change wording, pricing, specs or FAQ answers. Facts below (sizes,
 * materials, FAQ answers) come from the client's notes of Nov 4. Anything
 * the client hasn't decided yet is marked TODO(client).
 */

export const site = {
  name: "Squeejit",
  tagline: "Off highway vehicle glass window cleaner",
  description:
    "A compact bottle with a built-in scrubber and squeegee, plus a carrier that fits any roll cage. Small enough to stash on any machine, so a clean windshield is always within reach.",
  email: "cghnicholas@gmail.com",
};

/**
 * Build credit shown in the footer. The wordmark itself lives in
 * Footer.astro, since the markup splits it to highlight the pun. Set `url`
 * here to turn the credit into a link.
 */
export const credit = {
  url: "",
};

export const hero = {
  eyebrow: "Off highway vehicle glass window cleaner",
  headlinePre: "Mud on,",
  headlineSlash: "mud off.",
  sub:
    "The trail doesn't come with a car wash. Squeejit puts cleaner, a scrubber and a squeegee in one compact bottle, with a carrier that fits any roll cage. Small enough to stash on any machine, so it's there when the windshield goes blind.",
  primaryCta: "Get yours",
  secondaryCta: "See how it works",
  // Short trust markers under the CTA row
  trust: [
    "Compact 8 oz bottle",
    "Refillable",
    "Carrier fits any roll cage",
  ],
  // Floating stat card on the product photo
  stat: { value: "7½ in", label: "Tall. Stows anywhere." },
};

/** The three-beat line printed on the client's badge logo. */
export const motto = ["Squirt it", "Scrub it", "Squeejit"];

export const problem = {
  eyebrow: "The problem",
  heading: "Ten miles in, you can't see a thing",
  body:
    "One water crossing, one truck ahead of you, one bad line through a rut, and your windshield goes opaque. A dry rag smears it. A water bottle spreads it around. A shop towel from the toolbox puts scratches in the glass you'll be looking through for years.",
  kicker:
    "Every UTV has a toolkit, a first aid kit and a recovery strap. Nobody packs a bucket and a sponge.",
};

export const steps = [
  {
    n: "01",
    title: "Squirt",
    body:
      "Flip the cap and lay a line of cleaner across the glass. The twist-top puts it exactly where you want it. No wind-blown spray, no wasted product.",
  },
  {
    n: "02",
    title: "Scrub",
    body:
      "Flip the bottle and work the silicone scrubber across the mess. Firm enough to break dried mud and bug splatter loose, gentle enough on glass.",
  },
  {
    n: "03",
    title: "Squeejit",
    body:
      "That's the name and the finish. Pull the squeegee across the glass and the slurry comes off clean. No towel needed.",
  },
];

/** Callout labels for the annotated product diagram. */
export const anatomy = {
  eyebrow: "Anatomy",
  heading: "Three tools. One hand.",
  body:
    "Squeejit isn't a bottle with accessories strapped to it. The scrubber and squeegee are part of the body, so there's nothing loose to rattle around or leave behind at camp.",
  parts: [
    {
      label: "Twist-top cap",
      detail: "Open and close it with one hand.",
      // Percentage position over the product image. Tune once the real photo lands
      x: 52,
      y: 12,
    },
    {
      label: "Silicone scrubber",
      detail: "100% silicone rubber. Safe on glass, and it breaks dried mud loose.",
      x: 70,
      y: 48,
    },
    {
      label: "Squeegee blade",
      detail: "Pulls the slurry off the glass in a pass.",
      x: 74,
      y: 72,
    },
    {
      label: "8 oz refillable body",
      detail: "Roughly a half dozen full windshields per fill. Refill it instead of replacing it.",
      x: 34,
      y: 62,
    },
  ],
};

export const features = [
  {
    icon: "box",
    title: "Compact",
    body: "7½ inches tall and 2 inches wide. Small enough to stash almost anywhere on the machine.",
  },
  {
    icon: "hand",
    title: "Fits any roll cage",
    body: "The carrier has a V-notch in the bottom that fits all roll cages.",
  },
  {
    icon: "shield",
    title: "Protected tools",
    body: "A slot under the carrier shields the squeegee and bristles from mud and tree branches.",
  },
  {
    icon: "drop",
    title: "All in one",
    body: "Cleaner, scrubber and squeegee in a single bottle. Squirt it, scrub it, Squeejit.",
  },
  {
    icon: "recycle",
    title: "Refillable",
    body: "The bottle comes with instructions to refill it using common household cleaning products.",
  },
  {
    icon: "check",
    title: "Safe on glass",
    body: "The scrubber is 100% silicone rubber, made for glass windshields.",
  },
];

export const demo = {
  eyebrow: "Proof",
  heading: "Watch it work",
  body: "One pass, no towel. Drag the handle to see the difference.",
  beforeLabel: "Before",
  afterLabel: "After",
};

export const builtFor = {
  eyebrow: "Built for",
  heading: "Any machine with a glass windshield",
  body: "Made for glass. Plastic windshields scratch easily, so leave those alone.",
  items: [
    { name: "Side-by-sides", note: "UTV glass windshields, front and rear" },
    { name: "Trucks & Jeeps", note: "Overlanding, no water to spare" },
    { name: "Boats", note: "Salt spray on the console glass" },
  ],
};

export const specs = [
  { label: "Bottle capacity", value: "8 fl oz" },
  { label: "Bottle size", value: '7½" H × 2" W × 2⅜" D' },
  { label: "Carrier size", value: '5½" L × 2⅜" W × 3" H' },
  { label: "Carrier fit", value: "V-notch fits all roll cages" },
  { label: "Scrubber", value: "100% silicone rubber" },
  { label: "Safe on", value: "Glass windshields" },
  { label: "Not for", value: "Plastic windshields (polycarbonate, acrylic)" },
  { label: "Cleans per fill", value: "Roughly a half dozen full windshields" },
];

export const buy = {
  eyebrow: "Get one",
  heading: "Pick your setup",
  note: "Pricing is still being finalized. We're starting out in local stores and trading posts, so email us to ask where to find one.",
  // TODO(client): add prices once decided. A price renders big on the card;
  // leave it null to show "Pricing coming soon".
  options: [
    {
      id: "bottle",
      name: "Bottle",
      blurb: "The Squeejit on its own.",
      price: null as string | null,
      badge: null as string | null,
      includes: ["1x Squeejit bottle, 8 oz", "Built-in scrubber and squeegee", "Refill instructions"],
      featured: false,
    },
    {
      id: "bundle",
      name: "Bottle + Carrier",
      blurb: "The whole setup, ready to mount.",
      price: null as string | null,
      badge: "Bundle",
      includes: [
        "1x Squeejit bottle, 8 oz",
        "1x roll cage carrier",
        "Slot protects squeegee and bristles",
      ],
      featured: true,
    },
    {
      id: "carrier",
      name: "Carrier",
      blurb: "For riders who already have the bottle.",
      price: null as string | null,
      badge: null as string | null,
      includes: ["1x carrier", "V-notch fits all roll cages", "Slot protects squeegee and bristles"],
      featured: false,
    },
  ],
};

export const faq = [
  {
    q: "Will the scrubber scratch my windshield?",
    a: "No. The scrubber is made of 100% silicone rubber and is safe on glass. As with any cleaning tool, knock off loose gravel before you scrub.",
  },
  {
    q: "Can I use it on a plastic windshield?",
    a: "No. Squeejit is intended for glass windshields. Plastic windshields are typically polycarbonate (like Lexan) or acrylic (like Plexiglas), and they scratch easily from tiny particles of sand, road dust or grit that can get trapped under the scrubber or squeegee.",
  },
  {
    q: "How many cleanings do I get per bottle?",
    a: "Roughly a half dozen full windshields, depending on how dirty they are. The bottle comes with instructions on how to refill it using common household cleaning products. Refills are available so you're not throwing away the tool every time the fluid runs out.",
  },
  {
    q: "Will it fit my roll cage?",
    a: "Yes. The carrier has a V-notch in the bottom that fits all roll cages. A slot underneath protects the squeegee and bristles from mud and tree branches.",
  },
  {
    q: "Will it freeze in the winter?",
    a: "The formula is mostly water and stays liquid down to 32°F (0°C).",
  },
  {
    q: "What's your return policy?",
    a: "We're still finalizing it. Email us and we'll answer any questions before you buy.",
  },
];

export const finalCta = {
  heading: "Stop driving blind",
  body:
    "One compact bottle, stashed on the machine, is the difference between turning around and finishing the ride.",
  cta: "Get your Squeejit",
};
