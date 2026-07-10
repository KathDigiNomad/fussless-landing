// ============================================================
// APP CONFIG — the ONLY file you edit per app
// ============================================================
// Every landing page is generated from this object.
// Copy the template, change these values, and you're done.
// ============================================================

export interface AppConfig {
  // --- Identity ---
  name: string;              // e.g. "Fussless"
  tagline: string;           // e.g. "The calm helper for families with picky eaters"
  domain: string;            // e.g. "fussless.one" (no protocol, no trailing slash)
  appUrl: string;            // e.g. "/app" or "https://app.fussless.one"
  supportEmail: string;      // e.g. "hello@fussless.one"

  // --- Hero section ---
  hero: {
    eyebrow?: string;        // small text above headline, optional
    headline: string;        // main H1, e.g. "Stop cooking two dinners."
    subheadline: string;     // 1-2 sentence value proposition
    primaryCta: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    heroImage: string;       // path in /public/images/, e.g. "/images/fussless-hero.webp"
    heroImageAlt: string;
  };

  // --- Social proof / trust ---
  trust?: {
    line: string;            // e.g. "Trusted by 1,200+ parents across Europe"
    logos?: { src: string; alt: string }[];
  };

  // --- Feature sections ---
  features: {
    title: string;
    body: string;
    icon?: string;           // emoji or path to svg
  }[];

  // --- How it works ---
  howItWorks?: {
    title: string;
    steps: { number: number; title: string; body: string }[];
  };

  // --- Social proof stats (replaces testimonials for honest early-stage claims) ---
  socialProof?: {
    title: string;
    intro?: string;
    stats: { number: string; label: string }[];
    footer?: string;
  };

  // --- Testimonials (optional, only if you have real quotes) ---
  testimonials?: {
    quote: string;
    name: string;
    role?: string;
    avatar?: string;
  }[];

  // --- FAQ ---
  faq?: {
    question: string;
    answer: string;
  }[];

  // --- Final CTA ---
  finalCta: {
    headline: string;
    body?: string;
    button: { label: string; href: string };
  };

  // --- SEO ---
  seo: {
    title: string;           // full <title> tag
    description: string;     // meta description, 150-160 chars
    ogImage: string;         // path in /public/images/, 1200x630
    keywords?: string[];
  };

  // --- Theme (colors overridden in src/styles/theme.css per app) ---
  theme: {
    fontDisplay: string;     // e.g. "'Playfair Display', serif"
    fontBody: string;        // e.g. "'Inter', sans-serif"
  };

  // --- Analytics (optional) ---
  analytics?: {
    posthogKey?: string;
    plausibleDomain?: string;
  };
}

// ============================================================
// FUSSLESS CONFIG — replace this with your app's values
// ============================================================

