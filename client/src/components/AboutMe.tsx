interface AboutMeProps {
  aboutMe: string;
  location: string;
  linkedin: string;
}

export function AboutMe({ aboutMe, location, linkedin }: AboutMeProps) {
  return (
    <section id="about" className="section about-me">
      <h2>About Me</h2>
      <p className="about-text">{aboutMe}</p>
      <div className="about-details">
        <span className="about-location">📍 {location}</span>
        <a className="about-linkedin" href={linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn Profile →
        </a>
      </div>
    </section>
  );
}
