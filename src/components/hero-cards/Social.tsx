import { ArrowIcon } from "../../constants/icons"
import { socialData } from "../../constants/socialData"


function Social() {
    return (
        <div className="bcard card-social fade-up">
            <div className="social-row">
                {socialData.map(s => (
                    <a key={s.label} href="#" className="social-btn">
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
                ))}
            </div>
        </div>
    )
}

export default Social