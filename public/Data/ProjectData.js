
import img1 from "../Images/p1.png";
import img2 from "../Images/p2.png";
import img3 from "../Images/p3.png";
import img4 from "../Images/p4.png";
import img5 from "../Images/p5.png";
import img6 from "../Images/p6.png";


export const projectsData = [
  {
    id: 101,
    title: "E-Commerce Platform",
    type: "Fullstack",
    image: img1,

    desc: "Full MERN stack e-commerce platform with payment integration.",

    longDesc:
      "A complete e-commerce solution built using MERN stack. It includes authentication, product management, shopping cart, and secure payment integration.",

    client: "Startup Client",
    duration: "3 Months",
    role: "Fullstack Developer",

    challenge:
      "Building a scalable system with secure payment and real-time cart updates.",

    solution:
      "Used Stripe for payments and optimized backend APIs for performance.",

    outcome:
      "Successfully delivered a fast, secure, and scalable platform with smooth UX.",

    features: [
      "User Authentication",
      "Product Management",
      "Cart & Checkout",
      "Stripe Integration",
      "Admin Dashboard",
    ],

    tech: ["React", "Node.js", "MongoDB", "Stripe"],

    liveLink: "https://james-carter-ivory.vercel.app",
    githubLink: "https://github.com/example/ecommerce",
  },

  {
    id: 102,
    title: "Portfolio Website",
    type: "Frontend",
    image: img2,

    desc: "Modern animated personal portfolio website.",

    longDesc:
      "A clean and modern portfolio showcasing projects, skills, and contact information with smooth animations and responsive layout.",

    client: "Personal Project",
    duration: "2 Weeks",
    role: "Frontend Developer",

    challenge:
      "Creating smooth animations without affecting performance.",

    solution:
      "Used Framer Motion carefully and optimized animation triggers.",

    outcome:
      "A visually appealing and smooth-performing portfolio website.",

    features: [
      "Responsive Design",
      "Dark/Light Mode",
      "Smooth Animations",
      "Reusable Components",
    ],

    tech: ["React", "Tailwind", "Framer Motion"],

    liveLink: "https://ryan-mitchell.vercel.app",
    githubLink: "https://github.com/example/portfolio",
  },

  {
    id: 103,
    title: "Blog Platform",
    type: "Fullstack",
    image: img3,

    desc: "Full blog system with authentication and CMS.",

    longDesc:
      "A blogging platform where users can create, edit, and manage posts with authentication and admin control.",

    client: "Content Creator",
    duration: "1.5 Months",
    role: "Fullstack Developer",

    challenge:
      "Managing user roles and secure content management.",

    solution:
      "Implemented role-based authentication and secure APIs.",

    outcome:
      "A stable and user-friendly blogging system.",

    features: [
      "User Authentication",
      "Post CRUD",
      "Comments",
      "Admin Panel",
    ],

    tech: ["Next.js", "Node.js", "MongoDB"],

    liveLink: "https://grace-wilson.vercel.app",
    githubLink: "https://github.com/example/blog",
  },

  {
    id: 104,
    title: "Admin Dashboard",
    type: "Backend",
    image: img4,

    desc: "Analytics dashboard with API integration.",

    longDesc:
      "A backend-focused dashboard system that provides real-time data and analytics visualization.",

    client: "Business Client",
    duration: "2 Months",
    role: "Backend Developer",

    challenge:
      "Handling large data and real-time updates efficiently.",

    solution:
      "Optimized API responses and used efficient query handling.",

    outcome:
      "A fast and responsive analytics dashboard.",

    features: [
      "Real-time Data",
      "API Integration",
      "User Management",
      "Analytics Charts",
    ],

    tech: ["Node.js", "Express", "Chart.js"],

    liveLink: "https://jack-harrison.vercel.app",
    githubLink: "https://github.com/example/dashboard",
  },

  {
    id: 105,
    title: "UI Landing Page",
    type: "UI/UX",
    image: img5,

    desc: "Modern SaaS landing page design.",

    longDesc:
      "A high-converting SaaS landing page with modern UI design and smooth animations.",

    client: "SaaS Startup",
    duration: "10 Days",
    role: "UI Developer",

    challenge:
      "Balancing design aesthetics with performance.",

    solution:
      "Optimized UI components and used lightweight animations.",

    outcome:
      "A clean, modern and conversion-focused landing page.",

    features: [
      "Modern UI",
      "Responsive Layout",
      "Fast Performance",
      "Smooth Animations",
    ],

    tech: ["React", "Tailwind"],

    liveLink: "https://ella-thompson.vercel.app",
    githubLink: "https://github.com/example/landing",
  },

  {
    id: 106,
    title: "Task Manager App",
    type: "Fullstack",
    image: img6,

    desc: "Drag & drop task management system.",

    longDesc:
      "A productivity app that allows users to manage tasks with drag-and-drop functionality and real-time updates.",

    client: "Productivity Startup",
    duration: "1 Month",
    role: "Fullstack Developer",

    challenge:
      "Implementing smooth drag-and-drop with real-time sync.",

    solution:
      "Used optimized state management and efficient backend sync.",

    outcome:
      "A responsive and user-friendly task management app.",

    features: [
      "Drag & Drop",
      "Real-time Updates",
      "Task Categories",
      "Authentication",
    ],

    tech: ["React", "Node.js", "MongoDB"],

    liveLink: "https://adrian-cole.vercel.app",
    githubLink: "https://github.com/example/taskapp",
  },
];