import {
  logo,
  play,
  frontend,
  coreprogramming,
  machinelearning,
  appdev,
  robotics,
  debate,

  AiPlayground,
  Bar404,
  HelloRemi,
  HateSpeechDetetction,
  AIMusic,
  AiMusicGenerator,
  PortfolioWebsite,

  github,
  website,

  uoft, 
  elmwoood,
  headshot,
  JAY,
  UTRA,
  UTMIST,
  UTFR,
  Scientista,
  UTEK,
  Blackberry,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },

];

const services = [
  {
    title: "Front-End",
    icon: frontend,
    description: "I specialize in front-end technologies including React, React Native, JavaScript, CSS and Three.js for web design and interactivity."
  },
  {
    title: "Machine Learning",
    icon: machinelearning,
    description: "I have extensive experience in machine learning having worked with leading libraries such as TensorFlow, Keras, PyTorch, and OpenCV."
  },
  {
    title: "Core Programming",
    icon: coreprogramming,
    description: "My foundation in programming is built upon a robust understanding of languages such as Python, Java, C++, and R."
  },
  {
    title: "App Developmemt",
    icon: appdev,
    description: "I excel in developing responsive cross-platform applications using Flutter/Dart and as well as React Native."
  },
  {
    title: "Robotics",
    icon: robotics,
    description: "Skilled in Computer Vision and ROS, I specialize in motion planning and LIDAR-based sensor fusion to create responsive robotic systems."
  },
  {
    title: "Debate",
    icon: debate,
    description: "With over 7 years of experience in competitive debate and 6 years in coaching, I instruct British Parliamentary and Canadian Parliamentary style debate."
  }
];


const educations = [
  {
    school: "Elmwood School",
    degree: "International Baccalaureate Diploma",
    date: "Sept 2019 - June 2022 ",
    icon: elmwoood,
    points: [
      "Awards: Lietenant Governer's Community Volunteer Award, Merit Pin",
      "Competitions: Waterloo Gauss Honours (2x), Waterloo Pascal Honours, Waterloo Fermat Honours",
      "HL Physics (Level 7), HL Math (Level 7), HL Chemistry (Level 7)",
    ]
  },
  {
    school: "University of Toronto -St. George",
    degree: "Honours Bachelor of Science - Computer Science",
    date: " Sept 2022 - Apr 2026 (expected) ",
    icon: uoft,
    points: [
      "Scholarships: Timothy P. Morton Scholarship ($30,000+)",
      "Relevant Coursework: Computer Organization, Theory of Computation, Software Design"
    ]
  },
];

