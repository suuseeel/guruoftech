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
  { id: "01", name: "Manoj Kumar Panday", role: "Director", dept: "leadership", does: "Sets the direction of the company and stays close to every client relationship.", skills: ["Strategy", "Client relations", "Leadership"], photo: "/team/manoj.png" },
  { id: "02", name: "Sumit Shukla", role: "Business Development Manager", dept: "growth", does: "Finds new clients and shapes partnerships that fit how we work.", skills: ["Business development", "Partnerships", "Proposals"], photo: "/team/sumit.png" },
  { id: "03", name: "Sushil Kumar Gupta", role: "Team Leader", dept: "management", does: "Keeps the team's day-to-day work on track from kickoff to delivery.", skills: ["Team leadership", "Planning", "Delivery"], photo: "/team/sushil.png" },
  { id: "04", name: "Anuj Srivastava", role: "Full Stack Developer", dept: "engineering", does: "Owns features end to end, from the database to the interface.", skills: ["React", "Node.js", "MySQL"], photo: "/team/anuj.png" },
  { id: "05", name: "Ankit Rajbhar", role: "Backend Developer", dept: "engineering", does: "Builds the APIs and services that power the product behind the scenes.", skills: ["Node.js", "APIs", "Databases"], photo: "/team/ankit.png" },
  { id: "06", name: "Karan Singh", role: "Front-end Developer", dept: "engineering", does: "Builds fast, accessible interfaces that behave on every screen size.", skills: ["React", "JavaScript", "CSS"], photo: "/team/karan.png" },
  { id: "07", name: "Manish Maurya", role: "Laravel Developer", dept: "engineering", does: "Builds and maintains PHP/Laravel applications for client projects.", skills: ["Laravel", "PHP", "MySQL"], photo: "/team/manish.png" },
  { id: "08", name: "Nipun Raj Nayak", role: "Developer", dept: "engineering", does: "Builds and ships features across the stack as projects need.", skills: ["Development", "APIs", "Debugging"], photo: "/team/nipun.png" },
  { id: "09", name: "Rohan Kedar", role: "Software Developer", dept: "engineering", does: "Writes and maintains software across ongoing client projects.", skills: ["Software development", "Debugging", "Testing"], photo: "/team/rohan.png" },
  { id: "10", name: "Mukesh Kumar Yadav", role: "UI/UX Designer", dept: "design", does: "Designs the flows and screens people actually enjoy using.", skills: ["Figma", "Prototyping", "Research"], photo: "/team/mukesh-yadav.png" },
  { id: "11", name: "Piyush Agarwal", role: "Digital Marketing Executive", dept: "growth", does: "Runs campaigns and day-to-day marketing activity across channels.", skills: ["Campaigns", "Social media", "Analytics"], photo: "/team/piyush.png" },
  { id: "12", name: "Mukesh Lakra", role: "Digital Marketing Manager", dept: "growth", does: "Plans and oversees marketing strategy across channels and campaigns.", skills: ["Strategy", "Campaigns", "Analytics"], photo: "/team/mukesh.png" },
  { id: "13", name: "Sakshi Malik", role: "Digital Marketing Executive", dept: "growth", does: "Runs day-to-day marketing activity across channels and campaigns.", skills: ["Campaigns", "Content", "Social media"], photo: "/team/shakshi.png" },
  { id: "14", name: "Govind Sehwag", role: "SEO Executive", dept: "growth", does: "Improves search visibility and organic reach for client and company sites.", skills: ["SEO", "Keyword research", "Analytics"], photo: "/team/govind.png" },
  { id: "15", name: "Vishal Kumar", role: "SEO Executive", dept: "growth", does: "Improves search visibility and organic reach for client and company sites.", skills: ["SEO", "On-page", "Link building"], photo: "/team/vishal.png" },
  { id: "16", name: "Sanni Pandey", role: "Email Marketing", dept: "growth", does: "Plans and runs email campaigns that keep clients and leads engaged.", skills: ["Email campaigns", "Automation", "Copywriting"], photo: "/team/sunny.png" },
];
