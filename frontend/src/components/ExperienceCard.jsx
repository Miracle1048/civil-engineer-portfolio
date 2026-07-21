import {
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function ExperienceCard({
  role,
  company,
  duration,
  location,
  description,
  responsibilities,
  technologies,
  current,
  icon: Icon,
}) {
  return (
    <article className="experience-card">

      {/* Header */}

      <div className="experience-header">

        <div className="experience-icon">

          <Icon size={32} />

        </div>

        <div className="experience-header-content">

          <div className="experience-title-row">

            <h3>{role}</h3>

            {current && (
              <span className="current-badge">
                Current
              </span>
            )}

          </div>

          <h4>{company}</h4>

        </div>

      </div>

      {/* Meta */}

      <div className="experience-meta">

        <span>

          <Calendar size={16} />

          {duration}

        </span>

        <span>

          <MapPin size={16} />

          {location}

        </span>

      </div>

      {/* Description */}

      <p className="experience-description">

        {description}

      </p>

      {/* Responsibilities */}

      <div className="experience-section-block">

        <h5>Key Responsibilities</h5>

        <ul>

          {responsibilities.map((item, index) => (

            <li key={index}>

              <CheckCircle2 size={18} />

              <span>{item}</span>

            </li>

          ))}

        </ul>

      </div>

      {/* Technologies */}

      <div className="experience-section-block">

        <h5>Technologies & Skills</h5>

        <div className="experience-tags">

          {technologies.map((tech, index) => (

            <span
              key={index}
              className="experience-tag"
            >
              {tech}
            </span>

          ))}

        </div>

      </div>

      {/* Footer */}

      <div className="experience-footer">

        <button className="experience-btn">

          Learn More

          <ArrowRight size={18} />

        </button>

      </div>

    </article>
  );
}