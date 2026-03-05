import { SkillTicker } from './SkillTicker'
import { SkillPill } from './SkillPill'
import { skills } from '../../constants/skills'

function Skills() {
    return (
        <div className="bcard card-skills fade-up">
            <div style={{
                fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.2)", textTransform: "uppercase", marginBottom: 8,
            }}>Tech Stack</div>
            <SkillTicker />
            {/* Second row offset */}
            <div style={{ overflow: "hidden", width: "100%", marginTop: 4 }}>
                <div className="ticker-inner" style={{ animationDirection: "reverse", animationDuration: "22s" }}>
                    {[...skills].reverse().concat([...skills].reverse()).map((s, i) => (
                        <SkillPill key={i} name={s.name} color={s.color} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills