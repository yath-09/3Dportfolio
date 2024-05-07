
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
    supamaker,
    blogo,
    genius,
    devroom,
    homing,
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
  ];
  
  const services = [
    {
      title: "MERN",
      icon: web,
    },
    {
      title: "Nextjs",
      icon: mobile,
    },
    {
      title: "TypeScript",
      icon: backend,
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
      name: "C++",
      icon: cpp,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // 
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full-stack Developer",
      company_name: "SupaMakers Limited",
      icon: supamaker,
      iconBg: "#383E56",
      date: "March 2024 - Present",
      points: [
        "Working on Full-stack applications and delivering it to the clients as per their requirements.",
        "Tech Stack- Nextjs,Typescript",
      ],
    },
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
      name: "Dev-Room",
      description:
        "A pair programming platform where users can join and connect with other developers across the world in their online virtual rooms.",
      tags: [
        {
          name: "Next",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "pink-text-gradient",
        },
      ],
      image: devroom,
      source_code_link: "https://chatroom-production-0afc.up.railway.app/",
    },
    {
      name: "Blogo",
      description:
        "A blogging website where users can share their expertise and knowledge through blogs.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        
      ],
      image: blogo,
      source_code_link: "https://blogo-4fx2.onrender.com/sign-in",
    },
    {
      name: "Genius",
      description:
        "A AI Saas platform where user can generate AI images,videos,code,music.",
      tags: [
        {
          name: "Next",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "pink-text-gradient",
        },
      ],
      image: genius,
      source_code_link: "https://github.com/yath-09/Ai-Platform",
    },
    {
      name: "Homing",
      description:
        "A Platform where you can find best properties for your vacations and stays.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
      ],
      image: homing,
      source_code_link: "https://github.com/yath-09/realEstate",
    },
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
  ];
  
  export { services, technologies, experiences, testimonials, projects};