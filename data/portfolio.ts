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
  proofPoints?: { label: string; value: string; detail: string }[];
  decisions?: { title: string; detail: string }[];
  outcome: string;
};

export const profile = {
  name: "Deepak Bhattarai",
  initials: "DB",
  location: "London, UK",
  email: "dpkraj578@gmail.com",
  linkedin: "https://www.linkedin.com/in/deepak-bhattarai-7a5250193",
  github: "https://github.com/drb1",
  cv: "/files/Deepak_Bhattarai_AI_CV.pdf",
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
    href: "https://evision.languagevision.com",
    visual: "/projects/language-vision-screenshot.webp",
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
    proofPoints: [
      { label: "Product surfaces", value: "Student · Teacher · Admin", detail: "Role-specific workflows across learning, delivery and administration." },
      { label: "Core skills", value: "Reading · Writing · Listening · Speaking", detail: "The learning and assessment model covers all four English-language skills." },
      { label: "Assessment", value: "Placement · Practice · Exams", detail: "Multiple assessment modes share one structured content and results model." },
      { label: "AI + realtime", value: "LLM marking · LiveKit/WebRTC", detail: "Subjective assessment and live teaching are integrated alongside deterministic workflows." },
    ],
    decisions: [
      { title: "Hybrid marking instead of AI everywhere", detail: "Objective question types remain rule-based for predictable scoring, while writing and speaking use AI-assisted evaluation where subjective judgement is required." },
      { title: "Modular backend boundaries", detail: "FastAPI modules, SQLAlchemy models and Alembic migrations keep lessons, exams, placement, teacher workflows and media features separable as the platform grows." },
      { title: "Realtime media as its own concern", detail: "LiveKit/WebRTC and browser audio recording handle live and spoken interactions without coupling the core assessment API to realtime transport." },
      { title: "Production-first storage and deployment", detail: "Dockerised services, PostgreSQL and object storage support media-heavy workflows while keeping application state and uploaded assets clearly separated." },
    ],
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
    visual: "/projects/driver-monitoring-real.svg",
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
    proofPoints: [
      { label: "Behaviour classes", value: "4", detail: "Normal, aggressive, distracted and drowsy driving." },
      { label: "Sequence window", value: "8-second clips", detail: "Short temporal sequences preserve behaviour context beyond single frames." },
      { label: "Visual backbone", value: "MobileNetV2", detail: "A lightweight CNN backbone chosen with real-time inference constraints in mind." },
      { label: "Evaluation", value: "F1 · ROC-AUC · mAP · ECE", detail: "Performance was examined beyond accuracy, including calibration and class-level behaviour." },
    ],
    decisions: [
      { title: "Model behaviour over time", detail: "The pipeline uses short frame sequences rather than isolated images because driver behaviour is inherently temporal." },
      { title: "Keep visual extraction lightweight", detail: "MobileNetV2 provides a compact visual representation before temporal modelling, supporting the goal of a real-time prototype." },
      { title: "Compare temporal strategies", detail: "BiLSTM, Transformer and temporal-convolution alternatives were explored instead of assuming one sequence model would dominate." },
      { title: "Evaluate reliability, not only headline accuracy", detail: "Confusion patterns, macro metrics, ROC-AUC, mAP and calibration/ECE were used to expose unstable or over-confident behaviour." },
    ],
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
    visual: "/projects/nepal-disaster-relief-real.svg",
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
    architecture: ["Official public sources", "Background workers", "FastAPI", "PostgreSQL", "Cache / stale data", "Next.js UI"],
    proofPoints: [
      { label: "Data strategy", value: "Official sources first", detail: "Situation data is designed around authoritative public sources rather than a generic news feed." },
      { label: "Resilience", value: "Cache · Timeout · Stale fallback", detail: "The platform preserves usable information when upstream services are slow or temporarily unavailable." },
      { label: "Public workflows", value: "Situation · Missing people · Transparency", detail: "Multiple public-information workflows are surfaced through one consistent application." },
      { label: "Automation", value: "Background update workers", detail: "Changing external information is ingested asynchronously instead of blocking user-facing requests." },
    ],
    decisions: [
      { title: "Treat upstream services as unreliable", detail: "External disaster data can be slow, incomplete or temporarily unavailable, so the application uses timeouts, caching and previously verified values instead of assuming every request will succeed." },
      { title: "Keep ingestion out of the request path", detail: "Background workers handle official-source updates so public pages can remain responsive even when source systems are slow." },
      { title: "Preserve provenance and public trust", detail: "The platform prioritises official and verified sources for situation and funding information, reducing the risk of presenting unverified claims as operational data." },
      { title: "Design for partial availability", detail: "Situation, missing-person and transparency features are separated enough that one failing source does not need to make the entire public platform unusable." },
    ],
    outcome:
      "A public-information system engineered for imperfect upstream conditions, with automation and fallback behaviour designed to keep critical pages useful during changing situations.",
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
    visual: "/projects/wizam-screenshot.webp",
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
    architecture: ["React / Next.js", "Laravel API", "MySQL", "Stripe", "Access rules", "Email workflows"],
    proofPoints: [
      { label: "Commerce", value: "Subscription + one-off", detail: "Stripe supports both recurring access and individual purchase flows." },
      { label: "Core workflow", value: "Mock tests · Exams", detail: "Learners move from paid access into assigned or available assessment experiences." },
      { label: "Control", value: "Payment-aware access", detail: "Exam availability is linked to verified entitlement rather than only front-end state." },
      { label: "Operations", value: "Admin · Email · Support", detail: "The platform includes the operational tooling needed to run a live commercial learning product." },
    ],
    decisions: [
      { title: "Separate payment from entitlement", detail: "A successful checkout is not treated as the entire access model; payment verification feeds explicit exam-access rules so commercial state stays consistent." },
      { title: "Support two purchase patterns", detail: "Subscriptions and one-off payments are handled as distinct commercial flows because users may need either ongoing access or a specific purchase." },
      { title: "Keep admin workflows first-class", detail: "Assignments, access, FAQs and operational actions are managed through administrative tooling rather than relying on manual database changes." },
      { title: "Use transactional communication as part of the workflow", detail: "Email notifications support payment, account and exam journeys so users receive feedback when state changes." },
    ],
    outcome:
      "A live commercial assessment platform combining exam delivery, Stripe payments, entitlement logic and administration into one maintainable product workflow.",
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
    visual: "/projects/jodinee-screenshot.webp",
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
    architecture: ["Flutter UI", "Provider state", "Dio API client", "Laravel API", "Firebase", "Media storage"],
    proofPoints: [
      { label: "Client", value: "Flutter", detail: "A cross-platform mobile experience covering onboarding, discovery, matching and messaging." },
      { label: "Core journey", value: "Profile → Discover → Match → Chat", detail: "The product connects identity, discovery and communication as one continuous user flow." },
      { label: "Integration", value: "Dio · Laravel · Firebase", detail: "REST APIs, backend business logic and notification services work together across the mobile stack." },
      { label: "Engagement", value: "Chat · Push · Media", detail: "Realtime-style communication and media workflows support ongoing user interaction after matching." },
    ],
    decisions: [
      { title: "Keep mobile state explicit", detail: "Provider is used to coordinate authentication, profile and interaction state so navigation and API-driven screens do not depend on scattered widget-local state." },
      { title: "Separate transport from product logic", detail: "Dio handles API communication while Laravel owns account, profile, matching and persistence rules, keeping client concerns distinct from backend decisions." },
      { title: "Use Firebase for device-facing events", detail: "Push notifications are delegated to Firebase so match and communication events can reach users outside the active application session." },
      { title: "Treat media as a dedicated workflow", detail: "Profile and conversation media are uploaded and stored separately from normal JSON API state, reducing coupling between binary assets and transactional application data." },
    ],
    outcome:
      "A cross-platform social product connecting onboarding, discovery, matching, messaging and notifications through a coherent Flutter and Laravel architecture.",
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
    visual: "/projects/environmental-monitoring-real.svg",
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
    architecture: ["Environmental sensors", "Raspberry Pi / Arduino", "Python processing", "Azure IoT", "Cloud aggregation", "Monitoring dashboard"],
    proofPoints: [
      { label: "Edge hardware", value: "Raspberry Pi · Arduino", detail: "Physical sensor collection begins close to the environment rather than only in the cloud." },
      { label: "Processing", value: "Python", detail: "Sensor readings are normalised and prepared before aggregation and visualisation." },
      { label: "Cloud layer", value: "Azure IoT", detail: "Device data is forwarded into a cloud-oriented monitoring path for central access." },
      { label: "Intelligence", value: "Anomaly detection", detail: "The project explores unusual-pattern detection as a basis for early-warning behaviour." },
    ],
    decisions: [
      { title: "Separate sensing from cloud analysis", detail: "Raspberry Pi and Arduino handle device-facing collection while cloud services receive processed readings, keeping hardware interaction separate from monitoring and analysis." },
      { title: "Use Python as the processing bridge", detail: "Python provides a flexible layer between raw sensor values and cloud ingestion, making preprocessing and anomaly-oriented logic easier to iterate." },
      { title: "Aggregate before visualising", detail: "The dashboard consumes centralised readings rather than communicating directly with each sensor, producing a simpler monitoring interface and cleaner device boundaries." },
      { title: "Treat anomaly detection as decision support", detail: "Unusual readings are used to flag conditions worth attention rather than being presented as guaranteed predictions of an environmental event." },
    ],
    outcome:
      "An end-to-end IoT monitoring prototype connecting physical sensors, edge processing, cloud aggregation and anomaly-oriented analysis into one observable pipeline.",
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
    visual: "/projects/nepaluk-screenshot.webp",
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
    architecture: ["Browser UI", "Laravel application", "Application services", "MySQL", "Community / commerce workflows"],
    proofPoints: [
      { label: "Platform type", value: "Community + Commerce", detail: "The application combines community-facing functionality with transactional and marketplace-style workflows." },
      { label: "Backend", value: "Laravel · PHP", detail: "Core application logic and request handling are implemented in a conventional server-side web stack." },
      { label: "Data", value: "MySQL", detail: "User, content and commerce-related workflows are backed by relational application data." },
      { label: "Delivery", value: "Production maintenance", detail: "Work included ongoing feature implementation and support rather than a one-off static build." },
    ],
    decisions: [
      { title: "Keep business rules on the server", detail: "Laravel centralises application and database rules so community and commerce behaviour is enforced consistently rather than relying on browser-only logic." },
      { title: "Use relational data for connected workflows", detail: "MySQL suits account, content and commerce relationships where records need clear ownership and predictable joins." },
      { title: "Build around reusable application services", detail: "Shared backend logic reduces duplication between different user-facing workflows and makes later maintenance safer." },
      { title: "Optimise for an evolving production product", detail: "The implementation supports incremental feature work and maintenance, reflecting the needs of a live community platform rather than a fixed brochure site." },
    ],
    outcome:
      "Production experience on a Laravel community and commerce platform, covering backend logic, relational data and evolving user-facing workflows.",
  },

  {
    slug: "open-notes",
    index: "08",
    name: "Open Notes",
    type: "Publishing / Blog Platform",
    short: "Full-stack publishing platform with authentication, editorial workflows, SEO and rich content management.",
    summary:
      "A Next.js publishing platform for technology, travel and general-interest content, with public discovery pages and a private administration area for managing posts, categories, tags and publishing status.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "NextAuth", "React Query", "Ant Design", "Vercel Blob"],
    href: "https://opennotez.com",
    visual: "/projects/open-notes-real.svg",
    period: "Personal Project",
    role: "Full-Stack Developer",
    featured: false,
    challenge:
      "Create a content platform that supports both a polished public reading experience and practical editorial workflows without maintaining a separate CMS product.",
    contribution: [
      "Built Next.js App Router pages and API routes for blogs, categories, tags, users and site statistics.",
      "Implemented admin CRUD workflows for creating, editing, featuring, drafting and publishing content.",
      "Integrated authentication flows including NextAuth, Google sign-in and email-related account workflows.",
      "Added rich-text editing, media handling, related content and category-based discovery.",
      "Implemented sitemap/SEO support together with Vercel analytics and performance tooling.",
    ],
    highlights: ["Admin publishing dashboard", "Authentication", "Categories & tags", "Rich content editing", "SEO & sitemap", "Analytics"],
    architecture: ["Public Next.js UI", "Admin workspace", "App Router APIs", "NextAuth", "MongoDB / Mongoose", "Vercel services"],
    proofPoints: [
      { label: "Ownership", value: "End-to-end product", detail: "Public reading, administration, authentication, storage and deployment are managed within one product." },
      { label: "Editorial workflow", value: "Draft · Feature · Publish", detail: "Posts move through practical editorial states instead of being hard-coded or immediately public." },
      { label: "Identity", value: "NextAuth + Google", detail: "The private administration surface is protected with account-aware authentication flows." },
      { label: "Distribution", value: "SEO · Sitemap · Analytics", detail: "Search discovery and usage visibility are built into the publishing lifecycle." },
    ],
    decisions: [
      { title: "Build the CMS into the product", detail: "The private administration area uses the same Next.js application and data model as the public site, avoiding the operational overhead of a separate CMS." },
      { title: "Model editorial state explicitly", detail: "Draft, featured and published states make content lifecycle decisions visible and manageable rather than relying on manual code changes." },
      { title: "Use document-oriented storage for content", detail: "MongoDB and Mongoose fit flexible article, category and tag structures while still providing schema validation at the application layer." },
      { title: "Treat discovery as part of publishing", detail: "Sitemap generation, metadata, related content and analytics are handled alongside content creation so publishing is more than simply rendering an article page." },
    ],
    outcome:
      "A self-managed publishing product demonstrating full-stack ownership across editorial tooling, authentication, content modelling, discovery and production delivery.",
  },
  {
    slug: "rcn-mobile-app",
    index: "09",
    name: "RCN Mobile App",
    type: "React Native Community App",
    short: "Bilingual community mobile app covering membership, donations, news, notices, media, maps and organisational information.",
    summary:
      "A React Native application that brings community information and member-facing services into one mobile experience, including news, notices, membership, donations, downloads, video, location and transparency-oriented sections.",
    stack: ["React Native", "React Navigation", "TanStack Query", "Axios", "i18next", "React Native Maps"],
    visual: "/projects/rcn-mobile-app-real.svg",
    period: "Mobile Project",
    role: "React Native Developer",
    featured: false,
    challenge:
      "Organise many content and service areas into a maintainable mobile experience while supporting bilingual content and API-driven updates.",
    contribution: [
      "Built navigation and screen flows for news, notices, membership, donations, downloads, videos and organisational information.",
      "Integrated API data with Axios and TanStack Query, including app-focus refresh behaviour.",
      "Added English/Nepali localisation with i18next.",
      "Implemented map/location functionality and media-oriented screens.",
      "Worked on payment-related membership/donation flows with eSewa and Khalti assets and supporting UI.",
    ],
    highlights: ["English / Nepali localisation", "Membership & donations", "News & notices", "Maps", "Media & downloads", "React Query data flows"],
    architecture: ["React Native UI", "React Navigation", "REST APIs", "TanStack Query cache", "i18next", "Maps / device features"],
    proofPoints: [
      { label: "Languages", value: "English + Nepali", detail: "The mobile experience supports bilingual navigation and content through application-level localisation." },
      { label: "Community services", value: "Membership · Donations", detail: "Member-facing actions sit alongside information, media and organisational content." },
      { label: "Data delivery", value: "API + Query cache", detail: "Remote content is fetched and refreshed through Axios and TanStack Query rather than unmanaged screen requests." },
      { label: "Native features", value: "Maps · Media · Downloads", detail: "The app combines web-service data with mobile-specific discovery and content experiences." },
    ],
    decisions: [
      { title: "Centralise server state with TanStack Query", detail: "API data, caching and refresh behaviour are managed outside individual screens, reducing duplicated loading logic across news, notices and service areas." },
      { title: "Make localisation structural", detail: "i18next is integrated at the application level so English and Nepali are treated as first-class experiences rather than duplicated screen implementations." },
      { title: "Use navigation to organise a broad product", detail: "React Navigation separates many community sections into predictable flows while preserving a consistent mobile shell." },
      { title: "Keep payment-facing journeys contextual", detail: "Membership and donation experiences are integrated alongside the relevant community flows, with eSewa and Khalti support reflected in the mobile UI." },
    ],
    outcome:
      "A bilingual community mobile product combining API-driven content, membership and donation journeys, localisation, maps and media within a maintainable React Native architecture.",
  },
  {
    slug: "salesnayak",
    index: "10",
    name: "SalesNayak",
    type: "SPG Client / Field Sales Mobile App",
    short: "React Native field-sales companion with background location, attendance support, push notifications and web/native integration.",
    summary:
      "An SPG Technologies client project: a React Native mobile companion for SalesNayak that connects a web-based field-sales platform with native device capabilities including location permissions, periodic tracking and Firebase-powered notifications.",
    stack: ["React Native", "Firebase Messaging", "Notifee", "Geolocation", "Axios", "AsyncStorage", "WebView"],
    visual: "/projects/salesnayak-real.svg",
    period: "SPG Technologies · Client Project",
    role: "Software / React Native Developer",
    featured: false,
    challenge:
      "Bridge an existing web application with native mobile capabilities while handling modern permission rules, background-location disclosure and actionable push notifications.",
    contribution: [
      "Integrated the SalesNayak web application inside a React Native WebView with two-way message handling.",
      "Implemented foreground/background location permission flows and periodic field-location updates.",
      "Synchronised employee/company identifiers and device tokens with backend APIs.",
      "Integrated Firebase Cloud Messaging and Notifee for foreground and launch-time notifications.",
      "Added notification actions for deep navigation and call handling.",
    ],
    highlights: ["SPG client project", "Background location", "Field-visit tracking", "Firebase notifications", "WebView bridge", "Backend API sync"],
    architecture: ["React Native shell", "WebView bridge", "Device permissions", "Location services", "FCM / Notifee", "SalesNayak APIs"],
    proofPoints: [
      { label: "Integration pattern", value: "Web + Native", detail: "An existing web field-sales product is extended through a React Native shell instead of being rebuilt from scratch." },
      { label: "Location", value: "Foreground + Background", detail: "Permission-aware location workflows support periodic field activity updates." },
      { label: "Notifications", value: "FCM + Notifee", detail: "Push events can surface while the app is active and when users re-enter from a notification." },
      { label: "Identity sync", value: "Employee · Company · Device", detail: "Mobile identifiers and tokens are synchronised with backend APIs so native events remain tied to the correct user context." },
    ],
    decisions: [
      { title: "Extend the web platform instead of duplicating it", detail: "A WebView bridge preserves the existing SalesNayak web experience while React Native adds capabilities that require native device access." },
      { title: "Make permissions part of the product flow", detail: "Location access is requested and handled explicitly because modern mobile platforms distinguish foreground and background tracking permissions." },
      { title: "Keep native and web contexts synchronised", detail: "Two-way messaging and backend identity synchronisation ensure WebView actions, employee data and device state remain connected." },
      { title: "Use actionable notifications", detail: "Firebase Messaging and Notifee support navigation and call-related actions, turning push messages into workflow entry points rather than passive alerts." },
    ],
    outcome:
      "A hybrid field-sales mobile integration that preserves an existing web product while adding permission-aware tracking, native notifications and device-to-backend synchronisation.",
  },
  {
    slug: "medical-learning-mobile",
    index: "11",
    name: "Medical Learning App",
    type: "Mobile Learning / Exam Platform",
    short: "React Native medical-learning app with scheduled tests, practice, flashcards, analytics, multimedia and paid plans.",
    summary:
      "A feature-rich React Native learning application supporting scheduled and category-based tests, test sessions, review workflows, flashcards, articles, podcasts, video content, analytics and subscription/payment journeys.",
    stack: ["React Native", "Redux", "React Navigation", "Axios", "Victory Native", "eSewa", "Khalti"],
    visual: "/projects/medical-learning-mobile-real.svg",
    period: "SPG Technologies · Client Project",
    role: "Software / React Native Developer",
    featured: false,
    challenge:
      "Deliver a dense learning and examination product on mobile while keeping test state, timers, navigation, payments and account workflows consistent.",
    contribution: [
      "Built scheduled, board-based and category-based test experiences with question, timer, flag, review and submit flows.",
      "Implemented dashboard sections for notices, upcoming tests, educational content and board navigation.",
      "Worked on analytics, flashcards, articles, podcasts, video and multimedia content screens.",
      "Integrated Redux-based application state and reusable API request utilities.",
      "Implemented plan, package and payment-related flows including eSewa and Khalti integration screens.",
    ],
    highlights: ["Timed exams", "Practice & review", "Flashcards", "Analytics", "Multimedia learning", "Plan/payment flows"],
    architecture: ["React Native UI", "Redux store", "REST APIs", "Test engine", "Learning content", "Plan / payment flows"],
    proofPoints: [
      { label: "Assessment", value: "Timed · Flag · Review · Submit", detail: "The mobile test engine supports a complete examination journey rather than simple question browsing." },
      { label: "Learning modes", value: "Tests · Flashcards · Media", detail: "Assessment sits alongside articles, podcasts, video and revision-oriented content." },
      { label: "State", value: "Redux", detail: "Cross-screen exam, account and content state is coordinated centrally across a dense mobile product." },
      { label: "Commerce", value: "Plans · eSewa · Khalti", detail: "Subscription/package journeys are integrated into the same learning application." },
    ],
    decisions: [
      { title: "Keep exam state outside individual screens", detail: "Timers, selected answers, flags and review state need to survive navigation, so Redux provides a shared source of truth for the test session." },
      { title: "Separate the test engine from content modules", detail: "Assessment logic is kept distinct from flashcards, articles and multimedia so each learning mode can evolve without destabilising the others." },
      { title: "Use reusable API utilities", detail: "Shared Axios-based request handling reduces repeated networking code across tests, dashboard data, content and account workflows." },
      { title: "Treat payment as an access journey", detail: "Plan, package, eSewa and Khalti screens are connected to learning access rather than presented as isolated checkout UI." },
    ],
    outcome:
      "A multi-module mobile learning product combining a stateful examination engine, revision content, analytics and paid-access journeys in one React Native application.",
  },
  {
    slug: "seven-wonders-food-hub",
    index: "12",
    name: "Seven Wonders Food Hub",
    type: "Restaurant Web Platform",
    short: "Responsive restaurant website with menus, specials, food gallery, ordering calls-to-action, reservations and contact flows.",
    summary:
      "A visual restaurant website built around menu discovery and customer conversion, with featured dishes, daily specials, restaurant information, gallery content and reservation/contact interactions.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Ant Design", "Framer Motion", "AOS"],
    visual: "/projects/seven-wonders-real.svg",
    period: "Web Project",
    role: "Frontend / Full-Stack Developer",
    featured: false,
    challenge:
      "Present a large food catalogue and restaurant brand in a visually engaging way while keeping the site responsive and conversion-focused.",
    contribution: [
      "Built the Next.js restaurant homepage and supporting menu/gallery pages.",
      "Developed reusable components for banners, specials, menu sections, highlights, chef content and contact information.",
      "Implemented reservation and ordering-oriented UI flows.",
      "Added responsive styling and motion using Tailwind, Framer Motion and AOS.",
      "Structured and optimised extensive restaurant imagery and menu assets.",
    ],
    highlights: ["Menu discovery", "Daily specials", "Food gallery", "Reservation UI", "Responsive design", "Motion effects"],
    architecture: ["Next.js pages", "Reusable UI sections", "Menu / media assets", "Motion layer", "Reservation / contact CTAs"],
    proofPoints: [
      { label: "Primary journey", value: "Discover → Desire → Act", detail: "Menu, specials and imagery lead visitors toward ordering, reservation or contact actions." },
      { label: "Visual content", value: "Menus · Specials · Gallery", detail: "Food and brand imagery are central to the customer experience rather than decorative extras." },
      { label: "Frontend", value: "Next.js · Tailwind", detail: "Responsive layouts and reusable sections support a consistent restaurant brand across pages." },
      { label: "Interaction", value: "Framer Motion · AOS", detail: "Motion is used to support visual hierarchy and presentation without replacing the core content." },
    ],
    decisions: [
      { title: "Design around customer intent", detail: "The information architecture puts dishes, specials and actions ahead of company-heavy content because restaurant visitors typically want to decide what to eat and how to order quickly." },
      { title: "Build reusable promotional sections", detail: "Banners, menu groups, chef content and highlights are componentised so seasonal or promotional content can change without restructuring pages." },
      { title: "Optimise imagery as product content", detail: "Restaurant visuals are treated as a core part of the experience, requiring deliberate asset organisation and responsive presentation." },
      { title: "Use motion to guide, not distract", detail: "Framer Motion and AOS enhance section transitions and emphasis while keeping ordering, reservation and menu content immediately accessible." },
    ],
    outcome:
      "A conversion-focused restaurant web experience combining strong visual presentation, reusable Next.js components and clear ordering, reservation and contact journeys.",
  },
  {
    slug: "top-luxury-property-mobile",
    index: "13",
    name: "Top Luxury Property Mobile",
    type: "SPG Client / Property Mobile App",
    short: "React Native mobile wrapper for a property portal with push messaging and native device integration.",
    summary:
      "An SPG Technologies client project: a React Native mobile application that packages an existing property portal into a native experience and adds device-level capabilities such as Firebase messaging, token persistence and mobile lifecycle handling.",
    stack: ["React Native", "Firebase Messaging", "WebView", "Axios", "AsyncStorage", "BootSplash"],
    visual: "/projects/top-luxury-property-mobile-real.svg",
    period: "Professional Mobile Project",
    role: "React Native Developer",
    featured: false,
    challenge:
      "Turn an existing browser-based property platform into a reliable mobile application while preserving session behaviour and integrating native notification services.",
    contribution: [
      "Embedded the property portal in a React Native WebView with cookie/session support.",
      "Integrated Firebase Cloud Messaging and device-token storage.",
      "Implemented WebView-to-native message handling for user/device synchronisation.",
      "Added native splash/lifecycle handling and Android/iOS project configuration.",
    ],
    highlights: ["SPG client project", "Property portal", "React Native WebView", "Firebase messaging", "Device tokens", "Session integration"],
    architecture: ["React Native shell", "WebView portal", "Cookie / session bridge", "Firebase messaging", "Device-token storage", "Backend APIs"],
    proofPoints: [
      { label: "Delivery model", value: "Web portal + Native shell", detail: "The existing property experience is preserved while mobile-specific capability is layered around it." },
      { label: "Session continuity", value: "Cookies + WebView state", detail: "Authentication and browsing context are maintained when moving the browser-based portal into a native container." },
      { label: "Notifications", value: "Firebase Messaging", detail: "The mobile layer can receive push events that are not available to the original browser experience in the same way." },
      { label: "Device identity", value: "Persisted tokens", detail: "Device tokens and user context are stored and synchronised so backend notifications reach the correct installation." },
    ],
    decisions: [
      { title: "Preserve the mature web product", detail: "Using a WebView avoids duplicating a functioning property portal while still providing an installable mobile experience." },
      { title: "Make session handling explicit", detail: "Cookie and lifecycle handling are treated as first-class integration concerns because browser authentication does not automatically behave identically inside a native WebView." },
      { title: "Synchronise native identity with the backend", detail: "Device-token persistence and WebView-to-native messaging connect the property account context to Firebase notification delivery." },
      { title: "Keep the native layer focused", detail: "React Native handles splash, lifecycle, messaging and device integration while property browsing remains owned by the existing portal." },
    ],
    outcome:
      "A pragmatic mobile extension of an existing property platform, adding native lifecycle and push-notification capability while preserving the established web experience.",
  },

  {
    slug: "dental-nursing-guide",
    index: "14",
    name: "Dental Nursing Guide",
    type: "Learning / Content Platform",
    short: "Next.js and Laravel learning platform with blogs, FAQs, search, SEO and structured dental-nursing content.",
    summary:
      "A substantial dental-nursing learning and content platform combining public study resources with a maintainable editorial backend. The system includes structured blogs, FAQ categories and topics, global search, SEO metadata and media workflows.",
    stack: ["Next.js", "TypeScript", "Laravel", "PHP", "MySQL", "RTK Query", "Zod", "SunEditor", "DigitalOcean Spaces"],
    href: "https://dentalnursingguide.com",
    visual: "/projects/dental-nursing-guide-screenshot.webp",
    period: "School of Dental Nursing · UK",
    role: "Full-Stack / PHP Developer",
    featured: false,
    challenge:
      "Build a content-rich learning platform where dental-nursing resources remain easy to discover, edit and publish while supporting search, SEO and scalable content organisation.",
    contribution: [
      "Built and extended Laravel APIs for blogs, FAQs, categories, topics and searchable learning content.",
      "Implemented dynamic Next.js FAQ category pages with slug-based routing, accordion navigation and category-specific question search.",
      "Extended global search so users can discover questions, blogs and active FAQ content from one interface.",
      "Built blog CMS workflows with rich-text editing, categories, tags, feature/status controls and scheduled publishing.",
      "Implemented SEO fields, canonical metadata, Open Graph/Twitter images and media uploads backed by DigitalOcean Spaces.",
      "Worked on production upload limits, storage configuration, FormData handling and API/debugging issues.",
    ],
    highlights: ["FAQ knowledge base", "Blog CMS", "Cross-content search", "SEO & social metadata", "Rich-text publishing", "DigitalOcean Spaces"],
    architecture: ["Next.js frontend", "Laravel API", "MySQL", "Search / content services", "DigitalOcean Spaces", "SEO metadata"],
    proofPoints: [
      { label: "Content model", value: "Blogs · FAQs · Topics · Categories", detail: "Structured content types support both editorial publishing and learning-oriented navigation." },
      { label: "Discovery", value: "Cross-content search", detail: "Users can search across questions, blog content and active FAQ material from a shared interface." },
      { label: "Publishing", value: "Rich text · Scheduling · Status", detail: "Editorial workflows support controlled publication rather than hard-coded page content." },
      { label: "Distribution", value: "SEO · Open Graph · Media", detail: "Search metadata, social previews and object-backed media are treated as part of the publishing system." },
    ],
    decisions: [
      { title: "Model content instead of hard-coding pages", detail: "Blogs, FAQs, categories and topics are stored as structured backend entities so editors can organise and publish material without code changes." },
      { title: "Use slug-based routing for durable URLs", detail: "Next.js category and content routes are driven by readable slugs, supporting discoverability, sharing and maintainable information architecture." },
      { title: "Search across content boundaries", detail: "Global search brings together questions, blogs and FAQ content so users do not need to know which internal content type contains the answer." },
      { title: "Keep large media outside the application database", detail: "DigitalOcean Spaces handles uploaded assets while MySQL stores content and metadata, keeping binary storage separate from relational publishing data." },
    ],
    outcome:
      "A maintainable publishing and learning platform combining structured Laravel content APIs, Next.js discovery, editorial tooling, search, SEO and external media storage.",
  },
  {
    slug: "dental-job-online",
    index: "15",
    name: "Dental Job Online",
    type: "Recruitment / Messaging Platform",
    short: "Dental recruitment platform with recruiter/job-seeker messaging, attachments, notifications and job/application email workflows.",
    summary:
      "A recruitment platform for dental employers and job seekers, with real-time-style messaging, recipient-specific account flows, attachment handling and transactional communication around jobs and applications.",
    stack: ["Laravel", "PHP", "Blade", "MySQL", "Broadcasting", "Storage", "Mailables", "Notifications"],
    href: "https://dentaljobonline.com",
    visual: "/projects/dental-job-online-screenshot.webp",
    period: "School of Dental Nursing · UK",
    role: "PHP / Laravel Developer",
    featured: false,
    challenge:
      "Support reliable communication between recruiters, job seekers and administrators while keeping messages, attachments and transactional notifications tied to the correct account and job context.",
    contribution: [
      "Implemented recruiter/job-seeker messaging using Laravel controllers, persisted message models and broadcast events.",
      "Added message-status handling and attachment storage for richer conversations.",
      "Built branded Laravel Blade email templates for recruiter, applicant and administrative workflows.",
      "Implemented verification, job, applicant and password-reset email/notification flows.",
      "Added recipient-specific login links and account-aware messaging behaviour.",
      "Worked on push/broadcast notification flows around communication events.",
    ],
    highlights: ["Recruiter ↔ job-seeker messaging", "Attachments", "Broadcast events", "Transactional email", "Verification flows", "Admin notifications"],
    architecture: ["Recruiter / job seeker UI", "Laravel controllers", "Message models", "Broadcast events", "Attachment storage", "Mail / notifications"],
    proofPoints: [
      { label: "Participants", value: "Recruiter ↔ Job seeker", detail: "Communication rules account for two different user roles and their job/application context." },
      { label: "Messaging", value: "Persisted + broadcast", detail: "Messages are stored as application state and can also trigger broadcast-style updates." },
      { label: "Rich conversations", value: "Attachments · Status", detail: "Message workflows include uploaded files and delivery/read-style state rather than plain text only." },
      { label: "Transactional flows", value: "Jobs · Applications · Verification", detail: "Email and notification journeys support the wider recruitment lifecycle around messaging." },
    ],
    decisions: [
      { title: "Persist before broadcasting", detail: "Messages are modelled as durable database records, with broadcast events used for delivery updates rather than treating realtime transport as the source of truth." },
      { title: "Carry account context through communication", detail: "Recipient-specific links and role-aware behaviour reduce ambiguity when recruiters and job seekers enter the platform from emails or notifications." },
      { title: "Keep attachments out of message payloads", detail: "Files are handled through storage while message records retain the relationship and metadata needed to reconstruct each conversation." },
      { title: "Use dedicated transactional templates", detail: "Verification, job, applicant and administrative events use targeted Laravel mail/notification flows so communication matches the recipient and action." },
    ],
    outcome:
      "A role-aware recruitment communication system combining durable messaging, event broadcasting, attachments and transactional notifications across recruiter and job-seeker journeys.",
  },
  {
    slug: "omega-bpo-website",
    index: "16",
    name: "Omega BPO Website",
    type: "Corporate Web Platform",
    short: "Corporate Next.js website covering outsourcing services, talent solutions, case studies, contact workflows and rich media.",
    summary:
      "The corporate website for Omega BPO Outsourcing, built as a multi-page Next.js experience presenting services, talent solutions, benefits, case studies, company information and contact journeys.",
    stack: ["Next.js", "React", "Bootstrap", "AOS", "Axios", "SendGrid", "Nodemailer", "Google Maps"],
    href: "https://omegaincorporations.com",
    visual: "/projects/omega-bpo-website-real.svg",
    period: "Omega BPO Outsourcing",
    role: "Mid-Level Developer",
    featured: false,
    challenge:
      "Translate a broad BPO service catalogue into a responsive corporate experience with strong visual presentation, reusable sections and practical lead/contact workflows.",
    contribution: [
      "Built and maintained Next.js pages for company, services, FAQs, privacy, terms and specialist service areas.",
      "Developed reusable sections for benefits, case studies, testimonials, talent management and work-process content.",
      "Implemented responsive navigation, sliders, media sections and animation-enhanced presentation.",
      "Worked on contact submission flows using server-side email integrations.",
      "Integrated supporting UI libraries, mapping and cookie-consent behaviour.",
    ],
    highlights: ["Corporate multi-page site", "Service catalogue", "Case studies", "Contact/email workflows", "Responsive UI", "Rich media"],
    architecture: ["Next.js pages", "Reusable React components", "API/contact route", "Email services", "Media assets"],
    outcome:
      "A full corporate marketing platform showing production frontend work, reusable component design and lead-generation flows.",
  },
  {
    slug: "omega-bpo-wireframe",
    index: "17",
    name: "Omega BPO Interactive Wireframe",
    type: "UI / Interaction Prototype",
    short: "Interactive Next.js/Tailwind concept used to explore a more modern Omega BPO visual direction and motion system.",
    summary:
      "A separate interactive prototype exploring a redesigned visual system for Omega BPO using modern typography, Tailwind-based layout and motion-driven content presentation.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    visual: "/projects/omega-bpo-wireframe-real.svg",
    period: "Omega BPO Outsourcing",
    role: "Mid-Level Developer / Frontend Developer",
    featured: false,
    challenge:
      "Rapidly explore and communicate a new visual direction for a corporate site before committing to a full production redesign.",
    contribution: [
      "Built a separate Next.js/TypeScript prototype rather than modifying the production corporate site directly.",
      "Created reusable atomic elements for animated words, characters, buttons and text fields.",
      "Developed prototype sections for hero content, services, features, process and company information.",
      "Used Tailwind CSS and Framer Motion to test modern spacing, typography and interaction patterns.",
    ],
    highlights: ["Design prototype", "Animated typography", "Framer Motion", "Tailwind design system", "Reusable UI atoms"],
    architecture: ["Next.js", "Atomic UI elements", "Section components", "Framer Motion"],
    outcome:
      "A focused interaction prototype demonstrating rapid UI experimentation and modern frontend motion/design work.",
  },
  {
    slug: "north-india-compressors-mobile",
    index: "18",
    name: "North India Compressors Mobile",
    type: "SPG Client / CRM Mobile Apps",
    short: "React Native admin and customer mobile apps for North India Compressors with CRM access, location support and Firebase messaging.",
    summary:
      "An SPG Technologies client project consisting of separate React Native admin/member and customer applications for North India Compressors CRM workflows, extending the existing web system with native device capabilities.",
    stack: ["React Native", "WebView", "Firebase Messaging", "Geolocation", "Axios", "AsyncStorage"],
    visual: "/projects/north-india-compressors-mobile-real.svg",
    period: "SPG Technologies · Client Project",
    role: "Software / React Native Developer",
    featured: false,
    challenge:
      "Deliver mobile access to an existing CRM for different user groups while preserving web sessions and adding location and notification capabilities where needed.",
    contribution: [
      "Built separate React Native admin/member and customer mobile applications around the existing CRM.",
      "Integrated authenticated WebView flows for member and customer access.",
      "Added Firebase Cloud Messaging and device-token handling to the admin/member app.",
      "Implemented geolocation and backend location-update flows for relevant CRM users.",
      "Configured splash screens, native Android/iOS projects and session/cookie behaviour.",
    ],
    highlights: ["SPG client project", "Admin & customer apps", "CRM WebView", "Firebase messaging", "Geolocation", "Device-token sync"],
    architecture: ["React Native shells", "CRM WebViews", "Firebase", "Location services", "Backend APIs"],
    outcome:
      "Two role-specific mobile applications delivered as part of SPG Technologies client work, extending an existing business CRM with practical native integrations.",
  },
  {
    slug: "htr-care",
    index: "19",
    name: "HTR Care",
    type: "Omega Client / Care Services Platform",
    short: "Accessible care-services website with custom CMS, enquiry and recruitment flows, local SEO pages and cloud media storage.",
    summary:
      "An Omega BPO client project for HTR Care, a UK home-care provider, designed to help families understand care services, find local coverage and submit enquiries while giving the internal team tools to manage content and recruitment information.",
    stack: ["Next.js", "Node.js", "Tailwind CSS", "Azure Blob Storage", "Resend", "CMS", "SEO"],
    href: "https://htrcare.com",
    visual: "/projects/htr-care-screenshot.webp",
    period: "Omega BPO Outsourcing · Client Project",
    role: "Mid-Level Developer / Project Contributor",
    featured: false,
    challenge:
      "Create an accessible, trustworthy and content-manageable care-services website that works well for families, older users and recruitment visitors while supporting strong local search visibility.",
    contribution: [
      "Contributed to a responsive Next.js/Tailwind website for UK domiciliary and home-care services.",
      "Worked with structured service, location, company, blog, FAQ and recruitment content.",
      "Supported custom CMS workflows for editable pages, images and metadata.",
      "Worked on enquiry and recruitment form flows with automated email handling.",
      "Supported SEO-oriented page structure, metadata and local-service landing pages.",
      "Integrated cloud-hosted media workflows using Azure Blob Storage.",
    ],
    highlights: ["Omega client project", "Custom CMS", "Care-service pages", "Location SEO", "Enquiry forms", "Azure media storage"],
    architecture: ["Next.js frontend", "Node.js APIs", "Custom CMS", "Azure Blob Storage", "Resend email", "SEO / local landing pages"],
    proofPoints: [
      { label: "Audience", value: "Families · Applicants · Care users", detail: "The site serves service discovery, enquiry and recruitment journeys with different information needs." },
      { label: "Content", value: "Custom CMS", detail: "Service, location, company, blog, FAQ and recruitment content can be managed without rebuilding page code." },
      { label: "Lead flows", value: "Enquiry + Recruitment", detail: "Structured forms connect public pages to operational email workflows." },
      { label: "Discoverability", value: "Local SEO pages", detail: "Location-focused landing pages support service discovery across different UK coverage areas." },
    ],
    decisions: [
      { title: "Design for accessibility and trust", detail: "Care-service pages prioritise readable structure, clear calls to action and straightforward navigation because visitors may be older users or family members making important decisions." },
      { title: "Make content editable by the organisation", detail: "A custom CMS separates day-to-day service, recruitment and information updates from developer deployments." },
      { title: "Store media outside the application bundle", detail: "Azure Blob Storage provides a dedicated place for managed images and assets instead of coupling uploaded media to the deployed frontend." },
      { title: "Connect forms directly to operations", detail: "Enquiry and recruitment submissions feed email workflows through Resend so user actions translate into actionable internal communication." },
    ],
    outcome:
      "A production client platform combining accessible care-service UX, editable content, enquiry and recruitment journeys, cloud media storage and location-oriented discoverability.",
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
