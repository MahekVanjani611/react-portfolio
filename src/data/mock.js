export const mockData = {
  // Personal Information
  personal: {
    name: "Mahek Vanjani",
    title: "Software Developer",
    tagline: "Crafting digital solutions with clean code and innovative thinking",
    email: "b22ee088@iitj.ac.in",
    phone: "+91 9512080717",
    location: "Gujarat, India",
    linkedin: "https://www.linkedin.com/in/mahek-vanjani-93477a253/",
    github: "https://github.com/MahekVanjani611",
    portfolio: "https://mahekvanjani6112024.netlify.app/"
  },

  // About/Resume Summary
  about: {
    summary: "Passionate software developer with expertise in modern web technologies and a strong focus on user experience and performance.",
    resumeUrl: "/MahekCV4.pdf"
  },

  // Internship Experience
  experience: {
      // image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftechnology.desktopnexus.com%2Fwallpaper%2F293488%2F&psig=AOvVaw0tJVL63ezY5dVEfKbqxbCu&ust=1756062156328000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMCUrLrPoY8DFQAAAAAdAAAAABAK",
      company: "NVIDIA",
      position: "System Software Engineer Intern",
      duration: "Summer 2025",
      location: "On-site",
      description: "Worked on Linux device driver performance optimizations for NVIDIA GPUs, applying OOP and software systems expertise.",
      achievements: [
        "Resolved NVBug bottlenecks, eliminating FPS drops (up to 30%) and enhancing user experience.",
        "Refactored a 32,000-node singly linked list into an unrolled list, reducing pointer dereferences 16× and cache misses 94%, lowering traversal latency from 1.6 ms to 0.1 ms.",
        "Diagnosed and resolved a multithreading race condition, improving driver stability for 1000+ end-users."
      ],
      technologies: ["C++", "Linux Kernel", "Data Structures", "Multithreading", "Performance Optimization"]
    },
  

 // Selected Technical Projects
  projects: [
            {
      id: 1,
      title: "Open Source-GirlScript Summer of Code",
      description: "Contributed to the GirlScript Summer of Code project by adding different features and fixing bugs.",
      image: "/unnamed (2).jpg",
      technologies: ["HTML","CSS","React","JavaScript","Node.js","Express.js","MongoDB"],
      githubUrl: "https://github.com/MahekVanjani611/",
      highlights: ["Full-stack implementation"]
    },
        {
      id: 2,
      title: "Project Recommendation System",
      description: "Developed a recommendation system using content-based filtering to suggest projects based on user preferences.",
      image: "/unnamed (1).jpg",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy","MongoDB","React"],
      githubUrl: "https://github.com/MahekVanjani611/Project_Recommendation",
      highlights: ["Content-based filtering", "User preference analysis", "Full-stack implementation"]
    },
    {
      id: 3,
      title: "Efficient Computations on ML Accelerators",
      description: "Enhanced a Vision Transformer (ViT) model, reducing computation cycles from 7 to 3 via algorithm-level optimizations.",
      image: "/Canva-AI-artificial-intelligence.jpg",
      technologies: ["Verilog", "RTL", "Pynq-Z2", "Kintex-7", "Transformers"],
      githubUrl: "https://github.com/MahekVanjani611/FPGA_ML_Accelerator",
      highlights: ["Optimized RTL design", "Algorithm-level optimizations", "Large speedups on FPGA boards"]
    },

    {
      id: 4,
      title: "Sentiment Classification (IIT Jodhpur)",
      description: "Performed EDA and built multiple NLP pipelines for sentiment classification.",
      image: "/unnamed.jpg",
      technologies: ["Python", "Scikit-learn", "NLP", "EDA"],
      githubUrl: "https://github.com/MahekVanjani611/PRML_Sentiment-Classification",
      liveUrl: "https://prml-web-page-seven.vercel.app/",
      highlights: ["84% accuracy", "Tuned Random Forest & Logistic Regression", "Data-driven insights"]
    }
  ],


  // Skills
skills: {
  frontend: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "TailwindCSS"],
  backend: ["Node.js", "Express.js", "Python", "C/C++", "Java"],
  database: ["MongoDB", "SQL"],
  hardware: ["Verilog", "MATLAB"],
  tools: ["Git", "Docker", "Kubernetes", "Netlify", "VS Code", "Excel"],
  libraries: ["PyTorch", "TensorFlow", "Pandas", "NumPy"],
  concepts: [
    "Machine Learning",
    "Natural Language Processing",
    "Neural Networks",
    "Database Management Systems",
    "Software Systems",
    "CI/CD",
    "Responsive Design"
  ]
}
,

  // Contact
  contact: {
    email: "b22ee088@iitj.ac.in",
    phone: "+91 9512080717",
    location: "Gujarat, India",
    availability: "Available for full-time positions starting July 2026",
    social: {
      linkedin: "https://www.linkedin.com/in/mahek-vanjani-93477a253/",
      github: "https://github.com/MahekVanjani611"
    }
  }
};
