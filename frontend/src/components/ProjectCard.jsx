import { ArrowRight } from "lucide-react";

export default function ProjectCard({
  image,
  category,
  title,
  description,
  technologies,
}) {
  return (
    <article className="project-card">

      {/* Project Image */}

      <div className="project-image">

        <img src={image} alt={title} />

      </div>

      {/* Content */}

      <div className="project-content">

        <span className="project-category">
          {category}
        </span>

        <h3>{title}</h3>

        <p>{description}</p>

        {/* Technologies */}

        <div className="project-tags">

          {technologies.map((tech, index) => (

            <span key={index}>
              {tech}
            </span>

          ))}

        </div>

        {/* Button */}

        <button className="project-btn">

          Learn More

          <ArrowRight size={18} />

        </button>

      </div>

    </article>
  );
}