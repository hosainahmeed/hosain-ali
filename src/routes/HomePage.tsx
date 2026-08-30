import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import Testimonials from "../components/Testimonials";
import ContactUsSection from "../components/ContactUsSection";
import SidebarNav from "../components/SidebarNav";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 justify-between relative">
      <SidebarNav />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <ContactUsSection />
      </section>
    </div>
  );
}
