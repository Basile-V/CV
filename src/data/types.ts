export interface Profile {
  name: string;
  title: string;
  level: string;
  tagline: string;
  about: string[];
  languages: { name: string; level: string }[];
}

export interface SkillCategory {
  label: string;
  items: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  current?: boolean;
  context: string;
  highlights: string[];
  stack: string[];
}

export interface Project {
  id: string;
  title: string;
  company: string;
  pitch: string;
  highlight: string;
  stack: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export interface Certification {
  title: string;
  subtitle?: string;
  items: string[];
}

export interface ContactLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface UiStrings {
  nav: {
    about: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    formationLabel: string;
    languagesLabel: string;
    certificationLabel: string;
  };
  skills: {
    eyebrow: string;
    heading: string;
  };
  experience: {
    eyebrow: string;
    heading: string;
    currentTag: string;
  };
  projects: {
    eyebrow: string;
    heading: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    text: string;
  };
  scrollTop: string;
  langSwitch: {
    label: string;
    ariaLabel: string;
  };
}

export interface Locale {
  lang: "fr" | "en";
  path: string;
  profile: Profile;
  skills: SkillCategory[];
  experiences: Experience[];
  projects: Project[];
  education: Education;
  certification: Certification;
  contactLinks: ContactLink[];
  ui: UiStrings;
}
