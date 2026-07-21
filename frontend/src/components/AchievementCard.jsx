import { ArrowUpRight } from "lucide-react";

export default function AchievementCard({
  icon,
  title,
  value,
  description,
}) {
  return (
    <article className="achievement-card">
      {/* Decorative Accent */}
      <div className="achievement-accent"></div>

      {/* Icon */}
      <div className="achievement-icon">
        {icon}
      </div>

      {/* Content */}
      <div className="achievement-content">
        <h3>{title}</h3>

        <h2>{value}</h2>

        <p>{description}</p>
      </div>

      {/* Footer */}
      <div className="achievement-footer">
        <button className="achievement-link">
          Learn More
          <ArrowUpRight size={18} />
        </button>
      </div>
    </article>
  );
}