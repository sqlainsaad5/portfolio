/** Relative proficiency for visualization — tune to match your experience. */
export const skillBars = [
  { name: "React / Next.js", value: 92, fill: "var(--chart-1)" },
  { name: "Node / Express", value: 88, fill: "var(--chart-2)" },
  { name: "MongoDB", value: 85, fill: "var(--chart-3)" },
  { name: "TypeScript / JS", value: 90, fill: "var(--chart-4)" },
  { name: "REST APIs / Auth", value: 86, fill: "var(--chart-5)" },
] as const

export const skillCategories = [
  {
    category: "MERN & APIs",
    skills: ["MongoDB", "Express", "React", "Node.js", "REST", "JWT", "GraphQL"],
  },
  {
    category: "Frontend",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Responsive UI", "Accessibility"],
  },
  {
    category: "Tools & Delivery",
    skills: ["Git", "GitHub", "Vite", "Webpack", "Figma", "Testing", "CI/CD basics"],
  },
  {
    category: "Practices",
    skills: ["Performance", "SEO", "Security basics", "Agile", "Code review", "Documentation"],
  },
] as const
