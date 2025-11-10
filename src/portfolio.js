// src\portfolio.js
/* Professional Portfolio File for Ghfran Al Heshan */

// Import assets
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Illustration Settings
const illustration = { animated: true };

// Greeting Section
const greeting = {
  username: "Ghfran Al Heshan",
  title: "Hi, I'm Ghfran — Backend Developer",
  subTitle:
    "Passionate backend engineer building scalable enterprise systems, APIs, and real-time platforms using Laravel, CodeIgniter, Django, Redis, and MySQL.",
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

// Skills Section (Rewritten to be concise & impact-driven)
const skillsSection = {
  title: "Skills & Expertise",
  subTitle: "Specialized in backend development, real-time systems, and enterprise integrations",
  skills: [
    emoji(
      "⚡ Architecting and developing scalable backend systems and APIs for enterprise applications"
    ),
    emoji(
      "⚡ Implementing real-time systems using WebSockets and Redis for multi-framework platforms"
    ),
    emoji(
      "⚡ Optimizing database queries and complex relational operations across 200+ tables"
    ),
    emoji(
      "⚡ Integrating third-party services (WSO2, Stripe, Chargebee) for seamless workflows"
    ),
    emoji(
      "⚡ Designing enterprise-grade ERP, HRMS, WMS, and SaaS applications"
    ),
    emoji(
      "⚡ Collaborating with frontend and mobile teams to deliver end-to-end solutions"
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
    {skillName: "Redis", fontAwesomeClassname: "fas fa-memory"},
    {skillName: "WebSockets", fontAwesomeClassname: "fas fa-network-wired"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "WSO2", fontAwesomeClassname: "fas fa-network-wired"},
    {skillName: "Stripe", fontAwesomeClassname: "fas fa-credit-card"},
    {skillName: "Git & GitHub", fontAwesomeClassname: "fab fa-git-alt"}
  ],
  display: true
};

// Education Section (polished)
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Damascus University",
      logo: require("./assets/images/damascuselogo.png"),
      subHeader: "B.Sc. in Information Technology Engineering",
      duration: "2019 - 2024",
      desc: "Studied software development, backend systems, and enterprise application architecture.",
      descBullets: [
        "Built projects including Warehouse Management System (WMS) and Gym Management System.",
        "Learned database optimization, system scalability, and OOP principles."
      ]
    }
  ]
};

// Tech Stack / Proficiency (add clear professional structure)
const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Backend Development", progressPercentage: "95%"},
    {Stack: "Database Design & Optimization", progressPercentage: "90%"},
    {Stack: "API Development & Integration", progressPercentage: "85%"},
    {Stack: "Real-Time Systems", progressPercentage: "80%"},
    {Stack: "Collaboration / Full-Stack Understanding", progressPercentage: "70%"}
  ],
  displayCodersrank: false
};

// Work Experience (improved with metrics & impact)
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Backend Developer",
      company: "ATC Systematic Company",
      companylogo: require("./assets/images/atclogo.png"),
      date: "May 2024 – Present",
      desc: "Developed and maintained backend features for a SaaS ERP covering inventory, sales, and production planning.",
      descBullets: [
        "Optimized database queries, improving system response times by 30%.",
        "Designed and implemented a pricing module integrating Stripe & Chargebee.",
        "Built central WebSocket gateway for real-time ERP updates across multi-framework modules (Django, CodeIgniter, React)."
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
        "Automated overtime, leave requests, and payroll processes."
      ]
    },
    {
      role: "Freelance Backend Developer",
      company: "Sultan Trading Company",
      companylogo: require("./assets/images/ghfranalheshanlogo.png"),
      date: "Oct 2022 – Feb 2023",
      desc: "Built secure money transfer system with multi-branch account management and real-time fund tracking.",
      descBullets: [
        "Designed database schema and backend logic to ensure reliable transactions."
      ]
    },
    {
      role: "Independent / Personal Projects",
      companylogo: require("./assets/images/ghfranalheshanlogo.png"),
      date: "Mar 2022 – Jan 2024",
      desc: "Developed Gym Management System and Warehouse Management System.",
      descBullets: [
        "Implemented reporting, inventory tracking, QR check-ins, and real-time chat features."
      ]
    }
  ]
};


// Open Source Section
const openSource = {
  showGithubProfile: true,
  display: true
};

// Big Projects (polished)
const bigProjects = {
  title: "Highlighted Projects",
  subtitle: "Enterprise and large-scale systems I contributed to",
  projects: [
    {
      image: require("./assets/images/atclogo.png"),
      projectName: "Lumytic ERP System",
      projectDesc:
        "Led development of a custom SaaS ERP for inventory, sales, and production planning with real-time updates across multi-framework platforms.",
      footerLink: [
        {name: "Dashboard", url: "https://demo.lumytic.com"},
        {name: "Mobile App", url: "https://play.google.com/store/apps/details?id=com.lumytic.app"},
        {name: "Inspection App", url: "https://play.google.com/store/apps/details?id=com.lumytic.inspection"}
      ]
    },
    {
      image: require("./assets/images/codeshieldlogo.png"),
      projectName: "HR Management System",
      projectDesc:
        "Developed Laravel-based HRMS for attendance, payroll, and employee management, reducing manual errors by 40%.",
      footerLink: [
        {name: "Project Details", url: "https://github.com/ghfranalheshan/HR_Management_system"}
      ]
    },
    {
      projectName: "Warehouse Management System",
      projectDesc:
        "Designed multi-user WMS with inventory, billing, and reporting modules, improving efficiency and inventory tracking.",
      footerLink: [
        {name: "Project Details", url: "https://github.com/ghfranalheshan/Wherhouse-Managment-System"}
      ]
    }
  ],
  display: true
};

// Achievements Section (highlight measurable results)
const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "Projects and systems demonstrating impact and technical leadership",
  achievementsCards: [
    {
      title: "Freelance Money Transfer System",
      subtitle:
        "Built secure remittance system supporting multi-branch transactions in real-time.",
      imageAlt: "Freelance Project",
      image: require("./assets/images/ghfranalheshanlogo.png"),
      footerLink: []
    },
    {
      title: "Gym Management System",
      subtitle:
        "Developed real-time chat, QR check-ins, and reporting modules for gym management.",
      imageAlt: "Gym System",
      image: require("./assets/images/codeshieldlogo.png"),
      footerLink: [
        {name: "View Project", url: "https://github.com/ghfranalheshan/Gym-management-System"}
      ]
    }
  ],
  display: true
};
// Blogs, Talks, Podcast (hidden for now)
const blogSection = {display: false};
const talkSection = {display: false};
const podcastSection = {display: false};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my professional CV",
  
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

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let's discuss a project or opportunity. My inbox is open!",
  number: "+963 935 576 965",
  email_address: "Ghfranalheshan5@gmail.com"
};
const isHireable = false;
// Twitter
const twitterDetails = {
  userName: "twitter", // replace with your username if needed
  display: false
};
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
