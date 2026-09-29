export type Project = {
  slug: string;
  index: string;
  name: string;
  type: string;
  short: string;
  summary: string;
  stack: string[];
  href?: string;
  visual: string;
  period: string;
  role: string;
  featured: boolean;
  challenge: string;
  contribution: string[];
  highlights: string[];
  architecture: string[];
  outcome: string;
};

export const profile = {
  name: "Deepak Bhattarai",
  initials: "DB",
  location: "London, UK",
  email: "dpkraj578@gmail.com",
  linkedin: "https://uk.linkedin.com/in/deepak-bhattarai-7a5250193",
  github: "https://github.com/drb1",
  cv: "/files/Deepak_Bhattarai_CV.docx",
  title: "Software Engineer × AI/ML Engineer",
  intro:
    "I build production software, intelligent systems and real-time platforms — combining nine years of software engineering with an MSc in Artificial Intelligence with Distinction.",
};

export const stats = [
  { value: "9+", label: "Years in software engineering" },
  { value: "Distinction", label: "MSc Artificial Intelligence" },
  { value: "AI + Software", label: "Production systems" },
];

export const experience = [
  {
    year: "2026 — Present",
    role: "Freelance AI & Full-Stack Developer",
    company: "Independent · London / Remote",
    detail:
      "Building AI-enabled learning, assessment and public-data platforms with FastAPI, PostgreSQL, Next.js, LLM APIs, real-time media workflows and production deployment.",
  },
  {
    year: "2024 — 2026",
    role: "PHP Developer",
    company: "School of Dental Nursing · UK",
    detail:
      "Developed and maintained learning and administration systems covering courses, student records, exams, payments, reporting, authentication, APIs and production support.",
  },
  {
    year: "2023 — 2024",
    role: "Mid-Level Developer",
    company: "Omega BPO Outsourcing · Nepal",
    detail:
      "Delivered production web and mobile features with React, Next.js, Flutter and React Native; integrated APIs, contributed to technical design and mentored junior developers.",
  },
  {
    year: "2021 — 2023",
    role: "Junior Software Developer",
    company: "Bug Byte Technology · Nepal",
    detail:
      "Worked across requirements, design, implementation, testing and maintenance, including relational and NoSQL schemas, SQL, stored procedures and application data flows.",
  },
  {
    year: "2020 — 2021",
    role: "React Native Developer",
    company: "Progressive Labs · Nepal",
    detail:
      "Built cross-platform iOS/Android features, API integrations and Redux-based state flows while contributing to debugging, testing and code-quality practices.",
  },
  {
    year: "2017 — 2020",
    role: "Software / React Native Developer",
    company: "SPG Technologies · New Delhi",
    detail:
      "Built responsive web and mobile applications and worked across requirements, delivery, QA, code reviews, database discussions, testing, optimisation and maintenance.",
  },
];

