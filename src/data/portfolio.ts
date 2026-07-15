// ─── Portfolio Data ─── All content extracted from resume, GitHub, and documents

export const personalInfo = {
  name: "Saukhyad Mohole",
  fullName: "Mohole Saukhyad Bhupendra",
  initials: "SM",
  title: "Software Developer",
  email: "saukhyad.mohole@gmail.com",
  phone: "+91 8999009516",
  location: "Pune, Maharashtra, India",
  university: "Vellore Institute of Technology, Vellore",
  avatarUrl: "/profile.jpg",
  links: {
    github: "https://github.com/SaukhyadMohole",
    linkedin: "https://linkedin.com/in/saukhyad-mohole",
    resume: "/resume.pdf",
  },
  roles: [
    "Software Developer",
    "AI Engineer",
    "Cloud Enthusiast",
    "Machine Learning Enthusiast",
  ],
  bio: `I'm a Computer Science & Data Science undergraduate at VIT Vellore with a 9.03 CGPA, passionate about building intelligent systems at the intersection of AI, cloud computing, and software engineering. From deploying serverless RAG chatbots on AWS to co-authoring IEEE research on multimodal AI for cancer detection, I thrive on solving complex problems with clean, scalable solutions. Recognized by NUS for the Best Capstone Project in their AI & ML Programme, I bring a strong foundation in full-stack development, machine learning, and cloud architecture.`,
  languages: ["English", "Marathi", "Hindi", "Sanskrit", "Japanese"],
};

export const education = {
  university: "Vellore Institute of Technology",
  location: "Vellore, India",
  degree: "Bachelor of Technology",
  branch: "Computer Science & Engineering — Data Science",
  duration: "2023 – 2027 (Expected)",
  cgpa: "9.03",
  scale: "10.0",
};

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    title: "Programming",
    icon: "code",
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "C" },
      { name: "C++" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "SQL" },
    ],
  },
  {
    title: "Cloud & AWS",
    icon: "cloud",
    skills: [
      { name: "AWS" },
      { name: "Oracle Cloud (OCI)" },
      { name: "Amazon Bedrock" },
      { name: "AWS Lambda" },
      { name: "API Gateway" },
      { name: "Amazon S3" },
      { name: "IAM" },
      { name: "OpenSearch Serverless" },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: "brain",
    skills: [
      { name: "Supervised ML" },
      { name: "Unsupervised ML" },
      { name: "NLP" },
      { name: "LLMs" },
      { name: "RAG" },
      { name: "Prompt Engineering" },
      { name: "Isolation Forest" },
      { name: "Logistic Regression" },
    ],
  },
  {
    title: "Databases",
    icon: "database",
    skills: [
      { name: "MySQL" },
      { name: "SQLite" },
      { name: "Snowflake" },
      { name: "Vector Databases" },
      { name: "ER Modeling" },
    ],
  },
  {
    title: "Web Technologies",
    icon: "globe",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
      { name: "FastAPI" },
      { name: "Flask" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "wrench",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Jupyter Notebook" },
      { name: "Eclipse" },
      { name: "Spyder" },
      { name: "Docker" },
    ],
  },
  {
    title: "Operating Systems",
    icon: "monitor",
    skills: [
      { name: "Windows" },
      { name: "Linux" },
    ],
  },
];

export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  projects: string[];
}

