import type { Experience as ExperienceType } from "../types/portfolio";

interface ExperienceProps {
  experience: ExperienceType[];
}

const companyEmoji: Record<string, string> = {
  "voco Hotels": "🏨",
  "The Austral Cafe": "☕",
  "Glenn Innes Motel": "🛏️",
};

export function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="timeline">
        {experience.map((exp) => (
          <div key={`${exp.company}-${exp.role}`} className="timeline-item">
            <div className="timeline-logo">
              {companyEmoji[exp.company] || "🏢"}
            </div>
            <div className="timeline-body">
              <h3>
                {exp.role} <span className="at">@</span> {exp.company}
              </h3>
              <span className="period">{exp.period}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
