export interface Project {
  id: string;
  title: string;
  category: "Web Application" | "Machine Learning" | "Systems & Tools";
  period: string;
  description: string;
  bullets: string[];
  tags: string[];
  image: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  specialization: string;
  gpa: string;
  details: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    monogram: string;
    tagline: string;
    heroHeadline1: string;
    heroHeadline2: string;
    role: string;
    bio: string[];
    email: string;
    phone?: string;
    location: string;
    social: {
      github: string;
      linkedin?: string;
      twitter?: string;
      instagram?: string;
      portfolio?: string;
    };
  };
  stats: {
    projectsCompleted: string;
    cgpa: string;
    leadershipRole: string;
    coreTechnologies: string;
  };
  technologies: string[];
  skills: {
    category: string;
    items: string[];
  }[];
  education: EducationItem[];
  certifications: Certification[];
  achievements: string[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Jayesh Jaiswal",
    monogram: "JJ",
    tagline: "Passionate MERN Stack Developer & Tech Enthusiast.",
    heroHeadline1: "Building dynamic, responsive, and intelligent web applications.",
    heroHeadline2: "Fusing Generative AI with scalable modern software solutions.",
    role: "MERN Stack Developer & AI Enthusiast",
    bio: [
      "I am Jayesh Jaiswal, a passionate MERN Stack Developer and tech enthusiast pursuing my Bachelor of Technology in Computer Science Engineering at VIT Bhopal University.",
      "I specialize in building dynamic, responsive web applications and AI-driven platforms using modern frameworks like React.js, FastAPI, Tailwind CSS, and the Google Gemini API.",
      "Beyond technical development, I bring proven leadership in media, outreach, and communications as the NSS VIT Bhopal PR & Outreach Lead, combining analytical problem-solving with creative collaboration."
    ],
    email: "jayeshjaiswal2022@vitbhopal.ac.in",
    location: "Bhopal, Madhya Pradesh, India",
    social: {
      github: "https://github.com/jayesssshhhhhh",
      linkedin: "https://linkedin.com",
      portfolio: "https://jayesh-portfolio.vercel.app"
    }
  },
  stats: {
    projectsCompleted: "5+",
    cgpa: "6.78 / 10",
    leadershipRole: "NSS Media Lead",
    coreTechnologies: "12+"
  },
  technologies: [
    "React.js",
    "FastAPI",
    "Python",
    "JavaScript",
    "Google Gemini API",
    "Generative AI",
    "Tailwind CSS",
    "C++",
    "SQLAlchemy",
    "SQLite",
    "AWS",
    "Git & GitHub",
    "REST APIs",
    "Prompt Engineering",
    "HTML & CSS",
    "Modular Programming"
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["C", "C++", "Python", "JavaScript", "HTML", "CSS"]
    },
    {
      category: "Frameworks & Tools",
      items: ["React.js", "FastAPI", "Tailwind CSS", "Tkinter", "Git & GitHub", "SQLite", "SQLAlchemy", "Bootstrap", "React Router", "Auth0"]
    },
    {
      category: "AI & Modern Development",
      items: ["Prompt Engineering", "Generative AI", "Google Gemini API", "AI-Based App Development", "REST APIs", "AWS Cloud Basics"]
    },
    {
      category: "Core Computer Science",
      items: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"]
    },
    {
      category: "Professional & Leadership Skills",
      items: ["Debugging & Troubleshooting", "Problem-Solving", "Team Collaboration", "Modular Programming", "UI Development", "Public Relations & Event Outreach"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology - Computer Science Engineering",
      institution: "VIT Bhopal University",
      period: "Nov 2022 – Sep 2026",
      location: "Bhopal, India",
      specialization: "Specialization in Education Technology",
      gpa: "Current CGPA: 6.78 / 10.00",
      details: [
        "Specialization in Education Technology focusing on modern pedagogical tech and AI learning systems.",
        "Completed 10th (MP Board, 92%) and 12th (MP Board, 78%) with a strong academic foundation."
      ]
    }
  ],
  certifications: [
    {
      title: "Python Essentials",
      issuer: "Cisco Networking Academy / Python Institute",
      date: "Verified Certification",
      credentialUrl: "https://www.credly.com"
    },
    {
      title: "Fundamentals of AI and ML",
      issuer: "Professional AI Program",
      date: "Verified Certification",
      credentialUrl: "https://www.coursera.org"
    },
    {
      title: "Foundations of Computer Science & Web Development",
      issuer: "Coursera",
      date: "Verified Certification",
      credentialUrl: "https://www.coursera.org"
    }
  ],
  achievements: [
    "Social Media, Photography, PR & Outreach Lead, NSS VIT Bhopal (2023–2025); spearheaded social media strategies and college-wide event communications.",
    "Led and managed a dedicated media team of fewer than 20 members during NSS Annual Camp 2025, ensuring cohesive coverage and public engagement.",
    "Contributed to marketing and outreach for Advitya, VIT Bhopal's premier annual cultural and technical fest; actively participated in university outreach campaigns across Madhya Pradesh."
  ],
  projects: [
    {
      id: "adaptive-learning",
      title: "AI-Driven Adaptive Learning Platform",
      category: "Machine Learning",
      period: "Aug'25 – July'26",
      description: "An AI-powered adaptive learning platform featuring personalized study pathways, dynamically generated quizzes, and an interactive AI tutor powered by Gemini API.",
      bullets: [
        "Architected an AI-powered personalized study pathway system with dynamic quizzes and real-time AI tutoring.",
        "Engineered quiz history analytics, performance metric tracking, and diagnostic learner strengths/weaknesses profiling.",
        "Integrated PDF-based learning support using Google Gemini API to extract concepts and create interactive study companions."
      ],
      tags: ["React.js", "Tailwind CSS", "FastAPI", "SQLAlchemy", "SQLite", "Google Gemini API"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
      github: "https://github.com",
      link: "https://github.com",
      featured: true
    },
    {
      id: "code-puzzle",
      title: "Code Puzzle — Interactive Programming Platform",
      category: "Web Application",
      period: "March'24 – May'24",
      description: "Interactive drag-and-drop code puzzle platform featuring guided programming exercises in C, C++, and Python to reinforce foundational coding concepts.",
      bullets: [
        "Built interactive drag-and-drop code reconstruction puzzles covering C, C++, and Python.",
        "Designed language-specific curriculum navigation and integrated Auth0 for secure user authentication and progress tracking.",
        "Engineered responsive UI using React Router and Bootstrap with instant feedback validation."
      ],
      tags: ["React.js", "JavaScript", "React Router", "Bootstrap", "Auth0"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
      github: "https://github.com",
      link: "https://github.com",
      featured: true
    },
    {
      id: "algomind",
      title: "AlgoMind — Mental Health Awareness Platform",
      category: "Web Application",
      period: "Aug'23 – Oct'23",
      description: "Educational mental health awareness platform featuring interactive depression self-assessment tools, structured clinical guidance, and therapist support directories.",
      bullets: [
        "Developed structured self-assessment quizzes providing personalized feedback based on depressive symptom levels.",
        "Curated comprehensive wellness resource portals, therapist discovery sections, and actionable coping strategies.",
        "Built with clean, accessible semantic HTML5, CSS3, and JavaScript for seamless device responsiveness."
      ],
      tags: ["HTML5", "CSS3", "JavaScript", "UI/UX", "Mental Health Tech"],
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80",
      github: "https://github.com",
      link: "https://github.com",
      featured: true
    },
    {
      id: "train-management",
      title: "Train Management System",
      category: "Systems & Tools",
      period: "July'26 – Aug'26",
      description: "Desktop railway management system featuring an intuitive Tkinter GUI to monitor trains, manage schedule delays, and filter real-time transit status.",
      bullets: [
        "Built a modular desktop application to monitor operational statuses for sample trains.",
        "Implemented real-time delay handling, schedule updates, and cancellation processing.",
        "Applied Object-Oriented Programming (OOP) paradigms for maintainable, decoupled code architecture."
      ],
      tags: ["Python", "Tkinter", "GUI", "OOP", "Software Engineering"],
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&auto=format&fit=crop&q=80",
      github: "https://github.com",
      featured: false
    },
    {
      id: "course-registration",
      title: "Student Course Registration System",
      category: "Systems & Tools",
      period: "Academic Project",
      description: "High-performance modular registration system in C utilizing nested structures, pointers, and memory-safe functions to manage academic enrollments.",
      bullets: [
        "Engineered a core course enrollment engine in C utilizing nested structures and pointer arithmetic.",
        "Implemented robust data validation, student profile registries, and dynamic record retrieval.",
        "Demonstrated modular programming principles with clean separation of concerns."
      ],
      tags: ["C", "Pointers", "Data Structures", "Modular Programming"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
      github: "https://github.com",
      featured: false
    }
  ]
};
