import { useState } from "react";
import { images } from "../constants/image.index";
import "../styles/skill.css";

const SkillIcons = {
  HTML: { image: images.html, color: "#a291fd" },
  CSS: { image: images.css, color: "#a291fd" },
  JavaScript: { image: images.javascript, color: "#a291fd" },
  React: { image: images.react, color: "#a291fd" },
  TypeScript: { image: images.typescript, color: "#a291fd" },
  "Next.js": { image: images.next, color: "#a291fd" },
  Figma: { image: images.figma, color: "#a291fd" },
  Firebase: { image: images.firebase, color: "#a291fd" },
  "Node.js": { image: images.nodeJs, color: "#a291fd" },
  Redux: { image: images.redux, color: "#a291fd" },
  ShadCn: { image: images.shadCn, color: "#a291fd" },
  Tailwind: { image: images.tailwind, color: "#a291fd" },
  Vercel: { image: images.vercel, color: "#a291fd" },
  Expo: { image: images.expo, color: "#a291fd" },
  "Ant Design": { image: images.antd, color: "#a291fd" },
  Express: { image: images.express, color: "#a291fd" },
};

const skills = [
  { name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }, { name: "React" },
  { name: "TypeScript" }, { name: "Next.js" }, { name: "Figma" }, { name: "Firebase" },
  { name: "Node.js" }, { name: "Redux" }, { name: "ShadCn" }, { name: "Tailwind" },
  { name: "Vercel" }, { name: "Expo" }, { name: "Ant Design" }, { name: "Express" },
];

const categories = [
  { label: "All", filter: null },
  { label: "Frontend", filter: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Next.js", "Tailwind", "ShadCn", "Ant Design", "Redux"] },
  { label: "Backend", filter: ["Node.js", "Express", "Firebase"] },
  { label: "Tools", filter: ["Figma", "Vercel", "Expo"] },
];

export default function SkillsSection() {
  const [active, setActive] = useState<string | null>(null);
  const [cat, setCat] = useState<string[] | null>(null);

  const visible = cat
    ? skills.filter(s => cat?.includes(s?.name))
    : skills;

  <style>{`
      .contact-title {
        font-size: clamp(1rem, 5vw, 4rem);
        font-weight: 800;
        line-height: 0.88;
        letter-spacing: -0.04em;
      }
        .skills-section{
        }
      .contact-title-line2 {
        background: linear-gradient(135deg, #a291fd 0%, #a291fd 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    `}</style>

  return (
    <>
      <section className="skills-section relative! p-2!">
        <div className="section-divider" />
        {/* <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 45% at 50% 90%, rgba(120,80,255,0.18) 0%, transparent 70%)",
          }}
        /> */}
        <div className={`contact-header reveal ${visible ? 'visible' : ''}`}>
          <div>
            <div className="contact-eyebrow">Tech I work with</div>
            <h2 className="contact-title">
              MY<br />
              <span className="contact-title-line2">SKILLS.</span>
            </h2>
          </div>
          {/* <div className="contact-header-right">
              <p className="contact-desc">
                Have a project in mind, a wild idea, or just want to say hi? My inbox is always open — I respond within 24 hours.
              </p>
            </div> */}
        </div>
        {/* Header */}
        {/* <div className="skills-header">
          <div>
            <div className="skills-count">Tech I work with</div>
            <h2 className="skills-title">My <span>Skills</span></h2>
          </div>
        </div> */}

        {/* Category filter */}
        <div className="cat-row">
          {categories.map(c => (
            <button
              key={c.label}
              className={`cat-btn${cat === c.filter ? " active" : ""}`}
              onClick={() => setCat(c.filter)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="skills-grid">
          {visible.map((skill, i) => {
            const data = SkillIcons[skill.name as keyof typeof SkillIcons] || { image: null, color: "#a291fd" };
            const isHovered = active === skill.name;
            return (
              <div
                key={skill.name}
                className={`skill-card${isHovered ? " hovered" : ""}`}
                style={{
                  "--glow": `${data.color}22`,
                  "--border": `${data.color}55`,
                  animationDelay: `${i * 0.035}s`,
                } as React.CSSProperties}
                onMouseEnter={() => setActive(skill.name)}
                onMouseLeave={() => setActive(null)}
              >
                {isHovered && <div className="skill-tooltip">{skill.name}</div>}
                <div className="skill-icon">
                  {data.image && <img src={data.image} alt={skill.name} style={{ width: '100%', height: '100%' }} />}
                </div>
                <div className="skill-name">{skill.name}</div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div style={{
          marginTop: 32,
          fontSize: 11,
          color: "rgba(255,255,255,0.15)",
          textAlign: "center",
          letterSpacing: "0.06em",
          fontWeight: 600,
          textTransform: "uppercase",
        }}>
          Always learning · Always building
        </div>
      </section>
    </>
  );
}
