import { Skill, Experience, Project, Certification, Education, Testimonial, BlogPost, Achievement } from "@/types";

export const NAVIGATION_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/bish-ai",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bishal-biplab-mondal-1b90b8399",
    icon: "Linkedin",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/bish-ai",
    icon: "Code2",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/bish-ai",
    icon: "Badge",
  },
];

export const SKILLS: Skill[] = [
  {
    name: "Python",
    level: 95,
    category: "Programming",
  },
  {
    name: "JavaScript",
    level: 90,
    category: "Programming",
  },
  {
    name: "TypeScript",
    level: 90,
    category: "Programming",
  },
  {
    name: "Java",
    level: 85,
    category: "Programming",
  },
  {
    name: "C++",
    level: 80,
    category: "Programming",
  },
  {
    name: "SQL",
    level: 88,
    category: "Programming",
  },
  {
    name: "React",
    level: 92,
    category: "Frontend",
  },
  {
    name: "Next.js",
    level: 93,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    level: 95,
    category: "Frontend",
  },
  {
    name: "HTML & CSS",
    level: 95,
    category: "Frontend",
  },
  {
    name: "Node.js",
    level: 88,
    category: "Backend",
  },
  {
    name: "Express.js",
    level: 87,
    category: "Backend",
  },
  {
    name: "Django",
    level: 85,
    category: "Backend",
  },
  {
    name: "FastAPI",
    level: 84,
    category: "Backend",
  },
  {
    name: "TensorFlow",
    level: 88,
    category: "AI/ML",
  },
  {
    name: "PyTorch",
    level: 87,
    category: "AI/ML",
  },
  {
    name: "Scikit-learn",
    level: 90,
    category: "AI/ML",
  },
  {
    name: "HuggingFace",
    level: 85,
    category: "AI/ML",
  },
  {
    name: "LangChain",
    level: 83,
    category: "AI/ML",
  },
  {
    name: "OpenCV",
    level: 82,
    category: "AI/ML",
  },
  {
    name: "PostgreSQL",
    level: 88,
    category: "Database",
  },
  {
    name: "MongoDB",
    level: 85,
    category: "Database",
  },
  {
    name: "Firebase",
    level: 82,
    category: "Database",
  },
  {
    name: "AWS",
    level: 80,
    category: "Cloud",
  },
  {
    name: "Docker",
    level: 85,
    category: "Cloud",
  },
  {
    name: "Git",
    level: 92,
    category: "Cloud",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    company: "Codexa Indotech Ltd",
    position: "Full Stack Developer Intern",
    duration: "June 2024 - Present",
    description: "Developing and maintaining full-stack web applications using modern technologies.",
    achievements: [
      "Built responsive web applications with React and Next.js",
      "Implemented RESTful APIs using Node.js and Express",
      "Optimized database queries improving performance by 40%",
      "Collaborated with cross-functional teams on product development",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    startDate: "2024-06",
    endDate: "Present",
  },
  {
    id: "2",
    company: "Bluestock Fintech",
    position: "Data Analyst Intern",
    duration: "April 2024 - May 2024",
    description: "Analyzed financial data and created visualizations for business intelligence.",
    achievements: [
      "Processed and analyzed large datasets using Python and Pandas",
      "Created interactive dashboards with Power BI",
      "Identified key trends improving business decision-making by 25%",
      "Developed automated data pipelines reducing manual work by 60%",
    ],
    technologies: ["Python", "Pandas", "Power BI", "SQL", "Excel"],
    startDate: "2024-04",
    endDate: "2024-05",
  },
  {
    id: "3",
    company: "FlyRank AI",
    position: "AI/ML Intern",
    duration: "February 2024 - March 2024",
    description: "Developed machine learning models for various AI applications.",
    achievements: [
      "Built and trained deep learning models using TensorFlow",
      "Achieved 92% accuracy on classification tasks",
      "Implemented NLP solutions for text processing",
      "Documented and presented findings to stakeholders",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    startDate: "2024-02",
    endDate: "2024-03",
  },
  {
    id: "4",
    company: "Ravex Technologies",
    position: "Software Development Intern",
    duration: "December 2023 - January 2024",
    description: "Contributed to software development projects and learned industry best practices.",
    achievements: [
      "Developed features for mobile and web applications",
      "Fixed critical bugs improving system stability",
      "Participated in code reviews and team meetings",
      "Completed training on cloud technologies and DevOps",
    ],
    technologies: ["Java", "JavaScript", "React", "AWS", "Docker"],
    startDate: "2023-12",
    endDate: "2024-01",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Multi-Disease Classifier",
    description: "An AI-powered multi-disease classification system that predicts multiple diseases from patient symptoms and medical data using advanced machine learning models. Built for accurate, real-time health screening.",
    technologies: ["Python", "Machine Learning", "React", "FastAPI", "scikit-learn"],
    liveUrl: "https://bishmultidiseaseclassifier.netlify.app/",
    tags: ["AI", "Healthcare", "ML", "Classification"],
    featured: true,
  },
  {
    id: "2",
    title: "BISH Bank Churn Prediction",
    description: "AI-powered customer churn prediction system for banking. Uses machine learning to identify customers at risk of leaving, enabling proactive retention strategies with an interactive 3D visualization dashboard.",
    technologies: ["Python", "Machine Learning", "scikit-learn", "JavaScript", "Three.js"],
    liveUrl: "https://bishbankchurnprediction.netlify.app/",
    tags: ["AI", "Finance", "ML", "Prediction"],
    featured: true,
  },
  {
    id: "3",
    title: "BishGuard — AI Phishing Detection",
    description: "Real-time AI phishing URL and threat detection system. Analyzes URLs and web content to identify phishing attempts using machine learning, protecting users from cyber threats with instant verdicts.",
    technologies: ["Python", "Machine Learning", "NLP", "JavaScript", "Security"],
    liveUrl: "https://sprightly-chaja-66bb37.netlify.app/",
    tags: ["AI", "Cybersecurity", "NLP", "Detection"],
    featured: true,
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "1",
    name: "Microsoft Azure AI-300",
    issuer: "Microsoft",
    issueDate: "2024-03",
    credentialId: "AI300-2024",
  },
  {
    id: "2",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issueDate: "2024-02",
    credentialId: "AWS-CP-2024",
  },
  {
    id: "3",
    name: "Python Professional Certification",
    issuer: "Coursera",
    issueDate: "2024-01",
    credentialId: "PYTHON-2024",
  },
  {
    id: "4",
    name: "Machine Learning Specialization",
    issuer: "Coursera",
    issueDate: "2023-12",
    credentialId: "ML-SPEC-2023",
  },
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    institution: "Your University",
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    startDate: "2021",
    endDate: "2025",
    grade: "8.5/10",
    description: "Specialization in AI and Machine Learning with focus on deep learning and NLP.",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "1",
    title: "Hackathons",
    description: "Participated and won multiple hackathons",
    icon: "Trophy",
    count: 5,
    label: "Won",
  },
  {
    id: "2",
    title: "Coding Contests",
    description: "Competed in competitive programming contests",
    icon: "Target",
    count: 15,
    label: "Contests",
  },
  {
    id: "3",
    title: "Internships",
    description: "Completed internships at leading tech companies",
    icon: "Briefcase",
    count: 4,
    label: "Companies",
  },
  {
    id: "4",
    title: "Open Source",
    description: "Contributions to open source projects",
    icon: "GitBranch",
    count: 12,
    label: "Contributions",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "John Doe",
    role: "CEO",
    company: "Tech Company Inc",
    message: "Bishal is an exceptional developer with great problem-solving skills and attention to detail.",
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Tech Lead",
    company: "Startup XYZ",
    message: "Working with Bishal was a pleasure. He brought innovative solutions and great teamwork to our projects.",
  },
  {
    id: "3",
    name: "Mike Johnson",
    role: "CTO",
    company: "Enterprise Corp",
    message: "Bishal's expertise in AI and ML helped us implement cutting-edge solutions for our business.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with LangChain",
    description: "A comprehensive guide to building LLM applications using LangChain framework.",
    category: "AI",
    date: "2024-06-15",
    readTime: "8 min",
  },
  {
    id: "2",
    title: "Deep Learning for Computer Vision",
    description: "Exploring CNN architectures and their applications in real-world scenarios.",
    category: "ML",
    date: "2024-06-10",
    readTime: "12 min",
  },
  {
    id: "3",
    title: "Python Best Practices",
    description: "Essential tips for writing clean, maintainable, and efficient Python code.",
    category: "Python",
    date: "2024-06-05",
    readTime: "10 min",
  },
  {
    id: "4",
    title: "Cloud Architecture with AWS",
    description: "Designing scalable and resilient applications on AWS infrastructure.",
    category: "Cloud",
    date: "2024-05-30",
    readTime: "15 min",
  },
];
