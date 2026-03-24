interface ContactProps {
  email: string;
  linkedin: string;
}

export function Contact({ email, linkedin }: ContactProps) {
  return (
    <section id="contact" className="section contact">
      <h2>Get In Touch</h2>
      <p className="contact-text">
        I'm currently open to new opportunities. Whether you have a role in mind or just want to say
        hello, I'd love to hear from you!
      </p>
      <div className="contact-actions">
        <a className="btn btn-primary" href={`mailto:${email}`}>
          Send Me an Email
        </a>
        <a
          className="btn btn-outline"
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
}