export const projects: Project[] = [
  {
    slug: "language-vision",
    index: "01",
    name: "Language Vision",
    type: "AI Learning Platform",
    short: "AI-enabled English learning, assessment and real-time teaching platform.",
    summary:
      "A production-oriented English-learning platform spanning structured lessons, exams, placement testing, AI-assisted writing and speaking assessment, audio workflows, live classes and role-based administration.",
    stack: ["Next.js", "TypeScript", "FastAPI", "SQLAlchemy", "PostgreSQL", "LLM APIs", "LiveKit", "Docker"],
    visual: "/projects/language-vision.svg",
    period: "2026 — Present",
    role: "Freelance AI & Full-Stack Developer",
    featured: true,
    challenge:
      "Create one coherent platform for lessons, assessments, teachers, students, audio, live classes and AI-assisted marking while keeping deterministic question types reliable and the backend maintainable.",
    contribution: [
      "Architected FastAPI backend modules with SQLAlchemy, Alembic, Pydantic and PostgreSQL.",
      "Built Next.js/TypeScript admin, student and teacher workflows with role-based authentication.",
      "Integrated LLM-assisted writing and speaking evaluation alongside rule-based marking for objective questions.",
      "Designed listening/speaking flows with shared audio prompts, browser recording and live-class infrastructure using LiveKit/WebRTC.",
      "Worked on question imports, placement testing, results, session reliability, storage and production debugging.",
    ],
    highlights: [
      "AI-assisted writing & speaking marking",
      "Placement and multi-format assessment engine",
      "Admin / teacher / student role workflows",
      "Audio recording and live-class infrastructure",
      "Docker/VPS deployment and object storage",
    ],
    architecture: ["Next.js client", "FastAPI API", "PostgreSQL", "LLM services", "LiveKit / audio", "Object storage"],
    outcome:
      "A broad, production-oriented platform demonstrating the integration of AI assessment, real-time media and conventional learning-management workflows in one system.",
  },
  {
    slug: "driver-monitoring",
    index: "02",
    name: "Driver Monitoring",
    type: "MSc AI Research",
    short: "Real-time four-class driver-behaviour recognition from monocular RGB video.",
    summary:
      "MSc Artificial Intelligence dissertation exploring lightweight spatiotemporal deep-learning pipelines for detecting normal, aggressive, distracted and drowsy driving behaviours in real time.",
    stack: ["Python", "TensorFlow/Keras", "OpenCV", "MobileNetV2", "BiLSTM", "Transformer"],
    visual: "/projects/driver-monitoring.svg",
    period: "2024 — 2025",
    role: "MSc Artificial Intelligence Researcher",
    featured: true,
    challenge:
      "Recognise behaviour from short video sequences rather than isolated frames while keeping inference efficient enough for a real-time prototype.",
    contribution: [
      "Prepared balanced 8-second video clips and built preprocessing for sampled RGB frame sequences.",
      "Used a MobileNetV2 visual backbone with temporal alternatives including BiLSTM, Transformer and temporal-convolution approaches.",
      "Evaluated models using accuracy, precision, recall, F1, macro ROC-AUC, mAP, calibration/ECE and confusion-style error analysis.",
      "Investigated class imbalance, dominant-class behaviour, prediction instability and misclassification patterns.",
      "Built rolling-buffer live inference with temporal smoothing and latency/FPS testing.",
    ],
    highlights: ["Four behaviour classes", "Spatiotemporal deep learning", "Model calibration & error analysis", "Rolling-buffer live inference", "Resource-aware deployment focus"],
    architecture: ["Live RGB video", "Frame sampling", "MobileNetV2", "Temporal model", "Smoothing", "Behaviour prediction"],
    outcome:
      "A research pipeline connecting comparative deep-learning experimentation to a working real-time inference prototype.",
  },
  {
    slug: "nepal-disaster-relief",
    index: "03",
    name: "Nepal Disaster Relief",
    type: "Public Data Platform",
    short: "Disaster information, live situation monitoring and official-source data automation.",
    summary:
      "A public disaster-information platform with disaster archives, situation monitoring, missing-person information, funding/transparency views and automated data ingestion from official sources.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Automation", "Caching", "Docker"],
    href: "https://reliefnepal.com",
    visual: "/projects/nepal-disaster-relief.svg",
    period: "2026 — Present",
    role: "Full-Stack Developer",
    featured: true,
    challenge:
      "Keep public-facing disaster information useful and responsive when upstream sources are slow, inconsistent or updated on different schedules.",
    contribution: [
      "Developed and stabilised Next.js/FastAPI/PostgreSQL pages and APIs for situation data, missing persons, disaster history and transparency.",
      "Worked on automated official-data workers and update flows for changing public information.",
      "Introduced caching, timeouts and stale-value preservation patterns to reduce failures caused by slow upstream services.",
      "Investigated API latency, pagination, first-load failures, data-shape bugs and production regressions.",
      "Maintained deployment and performance while preserving previously fixed features during iterative updates.",
    ],
    highlights: ["Official-source automation", "Situation Room", "Missing-person data", "Caching & stale-data resilience", "Performance and regression debugging"],
    architecture: ["Public sources", "Background workers", "FastAPI", "PostgreSQL", "Cache layer", "Next.js UI"],
    outcome:
      "A resilience-focused public-information system designed to remain useful even when external data sources are imperfect or slow.",
  },
  {
    slug: "wizam",
    index: "04",
    name: "Wizam.com",
    type: "Online Exam Platform",
    short: "NEBDN online mock-test and examination workflows with integrated payments.",
    summary:
      "A live exam platform supporting mock tests, paid access, assignment workflows, administration, transactional communication and ongoing production maintenance.",
    stack: ["Laravel", "PHP", "Next.js", "React", "MySQL", "Stripe"],
    href: "https://wizam.com",
    visual: "/projects/wizam.svg",
    period: "Professional Project",
    role: "Full-Stack / PHP Developer",
    featured: true,
    challenge:
      "Coordinate paid exam access, user assignments and administrative workflows reliably across a live learning platform.",
    contribution: [
      "Developed and maintained mock-test and examination workflows.",
      "Implemented subscription and one-off payment flows with Stripe.",
      "Worked on payment verification and exam-access control.",
      "Built and improved administrative functionality, FAQs and transactional email workflows.",
      "Resolved production bugs and improved existing user and administrator flows.",
    ],
    highlights: ["Exam workflows", "Stripe subscriptions & one-off payments", "Access control", "Admin tooling", "Transactional emails"],
    architecture: ["React / Next.js", "Laravel", "MySQL", "Stripe", "Email workflows"],
    outcome:
      "Commercial platform work demonstrating end-to-end development across payments, access control, administration and production maintenance.",
  },
  {
    slug: "jodinee",
    index: "05",
    name: "Jodinee.com",
    type: "Mobile / Social Platform",
    short: "Flutter/Laravel matrimony platform with discovery, matching, chat and notifications.",
    summary:
      "A mobile-focused matrimony platform covering account onboarding, profiles, discovery, interests, matches, chat, push notifications and media workflows.",
    stack: ["Flutter", "Laravel", "Firebase", "Dio", "Provider"],
    href: "https://jodinee.com",
    visual: "/projects/jodinee.svg",
    period: "Professional Project",
    role: "Mobile / Full-Stack Developer",
    featured: false,
    challenge:
      "Build a multi-step social product where identity, discovery, interaction and messaging flows stay coherent across a mobile client and backend services.",
    contribution: [
      "Implemented authentication and onboarding flows.",
      "Built profile, discovery, interest and matching experiences.",
      "Worked on chat, push notifications and media uploads.",
      "Integrated Laravel APIs using Dio and managed Flutter state with Provider.",
      "Supported deployment and end-to-end mobile workflows.",
    ],
    highlights: ["Flutter mobile app", "Discovery & matching", "Chat", "Push notifications", "Media uploads"],
    architecture: ["Flutter", "Dio", "Laravel API", "Firebase", "Media storage"],
    outcome:
      "A feature-rich cross-platform mobile project demonstrating product flows, API integration, state management and user-engagement features.",
  },
  {
    slug: "environmental-monitoring",
    index: "06",
    name: "Environmental Monitoring",
    type: "AI / IoT",
    short: "Sensor-to-cloud environmental monitoring with anomaly-detection objectives.",
    summary:
      "An IoT monitoring project combining Raspberry Pi and Arduino sensors, Python processing, cloud data aggregation and dashboard visualisation.",
    stack: ["Python", "Raspberry Pi", "Arduino", "Azure IoT", "Data Visualisation"],
    visual: "/projects/environmental-monitoring.svg",
    period: "Academic / Technical Project",
    role: "AI / IoT Developer",
    featured: false,
    challenge:
      "Connect physical sensor collection to cloud-based monitoring and identify unusual patterns that could support early-warning use cases.",
    contribution: [
      "Built an IoT-focused sensor collection pipeline using Raspberry Pi and Arduino.",
      "Designed data flow from devices to backend/cloud aggregation.",
      "Created dashboard-oriented live environmental monitoring workflows.",
      "Applied anomaly-detection thinking to unusual sensor patterns and alerting scenarios.",
    ],
    highlights: ["Raspberry Pi / Arduino", "Cloud aggregation", "Live dashboard", "Anomaly detection", "Early-warning concept"],
    architecture: ["Sensors", "Raspberry Pi / Arduino", "Python", "Azure IoT", "Dashboard"],
    outcome:
      "A practical IoT/AI project linking sensor hardware, cloud processing and intelligent monitoring concepts.",
  },
  {
    slug: "nepaluk",
    index: "07",
    name: "NepalUK.com",
    type: "Community / Commerce Platform",
    short: "Laravel-based e-commerce and community web platform.",
    summary:
      "Backend and user-facing development for a Laravel-based community/e-commerce platform, including database workflows and application features.",
    stack: ["Laravel", "PHP", "MySQL", "JavaScript"],
    href: "https://nepaluk.com",
    visual: "/projects/nepaluk.svg",
    period: "Professional Project",
    role: "Web Developer",
    featured: false,
    challenge:
      "Support user-facing community and commerce features through maintainable backend application and database workflows.",
    contribution: [
      "Contributed to Laravel backend application development.",
      "Worked on database workflows and user-facing functionality.",
      "Supported ongoing feature implementation and maintenance.",
    ],
    highlights: ["Laravel backend", "Database workflows", "Community features", "E-commerce functionality"],
    architecture: ["Browser", "Laravel", "MySQL", "Application services"],
    outcome:
      "Additional production web-development experience across backend logic, data and user-facing features.",
  },
];

export const skills = [
  {
    title: "AI / Machine Learning",
    items: ["Python", "TensorFlow/Keras", "Computer Vision", "OpenCV", "Deep Learning", "Transfer Learning", "Temporal Modelling", "LLM APIs", "Model Evaluation", "Real-time Inference"],
  },
  {
    title: "Backend / Data",
    items: ["FastAPI", "SQLAlchemy", "Pydantic", "Alembic", "Laravel", "Node.js", "Express.js", "REST APIs", "JWT", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Frontend / Mobile",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "React Native", "Flutter", "Redux", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Infrastructure / Delivery",
    items: ["Docker", "Git / GitHub", "VPS", "DigitalOcean", "Azure IoT", "LiveKit / WebRTC", "Testing", "Performance Debugging", "Agile / Scrum", "Jira"],
  },
];
