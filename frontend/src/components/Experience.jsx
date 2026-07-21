import "../styles/experience.css";
import ExperienceCard from "./ExperienceCard";
import experienceData from "../data/experienceData";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        {/* Section Header */}

        <div className="experience-heading">

          <span className="experience-badge">
            PROFESSIONAL EXPERIENCE
          </span>

          <h2>My Engineering Journey</h2>

          <p>
            Throughout my engineering career, I have contributed to
            construction projects, infrastructure maintenance,
            engineering research, and STEM education. Each role has
            strengthened my technical expertise, leadership, and
            commitment to delivering sustainable engineering solutions.
          </p>

        </div>

        {/* Experience Grid */}

        <div className="experience-grid">

          {experienceData.map((experience) => (

            <ExperienceCard
              key={experience.id}
              {...experience}
            />

          ))}

        </div> 

      </div>
    </section>
  );
}