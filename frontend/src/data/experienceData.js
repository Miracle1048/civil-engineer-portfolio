import {
  Building2,
  HardHat,
  GraduationCap,
  Landmark,
} from "lucide-react";

const experienceData = [
  {
    id: 1,

    year: "2026",

    company: "Bounzy Construction Company",

    role: "Project Support Assistant (Technical)",

    duration: "February 2026 – Present",

    location: "Ibadan, Oyo State, Nigeria",

    description:
      "Supporting engineering projects through technical documentation, construction site coordination, project planning, quality assurance, and field investigations while contributing to sustainable infrastructure delivery.",

    responsibilities: [
      "Prepared engineering reports and technical documentation.",
      "Supported construction site supervision and coordination.",
      "Participated in borehole drilling and geotechnical investigations.",
      "Monitored project quality, safety and progress.",
    ],

    technologies: [
      "AutoCAD",
      "Microsoft Excel",
      "Project Documentation",
      "Site Supervision",
      "Quality Assurance",
      "Construction Coordination",
    ],

    current: true,

    icon: Building2,
  },

  {
    id: 2,

    year: "2024",

    company: "Federal Road Maintenance Agency (FERMA)",

    role: "Engineering Intern",

    duration: "March 2024 – September 2024",

    location: "Nigeria",

    description:
      "Supported highway inspection, pavement condition assessment, engineering measurements and maintenance planning for federal road infrastructure.",

    responsibilities: [
      "Road inspection and condition assessment.",
      "Engineering field measurements.",
      "Maintenance planning support.",
      "Preparation of technical reports.",
    ],

    technologies: [
      "Highway Engineering",
      "Road Inspection",
      "Infrastructure Assessment",
      "Technical Reporting",
    ],

    current: false,

    icon: HardHat,
  },

  {
    id: 3,

    year: "2023 - 2024",

    company: "Federal University Oye-Ekiti",

    role: "Research Assistant",

    duration: "2023 – 2024",

    location: "Ekiti State, Nigeria",

    description:
      "Participated in groundwater exploration, borehole investigations, engineering survey, technical documentation and research data analysis.",

    responsibilities: [
      "Groundwater exploration.",
      "Engineering survey and field data collection.",
      "Technical documentation.",
      "Engineering research analysis.",
    ],

    technologies: [
      "Research",
      "Survey",
      "Groundwater Exploration",
      "Data Analysis",
      "Technical Writing",
    ],

    current: false,

    icon: Landmark,
  },

  {
    id: 4,

    year: "2026",

    company: "National Youth Service Corps (NYSC)",

    role: "Physics & Basic Technology Teacher",

    duration: "2026",

    location: "Nigeria",

    description:
      "Delivered engaging Physics and Basic Technology lessons while mentoring students and promoting practical STEM education.",

    responsibilities: [
      "Prepared lesson plans.",
      "Delivered classroom instruction.",
      "Mentored students.",
      "Organised practical sessions.",
    ],

    technologies: [
      "Teaching",
      "Communication",
      "Leadership",
      "Curriculum Planning",
    ],

    current: false,

    icon: GraduationCap,
  },
];

export default experienceData;