import myPhoto from './Portfolio_image.jpg';
export const portfolioData = {
  personal: {
    name: "Aman Singhal",
    initials: "AS",
    subtitle: "Web Developer • ML Developer",
    tagline: "Machine Learning Enthusiast | React Developer | Problem Solver",
    greeting: "Hi! I'm",
    description:
      "Turning code into intelligent experiences — Frontend + AI/ML enthusiast. I build web apps and machine learning solutions that are both functional and innovative.",
    email: "amansinghal.csai28@jecrc.ac.in",
    phone: "+91 8058989180",
    location: "Jaipur, India",
    expertise: "AI/ML, NLP, Frontend Development",
    resumeUrl: "/resume.pdf",
    aboutText: [
      "I'm a B.Tech student and aspiring AI/ML developer, passionate about building practical solutions with technology. I enjoy working with Python, machine learning, web development, and data — and I'm always exploring new tools and technologies along the way.",
      "I believe the best way to learn is by building, experimenting, and solving real-world problems. My goal is to grow into a versatile AI/ML engineer and software developer, creating projects that make a meaningful impact.",
    ],
     heroImage: myPhoto,
    aboutImage: myPhoto,
  },

  socialLinks: {
    github: "https://github.com/AmanCodes22",
    linkedin: "https://www.linkedin.com/in/aman-singhal22",
    twitter: "#",
    instagram: "https://www.instagram.com/agrawal_aman.22",
    leetcode: "https://leetcode.com/u/AMANSINGHAL022",
    email: "amansinghal.csai28@jecrc.ac.in",
    whatsapp: "https://wa.me/918058989180",
    facebook: "#",
  },
   
  heroBadges: [
    "💻 Frontend Developer",
    "🤖 AI/ML Enthusiast",
    "🚀 Tech Explorer",
    "📊 Data Enthusiast",
  ],

  heroInfoCards: [
    {
      icon: "MapPin",
      title: "Location",
      value: "Jaipur, Rajasthan, India",
    },
    {
      icon: "Brain",
      title: "Expertise",
      value:  "AI/ML, Frontend Development",
    },
    {
      icon: "Mail",
      title: "Contact",
      value: "amansinghal.csai28@jecrc.ac.in",
    },
  ],

  heroConnectIcons: [
    { icon: "Linkedin", url: "https://linkedin.com/in/aman-singhal22", label: "LinkedIn" },
    { icon: "Mail", url: "mailto:amansinghal.csai28@jecrc.ac.in", label: "Email" },
    { icon: "MessageCircle", url: "https://wa.me/918058989180", label: "WhatsApp" },
    { icon: "Instagram", url: "https://instagram.com/agrawal_aman.22", label: "Instagram" },
    { icon: "Facebook", url: "https://facebook.com", label: "Facebook" },
  ],

  heroDoingIcons: [
    { icon: "Github", url: "https://github.com/AmanCodes22", label: "GitHub" },
    { icon: "Code", url: "https://leetcode.com/u/AMANSINGHAL022", label: "LeetCode" },
  ],

  sidebarIcons: [
    { icon: "Github", url: "https://github.com/AmanCodes22", label: "GitHub" },
    { icon: "Linkedin", url: "https://linkedin.com/in/aman-singhal22", label: "LinkedIn" },
    { icon: "Twitter", url: "https://twitter.com", label: "Twitter/X" },
    { icon: "Instagram", url: "https://instagram.com/agrawal_aman.22", label: "Instagram" },
    { icon: "Code", url: "https://leetcode.com/u/AMANSINGHAL022", label: "LeetCode" },
    { icon: "Mail", url: "mailto:amansinghal.csai28@jecrc.ac.in", label: "Email" },
  ],

  stats: [
    { icon: "FolderGit2", value: 7, suffix: "+", label: "Projects Completed" },
    { icon: "Calendar", value: 2, suffix: "+", label: "Years Experience in AI" },
    { icon: "Cpu", value: 10, suffix: "+", label: "Technologies Mastered" },
    { icon: "Code", value: 1000, suffix: "+", label: "LeetCode Solved" },
  ],

  hobbies: [
  { icon: "Music", label: "Listening to Music", emoji: "🎧" },
  { icon: "Trophy", label: "Badminton", emoji: "🏸" },
  { icon: "Plane", label: "Travelling", emoji: "✈️" },
  { icon: "Lightbulb", label: "Exploring New Ideas", emoji: "💡" },
],

  projects: [
    {
      title: "Mammogram Malignancy Detector",
      icon: "ScanHeart",
      image:
        "https://images.pexels.com/photos/7563010/pexels-photo-7563010.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      description:
        "Hybrid CNN + YOLOv8 ensemble for full-image breast cancer detection with ROI preprocessing and sliding-window inference.",
      technologies: ["TensorFlow", "Keras", "OpenCV", "YOLOv8"],
      github: "https://github.com/kunjdesai/mammogram-detector",
      live: "https://github.com/kunjdesai/mammogram-detector",
      featured: true,
    },
    {
      title: "Mental Health Analyzer",
      icon: "Brain",
      image:
        "https://images.pexels.com/photos/4108167/pexels-photo-4108167.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      description:
        "NLP-based system that analyzes user text for anxiety, stress, and depression indicators.",
      technologies: ["Python", "Transformers", "NLTK", "scikit-learn"],
      github: "https://github.com/kunjdesai/mental-health-analyzer",
      live: "https://github.com/kunjdesai/mental-health-analyzer",
      featured: false,
    },
    {
      title: "Indian Sign Language Interpreter",
      icon: "Hand",
      image:
        "https://images.pexels.com/photos/9017404/pexels-photo-9017404.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      description:
        "Real-time gesture recognition using MediaPipe + TensorFlow for sign-to-text translation.",
      technologies: ["MediaPipe", "TensorFlow", "React", "Flask"],
      github: "https://github.com/kunjdesai/sign-language-interpreter",
      live: "https://github.com/kunjdesai/sign-language-interpreter",
      featured: false,
    },
    {
      title: "AI Document Chatbot",
      icon: "MessageSquare",
      image:
        "https://images.pexels.com/photos/16027824/pexels-photo-16027824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      description:
        "RAG-powered chatbot that lets you upload documents and ask questions about their content using LLMs.",
      technologies: ["Python", "LangChain", "OpenAI", "React"],
      github: "https://github.com/kunjdesai/ai-doc-chatbot",
      live: "https://github.com/kunjdesai/ai-doc-chatbot",
      featured: false,
    },
    {
      title: "Data Analytics Dashboard",
      icon: "BarChart3",
      image:
        "https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      description:
        "Interactive dashboard for visualizing large datasets with real-time filtering, charts, and exportable reports.",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      github: "https://github.com/kunjdesai/analytics-dashboard",
      live: "https://github.com/kunjdesai/analytics-dashboard",
      featured: false,
    },
    {
      title: "Personal Portfolio",
      icon: "Globe",
      image:
        "https://images.pexels.com/photos/1102797/pexels-photo-1102797.png?auto=compress&cs=tinysrgb&h=650&w=940",
      description:
        "A premium dark-themed portfolio website built with React, Framer Motion, and modern CSS animations.",
      technologies: ["React", "Framer Motion", "TailwindCSS", "Vite"],
      github: "https://github.com/kunjdesai/portfolio",
      live: "https://github.com/kunjdesai/portfolio",
      featured: false,
    },
  ],

  skills: {
  techIcons: [
    // Programming Languages
    { name: "Python", icon: "FileCode" },
    { name: "C", icon: "FileCode" },
    { name: "C++", icon: "FileCode" },
    { name: "JavaScript", icon: "Braces" },

    // Web Technologies
    { name: "HTML", icon: "Code2" },
    { name: "CSS", icon: "Palette" },
    { name: "React", icon: "Atom" },

    // Databases & Tools
    { name: "MySQL", icon: "Database" },
    { name: "MongoDB", icon: "Database" },
    { name: "Git", icon: "GitBranch" },

    // AI / ML
    { name: "Machine Learning", icon: "Brain" },
    { name: "Data Science", icon: "Database" },

    // Development
    { name: "Node.js", icon: "Boxes" },
    { name: "GitHub", icon: "GitBranch" },
  ],
    categories: [
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "C", level: 80 },
      { name: "JavaScript", level: 85 },
    ],
  },

  {
    title: "Web Technologies",
    icon: "Globe",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },

  {
    title: "Databases & Tools",
    icon: "Database",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
    ],
  },

  {
    title: "Frameworks & Libraries",
    icon: "Boxes",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 85 },
      { name: "Scikit-learn", level: 80 },
    ],
  },

  {
    title: "Core Concepts",
    icon: "Brain",
    skills: [
      { name: "Data Structures & Algorithms", level: 80 },
      { name: "Object-Oriented Programming", level: 85 },
      { name: "DBMS", level: 80 },
      { name: "Operating Systems", level: 75 },
      { name: "Computer Networks", level: 70 },
      { name: "Machine Learning", level: 85 },
    ],
  },

  {
    title: "Soft Skills",
    icon: "Users",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Communication", level: 85 },
      { name: "Teamwork", level: 90 },
      { name: "Time Management", level: 85 },
      { name: "Adaptability", level: 90 },
    ],
  },
],
  },

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering(Artificial Intelligence)",
      institution: "JECRC Foundation, Jaipur",
      period: "2024 – 2028",
      detail: "Current GPA: 8.76",
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Bhagwati senior secondary school , Mahwa",
      period: "2022 – 2023",
      detail: "94.20%",
    },
    {
      degree: "Secondary (10th)",
      institution: "G.B. International Senior Secondary School, Mahwa",
      period: "2020 – 2021",
      detail: "98.00%",
    },
  ],

  resume: {
    name: "Aman Singhal",
    degree: "B.Tech in Computer Science & Engineering(Artificial Intelligence)",
    location: "Jaipur, Rajasthan, India",
    contact: "amansinghal.csai28@jecrc.ac.in | +91 8058989180",
    summary:
      "Aspiring AI/ML developer and frontend enthusiast with a passion for building practical solutions. Skilled in Python, machine learning, web development, and data analysis. Seeking opportunities to contribute to innovative projects and grow as a versatile software engineer.",
  },

  certificates: [
    {
      title: "Flipkart Hackathon",
      organization: "Flipkart",
      year: "2022",
      type: "Technical",
      image:
        "https://images.pexels.com/photos/8177922/pexels-photo-8177922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
      title: "Solution Challenge",
      organization: "Google Developers",
      year: "2023",
      type: "Technical",
      image:
        "https://images.pexels.com/photos/8177925/pexels-photo-8177925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
      title: "ADira",
      organization: "SCET AI Club",
      year: "2025",
      type: "Technical",
      image:
        "https://images.pexels.com/photos/8177932/pexels-photo-8177932.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
      title: "AI for Good",
      organization: "UN Tech Initiative",
      year: "2024",
      type: "Other",
      image:
        "https://images.pexels.com/photos/8177924/pexels-photo-8177924.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
      title: "Leadership Excellence",
      organization: "Toastmasters International",
      year: "2023",
      type: "Other",
      image:
        "https://images.pexels.com/photos/37012315/pexels-photo-37012315.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
  ],

  gallery: [
    {
      src: "https://images.pexels.com/photos/17483871/pexels-photo-17483871.png?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Neural network 3D visualization",
      category: "AI",
    },
    {
      src: "https://images.pexels.com/photos/1102797/pexels-photo-1102797.png?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Programming code on screen",
      category: "Projects",
    },
    {
      src: "https://images.pexels.com/photos/17485657/pexels-photo-17485657.png?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Abstract AI neural network render",
      category: "AI",
    },
    {
      src: "https://images.pexels.com/photos/8177922/pexels-photo-8177922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Certificate of achievement",
      category: "Certificates",
    },
    {
      src: "https://images.pexels.com/photos/17483870/pexels-photo-17483870.png?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Digital neural network data flow",
      category: "AI",
    },
    {
      src: "https://images.pexels.com/photos/6424590/pexels-photo-6424590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Laptop with code on dark backdrop",
      category: "Projects",
    },
    {
      src: "https://images.pexels.com/photos/17483873/pexels-photo-17483873.png?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Abstract AI technology render",
      category: "AI",
    },
    {
      src: "https://images.pexels.com/photos/8177925/pexels-photo-8177925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Diploma and certificate",
      category: "Certificates",
    },
    {
      src: "https://images.pexels.com/photos/14314636/pexels-photo-14314636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Futuristic eye with network patterns",
      category: "AI",
    },
    {
      src: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Cyber security code on monitor",
      category: "Projects",
    },
    {
      src: "https://images.pexels.com/photos/8177932/pexels-photo-8177932.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Certificate with ribbon",
      category: "Certificates",
    },
    {
      src: "https://images.pexels.com/photos/17485741/pexels-photo-17485741.png?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Intricate wireframe 3D composition",
      category: "AI",
    },
  ],

  blogs: [
  {
    title: "Introduction to Machine Learning",
    category: "Machine Learning",
    excerpt:
      "A beginner-friendly guide to understanding the fundamentals of ML, from supervised learning to model evaluation.",
    date: "Jan 15, 2026",
    image:
      "https://images.pexels.com/photos/17483871/pexels-photo-17483871.png?auto=compress&cs=tinysrgb&h=650&w=940",
    readTime: "8 min read",
  },

  {
    title: "Understanding Supervised vs Unsupervised Learning",
    category: "Machine Learning",
    excerpt:
      "Learn the key differences between supervised and unsupervised learning, with practical examples and common use cases.",
    date: "Feb 02, 2026",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=940",
    readTime: "6 min read",
  },

  {
    title: "A Beginner's Guide to Neural Networks",
    category: "Deep Learning",
    excerpt:
      "Explore how neural networks work, understand neurons and layers, and see how they are used to solve real-world problems.",
    date: "Feb 18, 2026",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=940",
    readTime: "9 min read",
  },

  {
    title: "Data Preprocessing: The Foundation of Machine Learning",
    category: "Data Science",
    excerpt:
      "Discover why clean data matters and learn about missing values, encoding, scaling, and other essential preprocessing techniques.",
    date: "Mar 05, 2026",
    image:
      "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=940",
    readTime: "7 min read",
  },

  {
    title: "Building Your First Machine Learning Project",
    category: "Machine Learning",
    excerpt:
      "A practical walkthrough of the machine learning workflow, from choosing a dataset to training, evaluating, and improving a model.",
    date: "Mar 22, 2026",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=940",
    readTime: "10 min read",
  },

  {
    title: "Python Libraries Every ML Beginner Should Know",
    category: "Python",
    excerpt:
      "Get familiar with NumPy, Pandas, Matplotlib, and Scikit-learn—the essential Python libraries for starting your ML journey.",
    date: "Apr 10, 2026",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=940",
    readTime: "7 min read",
  },

  {
    title: "How I Build Responsive React Applications",
    category: "Web Development",
    excerpt:
      "A look at my approach to building modern React applications with reusable components, responsive layouts, and clean UI.",
    date: "Apr 28, 2026",
    image:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=940",
    readTime: "8 min read",
  },

  {
    title: "Getting Started with APIs in React",
    category: "React",
    excerpt:
      "Learn how APIs connect frontend applications to external data and how to fetch, manage, and display API responses in React.",
    date: "May 14, 2026",
    image:
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=940",
    readTime: "6 min read",
  },

  {
    title: "Understanding Model Evaluation Metrics",
    category: "Machine Learning",
    excerpt:
      "Learn how accuracy, precision, recall, F1-score, and confusion matrices help measure the performance of machine learning models.",
    date: "Jun 01, 2026",
    image:
      "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=940",
    readTime: "8 min read",
  },

  {
    title: "From Idea to Deployment: My ML Project Workflow",
    category: "AI & ML",
    excerpt:
      "A practical overview of how I turn a machine learning idea into a working project, from data collection and modeling to deployment.",
    date: "Jun 20, 2026",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=940",
    readTime: "10 min read",
  },
],

  navItems: [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Gallery", id: "gallery" },
    { label: "Skills", id: "skills" },
    { label: "Resume", id: "resume" },
    { label: "Blog", id: "blog" },
    { label: "Contact", id: "contact" },
  ],
};
