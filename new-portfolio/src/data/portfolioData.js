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
  {
    icon: "FolderGit2",
    value: 7,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: "Brain",
    value: 2,
    suffix: "+",
    label: "ML Projects",
  },
  {
    icon: "Cpu",
    value: 20,
    suffix: "+",
    label: "Technologies & Tools",
  },
  {
    icon: "Code",
    value: 100,
    suffix: "+",
    label: "LeetCode Problems",
  },
],

  hobbies: [
  { icon: "Music", label: "Listening to Music", emoji: "🎧" },
  { icon: "Trophy", label: "Badminton", emoji: "🏸" },
  { icon: "Plane", label: "Travelling", emoji: "✈️" },
  { icon: "Lightbulb", label: "Exploring New Ideas", emoji: "💡" },
],

  projects: [
  {
  title: "Hotel Booking Website",
  icon: "Hotel",
  image:
    "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=940",

  description:
    "A responsive hotel booking website designed to provide a smooth hotel discovery and booking experience, with a modern interface for exploring hotels, viewing room information, checking booking details, and interacting with the booking flow.",

  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
  ],

  github: "https://github.com/YOUR_USERNAME/hotel-booking-website",
  live: "",

  featured: false,

  details: {
    overview:
      "The Hotel Booking Website is a frontend-focused web application created to simulate a modern hotel discovery and booking experience. The project focuses on building a clean, responsive interface where users can explore available hotel options, view important room information, and interact with booking-related components.",

    problem:
      "Traditional hotel websites can become difficult to use when information such as rooms, pricing, facilities, and booking options is not presented clearly. The goal of this project was to create a simple and responsive interface that makes hotel discovery and booking interactions easier for users.",

    objective: [
      "Build a modern hotel booking interface",
      "Create a responsive experience for different screen sizes",
      "Display hotel and room information clearly",
      "Create an intuitive booking interaction flow",
      "Practice component-based frontend development",
      "Build reusable UI components",
      "Improve user experience through clean navigation and layouts",
    ],

    approach:
      "The application was structured around reusable frontend components and interactive JavaScript functionality. React.js was used to organize the interface into reusable components, while HTML, CSS, and JavaScript concepts were used to create the layouts, styling, and user interactions.",

    workflow: [
      "Design the application structure",
      "Create reusable React components",
      "Build hotel listing interface",
      "Create hotel and room information sections",
      "Implement booking-related interactions",
      "Add responsive styling",
      "Test user interactions",
      "Optimize the interface for different screen sizes",
    ],

    features: [
      "Responsive hotel booking interface",
      "Hotel listing and discovery",
      "Room information display",
      "Booking-related user interactions",
      "Modern navigation",
      "Responsive layouts",
      "Reusable React components",
      "Interactive frontend elements",
      "Clean and user-friendly UI",
    ],

    ui:
      "The interface was designed with a focus on simplicity and usability. Hotel information, room details, and booking interactions are organized into clearly separated sections so users can understand the available information without unnecessary complexity.",

    technicalConcepts: [
      "React component architecture",
      "Props and component communication",
      "JavaScript event handling",
      "State-based UI interactions",
      "Responsive web design",
      "CSS layouts",
      "Reusable UI components",
      "Frontend application structure",
    ],

    challenges: [
      "Designing a responsive layout that works across screen sizes",
      "Organizing multiple hotel and room-related UI sections",
      "Keeping components reusable and maintainable",
      "Creating smooth booking-related interactions",
      "Maintaining a consistent visual design",
    ],

    results:
      "The project resulted in a responsive hotel booking interface that demonstrates practical frontend development skills, including React componentization, JavaScript interactions, responsive CSS, and user-focused UI design.",

    learning:
      "This project strengthened my understanding of React components, frontend state and interactions, responsive design, UI structuring, and building a complete web interface around a real-world use case.",

    futureScope: [
      "Add a backend for real hotel and room data",
      "Add user authentication",
      "Add database-backed bookings",
      "Implement real-time room availability",
      "Add online payment integration",
      "Add booking history and user dashboard",
      "Add hotel search and advanced filters",
      "Add an admin dashboard for hotel management",
    ],
  },
},

