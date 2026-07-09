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

  // --- Testimonials ---
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
    eyebrow: 'For parents of picky eaters',
    headline: 'Stop cooking two dinners.',
    subheadline: 'Fussless helps you plan meals the whole family will actually eat — without the daily battle at the table.',
    primaryCta: { label: 'Start free', href: '/app' },
    secondaryCta: { label: 'Browse recipes', href: '/app/recipes' },
    heroImage: '/images/hero.webp',
    heroImageAlt: 'A calm family dinner scene with a warm cream and brown color palette',
  },

  trust: {
    line: 'Loved by parents in the Netherlands, Belgium, and beyond',
  },

  features: [
    {
      title: 'Recipes that adapt to picky palates',
      body: 'Every recipe has swap suggestions for the ingredients your child refuses today — without rewriting the whole meal.',
      icon: '🍽️',
    },
    {
      title: 'Weekly meal plans in one tap',
      body: 'Get a family meal plan that respects allergies, budget, and time. No more Sunday-evening panic.',
      icon: '📆',
    },
    {
      title: 'Built by a parent, for parents',
      body: 'Fussless is made by someone who has been there. No corporate wellness fluff, just what works.',
      icon: '💛',
    },
  ],

  howItWorks: {
    title: 'How Fussless works',
    steps: [
      { number: 1, title: 'Tell us who eats what', body: 'A 60-second setup captures your family\'s likes, dislikes, and dealbreakers.' },
      { number: 2, title: 'Get your weekly plan', body: 'Fussless proposes 5-7 meals that fit everyone. Swap anything you don\'t like.' },
      { number: 3, title: 'Cook once, feed everyone', body: 'Each recipe has kid-friendly variations built in. One pan, one meal, zero battles.' },
    ],
  },

  testimonials: [
    {
      quote: 'For the first time in three years my whole family eats the same dinner. This app paid for itself in the first week.',
      name: 'Sofie D.',
      role: 'Mom of two, Antwerp',
    },
    {
      quote: 'I stopped fighting with my 6-year-old over food. Fussless helped me find meals that work for both of us.',
      name: 'Marc V.',
      role: 'Dad of one, Rotterdam',
    },
  ],

  faq: [
    {
      question: 'Is Fussless free?',
      answer: 'You can start free with a limited recipe set. A Premium plan unlocks unlimited meal planning and the full recipe library.',
    },
    {
      question: 'Does it work if my child has allergies?',
      answer: 'Yes. During setup you flag allergies and intolerances, and Fussless filters every suggestion accordingly.',
    },
    {
      question: 'What languages are supported?',
      answer: 'Fussless is available in English, Dutch, French, and Spanish. More languages are on the roadmap.',
    },
    {
      question: 'Do I need to create an account?',
      answer: 'You can browse recipes without an account. To save meal plans and preferences, a free account is required.',
    },
  ],

  finalCta: {
    headline: 'Ready for calmer family dinners?',
    body: 'Start with Fussless today. No credit card required.',
    button: { label: 'Start free', href: '/app' },
  },

  seo: {
    title: 'Fussless — Stop cooking two dinners for picky eaters',
    description: 'Fussless helps families with picky eaters plan meals everyone will actually eat. Adaptive recipes, weekly meal plans, and no more dinner battles.',
    ogImage: '/images/og-image.png',
    keywords: ['picky eaters', 'family meal planning', 'kids recipes', 'meal planner app'],
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
