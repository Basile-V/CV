import type { Locale } from "./types";

export const en: Locale = {
  lang: "en",
  path: "/en/",
  profile: {
    name: "Basile",
    title: "Software Engineer Java / Spring / Kafka / Angular",
    level: "Mid-level — 4 years of experience",
    tagline:
      "Software engineer with expertise mainly in Java and Kafka, complemented by experience in Angular. I've mostly worked on e-commerce and banking projects, and I'm now ready to take on new challenges.",
    about: [
      "I see myself today as full stack: understanding both back-end and front-end concerns helps me better grasp each side's needs and keep communication smooth between teams throughout a project.",
      "I'm curious by nature and enjoy exposing myself to a wide range of technologies to broaden my skill set. That broader view helps me pick the right tools for each project, based on its goals and constraints.",
      "I was lucky to start my career surrounded by demanding senior developers, who passed on solid best practices from day one. I keep building on them to deliver maintainable projects, built to last.",
    ],
    languages: [{ name: "English", level: "Fluent" }],
  },
  skills: [
    { label: "Back-end", items: ["Java 25", "Kotlin", "Spring Boot", "Quarkus"] },
    { label: "Front-end", items: ["Angular", "HTML", "CSS", "JavaScript"] },
    { label: "Messaging", items: ["Kafka", "Kafka Streams", "Kafka Connect", "Avro"] },
    { label: "Databases", items: ["PostgreSQL", "MySQL", "Redis"] },
    { label: "DevOps", items: ["Docker", "Kubernetes", "GCP", "AWS", "Datadog"] },
    { label: "CI/CD", items: ["GitHub Actions", "Jenkins", "Git", "GitLab CI"] },
    { label: "Craft", items: ["TDD", "BDD", "Clean Code", "SOLID", "DDD"] },
  ],
  experiences: [
    {
      id: "bforbank",
      company: "BForBank",
      role: "Software Engineer",
      period: "Oct 2025 — Jul 2026",
      context:
        "Galaxy Program: rebuilding Core Banking around a hexagonal architecture. Worked with the Data Platform team (multichannel notifications, consent management, campaigns) and the Payment Flow & Methods team (outbound mobility, card fees, transactions).",
      highlights: [
        "Worked on a hexagonal architecture made up of 7 microservices",
        "Built REST APIs in Java 21 with Spring Boot 3, then transitioned to Java 25",
        "Set up an event-driven Kafka architecture on GCP (Streams and Connect)",
        "Managed versioning and created Avro schemas",
        "Versioned PostgreSQL databases with Liquibase",
        "Refactored one microservice into two separate microservices",
        "Configured and deployed on Kubernetes, maintained GitLab CI/CD pipelines",
        "Unit tests with Cucumber, following SOLID principles and design patterns",
        "Used Gemini and Gemini CLI, analyzed logs with Datadog",
      ],
      stack: ["Java 25", "Spring Boot 3", "Kafka", "GCP", "PostgreSQL", "Kubernetes", "Avro", "Liquibase"],
    },
    {
      id: "cacib",
      company: "Crédit Agricole CIB",
      role: "Full-Stack Java / Kafka Developer",
      period: "Feb 2025 — Oct 2025 (6 months)",
      context:
        "Blofi project: a trading application for managing and creating deals for traders. Squad of 1 project manager, 2 QA engineers and 3 developers.",
      highlights: [
        "Worked on an architecture made up of 6 microservices",
        "Built REST APIs in Java 21, Spring Boot 3 and Quarkus v3",
        "Built the Blofi Kafka microservice from scratch",
        "Producer: implemented a new table and sent deals via Kafka",
        "Built a scheduler for sending deals, with secrets managed in Vault",
        "Built UIs (HTML, CSS, vanilla JS) with editable dynamic tables",
        "Handled the microservice's security, Kubernative configuration",
        "Tested the whole application ahead of UAT deployment",
      ],
      stack: ["Java 21", "Spring Boot 3", "Quarkus", "Kafka", "PostgreSQL", "Vault", "Vanilla JS"],
    },
    {
      id: "decathlon-canada",
      company: "Decathlon (Canada)",
      role: "Java / Kotlin Developer",
      period: "Apr 2022 — Jun 2024",
      context:
        "Within the Backend E-commerce team, built features, fixed bugs and wrote tests for the decathlon.ca website.",
      highlights: [
        "Built and consumed REST APIs in Java 21 / Spring Boot 3",
        "Created microservices with Spring Cloud Gateway",
        "Upgraded the payment method to a new REST API",
        "Reworked delivery time estimation by remodeling the PostgreSQL database",
        "Set up and managed Redis, CI/CD with GitHub Actions",
        "Implemented Kafka message consumption (Consumer), Kafka Streams for product stock",
        "Built endpoints for replaying Kafka messages",
        "Payment widget and map widget in React TS",
        "Integration and unit tests with Mockito, pull requests at 80% code coverage",
      ],
      stack: ["Java 21", "Spring Boot 3", "Kafka", "PostgreSQL", "Redis", "React TS", "GitHub Actions"],
    },
    {
      id: "decathlon-btwin",
      company: "Decathlon — Btwin",
      role: "TypeScript / Angular Developer",
      period: "1 year",
      context:
        "Designed internal web applications to support product engineers' work (testing, technical specs, knowledge archiving), within a team of 4 front-end developers.",
      highlights: [
        "Migrated from a Google Sheets base to a PostgreSQL database",
        "Chose the architecture and integrated an admin panel",
        "Built a comparison tool with Chart.js",
        "Built features in Angular, with a Python back-end",
        "Built a CMS for non-technical users with AWS bucket storage and GSpread",
        "Wrote the specifications and independently designed the mockups",
      ],
      stack: ["Angular", "Python", "PostgreSQL", "AWS", "Chart.js", "Node.js"],
    },
  ],
  projects: [
    {
      id: "onepay",
      title: "OnePay V2",
      company: "Decathlon Canada",
      challenge:
        "Rebuild a critical payment method whose V1 was undocumented, without ever breaking refunds already in progress.",
      context:
        "OnePay is decathlon.ca's payment method: a critical project where any mistake directly hits sales. The inherited V1 had almost no documentation, and refunds remain possible for a year after purchase.",
      actions: [
        "Fully reverse-engineered V1 to understand how it really worked",
        "Wrote a reference wiki to serve as the foundation for V2",
        "Kept V1 running alongside V2 for the whole one-year refund window",
        "Set up a webhook to update the order status as soon as the payment status is received",
        "Worked with the front-end team to integrate the new payment widget and the new paths",
        "Worked with DevOps to whitelist the new paths in use",
      ],
      results: [
        "Reference documentation created where none existed",
        "V1 and V2 run side by side so refunds can still be honored over the year",
      ],
      learnings:
        "On a critical system with no documentation, the real work starts before the code: understand and document before changing anything.",
      stack: ["Java 21", "Spring Boot 3", "GCP"],
    },
    {
      id: "galaxy",
      title: "Galaxy — preparing the production rollout",
      company: "BForBank",
      challenge:
        "Make sure the infrastructure could withstand the switchover of 3 million existing customers, with no latency risk.",
      context:
        "In BForBank's Core Banking rebuild (Galaxy program, hexagonal architecture), the go-live had to migrate a base of 3 million existing customers. I joined the program to secure delivery milestones and the technical quality of deliverables.",
      actions: [
        "Built a pool of customer accounts to simulate real-world volumes",
        "Ran load tests locally then in the dev environment, to check the infrastructure held up with no latency risk",
        "Created a Kubernetes job running Liquibase migrations before each microservice starts",
        "Added Datadog metrics to monitor service behavior",
        "Picked up Kafka Streams, Connect and the outbox / tombstone patterns",
      ],
      results: [
        "Load handling verified before go-live, locally then in dev",
        "Database migrations run automatically before every service start",
        "Datadog metrics available to monitor the services",
      ],
      learnings:
        "Securing a high-stakes production rollout is mostly about anticipation: reproduce real volumes and automate everything you can before D-day.",
      stack: ["Java 25", "Spring Boot 3", "Kafka", "Kubernetes", "Liquibase", "Datadog", "GCP"],
    },
    {
      id: "gateway",
      title: "Gateway (Geolook)",
      company: "Decathlon Canada",
      challenge:
        "Offload our microservices from behaviors already available in Decathlon United's APIs, while keeping response times minimal.",
      context:
        "In Decathlon Canada's e-commerce platform, several of our microservices reproduced behaviors already exposed by Decathlon United's (the worldwide level) APIs. Gateway, also called Geolook, is the microservice that steps in to provide them instead, with a cache to minimize response time.",
      actions: [
        "Built the Gateway (Geolook) microservice with Spring Cloud Gateway, to expose the behaviors of Decathlon United's APIs",
        "Set up a cache to minimize response time, using Redis so the cache is shared across the service's multiple instances",
        "Built filters within the Gateway",
        "Handled production releases",
      ],
      results: [
        "Decommissioned some of our microservices' features, now provided by Gateway",
        "Response time minimized thanks to the cache",
      ],
      learnings:
        "Putting a cache in front of remote APIs avoids duplicating their logic in every service, while speeding up responses.",
      stack: ["Java 21", "Spring Cloud Gateway", "Redis", "GCP"],
    },
  ],
  education: {
    degree: "Engineering degree in Computer Science",
    school: "Polytech Lyon",
    year: "2022",
  },
  certification: {
    title: "Augmented Engineer — AI Training",
    subtitle: "10 modules completed — 100%",
    items: [
      "Structuring projects for AI agents (AGENTS.md, MCP, tooling)",
      "Securing and customizing agents (skills, custom tools)",
      "AI-driven TDD workflow, from prompts to custom agents",
      "Advanced architectures: subagents and background agents",
    ],
  },
  contactLinks: [
    { label: "vandervalle.basile@gmail.com", href: "mailto:vandervalle.basile@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/basile-vandervalle/", external: true },
    { label: "GitHub", href: "https://github.com/Basile-V", external: true },
  ],
  ui: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      menuLabel: "Menu",
    },
    hero: {
      greeting: "Hi, I'm",
      ctaPrimary: "See my journey",
      ctaSecondary: "Get in touch",
    },
    about: {
      eyebrow: "About",
      heading: "A full-stack profile, built on strong practices",
      formationLabel: "Education",
      languagesLabel: "Languages",
      certificationLabel: "Certification",
    },
    skills: {
      eyebrow: "Skills",
      heading: "A toolkit built for event-driven backends",
    },
    experience: {
      eyebrow: "Journey",
      heading: "Professional Experience",
      currentTag: "Current",
    },
    projects: {
      eyebrow: "Challenges tackled",
      heading: "Standout missions",
      challengeLabel: "The challenge",
      contextLabel: "Context",
      actionsLabel: "What I put in place",
      resultsLabel: "Results",
      learningsLabel: "What I took away",
    },
    contact: {
      eyebrow: "Contact",
      heading: "Let's talk about your next project",
      text: "Available to discuss a backend, Kafka or event-driven architecture opportunity. The simplest way: an email.",
    },
    scrollTop: "Back to top",
    langSwitch: {
      label: "FR",
      ariaLabel: "Passer en français",
    },
  },
};
