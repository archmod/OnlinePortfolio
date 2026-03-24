import type { Experience as ExperienceType } from "../types/portfolio";

interface ExperienceProps {
  experience: ExperienceType[];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section className="section">
      <h2>Experience</h2>
      <div className="timeline">
        {experience.map((exp) => (
          <div key={`${exp.company}-${exp.role}`} className="timeline-item">
            <h3>
              {exp.role} <span className="at">@</span> {exp.company}
            </h3>
            <span className="period">{exp.period}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
