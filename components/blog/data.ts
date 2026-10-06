import { BrainCircuit, Layers, Rocket, Users, type LucideIcon } from "lucide-react";

export type BlogBlock = { type: "p"; text: string } | { type: "h2"; text: string } | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  icon: LucideIcon;
  date: string;
  readTime: string;
  body: BlogBlock[];
};

export const posts: BlogPost[] = [
  {
    slug: "where-ai-earns-its-keep",
    title: "Where AI actually earns its keep in a software project",
    excerpt:
      "Most products don't need an AI feature bolted onto the homepage. They need two or three specific steps done automatically. Here's how we tell the difference.",
    category: "AI & Engineering",
    icon: BrainCircuit,
    date: "2026-01-12",
    readTime: "6 min read",
    body: [
      {
        type: "p",
        text: "Every few months a client comes to us wanting \"AI in the product\" without a specific job for it to do. That's usually the wrong starting point. The products where AI actually sticks — where it keeps getting used six months after launch, not just at the demo — all start from the same place: a specific, repeated, slightly annoying step in someone's workflow.",
      },
      {
        type: "h2",
        text: "Start from the task, not the technology",
      },
      {
        type: "p",
        text: "Before we write a line of model-calling code, we ask what a person is doing today that this would replace. Reading fifty support tickets and tagging them by urgency. Reading a contract and pulling out the renewal date. Answering the same five questions about a product over and over. If you can describe the task in one sentence and point to the person currently doing it by hand, you have a real AI feature. If the answer is \"make the app smarter,\" you don't yet.",
      },
      {
        type: "p",
        text: "This matters because it changes how you build. A task-shaped feature has a clear success measure — did the ticket get the right tag, did the renewal date come out correct — which means you can actually test it, catch when it's wrong, and improve it. A vague \"smarter app\" feature has no such measure, so nobody notices when it's quietly getting things wrong.",
      },
      {
        type: "h2",
        text: "The boring parts matter more than the model",
      },
      {
        type: "p",
        text: "The choice of model is rarely the hard part anymore. The hard part is everything around it: what happens when the model is wrong, how a person reviews or overrides its output, what you log so you can debug a bad answer three weeks later, and what it costs to run at your actual volume, not a demo's volume. We spend more engineering time on the fallback path — what the user sees when the AI step fails or isn't confident — than on prompt design.",
      },
      {
        type: "list",
        items: [
          "A human-reviewable output, not a black box the team has to trust blindly",
          "A clear fallback when the model is wrong or unavailable",
          "Logging good enough to debug a specific bad answer after the fact",
          "A cost model that holds up at real usage, not demo usage",
        ],
      },
      {
        type: "h2",
        text: "What we tell clients who aren't sure yet",
      },
      {
        type: "p",
        text: "If you're not sure whether a feature is a good AI candidate, write down the task in one sentence, find the person doing it today, and ask how often they get it wrong. If they get it wrong rarely, automating it well is hard and the payoff is small. If they get it wrong often because it's repetitive and they're tired by ticket forty, that's exactly the kind of task where a focused AI step — reviewed by a human, not replacing one — earns its keep fast.",
      },
    ],
  },
  {
    slug: "stack-we-dont-chase-every-framework",
    title: "Our stack, and why we don't chase every framework",
    excerpt:
      "New frameworks show up every month. We've learned to be slow and deliberate about adopting them — here's the filter we actually use.",
    category: "Engineering",
    icon: Layers,
    date: "2025-11-03",
    readTime: "5 min read",
    body: [
      {
        type: "p",
        text: "We maintain software for clients for years, not weeks. That one fact shapes almost every technology decision we make. A framework that's exciting to try on a weekend project is a different bet entirely from a framework we're willing to still be debugging in production in 2029.",
      },
      {
        type: "h2",
        text: "The filter: boring where it counts, modern where it matters",
      },
      {
        type: "p",
        text: "For the parts of a system that have to keep working quietly for years — the database layer, authentication, payment handling, background jobs — we default to tools with a long track record: PostgreSQL over whatever's newest, established frameworks over ones still finding their API. For the parts that directly shape how a product feels to use — the frontend, the AI integration layer — we're much more willing to use something current, because the cost of being wrong there is lower and the upside of being right is higher.",
      },
      {
        type: "p",
        text: "That's why you'll see React and Next.js across most of our frontend work, alongside PHP/Laravel or .NET for backends that have been running for years, and Python for anything touching machine learning. It's not indecision — it's matching the tool's maturity to the part of the system that has to be most boring.",
      },
      {
        type: "h2",
        text: "What makes us actually adopt something new",
      },
      {
        type: "list",
        items: [
          "It solves a problem we've hit on at least two real projects, not a hypothetical one",
          "We can explain what happens when it breaks, not just when it works",
          "Hiring and onboarding a new engineer onto it won't take a month",
          "There's a credible migration path off it if the project outlives the framework",
        ],
      },
      {
        type: "p",
        text: "That last point is the one people skip. Every framework eventually stops being the exciting new thing. The question isn't whether that happens — it's whether moving off it later is a two-week project or a two-year one. We'd rather ship on something slightly less fashionable that we can migrate cleanly than something trendy that locks a client in.",
      },
    ],
  },
  {
    slug: "what-a-good-first-project-looks-like",
    title: "What a good first project with an outsourced team looks like",
    excerpt:
      "The first engagement sets the tone for everything after it. Here's what we've learned makes a first project go well, from both sides of the table.",
    category: "Working With Us",
    icon: Users,
    date: "2025-09-18",
    readTime: "5 min read",
    body: [
      {
        type: "p",
        text: "A lot of advice about hiring an outsourced development team focuses on vetting the vendor. Less gets said about what makes the first project itself go well, which is a shame, because we've seen the same few patterns separate the engagements that build trust fast from the ones that stall.",
      },
      {
        type: "h2",
        text: "Scope something that ships in weeks, not quarters",
      },
      {
        type: "p",
        text: "The best first projects are small enough to see results from inside a month, but real enough that nobody's tempted to call it a trial. A focused module, a specific integration, a defined MVP feature — something with an obvious finish line. Big first engagements that only show value six months in don't give either side a chance to calibrate early, and small misunderstandings about working style compound before anyone notices.",
      },
      {
        type: "h2",
        text: "Decide early who the one delivery contact is",
      },
      {
        type: "p",
        text: "Nothing slows a first project down like requirements coming from three different people on the client side who haven't agreed with each other. We ask for a single point of contact on day one, even if other stakeholders are involved — someone who can make the call when two reasonable opinions disagree, and who sees every update so nothing gets repeated or lost.",
      },
      {
        type: "h2",
        text: "Agree on what \"done\" looks like before you start",
      },
      {
        type: "list",
        items: [
          "A written scope both sides can point back to, not just a kickoff call",
          "A demo cadence — weekly is usually right — so nobody's surprised at the end",
          "A clear owner for test data, credentials, and access, decided before day one",
          "An explicit answer to \"what happens if we need to change scope mid-project\"",
        ],
      },
      {
        type: "p",
        text: "None of this is complicated, but it's the kind of groundwork that's easy to skip when everyone's excited to start building. The projects where we skipped it are the ones that took longer than they needed to. The ones where we didn't are usually the start of a longer relationship.",
      },
    ],
  },
  {
    slug: "shipping-fast-without-cutting-corners",
    title: "Shipping fast without cutting corners: our delivery process",
    excerpt:
      "Speed and quality get treated like a tradeoff. In practice, most of the time lost on software projects isn't spent building — it's spent waiting. Here's how we cut the waiting instead of the quality.",
    category: "Process",
    icon: Rocket,
    date: "2025-08-02",
    readTime: "4 min read",
    body: [
      {
        type: "p",
        text: "\"Fast\" and \"careful\" get treated as opposites in software, but most of the time we've clawed back on client projects didn't come from cutting testing or skipping code review. It came from cutting the waiting — the days a ticket sits because nobody's sure who owns it, the week a feature stalls because feedback didn't come until the sprint was already over.",
      },
      {
        type: "h2",
        text: "A scoped plan before a line of code",
      },
      {
        type: "p",
        text: "Every engagement starts with a plan specific enough that both sides can point to it later: what's being built, in what order, and what counts as finished for each piece. Vague scope is the single biggest source of rework we see — not because anyone's careless, but because two reasonable people can read the same one-line requirement differently.",
      },
      {
        type: "h2",
        text: "Short cycles with a real demo at the end of each one",
      },
      {
        type: "p",
        text: "We work in short cycles and show working software at the end of each one — not a slide, the actual thing running. That's what catches a misunderstood requirement after three days instead of after three weeks. It's also what keeps a client's trust building steadily instead of all landing (or not) at one big reveal near the deadline.",
      },
      {
        type: "h2",
        text: "Testing before release, support after it",
      },
      {
        type: "list",
        items: [
          "Testing happens inside each cycle, not saved up for a scramble at the end",
          "A release is reviewed by someone who didn't write the code",
          "Support after launch is staffed by people who already know the codebase",
          "Nothing ships without someone being able to say exactly what changed and why",
        ],
      },
      {
        type: "p",
        text: "None of this is exotic. It's the same four-step rhythm — plan, build in short cycles, test as you go, support after launch — on every project, because consistency is what lets a team actually get faster over time instead of just feeling busier.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
