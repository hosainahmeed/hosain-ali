import { images } from '../../constants/image.index'

interface AvatarProps {
  avatarUrl?: string;
  name?: string;
}

function Avatar({ avatarUrl, name }: AvatarProps) {
    return (
        <div className="bcard card-avatar fade-up" style={{ padding: 0 }}>
            <div style={{
                width: "100%", height: "100%", minHeight: 200,
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", overflow: "hidden",
            }}>
                <img className="w-full h-full object-cover" src={avatarUrl || images.hosain} alt={name || "Avatar"} />
                <span style={{
                    position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)",
                    fontSize: 11, color: "rgba(162,145,253,0.5)", letterSpacing: "0.1em",
                    fontWeight: 700, textTransform: "uppercase", whiteSpace: "nowrap",
                }}>{name || "Hosain Ali"}</span>
            </div>
        </div>
    )
}

export default Avatar