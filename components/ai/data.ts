import {
  AudioLines,
  Blocks,
  Bot,
  BotMessageSquare,
  Brain,
  BrainCircuit,
  Building2,
  Code2,
  Combine,
  Compass,
  Container,
  Cpu,
  Database,
  Eye,
  FileSearch,
  FlaskConical,
  Gauge,
  Gavel,
  Handshake,
  Languages,
  Layers,
  Lightbulb,
  LineChart,
  MessageSquare,
  MessagesSquare,
  Mic,
  Network,
  Orbit,
  Plug,
  Puzzle,
  Rocket,
  ScanEye,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  WandSparkles,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type AiItem = {
  id: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  about: string;
  delivers: string[];
  useCases: string[];
  tags: string[];
};

export type AiGroup = {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  blurb: string;
  items: AiItem[];
};

export const aiGroups: AiGroup[] = [
  {
    id: "build",
    title: "Build & Integrate",
    icon: Code2,
    color: "#4f7dff",
    blurb:
      "Putting AI inside the software you already run or are about to launch — designed in from the start, not bolted on.",
    items: [
      {
        id: "ai-software-development",
        title: "AI Software Development",
        icon: Code2,
        summary: "Complete applications where AI is a core part of how the product works.",
        about:
          "We design and build web, mobile and back-office software in which AI features — search, recommendations, classification, generation — are part of the architecture rather than an add-on. The AI layer is treated like any other component: versioned, tested, monitored and replaceable.",
        delivers: ["Product and architecture design", "AI features built into the app", "APIs, data layer and admin tools", "Testing, release and hand-over"],
        useCases: ["Smart search inside a portal", "Personalised feeds and recommendations", "Automated triage of incoming requests"],
        tags: ["Web", "Mobile", "APIs", "LLMs"],
      },
      {
        id: "ai-integration",
        title: "AI Development & Integration",
        icon: Plug,
        summary: "Connecting AI capabilities to your existing systems and data.",
        about:
          "Most businesses do not need a new product — they need AI to work with the CRM, ERP, ticketing or storefront they already have. We integrate models and AI services through clean APIs, keeping your current workflows intact and adding capability where it helps.",
        delivers: ["Integration design and data mapping", "Connectors to your existing systems", "Fallbacks when a model is unavailable", "Documentation for your team"],
        useCases: ["Summaries inside a CRM", "Automated tagging in a CMS", "Assistants inside an internal tool"],
        tags: ["REST", "Webhooks", "CRM", "ERP"],
      },
      {
        id: "ai-copilot-development",
        title: "AI Copilot Development",
        icon: Sparkles,
        summary: "In-app assistants that help users get work done without leaving the product.",
        about:
          "A copilot sits beside the user and helps with the task in front of them: drafting, explaining, filling forms, finding records or suggesting next steps. We scope what it is allowed to see and do, so it stays useful and predictable.",
        delivers: ["Task and permission design", "Context-aware assistant UI", "Grounding in your product data", "Usage analytics and feedback loop"],
        useCases: ["Drafting replies for support agents", "Guided form completion", "Explaining reports in plain language"],
        tags: ["Assistant UI", "Context", "Guardrails"],
      },
      {
        id: "openai-integration",
        title: "AI OpenAI Integration Services",
        icon: Zap,
        summary: "Production-ready use of OpenAI models inside your applications.",
        about:
          "We integrate OpenAI models for text, image and speech tasks with attention to the parts that matter in production: prompt design, cost control, rate limits, data handling and graceful failure. Access is kept behind your own backend so keys and data stay under your control.",
        delivers: ["Prompt and response design", "Secure server-side integration", "Cost and usage controls", "Logging and evaluation setup"],
        useCases: ["Content drafting and rewriting", "Document summarisation", "Structured data extraction"],
        tags: ["OpenAI API", "Prompting", "Cost control"],
      },
      {
        id: "custom-ai-model-development",
        title: "Custom AI Model Development",
        icon: BrainCircuit,
        summary: "Models trained or fine-tuned for your data and your problem.",
        about:
          "When a general model is not accurate enough, we help you build one that is. That covers defining the task, preparing data, training or fine-tuning, measuring results against a baseline and packaging the model so it can run inside your product.",
        delivers: ["Problem framing and success measures", "Data preparation and labelling plan", "Training, tuning and evaluation", "Deployable model package"],
        useCases: ["Domain-specific classification", "Custom scoring and ranking", "Specialised extraction from documents"],
        tags: ["Fine-tuning", "Evaluation", "Python"],
      },
      {
        id: "transformer-model-development",
        title: "AI Transformer Model Development",
        icon: Layers,
        summary: "Transformer-based models for language, vision and sequence tasks.",
        about:
          "Transformers power most modern language and vision systems. We build and adapt them for tasks such as text understanding, classification, embeddings and sequence prediction, choosing the smallest model that meets your accuracy and latency needs.",
        delivers: ["Architecture and model selection", "Fine-tuning on your data", "Embedding and retrieval pipelines", "Optimised inference"],
        useCases: ["Semantic search", "Text classification at scale", "Similarity and duplicate detection"],
        tags: ["Transformers", "Embeddings", "PyTorch"],
      },
    ],
  },
  {
    id: "agents",
    title: "Agents & Automation",
    icon: Bot,
    color: "#8b5cf6",
    blurb:
      "AI that does work, not just answers questions — agents and automations that carry out tasks under rules you set.",
    items: [
      {
        id: "agent-as-a-service",
        title: "Agent-as-a-Service (AaaS)",
        icon: Handshake,
        summary: "Ready-to-run agents delivered and operated as a managed service.",
        about:
          "Instead of building everything yourself, you get an agent configured for a defined job — with hosting, monitoring and updates handled for you. It suits teams that want an outcome without owning the infrastructure behind it.",
        delivers: ["Agent scoped to a defined job", "Managed hosting and monitoring", "Regular tuning and updates", "Clear reporting on activity"],
        useCases: ["Lead qualification", "Routine back-office checks", "Scheduled research and reporting"],
        tags: ["Managed", "Monitoring", "SLA"],
      },
      {
        id: "custom-ai-agent-development",
        title: "Custom AI Agent Development",
        icon: Bot,
        summary: "Agents built around your process, tools and approval rules.",
        about:
          "A custom agent plans a task, uses the tools you give it — search, databases, internal APIs — and reports back. We define what it may do on its own and where a person must approve, so it is helpful without acting outside its remit.",
        delivers: ["Task and tool design", "Agent logic and memory", "Approval and escalation rules", "Testing against real scenarios"],
        useCases: ["Order and refund handling", "Data reconciliation", "Report preparation"],
        tags: ["Tool use", "Planning", "Human-in-the-loop"],
      },
      {
        id: "multi-agent-systems",
        title: "Multi-Agent Systems Development",
        icon: Network,
        summary: "Several specialised agents that cooperate on larger tasks.",
        about:
          "Some jobs are better split across specialists — one to research, one to draft, one to check. We design how agents divide work, share context and hand results on, and we add checks so one agent's mistake is caught by another.",
        delivers: ["Role and responsibility design", "Shared context and messaging", "Cross-checking between agents", "Observability across the whole run"],
        useCases: ["Research-draft-review pipelines", "Multi-step customer requests", "Complex document workflows"],
        tags: ["Coordination", "Roles", "Review loops"],
      },
      {
        id: "agent-orchestration",
        title: "AI Agent Orchestration Services",
        icon: Orbit,
        summary: "Controlling, sequencing and monitoring many agents and tools.",
        about:
          "Orchestration is the control layer: which agent runs when, what it can access, what happens when a step fails and how a person steps in. We build that layer so agent workflows are dependable, traceable and easy to change.",
        delivers: ["Workflow and routing logic", "Retries, timeouts and fallbacks", "Run history and audit trail", "Dashboards for operators"],
        useCases: ["Long-running business processes", "Mixed agent and human steps", "Scheduled and event-driven runs"],
        tags: ["Workflows", "Audit", "Retries"],
      },
      {
        id: "agent-integration-services",
        title: "AI Agent Integration Services",
        icon: Puzzle,
        summary: "Plugging agents into the tools, data and systems your team uses.",
        about:
          "An agent is only as useful as what it can reach. We connect agents to your databases, SaaS tools and internal APIs using scoped credentials, so each one can read and act only where it is supposed to.",
        delivers: ["Tool and API connectors", "Scoped access and secrets handling", "Rate and error management", "Integration tests"],
        useCases: ["Agents that update a CRM", "Agents that query a data warehouse", "Agents that raise tickets"],
        tags: ["APIs", "Scoped access", "SaaS"],
      },
      {
        id: "workflow-automation",
        title: "Intelligent Workflow Automation",
        icon: Workflow,
        summary: "Business processes that run end to end, with AI handling the judgment steps.",
        about:
          "Traditional automation follows fixed rules; intelligent automation can also read a document, classify a request or decide a route. We map your process, automate the predictable steps and use AI only where interpretation is needed.",
        delivers: ["Process mapping", "Automated workflow build", "AI steps for reading and routing", "Exception handling for people"],
        useCases: ["Invoice and form processing", "Onboarding workflows", "Request routing"],
        tags: ["Process", "RPA", "Documents"],
      },
      {
        id: "ai-automation-services",
        title: "AI Automation Services",
        icon: Zap,
        summary: "Removing repetitive work across teams with practical automation.",
        about:
          "We look for the tasks people repeat every day — copying data between systems, sorting messages, preparing standard reports — and automate them in small, measurable steps, starting with the ones that free up the most time.",
        delivers: ["Opportunity review", "Automation build and rollout", "Monitoring and adjustment", "Team training"],
        useCases: ["Inbox sorting and replies", "Data entry between systems", "Recurring report generation"],
        tags: ["Quick wins", "Integrations", "Reporting"],
      },
    ],
  },
  {
    id: "data",
    title: "Data, ML & Vision",
    icon: Cpu,
    color: "#10b981",
    blurb:
      "Turning data into predictions, understanding images and language, and building the foundations these depend on.",
    items: [
      {
        id: "data-engineering",
        title: "Data Engineering Services",
        icon: Database,
        summary: "Reliable pipelines and storage so your data is ready to use.",
        about:
          "Good AI starts with clean, accessible data. We build the pipelines that collect, clean, transform and store it, with quality checks along the way, so analytics and models work from a single trustworthy source.",
        delivers: ["Ingestion and transformation pipelines", "Warehouse or lake design", "Data quality checks", "Scheduling and monitoring"],
        useCases: ["Unifying data from many systems", "Feeding dashboards and models", "Cleaning legacy data"],
        tags: ["ETL", "Warehouse", "Pipelines"],
      },
      {
        id: "machine-learning-development",
        title: "Machine Learning Development",
        icon: Brain,
        summary: "Models that learn from your data to classify, score and predict.",
        about:
          "We take a business question, decide whether machine learning is the right tool, and if so build and validate a model against a simple baseline. You get a model you can explain and a clear view of how well it performs.",
        delivers: ["Feasibility and baseline", "Feature and model development", "Validation and reporting", "Integration into your product"],
        useCases: ["Lead or risk scoring", "Churn indication", "Anomaly detection"],
        tags: ["scikit-learn", "Python", "Validation"],
      },
      {
        id: "deep-learning-solutions",
        title: "Deep Learning Solutions",
        icon: BrainCircuit,
        summary: "Neural-network approaches for images, audio, text and complex signals.",
        about:
          "Deep learning is the right choice when the input is rich and unstructured. We build and train neural networks for tasks like image recognition and audio analysis, and tune them to run within your speed and cost limits.",
        delivers: ["Network design and training", "Data augmentation strategy", "Performance tuning", "Deployment on cloud or device"],
        useCases: ["Defect detection", "Audio classification", "Complex pattern recognition"],
        tags: ["Neural networks", "GPU", "TensorFlow"],
      },
      {
        id: "computer-vision-development",
        title: "Computer Vision Development",
        icon: ScanEye,
        summary: "Software that understands images and video.",
        about:
          "We build systems that detect, classify and read what is in images and video — from documents to shelves to production lines. Each one is tested on your own images, in your own lighting and conditions, before it goes live.",
        delivers: ["Image and video pipelines", "Detection, classification, OCR", "Testing on your real images", "Edge or cloud deployment"],
        useCases: ["Document and ID reading", "Quality inspection", "Shelf and stock counting"],
        tags: ["OCR", "Detection", "Video"],
      },
      {
        id: "nlp-development",
        title: "NLP Development Services",
        icon: Languages,
        summary: "Software that reads, sorts and understands human language.",
        about:
          "We apply natural-language techniques to emails, tickets, reviews and documents: classifying them, pulling out the facts, summarising them and understanding intent — in the languages your customers actually use.",
        delivers: ["Text classification and tagging", "Entity and fact extraction", "Summarisation", "Multilingual support"],
        useCases: ["Ticket categorisation", "Review and feedback analysis", "Contract clause extraction"],
        tags: ["Classification", "Extraction", "Multilingual"],
      },
      {
        id: "multi-modal-ai",
        title: "Multi-Modal AI Development",
        icon: Combine,
        summary: "AI that works across text, images, audio and documents together.",
        about:
          "Real information rarely arrives in one form. Multi-modal systems can read a scanned form, look at an attached photo and combine both with a written message to reach one answer.",
        delivers: ["Input handling for mixed media", "Model selection and combination", "Unified output format", "Evaluation on mixed samples"],
        useCases: ["Insurance-style claims with photos", "Support tickets with screenshots", "Visual product search"],
        tags: ["Text", "Image", "Audio"],
      },
      {
        id: "predictive-analytics",
        title: "Predictive Analytics & Forecasting",
        icon: LineChart,
        summary: "Looking ahead — demand, trends and risk — from your historical data.",
        about:
          "We build forecasting and prediction models on the data you already collect, and present results in dashboards people can read. Forecasts come with an honest sense of uncertainty rather than a single confident number.",
        delivers: ["Data assessment", "Forecasting model", "Dashboard for decision makers", "Retraining plan"],
        useCases: ["Demand and inventory planning", "Sales pipeline outlook", "Capacity planning"],
        tags: ["Forecasting", "Dashboards", "Time series"],
      },
      {
        id: "rag-development",
        title: "RAG Development Services",
        icon: FileSearch,
        summary: "Assistants that answer from your own documents, with sources.",
        about:
          "Retrieval-augmented generation lets a language model look things up in your knowledge base before it answers. That keeps responses grounded in your content, lets you point to the source and makes it easy to update knowledge without retraining.",
        delivers: ["Document ingestion and chunking", "Search and retrieval tuning", "Answers with cited sources", "Access control by user or team"],
        useCases: ["Internal knowledge assistant", "Customer help centre search", "Policy and manual Q&A"],
        tags: ["Vector search", "Citations", "Knowledge base"],
      },
    ],
  },
  {
    id: "conversational",
    title: "Conversational & Voice",
    icon: MessageSquare,
    color: "#f59e0b",
    blurb:
      "Chat, voice and generative experiences that talk to your customers and team in natural language.",
    items: [
      {
        id: "ai-chatbot-development",
        title: "AI Chatbot Development",
        icon: BotMessageSquare,
        summary: "Chatbots that answer questions and complete tasks on your site and apps.",
        about:
          "We build chatbots that handle common questions, collect the details a person needs and hand over to a human when the conversation needs one. They are trained on your content and tested on real questions before launch.",
        delivers: ["Conversation and scope design", "Answers grounded in your content", "Handover to human agents", "Analytics on questions asked"],
        useCases: ["Customer support front line", "Lead capture", "Internal HR and IT help"],
        tags: ["Web chat", "WhatsApp", "Handover"],
      },
      {
        id: "conversational-ai",
        title: "AI Conversational Development",
        icon: MessagesSquare,
        summary: "Dialogue systems that keep context across a multi-step conversation.",
        about:
          "Beyond simple question-and-answer, conversational systems remember what was said, ask clarifying questions and guide a person through a process such as booking, applying or troubleshooting.",
        delivers: ["Dialogue flow design", "Context and memory handling", "Channel integrations", "Testing with real conversations"],
        useCases: ["Guided booking and applications", "Troubleshooting assistants", "Onboarding conversations"],
        tags: ["Dialogue", "Memory", "Channels"],
      },
      {
        id: "voice-agent-development",
        title: "AI Voice Agent Development",
        icon: Mic,
        summary: "Voice assistants that can speak and listen over the phone or in an app.",
        about:
          "We combine speech recognition, a language model and natural-sounding speech to build agents that take calls or respond to voice commands. Latency and interruptions are tuned so the conversation feels natural.",
        delivers: ["Speech-to-text and text-to-speech setup", "Call flow and intent design", "Telephony or app integration", "Call review and improvement tools"],
        useCases: ["Appointment reminders and booking", "After-hours call handling", "Voice search in apps"],
        tags: ["Speech", "Telephony", "Low latency"],
      },
      {
        id: "generative-ai-development",
        title: "AI Generative AI Development",
        icon: WandSparkles,
        summary: "Systems that create text, images and other content on demand.",
        about:
          "Generative AI can draft, rewrite, summarise and create. We build features around it — with templates, brand rules, review steps and safety filters — so what it produces is useful and consistent.",
        delivers: ["Use-case and content design", "Prompt and template library", "Review and approval flow", "Safety and brand filters"],
        useCases: ["Product description drafting", "Marketing copy variants", "Report and email drafting"],
        tags: ["Text", "Images", "Templates"],
      },
    ],
  },
  {
    id: "scale",
    title: "Scale, Govern & Advise",
    icon: ShieldCheck,
    color: "#f43f5e",
    blurb:
      "Running AI reliably in production, keeping it accountable, and deciding where it is worth using in the first place.",
    items: [
      {
        id: "mlops-engineering",
        title: "MLOps Engineering Services",
        icon: ServerCog,
        summary: "The practices and tooling that keep models reliable after launch.",
        about:
          "Shipping a model is the beginning, not the end. MLOps brings version control, automated testing, deployment pipelines and retraining to machine learning, so improvements reach production safely and repeatably.",
        delivers: ["Model versioning and registry", "Automated build and release pipeline", "Retraining workflow", "Environment and cost management"],
        useCases: ["Frequent model updates", "Multiple models in production", "Moving a notebook into a real service"],
        tags: ["CI/CD", "Versioning", "Pipelines"],
      },
      {
        id: "model-deployment-monitoring",
        title: "Model Deployment & Monitoring",
        icon: Gauge,
        summary: "Getting models live and watching how they behave over time.",
        about:
          "We deploy models to the cloud or your own infrastructure and monitor them for speed, errors, cost and drift — the gradual loss of accuracy as real-world data changes — with alerts so problems are caught early.",
        delivers: ["Deployment on cloud or on-premise", "Performance and cost dashboards", "Drift and quality alerts", "Rollback procedures"],
        useCases: ["Production model hosting", "Tracking accuracy after launch", "Controlling inference cost"],
        tags: ["Containers", "Alerts", "Drift"],
      },
      {
        id: "model-governance",
        title: "Model Governance & Compliance",
        icon: Gavel,
        summary: "Documentation, controls and audit trails for responsible AI use.",
        about:
          "Regulators, customers and your own leadership will ask how your AI makes decisions and who is accountable. We help set up documentation, approval steps, access controls and audit logs so you can answer clearly.",
        delivers: ["Model documentation", "Approval and access controls", "Audit logging", "Policy alignment support"],
        useCases: ["Regulated industries", "Enterprise procurement reviews", "Internal AI policy rollout"],
        tags: ["Audit", "Policy", "Access control"],
      },
      {
        id: "enterprise-ai-development",
        title: "Enterprise AI Development",
        icon: Building2,
        summary: "AI solutions built to enterprise standards of security and scale.",
        about:
          "Larger organisations need single sign-on, role-based access, data residency, integration with existing platforms and long-term support. We build AI systems that meet those expectations from the start.",
        delivers: ["Secure architecture", "SSO and role-based access", "Integration with enterprise systems", "Support and maintenance plan"],
        useCases: ["Company-wide assistants", "Cross-department automation", "Data-sensitive workloads"],
        tags: ["Security", "SSO", "Scale"],
      },
      {
        id: "enterprise-ai-consulting",
        title: "Enterprise AI Consulting",
        icon: Users,
        summary: "Guidance for organisations planning AI across teams and systems.",
        about:
          "We work with leadership and technical teams to identify where AI fits, what to build first, how to organise the work and what to buy versus build — then help turn that into a delivery plan.",
        delivers: ["Opportunity workshops", "Architecture and vendor guidance", "Roadmap and prioritisation", "Delivery oversight"],
        useCases: ["Planning a first AI programme", "Choosing between vendors", "Aligning IT and business teams"],
        tags: ["Roadmap", "Workshops", "Architecture"],
      },
      {
        id: "ai-strategy-consulting",
        title: "AI Strategy Consulting",
        icon: Compass,
        summary: "A clear view of where AI is worth using in your business, and where it is not.",
        about:
          "Not every problem needs AI. We assess your processes, data and goals, rank ideas by value and effort, and tell you honestly which ones are worth pursuing — and which are better solved without it.",
        delivers: ["Use-case assessment and ranking", "Data readiness review", "Risk and cost outline", "Phased action plan"],
        useCases: ["Deciding where to start", "Validating an idea before building", "Preparing an investment case"],
        tags: ["Assessment", "Prioritisation", "Planning"],
      },
      {
        id: "ai-agent-development-company",
        title: "AI Agent Development Company",
        icon: Rocket,
        summary: "A delivery partner for agent projects, from idea to production.",
        about:
          "If you want a single team to take an agent idea through scoping, prototype, build and launch, this is that engagement. We work in short cycles so you see something working early and can steer.",
        delivers: ["Scoping and prototype", "Iterative build with demos", "Launch and hand-over", "Ongoing support option"],
        useCases: ["First agent for a team", "Replacing a manual process", "Scaling a successful pilot"],
        tags: ["Prototype", "Iterative", "End to end"],
      },
    ],
  },
];

export const aiItemCount = aiGroups.reduce((n, g) => n + g.items.length, 0);

export const aiProcess = [
  { icon: Lightbulb, title: "Find the use case", text: "We start from the problem and the data you have, and check that AI is actually the right tool." },
  { icon: FlaskConical, title: "Prototype early", text: "A small working version on your real data, so you can judge it before committing further." },
  { icon: Layers, title: "Build & integrate", text: "The feature is built into your product and connected to the systems it needs." },
  { icon: TrendingUp, title: "Launch & improve", text: "Monitoring, feedback and tuning continue after go-live, with a person reviewing what matters." },
];

export const aiPrinciples = [
  { icon: Eye, title: "No black boxes", text: "You see what a workflow does and why, in plain terms, before it ships." },
  { icon: ShieldCheck, title: "Your data stays yours", text: "The same confidentiality and data-handling standard as every other engagement." },
  { icon: Users, title: "Humans stay in the loop", text: "AI-assisted does not mean unreviewed — a person checks what matters." },
  { icon: Container, title: "Right tool for the job", text: "We use AI when it solves the problem, not by default." },
  { icon: Blocks, title: "Built to be replaced", text: "Models change fast, so the AI layer is kept modular and swappable." },
  { icon: Gauge, title: "Measured, not assumed", text: "Every feature is tested against a simple baseline before we call it better." },
];
