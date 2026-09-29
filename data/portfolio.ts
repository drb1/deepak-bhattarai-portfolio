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

  {
    slug: "open-notes",
    index: "08",
    name: "Open Notes",
    type: "Publishing / Blog Platform",
    short: "Full-stack publishing platform with authentication, editorial workflows, SEO and rich content management.",
    summary:
      "A Next.js publishing platform for technology, travel and general-interest content, with public discovery pages and a private administration area for managing posts, categories, tags and publishing status.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "NextAuth", "React Query", "Ant Design", "Vercel Blob"],
    visual: "/projects/open-notes.svg",
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
    architecture: ["Next.js UI", "App Router APIs", "NextAuth", "MongoDB / Mongoose", "Vercel services"],
    outcome:
      "A complete personal publishing platform demonstrating full-stack product ownership across editorial tooling, authentication, data modelling and public content delivery.",
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
    visual: "/projects/rcn-mobile-app.svg",
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
    architecture: ["React Native", "Navigation", "REST APIs", "React Query cache", "Localisation", "Native device features"],
    outcome:
      "A broad React Native application showing experience with real-world navigation, API state, multilingual UX and community-service workflows.",
  },
  {
    slug: "salesnayak",
    index: "10",
    name: "SalesNayak",
    type: "SPG Client / Field Sales Mobile App",
    short: "React Native field-sales companion with background location, attendance support, push notifications and web/native integration.",
    summary:
      "A React Native mobile companion for SalesNayak that connects a web-based field-sales platform with native device capabilities including location permissions, periodic tracking and Firebase-powered notifications.",
    stack: ["React Native", "Firebase Messaging", "Notifee", "Geolocation", "Axios", "AsyncStorage", "WebView"],
    visual: "/projects/salesnayak.svg",
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
    highlights: ["Background location", "Field-visit tracking", "Firebase notifications", "Native permission flows", "WebView bridge", "Backend API sync"],
    architecture: ["React Native shell", "WebView app", "Device permissions", "FCM / Notifee", "Location services", "SalesNayak APIs"],
    outcome:
      "A production-oriented mobile integration that extends a field-sales web platform with native tracking and notification capabilities.",
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
    visual: "/projects/medical-learning-mobile.svg",
    period: "Professional Mobile Project",
    role: "React Native Developer",
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
    architecture: ["React Native", "Redux store", "REST APIs", "Test engine", "Content modules", "Payment flows"],
    outcome:
      "A substantial mobile education product demonstrating complex state management, exam UX and multi-module React Native development.",
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
    visual: "/projects/seven-wonders-food-hub.svg",
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
    architecture: ["Next.js", "Reusable UI components", "Static/media assets", "Reservation/contact flows"],
    outcome:
      "A polished customer-facing restaurant experience demonstrating branded UI, responsive design and conversion-oriented frontend development.",
  },
  {
    slug: "top-luxury-property-mobile",
    index: "13",
    name: "Top Luxury Property Mobile",
    type: "SPG Client / Property Mobile App",
    short: "React Native mobile wrapper for a property portal with push messaging and native device integration.",
    summary:
      "A React Native mobile application that packages an existing property portal into a native experience and adds device-level capabilities such as Firebase messaging, token persistence and mobile lifecycle handling.",
    stack: ["React Native", "Firebase Messaging", "WebView", "Axios", "AsyncStorage", "BootSplash"],
    visual: "/projects/top-luxury-property-mobile.svg",
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
    highlights: ["Property portal", "React Native WebView", "Firebase messaging", "Device tokens", "Session integration"],
    architecture: ["React Native shell", "WebView portal", "Firebase messaging", "Backend API integration"],
    outcome:
      "A mobile delivery layer that extends a web property platform with native app packaging and push-notification capabilities.",
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
    visual: "/projects/dental-nursing-guide.svg",
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
    architecture: ["Next.js frontend", "Laravel API", "MySQL", "Search/content services", "DigitalOcean Spaces"],
    outcome:
      "A production learning-content platform demonstrating end-to-end work across Laravel APIs, Next.js UX, editorial tooling, search and SEO.",
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
    visual: "/projects/dental-job-online.svg",
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
    architecture: ["Laravel application", "Message models", "Broadcast events", "Storage attachments", "Mail / notifications", "MySQL"],
    outcome:
      "A recruitment communication system demonstrating Laravel backend depth across messaging, events, storage and transactional user journeys.",
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
    visual: "/projects/omega-bpo-website.svg",
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
    visual: "/projects/omega-bpo-wireframe.svg",
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
    visual: "/projects/north-india-compressors-mobile.svg",
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
    visual: "/projects/htr-care.svg",
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
    architecture: ["Next.js frontend", "Node.js APIs", "Custom CMS", "Azure Blob Storage", "Resend email", "SEO/local landing pages"],
    outcome:
      "A scalable care-services web platform delivered as part of Omega BPO client work, combining accessible UX, content management, enquiry generation and location-focused discoverability.",
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
