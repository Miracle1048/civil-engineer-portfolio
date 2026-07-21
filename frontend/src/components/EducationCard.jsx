import {
  GraduationCap,
  CalendarDays,
  MapPin,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function EducationCard({
  degree,
  field,
  institution,
  duration,
  location,
  cgpa,
  honours,
  description,
  highlights,
}) {
  return (
    <article className="education-card">
      {/* Decorative Accent */}
      <div className="education-accent"></div>

      {/* Header */}
      <div className="education-top">
        <div className="education-icon">
          <GraduationCap size={34} />
        </div>

        <div className="education-heading">
          <h3>{degree}</h3>
          <h4>{field}</h4>
          <h5>{institution}</h5>
        </div>
      </div>

      {/* Meta */}
      <div className="education-meta">
        <span>
          <CalendarDays size={16} />
          {duration}
        </span>

        <span>
          <MapPin size={16} />
          {location}
        </span>
      </div>

      {/* Academic Stats */}
      <div className="education-stats">
        <div className="stat-box">
          <small>CGPA</small>
          <h4>{cgpa}</h4>
        </div>

        <div className="stat-box">
          <small>Honours</small>
          <h4>{honours}</h4>
        </div>
      </div>

      {/* Description */}
      <div className="education-description">
        <p>{description}</p>
      </div>

      {/* Highlights */}
      <div className="education-highlights">
        <h4>Academic Highlights</h4>

        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div className="highlight-item" key={index}>
              <CheckCircle2 size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="education-footer">
        <button className="education-link">
          Learn More
          <ArrowRight size={18} />
        </button>

        <div className="education-award">
          <Award size={18} />
          <span>Academic Excellence</span>
        </div>
      </div>
    </article>
  );
}