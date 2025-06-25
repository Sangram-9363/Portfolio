import NavBar from "./components/navbar/NavBar";
import HeroMain from "./components/hero/HeroMain";
import HeroGradient from "./components/hero/HeroGradient";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import FooterMain from "./components/footerSection/FooterMain";

const App = () => {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavBar />
      <HeroMain />
      <HeroGradient />
      <SubHeroMain />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
};

export default App;
