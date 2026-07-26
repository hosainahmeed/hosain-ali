import { useState } from "react";
import { useLoaderData, useNavigate, Link } from "react-router-dom";
import type { Project } from "./loaders";
import "../styles/project.css";

interface ProjectDetailData {
  project: Project;
  allProjects: Project[];
}

export default function ProjectDetailPage() {
  const { project, allProjects } = useLoaderData() as ProjectDetailData;
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"preview" | "wireframe">("preview");

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
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
              PROJECT {project.id} / {String(allProjects.length).padStart(2, "0")}
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
          {/* Tab controls */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab("preview")}
              className={`cat-btn text-[10px] sm:text-[11px] px-3 sm:px-4 py-1.5 ${
                activeTab === "preview" ? "active" : ""
              }`}
            >
              FINAL DESIGN PREVIEW
            </button>
            {project.wireframeImage && (
              <button
                onClick={() => setActiveTab("wireframe")}
                className={`cat-btn text-[10px] sm:text-[11px] px-3 sm:px-4 py-1.5 ${
                  activeTab === "wireframe" ? "active" : ""
                }`}
              >
                WIREFRAME ARCHITECTURE
              </button>
            )}
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#111114] aspect-video group shadow-2xl">
            <img
              src={activeTab === "preview" ? project.image : project.wireframeImage}
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
                className="proj-stat-card p-4 sm:p-5 lg:p-6 rounded-2xl border border-[rgba(68,68,68,0.7)] bg-[#111114] hover:border-[rgba(162,145,253,0.35)] transition-all duration-300"
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
                <ul className="grid grid-cols-1 gap-3">
                  {project.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="proj-feature-item flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-[#111114] border border-[rgba(255,255,255,0.05)] text-xs sm:text-sm font-['Syne'] text-[rgba(240,236,228,0.85)] leading-relaxed"
                    >
                      <span className="font-mono text-xs text-[#A291FD] font-bold mt-0.5">
                        0{idx + 1}.
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
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
                  <span key={tag} className="proj-tag text-[10px] sm:text-xs px-2.5 py-1">
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
                Explore the live project instance or inspect the codebase repository.
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
            className="p-4 sm:p-5 lg:p-6 rounded-2xl border border-[rgba(68,68,68,0.7)] bg-[#111114] hover:border-[rgba(162,145,253,0.4)] transition-all group flex items-center justify-between"
          >
            <div>
              <div className="font-mono text-[9px] sm:text-[10px] text-[rgba(240,236,228,0.4)] uppercase tracking-widest mb-1">
                ← PREVIOUS PROJECT
              </div>
              <div className="font-['Syne'] font-bold text-base sm:text-lg text-white group-hover:text-[#A291FD] transition-colors">
                {prevProject.title}
              </div>
            </div>
            <span className="font-mono text-xs text-[rgba(200,185,126,0.6)]">
              {prevProject.id}
            </span>
          </Link>

          <Link
            to={`/projects/${nextProject.id}`}
            className="p-4 sm:p-5 lg:p-6 rounded-2xl border border-[rgba(68,68,68,0.7)] bg-[#111114] hover:border-[rgba(162,145,253,0.4)] transition-all group flex items-center justify-between text-right"
          >
            <span className="font-mono text-xs text-[rgba(200,185,126,0.6)]">
              {nextProject.id}
            </span>
            <div>
              <div className="font-mono text-[9px] sm:text-[10px] text-[rgba(240,236,228,0.4)] uppercase tracking-widest mb-1">
                NEXT PROJECT →
              </div>
              <div className="font-['Syne'] font-bold text-base sm:text-lg text-white group-hover:text-[#A291FD] transition-colors">
                {nextProject.title}
              </div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
