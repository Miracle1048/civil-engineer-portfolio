import {
  CalendarDays,
  Building2,
  ArrowRight,
} from "lucide-react";

export default function LeadershipCard({
  icon,
  title,
  organization,
  duration,
  description,
}) {
  return (
    <article className="leadership-card">
      {/* Decorative Accent */}
      <div className="leadership-accent"></div>

      {/* Header */}
      <div className="leadership-header">
        <div className="leadership-icon">
          {icon}
        </div>

        <div className="leadership-heading">
          <h3>{title}</h3>
          <h4>{organization}</h4>
        </div>
      </div>

      {/* Meta */}
      <div className="leadership-meta">
        <span>
          <CalendarDays size={16} />
          {duration}
        </span>

        <span>
          <Building2 size={16} />
          Leadership Role
        </span>
      </div>

      {/* Description */}
      <p className="leadership-description">
        {description}
      </p>

      {/* Footer */}
      <div className="leadership-footer">
        <button className="leadership-link">
          Learn More
          <ArrowRight size={18} />
        </button>
      </div>
    </article>
  );
}