import "../styles/research.css";

import ResearchCard from "./ResearchCard";
import InnovationCard from "./InnovationCard";

import {
  Building2,
  Boxes,
  Laptop,
  Landmark,
  BriefcaseBusiness,
  BarChart3,
  Rocket,
} from "lucide-react";

export default function Research() {
  const research = {
    title:
      "Workability and Tensile Performance of Concrete Containing Termite Mound Dust (TMD)",

    description:
      "This undergraduate research investigated the feasibility of incorporating termite mound dust as a partial replacement material in concrete production. The study focused on improving sustainability while maintaining satisfactory engineering performance.",

    objective:
      "To evaluate the workability and tensile strength of concrete containing varying percentages of termite mound dust and determine its suitability for sustainable construction.",

    methodology:
      "Concrete specimens were produced using controlled replacement ratios of termite mound dust. Laboratory testing included batching, slump tests, curing, splitting tensile strength tests, and comparative analysis with conventional concrete.",

    findings:
      "The study demonstrated that carefully controlled proportions of termite mound dust can contribute to more sustainable concrete production while maintaining acceptable engineering performance for selected applications.",

    applications:
      "Green construction, sustainable concrete production, low-cost housing, eco-friendly infrastructure, alternative construction materials, and sustainable engineering research.",
  };

  const innovations = [
    {
      id: 1,
      icon: <Building2 size={34} />,
      title: "Sustainable Construction",
      description:
        "Developing environmentally responsible construction practices through sustainable materials and resilient infrastructure.",
    },

    {
      id: 2,
      icon: <Boxes size={34} />,
      title: "Building Information Modeling (BIM)",
      description:
        "Applying digital modelling technologies to improve project planning, collaboration, coordination, and lifecycle management.",
    },

    {
      id: 3,
      icon: <Laptop size={34} />,
      title: "Digital Construction",
      description:
        "Leveraging modern digital tools and workflows to enhance productivity, project delivery, and construction quality.",
    },

    {
      id: 4,
      icon: <Landmark size={34} />,
      title: "Smart Infrastructure",
      description:
        "Exploring innovative infrastructure systems that combine engineering excellence with technology-driven solutions.",
    },

    {
      id: 5,
      icon: <BriefcaseBusiness size={34} />,
      title: "Construction Project Management",
      description:
        "Applying planning, scheduling, budgeting, and stakeholder coordination to achieve successful engineering outcomes.",
    },

    {
      id: 6,
      icon: <BarChart3 size={34} />,
      title: "Data-Driven Engineering",
      description:
        "Utilising engineering data and digital analytics to support evidence-based decision making throughout project lifecycles.",
    },
  ];

  return (
    <section className="research" id="research">

      {/* Section Header */}

      <div className="research-section-header">

        <span className="section-tag">
          RESEARCH & INNOVATION
        </span>

        <h2>
          Engineering Research &
          <span> Future Innovation</span>
        </h2>

        <p>
          I am passionate about combining engineering research,
          digital technologies, and sustainable construction
          practices to develop resilient infrastructure that
          addresses real-world challenges.
        </p>

      </div>

      {/* Featured Research */}

      <ResearchCard
        title={research.title}
        description={research.description}
        objective={research.objective}
        methodology={research.methodology}
        findings={research.findings}
        applications={research.applications}
      />

      {/* Innovation Section */}

      <div className="innovation-section">

        <h3 className="innovation-heading">
          Areas of Innovation
        </h3>

        <div className="innovation-grid">

          {innovations.map((item) => (

            <InnovationCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />

          ))}

        </div>

      </div>

      {/* Future Vision */}

      <div className="future-vision">

        <div className="vision-icon">
          <Rocket size={42} />
        </div>

        <h3>Future Vision</h3>

        <p>
          My long-term goal is to contribute to the advancement of
          civil engineering through sustainable construction,
          Building Information Modeling (BIM), digital construction,
          smart infrastructure, and data-driven engineering. I aspire
          to develop innovative engineering solutions that improve
          infrastructure resilience, enhance project delivery, and
          create lasting value for communities across Africa and
          beyond.
        </p>

      </div>

    </section>
  );
}