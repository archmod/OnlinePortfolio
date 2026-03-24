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
  aboutMe: string;
  email: string;
  linkedin: string;
  location: string;
  skills: string[];
  experience: Experience[];
  projects: Project[];
}

export function getPortfolio(): PortfolioData {
  return {
    name: "Angelina Stillman",
    title: "Hospitality & Housekeeping Professional",
    bio: "Reliable and hard-working professional with experience in housekeeping, café service, and customer-facing roles. Organised, detail-oriented, and always ready to learn.",
    aboutMe: "Hi, I'm Angelina! I'm based in Pascoe Vale, Victoria, and I'm passionate about delivering great service and keeping things running smoothly — whether that's behind a coffee machine, at a hotel front desk, or tidying up a guest room. I've worked across hospitality and housekeeping roles, picking up skills in commercial cleaning, food safety, customer service, and teamwork along the way. I'm currently open to opportunities as a Bartender, Café Worker, Housekeeper, or Pick Packer. I pride myself on being organised, dependable, and a fast learner. If you're looking for someone who shows up, works hard, and brings a positive attitude — let's connect!",
    email: "angelina.nicola9@gmail.com",
    linkedin: "https://www.linkedin.com/in/angelina-stillman-0a93b8375/",
    location: "Pascoe Vale, Victoria, Australia",
    skills: ["Commercial Cleaning", "Food Safety", "Customer Service", "Housekeeping", "Cash Register Operation", "Food & Drink Preparation", "Teamwork", "Time Management"],
    experience: [
      {
        company: "voco Hotels",
        role: "Housekeeper",
        period: "Jun 2025 – Present",
        description:
          "Cleaning rooms and bathrooms, making beds, and restocking supplies. Part-time, on-site in Melbourne, VIC.",
      },
      {
        company: "The Austral Cafe",
        role: "Café Worker",
        period: "Mar 2022 – Aug 2023",
        description:
          "Customer service, working the register, serving and prepping foods and drinks, and maintaining cleanliness. Part-time role in Australia.",
      },
      {
        company: "Glenn Innes Motel",
        role: "Housekeeper",
        period: "Mar 2021 – Dec 2021",
        description:
          "Cleaned rooms, made beds, and kept facilities organised. Full-time commercial cleaning role in Australia.",
      },
    ],
    projects: [],
  };
}
