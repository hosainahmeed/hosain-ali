import { LocationIcon, MapIcon } from '../../constants/icons'
import CustomButton from '../buttons/CustomButtom'
import { NameBlock } from './NameBlock'

function MainInfoCard() {
    return (
        <div className="bcard card-main-info fade-up flex flex-col items-start justify-center">
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
                <span style={{
                    background: "rgba(162,145,253,0.15)", color: "#A291FD",
                    padding: "4px 14px", borderRadius: 20, fontSize: 11, fontWeight: 700,
                    border: "1px solid rgba(162,145,253,0.3)", display: "flex", alignItems: "center", gap: 5,
                }}>
                    <span className="pulse-dot" style={{
                        width: 5, height: 5, borderRadius: "50%", background: "#A291FD", display: "inline-block"
                    }} />
                    Open to work
                </span>
                <span style={{
                    color: "rgba(255,255,255,0.3)", fontSize: 12,
                    display: "flex", alignItems: "center", gap: 4,
                }}>
                    <LocationIcon /> Dhaka, Bangladesh
                </span>
            </div>
            <NameBlock />
            <div className="mt-3!">
                <CustomButton btnText='Download CV' />
            </div>
            <div className="absolute top-0 left-0">
                <MapIcon />
            </div>
        </div>
    )
}

export default MainInfoCard