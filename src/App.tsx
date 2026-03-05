import FooterSection from './components/FooterSection';
import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";


export default function App() {
  return (
    <>
      <div className="portfolio-root">
        <HeaderSection />
        <HeroSection />
        <SkillsSection />
        <ProjectSection />
        <FooterSection />
      </div>
    </>
  );
}