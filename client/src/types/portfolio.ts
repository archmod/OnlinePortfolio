export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  aboutMe: string;
  email: string;
  linkedin: string;
  location: string;
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
}
