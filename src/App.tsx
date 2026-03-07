import ContactUsSection from './components/ContactUsSection';
import FooterSection from './components/FooterSection';
import HeaderSection from './components/HeaderSection';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';


export default function App() {
  return (
    <>
      <div className="portfolio-root area">
        <HeaderSection />
        <HeroSection />
        <SkillsSection />
        {/* <ProjectSection /> */}
        {/* <TimeLine /> */}
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