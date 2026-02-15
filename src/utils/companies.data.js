import hotjar_logo from "../assets/images/hotjar_logo.png";
import buildingIcon from "../assets/images/company.png";

export const COMPANIES = [
  {
    name: "Hotjar",
    icon: hotjar_logo,
    verified: true,
    website: "https://www.hotjar.com",
    size: "100–199",
    location: "Seoul, S. Korea",
    jobs: 2,
    subscribers: 5,
    description: `
Hotjar is a successful Product Experience Insights company that operates on a fully remote basis, with team members spread throughout Europe, Africa and the Americas. Our team casts a wide net across many locations, lifestyles, and backgrounds. We celebrate the uniqueness and strength found in diversity: it’s our differences that make us interesting, and our shared belief in Hotjar’s Core Values that bind us together. These values form Hotjar's culture as one guided by respect, transparency, collaboration, and direct feedback. We put our customers at the heart of everything we do, and we do so through a diverse team working together in an honest, inclusive environment. We all commit to creating a safe working environment and are allies to those often underrepresented - including but not limited to members of BIPOC and LGBTQIA+ communities, people with disabilities, and all people who identify as women.
    `,
  },

  {
    name: "KeplerLab",
    icon: buildingIcon,
    verified: true,
    website: "https://skyeng.com",
    size: "200–500",
    location: "Remote",
    jobs: 10,
    subscribers: 173,
    description:
      "Skyeng is an online education platform focused on language learning.",
  },

  {
    name: "Kappa London",
    icon: buildingIcon,
    verified: false,
    website: "https://kappalondon.com",
    size: "50–99",
    location: "London, UK",
    jobs: 7,
    subscribers: 61,
    description: "Kappa London provides consulting services across Europe.",
  },

  {
    name: "Deep Consulting Solutions",
    icon: buildingIcon,
    verified: true,
    website: "https://deepconsulting.com",
    size: "100–199",
    location: "Berlin, Germany",
    jobs: 21,
    subscribers: 224,
    description: "Enterprise consulting and digital transformation company.",
  },

  {
    name: "Pragmateem",
    icon: buildingIcon,
    verified: false,
    website: "https://pragmateem.com",
    size: "10–49",
    location: "Remote",
    jobs: 2,
    subscribers: 13,
    description: "Small agile product-focused engineering team.",
  },

  {
    name: "Kepler Co., Ltd.",
    icon: buildingIcon,
    verified: true,
    website: "https://kepler.co",
    size: "100–199",
    location: "Seoul, S. Korea",
    jobs: 23,
    subscribers: 402,
    description: "Technology-driven product studio and VC-backed company.",
  },

  {
    name: "NEKOM CC Gmbh",
    icon: buildingIcon,
    verified: false,
    website: "https://nekom.de",
    size: "1–10",
    location: "Germany",
    jobs: 0,
    subscribers: 0,
    description: "Early-stage company focusing on niche solutions.",
  },

  {
    name: "The Difference Engine",
    icon: buildingIcon,
    verified: false,
    website: "https://differenceengine.io",
    size: "10–49",
    location: "Remote",
    jobs: 0,
    subscribers: 3,
    description: "Engineering-first company solving complex systems.",
  },
];

export const CURRENT_COMPANY = COMPANIES[0];