export const experiences: Experience[] = [
  {
    role: "Software Engineering Intern",
    company: "Summer Internship",
    location: "Remote",
    duration: "Summer 2025",
    type: "Internship",
    description:
      "Developed a fully serverless, cloud-native question-answering system powered by Retrieval-Augmented Generation (RAG) on AWS.",
    responsibilities: [
      "Built an AWS-integrated Generative AI chatbot using RAG for documents stored in S3",
      "Implemented serverless architecture with AWS Lambda, API Gateway, and Amazon Bedrock",
      "Designed and deployed OpenSearch Serverless vector store for semantic document retrieval",
      "Created REST APIs with CORS support for cross-origin frontend integrations",
      "Achieved context-aware, grounded responses using Amazon Nova Lite foundation model",
    ],
    technologies: [
      "Python",
      "AWS Lambda",
      "Amazon Bedrock",
      "API Gateway",
      "S3",
      "OpenSearch Serverless",
      "IAM",
    ],
    projects: ["AWS RAG Chatbot"],
  },
];

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: "ai-ml" | "cloud" | "web" | "security" | "data";
  technologies: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
  architecture?: string;
  challenges?: string[];
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "aws-rag-chatbot",
    title: "AWS RAG Chatbot",
    shortDescription:
      "Fully serverless, cloud-native Q&A system powered by Retrieval-Augmented Generation on AWS.",
    fullDescription:
      "An AI-powered chatbot that answers questions from uploaded PDF documents using Retrieval-Augmented Generation (RAG) on AWS. The system ingests PDFs into S3, indexes them through Amazon Bedrock Knowledge Base backed by OpenSearch Serverless, and exposes a REST API for natural language Q&A.",
    category: "cloud",
    technologies: [
      "Python",
      "AWS Lambda",
      "Amazon Bedrock",
      "API Gateway",
      "OpenSearch Serverless",
      "Amazon S3",
      "Amazon Nova Lite",
      "IAM",
    ],
    features: [
      "Retrieval-Augmented Generation for grounded answers",
      "Serverless architecture — zero server management",
      "REST API with CORS for frontend integration",
      "Semantic vector search across document embeddings",
      "PDF-based natural language question answering",
      "Context-aware responses from actual document content",
    ],
    githubUrl: "https://github.com/SaukhyadMohole/AWS-RAG-Chatbot",
    architecture:
      "User → API Gateway → Lambda → Bedrock (RetrieveAndGenerate) → Knowledge Base + OpenSearch → Nova Lite → Response",
    featured: true,
  },
  {
    id: "global-earth-observation",
    title: "Earth's Climate Analytics Dashboard",
    shortDescription:
      "Interactive data visualization dashboard exploring climate change impacts with an Early Warning System.",
    fullDescription:
      "A comprehensive dashboard built with Plotly Dash analyzing Earth's Surface Temperature, CO₂ Emissions, and Sea Level Rise from 1750–2025. Features an Early Warning System that detects climate acceleration using statistical indicators.",
    category: "data",
    technologies: [
      "Python",
      "Plotly Dash",
      "Pandas",
      "Tableau",
      "NumPy",
    ],
    features: [
      "Temperature change visualization with 3D globe",
      "Carbon emissions animated bar chart race",
      "Sea level rise tracking with trend analysis",
      "Correlation analysis across climate indicators",
      "Early Warning System — acceleration & instability detection",
      "Tableau integration for enterprise BI",
    ],
    githubUrl:
      "https://github.com/SaukhyadMohole/Global_Earth_Observation",
    featured: true,
  },
  {
    id: "crypto-healthshield-ids",
    title: "Crypto HealthShield IDS",
    shortDescription:
      "Hybrid intrusion detection system combining signature rules with ML anomaly detection for healthcare data.",
    fullDescription:
      "A full-stack Hybrid IDS that combines signature-based rule matching with ML-powered anomaly detection (IsolationForest) to protect healthcare data in real time. Features a premium dark-mode dashboard with live simulation and colour-coded alerts.",
    category: "security",
    technologies: [
      "Python",
      "Flask",
      "scikit-learn",
      "IsolationForest",
      "JavaScript",
      "HTML/CSS",
    ],
    features: [
      "Signature engine for brute-force & exfiltration detection",
      "ML-based anomaly detection with IsolationForest",
      "Hybrid decision engine — rules + ML",
      "Real-time traffic simulator with 30% attack injection",
      "Live web dashboard with scrolling alerts",
    ],
    githubUrl:
      "https://github.com/SaukhyadMohole/Crypto_HealthShield-IDS",
    featured: true,
  },
  {
    id: "ai-feedback-system",
    title: "AI Personalized Feedback System",
    shortDescription:
      "Full-stack ML application predicting student performance with FastAPI, React, and Docker.",
    fullDescription:
      "A containerized machine learning application that predicts student pass/fail outcomes based on attendance, marks, and internal scores. Built with FastAPI backend, React + TypeScript frontend, and Logistic Regression model.",
    category: "ai-ml",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "scikit-learn",
      "Docker",
      "SQLite",
    ],
    features: [
      "Logistic Regression prediction model",
      "RESTful API with FastAPI + SQLAlchemy",
      "React + TypeScript frontend with admin panel",
      "Docker & Docker Compose containerization",
      "CSV data import and model retraining pipeline",
    ],
    githubUrl:
      "https://github.com/SaukhyadMohole/AI_Personalized_Feedback_System",
    featured: true,
  },
  {
    id: "splitsmart",
    title: "SplitSmart",
    shortDescription:
      "Expense splitting app with smart settlement algorithm, multi-currency support, and dark mode.",
    fullDescription:
      "A frontend-only web application for groups to fairly divide expenses. Features smart settlement algorithm that minimizes transactions, multi-currency support, spending insights, and search/filter capabilities.",
    category: "web",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Smart settlement algorithm minimizing transactions",
      "Multi-currency support (INR, USD, EUR, GBP, SGD)",
      "Spending insights and analytics",
      "Search, filter by category",
      "Dark mode with state persistence",
      "Fully responsive — no external libraries",
    ],
    githubUrl: "https://github.com/SaukhyadMohole/SplitSmart",
    featured: true,
  },
  {
    id: "insider-threat-detection",
    title: "Insider Threat Detection System",
    shortDescription:
      "Unsupervised ML system detecting insider threats via login pattern and file access behaviour analysis.",
    fullDescription:
      "An unsupervised machine learning system that detects potential insider threats by analyzing user login patterns and file access behaviour using Isolation Forest anomaly detection. Operates without labelled data.",
    category: "security",
    technologies: [
      "Python",
      "scikit-learn",
      "Pandas",
      "Matplotlib",
      "IsolationForest",
    ],
    features: [
      "Synthetic dataset generation with controllable behaviour",
      "7 engineered behavioural features per user",
      "StandardScaler normalization",
      "Isolation Forest anomaly detection",
      "Scatter plot visualization with anomaly highlighting",
    ],
    githubUrl:
      "https://github.com/SaukhyadMohole/Insider-Threat-Detection",
    featured: true,
  },
  {
    id: "kalam-kriti",
    title: "Kalam Kriti 2.0",
    shortDescription:
      "Virtual try-on platform with AI-driven personalization and blockchain-based authenticity verification.",
    fullDescription:
      "A React web application for virtual try-on of handloom products with AI-driven personalization and blockchain-based authenticity. Won Third Prize at a hackathon.",
    category: "web",
    technologies: [
      "React",
      "AI/ML",
      "Blockchain",
      "JavaScript",
    ],
    features: [
      "Virtual try-on for handloom products",
      "AI-driven personalization engine",
      "Blockchain-based authenticity verification",
      "Hackathon Third Prize winner",
    ],
    featured: true,
  },
  {
    id: "micro-seismic",
    title: "Micro-Seismic Wave Detection",
    shortDescription:
      "Machine learning system for anomaly detection and early identification of micro-seismic events from sensor data.",
    fullDescription:
      "Collected and analysed vibration sensor data and applied machine learning techniques for anomaly detection and early identification of micro-seismic events using time-series analysis.",
    category: "ai-ml",
    technologies: [
      "Python",
      "Machine Learning",
      "Time-Series Analysis",
      "Anomaly Detection",
    ],
    features: [
      "Vibration sensor data collection and analysis",
      "Time-series anomaly detection",
      "Early seismic event identification",
      "ML model evaluation and tuning",
    ],
    featured: false,
  },
  {
    id: "disaster-drone",
    title: "Disaster Response Drone",
    shortDescription:
      "IoT and web-integrated drone system for disaster response and emergency management.",
    fullDescription:
      "An IoT/Web project combining drone technology with web interfaces for disaster response coordination and emergency management.",
    category: "web",
    technologies: ["IoT", "Web Technologies", "Python"],
    features: [
      "Drone-based disaster response system",
      "Web interface for coordination",
      "IoT sensor integration",
      "Real-time data streaming",
    ],
    featured: false,
  },
  {
    id: "ai-book-planner",
    title: "AI Book Planner",
    shortDescription:
      "Streamlit-based AI application generating personalized reading itineraries with calendar integration.",
    fullDescription:
      "A Streamlit application that uses AI models to generate personalized reading plans and itineraries, with calendar integration for scheduling reading sessions.",
    category: "ai-ml",
    technologies: ["Python", "Streamlit", "AI/ML"],
    features: [
      "AI-powered reading plan generation",
      "Personalized itinerary creation",
      "Calendar integration",
      "Interactive Streamlit interface",
    ],
    featured: false,
  },
];

