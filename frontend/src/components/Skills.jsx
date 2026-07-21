import "../styles/skills.css";
import SkillCard from "./SkillCard";

import {
  HardHat,
  Laptop,
  Code,
  Users,
} from "lucide-react";

const engineeringSkills = [
  { name: "Construction Management", level: 90 },
  { name: "Site Supervision", level: 88 },
  { name: "Quality Control", level: 90 },
  { name: "Project Coordination", level: 85 },
  { name: "Infrastructure Assessment", level: 85 },
];

const softwareSkills = [
  { name: "AutoCAD", level: 85 },
  { name: "Microsoft Excel", level: 92 },
  { name: "Microsoft Office", level: 90 },
  { name: "Revit", level: 70 },
  { name: "BIM", level: 65 },
];

const programmingSkills = [
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Python", level: 80 },
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 92 },
];

const professionalSkills = [
  { name: "Leadership", level: 90 },
  { name: "Communication", level: 92 },
  { name: "Problem Solving", level: 90 },
  { name: "Teamwork", level: 95 },
  { name: "Technical Writing", level: 88 },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="skills-title">

        <span className="section-tag">
          TECHNICAL SKILLS
        </span>

        <h2>
          Skills &
          <span> Technologies</span>
        </h2>

        <p>
          A combination of engineering knowledge,
          digital tools, programming expertise,
          and professional competencies that support
          successful project delivery.
        </p>

      </div>

      <div className="skills-grid">

        <SkillCard
          title="Engineering Skills"
          icon={<HardHat size={28} />}
          skills={engineeringSkills}
        />

        <SkillCard
          title="Engineering Software"
          icon={<Laptop size={28} />}
          skills={softwareSkills}
        />

        <SkillCard
          title="Programming Skills"
          icon={<Code size={28} />}
          skills={programmingSkills}
        />

        <SkillCard
          title="Professional Skills"
          icon={<Users size={28} />}
          skills={professionalSkills}
        />

      </div>

    </section>
  );
}