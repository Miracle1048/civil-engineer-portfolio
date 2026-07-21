import { ArrowUpRight } from "lucide-react";

export default function ContactInfoCard({
  icon,
  title,
  value,
  link,
}) {
  const content = link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-value"
    >
      {value}
    </a>
  ) : (
    <span className="contact-value">
      {value}
    </span>
  );

  return (
    <article className="contact-info-card">

      {/* Gold Accent */}
      <div className="contact-accent"></div>

      {/* Icon */}
      <div className="contact-icon">
        {icon}
      </div>

      {/* Content */}
      <div className="contact-content">

        <h3>{title}</h3>

        {content}

      </div>

      {/* Arrow */}

      <div className="contact-arrow">

        <ArrowUpRight size={20} />

      </div>

    </article>
  );
}