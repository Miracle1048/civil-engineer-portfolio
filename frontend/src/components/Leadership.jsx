import "../styles/leadership.css";

import LeadershipCard from "./LeadershipCard";
import AchievementCard from "./AchievementCard";

import {
  Users,
  Megaphone,
  Vote,
  Leaf,
  Award,
  GraduationCap,
  FlaskConical,
  Building2,
} from "lucide-react";

export default function Leadership() {
  const leadershipRoles = [
    {
      id: 1,
      icon: <Users size={30} />,
      title: "Charity CDS Secretary",
      organization: "National Youth Service Corps (NYSC)",
      duration: "2025 – Present",

      description:
        "Coordinated charity initiatives, organized outreach programmes, managed volunteers, and promoted community development through collaborative leadership.",
    },

    {
      id: 2,
      icon: <Megaphone size={30} />,
      title: "Public Relations Officer",
      organization: "Mass Education & Adult Literacy Group",
      duration: "2025",

      description:
        "Led communication strategies, promoted literacy initiatives, and strengthened engagement between volunteers, educators, and local communities.",
    },

    {
      id: 3,
      icon: <Vote size={30} />,
      title: "Secretary General",
      organization: "Independent Electoral Committee",
      duration: "University Leadership",

      description:
        "Managed official records, coordinated committee meetings, prepared documentation, and supported transparent electoral processes.",
    },

    {
      id: 4,
      icon: <Leaf size={30} />,
      title: "Coordinator",
      organization: "Wildlife Conservation Foundation",
      duration: "Volunteer Leadership",

      description:
        "Promoted environmental sustainability, coordinated awareness programmes, and encouraged youth participation in conservation activities.",
    },
  ];

  const achievements = [
    {
      id: 1,
      icon: <Award size={34} />,
      title: "Academic Honour",
      value: "Second Class Honours (Upper Division)",

      description:
        "Graduated with a strong academic record in Civil Engineering while maintaining excellent performance across engineering disciplines.",
    },

    {
      id: 2,
      icon: <GraduationCap size={34} />,
      title: "Academic Performance",
      value: "CGPA 4.02 / 5.00",

      description:
        "Demonstrated consistent academic excellence throughout the Bachelor of Engineering programme.",
    },

    {
      id: 3,
      icon: <FlaskConical size={34} />,
      title: "Research",
      value: "Concrete Technology",

      description:
        "Completed undergraduate research on the workability and tensile performance of concrete containing termite mound dust.",
    },

    {
      id: 4,
      icon: <Building2 size={34} />,
      title: "Professional Experience",
      value: "Construction Projects",

      description:
        "Supported engineering projects through site coordination, technical documentation, construction supervision, and infrastructure assessment.",
    },
  ];

  return (
    <section className="leadership" id="leadership">

      {/* Header */}

      <div className="leadership-section-header">

        <span className="section-tag">
          LEADERSHIP & ACHIEVEMENTS
        </span>

        <h2>
          Leading With Purpose &
          <span> Delivering Impact</span>
        </h2>

        <p>
          Beyond engineering, I believe in leadership, collaboration,
          and continuous growth. My journey reflects academic excellence,
          community service, professional responsibility, and a passion
          for creating sustainable engineering solutions.
        </p>

      </div>

      {/* Leadership Roles */}

      <div className="leadership-wrapper">

        <h3 className="sub-heading">
          Leadership Experience
        </h3>

        <div className="leadership-grid">

          {leadershipRoles.map((role) => (

            <LeadershipCard
              key={role.id}
              icon={role.icon}
              title={role.title}
              organization={role.organization}
              duration={role.duration}
              description={role.description}
            />

          ))}

        </div>

      </div>

      {/* Achievements */}

      <div className="achievement-wrapper">

        <h3 className="sub-heading">
          Key Achievements
        </h3>

        <div className="achievement-grid">

          {achievements.map((item) => (

            <AchievementCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              value={item.value}
              description={item.description}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

