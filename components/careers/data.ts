/*
 * PLACEHOLDER LISTINGS — requested as dummy data to preview the careers page
 * layout. Replace with real openings (or empty this array to fall back to
 * the "nothing listed right now" state in app/careers/page.tsx).
 */

export type Job = {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: string;
  tags: string[];
};

export const jobs: Job[] = [
  {
    slug: "senior-fullstack-engineer",
    title: "Senior Full-Stack Engineer",
    team: "Engineering",
    location: "Remote",
    type: "Full-time",
    tags: ["React", "Node.js", "AWS"],
  },
  {
    slug: "ai-ml-engineer",
    title: "AI/ML Engineer",
    team: "Engineering",
    location: "Remote",
    type: "Full-time",
    tags: ["Python", "LangChain", "PyTorch"],
  },
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    team: "Engineering",
    location: "Noida (Hybrid)",
    type: "Full-time",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    team: "Engineering",
    location: "Remote",
    type: "Full-time",
    tags: ["AWS", "Docker", "CI/CD"],
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    team: "Design",
    location: "Noida (Hybrid)",
    type: "Full-time",
    tags: ["Figma", "Prototyping"],
  },
  {
    slug: "qa-engineer",
    title: "QA Engineer",
    team: "Engineering",
    location: "Remote",
    type: "Contract",
    tags: ["Automation", "Regression"],
  },
];

export function getJob(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}
