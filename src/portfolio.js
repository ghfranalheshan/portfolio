// src\portfolio.js
/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ghfran Al heshan",
  title: "Hi all, I'm Ghfran",
  subTitle:
    "Passionate Backend Developer creating scalable web applications and efficient APIs",
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ghfranalheshan",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "ghfranalheshan5@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Backend Developer building scalable, enterprise-grade applications using Laravel, CodeIgniter, Django, and MySQL",
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

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "CodeIgniter",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "REST API",
      fontAwesomeClassname: "fas fa-plug"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "WSO2",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Stripe",
      fontAwesomeClassname: "fas fa-credit-card"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Damascus University",
      logo: require("./assets/images/damascuselogo.png"), // replace with your logo image if you have it
      subHeader: "B.Sc. in Information Technology Engineering",
      duration: "2019 - 2024 (Expected)",
      desc: "Studied computer science, software development, and backend systems, gaining expertise in Laravel, CodeIgniter, Django, and MySQL.",
      descBullets: [
        "Learned system architecture, database optimization, and object-oriented programming (OOP).",
        "Completed projects including Warehouse Management System (WMS) and Gym Management System."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development",
      progressPercentage: "95%" // You have strong backend experience
    },
    {
      Stack: "Database Management",
      progressPercentage: "90%" // MySQL, PostgreSQL, optimization
    },
    {
      Stack: "API Development",
      progressPercentage: "85%" // RESTful APIs, third-party integrations (WSO2, Stripe, Chargebee)
    },
    {
      Stack: "Full-Stack Collaboration",
      progressPercentage: "70%" // Working with front-end teams, integrating front-end
    },
    {
      Stack: "Real-Time Systems",
      progressPercentage: "75%" // Central socket communication, live updates
    }
  ],

  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Developer",
      company: "ATC Systematic Company",
      companylogo: require("./assets/images/atclogo.png"), // Add logo if available
      date: "May 2024 – Present",
      desc: "Developed and maintained backend features for a SaaS ERP system covering inventory, sales, and production planning. Led development of a pricing module integrating Chargebee and Stripe. Optimized database queries and improved system response times by 30%.",
      descBullets: [
        "Implemented central socket connections for real-time updates within ERP modules.",
        "Collaborated with front-end and QA teams for seamless integration."
      ]
    },
    {
      role: "Backend Developer",
      company: "Code Shield Company",
      companylogo: require("./assets/images/codeshieldlogo.png"),
      date: "Feb 2024 – May 2024",
      desc: "Built a Laravel-based Human Resource Management System (HRMS) to manage employee records, attendance, and payroll. Integrated fingerprint devices reducing manual errors by 40%.",
      descBullets: [
        "Developed modules for overtime, leave requests, and payroll automation."
      ]
    },
    {
      role: "Freelance Backend Developer",
      company: "Sultan Trading Company",
      companylogo: require("./assets/images/ghfranalheshanlogo.png"),
      date: "Oct 2022 – Feb 2023",
      desc: "Built a secure money transfer system with multi-branch account management and real-time fund tracking using Laravel and MySQL.",
      descBullets: [
        "Designed database schema and backend logic for reliable transactions."
      ]
    },
    {
      role: "Backend Developer",
      company: "Independent / Personal Projects",
      companylogo: require("./assets/images/ghfranalheshanlogo.png"),
      date: "Mar 2022 – Jan 2024",
      desc: "Developed multiple personal projects including a Gym Management System and Warehouse Management System with full backend logic, database design, and real-time chat or QR code check-ins.",
      descBullets: [
        "Delivered user-friendly solutions adopted by local businesses.",
        "Implemented reporting and inventory tracking modules to improve efficiency."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some projects and systems I helped build or lead",
  projects: [
    {
      image: require("./assets/images/atclogo.png"), // add your ERP system logo
      projectName: "Lumytic ERP System",
      projectDesc:
        "Developed and maintained a custom SaaS ERP system for inventory, sales, and production planning.",
      footerLink: [
        {name: "Dashboard link", url: "https://demo.lumytic.com"},
        {
          name: "Mobile App ",
          url: "https://play.google.com/store/apps/details?id=com.lumytic.app"
        },
        {
          name: "Inspection App",
          url: "https://play.google.com/store/apps/details?id=com.lumytic.inspection"
        }
        // if no URL, keep "#"
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

// Achievement Section
// Include certificates, talks etc

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
      image: require("./assets/images/ghfranalheshanlogo.png"),
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

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "I share my learning and projects online.",
  displayMediumBlogs: false,
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji("I love to share knowledge"),
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I love to talk about technology",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi. My inbox is open.",
  number: "+963 935 576 965",
  email_address: "Ghfranalheshan5@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
