import { useState, useRef, useEffect } from "react";
import { useLoaderData, useNavigate, Link } from "react-router-dom";
import type { Project } from "./loaders";
import "../styles/project.css";

interface ProjectDetailData {
  project: Project;
  allProjects: Project[];
}

/* ─── Screenshot Carousel ─── */
function ScreenshotCarousel({
  screenshots,
  title,
}: {
  screenshots: string[];
  title: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll);
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="appstore-carousel-wrap">
      {canScrollLeft && (
        <button
          className="appstore-carousel-btn appstore-carousel-btn--left"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}
      <div className="appstore-carousel" ref={scrollRef}>
        {screenshots.map((src, i) => (
          <div key={i} className="appstore-screenshot-card">
            <img
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      {canScrollRight && (
        <button
          className="appstore-carousel-btn appstore-carousel-btn--right"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════ */
/*  APP STORE LAYOUT — for category === "Mobile"  */
/* ═══════════════════════════════════════════════ */
function AppStoreLayout({ project, allProjects }: ProjectDetailData) {
  const navigate = useNavigate();
  const [descExpanded, setDescExpanded] = useState(false);
  const [whatsNewExpanded, setWhatsNewExpanded] = useState(false);

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  const displayDesc = project.fullDesc || project.desc;

  return (
    <div className="appstore-root">
      <div className="appstore-inner">
        {/* ── Back Nav ── */}
        <button
          onClick={() => navigate("/projects")}
          className="appstore-back-btn"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span>Projects</span>
        </button>

        {/* ── Hero: App Icon + Title + Get Button ── */}
        <div className="appstore-hero">
          <div className="appstore-icon-wrap">
            <img
              src={project.appIcon || project.image}
              alt={`${project.title} icon`}
              className="appstore-icon"
            />
          </div>
          <div className="appstore-hero-info">
            <h1 className="appstore-title">{project.title}</h1>
            <p className="appstore-subtitle">{project.desc}</p>
            <p className="appstore-developer">
              {project.developer || project.client || "Independent Developer"}
            </p>
            <div className="appstore-hero-actions">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="appstore-get-btn"
                >
                  GET
                </a>
              )}
              {project.price && (
                <span className="appstore-price-label">
                  {project.price === "Free" ? "Free" : project.price}
                  {project.price === "Free" && " · No In-App Purchases"}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ── Screenshot Carousel ── */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="appstore-section">
            <ScreenshotCarousel
              screenshots={project.screenshots}
              title={project.title}
            />
          </section>
        )}

        {/* ── Description ── */}
        <section className="appstore-section appstore-section--bordered">
          <div className="appstore-desc-block">
            <p
              className={`appstore-desc-text ${descExpanded ? "appstore-desc-text--expanded" : ""}`}
            >
              {displayDesc}
            </p>
            {displayDesc.length > 150 && (
              <button
                className="appstore-more-btn"
                onClick={() => setDescExpanded(!descExpanded)}
              >
                {descExpanded ? "less" : "more"}
              </button>
            )}
          </div>
        </section>

        {/* ── What's New ── */}
        {project.whatsNew && project.whatsNew.length > 0 && (
          <section className="appstore-section appstore-section--bordered">
            <div className="appstore-section-header">
              <h2 className="appstore-section-title">What's New</h2>
              {project.version && (
                <span className="appstore-version-badge">
                  Version {project.version}
                  {project.versionDate && (
                    <span className="appstore-version-date">
                      {" "}
                      · {project.versionDate}
                    </span>
                  )}
                </span>
              )}
            </div>
            <ul
              className={`appstore-whatsnew-list ${whatsNewExpanded ? "appstore-whatsnew-list--expanded" : ""}`}
            >
              {project.whatsNew.map((item, i) => (
                <li key={i} className="appstore-whatsnew-item">
                  <span className="appstore-whatsnew-bullet">•</span>
                  {item}
                </li>
              ))}
            </ul>
            {project.whatsNew.length > 3 && (
              <button
                className="appstore-more-btn"
                onClick={() => setWhatsNewExpanded(!whatsNewExpanded)}
              >
                {whatsNewExpanded ? "less" : "more"}
              </button>
            )}
          </section>
        )}

        {/* ── Key Features (like App Preview section) ── */}
        {project.features && project.features.length > 0 && (
          <section className="appstore-section appstore-section--bordered">
            <h2 className="appstore-section-title">Key Features</h2>
            <div className="appstore-features-grid">
              {project.features.map((feat, idx) => {
                const parts = feat.split(/\s*—\s*|\s*:\s*/);
                const title = parts.length > 1 ? parts[0].trim() : "";
                const body =
                  parts.length > 1 ? parts.slice(1).join(" — ").trim() : feat;

                return (
                  <div key={idx} className="appstore-feature-card">
                    <div className="appstore-feature-top">
                      <div className="appstore-feature-pointer">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                      <span className="appstore-feature-badge">
                        0{idx + 1}
                      </span>
                    </div>
                    {title ? (
                      <>
                        <h4 className="appstore-feature-title">{title}</h4>
                        <p className="appstore-feature-text">{body}</p>
                      </>
                    ) : (
                      <p className="appstore-feature-text">{body}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ── Information / Tech Stack Section ── */}
        <section className="appstore-section appstore-section--bordered">
          <h2 className="appstore-section-title">Information</h2>
          <div className="appstore-info-table">
            <div className="appstore-info-row">
              <span className="appstore-info-key">Developer</span>
              <span className="appstore-info-val">
                {project.developer || project.client || "—"}
              </span>
            </div>
            <div className="appstore-info-row">
              <span className="appstore-info-key">Category</span>
              <span className="appstore-info-val">
                {project.appCategory || project.category}
              </span>
            </div>
            {project.appSize && (
              <div className="appstore-info-row">
                <span className="appstore-info-key">Size</span>
                <span className="appstore-info-val">{project.appSize}</span>
              </div>
            )}
            <div className="appstore-info-row">
              <span className="appstore-info-key">Role</span>
              <span className="appstore-info-val">
                {project.role || "Lead Developer"}
              </span>
            </div>
            <div className="appstore-info-row">
              <span className="appstore-info-key">Duration</span>
              <span className="appstore-info-val">
                {project.duration || "—"}
              </span>
            </div>
            {project.compatibility && (
              <div className="appstore-info-row appstore-info-row--compat">
                <span className="appstore-info-key">Compatibility</span>
                <div className="appstore-compat-list">
                  {project.compatibility.map((c, i) => (
                    <span key={i} className="appstore-compat-item">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="appstore-info-row">
              <span className="appstore-info-key">Technologies</span>
              <div className="appstore-tags-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="appstore-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Quick Links ── */}
        <section className="appstore-section appstore-section--bordered">
          <div className="appstore-links-row">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="appstore-link-card"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <div>
                  <div className="appstore-link-title">Live Demo</div>
                  <div className="appstore-link-sub">
                    Visit the live application
                  </div>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="appstore-link-arrow"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="appstore-link-card"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <div>
                  <div className="appstore-link-title">Source Code</div>
                  <div className="appstore-link-sub">Browse the repository</div>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="appstore-link-arrow"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            )}
          </div>
        </section>

        {/* ── Footer Navigation (Prev / Next) ── */}
        <div className="appstore-footer-nav">
          <Link
            to={`/projects/${prevProject.id}`}
            className="appstore-nav-card"
          >
            <div className="appstore-nav-direction">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Previous Project
            </div>
            <div className="appstore-nav-name">{prevProject.title}</div>
          </Link>
          <Link
            to={`/projects/${nextProject.id}`}
            className="appstore-nav-card appstore-nav-card--right"
          >
            <div className="appstore-nav-direction">
              Next Project
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
            <div className="appstore-nav-name">{nextProject.title}</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════ */
/*  DEFAULT LAYOUT — for all other categories    */
/* ═══════════════════════════════════════════════ */
function DefaultLayout({ project, allProjects }: ProjectDetailData) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"preview" | "wireframe">(
    "preview",
  );

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div className="proj-root min-h-screen py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="proj-inner max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* ── Top Navigation Bar ── */}
        <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.07)] pb-4 sm:pb-6 flex-wrap gap-3">
          <button
            onClick={() => navigate("/projects")}
            className="proj-btn-ghost text-xs py-2 px-3 sm:px-4 tracking-wider flex items-center gap-2 group cursor-pointer"
          >
            <span>←</span>
            <span>BACK TO PROJECTS</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="proj-count font-mono text-[11px] sm:text-xs text-[rgba(240,236,228,0.4)] hidden sm:inline">
              PROJECT {project.id} /{" "}
              {String(allProjects.length).padStart(2, "0")}
            </span>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-btn-primary py-2 px-3 sm:px-4 text-[11px] sm:text-xs flex items-center gap-2"
              >
                <span>LIVE DEMO</span>
                <span>↗</span>
              </a>
            )}
          </div>
        </div>

        {/* ── Hero Section ── */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="proj-eyebrow font-mono text-[11px] sm:text-xs">
              PROJECT — {project.id} // {project.category}
            </div>
            <div className="font-mono text-[11px] sm:text-xs text-[rgba(200,185,126,0.7)] px-3 py-1 border border-[rgba(255,255,255,0.12)] rounded-full bg-[#111114]">
              YEAR {project.year}
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Syne'] leading-tight sm:leading-none">
            {project.title}
          </h1>

          {/* Responsive Metadata Grid */}
          <div className="proj-meta-grid grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6 rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#111114]">
            <div>
              <div className="font-mono text-[9px] sm:text-[10px] uppercase text-[rgba(240,236,228,0.4)] tracking-widest mb-1">
                Category
              </div>
              <div className="font-['Syne'] font-bold text-xs sm:text-sm text-white">
                {project.category}
              </div>
            </div>
            <div>
              <div className="font-mono text-[9px] sm:text-[10px] uppercase text-[rgba(240,236,228,0.4)] tracking-widest mb-1">
                Client
              </div>
              <div className="font-['Syne'] font-bold text-xs sm:text-sm text-white">
                {project.client || "Personal / R&D"}
              </div>
            </div>
            <div>
              <div className="font-mono text-[9px] sm:text-[10px] uppercase text-[rgba(240,236,228,0.4)] tracking-widest mb-1">
                Role
              </div>
              <div className="font-['Syne'] font-bold text-xs sm:text-sm text-[#A291FD]">
                {project.role || "Lead Developer"}
              </div>
            </div>
            <div>
              <div className="font-mono text-[9px] sm:text-[10px] uppercase text-[rgba(240,236,228,0.4)] tracking-widest mb-1">
                Timeline
              </div>
              <div className="font-['Syne'] font-bold text-xs sm:text-sm text-white">
                {project.duration || "3 Months"}
              </div>
            </div>
          </div>
        </div>

        {/* ── Image & Wireframe Preview Gallery ── */}
        <div className="space-y-3 sm:space-y-4">

          <div className="relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#111114] aspect-video group shadow-2xl">
            <img
              src={project.bannerImage}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent opacity-60 pointer-events-none" />
            <div
              className="absolute bottom-0 left-0 right-0 h-[3px]"
              style={{ backgroundColor: project.color }}
            />
          </div>
        </div>

        {/* ── Key Project Metrics / Stats ── */}
        {project.stats && project.stats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {project.stats.map((st) => (
              <div
                key={st.label}
                className="proj-stat-card p-4 sm:p-5 lg:p-6 rounded-2xl border border-[rgba(68,68,68,0.7)] bg-[#111114] transition-all duration-300"
              >
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#A291FD] font-['Syne'] mb-1">
                  {st.value}
                </div>
                <div className="font-mono text-[10px] sm:text-xs text-[rgba(240,236,228,0.45)] uppercase tracking-wider">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Details Grid (Left Content + Right Sidebar) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Main Left Column (2 cols width) */}
          <div className="lg:col-span-2 space-y-8 sm:space-y-10">
            {/* Overview */}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-['Syne'] text-white flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#A291FD]" />
                PROJECT OVERVIEW
              </h2>
              <p className="proj-overview-box font-mono text-xs sm:text-sm leading-relaxed text-[rgba(240,236,228,0.75)] italic bg-[rgba(255,255,255,0.02)] p-4 sm:p-6 rounded-2xl border border-[rgba(255,255,255,0.05)]">
                "{project.fullDesc || project.desc}"
              </p>
            </div>

            {/* Core Features */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold font-['Syne'] text-white flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#c8b97e]" />
                  KEY FEATURES & CAPABILITIES
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {project.features.map((feat, idx) => {
                    const parts = feat.split(/\s*—\s*|\s*:\s*/);
                    const title = parts.length > 1 ? parts[0].trim() : "";
                    const body =
                      parts.length > 1 ? parts.slice(1).join(" — ").trim() : feat;

                    return (
                      <div
                        key={idx}
                        className="group cursor-pointer p-4 sm:p-5 rounded-2xl bg-[#111114] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(162,145,253,0.35)] hover:bg-[#15151a] transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-2.5 mb-2.5">
                            <span className="w-6 h-6 rounded-lg bg-[rgba(162,145,253,0.12)] border border-[rgba(162,145,253,0.25)] flex items-center justify-center text-[#A291FD] text-xs font-mono group-hover:bg-[#A291FD] group-hover:text-black group-hover:translate-x-0.5 transition-all">
                              →
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-wider text-[rgba(240,236,228,0.45)]">
                              0{idx + 1}
                            </span>
                          </div>
                          {title && (
                            <h4 className="font-['Syne'] font-bold text-sm sm:text-base text-white mb-1.5 group-hover:text-[#A291FD] transition-colors">
                              {title}
                            </h4>
                          )}
                          <p className="text-xs sm:text-sm font-['Syne'] text-[rgba(240,236,228,0.75)] leading-relaxed">
                            {body}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Challenge & Solution */}
            {(project.challenge || project.solution) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-2">
                {project.challenge && (
                  <div className="proj-overview-box p-4 sm:p-6 rounded-2xl border border-[rgba(200,126,154,0.3)] bg-[rgba(200,126,154,0.03)] space-y-2.5">
                    <h3 className="font-mono text-[11px] sm:text-xs text-[#c87e9a] uppercase tracking-widest font-bold">
                      The Engineering Challenge
                    </h3>
                    <p className="text-xs sm:text-sm font-['Syne'] text-[rgba(240,236,228,0.8)] leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                )}
                {project.solution && (
                  <div className="proj-overview-box p-4 sm:p-6 rounded-2xl border border-[rgba(126,200,126,0.3)] bg-[rgba(126,200,126,0.03)] space-y-2.5">
                    <h3 className="font-mono text-[11px] sm:text-xs text-[#7ec87e] uppercase tracking-widest font-bold">
                      The Architecture Solution
                    </h3>
                    <p className="text-xs sm:text-sm font-['Syne'] text-[rgba(240,236,228,0.8)] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Sidebar (1 col width) */}
          <div className="space-y-6 sm:space-y-8">
            {/* Tech Stack */}
            <div className="proj-sidebar-box p-5 sm:p-6 rounded-2xl border border-[rgba(68,68,68,0.7)] bg-[#111114] space-y-4">
              <h3 className="font-mono text-xs uppercase text-[#A291FD] tracking-widest font-bold">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="proj-tag text-[10px] sm:text-xs px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="proj-sidebar-box p-5 sm:p-6 rounded-2xl border border-[rgba(162,145,253,0.25)] bg-gradient-to-b from-[rgba(162,145,253,0.06)] to-[#111114] space-y-4">
              <h3 className="font-['Syne'] text-base sm:text-lg font-bold text-white">
                Interested in this project?
              </h3>
              <p className="font-mono text-xs text-[rgba(240,236,228,0.5)] leading-relaxed">
                Explore the live project instance or inspect the codebase
                repository.
              </p>
              <div className="flex flex-col gap-2.5 pt-1">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-btn-primary justify-center py-3 text-xs tracking-wider"
                  >
                    <span>VISIT LIVE SITE</span>
                    <span>↗</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-btn-ghost justify-center py-3 text-xs tracking-wider"
                  >
                    <span>VIEW SOURCE CODE</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer Navigation (Prev / Next Project) ── */}
        <div className="pt-8 sm:pt-12 border-t border-[rgba(255,255,255,0.07)] grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to={`/projects/${prevProject.id}`}
            className="p-4 sm:p-5 lg:p-6 rounded-2xl border border-[rgba(68,68,68,0.7)] bg-[#111114] transition-all group flex items-center justify-between"
          >
            <div>
              <div className="font-mono text-[9px] sm:text-[10px] text-[rgba(240,236,228,0.4)] uppercase tracking-widest mb-1">
                ← PREVIOUS PROJECT
              </div>
              <div className="font-['Syne'] font-bold text-base sm:text-lg text-white transition-colors">
                {prevProject.title}
              </div>
            </div>
            <span className="font-mono text-xs text-[rgba(200,185,126,0.6)]">
              {prevProject.id}
            </span>
          </Link>

          <Link
            to={`/projects/${nextProject.id}`}
            className="p-4 sm:p-5 lg:p-6 rounded-2xl border border-[rgba(68,68,68,0.7)] bg-[#111114] transition-all group flex items-center justify-between text-right"
          >
            <span className="font-mono text-xs text-[rgba(200,185,126,0.6)]">
              {nextProject.id}
            </span>
            <div>
              <div className="font-mono text-[9px] sm:text-[10px] text-[rgba(240,236,228,0.4)] uppercase tracking-widest mb-1">
                NEXT PROJECT →
              </div>
              <div className="font-['Syne'] font-bold text-base sm:text-lg text-white  transition-colors">
                {nextProject.title}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════ */
/*  MAIN EXPORT — Chooses layout by category     */
/* ═══════════════════════════════════════════════ */
export default function ProjectDetailPage() {
  const data = useLoaderData() as ProjectDetailData;
  const isAppProject = data.project.category.toLowerCase() === "mobile";

  if (isAppProject) {
    return <AppStoreLayout {...data} />;
  }
  return <DefaultLayout {...data} />;
}
