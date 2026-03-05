import { images } from "../constants/image.index"


function HeaderSection() {
    return (
        <div className="portfolio-header flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div style={{
                    width: 8, height: 8, borderRadius: "50%", background: "#A291FD",
                }} className="pulse-dot" />
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>
                    PORTFOLIO
                </span>
            </div>
            <div className="w-28 h-12 aspect-square">
                <img src={images.hLogo} alt="H Logo" className="w-full h-full object-contain" />
            </div>
        </div>
    )
}

export default HeaderSection