{
  title: "Movie Recommender System",
  icon: "Film",
  image:
    "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=940",

  description:
    "Content-based movie recommendation system that recommends similar movies using movie metadata, text similarity, and machine learning techniques.",

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "NLP",
    "Streamlit",
    "FastAPI",
    "React",
  ],

  github: "https://github.com/YOUR_USERNAME/movie-recommender-system",
  live: "",

  featured: true,

  details: {
  overview:
    "Movie Recommender System is a content-based recommendation application that suggests movies similar to a movie selected by the user. The system processes movie metadata, converts textual information into numerical representations, calculates similarity between movies, and returns the most relevant recommendations.",

  problem:
    "With thousands of movies available, users often find it difficult to decide what to watch. The goal was to build a system that could automatically identify movies similar to a user's selected movie.",

  objective: [
    "Build an end-to-end movie recommendation system",
    "Take a movie selected by the user as input",
    "Process movie metadata and relevant textual information",
    "Calculate similarity between movies",
    "Recommend the most similar movies to the user",
  ],

  approach: [
    "Load and explore the movie dataset",
    "Clean missing and inconsistent movie information",
    "Combine relevant movie attributes into a single textual representation",
    "Apply text vectorization to convert movie information into numerical vectors",
    "Calculate similarity between movies",
    "Retrieve the movies with the highest similarity scores",
    "Build an interactive interface for users to select movies and view recommendations",
  ],

  workflow: [
    "Movie Dataset",
    "Data Cleaning",
    "Feature Selection",
    "Text Feature Engineering",
    "Vectorization",
    "Similarity Calculation",
    "Top-N Recommendation",
    "API / Application Layer",
    "User Interface",
  ],

  mlConcepts: [
    "Recommendation Systems",
    "Content-Based Filtering",
    "Natural Language Processing",
    "Text Vectorization",
    "Cosine Similarity",
    "Feature Engineering",
    "Similarity-Based Ranking",
  ],

  algorithm:
    "The recommendation engine follows a content-based filtering approach. Movie metadata is converted into numerical feature representations, and similarity is calculated between movies. When a user selects a movie, the system compares it with other movies and returns the most similar movies based on their content.",

  features: [
    "Movie search and selection",
    "Similar movie recommendations",
    "Top-N recommendation ranking",
    "Movie metadata processing",
    "Interactive recommendation interface",
    "Backend API integration",
    "Responsive frontend",
  ],

  architecture: [
    "React Frontend",
    "FastAPI Backend",
    "Recommendation Logic",
    "Serialized ML / similarity artifacts",
    "Movie Dataset",
  ],

  technicalConcepts: [
    "Pandas DataFrame",
    "Data Cleaning",
    "Feature Engineering",
    "NLP",
    "Vectorization",
    "Cosine Similarity",
    "FastAPI REST API",
    "React Components",
    "Streamlit",
    "Model / Artifact Serialization",
  ],

  challenges: [
    "Processing movie metadata efficiently",
    "Creating meaningful combined features for similarity calculation",
    "Handling missing or inconsistent movie information",
    "Keeping recommendation response time reasonable",
    "Connecting the recommendation engine with the application frontend",
  ],

  result:
    "The final system can accept a movie selected by the user and generate a list of movies that are similar according to the content representation and similarity scores.",

  learning: [
    "How recommendation systems work",
    "How NLP can be used for recommendation problems",
    "How similarity measures can be used instead of traditional supervised prediction",
    "How to connect an ML model with an API and frontend",
    "How to optimize a recommendation application's response time",
  ],

  futureScope: [
    "Hybrid recommendation using collaborative filtering",
    "User-specific recommendations based on watch history",
    "Movie rating prediction",
    "Personalized recommendation profiles",
    "Caching and faster similarity retrieval",
  ],
},
},

  {
  title: "Car Price Predictor",
  icon: "Car",
  image:
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=940",

  description:
    "A machine learning based car price prediction system that estimates the selling price of used cars using features such as company, year, kilometers driven, and fuel type.",

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Machine Learning",
    "Regression",
    "Streamlit",
  ],

  github: "https://github.com/YOUR_USERNAME/car-price-predictor",
  live: "",

  featured: false,

  details: {
    overview:
      "Car Price Predictor is a machine learning application developed to estimate the selling price of used cars based on important vehicle attributes. The project uses the Quikr car dataset and applies data preprocessing, feature engineering, categorical encoding, and regression techniques to build the prediction pipeline.",

    problem:
      "Used car prices depend on several factors such as the car's age, company, kilometers driven, and fuel type. Estimating a reasonable price manually can be difficult because these factors interact with each other. The objective of this project was to build a machine learning model that can estimate the price of a used car from its available features.",

    objective: [
      "Build a machine learning model for used car price prediction",
      "Clean and preprocess the raw car dataset",
      "Handle categorical and numerical features",
      "Create useful features such as car age",
      "Build a complete preprocessing and prediction pipeline",
      "Evaluate the model using standard regression metrics",
      "Create an interactive interface for making predictions",
    ],

    approach: [
      "Load and inspect the Quikr car dataset",
      "Clean invalid and inconsistent records",
      "Select relevant features for prediction",
      "Create car_age using the vehicle year",
      "Separate numerical and categorical features",
      "Encode categorical variables using OneHotEncoder",
      "Build a preprocessing pipeline using ColumnTransformer",
      "Train a Linear Regression model",
      "Evaluate the model on test data",
      "Integrate the trained pipeline with a Streamlit interface",
    ],

    workflow: [
      "Raw Car Dataset",
      "Data Cleaning",
      "Feature Selection",
      "Feature Engineering",
      "Train-Test Split",
      "Categorical Encoding",
      "Preprocessing Pipeline",
      "Linear Regression",
      "Model Evaluation",
      "Streamlit Application",
    ],

    mlConcepts: [
      "Supervised Learning",
      "Regression",
      "Feature Engineering",
      "Categorical Encoding",
      "Train-Test Split",
      "Preprocessing Pipeline",
      "Linear Regression",
      "Model Evaluation",
    ],

    algorithm:
      "The system uses Linear Regression for predicting the selling price of a used car. Before training, categorical features are converted into numerical representations using OneHotEncoder, while preprocessing is handled through a ColumnTransformer and Pipeline. The trained model learns the relationship between car features and their selling prices and then uses those learned relationships to estimate the price of new car inputs.",

    dataset:
      "The project uses a cleaned version of the Quikr used-car dataset. The main attributes include car name, company, manufacturing year, selling price, kilometers driven, and fuel type. A derived car_age feature was also created from the vehicle year.",

    features: [
      "Used car price prediction",
      "Interactive prediction form",
      "Car company selection",
      "Vehicle year input",
      "Kilometers driven input",
      "Fuel type selection",
      "Automatic preprocessing",
      "Regression-based prediction",
      "Model evaluation",
      "Streamlit interface",
    ],

    preprocessing: [
      "Data cleaning",
      "Removal of invalid records",
      "Feature selection",
      "Creation of car_age feature",
      "Categorical feature encoding",
      "Numerical feature processing",
      "Train-test splitting",
      "Pipeline-based preprocessing",
    ],

    modelEvaluation: [
      "R² Score: 0.6909",
      "Mean Absolute Error (MAE): 110318.41",
      "Root Mean Squared Error (RMSE): 197912.28",
    ],

    technicalConcepts: [
      "Pandas DataFrame",
      "NumPy",
      "Data Cleaning",
      "Feature Engineering",
      "OneHotEncoder",
      "ColumnTransformer",
      "Scikit-learn Pipeline",
      "Linear Regression",
      "Train-Test Split",
      "R² Score",
      "MAE",
      "RMSE",
      "Streamlit",
    ],

    challenges: [
      "Cleaning noisy real-world car records",
      "Handling categorical variables such as company and fuel type",
      "Creating useful features from the available data",
      "Managing preprocessing consistently between training and prediction",
      "Improving model generalization on unseen car records",
    ],

    result:
      "The final system provides an interactive way to estimate used-car prices from vehicle information. The trained Linear Regression model achieved an R² score of 0.6909 on the evaluated test data, with an MAE of 110318.41 and RMSE of 197912.28.",

    learning: [
      "How regression problems are formulated in machine learning",
      "How to clean and prepare real-world datasets",
      "How categorical features can be converted into numerical representations",
      "How feature engineering can improve model inputs",
      "How ColumnTransformer and Pipeline simplify preprocessing",
      "How to evaluate regression models using R², MAE, and RMSE",
      "How to deploy a machine learning model through Streamlit",
    ],

    futureScope: [
      "Experiment with Random Forest and Gradient Boosting models",
      "Perform hyperparameter tuning",
      "Use a larger and more diverse car dataset",
      "Add additional features such as location and car model",
      "Compare multiple regression algorithms",
      "Improve prediction accuracy through better feature engineering",
      "Add model comparison and evaluation dashboards",
    ],
  },
},
  {
  title: "SMS Spam Detector",
  icon: "MessageSquareWarning",
  image:
    "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=940",

  description:
    "A machine learning based SMS spam detection system that classifies messages as spam or ham using natural language processing and supervised machine learning techniques.",

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "NLP",
    "Machine Learning",
  ],

  github: "https://github.com/YOUR_USERNAME/sms-spam-detector",
  live: "",

  featured: false,

  details: {
    overview:
      "SMS Spam Detector is a natural language processing and machine learning project designed to classify SMS messages into two categories: spam and ham. The system processes text messages, extracts useful textual features, trains multiple machine learning classifiers, and evaluates their performance on unseen messages.",

    problem:
      "Spam messages are commonly received through SMS and can contain unwanted advertisements, fraudulent offers, or misleading information. Manually identifying every message is inefficient, so the goal of this project was to build an automated system that can classify incoming messages as spam or legitimate ham messages.",

    objective: [
      "Build an automated SMS spam classification system",
      "Clean and preprocess raw SMS text data",
      "Convert text messages into machine-readable features",
      "Train supervised machine learning classification models",
      "Compare the performance of multiple classifiers",
      "Evaluate the models using classification accuracy",
      "Identify the most effective model among the tested approaches",
    ],

    approach: [
      "Load the SMS spam dataset",
      "Inspect and understand the message distribution",
      "Clean and preprocess the text data",
      "Separate messages into spam and ham categories",
      "Convert text into numerical features",
      "Split the dataset into training and testing sets",
      "Train multiple machine learning classifiers",
      "Evaluate each classifier on the test data",
      "Compare model performance",
      "Select the best-performing model among the tested models",
    ],

    workflow: [
      "SMS Dataset",
      "Data Cleaning",
      "Text Preprocessing",
      "Feature Extraction",
      "Train-Test Split",
      "Model Training",
      "Model Evaluation",
      "Model Comparison",
      "Spam / Ham Classification",
    ],

    mlConcepts: [
      "Natural Language Processing",
      "Text Classification",
      "Supervised Learning",
      "Binary Classification",
      "Text Feature Extraction",
      "Feature Engineering",
      "Model Evaluation",
      "Classification",
    ],

    algorithm:
      "The system treats spam detection as a binary text classification problem. SMS messages are converted into numerical text features and used to train supervised machine learning classifiers. The trained models learn patterns associated with spam and legitimate messages and classify new messages into either the spam or ham category.",

    dataset:
      "The dataset contains SMS messages labeled as either ham or spam. The cleaned dataset contains 4,516 ham messages and 641 spam messages.",

    features: [
      "SMS message classification",
      "Spam detection",
      "Ham message detection",
      "Text preprocessing",
      "Text feature extraction",
      "Multiple model training",
      "Model comparison",
      "Classification evaluation",
    ],

    models: [
      "Random Forest",
      "Support Vector Classifier (SVC)",
      "Naive Bayes",
      "Logistic Regression",
    ],

    modelEvaluation: [
      "Random Forest Accuracy: 97.19%",
      "SVC Accuracy: 96.70%",
      "Naive Bayes Accuracy: 96.70%",
      "Logistic Regression Accuracy: 94.96%",
    ],

    technicalConcepts: [
      "Pandas DataFrame",
      "NumPy",
      "Natural Language Processing",
      "Text Preprocessing",
      "Text Feature Extraction",
      "Supervised Machine Learning",
      "Binary Classification",
      "Random Forest",
      "Support Vector Classifier",
      "Naive Bayes",
      "Logistic Regression",
      "Model Evaluation",
    ],

    challenges: [
      "Cleaning and preparing raw SMS text",
      "Converting unstructured text into numerical features",
      "Handling the difference between spam and legitimate message patterns",
      "Comparing multiple classification algorithms",
      "Evaluating model performance on unseen messages",
    ],

    result:
      "The tested models achieved high classification accuracy on the evaluation data. Among the recorded experiments, Random Forest achieved the highest accuracy of 97.19%, followed by SVC and Naive Bayes at 96.70%, while Logistic Regression achieved 94.96%.",

    learning: [
      "How NLP can be applied to real-world text classification problems",
      "How SMS spam detection can be formulated as binary classification",
      "How text data can be converted into machine-readable features",
      "How different machine learning classifiers can be compared",
      "How to evaluate classification models",
      "How machine learning can be applied to automate spam detection",
    ],

    futureScope: [
      "Evaluate models using precision, recall, and F1-score",
      "Improve handling of spelling variations and obfuscated spam messages",
      "Experiment with advanced text representations",
      "Use word embeddings for better text representation",
      "Create a REST API for real-time spam detection",
      "Build a real-time SMS classification interface",
    ],
  },
},

  {
  title: "Aman OS",
  icon: "Monitor",
  image:
    "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=940",

  description:
    "A browser-based desktop environment inspired by modern operating systems, built from scratch with HTML, CSS, and JavaScript to explore desktop UI architecture, window-based interactions, navigation, and interactive system-style components.",

  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
  ],

  github: "https://github.com/YOUR_USERNAME/aman-os",
  live: "",

  featured: false,

  details: {
    overview:
      "Aman OS is a browser-based desktop environment created to recreate the experience of interacting with a computer operating system inside a web browser. Instead of building a traditional website with pages and sections, the project focuses on creating a desktop-style interface with system-like navigation and interactive UI elements.",

    problem:
      "Most frontend projects are built around conventional websites and dashboards. I wanted to experiment with a different type of interface and understand how a desktop environment could be represented using standard web technologies such as HTML, CSS, and JavaScript.",

    objective: [
      "Create a browser-based desktop environment",
      "Recreate an operating-system-inspired user interface",
      "Build interactive desktop-style components",
      "Implement window-based UI interactions",
      "Practice JavaScript-driven DOM interactions",
      "Create a responsive and visually consistent desktop interface",
      "Understand how complex UI states can be managed in frontend applications",
    ],

    approach:
      "The project uses HTML for the basic application structure, CSS for the desktop environment and visual styling, and JavaScript for interactive behavior. The interface is organized around desktop-style components rather than traditional website pages.",

    workflow: [
      "Design the desktop environment",
      "Create the base desktop layout",
      "Build system-style UI components",
      "Implement interactive elements with JavaScript",
      "Create window-based interactions",
      "Add navigation and UI states",
      "Style the environment using CSS",
      "Test interactions and responsiveness",
    ],

    features: [
      "Desktop-style user interface",
      "Operating-system-inspired layout",
      "Interactive UI elements",
      "Window-based interactions",
      "System-style navigation",
      "JavaScript-powered interactions",
      "Responsive frontend structure",
      "Custom desktop visual design",
    ],

    architecture:
      "Unlike a conventional multi-page website, Aman OS is structured around a desktop environment. The desktop acts as the main workspace, while individual interactive elements behave like system components within that environment.",

    technicalConcepts: [
      "HTML semantic structure",
      "CSS positioning and layouts",
      "JavaScript DOM manipulation",
      "JavaScript event handling",
      "UI state management",
      "Reusable interface patterns",
      "Responsive design",
      "Interactive frontend architecture",
    ],

    challenges: [
      "Creating an operating-system-like experience using only frontend technologies",
      "Managing multiple interactive UI states",
      "Implementing window-style interactions",
      "Maintaining consistent positioning and layouts",
      "Making the desktop interface responsive",
      "Keeping the UI interactive without making the code unnecessarily complex",
    ],

    results:
      "Aman OS resulted in an interactive browser-based desktop environment that demonstrates how standard web technologies can be used to create interfaces beyond traditional websites.",

    learning:
      "This project helped me understand JavaScript event handling, DOM manipulation, CSS positioning, interactive UI design, state-driven interfaces, and the importance of structuring frontend code for complex interactions.",

    futureScope: [
      "Add a file-management system",
      "Add more built-in applications",
      "Add persistent user settings",
      "Add local storage support",
      "Add themes and customization",
      "Add keyboard shortcuts",
      "Add a terminal interface",
      "Add a simulated file system",
      "Add more advanced window management",
    ],
  },
},

 {
  title: "Laptop Intelligence System",
  icon: "Laptop",
  image:
    "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=940",

  description:
    "A data-driven laptop intelligence platform that collects laptop product data, performs data cleaning and feature engineering, analyzes specifications and pricing, and presents insights through an interactive Streamlit dashboard.",

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Streamlit",
    "Machine Learning",
    "Data Analysis",
    "Matplotlib",
    "Seaborn",
    "Plotly",
  ],

  github: "https://github.com/YOUR_USERNAME/laptop-intelligence-system",
  live: "",

  featured: true,

  details: {
    overview:
      "Laptop Intelligence System (LIS) is a data analysis and intelligence platform built around laptop product data collected from technology and e-commerce websites. The project focuses on transforming raw product information into a structured dataset, extracting useful laptop specifications, performing exploratory analysis, and presenting the resulting insights through an interactive dashboard.",

    problem:
      "Laptop websites contain large amounts of product information, but specifications are often presented in inconsistent formats and can be difficult to compare across products. The goal of this project was to collect laptop information, clean and structure the data, extract useful specifications, and make the resulting information easier to analyze.",

    objective: [
      "Collect laptop product information from online sources",
      "Create a structured laptop dataset",
      "Clean inconsistent and missing product information",
      "Extract useful laptop specifications",
      "Perform exploratory data analysis",
      "Create meaningful derived features",
      "Analyze laptop pricing, ratings, and specifications",
      "Build an interactive dashboard for data exploration",
    ],

    approach: [
      "Collect laptop product data from online sources",
      "Store the scraped product information in CSV format",
      "Inspect the raw dataset and identify data quality issues",
      "Clean price, rating, and rating-count fields",
      "Extract RAM, storage, display, processor, GPU, and operating system information",
      "Perform duplicate and missing-value analysis",
      "Create structured numerical and categorical features",
      "Perform exploratory data analysis",
      "Create visualizations for different laptop attributes",
      "Build an interactive Streamlit dashboard",
    ],

    workflow: [
      "Laptop Data Collection",
      "Web Scraping",
      "Raw Dataset Creation",
      "Data Audit",
      "Data Cleaning",
      "Missing Value Analysis",
      "Duplicate Detection",
      "Feature Extraction",
      "Feature Engineering",
      "Exploratory Data Analysis",
      "Data Visualization",
      "Streamlit Dashboard",
      "Business / Product Insights",
    ],

    dataSources: [
      "Laptop product listings from technology and e-commerce websites",
      "Smartprix / MySmartPrice laptop data",
    ],

    datasetFeatures: [
      "Product Title",
      "Price",
      "Rating",
      "Rating Count",
      "Processor",
      "RAM",
      "Storage",
      "Display",
      "GPU",
      "Operating System",
      "Product URL",
      "Image URL",
    ],

    dataEngineering: [
      "Web Scraping",
      "HTML / JSON Data Processing",
      "CSV Data Generation",
      "Duplicate Detection",
      "Missing Value Analysis",
      "Data Cleaning",
      "Data Type Conversion",
      "Feature Extraction",
      "Feature Engineering",
    ],

    features: [
      "Laptop product data analysis",
      "Price analysis",
      "Rating analysis",
      "Category analysis",
      "Top product analysis",
      "RAM extraction",
      "Storage extraction",
      "Display size extraction",
      "Processor information extraction",
      "GPU information extraction",
      "Operating system extraction",
      "Missing-value analysis",
      "Duplicate detection",
      "Interactive Streamlit dashboard",
    ],

    dashboardModules: [
      "Price Analysis",
      "Rating Analysis",
      "Category Analysis",
      "Top Products",
    ],

    technicalConcepts: [
      "Python",
      "Pandas DataFrame",
      "NumPy",
      "Data Cleaning",
      "Data Analysis",
      "Feature Engineering",
      "Web Scraping",
      "Exploratory Data Analysis",
      "Data Visualization",
      "Streamlit",
      "Matplotlib",
      "Seaborn",
      "Plotly",
    ],

    challenges: [
      "Handling inconsistent product information across different websites",
      "Dealing with missing laptop attributes",
      "Extracting structured specifications from unstructured product text",
      "Handling duplicate product records",
      "Managing inconsistent formats for price, RAM, storage, and display values",
      "Working with a large number of product records",
      "Creating useful visualizations from the cleaned dataset",
    ],

    result:
      "The project resulted in a structured laptop intelligence dataset and an interactive Streamlit dashboard that allows users to explore laptop pricing, ratings, categories, specifications, and top products.",

    learning: [
      "How web-scraped data can be converted into a structured dataset",
      "How to audit and clean real-world product data",
      "How to extract useful features from unstructured specifications",
      "How feature engineering improves data analysis",
      "How exploratory data analysis can reveal product-level patterns",
      "How to build interactive dashboards using Streamlit",
      "How data visualization can communicate product insights",
    ],

    futureScope: [
      "Build a laptop recommendation engine",
      "Add laptop price prediction",
      "Create value-for-money scoring",
      "Add advanced specification-based filters",
      "Implement price-drop monitoring",
      "Add real-time product monitoring",
      "Build ML-based laptop recommendations",
      "Add personalized recommendations based on user requirements",
    ],
  },
},

  {
  title: "ERI System",
  icon: "BrainCircuit",
  image:
    "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=940",

  description:
    "End-to-end E-Commerce Review Intelligence System built on the Olist dataset to transform raw customer reviews into actionable business insights through multilingual review processing, sentiment analysis, topic analysis, customer segmentation, retention analysis, and customer-priority identification.",

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "NLP",
    "Scikit-learn",
    "Hugging Face",
    "Transformers",
    "Streamlit",
    "Power BI",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "Git",
    "GitHub",
  ],

  github: "https://github.com/YOUR_USERNAME/eri-system",
  live: "",

  featured: true,

  details: {

    overview:
      "ERI (E-Commerce Review Intelligence) is an end-to-end analytics and NLP system developed to understand what customers are saying about an e-commerce platform and convert that feedback into structured business insights. Instead of looking only at star ratings, the system processes review text, identifies sentiment and important topics, connects review information with customer and order data, and uses the resulting information for segmentation, retention analysis, and customer-priority identification.",

    problem:
      "E-commerce platforms generate a large amount of customer feedback, but raw reviews are difficult to analyze manually. A rating such as 1 or 5 tells us how a customer rated an order, but it does not clearly explain why the customer was satisfied or dissatisfied. The project focuses on turning this unstructured review data into useful information about customer sentiment, recurring issues, customer behavior, retention, and priority.",

    objective: [
      "Process and clean large-scale e-commerce review data",
      "Translate Portuguese review text into English for consistent NLP analysis",
      "Prepare review text for sentiment and topic analysis",
      "Classify reviews into positive, neutral, and negative sentiment",
      "Identify recurring topics and issues discussed by customers",
      "Connect review information with customer and order data",
      "Segment customers based on their available behavioral information",
      "Analyze customer retention-related patterns",
      "Identify customers or groups requiring higher attention",
      "Build interactive dashboards for exploring the results",
      "Convert raw customer feedback into actionable business insights",
    ],

    dataset:
      "The project uses the Brazilian Olist e-commerce dataset. The project worked with Customers, Orders, Order Items, Payments, Products, Sellers, Reviews, Geolocation, and Category Translation data. The Reviews table contains approximately 99K review records, with around 41K reviews containing review text.",

    dataTables: [
      "Customers",
      "Orders",
      "Order Items",
      "Payments",
      "Products",
      "Sellers",
      "Geolocation",
      "Reviews",
      "Category Translation",
    ],

    preprocessing: [
      "Load and inspect the Olist datasets",
      "Check dataset shapes, columns, missing values, and data quality",
      "Identify reviews containing usable text",
      "Clean review text before NLP processing",
      "Handle empty and invalid review messages",
      "Identify duplicate review texts",
      "Analyze conflicting sentiment cases",
      "Prepare unique review texts for translation",
      "Translate Portuguese reviews into English",
      "Map translated unique reviews back to the original review dataset",
      "Prepare the final review dataset for downstream analysis",
    ],

    translation:
      "Because the Olist reviews are written in Portuguese, the review-processing pipeline included Portuguese-to-English translation. Translation was performed on unique review texts to avoid repeatedly translating the same text. The final processed translation dataset contained 35,616 unique translated reviews, with only a small number of missing/problematic translations remaining.",

    dataQuality:
      "Duplicate and conflicting review text was explicitly investigated before sentiment analysis. There were 6,859 duplicate review texts, while 248 unique review texts had conflicting sentiment labels involving 4,481 rows. Some problematic examples included very short or punctuation-only reviews such as '.', '..', '...' and generic phrases such as 'All OK.' and 'All good.'.",

    sentiment:
      "The sentiment stage converts review scores into three business-friendly sentiment categories. Reviews with scores 1–2 were treated as negative, score 3 as neutral, and scores 4–5 as positive. The resulting distribution contained 26,505 positive reviews, 10,889 negative reviews, and 3,556 neutral reviews.",

    sentimentInsights: [
      "Positive reviews: 26,505",
      "Negative reviews: 10,889",
      "Neutral reviews: 3,556",
      "Sentiment categories: Positive, Negative, Neutral",
      "Review scores were used to create the initial sentiment labels",
      "Sentiment results were used as an input for later topic, segmentation, retention, and priority analysis",
    ],

    topicAnalysis:
      "After sentiment analysis, the project moves from 'how the customer feels' to 'what the customer is talking about'. Topic analysis was used to identify recurring themes and issues within the review text. Topics discussed during the project included delivery and shipping, product quality, packaging, price, customer service, product description, payment, and refund-related issues.",

    topics: [
      "Delivery",
      "Shipping",
      "Product Quality",
      "Packaging",
      "Price",
      "Customer Service",
      "Product Description",
      "Payment",
      "Refund",
    ],

    segmentation:
      "The segmentation stage combines customer-level information with available purchase and review-related information to understand different types of customers. The goal is not simply to group customers, but to understand how customer behavior and feedback differ across groups.",

    segmentationFactors: [
      "Customer purchase activity",
      "Order-related information",
      "Review activity",
      "Review sentiment",
      "Customer-level behavioral information",
    ],

    retention:
      "The retention analysis focuses on identifying customer activity and inactivity patterns using available customer and order information. Review sentiment and customer behavior provide additional context for understanding which customer groups may require attention from a retention perspective.",

    retentionFactors: [
      "Customer activity",
      "Purchase behavior",
      "Order history",
      "Review behavior",
      "Sentiment information",
      "Customer value-related information",
    ],

    priority:
      "The final intelligence layer combines customer information with review sentiment, identified topics, and customer behavior to support customer-priority identification. This helps distinguish between customers who are satisfied, customers experiencing issues, and customer groups that may require additional attention.",

    priorityFramework: [
      "Customer behavior",
      "Review sentiment",
      "Review topics",
      "Customer value",
      "Recency-related information",
      "Retention-related signals",
    ],

    workflow: [
      "Collect Olist e-commerce datasets",
      "Explore and audit the datasets",
      "Clean and prepare review data",
      "Identify reviews containing text",
      "Detect duplicate and conflicting review texts",
      "Extract unique review messages",
      "Translate Portuguese reviews into English",
      "Map translations back to the original dataset",
      "Prepare sentiment labels",
      "Perform sentiment analysis",
      "Perform topic analysis",
      "Connect review data with customer/order information",
      "Perform customer segmentation",
      "Analyze retention patterns",
      "Identify customer priorities",
      "Create visualizations and dashboards",
      "Present business insights",
    ],

    features: [
      "Large-scale e-commerce review processing",
      "Portuguese-to-English review translation",
      "Review text cleaning and preprocessing",
      "Duplicate review detection",
      "Conflicting sentiment analysis",
      "Positive / Negative / Neutral sentiment classification",
      "Customer review topic analysis",
      "Customer segmentation",
      "Retention analysis",
      "Customer-priority identification",
      "Customer and order-level analysis",
      "Interactive Streamlit dashboard",
      "Power BI-based business visualization",
      "Business-oriented customer insights",
    ],

    dashboard:
      "The project includes an interactive analytics layer for exploring the processed data and generated insights. Streamlit was used to build the application interface, while Power BI was used for business intelligence, data modeling, calculations, and visual analysis.",

    visualization: [
      "Sentiment distribution",
      "Customer-level analysis",
      "Topic-level analysis",
      "Review insights",
      "Customer segmentation",
      "Retention-related analysis",
      "Priority-related insights",
      "Business-focused interactive visualizations",
    ],

    powerBI:
      "Power BI was used as the business intelligence layer of the project. The workflow included preparing data for BI analysis, creating the required data model, working with Power Query/M and DAX where applicable, and building interactive visualizations to communicate customer and review insights.",

    tools:
      "Python and Pandas were used for data processing and analysis. NumPy supported numerical operations, while NLP and machine-learning libraries were used during text analysis and modeling. Streamlit was used for the interactive application, and Power BI was used for business intelligence and dashboard visualization. Git and GitHub were used for project version control and source-code management.",

    architecture: [
      "Raw Olist Data",
      "Data Exploration & Quality Checks",
      "Review Extraction",
      "Text Cleaning",
      "Duplicate / Conflict Analysis",
      "Portuguese → English Translation",
      "Sentiment Analysis",
      "Topic Analysis",
      "Customer-Level Feature Integration",
      "Customer Segmentation",
      "Retention Analysis",
      "Priority Identification",
      "Streamlit + Power BI",
      "Business Insights",
    ],

    challenges: [
      "Working with a large e-commerce dataset containing multiple related tables",
      "Processing thousands of customer review texts",
      "Handling Portuguese-language review content",
      "Avoiding unnecessary repeated translation of duplicate reviews",
      "Handling duplicate review messages",
      "Investigating conflicting sentiment labels",
      "Dealing with very short or meaningless review texts",
      "Connecting unstructured review information with structured customer and order data",
      "Converting NLP results into understandable business insights",
    ],

    results:
      "The project produced a complete review-intelligence pipeline in which raw e-commerce reviews were transformed into translated, cleaned, sentiment-labeled, topic-aware, and customer-level analytical information. The final system combines review intelligence with customer behavior to support segmentation, retention analysis, and customer-priority identification.",

    learning:
      "This project provided practical experience in working with a real-world multi-table e-commerce dataset, large-scale data cleaning, NLP preprocessing, multilingual text handling, sentiment analysis, topic analysis, customer analytics, business intelligence, and dashboard development.",

    futureScope: [
      "Use transformer-based models for more advanced sentiment analysis",
      "Implement aspect-based sentiment analysis",
      "Improve multilingual NLP support",
      "Develop automated topic labeling",
      "Build customer churn prediction",
      "Add real-time review ingestion",
      "Create automated customer-risk alerts",
      "Generate automated business recommendations",
      "Integrate the analytics system with an e-commerce CRM workflow",
    ],
  },
},

  {
    title: "MyYummyBook",
    icon: "Utensils",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=940",
    description:
      "Modern food recipe web application where users can explore and discover recipes through a responsive React-based interface with a clean and interactive user experience.",
    technologies: ["React.js", "Vite", "Tailwind CSS", "Supabase"],
    github: "https://github.com/YOUR_USERNAME/myyummybook",
    live: "https://github.com/YOUR_USERNAME/myyummybook",
    featured: false,
  },
],

  skills: {
  techIcons: [
    // Programming Languages
    { name: "C", icon: "FileCode" },
    { name: "C++", icon: "FileCode" },
    { name: "Python", icon: "FileCode" },
    { name: "JavaScript", icon: "Braces" },

    // Web Technologies
    { name: "HTML", icon: "Code2" },
    { name: "CSS", icon: "Palette" },
    { name: "React.js", icon: "Atom" },
    { name: "Tailwind CSS", icon: "Palette" },

    // Data Science & Machine Learning
    { name: "NumPy", icon: "Database" },
    { name: "Pandas", icon: "Database" },
    { name: "Scikit-learn", icon: "Brain" },
    { name: "Machine Learning", icon: "Brain" },
    { name: "Feature Engineering", icon: "SlidersHorizontal" },
    { name: "NLP", icon: "MessageSquare" },

    // Databases & Tools
    { name: "MySQL", icon: "Database" },
    { name: "Git", icon: "GitBranch" },
    { name: "GitHub", icon: "Github" },
    { name: "VS Code", icon: "Code2" },
    { name: "Jupyter Notebook", icon: "BookOpen" },
  ],

  categories: [
    {
      title: "Programming Languages",
      icon: "Code2",
      skills: [
        { name: "C", level: 80 },
        { name: "C++", level: 85 },
        { name: "Python", level: 90 },
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
        { name: "Tailwind CSS", level: 85 },
      ],
    },

    {
      title: "Data Science & Machine Learning",
      icon: "Brain",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Feature Engineering", level: 80 },
        { name: "NLP", level: 80 },
        { name: "Scikit-learn", level: 80 },
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 85 },
      ],
    },

    {
      title: "Databases & Tools",
      icon: "Database",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Jupyter Notebook", level: 90 },
      ],
    },

    {
      title: "Core Computer Science",
      icon: "Brain",
      skills: [
        { name: "Data Structures & Algorithms", level: 80 },
        { name: "Object-Oriented Programming", level: 85 },
        { name: "DBMS", level: 80 },
        { name: "Operating Systems", level: 75 },
        { name: "Computer Networks", level: 70 },
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
    title: "What Is Generative AI?",
    organization: "LinkedIn Learning",
    year: "2025",
    type: "AI / Learning",
    image: "/certificates/linkedin-generative-ai.png",
  },

  {
    title: "The Complete Front-End Web Development With React",
    organization: "Udemy",
    year: "2025",
    type: "Web Development",
    image: "/certificates/udemy-react.png",
  },

  {
    title: "Oracle Certified Foundations Associate",
    organization: "Oracle University",
    year: "2025",
    type: "Technical",
    image: "/certificates/oracle-foundations.png",
  },

  {
    title: "Campus Ambassador - SPHINX'25",
    organization: "MNIT Jaipur",
    year: "2025",
    type: "Achievement",
    image: "/certificates/sphinx25.png",
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
    title: "How I Started Learning Machine Learning",
    category: "Machine Learning",
    excerpt:
      "When I first started learning machine learning, the hardest part was not understanding the algorithms. It was figuring out what to learn first and how everything fits together.",
    date: "Sep 05, 2026",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=940",
    readTime: "6 min read",
    content: [
      {
        heading: "Where I Started",
        body:
          "I started with Python and basic data handling before moving into machine learning. At first, concepts like regression, classification, and model evaluation felt disconnected. Building small projects helped me understand how these concepts actually work together."
      },
      {
        heading: "The Part That Took the Most Time",
        body:
          "For me, data preprocessing was one of the most important parts to understand. Handling missing values, encoding categorical data, selecting useful features, and splitting the dataset properly can have a huge impact on the final model."
      },
      {
        heading: "Learning Through Projects",
        body:
          "Instead of only following tutorials, I started building projects around datasets that interested me. A car price prediction project was one of the projects that helped me understand the complete workflow from cleaning data to training and evaluating a model."
      },
      {
        heading: "What I Learned",
        body:
          "The biggest lesson was that machine learning is not just about choosing an algorithm. Understanding the data, asking the right question, selecting useful features, and evaluating the result properly are equally important."
      }
    ]
  },

  {
    title: "What I Learned While Building a Car Price Predictor",
    category: "Machine Learning",
    excerpt:
      "Building a car price predictor gave me a better understanding of how a machine learning model moves from raw data to a usable prediction.",
    date: "Sep 10, 2026",
    image:
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=940",
    readTime: "7 min read",
    content: [
      {
        heading: "Starting With the Dataset",
        body:
          "The project was based on used-car data containing information such as car name, company, manufacturing year, kilometers driven, and fuel type. Before training the model, I first had to understand what each column represented and clean the data."
      },
      {
        heading: "Feature Engineering",
        body:
          "One useful feature I created was car age. Instead of directly relying only on the manufacturing year, I calculated the age of the car from the current year. This made the feature more meaningful for price prediction."
      },
      {
        heading: "Building the Pipeline",
        body:
          "I used a preprocessing pipeline to handle categorical and numerical data before training the regression model. This helped keep preprocessing and model training together instead of manually transforming the data at different stages."
      },
      {
        heading: "What the Project Taught Me",
        body:
          "The most useful part of this project was seeing that model performance depends heavily on the quality of the data and features. A machine learning model cannot compensate for poorly prepared data."
      }
    ]
  },

  {
    title: "Building an SMS Spam Detector with NLP",
    category: "NLP",
    excerpt:
      "My SMS spam detection project was one of my first practical experiences with NLP, from cleaning text to comparing different classification models.",
    date: "Sep 14, 2026",
    image:
      "https://images.pexels.com/photos/5077065/pexels-photo-5077065.jpeg?auto=compress&cs=tinysrgb&w=940",
    readTime: "7 min read",
    content: [
      {
        heading: "The Problem",
        body:
          "Spam messages are usually short, noisy, and written in many different ways. The goal of the project was to build a model that could look at a message and classify it as spam or ham."
      },
      {
        heading: "Preparing the Text",
        body:
          "The first step was cleaning and preparing the messages for machine learning. Text cannot be directly given to most traditional machine learning algorithms, so I converted the messages into numerical features that the models could work with."
      },
      {
        heading: "Trying Different Models",
        body:
          "I experimented with several classification algorithms including Naive Bayes, Logistic Regression, SVC, and Random Forest. Comparing their results helped me understand why different algorithms can behave differently on the same dataset."
      },
      {
        heading: "What I Learned",
        body:
          "This project made NLP much more practical for me. I understood that text preprocessing and feature representation are just as important as the classifier itself."
      }
    ]
  },

  {
    title: "How a Movie Recommender System Actually Works",
    category: "Machine Learning",
    excerpt:
      "A movie recommender looks simple from the outside, but building one helped me understand text similarity, feature engineering, APIs, and the challenges of serving predictions quickly.",
    date: "Sep 18, 2026",
    image:
      "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=940",
    readTime: "8 min read",
    content: [
      {
        heading: "The Basic Idea",
        body:
          "The basic idea behind my movie recommender is simple: when a user selects a movie, the system should find other movies with similar characteristics. The challenge is converting those characteristics into something a machine can compare."
      },
      {
        heading: "Creating Similarity",
        body:
          "I worked with movie metadata and converted relevant information into numerical representations. Similarity between movies can then be calculated and the closest matches can be returned as recommendations."
      },
      {
        heading: "From Model to Application",
        body:
          "I also learned that creating the model is only one part of the project. The recommendation logic needs to be connected to an application so that users can actually interact with it."
      },
      {
        heading: "Performance Matters",
        body:
          "One challenge I faced was response time. A recommendation system can feel slow if the similarity calculations are repeated unnecessarily. This made me pay more attention to preprocessing, storing reusable results, and how the backend communicates with the frontend."
      }
    ]
  },

  {
    title: "What I Learned from My Laptop Intelligence Project",
    category: "Data Science",
    excerpt:
      "Working with laptop product data taught me that a useful data project is not just about collecting thousands of rows. The real work starts after the data has been collected.",
    date: "Sep 22, 2026",
    image:
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=940",
    readTime: "8 min read",
    content: [
      {
        heading: "Collecting the Data",
        body:
          "The project involved collecting laptop product information from online sources. Product data can be inconsistent, so simply scraping it is not enough. The collected data needs to be checked before it can be used for analysis."
      },
      {
        heading: "Cleaning Real-World Data",
        body:
          "I worked with fields such as price, ratings, RAM, storage, processor, display, GPU, and operating system. Many of these fields required cleaning and conversion before meaningful analysis could be performed."
      },
      {
        heading: "Turning Data Into Insights",
        body:
          "After cleaning the data, I built an interactive dashboard to explore prices, ratings, categories, and products. This made the project more useful than simply having a CSV file with thousands of products."
      },
      {
        heading: "The Main Lesson",
        body:
          "The biggest lesson from this project was that real-world data is rarely perfect. Data collection, cleaning, validation, and visualization can take more effort than the machine learning part itself."
      }
    ]
  },

  {
    title: "From Customer Reviews to Business Insights: My ERI System",
    category: "NLP & Data Science",
    excerpt:
      "Customer reviews contain much more information than a simple 1-to-5 rating. My ERI system explores sentiment, topics, customer segments, and retention priorities to turn reviews into useful business insights.",
    date: "Sep 28, 2026",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=940",
    readTime: "9 min read",
    content: [
      {
        heading: "Why Reviews Matter",
        body:
          "A rating tells us how a customer felt, but the review text often tells us why. A customer may give a low rating because of delivery, product quality, packaging, or customer service. That information can be difficult to understand by looking only at the score."
      },
      {
        heading: "Starting With Sentiment Analysis",
        body:
          "The first stage of the system is sentiment analysis. Customer reviews are processed and classified into sentiment categories so that positive and negative experiences can be studied separately."
      },
      {
        heading: "Going Beyond Sentiment",
        body:
          "Sentiment alone is not enough. The system also looks at the topics being discussed in reviews. This helps connect customer sentiment with specific issues such as delivery, product quality, service, or other recurring themes."
      },
      {
        heading: "Customer Segmentation and Retention",
        body:
          "The next step is understanding different groups of customers and identifying which groups may require more attention. Combining sentiment, topics, and customer behaviour makes the analysis more useful for retention-related decisions."
      },
      {
        heading: "What I Learned",
        body:
          "This project changed the way I look at NLP projects. Instead of stopping after getting a good classification score, I started thinking about how the output could actually help someone make a decision."
      }
    ]
  },

  {
    title: "Building a React Portfolio That Feels Like My Own",
    category: "Web Development",
    excerpt:
      "Creating my portfolio was not just about putting my projects on a webpage. I wanted the site to reflect how I approach development: clean structure, reusable components, and a simple user experience.",
    date: "Oct 01, 2026",
    image:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=940",
    readTime: "6 min read",
    content: [
      {
        heading: "Why I Built It Myself",
        body:
          "A portfolio is one of the few projects where the developer controls almost everything. I wanted to use it as an opportunity to practice React while also creating a place where I could present my projects, skills, certificates, and experience."
      },
      {
        heading: "Keeping the Code Reusable",
        body:
          "Instead of writing every section as a separate static page, I used reusable React components and structured the portfolio data separately. This makes it easier to add a new project or certificate without rewriting the UI."
      },
      {
        heading: "Making It Interactive",
        body:
          "I added animations, project cards, article modals, navigation, theme controls, and responsive layouts. The goal was to make the website feel interactive without letting animations get in the way of the content."
      },
      {
        heading: "What I Would Improve Next",
        body:
          "There is always something to improve in a portfolio. My next focus would be improving performance, accessibility, mobile experience, and making the content even more useful for someone who wants to understand my work."
      }
    ]
  },

  {
    title: "The CS Fundamentals I Keep Coming Back To",
    category: "Computer Science",
    excerpt:
      "While working on projects, I have realized that frameworks and libraries change quickly, but the fundamentals behind them stay useful for a much longer time.",
    date: "Oct 02, 2026",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=940",
    readTime: "6 min read",
    content: [
      {
        heading: "DSA",
        body:
          "Data structures and algorithms have helped me think more carefully about how I solve problems. Even when the final solution is simple, understanding time and space complexity helps me choose a better approach."
      },
      {
        heading: "OOP",
        body:
          "Object-oriented programming becomes especially useful when projects grow beyond a few files. Understanding classes, objects, encapsulation, inheritance, and polymorphism makes it easier to structure larger applications."
      },
      {
        heading: "DBMS",
        body:
          "Working with databases made concepts such as normalization, keys, relationships, and queries much more practical. These are not just exam topics when you start building applications that actually store user data."
      },
      {
        heading: "OS and Computer Networks",
        body:
          "Operating systems and computer networks helped me understand what happens underneath an application. Concepts such as processes, memory, HTTP, TCP/IP, and client-server communication become much easier to appreciate when you build real applications."
      }
    ]
  }
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
