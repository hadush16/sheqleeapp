import productDesignerIcon from "../assets/icons/productDesignerIcon.svg";
import uiuxIcon from "../assets/icons/uiuxIcon.svg";
import pythonIcon from "../assets/icons/pythonIcon.svg";
import juniordevopsIcon from "../assets/icons/juniordevopsIcon.svg";

export const JOBS = [
  {
    id: "1",
    title: "Graphic Design Specialist",
    icon: productDesignerIcon,
    company: "Sedgwick",
    type: "Full-Time",
    level: "Intermediate",
    salary: "$20/hr",
    posted: "30 mins ago",
    tags: ["UI/UX", "User Interface", "Photoshop", "Illustrator"],
    description: `
We need one to design and maintain prospect websites including graphic development,
regular site updates, usability reviews and traffic reporting.
`,
    qualifications: ["Bachelor’s degree in graphic design or related field"],
    experience: ["2+ years of graphic/web design experience"],
    skills: [
      "Excellent knowledge of graphic design software",
      "Strong organizational skills",
      "Ability to meet deadlines",
    ],
  },

  {
    id: "2",
    title: "Senior Python Developer",
    icon: pythonIcon,
    company: "Infosys",
    type: "Full-Time",
    level: "Expert",
    salary: "$30/hr",
    posted: "1 hr ago",
    tags: ["Python", "Django", "PostgreSQL", "API"],
    description: "Full backend role...",
    qualifications: ["CS degree"],
    experience: ["5+ years Python"],
    skills: ["Django", "REST APIs"],
  },
];
