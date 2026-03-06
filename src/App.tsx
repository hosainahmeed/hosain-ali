import FooterSection from './components/FooterSection';
import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
// import TimeLine from "./components/TimeLine";


export default function App() {
  return (
    <>
      <div className="portfolio-root area">
        <HeaderSection />
        <HeroSection />
        <SkillsSection />
        <ProjectSection />
        {/* <TimeLine /> */}
        <FooterSection />

      </div>
    </>
  );
}