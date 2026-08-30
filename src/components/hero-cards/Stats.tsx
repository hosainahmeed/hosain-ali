import { images } from "../../constants/image.index";
import type { IHeroStats } from "../../types/hero.types";

interface StatsProps {
    stats?: IHeroStats;
}

const HLogo = () => (
    <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        height: "100%", minHeight: 48,
    }}>
        <img style={{ width: 48, height: 48 }} src={images.hLogo} alt="H Logo" />
    </div>
);

function Stats({ stats }: StatsProps) {
    const statItems = [
        { value: stats?.projectsCount || "10+", label: "Projects" },
        { value: stats?.yearsExperience || "1+", label: "Years Exp" },
        { value: stats?.clientsCount || "10+", label: "Clients" },
    ];

    return (
        <div className="bcard card-stats fade-up">
            <div className="stats-logo stats-cell">
                <HLogo />
            </div>
            {statItems.map(stat => (
                <div key={stat.label} className="stats-cell">
                    <span style={{
                        fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                        fontWeight: 800, color: "#A291FD",
                        fontVariantNumeric: "tabular-nums",
                    }}>{stat.value}</span>
                    <span style={{
                        fontSize: "clamp(0.65rem, 1.2vw, 0.78rem)",
                        color: "rgba(162,145,253,0.65)",
                        marginTop: 2, fontWeight: 600, letterSpacing: "0.06em",
                        textTransform: "uppercase",
                    }}>{stat.label}</span>
                </div>
            ))}
        </div>
    )
}

export default Stats