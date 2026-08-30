import { useEffect, useState, useRef } from "react";

interface SectionItem {
  id: string;
  label: string;
}

const SECTIONS: SectionItem[] = [
  { id: "hero", label: "Hero" },
  { id: "skills", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function SidebarNav() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const element = document.getElementById(SECTIONS[i].id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    // On touch devices, briefly show label then hide
    setHoveredSection(id);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setHoveredSection(null);
    }, 1500);
  };

  return (
    <aside
      className="fixed right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end pointer-events-auto select-none"
      aria-label="Section Navigation"
    >
      <div className="flex flex-col items-end gap-2.5 sm:gap-3.5 py-3 sm:py-4 px-1.5 sm:px-2.5 rounded-2xl bg-[#0c0c0e]/75 backdrop-blur-lg border border-white/10 shadow-2xl">
        {SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          const isHovered = hoveredSection === section.id;

          return (
            <div
              key={section.id}
              className="relative flex items-center justify-end group cursor-pointer min-h-[28px] sm:min-h-[24px] px-1 sm:px-1.5 touch-manipulation"
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => scrollToSection(section.id)}
            >
              {/* Floating section name tooltip on hover/tap */}
              {isHovered && (
                <div className="absolute right-full mr-2 sm:mr-3 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase whitespace-nowrap bg-[#111114] text-[#A291FD] border border-[#A291FD]/40 shadow-[0_0_15px_rgba(162,145,253,0.25)] animate-in fade-in slide-in-from-right-2 duration-150 pointer-events-none">
                  {section.label}
                </div>
              )}

              {/* Responsive Dash / Tick Mark Indicator */}
              <div
                className={`h-[2.5px] sm:h-[3px] rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-6 sm:w-8 bg-[#A291FD] shadow-[0_0_10px_#A291FD]"
                    : isHovered
                    ? "w-5 sm:w-6 bg-white"
                    : "w-3 sm:w-4 bg-white/25 group-hover:bg-white/60"
                }`}
              />
            </div>
          );
        })}
      </div>
    </aside>
  );
}
