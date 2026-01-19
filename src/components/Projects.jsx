import React, { useState } from 'react';
import Header from './Header';
import pattern from '../assets/bg-pattern.webp';

import img2 from '../assets/sarab-shipping.webp';
import img3 from '../assets/aryaa_foods.webp';
import img4 from '../assets/hello_social.webp';
import img5 from '../assets/urban.webp';
import img6 from '../assets/spotcard.webp';
import img7 from '../assets/event.spotcard.webp';
import img8 from '../assets/muthayammalneet.webp';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const projects = [
        // Freelancing Projects
        {
            id: 1,
            category: 'freelancing',
            title: 'Sarab Shipping',
            subtitle: 'Logistical Company Website',
            description: 'I designed and developed a static website for Sarab Shipping to showcase their logistics services and establish a strong online presence. The website highlights their key services, including ocean, air, and land transportation, with a focus on clear navigation and user-friendly design. Built with HTML, CSS, and JavaScript, the site is fully responsive, ensuring compatibility across devices while maintaining fast load times and a smooth browsing experience.',
            image: img2,
            link: 'https://sarab-shipping.vercel.app',
            tags: ['Responsive', 'Modern Design'],
            techStack: 'HTML, CSS, JavaScript'
        },
        {
            id: 2,
            category: 'freelancing',
            title: 'Aryaa Foods',
            subtitle: 'Food Product Manufacturer Website',
            description: 'I developed the Aryaa Foods website using React and Tailwind CSS, focusing on creating smooth animations to enhance user engagement. The project involved designing the entire webpage, ensuring a visually appealing layout that aligned with the brand\'s identity. I also edited and optimized product images to display their offerings in a clean and professional manner. The end result was a responsive, dynamic website that showcases Aryaa Foods\' products effectively.',
            image: img3,
            link: 'https://aryaa-react-new.vercel.app',
            tags: ['Animations', 'Smooth User Experience'],
            techStack: 'React.js, Tailwind CSS'
        },
        {
            id: 3,
            category: 'freelancing',
            title: 'Hello Social',
            subtitle: 'Digital Marketing & Web Development Firm',
            description: 'The Hello Social website is currently under development but is accessible for viewing. Built using React and Tailwind CSS, the project emphasizes modern, interactive UI designs aimed at enhancing user experience. We are focusing on crafting a visually appealing and highly functional digital presence for Hello Social, blending responsive design with engaging user interactions.',
            image: img4,
            link: 'https://hellosocial.in',
            tags: ['Innovative', 'Sustainable'],
            techStack: 'React.js, Tailwind CSS'
        },
        {
            id: 4,
            category: 'freelancing',
            title: 'Urban Horticulture',
            subtitle: 'Farming Equipment & Services',
            description: 'Urban Horticulture provides essential farming equipment, such as nets and sheds, for small to medium-scale farmers in the UAE. The website features a clean and responsive design, offering detailed information about the company\'s products and services. Built with HTML, CSS, and JavaScript, it ensures an easy-to-navigate user experience, highlighting the company\'s expertise in the agricultural sector.',
            image: img5,
            link: 'https://urban-horticulture-farm.vercel.app',
            tags: ['User-friendly', 'Minimalistic'],
            techStack: 'HTML, CSS, JavaScript'
        },
        {
            id: 5,
            category: 'freelancing',
            title: 'Muthayammal NEET',
            subtitle: 'NEET Coaching & Educational Services',
            description: 'Muthayammal NEET is a comprehensive educational platform designed for NEET aspirants. The website provides information about coaching programs, course details, faculty, and admission procedures. Built with modern web technologies, it offers an intuitive user experience with responsive design, ensuring students can easily access information about courses, schedules, and educational resources.',
            image: img8,
            link: 'http://muthayammalneet.com/',
            tags: ['Educational', 'Professional'],
            techStack: 'React.js, Modern Web Technologies'
        },
        // Professional Projects
        {
            id: 6,
            category: 'professional',
            title: 'Hostzop SaaS Ecosystem',
            subtitle: 'Client & Reseller Platforms',
            description: 'Architected and built the frontend and backend for white-labeled SaaS platforms used by 1,000+ users. Developed interactive dashboards using D3.js to visualize billing, usage, and server metrics. Implemented scalable state management using React Context API and custom hooks. Optimized application performance using memoization (useMemo, useCallback), achieving a 35% improvement in key workflows. Enabled white-label support with custom domains and branding.',
            image: null,
            link: null,
            tags: ['Scalable', 'Enterprise'],
            techStack: 'React.js, Node.js, Express.js, MySQL, D3.js, Stripe, Razorpay'
        },
        {
            id: 7,
            category: 'professional',
            title: 'Reseller Cloud Management Platform',
            subtitle: 'Full-Stack VM Infrastructure System',
            description: 'Built a full-stack reseller system allowing users to purchase, manage, and resell VM infrastructure. Implemented credit-based billing, monthly recurring subscriptions, and usage tracking. Developed admin and reseller dashboards for monitoring profits, usage, and client activity. Integrated secure authentication and role-based access control.',
            image: null,
            link: null,
            tags: ['Full-Stack', 'Cloud Infrastructure'],
            techStack: 'React.js, Node.js, Express.js, MySQL, Payment Gateways'
        },
        {
            id: 8,
            category: 'professional',
            title: 'E-Invoicing Automation System',
            subtitle: 'GST Compliance & Automation',
            description: 'Integrated MasterGST API into an existing billing system to automate GST e-invoicing. Implemented real-time GSTIN and invoice validation, ensuring 100% compliance. Eliminated 9+ hours/week of manual finance work and reduced filing errors to zero.',
            image: null,
            link: null,
            tags: ['Automation', 'Compliance'],
            techStack: 'Node.js, MasterGST API, MySQL'
        },
        {
            id: 9,
            category: 'professional',
            title: 'CI/CD & Deployment Automation',
            subtitle: 'GitHub Actions Pipeline System',
            description: 'Designed GitHub Actions pipelines for automated build and deployment workflows. Implemented SSH-based deployments to production servers, eliminating manual FTP usage. Reduced release cycles by 5× and deployment-related issues by 90%.',
            image: null,
            link: null,
            tags: ['DevOps', 'Automation'],
            techStack: 'GitHub Actions, SSH, CI/CD, Linux'
        },
        {
            id: 10,
            category: 'professional',
            title: 'AI-Powered Support Automation System',
            subtitle: 'RAG-Based AI Support Platform (Current Project)',
            description: 'Developing an AI-driven support system to assist clients with server and application issues in a SaaS environment. Implemented Retrieval-Augmented Generation (RAG) using LangChain with Pinecone and FAISS, trained on internal knowledge bases. Built backend services using FastAPI (Python) for AI inference and support workflows. Enabled controlled automation for common setup and troubleshooting tasks. Integrated an automatic ticket escalation system when issues cannot be resolved by AI.',
            image: null,
            link: null,
            tags: ['AI/ML', 'RAG', 'Current Project'],
            techStack: 'Python, FastAPI, LangChain, RAG, Pinecone, FAISS'
        },
        // Startup Projects
        {
            id: 11,
            category: 'startup',
            title: 'SpotCard',
            subtitle: 'Digital Business Card Platform',
            description: 'SpotCard is a modern digital business card platform that revolutionizes how professionals share their contact information. Built with React and modern web technologies, it allows users to create, customize, and share digital business cards with QR codes. The platform features profile management, contact sharing, and seamless networking capabilities, making traditional paper business cards obsolete.',
            image: img6,
            link: 'https://business.spotcard.in',
            tags: ['Digital', 'Modern'],
            techStack: 'React.js, Backend APIs, QR Codes'
        },
        {
            id: 12,
            category: 'startup',
            title: 'Invite SpotCard',
            subtitle: 'Event Invitation Platform',
            description: 'Invite SpotCard is an innovative event invitation platform that simplifies event management. Built with modern web technologies, it allows users to create beautiful digital invitations, manage RSVPs, track guest responses, and handle event details all in one place. The platform offers seamless guest management and real-time updates for event organizers. Developed a mobile-first digital invitation platform supporting events and business use cases. Built backend APIs for storing user profiles, media, and event data. Implemented interactive features such as maps, schedules, calendar integration, and media galleries.',
            image: img7,
            link: 'https://spotcard.in',
            tags: ['Event', 'Management'],
            techStack: 'React.js, Backend APIs, Maps Integration'
        }
    ];

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'freelancing', label: 'Freelancing Projects' },
        { id: 'professional', label: 'Professional Experience' },
        { id: 'startup', label: 'My Startups' }
    ];

    const filteredProjects = selectedCategory === 'all' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    const ProjectCard = ({ project, index }) => {
        const isEven = index % 2 === 0;
        
        return (
            <section className='min-h-[100vh] lg:min-h-[100vh] flex justify-center items-center'>
                <div className="relative font-secondary">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 sm:py-6">
                        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:grid-cols-2 gap-y-12 lg:gap-x-8 items-center">
                            {isEven ? (
                                <>
                                    <div className="relative lg:flex lg:flex-col lg:items-start lg:justify-center">
                                        <div className="absolute bottom-0 left-0 overflow-hidden lg:inset-y-0">
                                            <img className="w-auto h-full" src={pattern} alt="" loading="lazy" />
                                        </div>
                                        <div className="text-center lg:text-left">
                                            <h3 className="mt-2 text-2xl sm:mt-8">
                                                {project.category === 'freelancing' && 'Freelancing Project :'}
                                                {project.category === 'professional' && 'Professional Experience :'}
                                                {project.category === 'startup' && 'My Startup :'}
                                            </h3>
                                            <h1 className="text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj text-shadow-xl">
                                                {project.title}
                                            </h1>
                                            <h3 className="mt-2 text-2xl sm:mt-8">
                                                {project.subtitle}
                                            </h3>
                                            <p className="mt-2 text-lg sm:mt-8">
                                                {project.description}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                                            <div className="flex items-center">
                                                <p className="text-3xl font-medium sm:text-4xl">{project.tags[0]}</p>
                                            </div>
                                            <div className="hidden sm:block">
                                                <svg className="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                                                    <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                                                    <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                                                    <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                                                    <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                                                </svg>
                                            </div>
                                            <div className="flex items-center">
                                                <p className="text-3xl font-medium sm:text-4xl">{project.tags[1]}</p>
                                            </div>
                                        </div>
                                        {project.techStack && (
                                            <div className="mt-6 text-center lg:text-left">
                                                <p className="text-sm text-gray-600 mb-2">Tech Stack: {project.techStack}</p>
                                            </div>
                                        )}
                                        {project.link && (
                                            <button
                                                className='btn btn-sm mt-6 lg:h-[45px] lg:w-[200px] md:h-[40px] md:w-[180px] sm:h-[35px] sm:w-[160px] lg:text-[14px] md:text-[12px] sm:text-[11px] z-50'
                                                onClick={() => window.open(project.link, "_blank")}
                                            >
                                                Visit Website
                                            </button>
                                        )}
                                    </div>
                                    <div className="relative max-w-full mx-auto lg:ml-auto lg:max-w-[800px]">
                                        {project.image ? (
                                            <img className="w-full" src={project.image} alt={project.title} loading="lazy" />
                                        ) : (
                                            <div className="w-full h-[500px] bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 rounded-lg shadow-2xl flex items-center justify-center relative overflow-hidden">
                                                <div className="absolute inset-0 bg-black/20"></div>
                                                <div className="relative z-10 text-center p-8">
                                                    <div className="mb-6">
                                                        <div className="inline-block bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 mb-4">
                                                            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-4 mt-6">
                                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                                                <div className="text-2xl font-bold text-white mb-2">{project.category === 'professional' ? 'Enterprise' : 'Platform'}</div>
                                                                <div className="text-white/80 text-sm">Solution</div>
                                                            </div>
                                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                                                <div className="text-2xl font-bold text-white mb-2">Full-Stack</div>
                                                                <div className="text-white/80 text-sm">Development</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="text-white/90 text-lg">{project.subtitle}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="relative max-w-full mx-auto lg:ml-auto lg:max-w-[800px]">
                                        {project.image ? (
                                            <img className="w-full" src={project.image} alt={project.title} loading="lazy" />
                                        ) : (
                                            <div className="w-full h-[500px] bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-800 rounded-lg shadow-2xl flex items-center justify-center relative overflow-hidden">
                                                <div className="absolute inset-0 bg-black/20"></div>
                                                <div className="relative z-10 text-center p-8">
                                                    <div className="mb-6">
                                                        <div className="inline-block bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 mb-4">
                                                            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-4 mt-6">
                                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                                                <div className="text-2xl font-bold text-white mb-2">{project.category === 'professional' ? 'Enterprise' : 'Platform'}</div>
                                                                <div className="text-white/80 text-sm">Solution</div>
                                                            </div>
                                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                                                <div className="text-2xl font-bold text-white mb-2">Full-Stack</div>
                                                                <div className="text-white/80 text-sm">Development</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="text-white/90 text-lg">{project.subtitle}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="relative lg:flex lg:flex-col lg:items-start lg:justify-center">
                                        <div className="absolute bottom-0 left-0 overflow-hidden lg:inset-y-0">
                                            <img className="w-auto h-full" src={pattern} alt="" loading="lazy" />
                                        </div>
                                        <div className="text-center lg:text-left">
                                            <h3 className="mt-2 text-2xl sm:mt-8">
                                                {project.category === 'freelancing' && 'Freelancing Project :'}
                                                {project.category === 'professional' && 'Professional Experience :'}
                                                {project.category === 'startup' && 'My Startup :'}
                                            </h3>
                                            <h1 className="text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj text-shadow-xl">
                                                {project.title}
                                            </h1>
                                            <h3 className="mt-2 text-2xl sm:mt-8">
                                                {project.subtitle}
                                            </h3>
                                            <p className="mt-2 text-lg sm:mt-8">
                                                {project.description}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                                            <div className="flex items-center">
                                                <p className="text-3xl font-medium sm:text-4xl">{project.tags[0]}</p>
                                            </div>
                                            <div className="hidden sm:block">
                                                <svg className="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                                                    <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                                                    <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                                                    <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                                                    <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                                                </svg>
                                            </div>
                                            <div className="flex items-center">
                                                <p className="text-3xl font-medium sm:text-4xl">{project.tags[1]}</p>
                                            </div>
                                        </div>
                                        {project.techStack && (
                                            <div className="mt-6 text-center lg:text-left">
                                                <p className="text-sm text-gray-600 mb-2">Tech Stack: {project.techStack}</p>
                                            </div>
                                        )}
                                        {project.link && (
                                            <button
                                                className='btn btn-sm mt-6 lg:h-[45px] lg:w-[200px] md:h-[40px] md:w-[180px] sm:h-[35px] sm:w-[160px] lg:text-[14px] md:text-[12px] sm:text-[11px] z-50'
                                                onClick={() => window.open(project.link, "_blank")}
                                            >
                                                Visit Website
                                            </button>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    return (
        <div style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(59,130,246,1) 100%)', minHeight: '100vh'}}>
            <Header />
            
            {/* Filter Buttons */}
            <section className='pt-20 pb-8'>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-secondary font-medium transition-all duration-300 ${
                                    selectedCategory === category.id
                                        ? 'bg-accent text-white shadow-lg transform scale-105'
                                        : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
                                }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                    <div className="text-center mb-4">
                        <p className="text-textLight">
                            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects List */}
            {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))
            ) : (
                <section className='min-h-[50vh] flex justify-center items-center'>
                    <div className="text-center">
                        <p className="text-2xl text-gray-600">No projects found in this category.</p>
                    </div>
                </section>
            )}
        </div>
    );
};

export default Projects;
