import "../styles/education.css";

import EducationCard from "./EducationCard";
import CertificateCard from "./CertificateCard";

import {
  Code2,
  FileCode2,
  BrainCircuit,
  PenTool,
} from "lucide-react";

export default function Education() {
  const education = {
    degree: "Bachelor of Engineering",
    field: "Civil Engineering",
    institution: "Federal University Oye-Ekiti",
    duration: "2020 – 2025",
    location: "Ekiti State, Nigeria",
    cgpa: "4.02 / 5.00",
    honours: "Second Class Honours (Upper Division)",

    description:
      "Developed a strong academic foundation in structural engineering, construction management, transportation engineering, geotechnical engineering, materials engineering, and sustainable infrastructure. Combined classroom learning with engineering research, fieldwork, and practical construction experience.",

    highlights: [
      "CGPA 4.02 / 5.00",
      "Second Class Upper Division",
      "Concrete Technology Research",
      "Construction Project Management",
      "Technical Documentation",
      "Engineering Research",
      "Site Investigation",
      "Digital Construction (BIM Learning Path)",
    ],
  };

  const certificates = [
    {
      id: 1,
      title: "JavaScript Development",
      issuer: "CodeCampus",
      year: "2025",
      credential: "Frontend Development",

      description:
        "Comprehensive training in JavaScript programming, ES6+, DOM manipulation, asynchronous programming and modern web development.",

      icon: <FileCode2 size={28} />,
    },

    {
      id: 2,
      title: "React Development",
      issuer: "CodeCampus",
      year: "2025",
      credential: "React.js",

      description:
        "Built reusable React components, responsive user interfaces, routing, hooks and modern frontend applications.",

      icon: <Code2 size={28} />,
    },

    {
      id: 3,
      title: "Python Programming",
      issuer: "CodeCampus",
      year: "2025",
      credential: "Python",

      description:
        "Learned Python fundamentals, scripting, automation, problem-solving and data processing.",

      icon: <BrainCircuit size={28} />,
    },

    {
      id: 4,
      title: "Technical Writing",
      issuer: "Professional Development",
      year: "2025",
      credential: "Documentation",

      description:
        "Developed professional technical writing skills for engineering reports, research documentation and project communication.",

      icon: <PenTool size={28} />,
    },
  ];

  return (
    <section className="education" id="education">

  <div className="education-section-header">

    <span className="section-tag">
      EDUCATION & CERTIFICATIONS
    </span>

    <h2>
      Academic Journey &
      <span> Professional Development</span>
    </h2>

    <p>
      My educational background, engineering research,
      and continuous professional development demonstrate
      my commitment to delivering innovative and sustainable
      engineering solutions.
    </p>

  </div>

  {/* Full Width Education */}

  <EducationCard
    degree={education.degree}
    field={education.field}
    institution={education.institution}
    duration={education.duration}
    location={education.location}
    cgpa={education.cgpa}
    honours={education.honours}
    description={education.description}
    highlights={education.highlights}
  />

  {/* Certifications */}

  <div className="certificate-section">

    <h3>
      Professional Certifications
    </h3>

    <div className="certificate-grid">

      {certificates.map((certificate) => (

        <CertificateCard
          key={certificate.id}
          {...certificate}
        />

      ))}

    </div>

  </div>

</section>
  );
}

