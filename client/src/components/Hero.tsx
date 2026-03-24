import profileImg from '../assets/profile.jpg';

interface HeroProps {
  name: string;
  title: string;
  bio: string;
  email: string;
}

export function Hero({ name, title, bio, email }: HeroProps) {
  return (
    <header id="hero" className="hero">
      <img
        className="hero-avatar"
        src={profileImg}
        alt={`${name} headshot`}
      />
      <h1>{name}</h1>
      <p className="title">{title}</p>
      <p className="bio">{bio}</p>
      <a className="email" href={`mailto:${email}`}>
        {email}
      </a>
    </header>
  );
}
