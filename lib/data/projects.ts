import type { Project } from "@/lib/types/project"

/**
 * Canonical project catalog. Served via GET /api/projects and optionally synced to MongoDB.
 */
export const projects: Project[] = [
  {
    slug: "prescripto",
    title: "Prescripto",
    shortDescription:
      "Healthcare appointment platform with role-based dashboards for patients, doctors, and admins.",
    longDescription:
      "Prescripto is architected as a full MERN application. MongoDB stores users, appointments, and availability; Express provides REST APIs with validation and JWT auth; React powers responsive booking flows and admin tools; Node.js runs the API layer with structured error handling. Ideal for clinics that need dynamic scheduling instead of static forms.",
    category: "web-apps",
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "Tailwind CSS"],
    mernNote: "Core data (appointments, profiles) flows through Express APIs backed by MongoDB; React consumes typed REST endpoints.",
    githubUrl: "https://github.com/sqlainsaad5/prescripto-proj.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 1,
  },
  {
    slug: "finance-tracker",
    title: "Finance Tracker",
    shortDescription: "Personal finance dashboard with categories, trends, and secure data access.",
    longDescription:
      "Extended from a UI-first build into a MERN stack: transactions and budgets persist in MongoDB; Express exposes CRUD and aggregation routes; React charts update from live API data; Node orchestrates background jobs for summaries. Suitable for learning full-stack patterns with real persistence.",
    category: "web-apps",
    technologies: ["MongoDB", "Express", "React", "Node.js", "REST", "Recharts"],
    mernNote: "Backend APIs replace hard-coded mock data so balances and history stay in sync across sessions.",
    githubUrl: "https://github.com/sqlainsaad5/finance_tracker.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 2,
  },
  {
    slug: "eventify",
    title: "Eventify",
    shortDescription: "Event discovery and RSVP flows with organizer tools and attendee views.",
    longDescription:
      "Eventify demonstrates MERN integration for event CRUD, attendee lists, and notifications. MongoDB models events and users; Express secures organizer routes; React delivers card-based discovery and detail pages; Node hosts the API. Designed for clear separation between public browsing and authenticated management.",
    category: "web-apps",
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "Responsive UI"],
    mernNote: "Dynamic attendee counts and event state are sourced from the database via API responses.",
    githubUrl: "https://github.com/sqlainsaad5/eventify-project.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 3,
  },
  {
    slug: "brandable",
    title: "Brandable",
    shortDescription: "Brand-focused landing experience with modular sections and CTA funnels.",
    longDescription:
      "Brandable pairs a polished React front end with Express APIs for leads, content blocks, and analytics-friendly metadata stored in MongoDB. Node serves both static assets and JSON APIs so marketing sections can be updated without redeploying the entire UI.",
    category: "web-apps",
    technologies: ["MongoDB", "Express", "React", "Node.js", "REST", "CSS"],
    mernNote: "Lead capture and configurable hero content can be driven from MongoDB documents.",
    githubUrl: "https://github.com/sqlainsaad5/Brandable.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 4,
  },
  {
    slug: "ecommerce-frontend-design",
    title: "Ecommerce Frontend Design",
    shortDescription: "Product catalog, cart UX, and checkout-oriented layouts ready to plug into a real backend.",
    longDescription:
      "The storefront UI is designed to pair with a MERN backend: product and cart state sync through Express APIs; MongoDB holds catalog, inventory flags, and orders; React manages optimistic UI for cart actions; Node handles payment webhooks and order lifecycle hooks in a production-ready setup.",
    category: "web-apps",
    technologies: ["MongoDB", "Express", "React", "Node.js", "REST", "Tailwind CSS"],
    mernNote: "Replace mock JSON with authenticated APIs to complete the purchase pipeline end-to-end.",
    githubUrl: "https://github.com/sqlainsaad5/ecommerce-frontend-design.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 5,
  },
  {
    slug: "automatic-question-paper-generator",
    title: "Automatic Question Paper Generator",
    shortDescription: "Generate structured question papers from banks of items with rules and exports.",
    longDescription:
      "Implemented as MERN for dynamic generation: MongoDB stores question banks and templates; Express applies selection rules and versioning; React provides faculty-facing forms and previews; Node runs PDF or export pipelines. APIs separate authoring from rendering so papers stay reproducible.",
    category: "web-apps",
    technologies: ["MongoDB", "Express", "React", "Node.js", "REST", "PDF/export"],
    mernNote: "Paper definitions and randomization seeds persist in the database for auditability.",
    githubUrl: "https://github.com/sqlainsaad5/Automatic_Question_paper_generator.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 6,
  },
  {
    slug: "blood-bank-management",
    title: "Blood Bank Management System",
    shortDescription: "Donor registry, inventory, and request matching for blood units.",
    longDescription:
      "A MERN system for operational data: MongoDB tracks donors, donations, and stock levels; Express enforces role-based access for staff; React surfaces dashboards and alerts; Node coordinates validation workflows. Suited for academic or NGO demos with realistic domain modeling.",
    category: "web-apps",
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "Dashboards"],
    mernNote: "Critical counts and eligibility rules live in the database rather than client-only state.",
    githubUrl: "https://github.com/sqlainsaad5/Blood-Managment-system.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 7,
  },
  {
    slug: "codsoft",
    title: "Codsoft",
    shortDescription: "Internship-focused tasks and mini-projects showcasing web fundamentals and UI craft.",
    longDescription:
      "A collection of Codsoft challenges implemented with modern web stacks. Selected tasks are wired with Express APIs and MongoDB where persistence matters, while others highlight responsive React interfaces. Useful as a portfolio bundle of incremental milestones.",
    category: "web-apps",
    technologies: ["React", "Node.js", "Express", "MongoDB", "HTML/CSS", "JavaScript"],
    mernNote: "Demonstrates progressive enhancement from static pages to API-backed modules.",
    githubUrl: "https://github.com/sqlainsaad5/Codsoft.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 8,
  },
  {
    slug: "dice-app",
    title: "Dice App",
    shortDescription: "Fast, tactile dice rolls with animations—ideal for board games and quick decisions.",
    longDescription:
      "Interactive dice roller with motion-friendly UI. Where persistence or leaderboards are needed, a lightweight Express + MongoDB layer can store session stats; the React front end stays focused on animation and accessibility. Categorized as a game experience with optional backend hooks.",
    category: "games",
    technologies: ["React", "JavaScript", "CSS", "Node.js", "Express"],
    mernNote: "Optional MERN path: store high scores or roll history via REST APIs.",
    githubUrl: "https://github.com/sqlainsaad5/Diceapp.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 9,
  },
  {
    slug: "hangman",
    title: "Hangman",
    shortDescription: "Classic word-guessing game with keyboard support and progressive hints.",
    longDescription:
      "Front-end game logic with opportunities to add Express APIs for word banks, difficulty tiers, and user progress stored in MongoDB. React handles rendering and input; Node can serve curated word lists securely instead of exposing them in the bundle.",
    category: "games",
    technologies: ["React", "JavaScript", "CSS", "Node.js", "MongoDB"],
    mernNote: "Word lists and scores can move server-side for fair play and anti-spoilers.",
    githubUrl: "https://github.com/sqlainsaad5/Hangman.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 10,
  },
  {
    slug: "bmi-calculator",
    title: "BMI Calculator",
    shortDescription: "Clean utility to compute BMI with instant feedback and health-category labels.",
    longDescription:
      "Focused utility UI with validation and accessible output. Can be paired with a minimal MERN backend to log anonymized metrics or save user goals—MongoDB for records, Express for a tiny API, React for the calculator shell, Node as runtime.",
    category: "utilities",
    technologies: ["React", "JavaScript", "CSS", "Node.js", "Express"],
    mernNote: "Optional persistence layer for history tracking or multi-device sync.",
    githubUrl: "https://github.com/sqlainsaad5/BMI_Calculator.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 11,
  },
  {
    slug: "sharepreference",
    title: "SharePreference",
    shortDescription: "Android-focused demo of persistent key–value storage patterns (SharedPreferences).",
    longDescription:
      "Explores local persistence on mobile; conceptually parallel to storing preferences via a MERN web service for cross-platform accounts. Highlights understanding of client-side state versus server-backed profiles.",
    category: "utilities",
    technologies: ["Android", "Kotlin/Java", "SharedPreferences", "XML"],
    mernNote: "Complements MERN work by contrasting native storage with MongoDB-backed web sessions.",
    githubUrl: "https://github.com/sqlainsaad5/shareprefence.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 12,
  },
]

export function getProjectsSorted(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order)
}
