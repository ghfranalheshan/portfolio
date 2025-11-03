// src\portfolio.js
/* Updated Professional Portfolio File */

// Global Colors: _globalColor.scss
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Custom splash animation

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Illustration Settings
const illustration = {
  animated: true
};

// Greeting Section
const greeting = {
  username: "Ghfran Al Heshan",
  title: "Hi, I'm Ghfran — Backend Developer",
  subTitle:
    "Passionate Backend Developer creating scalable web applications and efficient APIs using Laravel, CodeIgniter, Django, and MySQL",
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu",
  profileImage: require("./assets/images/myphoto.jpg"),
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/ghfranalheshan",
  linkedin: "https://www.linkedin.com/in/ghfranalheshan/",
  gmail: "ghfranalheshan5@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle:
    "Backend Developer building scalable, enterprise-grade applications",
  skills: [
    emoji(
      "⚡ Design and develop robust backend systems and APIs for web applications"
    ),
    emoji(
      "⚡ Build enterprise-grade systems including ERP, HRMS, WMS, and SaaS applications"
    ),
    emoji(
      "⚡ Optimize database queries and system performance for scalable architecture"
    ),
    emoji(
      "⚡ Integrate third-party services and APIs including WSO2, Stripe, and Chargebee"
    ),
    emoji("⚡ Implement real-time communication using central sockets"),
    emoji(
      "⚡ Collaborate with front-end teams to deliver seamless full-stack solutions"
    )
  ],
  softwareSkills: [
    {skillName: "PHP", fontAwesomeClassname: "fab fa-php"},
    {skillName: "Laravel", fontAwesomeClassname: "fas fa-server"},
    {skillName: "CodeIgniter", fontAwesomeClassname: "fas fa-cogs"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "Django", fontAwesomeClassname: "fas fa-leaf"},
    {skillName: "MySQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "REST API", fontAwesomeClassname: "fas fa-plug"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "GitHub", fontAwesomeClassname: "fab fa-github"},
    {skillName: "WSO2", fontAwesomeClassname: "fas fa-network-wired"},
    {skillName: "Stripe", fontAwesomeClassname: "fas fa-credit-card"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"}
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Damascus University",
      logo: require("./assets/images/damascuselogo.png"),
      subHeader: "B.Sc. in Information Technology Engineering",
      duration: "2019 - 2024 (Expected)",
      desc: "Studied computer science, software development, and backend systems.",
      descBullets: [
        "Learned system architecture, database optimization, and object-oriented programming (OOP).",
        "Completed projects including Warehouse Management System (WMS) and Gym Management System."
      ]
    }
  ]
};

// Tech Stack / Proficiency
const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Backend Development", progressPercentage: "95%"},
    {Stack: "Database Management", progressPercentage: "90%"},
    {Stack: "API Development", progressPercentage: "85%"},
    {Stack: "Full-Stack Collaboration", progressPercentage: "70%"},
    {Stack: "Real-Time Systems", progressPercentage: "75%"}
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Backend Developer",
      company: "ATC Systematic Company",
      companylogo: require("./assets/images/atclogo.png"),
      date: "May 2024 – Present",
      desc: "Developed and maintained backend features for a SaaS ERP system covering inventory, sales, and production planning.",
      descBullets: [
        "Optimized database queries and improved system response times by 30%.",
        "Led development of a pricing module integrating Chargebee and Stripe.",
        "Implemented central socket connections for real-time ERP updates."
      ]
    },
    {
      role: "Backend Developer",
      company: "Code Shield Company",
      companylogo: require("./assets/images/codeshieldlogo.png"),
      date: "Feb 2024 – May 2024",
      desc: "Built a Laravel-based HRMS to manage employee records, attendance, and payroll.",
      descBullets: [
        "Integrated fingerprint devices, reducing manual errors by 40%.",
        "Developed modules for overtime, leave requests, and payroll automation."
      ]
    },
    {
      role: "Freelance Backend Developer",
      company: "Sultan Trading Company",
      companylogo: require("./assets/images/ghfranalheshanlogo.png"),
      date: "Oct 2022 – Feb 2023",
      desc: "Built a secure money transfer system with multi-branch account management and real-time fund tracking.",
      descBullets: [
        "Designed database schema and backend logic for reliable transactions."
      ]
    },
    {
      role: "Backend Developer",
      company: "Independent / Personal Projects",
      companylogo: require("./assets/images/ghfranalheshanlogo.png"),
      date: "Mar 2022 – Jan 2024",
      desc: "Developed personal projects including Gym Management System and Warehouse Management System.",
      descBullets: [
        "Implemented reporting and inventory tracking modules to improve efficiency.",
        "Delivered real-time chat and QR check-in features."
      ]
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: true,
  display: true
};

