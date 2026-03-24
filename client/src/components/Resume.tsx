const RESUME_URL = "/angelinaresume.pdf";

export function Resume() {
  return (
    <section id="resume" className="section resume">
      <h2>Resume</h2>
      <div className="resume-actions">
        <a
          className="btn btn-primary"
          href={RESUME_URL}
          download="Angelina_Resume.pdf"
        >
          Download Resume
        </a>
        <a
          className="btn btn-outline"
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in New Tab
        </a>
      </div>
    </section>
  );
}
