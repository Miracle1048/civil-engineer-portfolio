import "../styles/services.css";
import {
  HardHat,
  ShieldCheck,
  Building2,
  ClipboardList,
  DraftingCompass,
  FileText,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: <HardHat size={40} />,
    title: "Construction Support",
    description:
      "Providing site supervision, construction monitoring, documentation, and technical assistance to ensure smooth project execution.",
  },
  {
    id: 2,
    icon: <ShieldCheck size={40} />,
    title: "Quality Control",
    description:
      "Ensuring materials, workmanship, and construction activities comply with engineering standards and specifications.",
  },
  {
    id: 3,
    icon: <Building2 size={40} />,
    title: "Infrastructure Assessment",
    description:
      "Conducting structural inspections, condition surveys, and technical evaluations for sustainable infrastructure.",
  },
  {
    id: 4,
    icon: <ClipboardList size={40} />,
    title: "Project Coordination",
    description:
      "Supporting planning, scheduling, communication, documentation, and coordination among project stakeholders.",
  },
  {
    id: 5,
    icon: <DraftingCompass size={40} />,
    title: "BIM & Digital Construction",
    description:
      "Leveraging Building Information Modelling (BIM) and digital engineering technologies to improve project delivery.",
  },
  {
    id: 6,
    icon: <FileText size={40} />,
    title: "Technical Reporting",
    description:
      "Preparing engineering reports, site documentation, progress reports, and technical presentations.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-header">

        <span className="section-tag">
          MY SERVICES
        </span>

        <h2>
          Engineering Expertise That
          <span> Delivers Results</span>
        </h2>

        <p>
          I provide professional engineering support through
          construction management, quality assurance,
          infrastructure assessment, project coordination,
          and digital engineering solutions.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service) => (
          <div className="service-card" key={service.id}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <button>
              Learn More
              <ArrowRight size={18} />
            </button>

          </div>
        ))}

      </div>
    </section>
  );
}