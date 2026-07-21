export default function SkillCard({ title, icon, skills }) {
  return (
    <div className="skill-card">
      <div className="skill-header">
        <div className="skill-icon">{icon}</div>
        <h3>{title}</h3>
      </div>

      <div className="skill-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}