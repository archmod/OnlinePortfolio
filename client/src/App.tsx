import "./App.css";
import { usePortfolio } from "./hooks/usePortfolio";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { LookingFor } from "./components/LookingFor";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";

function App() {
  const { data, loading, error } = usePortfolio();

  if (loading) return <div className="loader">Loading…</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!data) return null;

  return (
    <>
      <Navbar name={data.name} />
      <div className="portfolio">
        <Hero name={data.name} title={data.title} bio={data.bio} email={data.email} />
        <AboutMe aboutMe={data.aboutMe} location={data.location} linkedin={data.linkedin} />
        <Skills skills={data.skills} />
        <Experience experience={data.experience} />
        <LookingFor />
        {data.projects.length > 0 && <Projects projects={data.projects} />}
        <Contact email={data.email} linkedin={data.linkedin} />
        <footer className="footer">
          <p>
            &copy; {new Date().getFullYear()} {data.name}. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
