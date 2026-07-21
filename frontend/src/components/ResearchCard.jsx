import {
  FlaskConical,
  Target,
  Microscope,
  Lightbulb,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export default function ResearchCard({
  title,
  description,
  objective,
  methodology,
  findings,
  applications,
}) {
  return (
    <article className="research-card">

      {/* Top Accent */}
      <div className="research-accent"></div>

      {/* Header */}
      <div className="research-header">

        <div className="research-icon">
          <FlaskConical size={34} />
        </div>

        <div className="research-heading">
          <span>FEATURED RESEARCH</span>

          <h2>{title}</h2>
        </div>

      </div>

      {/* Research Summary */}
      <div className="research-block">

        <div className="research-label">
          <BookOpen size={18} />
          <h4>Research Summary</h4>
        </div>

        <p>{description}</p>

      </div>

      {/* Research Grid */}

      <div className="research-grid">

        {/* Objective */}

        <div className="research-item">

          <div className="research-item-title">
            <Target size={20} />
            <h4>Objective</h4>
          </div>

          <p>{objective}</p>

        </div>

        {/* Methodology */}

        <div className="research-item">

          <div className="research-item-title">
            <Microscope size={20} />
            <h4>Methodology</h4>
          </div>

          <p>{methodology}</p>

        </div>

        {/* Findings */}

        <div className="research-item">

          <div className="research-item-title">
            <FlaskConical size={20} />
            <h4>Key Findings</h4>
          </div>

          <p>{findings}</p>

        </div>

        {/* Applications */}

        <div className="research-item">

          <div className="research-item-title">
            <Lightbulb size={20} />
            <h4>Engineering Applications</h4>
          </div>

          <p>{applications}</p>

        </div>

      </div>

      {/* Footer */}

      <div className="research-footer">

        <button className="research-link">

          Learn More

          <ArrowRight size={18} />

        </button>

      </div>

    </article>
  );
}