export interface Profile {
  name: string;
  title: string;
  tagline: string;
  keywords: string[];
  bio: string;
  experience_years: number;
  location: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
    resume: string;
  };
}

export interface Skill {
  name: string;
  level: 1 | 2 | 3;
  lastUsed: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skills {
  categories: SkillCategory[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  achievements: string[];
  stacks: string[];
}

export interface ExperienceData {
  timeline: Experience[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  role: string;
  stacks: string[];
  problem: string;
  solution: string;
  result: string;
  links: {
    demo?: string;
    github?: string;
  };
}

export interface ProjectsData {
  projects: Project[];
}


