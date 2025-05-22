import imgurl from "./assets/images/kamran.png"
import Klogo from "../src/assets/images/logo.png"

// const logotext = "KAMRAN ";
const logotext = Klogo;
const meta = {
    title: "KAMRAN ",
    description: "I am Front-End REACT JS Developer  devloper,currently working in DYNSOF",
};

const introdata = {
    title: "I’m KAMRAN",
    animated: {
        first: "Passionate Front-End Developer building modern web experiences",
        second: "I craft interactive UIs with React.js",
        third: "Turning ideas into responsive mobile apps",
    },
    description: "Hi, I'm Kamran — a Frontend DeveloperI craft clean, responsive, and user-friendly interfaces using HTML, CSS, JavaScript (ES6+), and modern tools like React and Tailwind CSS.",
    your_img_url: imgurl,
};

const dataabout = {
    title: "Introduction",
    aboutme: " Hi, I'm Kamran — a Frontend DeveloperI craft clean, responsive, and user-friendly interfaces using HTML, CSS, JavaScript (ES6+), and modern tools like React and Tailwind CSS. I love turning ideas into real web experiences. Whether it's a simple landing page or a complex React app, I enjoy writing clean code, solving UI challenges, and building things that people enjoy using.",
};
const worktimeline = [{
        jobtitle: "Youtube UI",
        where: "Dynsof",
        date: "2025",
    },
    {
        jobtitle: "Portfolio",
        where: "Dynsof",
        date: "2025",
    },
    {
        jobtitle: "Cryptoapp",
        where: "Dynsof",
        date: "2025",
    },
];

const skills = [
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Tailwind",
        value: 90,
    }
];

const services = [
    {
        title: "React UI Creation",
        description: "Building dynamic, interactive, and modern user interfaces (UIs) using React. I focus on creating reusable components, optimizing for performance, and delivering engaging front-end experiences that bring your designs to life."
    },
    {
        title: "Portfolio Development",
        description: "Crafting bespoke, high-performance portfolios that effectively showcase your skills, projects, and professional brand. I build intuitive and visually compelling platforms designed to make a strong impression on potential employers or clients."
    },
    {
        title: "Website Redesign & Development",
        description: "Transforming existing websites with modern aesthetics and enhanced functionality. I specialize in revamping outdated designs, improving user experience, and rebuilding sites with clean, efficient code for better performance and scalability."
    },
    {
        title: "Responsive Web Design",
        description: "Ensuring your website looks and functions flawlessly across all devices – from desktops and laptops to tablets and smartphones. My responsive design approach guarantees an optimal viewing and interaction experience for every user, regardless of screen size."
    },
];

const dataportfolio = [
    {
        img: "https://miro.medium.com/v2/resize:fit:1400/0*JtIxYhVuiXx-k-8H", // Image hinting at YouTube clone
        description: "Developed a responsive YouTube Homepage UI clone using React, focusing on component reusability and dynamic content rendering.",
        link: "https://example.com/youtube-clone", // Dummy URL for YouTube Clone
    },
    {
        img: "https://cdn1.vectorstock.com/i/1000x1000/85/05/web-page-design-business-style-front-end-vector-20648505.jpg", // Image hinting at Crypto Page
        description: "Built a real-time Cryptocurrency tracker with React, integrating external APIs for live data fetching and dynamic display of crypto prices and market cap.",
        link: "https://code-with-kamran.github.io/cryptoApp/", // Actual URL provided by user
    },
    {
        img: "https://themewagon.com/wp-content/uploads/2016/08/Best-Free-Multipurpose-Bootstrap-Corporate-Business-Template-1.jpg", // Image for Landing Page
        description: "Created a modern landing page with interactive elements, showcasing proficiency in React Hooks and CSS animations for engaging user experience.",
        link: "https://example.com/interactive-landing-page", // Dummy URL
    },
    {
        img: "https://cdn.dribbble.com/userupload/17427533/file/original-ff467291c96cfc602917f815fd4c7d69.png?resize=400x0", // Image for E-commerce
        description: "Designed and developed a responsive e-commerce product listing page, implementing filtering and sorting functionalities in React.",
        link: "https://example.com/ecommerce-products", // Dummy URL
    },
    {
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/ddac92221966325.Y3JvcCw1MjM2LDQwOTYsMjU5LDA.png", // Image for Weather App
        description: "Developed a dynamic weather application using React, fetching data from a public API and displaying forecasts with intuitive UI.",
        link: "https://example.com/weather-app", // Dummy URL
    },
    {
        img: "https://res.cloudinary.com/dz209s6jk/image/upload/v1668186504/Challenges/vxhhu11tdpmyw2srepdk.jpg", // Image for Task Dashboard
        description: "Implemented a task management dashboard with drag-and-drop functionality, demonstrating advanced state management and UI interactions in React.",
        link: "https://example.com/task-dashboard", // Dummy URL
    },
];
const contactConfig = {
    YOUR_EMAIL: "nkamran045@gmail.com",
    YOUR_FONE: "+92 3220867157",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Code-with-kamran",
    // facebook: "https://facebook.com",
    linkedin: "www.linkedin.com/in/kamran-hassan-628338284",
    // twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};