export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    id: "stack",
    question: "Do you only work with the MERN stack?",
    answer:
      "MERN is my primary stack — MongoDB, Express, React, and Node.js — but I also ship with Next.js, TypeScript, Tailwind, and PHP/MySQL when the project needs it. I pick tools that fit the product, not the other way around.",
  },
  {
    id: "timeline",
    question: "How long does a typical project take?",
    answer:
      "A focused landing or brochure site can take 1–2 weeks. Full MERN apps (auth, dashboards, APIs) usually take 3–8 weeks depending on scope, integrations, and revision rounds. I share a clear milestone plan before kickoff.",
  },
  {
    id: "process",
    question: "What does working with you look like?",
    answer:
      "We start with requirements and success criteria, then wireframes or flows, then iterative builds with demos. You get Git access, deploy previews when useful, and documentation so handoff or maintenance stays easy.",
  },
  {
    id: "maintenance",
    question: "Do you offer maintenance after launch?",
    answer:
      "Yes. I can stay on for bugfixes, small features, and hosting help. We agree on a retainer or hourly support so production stays stable after go-live.",
  },
  {
    id: "freelance",
    question: "Are you available for freelance or full-time?",
    answer:
      "I'm open to freelance commissions and strong full-time roles. Message me on WhatsApp or email with context — I usually reply within 24 hours.",
  },
]
