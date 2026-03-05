
interface Skill {
  name: string;
  icon: string;
}

interface SkillSegmentProps {
  skills: Skill[];
}

function SkillSegment({ skills }: SkillSegmentProps) {
  return (
    <div className="grid grid-cols-6 gap-2">
      {skills.map((skill) => (
        <div className="w-full h-full" key={skill.name}>
          <img className="w-full h-full object-cover opacity-65 hover:opacity-100 transition-all duration-300" src={skill.icon} alt={skill.name} />
        </div>
      ))}
    </div>
  )
}

export default SkillSegment