interface HeroProps {
  name: string;
  title: string;
  bio: string;
  email: string;
}

export function Hero({ name, title, bio, email }: HeroProps) {
  return (
    <header className="hero">
      <h1>{name}</h1>
      <p className="title">{title}</p>
      <p className="bio">{bio}</p>
      <a className="email" href={`mailto:${email}`}>
        {email}
      </a>
    </header>
  );
}
