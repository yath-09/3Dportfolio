
import {
    cpp,
    mobile,
    backend,
    creator,
    web,gericht,
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
      id: "works",
      title: "Projects",
    },
    {
      id: "Experience",
      title: "Experience",
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Chip Designing",
      icon: backend,
    },
    {
      title: "Three.Js",
      icon: creator,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Internship Trainee",
      company_name: "Cadence Design Systems",
      icon: starbucks,
      iconBg: "#383E56",
      date: "JUN 2023 - JUL 2023",
      points: [
        "Built algorithms for macro and standard-cell placement using Innovus tool improving efficiency by 60%.",
        "Worked on placement & routing of parallel rails improving spacing and avoiding excessive coupling of chips.",
        "Improved Multi-level routing of chips cell using instances and object overlapping and merging."
      ],
    },
    {
      title: "Software Technician",
      company_name: "UAS-DTU",
      icon: shopify,
      iconBg: "#383E56",
      date: "JAN 2022 - APR 2022",
      points: [
        "Designed UAV's (quadcopter ,hexacopter) with proficiency in indoor & outdoor 3-D navigation",
        "Implemented video processing and image capturingin UAV's using Open CV and Hand detection's modules."
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
      name: "Gericht-Restaurant",
      description:
        "Web-based platform that allows users to browse through menu of Restaurant and explore the food inside it.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: gericht,
      source_code_link: "https://yath-09.github.io/Gericht_Restaurant/",
    },
    {
      name: "Virtual-Keyboard",
      description:
        "The project represents a Virtual Keyboard. The keyboard contains alpha numeric keys with 4-5 special characters, backspace and Caps lock key.",
      tags: [
        {
          name: "OpenCV",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        
      ],
      image: jobit,
      source_code_link: "https://github.com/yath-09/Virtual-Keyboard",
    },
    {
      name: "Personal-portfolio",
      description:
        "My personal portfolio web-site using react and Tail-wind CSS. Used ThreeJs for 3-d models and animations.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "ThreeJs",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "#about",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };