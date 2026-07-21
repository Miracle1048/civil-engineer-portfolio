import "../styles/projects.css";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    image: "/images/bounzy.jpg",
    category: "Construction",
    title: "Construction Support",
    description:
      "Supported construction activities through site supervision, technical documentation, progress monitoring, and project coordination to ensure efficient project delivery.",
    technologies: [
      "AutoCAD",
      "Construction",
      "Documentation",
      "Quality Control",
    ],
  },

  {
    id: 2,
    image: "/images/ferma.jpg",
    category: "Infrastructure",
    title: "Road Infrastructure Inspection",
    description:
      "Participated in infrastructure inspections, road condition assessments, maintenance planning, and engineering reporting for road maintenance projects.",
    technologies: [
      "Inspection",
      "Infrastructure",
      "Survey",
      "Technical Reports",
    ],
  },

  {
    id: 3,
    image: "/images/groundwater.jpg",
    category: "Water Resources",
    title: "Groundwater Exploration",
    description:
      "Assisted in groundwater exploration, borehole drilling surveys, site investigations, and technical documentation for sustainable water resource development.",
    technologies: [
      "Groundwater",
      "Survey",
      "Site Investigation",
      "Documentation",
    ],
  },

  {
    id: 4,
    image: "/images/tmd-research.jpg",
    category: "Research",
    title: "Sustainable Concrete Research",
    description:
      "Investigated the workability and tensile performance of concrete containing Termite Mound Dust (TMD) as a sustainable construction material.",
    technologies: [
      "Research",
      "Concrete",
      "Laboratory",
      "Data Analysis",
    ],
  },

  {
    id: 5,
    image: "/images/bim.jpg",
    category: "Digital Construction",
    title: "BIM & Digital Construction",
    description:
      "Exploring Building Information Modelling (BIM) and digital construction technologies to improve collaboration, efficiency, and sustainable project delivery.",
    technologies: [
      "BIM",
      "Revit",
      "Digital Construction",
      "Innovation",
    ],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <span className="section-tag">FEATURED PROJECTS</span>

        <h2>
          Building Experience Through
          <span> Real Engineering Projects</span>
        </h2>

        <p>
          A selection of engineering projects, research, and professional
          experiences that showcase my technical expertise, problem-solving
          ability, and commitment to delivering quality engineering solutions.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            category={project.category}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}