export interface Certification {
  title: string;
  organization: string;
  category: "ai-ml" | "cloud" | "programming" | "language";
  icon: string;
}

export const certifications: Certification[] = [
  {
    title: "AI & Machine Learning Programme",
    organization: "National University of Singapore (NUS)",
    category: "ai-ml",
    icon: "🎓",
  },
  {
    title: "Python for AI, ML & DL",
    organization: "IIT Kanpur",
    category: "ai-ml",
    icon: "🏛️",
  },
  {
    title: "Core Java Certified",
    organization: "SEED",
    category: "programming",
    icon: "☕",
  },
  {
    title: "Generative AI Professional",
    organization: "Oracle Cloud Infrastructure (OCI)",
    category: "cloud",
    icon: "☁️",
  },
  {
    title: "Vector Search Professional",
    organization: "Oracle Cloud Infrastructure (OCI)",
    category: "cloud",
    icon: "☁️",
  },
  {
    title: "Data Science Professional",
    organization: "Oracle Cloud Infrastructure (OCI)",
    category: "cloud",
    icon: "☁️",
  },
  {
    title: "Japanese Language Proficiency (NAT Q5)",
    organization: "NAT Test",
    category: "language",
    icon: "🇯🇵",
  },
];

export interface Achievement {
  title: string;
  description: string;
  category: "academic" | "research" | "hackathon" | "music" | "leadership";
  icon: string;
}

