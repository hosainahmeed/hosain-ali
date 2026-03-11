import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { Draggable } from "gsap/all";
import { projectImages } from "../constants/image.index";
import "../styles/project.css";

gsap.registerPlugin(Draggable, InertiaPlugin);

// ─── Project Data ────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: "01",
    title: "Aether UI",
    category: "Design System",
    tags: ["React", "TypeScript", "Figma"],
    year: "2024",
    desc: "A comprehensive component library built for scale — covering 80+ components with full accessibility support and dark-mode tokens.",
    image: projectImages.project,
    color: "#c8b97e",
  },
  {
    id: "02",
    title: "Nova Dashboard",
    category: "Web App",
    tags: ["Next.js", "Tailwind", "Recharts"],
    year: "2024",
    desc: "Real-time analytics dashboard for a SaaS platform processing 2M+ events daily with WebSocket streaming and custom data visualizations.",
    image: projectImages.project,
    color: "#7eb8c8",
  },
  {
    id: "03",
    title: "Solara Brand",
    category: "Branding",
    tags: ["Identity", "Motion", "Web"],
    year: "2023",
    desc: "Full brand identity and marketing site for a climate-tech startup — from logo system to launch campaign with animated hero sequences.",
    image: projectImages.project,
    color: "#c87e9a",
  },
  {
    id: "04",
    title: "Meridian App",
    category: "Mobile",
    tags: ["React Native", "Expo", "Maps"],
    year: "2023",
    desc: "Cross-platform navigation app with custom map renderer, offline tile caching, and AR-assisted wayfinding for large venues.",
    image: projectImages.project,
    color: "#7ec87e",
  },
  {
    id: "05",
    title: "Pulse CMS",
    category: "Full Stack",
    tags: ["Node.js", "PostgreSQL", "S3"],
    year: "2023",
    desc: "Headless CMS with a visual block editor, multi-tenant support, and a CDN-integrated media pipeline serving 50K+ assets.",
    image: projectImages.project,
    color: "#c8a07e",
  },
  {
    id: "06",
    title: "Echo CMS",
    category: "Full Stack",
    tags: ["Node.js", "PostgreSQL", "S3"],
    year: "2023",
    desc: "Headless CMS with a visual block editor, multi-tenant support, and a CDN-integrated media pipeline serving 50K+ assets.",
    image: projectImages.project,
    color: "#c8a07e",
  },
  {
    id: "07",
    title: "Fusion CMS",
    category: "Full Stack",
    tags: ["Node.js", "PostgreSQL", "S3"],
    year: "2023",
    desc: "Headless CMS with a visual block editor, multi-tenant support, and a CDN-integrated media pipeline serving 50K+ assets.",
    image: projectImages.project,
    color: "#c8a07e",
  },
  {
    id: "08",
    title: "Sphere CMS",
    category: "Full Stack",
    tags: ["Node.js", "PostgreSQL", "S3"],
    year: "2023",
    desc: "Headless CMS with a visual block editor, multi-tenant support, and a CDN-integrated media pipeline serving 50K+ assets.",
    image: projectImages.project,
    color: "#c8a07e",
  },
  {
    id: "09",
    title: "Spectrum CMS",
    category: "Full Stack",
    tags: ["Node.js", "PostgreSQL", "S3"],
    year: "2023",
    desc: "Headless CMS with a visual block editor, multi-tenant support, and a CDN-integrated media pipeline serving 50K+ assets.",
    image: projectImages.project,
    color: "#c8a07e",
  },
  {
    id: "10",
    title: "Vortex CMS",
    category: "Full Stack",
    tags: ["Node.js", "PostgreSQL", "S3"],
    year: "2023",
    desc: "Headless CMS with a visual block editor, multi-tenant support, and a CDN-integrated media pipeline serving 50K+ assets.",
    image: projectImages.project,
    color: "#c8a07e",
  },
];

const CARD_COUNT = 20;
const SNAP_ANGLE = 360 / CARD_COUNT;

