import { skills } from "../../constants/skills";
import { SkillPill } from "./SkillPill";



export const SkillTicker = () => {
    const doubled = [...skills, ...skills];
    return (
        <div style={{ overflow: "hidden", width: "100%", padding: "4px 0" }}>
            <style>{`
        @keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .ticker-inner { display: flex; gap: 8px; width: max-content; animation: ticker 28s linear infinite; }
        .ticker-inner:hover { animation-play-state: paused; }
      `}</style>
            <div className="ticker-inner">
                {doubled.map((s, i) => <SkillPill key={i} name={s.name} color={s.color} />)}
            </div>
        </div>
    );
};