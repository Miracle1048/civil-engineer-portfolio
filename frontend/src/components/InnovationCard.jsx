import { ArrowUpRight } from "lucide-react";

export default function InnovationCard({
  icon,
  title,
  description,
}) {
  return (
    <article className="innovation-card">

      {/* Accent */}
      <div className="innovation-accent"></div>

      {/* Icon */}

      <div className="innovation-icon">
        {icon}
      </div>

      {/* Content */}

      <div className="innovation-content">

        <h3>{title}</h3>

        <p>{description}</p>

      </div>

      {/* Footer */}

      <div className="innovation-footer">

        <button className="innovation-link">

          Learn More

          <ArrowUpRight size={18} />

        </button>

      </div>

    </article>
  );
}