// Big Projects
const bigProjects = {
  title: "Big Projects",
  subtitle: "Some projects and systems I helped build or lead",
  projects: [
    {
      image: require("./assets/images/atclogo.png"),
      projectName: "Lumytic ERP System",
      projectDesc:
        "Led development of a custom SaaS ERP system for inventory, sales, and production planning.",
      footerLink: [
        {name: "Dashboard", url: "https://demo.lumytic.com"},
        {
          name: "Mobile App",
          url: "https://play.google.com/store/apps/details?id=com.lumytic.app"
        },
        {
          name: "Inspection App",
          url: "https://play.google.com/store/apps/details?id=com.lumytic.inspection"
        }
      ]
    },
    {
      image: require("./assets/images/codeshieldlogo.png"),
      projectName: "HR Management System",
      projectDesc:
        "Built a Laravel-based HRMS for attendance, payroll, and employee management.",
      footerLink: [
        {
          name: "Project Details",
          url: "https://github.com/ghfranalheshan/HR_Management_system"
        }
      ]
    },
    {
      projectName: "Warehouse Management System",
      projectDesc:
        "Designed a multi-user WMS with inventory, billing, and reporting modules.",
      footerLink: [
        {
          name: "Project Details",
          url: "https://github.com/ghfranalheshan/Wherhouse-Managment-System"
        }
      ]
    }
  ],
  display: true
};

// Achievements
const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "Some achievements and projects I am proud of",
  achievementsCards: [
    {
      title: "Freelance Money Transfer System",
      subtitle:
        "Built a secure remittance system with multi-branch account management.",
      imageAlt: "Freelance Project",
      image: require("./assets/images/ghfranalheshanlogo.png"),
      footerLink: []
    },
    {
      title: "Gym Management System",
      subtitle:
        "Developed a full-featured system with QR check-ins and real-time chat.",
      imageAlt: "Gym System",
      image: require("./assets/images/codeshieldlogo.png"),
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/ghfranalheshan/Gym-management-System"
        }
      ]
    }
  ],
  display: true
};

// Blogs, Talks, Podcast (hidden for now)
const blogSection = {display: false};
const talkSection = {display: false};
const podcastSection = {display: false};

// Resume
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};
const factsAboutMe = {
  title: "Fun Facts About Me 😎",
  subtitle: "A few quirky things about my developer life!",
  facts: [
    " I talk to databases more than people (and they usually respond 😅).",
    " I write code that even my future self will admire… sometimes.",
    " Debugging is my cardio; hunting bugs keeps me fit.",
    " I love launching projects and watching them actually work on the first try (rare, but magical!).",
    " My playlist is basically just code + coffee fuel.",
    " Optimizing queries is my version of solving puzzles."
  ],
  display: true
};

// Contact
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi. My inbox is open.",
  number: "+963 935 576 965",
  email_address: "Ghfranalheshan5@gmail.com"
};

// Twitter
const twitterDetails = {
  userName: "twitter", // replace with your username if needed
  display: true
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  factsAboutMe,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
