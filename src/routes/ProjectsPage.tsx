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
    <div className="applist-root">
      <div className="applist-inner">

        {/* ── Page Header ── */}
        <div className="applist-header">
          <div>
            <div className="applist-eyebrow">
              <span className="applist-eyebrow-line" />
              SELECTED WORKS
            </div>
            <h1 className="applist-page-title">
              All<br />
              <span className="applist-page-title-accent">Projects.</span>
            </h1>
          </div>

          <div className="applist-header-right">
            <div className="applist-counter">
              SHOWING {filteredProjects.length} OF {projects.length} PROJECTS
            </div>
            <p className="applist-header-desc">
              A curated catalog of design systems, web applications, mobile apps, and full-stack architecture.
            </p>
          </div>
        </div>

        {/* ── Controls: Category Filters + Search ── */}
        <div className="applist-controls">

          {/* Category Filter Pills */}
          <div className="applist-filters">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`applist-filter-btn ${
                  selectedCategory === cat ? "applist-filter-btn--active" : ""
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="applist-search-wrap">
            <svg className="applist-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search title, tag, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="applist-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="applist-search-clear"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* ── App Store-style Project Grid ── */}
        {filteredProjects.length === 0 ? (
          <div className="applist-empty">
            <p className="applist-empty-text">
              No projects found matching "{searchQuery}" in {selectedCategory}.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("ALL");
                setSearchQuery("");
              }}
              className="applist-reset-btn"
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          <div className="applist-grid">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="applist-card"
              >
                {/* App Icon */}
                <div className="applist-card-icon-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="applist-card-icon"
                  />
                  {/* Colored accent on the icon bottom */}
                  <div
                    className="applist-card-icon-accent"
                    style={{ background: project.color }}
                  />
                </div>

                {/* App Info */}
                <div className="applist-card-info">
                  <h3 className="applist-card-title">{project.title}</h3>
                  <p className="applist-card-subtitle">{project.desc}</p>
                </div>

                {/* View Button */}
                <span className="applist-card-view-btn">
                  View
                </span>
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