const experiences = [
  {
    title: "Software Development Student",
    company_name: "Blackberry QNX",
    icon: Blackberry,
    iconBg: "#ffff",
    date: "May 2024 - August 2024",
    points: [
      ""
    ],
  },
  {
    title: "Co-Founder and Director",
    company_name: "Jay Learning Center",
    icon: JAY,
    iconBg: "#ffff",
    date: "July 2018 - Present",
    points: [
      "Co-Founded a non-profit learning center with over 500+ students enrolled. Generating over $15,00 in revenue",
      "Spearheaded activities and new developments for various subjects including debate, competition math, and programming",
      "Planned and executed weekly classes and the annual summar camp",
      "Instructed parliamentary style debate and competition math for 5+ years.",
      "Click this card to learn more!"
    ],
  },
  {
    title: "Competition Director",
    company_name: "University of Toronto Engineering Kompetitions",
    icon: UTEK,
    iconBg: "#ffff",
    date: "Sept 2023 - Present",
    points: [
      "Organized the University of Toronto's annual Engineering Debate Competition",
      "Orchestrated comprehensive event preparations from document drafting to strategic marketing, ensuring an impactful debate experience.",
    ],
  },
  {
    title: "Events Chair",
    company_name: "University of Toronto Scientista",
    icon: Scientista,
    iconBg: "#ffff",
    date: "Sept 2023 - Present",
    points: [
      "Led the organization of diverse events to promote STEM inclusivity and amplify women representation.",
      "Managed end-to-end event logistics from securing venues to forging collaborative partnerships.",
      "Cultivated a vibrant community experience, fostering connections and enriching student engagement.",
    ],
  },
  {
    title: "Computer Vision Engineer | Marketing Manager",
    company_name: "University of Toronto Autonomous Rover Team",
    icon: UTRA,
    iconBg: "#ffff",
    date: "Sept 2023 - Present",
    points: [
      "Used Python, Pytorch, and OpenCV to detect obstacles an autonomous rover may face such as potholes and lanes.",
      "Colaborated on real-time image processing, depth/object recognition with advanced neural networks and data tools.",
      "Managed the Autonomous Rover Team's social media marketing.",
    ],
  },
  {
    title: "Industry Relations Coordinator",
    company_name: "University of Toronto Machine Intelligence Student Team",
    icon: UTMIST,
    iconBg: "#ffff",
    date: "Sept 2023 - Present",
    points: [
      "Collaborated with industry figures to enhance the quality of events through securing partnerships and sponsorships.",
      "Helped in planning large scale events and hackathons."
    ],
  },
  {
    title: "Driverless Member",
    company_name: "University of Toronto Formula Racing Team",
    icon: UTFR,
    iconBg: "#ffff",
    date: "Sept 2023 - Present",
    points: [
      "Leveraged ROS for stereo-camera and LiDAR data processing for visualization and coordinate computation in RViz.",
      "Engaged in perception tasks focusing on stero-camera data, depth determination, and OpenCV integration."
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
    name: "Remi",
    description:
      "Worked in a team of 4 tool with a web-based application connected to an answering machine. It's purpose is to use reminiscence therapy to strengthen bonds between patients with memory-related challenges and their loved ones. After entering patient information and your favourite memory, we make a call to the Cohere API to generate a story which can be played on the answering machine in the specified family member's voice. First place winner of UofTHacks, RBC category.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "Kintone",
        color: "pink-text-gradient",
      },
      {
        name: "Arduino UNO",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Cohere",
        color: "pink-text-gradient",
      },
    ],
    icon: github,
    image: HelloRemi,
    type: "link",
    source_code_link: "https://github.com/alvina-yang/HelloRemi",
  },
  {
    name: "AI Playground",
    description:
      "Worked in a team of 6 to create an interactive Java-based platform for visualzing neural network decision boundaries. This platform allows for users to customize datasets and adjust paramaters to demonstrate real-time effects on the decision boundary.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Deep Java (DJL)",
        color: "green-text-gradient",
      },
      {
        name: "JavaFX",
        color: "pink-text-gradient",
      },
    ],
    icon: github,
    image: AiPlayground,
    type: "link",
    source_code_link: "https://github.com/CSC207-2023Y-UofT/ai-playground",
  },
  {
    name: "Bar404 Website",
    description:
      "A website for Bar404, a high-end bar located in Toronto featuring a menu, a gallery, and a reservation booking system.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    icon: website,
    image: Bar404,
    type: "link",
    source_code_link: "https://404toronto.com/",
  },
  {
    name: "AI Music Generator",
    description:
      "A deep learning model created using LSTM neural networks to generate original music compositons. Feel feel free to click to play/pause",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Keras",
        color: "green-text-gradient",
      },
      {
        name: "Music21",
        color: "pink-text-gradient",
      },
    ],
    icon: play,
    image: AIMusic,
    type: "audio",
    audio_link: AiMusicGenerator,
    source_code_link: "https://github.com/alvina-yang/musicGenerator",
  },
  {
    name: "Hate/Offensive Speech Detection Algorithm",
    description:
      "A classification algorithm created using neural networks to classify text into 3 different categories: offensive, hate speech, or neither with a 96% accuracy. ",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
      {
        name: "NumPy",
        color: "blue-text-gradient",
      },
    ],
    icon: github,
    image: HateSpeechDetetction,
    type: "link",
    source_code_link: "https://github.com/alvina-yang/hateSpeechDetection/",
  },
  {
    name: "Personal Portfolio Website",
    description:
      "An interactive personal website featuring my skills, experience, and projects. You're on it right now!",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
    ],
    icon: website,
    image: PortfolioWebsite,
    type: "link",
    source_code_link: "https://github.com/",
  },
];

export { services, experiences, educations, testimonials, projects };