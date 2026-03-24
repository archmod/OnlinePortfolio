import type { Project } from "../types/portfolio";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-list">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              project.link.startsWith("#") ? (
                <a
                  href={project.link}
                  className="project-link"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(project.link!)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View Project &rarr;
                </a>
              ) : (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project &rarr;
                </a>
              )
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