export const config: AppConfig = {
  name: 'Fussless',
  tagline: 'The calm helper for families with picky eaters',
  domain: 'fussless.one',
  appUrl: '/app',
  supportEmail: 'hello@fussless.one',

  hero: {
    eyebrow: 'For parents who are tired of the dinner battle',
    headline: 'Stop cooking two dinners.',
    subheadline: "Fussless plans family meals around your child's safe foods — so the whole table can eat the same thing, without the nightly negotiation.",
    primaryCta: { label: 'Start free — 7 days', href: '/app' },
    secondaryCta: { label: 'See how it works', href: '#features' },
    heroImage: '/images/hero.webp',
    heroImageAlt: 'A calm family dinner scene with a warm cream and brown color palette',
  },

  trust: {
    line: 'No credit card. Cancel anytime. Loved by parents across the Netherlands, Belgium, and beyond.',
  },

  features: [
    {
      title: 'Recipes that adapt to your child',
      body: 'Every recipe includes gentle swaps for the ingredients your child refuses this week. No rewriting the whole meal — just one small change and everyone eats.',
      icon: '🍽️',
    },
    {
      title: 'A weekly plan in under 5 minutes',
      body: "Answer a few questions and Fussless proposes 5–7 dinners that respect your family's safe foods, allergies, and schedule. Swap anything with one tap.",
      icon: '📆',
    },
    {
      title: 'Made by a parent who has been there',
      body: 'Fussless was built after years of cooking two separate dinners. No corporate wellness fluff, no "just make them eat it" — just meals that actually work for real families.',
      icon: '💛',
    },
  ],

  howItWorks: {
    title: 'From dinner stress to dinner routine in three steps',
    steps: [
      {
        number: 1,
        title: 'Tell us who eats what',
        body: "A gentle 60-second setup captures your family's likes, dislikes, allergies, and non-negotiables. No judgment about the ten foods your child will actually eat.",
      },
      {
        number: 2,
        title: 'Get your weekly plan',
        body: "Fussless proposes a full week of dinners that everyone can eat. Don't like one? Swap it in a tap. It learns from what you accept.",
      },
      {
        number: 3,
        title: 'Cook once, feed everyone',
        body: "Each recipe has a child-friendly variation built in. Same pan, same table, no separate kids' plate. Just calmer dinners.",
      },
    ],
  },

  socialProof: {
    title: 'Built with real families in mind',
    stats: [
      { number: '200+', label: 'Parent interviews behind every feature' },
      { number: '15', label: 'Belgian and Dutch families in beta' },
      { number: '4', label: 'Languages supported at launch' },
    ],
    footer: "Fussless started as one parent's tool for their own picky eater. Every recipe, every swap, every question in the setup was shaped by parents who lived through the same dinners you did.",
  },

  // Testimonials intentionally left empty — using socialProof stats instead
  // until we have real quotes from beta families.

  faq: [
    {
      question: 'Is there really a free trial? What happens after 7 days?',
      answer: "Yes. You get full access for 7 days — no credit card required to start. On day 7, we send a gentle reminder. If Fussless isn't helping, you can leave without paying a cent.",
    },
    {
      question: 'My child eats about six foods. Will this actually work for us?',
      answer: 'Yes. During setup you tell Fussless exactly which foods are safe — even if it\'s a very short list. Every meal plan is built around that list, not against it. As your child tries new things, Fussless grows with them.',
    },
    {
      question: 'Does Fussless handle allergies and intolerances?',
      answer: 'Yes. You flag allergies and intolerances during setup, and every suggestion is filtered accordingly. Common allergens (gluten, dairy, nuts, eggs, soy) are supported.',
    },
    {
      question: 'What languages is Fussless available in?',
      answer: 'Fussless is available in English, Dutch, French, and Spanish at launch. More languages are on the roadmap.',
    },
    {
      question: "Do you sell my family's data?",
      answer: "Never. Your family's food preferences stay yours. We don't sell data to advertisers or third parties, and you can delete your account and all data at any time.",
    },
    {
      question: "I've tried meal-planning apps before and they didn't stick. Why would this one?",
      answer: "Fair question. Most apps assume adventurous eaters and healthy grown-ups. Fussless is built specifically for the reality of picky kids: short safe-food lists, sensory sensitivities, texture issues, and the parent who's just trying to get through Tuesday. That's the only problem we solve.",
    },
  ],

  finalCta: {
    headline: "Tonight's dinner doesn't have to be a battle.",
    body: 'Start your 7-day free trial. No card required. Cancel anytime.',
    button: { label: 'Start free — 7 days', href: '/app' },
  },

  seo: {
    title: 'Fussless — Peaceful family dinners, even with a picky eater',
    description: "Fussless is meal planning for parents of picky eaters. Recipes that adapt to your child's safe foods, weekly plans in minutes, and no more cooking two dinners every night. 7-day free trial.",
    ogImage: '/images/og-image.png',
    keywords: ['picky eaters', 'family meal planning', 'kids recipes', 'meal planner app', 'safe foods', 'ARFID friendly'],
  },

  theme: {
    fontDisplay: "'Playfair Display', ui-serif, Georgia, serif",
    fontBody: "'Inter', ui-sans-serif, system-ui, sans-serif",
  },

  analytics: {
    // posthogKey: 'phc_xxx',
    // plausibleDomain: 'fussless.one',
  },
};