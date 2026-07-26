import { useState, useMemo } from "react";
import { useLoaderData, Link } from "react-router-dom";
import type { Project } from "./loaders";
import "../styles/project.css";

interface ProjectsLoaderData {
  projects: Project[];
}

const CATEGORIES = [
  "ALL",
  "DESIGN SYSTEM",
  "WEB APP",
  "MOBILE",
  "FULL STACK",
  "BRANDING",
];

export default function ProjectsPage() {
  const { projects } = useLoaderData() as ProjectsLoaderData;
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        selectedCategory === "ALL" ||
        p.category.toUpperCase() === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <div className="proj-root min-h-screen py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="proj-inner max-w-7xl mx-auto space-y-8 sm:space-y-10">
        
        {/* ── Page Header ── */}
        <div className="proj-header border-b border-[rgba(255,255,255,0.07)] pb-6 sm:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div>
            <div className="proj-eyebrow font-mono text-[11px] sm:text-xs">
              SELECTED WORKS
            </div>
            <h1 className="proj-title text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-none font-['Syne']">
              ALL<br />
              <span className="proj-title-accent">PROJECTS.</span>
            </h1>
          </div>

          <div className="flex flex-col items-start md:items-end gap-1.5 sm:gap-2">
            <div className="proj-count font-mono text-[11px] sm:text-xs text-[rgba(162,145,253,0.6)] font-semibold tracking-wider">
              SHOWING {filteredProjects.length} OF {projects.length} PROJECTS
            </div>
            <p className="font-mono text-xs text-[rgba(240,236,228,0.45)] max-w-md md:text-right leading-relaxed">
              A curated catalog of design systems, web applications, mobile apps, and full-stack architecture.
            </p>
          </div>
        </div>

        {/* ── Controls: Search & Category Filter Pills ── */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
          
          {/* Category Filter Pills (Scrollable on small mobile screens) */}
          <div className="flex items-center gap-2 my-3 overflow-x-auto pb-2 lg:pb-0 scrollbar-none max-w-full">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cat-btn whitespace-nowrap px-3.5 py-2 text-[10px] sm:text-[11px] ${
                  selectedCategory === cat ? "active" : ""
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-80">
            <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-[rgba(240,236,228,0.35)] text-xs font-mono z-10">
              🔍
            </div>
            <input
              type="text"
              placeholder="Search title, tag, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="proj-search-input pl-10 pr-8 py-2.5 bg-[#111114] border border-[rgba(68,68,68,0.7)] rounded-xl text-xs font-mono text-white placeholder-[rgba(240,236,228,0.3)] focus:outline-none focus:border-[#A291FD] focus:ring-1 focus:ring-[#A291FD]/30 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[rgba(240,236,228,0.4)] hover:text-white p-1 z-10"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* ── Perfectly Proportioned Modern Project Cards ── */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 sm:py-20 text-center border border-dashed border-[rgba(68,68,68,0.7)] rounded-2xl p-6 sm:p-8 bg-[#111114]">
            <p className="font-mono text-xs sm:text-sm text-[rgba(240,236,228,0.5)] mb-4">
              No projects found matching "{searchQuery}" in {selectedCategory}.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("ALL");
                setSearchQuery("");
              }}
              className="proj-btn-ghost text-xs mx-auto py-2 px-4"
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bcard group flex flex-col justify-between rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#111114]/90 hover:border-[rgba(162,145,253,0.45)] hover:shadow-[0_12px_40px_rgba(162,145,253,0.12)] transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Prominent Large Image Thumbnail Container (16:11 Aspect Ratio) */}
                  <div className="aspect-[16/11] relative overflow-hidden bg-[#16161a]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-[rgba(17,17,20,0.2)] to-transparent opacity-85" />
                    
                    {/* Category Pill floating top-left */}
                    <span className="absolute top-3 left-3 font-mono text-[9px] tracking-widest px-2.5 py-1 rounded-full bg-[rgba(12,12,14,0.85)] backdrop-blur border border-[rgba(162,145,253,0.3)] text-[#A291FD] uppercase font-bold">
                      {project.category}
                    </span>

                    {/* Floating Year Pill top-right */}
                    <span className="absolute top-3 right-3 font-mono text-[10px] tracking-wider px-2.5 py-1 rounded-md bg-[rgba(12,12,14,0.85)] backdrop-blur border border-[rgba(255,255,255,0.12)] text-[rgba(240,236,228,0.7)] font-medium">
                      {project.year}
                    </span>

                    {/* Dynamic Color Accent Line */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[3px]"
                      style={{
                        backgroundColor: project.color,
                        boxShadow: `0 0 10px ${project.color}aa`,
                      }}
                    />
                  </div>

                  {/* Compact Card Content */}
                  <div className="proj-card-body p-4 sm:p-5 space-y-2.5">
                    
                    <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[rgba(200,185,126,0.7)] font-medium">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A291FD]" />
                        PROJECT — {project.id}
                      </span>
                    </div>

                    <h3 className="font-['Syne'] font-extrabold text-lg sm:text-xl text-white group-hover:text-[#A291FD] transition-colors leading-tight tracking-tight">
                      {project.title}
                    </h3>

                    <p className="font-mono text-xs text-[rgba(240,236,228,0.55)] line-clamp-2 leading-relaxed italic">
                      {project.desc}
                    </p>

                    {/* Tech Stack Cloud (Top 4 tags + overflow count) */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="proj-tag text-[9px] sm:text-[10px] px-2 py-0.5 rounded-md border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] group-hover:border-[rgba(200,185,126,0.3)] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="font-mono text-[9px] text-[rgba(240,236,228,0.4)] px-1.5 py-0.5 self-center">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="proj-card-footer p-4 sm:p-5 pt-0 flex items-center gap-2.5">
                  <Link
                    to={`/projects/${project.id}`}
                    className="proj-btn-primary flex-1 justify-center py-2.5 px-4 text-xs text-center font-bold tracking-wider"
                  >
                    <span>VIEW DETAILS</span>
                    <span>→</span>
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-btn-ghost py-2.5 px-3.5 text-xs flex items-center justify-center"
                      title="Live Demo"
                    >
                      <span>↗</span>
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
