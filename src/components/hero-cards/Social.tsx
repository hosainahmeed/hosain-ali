import { ArrowIcon, EmailIcon, GithubIcon, LinkedinIcon } from "../../constants/icons"
import type { IHeroSocials } from "../../types/hero.types"

interface SocialProps {
  socialLinks?: IHeroSocials;
}

function Social({ socialLinks }: SocialProps) {
  const items = [
    {
      label: "GitHub",
      handle: socialLinks?.githubUsername ? `@${socialLinks.githubUsername.replace(/^@/, '')}` : "@hosainahmed",
      url: socialLinks?.githubUrl || "https://github.com/hosainahmeed",
      icon: <GithubIcon />,
      color: "#fff",
      isEmail: false,
    },
    {
      label: "LinkedIn",
      handle: socialLinks?.linkedinUsername || "hosain-ahmed",
      url: socialLinks?.linkedinUrl || "https://www.linkedin.com/in/hosain-dev",
      icon: <LinkedinIcon />,
      color: "#0A66C2",
      isEmail: false,
    },
    {
      label: "Email",
      handle: socialLinks?.email || "hosaindev96@gmail.com",
      url: `mailto:${socialLinks?.email || "hosaindev96@gmail.com"}`,
      icon: <EmailIcon />,
      color: "#A291FD",
      isEmail: true,
    },
  ];

  return (
    <div className="bcard card-social fade-up">
      <div className="social-row">
        {items.map(s => (
          !s.isEmail ? (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="social-btn">
              <span style={{ color: s.color, flexShrink: 0 }}>{s.icon}</span>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.04em" }}>{s.label}</div>
                <div style={{
                  fontSize: 10, color: "rgba(255,255,255,0.3)",
                  overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                }}>{s.handle}</div>
              </div>
              <span style={{ marginLeft: "auto", color: "rgba(255,255,255,0.2)", flexShrink: 0 }}>
                <ArrowIcon />
              </span>
            </a>
          ) : (
            <div key={s.label} onClick={() => {
              window.open(
                `https://mail.google.com/mail/?view=cm&fs=1&to=${s.handle}`,
                "_blank"
              );
            }} className="social-btn" style={{ cursor: "pointer" }}>
              <span style={{ color: s.color, flexShrink: 0 }}>{s.icon}</span>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.04em" }}>{s.label}</div>
                <div style={{
                  fontSize: 10, color: "rgba(255,255,255,0.3)",
                  overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                }}>{s.handle}</div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  )
}

export default Social