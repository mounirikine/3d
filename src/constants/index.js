import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
 
];

const experiences = [
  {
    title: "Obtaining a baccalaureate Haj Saeed high School",
    company_name: "Haj Saeed high School",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2021 - April 2022",
    points: [
      "Upon completing academic journey, I emerged a graduate. Swiftly thereafter, I stumbled upon my fervor for programming, igniting a flame within me that continues to burn brightly.",
  
    ],
  },
  {
    title: "I went to study digital developmentat ",
    company_name: "OFPPT",
    icon: 'https://seeklogo.com/images/O/ofppt-logo-B2CAD4E136-seeklogo.com.png',
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Feb 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "the first internship in the company",
    company_name: "METAMA ,AGADIR",
    icon: 'https://secure.gravatar.com/avatar/0f8274096f1ce1e089d7278e5f16e2d2?s=500&d=mm&r=g',
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "I worked on creating a clinic management dashboard as a front-end developer",

    ],
  },
  {
    title: "the Second internship in the company",
    company_name: "LeanSoft AGADIR",
    icon: 'https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ffd5r47g7etxkkbsjlwl',
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Mar 2024",
    points: [
      "I worked on creating a management dashboard as a Back-end developer",

    ],
  },
  {
    title: "Full-Stack Developper",
    company_name: "Yool Eduction",
    icon: 'https://media.licdn.com/dms/image/v2/D4D0BAQErbfFdo4U2AA/company-logo_200_200/company-logo_200_200/0/1667486939950?e=2147483647&v=beta&t=kspnmzQ2-LLmpLK2dkWzyfbp4jBSMEjksUlnSN9m3Uo',
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Present",
    points: [
      "I working  as a Full-stack Developper developer",

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
