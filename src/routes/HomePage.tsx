import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import Testimonials from "../components/Testimonials";
import ContactUsSection from "../components/ContactUsSection";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 justify-between">
      <div>
        <HeroSection />
      </div>
      <SkillsSection />
      <ProjectsSection />
      <Testimonials />
      <ContactUsSection />
    </div>
  );
}