// ─── Component ───────────────────────────────────────────────────────────────
export default function ProjectsSection() {
  const wheelRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<Draggable[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const prevProjectRef = useRef(PROJECTS[0]);
  const [transitioning, setTransitioning] = useState(false);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Mouse spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    const el = sectionRef.current;
    el?.addEventListener("mousemove", handleMouseMove);
    return () => el?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Wheel setup
  useEffect(() => {
    const wheel = wheelRef.current;
    if (!wheel) return;
    const cards = gsap.utils.toArray<HTMLDivElement>(".proj-wheel__card");

    const setup = () => {
      const radius = wheel.offsetWidth / 2;
      const center = radius;
      const slice = (2 * Math.PI) / cards.length;
      gsap.set(cards, {
        x: (i) => center + radius * Math.sin(i * slice),
        y: (i) => center - radius * Math.cos(i * slice),
        rotation: (i) => (i * 360) / cards.length,
        xPercent: -50,
        yPercent: -50,
      });
    };

    setup();
    window.addEventListener("resize", setup);

    draggableRef.current = Draggable.create(wheel, {
      type: "rotation",
      inertia: true,
      snap: { rotation: gsap.utils.snap(SNAP_ANGLE) },
      onDrag() {
        updateActiveFromRotation(this.rotation);
      },
      onThrowUpdate() {
        updateActiveFromRotation(this.rotation);
      },
    });

    return () => {
      draggableRef.current.forEach((d) => d.kill());
      window.removeEventListener("resize", setup);
    };
  }, []);

  const updateActiveFromRotation = (rotation: number) => {
    const normalized = ((rotation % 360) + 360) % 360;
    const idx = Math.round(normalized / SNAP_ANGLE) % CARD_COUNT;
    const project = PROJECTS[idx % PROJECTS.length];
    if (project.id !== prevProjectRef.current.id) {
      prevProjectRef.current = project;
      setTransitioning(true);
      setTimeout(() => {
        setActiveProject(project);
        setTransitioning(false);
      }, 180);
    }
  };

  // const handleCardClick = (i: number) => {
  //   const project = PROJECTS[i % PROJECTS.length];
  //   setTransitioning(true);
  //   setTimeout(() => {
  //     setActiveProject(project);
  //     setTransitioning(false);
  //   }, 180);

  //   // Snap wheel to this card
  //   const targetRotation = -(i * SNAP_ANGLE);
  //   if (draggableRef.current[0]) {
  //     gsap.to(wheelRef.current, {
  //       rotation: targetRotation,
  //       duration: 0.8,
  //       ease: "power3.out",
  //     });
  //   }
  // };

  return (
    <>

      <section
        className="proj-root"
        ref={sectionRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="proj-noise" />
        <div className="proj-grid-bg" />
        <div
          className="proj-spotlight"
          style={{
            background: isHovered
              ? `radial-gradient(700px circle at ${mousePos.x}% ${mousePos.y}%, rgba(200,185,126,0.06), transparent 70%)`
              : "none",
          }}
        />

        <div className="proj-inner">

          {/* ── Header ── */}
          <div className={`proj-header proj-reveal ${visible ? "visible" : ""} proj-reveal-d1`}>
            <div>
              <div className="proj-eyebrow">Selected Work</div>
              <h2 className="proj-title">
                MY<br />
                <span className="proj-title-accent">PROJECTS.</span>
              </h2>
            </div>
            <div className="proj-count">
              {String(PROJECTS.length).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")} projects
            </div>
          </div>

          {/* ── Detail Panel ── */}
          <div className={`proj-detail-panel proj-reveal ${visible ? "visible" : ""} proj-reveal-d2`}>

            {/* Left — text info */}
            <div className="proj-detail-left">
              <div>
                <div className="proj-detail-id">Project — {activeProject.id}</div>
                <div className={`proj-detail-title line-clamp-1 text-nowrap ${transitioning ? "fade-out" : ""}`}>
                  {activeProject.title}
                </div>
                <div className="proj-detail-category">{activeProject.category}</div>
                <div className="proj-tags">
                  {activeProject.tags.map(t => (
                    <span className="proj-tag" key={t}>{t}</span>
                  ))}
                </div>
                <p className={`proj-detail-desc ${transitioning ? "fade-out" : ""}`}>
                  {activeProject.desc}
                </p>
              </div>
              <div className="proj-detail-actions" style={{ marginTop: "2rem" }}>
                <a href="#" className="proj-btn-primary">
                  <span>View Project</span>
                  <span>→</span>
                </a>
                <a href="#" className="proj-btn-ghost">
                  <span>Live Demo</span>
                  <span style={{ fontSize: "0.7rem" }}>↗</span>
                </a>
              </div>
            </div>

            <div className="proj-divider-v" />

            {/* Right — image */}
            <div className="proj-detail-right">
              <div className="proj-image-wrap">
                <div className="proj-image-frame">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className={transitioning ? "fade-out" : ""}
                    draggable={false}
                  />
                  <div className="proj-image-overlay" />
                  <div className="proj-image-year">{activeProject.year}</div>
                  <div
                    className="proj-image-accent-line"
                    style={{ background: activeProject.color }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Project Nav Strip ── */}
          <div className={`proj-nav-strip proj-reveal ${visible ? "visible" : ""} proj-reveal-d3`}>
            {PROJECTS.map((p) => (
              <div
                key={p.id}
                className={`proj-nav-item ${activeProject.id === p.id ? "active" : ""}`}
                onClick={() => {
                  setTransitioning(true);
                  setTimeout(() => {
                    setActiveProject(p);
                    setTransitioning(false);
                  }, 180);
                }}
              >
                <span className="proj-nav-num">{p.id}</span>
                <span className="proj-nav-name">{p.title}</span>
                <span className="proj-nav-dot" />
              </div>
            ))}
          </div>

        </div>
        {/* ── Bottom bar ── */}
        <div
          className={`proj-reveal ${visible ? "visible" : ""} proj-reveal-d4`}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1.2rem 2.5rem",
            maxWidth: "100%",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", color: "rgba(240,236,228,0.2)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            © {new Date().getFullYear()} — Crafted with precision
          </span>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", color: "rgba(200,185,126,0.4)", letterSpacing: "0.1em" }}>
            SECTION — 04 / WORK
          </span>
        </div>

      </section>
    </>
  );
}