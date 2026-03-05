import CrownIcon from "../../constants/crown.icon"


function ClickToAction() {
    return (
        <div className="bcard card-cta fade-up">
            <CrownIcon />
            <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                    fontSize: "clamp(0.9rem, 2vw, 1.15rem)",
                    fontWeight: 800, color: "#A291FD", lineHeight: 1.2,
                }}>Let's Work Together</div>
                <div style={{
                    fontSize: "clamp(0.7rem, 1.3vw, 0.78rem)",
                    color: "rgba(162,145,253,0.6)", marginTop: 3, fontWeight: 500,
                }}>Let's Make Magic Happen!</div>
            </div>
        </div>
    )
}

export default ClickToAction