export const achievements: Achievement[] = [
  {
    title: "NUS Best Capstone Project",
    description:
      "Received a Letter of Commendation from the National University of Singapore in recognition of the Best Capstone Project during the AI & ML Programme.",
    category: "academic",
    icon: "🏆",
  },
  {
    title: "IEEE Conference Paper Co-author",
    description:
      "Co-authored an IEEE conference paper on multimodal AI for early cancer detection.",
    category: "research",
    icon: "📄",
  },
  {
    title: "Hackathon Third Prize",
    description:
      "Won Third Prize at a hackathon for building an AI-driven handloom virtual try-on website (Kalam Kriti 2.0).",
    category: "hackathon",
    icon: "🏅",
  },
  {
    title: "NPTEL Top 1% — Forest Management",
    description:
      "Scored 100% in the NPTEL course on Forest Management, securing top 1% rank nationally.",
    category: "academic",
    icon: "🌟",
  },
  {
    title: "Tabla Distinction — Level 5",
    description:
      "Achieved distinction in Tabla examinations up to Level 5. Currently pursuing guitar. Represented VIT in inter-college music competitions.",
    category: "music",
    icon: "🎵",
  },
  {
    title: "Senior Core — Mozilla Firefox Club",
    description:
      "Served as Senior Core member of Mozilla Firefox Club at VIT, managing club operations and events.",
    category: "leadership",
    icon: "🦊",
  },
  {
    title: "Senior Core — ISTE",
    description:
      "Senior Core member of the Indian Society for Technical Education (ISTE) at VIT, leading web development and management.",
    category: "leadership",
    icon: "👥",
  },
  {
    title: "Senior Core — VIT Music Club",
    description:
      "Senior Core member of the VIT Music Club, organizing music events and representing the club in inter-college competitions.",
    category: "music",
    icon: "🎶",
  },
];

export const research = {
  title: "Multimodal AI for Early Cancer Detection",
  conference: "IEEE Conference",
  role: "Co-author",
  abstract:
    "This research explores the application of multimodal artificial intelligence techniques for the early detection of cancer. By integrating multiple data modalities, the proposed system achieves improved diagnostic accuracy compared to single-modality approaches.",
  keywords: [
    "Multimodal AI",
    "Cancer Detection",
    "Deep Learning",
    "Medical Imaging",
    "Early Diagnosis",
  ],
  status: "Published",
};

export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Certifications" },
  { id: "github", label: "GitHub" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];
