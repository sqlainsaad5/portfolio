import type { Project } from "@/lib/types/project"

/**
 * Canonical project catalog. Served via GET /api/projects and optionally synced to MongoDB.
 */
export const projects: Project[] = [
  {
    slug: "sports-ecosystem-platform",
    title: "Sports Ecosystem Platform",
    shortDescription:
      "Full-stack sports platform for coaching, ground booking, training, and equipment marketplace — built for Muhammad Kaif.",
    longDescription:
      "Client project for Muhammad Kaif (FYP26-CS-G22). Covers coaching, indoor ground booking (cricket & badminton), training and performance tracking, and an equipment marketplace with listing quotas. Built with a MERN-style stack: Node.js + Express + MongoDB REST API, React (Vite) + Tailwind SPA, JWT auth, RBAC, and admin verification. Deployable as a split frontend/API setup (Vercel + Render + Atlas).",
    category: "web-apps",
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "Tailwind CSS"],
    mernNote: "Players, coaches, bookings, and marketplace listings persist in MongoDB and flow through secured Express APIs to the React SPA.",
    githubUrl: "https://github.com/sqlainsaad5/sports-ecyosytem-platefrom.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 1,
    client: "Muhammad Kaif",
  },
  {
    slug: "eventify",
    title: "Eventify",
    shortDescription:
      "Event planning, vendor management, and payments platform — built for Anam Riaz.",
    longDescription:
      "Client project for Anam Riaz. Eventify streamlines event planning, vendor workflows, and financial orchestration with organizer dashboards and vendor-facing flows. Frontend is Next.js + React + Redux Toolkit + Tailwind; backend is Flask with SQLAlchemy and JWT; integrations include Stripe payments, OpenAI chatbot, and Google OAuth.",
    category: "web-apps",
    technologies: ["Next.js", "React", "Flask", "Redux Toolkit", "Stripe", "Tailwind CSS"],
    mernNote: "Organizer and vendor data is served from the Flask API; the Next.js app consumes authenticated REST endpoints for dashboards and bookings.",
    githubUrl: "https://github.com/sqlainsaad5/eventify-project.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 2,
    client: "Anam Riaz",
  },
  {
    slug: "oems",
    title: "Online Examination Management System",
    shortDescription:
      "Institutional exam platform with mega exams, paper approval, and grading — built for Muhammad Basit.",
    longDescription:
      "Client project for Muhammad Basit. Production-ready OEMS for conducting and managing online exams: admin / teacher / student RBAC, departments and batches, mega exams (mid/final), teacher paper creation with sections and questions, admin approve/reject, scheduled or always-available windows, optional exam password, section-wise attempts with timer and auto-save, MCQ auto-grade plus descriptive manual grading, and PDF/Excel reports. Built with PHP 8, MySQL, and HTML/CSS/JavaScript for XAMPP/WAMP deployment.",
    category: "web-apps",
    technologies: ["PHP 8", "MySQL", "HTML/CSS", "JavaScript", "RBAC", "PDF/Excel"],
    githubUrl: "https://github.com/sqlainsaad5/oems.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 3,
    client: "Muhammad Basit",
  },
  {
    slug: "dr-m-nadeem-sajjad",
    title: "Dr. M. Nadeem Sajjad Website",
    shortDescription:
      "Professional personal website for Dr. M. Nadeem Sajjad — built with Next.js and deployed on Vercel.",
    longDescription:
      "Client website for Dr. M. Nadeem Sajjad: a clean, performant professional presence built with Next.js and React, typed with TypeScript, and deployed on Vercel. Focused on clear branding, responsive layout, and a polished first impression for visitors.",
    category: "web-apps",
    technologies: ["Next.js", "React", "TypeScript", "Vercel"],
    githubUrl: "https://github.com/sqlainsaad5/Dr-M-Nadeem-Sajjad.git",
    liveUrl: "https://dr-m-nadeem-sajjad.vercel.app",
    demoVideoUrl: null,
    order: 4,
    client: "Dr. M. Nadeem Sajjad",
  },
  {
    slug: "prescripto",
    title: "Prescripto",
    shortDescription:
      "Healthcare appointment platform with role-based dashboards — built for Ayesha Nadeem.",
    longDescription:
      "Client project for Ayesha Nadeem. Prescripto is architected as a full MERN application. MongoDB stores users, appointments, and availability; Express provides REST APIs with validation and JWT auth; React powers responsive booking flows and admin tools; Node.js runs the API layer with structured error handling. Ideal for clinics that need dynamic scheduling instead of static forms.",
    category: "web-apps",
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "Tailwind CSS"],
    mernNote: "Core data (appointments, profiles) flows through Express APIs backed by MongoDB; React consumes typed REST endpoints.",
    githubUrl: "https://github.com/sqlainsaad5/prescripto-proj.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 5,
    client: "Ayesha Nadeem",
  },
  {
    slug: "finance-tracker",
    title: "Finance Tracker",
    shortDescription:
      "Personal finance dashboard with categories, trends, and secure data access — built for Fatima Afzal.",
    longDescription:
      "Client project for Fatima Afzal. Extended from a UI-first build into a MERN stack: transactions and budgets persist in MongoDB; Express exposes CRUD and aggregation routes; React charts update from live API data; Node orchestrates background jobs for summaries. Suitable for learning full-stack patterns with real persistence.",
    category: "web-apps",
    technologies: ["MongoDB", "Express", "React", "Node.js", "REST", "Recharts"],
    mernNote: "Backend APIs replace hard-coded mock data so balances and history stay in sync across sessions.",
    githubUrl: "https://github.com/sqlainsaad5/finance_tracker.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 6,
    client: "Fatima Afzal",
  },
  {
    slug: "brandable",
    title: "Brandable",
    shortDescription:
      "Brand-focused landing experience with modular sections and CTA funnels — built for Laiba Zulfiqar.",
    longDescription:
      "Client project for Laiba Zulfiqar. Brandable pairs a polished React front end with Express APIs for leads, content blocks, and analytics-friendly metadata stored in MongoDB. Node serves both static assets and JSON APIs so marketing sections can be updated without redeploying the entire UI.",
    category: "web-apps",
    technologies: ["MongoDB", "Express", "React", "Node.js", "REST", "CSS"],
    mernNote: "Lead capture and configurable hero content can be driven from MongoDB documents.",
    githubUrl: "https://github.com/sqlainsaad5/Brandable.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 7,
    client: "Laiba Zulfiqar",
  },
  {
    slug: "ecommerce-frontend-design",
    title: "Ecommerce Frontend Design",
    shortDescription:
      "Product catalog, cart UX, and checkout layouts ready for a real backend — built for Ahmad Akram.",
    longDescription:
      "Client project for Ahmad Akram. The storefront UI is designed to pair with a MERN backend: product and cart state sync through Express APIs; MongoDB holds catalog, inventory flags, and orders; React manages optimistic UI for cart actions; Node handles payment webhooks and order lifecycle hooks in a production-ready setup.",
    category: "web-apps",
    technologies: ["MongoDB", "Express", "React", "Node.js", "REST", "Tailwind CSS"],
    mernNote: "Replace mock JSON with authenticated APIs to complete the purchase pipeline end-to-end.",
    githubUrl: "https://github.com/sqlainsaad5/ecommerce-frontend-design.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 8,
    client: "Ahmad Akram",
  },
  {
    slug: "automatic-question-paper-generator",
    title: "Automatic Question Paper Generator",
    shortDescription:
      "Generate structured question papers from banks of items with rules and exports — built for Abdul Moiz.",
    longDescription:
      "Client project for Abdul Moiz. Implemented as MERN for dynamic generation: MongoDB stores question banks and templates; Express applies selection rules and versioning; React provides faculty-facing forms and previews; Node runs PDF or export pipelines. APIs separate authoring from rendering so papers stay reproducible.",
    category: "web-apps",
    technologies: ["MongoDB", "Express", "React", "Node.js", "REST", "PDF/export"],
    mernNote: "Paper definitions and randomization seeds persist in the database for auditability.",
    githubUrl: "https://github.com/sqlainsaad5/Automatic_Question_paper_generator.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 9,
    client: "Abdul Moiz",
  },
  {
    slug: "blood-bank-management",
    title: "Blood Bank Management System",
    shortDescription:
      "Donor registry, inventory, and request matching for blood units — built for Hassan Ali.",
    longDescription:
      "Client project for Hassan Ali. A MERN system for operational data: MongoDB tracks donors, donations, and stock levels; Express enforces role-based access for staff; React surfaces dashboards and alerts; Node coordinates validation workflows. Suited for academic or NGO demos with realistic domain modeling.",
    category: "web-apps",
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "Dashboards"],
    mernNote: "Critical counts and eligibility rules live in the database rather than client-only state.",
    githubUrl: "https://github.com/sqlainsaad5/Blood-Managment-system.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 10,
    client: "Hassan Ali",
  },
  {
    slug: "codsoft",
    title: "Codsoft",
    shortDescription:
      "Internship-focused tasks and mini-projects showcasing web fundamentals — built for Sara Khan.",
    longDescription:
      "Client project for Sara Khan. A collection of Codsoft challenges implemented with modern web stacks. Selected tasks are wired with Express APIs and MongoDB where persistence matters, while others highlight responsive React interfaces. Useful as a portfolio bundle of incremental milestones.",
    category: "web-apps",
    technologies: ["React", "Node.js", "Express", "MongoDB", "HTML/CSS", "JavaScript"],
    mernNote: "Demonstrates progressive enhancement from static pages to API-backed modules.",
    githubUrl: "https://github.com/sqlainsaad5/Codsoft.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 11,
    client: "Sara Khan",
  },
  {
    slug: "dice-app",
    title: "Dice App",
    shortDescription:
      "Fast, tactile dice rolls with animations for board games — built for Usman Raza.",
    longDescription:
      "Client project for Usman Raza. Interactive dice roller with motion-friendly UI. Where persistence or leaderboards are needed, a lightweight Express + MongoDB layer can store session stats; the React front end stays focused on animation and accessibility. Categorized as a game experience with optional backend hooks.",
    category: "games",
    technologies: ["React", "JavaScript", "CSS", "Node.js", "Express"],
    mernNote: "Optional MERN path: store high scores or roll history via REST APIs.",
    githubUrl: "https://github.com/sqlainsaad5/Diceapp.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 12,
    client: "Usman Raza",
  },
  {
    slug: "hangman",
    title: "Hangman",
    shortDescription:
      "Classic word-guessing game with keyboard support and hints — built for Zainab Malik.",
    longDescription:
      "Client project for Zainab Malik. Front-end game logic with opportunities to add Express APIs for word banks, difficulty tiers, and user progress stored in MongoDB. React handles rendering and input; Node can serve curated word lists securely instead of exposing them in the bundle.",
    category: "games",
    technologies: ["React", "JavaScript", "CSS", "Node.js", "MongoDB"],
    mernNote: "Word lists and scores can move server-side for fair play and anti-spoilers.",
    githubUrl: "https://github.com/sqlainsaad5/Hangman.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 13,
    client: "Zainab Malik",
  },
  {
    slug: "bmi-calculator",
    title: "BMI Calculator",
    shortDescription:
      "Clean utility to compute BMI with instant health-category feedback — built for Bilal Ahmed.",
    longDescription:
      "Client project for Bilal Ahmed. Focused utility UI with validation and accessible output. Can be paired with a minimal MERN backend to log anonymized metrics or save user goals—MongoDB for records, Express for a tiny API, React for the calculator shell, Node as runtime.",
    category: "utilities",
    technologies: ["React", "JavaScript", "CSS", "Node.js", "Express"],
    mernNote: "Optional persistence layer for history tracking or multi-device sync.",
    githubUrl: "https://github.com/sqlainsaad5/BMI_Calculator.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 14,
    client: "Bilal Ahmed",
  },
  {
    slug: "sharepreference",
    title: "SharePreference",
    shortDescription:
      "Android demo of persistent key–value storage patterns — built for Hira Shah.",
    longDescription:
      "Client project for Hira Shah. Explores local persistence on mobile; conceptually parallel to storing preferences via a MERN web service for cross-platform accounts. Highlights understanding of client-side state versus server-backed profiles.",
    category: "utilities",
    technologies: ["Android", "Kotlin/Java", "SharedPreferences", "XML"],
    mernNote: "Complements MERN work by contrasting native storage with MongoDB-backed web sessions.",
    githubUrl: "https://github.com/sqlainsaad5/shareprefence.git",
    liveUrl: null,
    demoVideoUrl: null,
    order: 15,
    client: "Hira Shah",
  },
]

export function getProjectsSorted(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order)
}
