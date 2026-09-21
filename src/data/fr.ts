import type { Locale } from "./types";

export const fr: Locale = {
  lang: "fr",
  path: "/",
  profile: {
    name: "Basile",
    title: "Software Engineer Java / Spring / Kafka / Angular",
    level: "Confirmé — 4 ans d'expérience",
    tagline:
      "Software engineer avec une expertise principalement en Java et Kafka, complétée par de l'expérience en Angular. J'ai surtout travaillé sur des projets e-commerce et bancaires, et je suis aujourd'hui prêt à relever de nouveaux défis.",
    about: [
      "Je me positionne aujourd'hui comme full stack : comprendre aussi bien les enjeux back-end que front-end me permet de mieux cerner les besoins de chaque partie et d'assurer une communication fluide entre les équipes tout au long d'un projet.",
      "Je suis curieux et j'aime m'exposer à des technologies variées pour étoffer mon socle de compétences. Cette vision large m'aide à choisir les outils les plus adaptés à chaque projet, en fonction de ses objectifs et de ses contraintes.",
      "J'ai eu la chance de démarrer ma carrière entouré de développeurs seniors exigeants, qui m'ont transmis dès le début les bonnes pratiques du métier. Je continue de les cultiver et de les approfondir pour livrer des projets maintenables, pensés pour durer.",
    ],
    languages: [{ name: "Anglais", level: "Courant" }],
  },
  skills: [
    { label: "Back-end", items: ["Java 25", "Kotlin", "Spring Boot", "Quarkus"] },
    { label: "Front-end", items: ["Angular", "HTML", "CSS", "JavaScript"] },
    { label: "Messaging", items: ["Kafka", "Kafka Streams", "Kafka Connect", "Avro"] },
    { label: "Bases de données", items: ["PostgreSQL", "MySQL", "Redis"] },
    { label: "DevOps", items: ["Docker", "Kubernetes", "GCP", "AWS", "Datadog"] },
    { label: "CI/CD", items: ["GitHub Actions", "Jenkins", "Git", "GitLab CI"] },
    { label: "Craft", items: ["TDD", "BDD", "Clean Code", "SOLID", "DDD"] },
  ],
  experiences: [
    {
      id: "bforbank",
      company: "BForBank",
      role: "Software Engineer",
      period: "Oct. 2025 — Juil. 2026",
      context:
        "Programme Galaxy : refonte du Core Banking en architecture hexagonale. Intervention sur les équipes Data Platform (notifications multicanales, consentements, campagnes) et Payment Flow & Methods (mobilité sortante, frais carte, transactions).",
      highlights: [
        "Intervention sur une architecture hexagonale composée de 7 microservices",
        "Développement d'API REST en Java 21 avec Spring Boot 3, puis transition vers Java 25",
        "Mise en place d'une architecture événementielle Kafka sur GCP (Streams et Connect)",
        "Gestion des versions et création de schémas Avro",
        "Versionnement des bases de données PostgreSQL avec Liquibase",
        "Refactorisation d'un microservice en deux microservices distincts",
        "Configuration et déploiement dans Kubernetes, maintenance des pipelines GitLab CI/CD",
        "Tests unitaires avec Cucumber, respect des principes SOLID et design patterns",
        "Utilisation de Gemini et Gemini CLI, analyse des logs avec Datadog",
      ],
      stack: ["Java 25", "Spring Boot 3", "Kafka", "GCP", "PostgreSQL", "Kubernetes", "Avro", "Liquibase"],
    },
    {
      id: "cacib",
      company: "Crédit Agricole CIB",
      role: "Développeur FS Java / Kafka",
      period: "Fév. 2025 — Oct. 2025 (6 mois)",
      context:
        "Projet Blofi : application de trading pour gérer et créer des deals à l'attention des traders. Squad de 1 chef de projet, 2 QA et 3 développeurs.",
      highlights: [
        "Intervention sur une architecture composée de 6 microservices",
        "Développement d'API REST en Java 21, Spring Boot 3 et Quarkus v3",
        "Création from scratch du microservice Blofi via Kafka",
        "Producer : implémentation d'une nouvelle table et envoi des deals via Kafka",
        "Création d'un Scheduler pour l'envoi des deals, secrets gérés dans Vault",
        "Création d'IHM (HTML, CSS, Vanilla JS) avec tableaux dynamiques modifiables",
        "Gestion de la sécurité du microservice, configuration Kubernative",
        "Tests de l'ensemble de l'application pour le déploiement en UAT",
      ],
      stack: ["Java 21", "Spring Boot 3", "Quarkus", "Kafka", "PostgreSQL", "Vault", "Vanilla JS"],
    },
    {
      id: "decathlon-canada",
      company: "Decathlon (Canada)",
      role: "Développeur Java / Kotlin",
      period: "Avr. 2022 — Juin 2024",
      context:
        "Au sein de l'équipe Backend E-commerce, développement de fonctionnalités, correction de bugs et implémentation de tests pour le site decathlon.ca.",
      highlights: [
        "Développement et consommation d'API REST en Java 21 / Spring Boot 3",
        "Création de microservices avec Spring Cloud Gateway",
        "Mise à niveau du moyen de paiement vers une nouvelle API REST",
        "Refonte de l'estimation du temps de livraison en remodulant la base de données PostgreSQL",
        "Création et gestion de Redis, CI/CD avec GitHub Actions",
        "Implémentation et lecture de messages Kafka (Consumer), Kafka Streams pour le stock produit",
        "Création d'endpoints pour la relecture des messages Kafka",
        "Widget de paiement et widget de map en React TS",
        "Tests d'intégration et unitaires avec Mockito, pull requests à 80% de code coverage",
      ],
      stack: ["Java 21", "Spring Boot 3", "Kafka", "PostgreSQL", "Redis", "React TS", "GitHub Actions"],
    },
    {
      id: "decathlon-btwin",
      company: "Decathlon — Btwin",
      role: "Développeur TypeScript / Angular",
      period: "1 an",
      context:
        "Conception d'applications web internes pour faciliter le travail des ingénieurs produits (tests, spécifications techniques, archivage des connaissances), au sein d'une équipe de 4 développeurs front-end.",
      highlights: [
        "Transition d'une base Google Sheets vers une base de données PostgreSQL",
        "Sélection de l'architecture et intégration d'un panneau d'administration",
        "Création d'un outil de comparaison avec Chart.js",
        "Développement des fonctionnalités sous Angular, back-end en Python",
        "CMS adaptable pour non-informaticiens avec stockage sur bucket AWS et GSpread",
        "Élaboration du cahier des charges et conception autonome des maquettes",
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
        "Refondre un moyen de paiement critique dont la V1 n'était pas documentée, sans jamais casser les remboursements en cours.",
      context:
        "OnePay est le moyen de paiement de decathlon.ca : un projet critique, où toute erreur impacte directement les ventes. La V1, héritée, n'avait quasiment aucune documentation, et les remboursements restent possibles pendant un an après l'achat.",
      actions: [
        "Rétro-ingénierie complète de la V1 pour comprendre son fonctionnement réel",
        "Rédaction d'un wiki de référence servant de base à la V2",
        "Préservation de la V1 en parallèle de la V2 pendant toute la fenêtre de remboursement d'un an",
        "Mise en place d'un webhook pour mettre à jour le statut de la commande dès réception du statut du paiement",
        "Coordination avec l'équipe front pour intégrer le nouveau widget de paiement et les nouveaux paths",
        "Coordination avec les DevOps pour le whitelisting des nouveaux paths utilisés",
      ],
      results: [
        "Documentation de référence créée là où il n'en existait pas",
        "V1 et V2 cohabitent pour continuer à honorer les remboursements sur un an",
      ],
      learnings:
        "Sur un système critique sans documentation, le vrai travail commence avant le code : comprendre et documenter avant de faire évoluer.",
      stack: ["Java 21", "Spring Boot 3", "GCP"],
    },
    {
      id: "galaxy",
      title: "Galaxy — préparer la mise en production",
      company: "BForBank",
      challenge:
        "Garantir que l'infrastructure tienne la bascule de 3 millions de clients déjà existants, sans risque de latence.",
      context:
        "Dans la refonte du Core Banking de BForBank (programme Galaxy, architecture hexagonale), la mise en production devait migrer une base de 3 millions de clients existants. J'ai rejoint le programme pour sécuriser les jalons de livraison et la qualité technique des livrables.",
      actions: [
        "Création d'un pool de comptes clients pour simuler la volumétrie réelle",
        "Tests de charge en local puis en environnement de dev, pour vérifier la tenue de l'infrastructure et l'absence de risque de latence",
        "Création d'un job Kubernetes exécutant les migrations Liquibase avant le lancement de chaque microservice",
        "Ajout de métriques Datadog pour suivre le comportement des services",
        "Prise en main de Kafka Streams, Connect et des patterns outbox / tombstone",
      ],
      results: [
        "Tenue en charge vérifiée avant la mise en production, en local puis en dev",
        "Migrations de base exécutées automatiquement avant chaque démarrage de service",
        "Métriques Datadog disponibles pour suivre les services",
      ],
      learnings:
        "Sécuriser une mise en production à fort enjeu, c'est surtout anticiper : reproduire la volumétrie réelle et automatiser tout ce qui peut l'être avant le jour J.",
      stack: ["Java 25", "Spring Boot 3", "Kafka", "Kubernetes", "Liquibase", "Datadog", "GCP"],
    },
    {
      id: "gateway",
      title: "Gateway (Geolook)",
      company: "Decathlon Canada",
      challenge:
        "Décharger nos microservices des comportements déjà disponibles sur les API de Decathlon United, tout en gardant un temps de réponse minimal.",
      context:
        "Dans la plateforme e-commerce de Decathlon Canada, plusieurs de nos microservices reproduisaient des comportements déjà exposés par les API de Decathlon United (le niveau mondial). Gateway, aussi appelé Geolook, est le microservice qui s'interpose pour les fournir à leur place, avec un cache pour minimiser le temps de réponse.",
      actions: [
        "Création du microservice Gateway (Geolook) avec Spring Cloud Gateway, pour exposer les comportements des API de Decathlon United",
        "Mise en place d'un cache pour minimiser le temps de réponse, avec Redis pour partager le cache entre les différentes instances du service",
        "Création de filtres au sein du Gateway",
        "Mises en production",
      ],
      results: [
        "Décommissionnement de certaines fonctionnalités de nos microservices, désormais fournies par Gateway",
        "Temps de réponse minimisé grâce au cache",
      ],
      learnings:
        "Mettre un cache devant des API distantes évite de dupliquer leur logique dans chaque service, tout en accélérant les réponses.",
      stack: ["Java 21", "Spring Cloud Gateway", "Redis", "GCP"],
    },
  ],
  education: {
    degree: "Ingénieur informatique",
    school: "Polytech Lyon",
    year: "2022",
  },
  certification: {
    title: "Augmented Engineer — Formation IA",
    subtitle: "10 modules validés — 100 %",
    items: [
      "Structuration de projet pour agents IA (AGENTS.md, MCP, outillage)",
      "Sécurisation et personnalisation des agents (skills, outils custom)",
      "Workflow TDD piloté par l'IA, du prompt à l'agent sur mesure",
      "Architectures avancées : subagents et agents en tâche de fond",
    ],
  },
  contactLinks: [
    { label: "vandervalle.basile@gmail.com", href: "mailto:vandervalle.basile@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/basile-vandervalle/", external: true },
    { label: "GitHub", href: "https://github.com/Basile-V", external: true },
  ],
  ui: {
    nav: {
      about: "À propos",
      experience: "Expériences",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
      menuLabel: "Menu",
    },
    hero: {
      greeting: "Bonjour, je suis",
      ctaPrimary: "Voir mon parcours",
      ctaSecondary: "Me contacter",
    },
    about: {
      eyebrow: "À propos",
      heading: "Un profil full stack, formé aux bonnes pratiques",
      formationLabel: "Formation",
      languagesLabel: "Langues",
      certificationLabel: "Certification",
    },
    skills: {
      eyebrow: "Compétences",
      heading: "Une boîte à outils pensée pour le backend événementiel",
    },
    experience: {
      eyebrow: "Parcours",
      heading: "Expériences professionnelles",
      currentTag: "En cours",
    },
    projects: {
      eyebrow: "Défis relevés",
      heading: "Missions marquantes",
      challengeLabel: "Le défi",
      contextLabel: "Contexte",
      actionsLabel: "Ce que j'ai mis en place",
      resultsLabel: "Résultats",
      learningsLabel: "Ce que j'en retiens",
    },
    contact: {
      eyebrow: "Contact",
      heading: "Discutons de votre prochain projet",
      text: "Disponible pour échanger sur une opportunité backend, Kafka ou architecture événementielle. Le plus simple : un email.",
    },
    scrollTop: "Retour en haut de page",
    langSwitch: {
      label: "EN",
      ariaLabel: "Switch to English",
    },
  },
};
