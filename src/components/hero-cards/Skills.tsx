import { SkillTicker } from './SkillTicker'
import { SkillPill } from './SkillPill'
import { skills } from '../../constants/skills'

interface SkillsProps {
    featuredTechStack?: string[];
}

function Skills({ featuredTechStack }: SkillsProps) {
    const activeSkills = featuredTechStack && featuredTechStack.length > 0
        ? featuredTechStack.map(name => {
            const match = skills.find(s => s.name.toLowerCase() === name.toLowerCase());
            return { name, color: match?.color || "#A291FD" };
        })
        : skills;

    const reversedSkills = [...activeSkills].reverse();

    return (
        <div className="bcard card-skills fade-up">
            <div style={{
                fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.2)", textTransform: "uppercase", marginBottom: 8,
            }}>Tech Stack</div>
            <SkillTicker skillItems={activeSkills} />
            {/* Second row offset */}
            <div style={{ overflow: "hidden", width: "100%", marginTop: 4 }}>
                <div className="ticker-inner" style={{ animationDirection: "reverse", animationDuration: "22s" }}>
                    {reversedSkills.concat(reversedSkills).map((s, i) => (
                        <SkillPill key={i} name={s.name} color={s.color} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills