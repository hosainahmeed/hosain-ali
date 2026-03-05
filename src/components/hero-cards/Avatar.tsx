import { images } from '../../constants/image.index'

function Avatar() {
    return (
        <div className="bcard card-avatar fade-up" style={{ padding: 0 }}>
            <div style={{
                width: "100%", height: "100%", minHeight: 200,
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", overflow: "hidden",
            }}>
                <img className="w-full h-full object-cover" src={images.hosain} alt="H Logo" />
                <span style={{
                    position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)",
                    fontSize: 11, color: "rgba(162,145,253,0.5)", letterSpacing: "0.1em",
                    fontWeight: 700, textTransform: "uppercase",
                }}>Hosain Ali</span>
            </div>
        </div>
    )
}

export default Avatar