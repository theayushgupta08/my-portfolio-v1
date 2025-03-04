import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    mongodb,
    cpp,
    python,
    sql,
    cyberayush,
    igi,
    inorbvict,
    whereismybus,
    linktreeclone,
    zenlist,
} from "../assets";

export const navLinks = [
    {
        id: "resume",
        title: "My Resume",
        download: true,
        url: "/Ayush_Gupta.pdf"
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Application Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "C++",
        icon: cpp,
    },
    {
        name: "SQL",
        icon: sql,
    },
];

const experiences = [
    {
        title: "Content Creator",
        company_name: "CyberAyush",
        icon: cyberayush,
        iconBg: "#E6DEDD",
        date: "March 2021 - Present",
        points: [
            "Develop and implement content strategies to align with brand objectives and target audience preferences.",
            "Create engaging and original content, including blog posts, videos, social media updates, and graphics.",
            "Monitor and analyze performance metrics to optimize content reach and audience engagement.",
            "Interact with followers by responding to comments, messages, and queries to build community loyalty.",
            "Collaborate with teams and partners to execute successful campaigns and maintain brand consistency.",
        ],
    },
    {
        title: "Data Science Intern",
        company_name: "Inorbvict Healthcare Pvt Ltd, Pune",
        icon: inorbvict,
        iconBg: "#383E56",
        date: "August 2024 - September 2024",
        points: [
            "Designed 7 scalable training modules for Learning Management System (LMS) using AI techniques and domain knowledge.",
            "Implemented web scrapping to gather product details from the Online Shopping Websites IndiaMart. Analyzed, Cleaned and Visualized collected data for efficient presentation to the stakeholders using Excel.",
            "Automated Chatbot testing using Python Script to reduce the time by 80% and increase the efficiency by 50%.",
            "Identified 9 major defects in CRM Software and used JIRA to report these defects to the developer.",
        ],
    },
    {
        title: "Data Analyst and Alumni Engaegment Specialist Intern",
        company_name: "Indira Group of Institutes, Pune",
        icon: igi,
        iconBg: "#E6DEDD",
        date: "January 2024 - March 2024",
        points: [
            "Collaborated with cross-functional teams while leading the data collection, cleaning, and analysis process, resulting in a 60% increase in the accuracy and completeness of alumni records.",
            "Coordinated and organized 5 events including training sessions, guest lectures, and award shows by actively engaging with alumni, enhancing networking and learning opportunities for college students.",
            "Collected, analyzed and cleaned the dataset of Alumni, which results in increase by 60% of data.",
        ],
    },
    {
        title: "Software Developer Intern",
        company_name: "Indira College of Engineering and Management, Pune ",
        icon: igi,
        iconBg: "#383E56",
        date: "December 2023 - January 2021",
        points: [
            "Build a Result Conversion tool that converts PDFs into CSV, improving search efficiency by 50% and data analysis by 40% and reducing manual data processing time by 60%.",
            "Achieved 99% accuracy in data conversion through the Result Conversion tool, ensuring reliable and precise data transformation.",
            "Recognized as a runner-up in a competitive project evaluation, showcasing innovative solutions to analyze results efficiently. ",
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
        name: "Where is my BUS?",
        description:
            "The Real-Time Local Bus Locator and Tracker is a smart transportation system designed to provide live bus tracking, route management, and passenger assistance. Built using MERN Stack, it enables real-time GPS updates, reducing waiting times and enhancing public transport efficiency for both passengers and administrators.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "kafka",
                color: "green-text-gradient",
            },
        ],
        image: whereismybus,
        source_code_link: "https://github.com/theayushgupta08/whereismybus",
    },
    {
        name: "Linktree Clone",
        description:
            "Linktree Clone is a React and MongoDB-based web application that allows users to create a personalized bio link page with multiple links. It features efficient CRUD operations, a sleek UI, and easy customization, enabling users to share all their important links in one place for better online presence.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
        ],
        image: linktreeclone,
        source_code_link: "https://github.com/theayushgupta08/linktree-clone",
    },
    {
        name: "Zen List",
        description:
            "ZenList is a ToDo App for task management application built with React and MongoDB, offering seamless CRUD operations for efficient task handling. Users can add, update, delete, and organize tasks effortlessly. With a clean UI and real-time updates, ZenList ensures productivity and ease in daily task management. ",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        image: zenlist,
        source_code_link: "https://github.com/theayushgupta08/ZenList-Day-Planner",
    },
];

export { services, technologies, experiences, testimonials, projects };