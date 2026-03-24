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

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  email: string;
  skills: string[];
  experience: Experience[];
  projects: Project[];
}

export function getPortfolio(): PortfolioData {
  return {
    name: "Your Name",
    title: "Full-Stack Developer",
    bio: "Passionate developer with experience building modern web applications.",
    email: "hello@example.com",
    skills: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL", "Docker"],
    experience: [
      {
        company: "Acme Corp",
        role: "Senior Developer",
        period: "2023 – Present",
        description:
          "Led development of customer-facing web applications using React and Node.js.",
      },
      {
        company: "Startup Inc",
        role: "Full-Stack Developer",
        period: "2021 – 2023",
        description:
          "Built REST APIs with Express and designed responsive UIs with React.",
      },
    ],
    projects: [
      {
        title: "Portfolio Website",
        description:
          "A responsive portfolio site built with React, TypeScript, and Express.",
        technologies: ["React", "TypeScript", "Express"],
        link: "https://github.com/yourusername/portfolio",
      },
      {
        title: "Task Manager",
        description:
          "A full-stack task management app with authentication and real-time updates.",
        technologies: ["React", "Node.js", "PostgreSQL", "WebSockets"],
        link: "https://github.com/yourusername/task-manager",
      },
    ],
  };
}
