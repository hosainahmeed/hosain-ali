import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../routes/loaders";
import "../styles/project.css";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Show first 6 projects on homepage
  const displayProjects = PROJECTS.slice(0, 6);

  return (
    <section ref={sectionRef} className="applist-root applist-root--section">
      <div className="applist-inner">

        {/* ── Section Header ── */}
        <div className={`applist-header proj-reveal ${visible ? "visible" : ""}`}>
          <div>
            <div className="applist-eyebrow">
              <span className="applist-eyebrow-line" />
              SELECTED WORKS
            </div>
            <h2 className="applist-page-title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              My<br />
              <span className="applist-page-title-accent">Projects.</span>
            </h2>
          </div>

          <div className="applist-header-right">
            <div className="applist-counter">
              {PROJECTS.length} PROJECTS
            </div>
            <Link
              to="/projects"
              className="applist-see-all"
            >
              See All →
            </Link>
          </div>
        </div>

        {/* ── App Store-style Grid ── */}
        <div className={`applist-grid proj-reveal ${visible ? "visible" : ""}`} style={{ animationDelay: "0.1s" }}>
          {displayProjects.map((project) => (
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

        {/* ── See All Link ── */}
        <div className={`applist-footer proj-reveal ${visible ? "visible" : ""}`}>
          <Link to="/projects" className="applist-footer-link">
            See All Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}