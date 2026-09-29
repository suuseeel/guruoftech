/*
 * TEAM DATA — edit this file only.
 *
 *  name   : the person's name
 *  role   : job title shown on the badge
 *  dept   : "leadership" | "management" | "engineering" | "design" | "growth"
 *  does   : one line on what they do
 *  skills : up to 3 expertise chips
 *  photo  : put the image in /public/team/ and write "/team/file-name.jpg"
 *           (leave it undefined to show a placeholder badge)
 */

export type Dept = "leadership" | "management" | "engineering" | "design" | "growth";

export type Person = {
  id: string;
  name: string;
  role: string;
  dept: Dept;
  does: string;
  skills: string[];
  photo?: string;
};

export const depts: { id: Dept; label: string; color: string; blurb: string }[] = [
  { id: "leadership", label: "Leadership", color: "#f59e0b", blurb: "Sets the direction and stays close to every client." },
  { id: "management", label: "Management", color: "#8b5cf6", blurb: "Plans the work, keeps it on track and looks after the people doing it." },
  { id: "engineering", label: "Engineering", color: "#4f7dff", blurb: "Frontend, backend, mobile, cloud and QA — the people who build and ship." },
  { id: "design", label: "Design", color: "#ec4899", blurb: "Interfaces and brand visuals people enjoy." },
  { id: "growth", label: "Growth", color: "#10b981", blurb: "Finds new clients and grows our reach." },
];

export const team: Person[] = [
  { id: "01", name: "Team Member 01", role: "CEO", dept: "leadership", does: "Sets the direction of the company and stays close to every client relationship.", skills: ["Strategy", "Client relations", "Growth"], photo: undefined },
  { id: "02", name: "Team Member 02", role: "Business Manager", dept: "management", does: "Turns client requirements into proposals, plans and long-term partnerships.", skills: ["Proposals", "Planning", "Accounts"] },
  { id: "03", name: "Team Member 03", role: "Project Manager", dept: "management", does: "Keeps scope, timelines and communication clear from kickoff to launch.", skills: ["Delivery", "Agile", "Reporting"] },
  { id: "04", name: "Team Member 04", role: "HR Manager", dept: "management", does: "Looks after hiring, onboarding and the everyday wellbeing of the team.", skills: ["Recruitment", "Culture", "Onboarding"] },
  { id: "05", name: "Team Member 05", role: "Frontend Developer", dept: "engineering", does: "Builds fast, accessible interfaces that behave on every screen size.", skills: ["React", "Next.js", "Tailwind"] },
  { id: "06", name: "Team Member 06", role: "Frontend Developer", dept: "engineering", does: "Turns designs into clean, reusable components.", skills: ["Angular", "Vue.js", "HTML/CSS"] },
  { id: "07", name: "Team Member 07", role: "Full Stack Developer", dept: "engineering", does: "Owns features end to end, from the database to the interface.", skills: ["MERN", "Node.js", "APIs"] },
  { id: "08", name: "Team Member 08", role: "Full Stack Developer", dept: "engineering", does: "Builds and connects web applications across the whole stack.", skills: ["Laravel", "React", "MySQL"] },
  { id: "09", name: "Team Member 09", role: "Backend Developer", dept: "engineering", does: "Designs the data model, APIs and integrations behind the product.", skills: ["PHP", "Laravel", "APIs"] },
  { id: "10", name: "Team Member 10", role: "Backend Developer", dept: "engineering", does: "Builds secure, scalable services and background jobs.", skills: ["Python", "Django", "PostgreSQL"] },
  { id: "11", name: "Team Member 11", role: "Mobile App Developer", dept: "engineering", does: "Ships native and cross-platform apps to both app stores.", skills: ["Flutter", "React Native", "Kotlin"] },
  { id: "12", name: "Team Member 12", role: "DevOps Engineer", dept: "engineering", does: "Runs the pipelines and cloud infrastructure that keep releases smooth.", skills: ["AWS", "Docker", "CI/CD"] },
  { id: "13", name: "Team Member 13", role: "QA Engineer", dept: "engineering", does: "Tests every release so problems are caught before users see them.", skills: ["Automation", "Regression", "Security"] },
  { id: "14", name: "Team Member 14", role: "WordPress Developer", dept: "engineering", does: "Builds and maintains custom CMS-driven websites.", skills: ["WordPress", "Themes", "Plugins"] },
  { id: "15", name: "Team Member 15", role: "UI/UX Designer", dept: "design", does: "Designs the flows and screens people actually enjoy using.", skills: ["Figma", "Prototyping", "Research"] },
  { id: "16", name: "Team Member 16", role: "Graphic Designer", dept: "design", does: "Creates the brand visuals, illustrations and marketing assets.", skills: ["Branding", "Illustration", "Social"] },
  { id: "17", name: "Team Member 17", role: "Business Development Executive", dept: "growth", does: "Talks to new clients and matches their ideas with the right team.", skills: ["Lead generation", "Discovery", "Follow-up"] },
  { id: "18", name: "Team Member 18", role: "Digital Marketing Executive", dept: "growth", does: "Grows the company's reach through search, content and campaigns.", skills: ["SEO", "Content", "Analytics"] },
];
