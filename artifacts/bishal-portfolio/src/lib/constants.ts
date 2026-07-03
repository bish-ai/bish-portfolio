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
  // Languages
  { name: "Python", level: 95, category: "Languages" },
  { name: "SQL", level: 88, category: "Languages" },
  { name: "Dart", level: 75, category: "Languages" },
  { name: "C++", level: 78, category: "Languages" },
  // ML Frameworks
  { name: "Scikit-learn", level: 92, category: "ML Frameworks" },
  { name: "TensorFlow", level: 88, category: "ML Frameworks" },
  { name: "TensorFlow Lite", level: 85, category: "ML Frameworks" },
  { name: "PyTorch", level: 84, category: "ML Frameworks" },
  { name: "XGBoost", level: 87, category: "ML Frameworks" },
  { name: "Hugging Face", level: 78, category: "ML Frameworks" },
  // MLOps & Deployment
  { name: "FastAPI", level: 88, category: "MLOps & Deployment" },
  { name: "Flask", level: 85, category: "MLOps & Deployment" },
  { name: "Streamlit", level: 87, category: "MLOps & Deployment" },
  { name: "Docker", level: 78, category: "MLOps & Deployment" },
  { name: "Firebase Hosting", level: 80, category: "MLOps & Deployment" },
  { name: "Netlify", level: 85, category: "MLOps & Deployment" },
  // Deep Learning / AI
  { name: "CNN", level: 86, category: "Deep Learning / AI" },
  { name: "ANN", level: 88, category: "Deep Learning / AI" },
  { name: "RNN", level: 82, category: "Deep Learning / AI" },
  { name: "Transformers", level: 79, category: "Deep Learning / AI" },
  { name: "LangChain", level: 76, category: "Deep Learning / AI" },
  { name: "Prompt Engineering", level: 83, category: "Deep Learning / AI" },
  // NLP
  { name: "Text Preprocessing", level: 90, category: "NLP" },
  { name: "TF-IDF", level: 88, category: "NLP" },
  { name: "Word2Vec", level: 84, category: "NLP" },
  { name: "BERT", level: 76, category: "NLP" },
  // Data & Pipelines
  { name: "Pandas", level: 93, category: "Data & Pipelines" },
  { name: "NumPy", level: 92, category: "Data & Pipelines" },
  { name: "SMOTE", level: 85, category: "Data & Pipelines" },
  { name: "Feature Engineering", level: 88, category: "Data & Pipelines" },
  { name: "Hyperparameter Tuning", level: 86, category: "Data & Pipelines" },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    company: "Bluestock Fintech",
    position: "Data Analyst",
    duration: "Jun 2026 – Aug 2026 · Remote",
    description: "Performed financial data analysis on real-world fintech datasets, building dashboards and generating actionable business insights for leadership.",
    achievements: [
      "Performed financial data analysis on real-world fintech datasets and built executive dashboards surfacing actionable business insights",
      "Applied data wrangling, statistical analysis, and visualisation pipelines — skills directly transferable to ML data pipeline construction and monitoring",
      "Collaborated cross-functionally in a fast-paced fintech environment, adapting quickly to evolving data requirements",
    ],
    technologies: ["Python", "Pandas", "NumPy", "SQL", "Data Visualisation", "Statistical Analysis"],
    startDate: "2026-06",
    endDate: "2026-08",
  },
  {
    id: "2",
    company: "Codexa Infotech LLP",
    position: "AI Engineer",
    duration: "Jun 2026 · Remote",
    description: "Designed and deployed end-to-end machine learning solutions, building production-ready ML pipelines and REST API serving layers for real-world AI applications.",
    achievements: [
      "Built and deployed end-to-end ML pipelines covering data ingestion, feature engineering, model training, evaluation, and REST API serving with FastAPI",
      "Developed deep learning models (CNN, ANN, RNN) for classification and prediction tasks achieving 88 %+ accuracy on real-world datasets",
      "Implemented NLP preprocessing pipelines converting unstructured data into structured model inputs for production inference",
      "Applied MLOps practices including model versioning, reproducible training scripts, and CI/CD-aligned deployment workflows",
    ],
    technologies: ["Python", "FastAPI", "TensorFlow", "Scikit-learn", "XGBoost", "NLP", "Docker", "MLOps"],
    startDate: "2026-06",
    endDate: "2026-06",
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
    institution: "Smt. Indira Gandhi College of Engineering, Navi Mumbai",
    degree: "Bachelor of Technology",
    field: "Computer Science (AI & ML)",
    startDate: "2025",
    endDate: "2029",
    description: "Specialising in Artificial Intelligence and Machine Learning with hands-on focus on deep learning, NLP, MLOps, and production-grade model deployment.",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "1",
    title: "Edge ML Deployment",
    description: "Deployed TensorFlow Lite model achieving real-time on-device inference at <50ms latency — production-grade edge ML deployment",
    icon: "Zap",
    count: 50,
    label: "ms latency",
  },
  {
    id: "2",
    title: "Model Accuracy",
    description: "Built student performance prediction model with 88% accuracy on real academic data; identified at-risk students",
    icon: "Target",
    count: 88,
    label: "% accuracy",
  },
  {
    id: "3",
    title: "Data Pipeline Scale",
    description: "Preprocessed and cleaned 10,000+ entries from noisy real-world datasets — data pipeline reliability at scale",
    icon: "Database",
    count: 10000,
    label: "records cleaned",
  },
  {
    id: "4",
    title: "ML API Serving",
    description: "Deployed a Flask ML API enabling real-time predictions through a web interface — end-to-end model serving experience",
    icon: "Server",
    count: 3,
    label: "APIs deployed",
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
