import {
  Award,
  Building2,
  CalendarDays,
  ExternalLink,
  BadgeCheck,
} from "lucide-react";

export default function CertificateCard({
  title,
  issuer,
  year,
  credential,
  description,
  icon,
}) {
  return (
    <article className="certificate-card">
      {/* Decorative Top Line */}
      <div className="certificate-accent"></div>

      {/* Header */}
      <div className="certificate-header">
        <div className="certificate-icon">
          {icon || <Award size={28} />}
        </div>

        <div className="certificate-title">
          <h3>{title}</h3>
        </div>
      </div>

      {/* Details */}
      <div className="certificate-details">
        <div className="detail-item">
          <Building2 size={16} />
          <span>{issuer}</span>
        </div>

        <div className="detail-item">
          <CalendarDays size={16} />
          <span>{year}</span>
        </div>
      </div>

      {/* Description */}
      <p className="certificate-description">
        {description}
      </p>

      {/* Credential */}
      {credential && (
        <div className="credential-box">
          <BadgeCheck size={18} />
          <span>{credential}</span>
        </div>
      )}

      {/* Footer */}
      <div className="certificate-footer">
        <button className="certificate-link">
          View Credential
          <ExternalLink size={18} />
        </button>
      </div>
    </article>
  );
}