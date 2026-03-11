import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import ContactUsSection from './components/ContactUsSection';
import FooterSection from './components/FooterSection';
import HeaderSection from './components/HeaderSection';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';

export default function App() {
  const lenis = new Lenis();

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return (
    <>
      <div className="portfolio-root area flex flex-col gap-12 justify-between">
        <div>
          <HeaderSection />
          <HeroSection />
        </div>
        <SkillsSection />
        {/* <ProjectSection /> */}
        <ProjectsSection />
        <ContactUsSection />
        <FooterSection />

      </div>
      <div className="fixed top-0 overflow-hidden pointer-events-none opacity-15 left-0 w-full min-h-screen">
        <svg viewBox='0 0 400 3000' xmlns='http://www.w3.org/2000/svg'>
          <filter id='noiseFilter'>
            <feTurbulence
              type='fractalNoise'
              baseFrequency='7.18'
              numOctaves='4'
              stitchTiles='stitch' />
          </filter>

          <rect width='100%' height='100%' filter='url(#noiseFilter)' />
        </svg>
      </div>
    </>
  );
}