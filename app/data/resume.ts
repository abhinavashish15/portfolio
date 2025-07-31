/** @format */

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone?: string;
    location: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
  summary: string;
  skills: {
    technical: string[];
    soft: string[];
    tools: string[];
  };
  experience: Array<{
    company: string;
    position: string;
    duration: string;
    location: string;
    description: string[];
    technologies: string[];
  }>;
  education: Array<{
    institution: string;
    degree: string;
    duration: string;
    gpa?: string;
  }>;
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    github?: string;
    live?: string;
    highlights: string[];
  }>;
  certifications?: Array<{
    name: string;
    issuer: string;
    date: string;
  }>;
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Abhinav Ashish",
    title: "Full Stack Software Engineer | AI Integrations & Scalable Web Apps",
    email: "abhinavashissh@gmail.com",
    location: "Bangalore, India",
    linkedin: "https://linkedin.com/in/abhinavashish15",
    github: "https://github.com/abhinavashish15",
    website: "https://yourwebsite.com",
  },
  summary:
    "Passionate Full-Stack Developer skilled in building scalable web apps, Chrome extensions, and AI-powered tools. Experienced with modern tech stacks like Next.js, React, Node.js, and Tailwind, with a focus on performance, clean code, and great user experience.",
  skills: {
    technical: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Python",
      "Java",
      "HTML/CSS",
      "Tailwind CSS",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "TensorFlow",
      "OpenCV",
      "Streamlit",
      "NumPy",
      "AWS",
      "Firebase",
      "Supabase",
      "REST APIs",
      "Cursor AI",
      "Git",
      "GitHub",
      "Web Scraping",
      "Chrome DevTools",
      "Chrome Extensions",
      "Chrome APIs",
    ],
    soft: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Time Management",
      "Adaptability",
      "Leadership",
    ],
    tools: ["Git", "VS Code", "Vercel", "Netlify"],
  },
  experience: [
    {
      company: "AdSpyder",
      position: "Web Development Intern",
      duration: "September 2024 - March 2025",
      location: "In Office",
      description: [
        "Developed and maintained Chrome extensions for web automation and ad intelligence using JavaScript and React",
        "Built tools to extract and analyze ad data from platforms like Facebook and Google using DOM manipulation and API interception",
        "Collaborated with the product team to deliver lightweight, high-performance browser tools with intuitive UI",
        "Worked on web scraping and data parsing to enhance ad tracking accuracy and competitive insights",
      ],
      technologies: [
        "JavaScript",
        "React",
        "Chrome Extensions API",
        "HTML",
        "CSS",
        "Web Scraping",
        "DOM Manipulation",
        "API Interception",
        "Git",
      ],
    },
    {
      company: "EverReady AI",
      position: "Software Engineer Intern",
      duration: "June 2025 - Present",
      location: "Remote",
      description: [
        "Built and maintained AI-integrated web applications using Next.js, React, and TypeScript",
        "Developed backend APIs using Python FastAPI to support AI chat workflows and user interactions",
        "Integrated CopilotKit to create full-screen and embedded AI chatbots and assistants",
        "Collaborated with the design team to implement responsive, animated, and user-friendly UIs",
        "Focused on clean architecture, scalability, and performance optimization across components",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Python",
        "FastAPI",
        "CopilotKit",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "Git",
      ],
    },
  ],
  education: [
    {
      institution: "JSS Academy of Technical Education, Bangalore",
      degree: "Bachelor of Engineering in Computer Science",
      duration: "Dec 2021 - May 2025",
      gpa: "8.0/10",
    },
  ],
  projects: [
    {
      name: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring AI chat integration and smooth animations.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      github: "https://github.com/abhinavashish15/portfolio",
      live: "https://portfolio.vercel.app",
      highlights: [
        "AI-powered chat assistant using CopilotKit",
        "Responsive design with dark mode support",
        "Smooth animations and transitions",
        "SEO optimized with Next.js",
      ],
    },
    {
      name: "Sorting Visualizer",
      description:
        "An interactive tool that visually demonstrates sorting algorithms like Bubble Sort, Merge Sort, and Quick Sort using animations.",
      technologies: ["JavaScript", "HTML", "CSS", "React"],
      github: "https://github.com/abhinavashish15/sorting-visualizer",
      live: "https://sorting-visualizer.vercel.app",
      highlights: [
        "Visual representation of sorting algorithms",
        "Interactive controls to adjust speed and array size",
        "Educational tool for understanding algorithm efficiency",
      ],
    },
  ],
  certifications: [
    {
      name: "Full Stack Web Development",
      issuer: "Udemy",
      date: "2023",
    },
  ],
};
