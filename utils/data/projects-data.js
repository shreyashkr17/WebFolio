import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'IRETI Ensemble - Fashion Designer Platform',
        description: "Developed a comprehensive Ecommerce Fashion website, enabling over 500 users to shop for designed clothing with customized sizing, add items to cart and wishlist, and compare products. Integrated Razorpay Payment Module with NextJS framework, securing over 200 transactions with backend ordering features.",
        tools: ['NextJS', 'PostgreSQL', 'NodeJS', 'Redux ToolKit', 'AWS S3', 'Node Mailer', 'PM2', 'Nginx'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'ShortlyCut.xyz - URL Shortener',
        description: 'This handles over 1,000 requests per second, leveraging Node.js clustering and Redis caching for optimal performance. With PostgreSQL for reliable data storage and Nginx for load balancing, the system ensures high availability and quick response times. Advanced features include rate limiting and scalable architecture for future growth.',
        tools: ['React.JS', 'Tailwind CSS', "Vite", "TypeScript", "PostgreSQL", "Nginx", "Redis", "Node.JS", "Express.JS"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Student Academic Portal',
        description: "My team and I Implemented feedback system for course/instructor evaluation, enabling data-driven course assignments by Dean and Academic Affairs. Streamlined course registration process, reducing overhead. Redesigned home page, increasing accessibility and engagement",
        tools: ['Node.JS', 'RabbitMQ', 'Express.JS', "PostgreSQL"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Backend Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },