import { images } from "../../constants/image.index";

const HLogo = () => (
    <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        height: "100%", minHeight: 48,
    }}>
        <img style={{ width: 48, height: 48 }} src={images.hLogo} alt="H Logo" />
    </div>
);
function Stats() {
    return (
        <div className="bcard card-stats fade-up">
            <div className="stats-logo stats-cell">
                <HLogo />
            </div>
            {[
                { value: "10+", label: "Projects" },
                { value: "1+", label: "Years Exp" },
                { value: "10+", label: "Clients" },
            ].map(stat => (
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