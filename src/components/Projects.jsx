import React from 'react';
import Header from './Header';
import pattern from '../assets/bg-pattern.webp';

import img2 from '../assets/sarab-shipping.webp';
import img3 from '../assets/aryaa_foods.webp';
import img4 from '../assets/hello_social.webp';
import img5 from '../assets/urban.webp';
import img6 from '../assets/spotcard.webp';
import img7 from '../assets/event.spotcard.webp';
// import img8 from '../assets/muthayammal_neet.webp';

const Projects = () => {

    return (
        <div style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(59,130,246,1) 100%)', minHeight: '100vh'}}>
            <Header />
            <section className='min-h-[100vh] lg:min-h-[100vh] flex justify-center items-center mt-[-50px]'>
                <div className="relative font-secondary">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 sm:py-6">
                        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:grid-cols-2 gap-y-12 lg:gap-x-8 items-center">
                            <div className="relative lg:flex lg:flex-col lg:items-start lg:justify-center">
                                <div className="absolute bottom-0 left-0 overflow-hidden lg:inset-y-0">
                                    <img className="w-auto h-full" src={pattern} alt="" loading="lazy" />
                                </div>
                                <div className="text-center lg:text-left">
                                    <h3 className="mt-2 text-2xl  sm:mt-8">
                                        Frelancing Project :
                                    </h3>
                                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj text-shadow-xl">
                                        Project Sarab Shipping
                                    </h1>
                                    <h3 className="mt-2 text-2xl  sm:mt-8">
                                        Sarab Shipping is a logistical company based in the UAE
                                    </h3>
                                    <p className="mt-2 text-lg sm:mt-8">
                                        I designed and developed a static website for Sarab Shipping to showcase their logistics services and establish a strong online presence. The website highlights their key services, including ocean, air, and land transportation, with a focus on clear navigation and user-friendly design. Built with HTML, CSS, and JavaScript, the site is fully responsive, ensuring compatibility across devices while maintaining fast load times and a smooth browsing experience.
                                    </p>
                                </div>
                                <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                                    <div className="flex items-center">
                                        <p className="text-3xl font-medium  sm:text-4xl">Responsive</p>
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
                                        <p className="text-3xl font-medium  sm:text-4xl">Modern Desgin</p>
                                    </div>
                                </div>
                                <button
                                    className='btn btn-sm mt-6 lg:h-[45px] lg:w-[200px] md:h-[40px] md:w-[180px] sm:h-[35px] sm:w-[160px] lg:text-[14px] md:text-[12px] sm:text-[11px] z-50'
                                    onClick={() => window.open("https://sarab-shipping.vercel.app", "_blank")}
                                >
                                    Visit Website
                                </button>
                            </div>
                            <div className="relative max-w-full mx-auto lg:ml-auto lg:max-w-[800px]">
                                <img className="w-full" src={img2} alt="Sarab Shipping Project" loading="lazy" />
                            </div>
                            {/* <div className="relative max-w-full mx-auto lg:ml-auto lg:max-w-[800px]">
                                <iframe
                                    src="https://sarab-shipping.vercel.app/" // replace with the URL of the website you want to display
                                    title="External Website"
                                    className="w-[500px] h-[500px]" // you can adjust the height and width as needed
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className='min-h-[100vh] lg:min-h-[100vh] flex justify-center items-center '>
                <div className="relative font-secondary">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 sm:py-6">
                        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:grid-cols-2 gap-y-12 lg:gap-x-8 items-center">
                            <div className="relative max-w-full mx-auto lg:ml-auto lg:max-w-[800px]">
                                <img className="w-full" src={img3} alt="Aryaa Foods Project" loading="lazy" />
                            </div>
                            <div className="relative lg:flex lg:flex-col lg:items-start lg:justify-center">
                                <div className="absolute bottom-0 left-0 overflow-hidden lg:inset-y-0">
                                    <img className="w-auto h-full" src={pattern} alt="" loading="lazy" />
                                </div>
                                <div className="text-center lg:text-left">
                                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj text-shadow-xl">
                                        Project Aryaa Foods
                                    </h1>
                                    <h3 className="mt-2 text-xl  sm:mt-8">
                                        Aryaa Foods is a UAE-based food product manufacturer that has been in business since 2011
                                    </h3>
                                    <p className="mt-2 text-lg sm:mt-8">
                                        I developed the Aryaa Foods website using React And Tailwind CSS, focusing on creating smooth animations to enhance user engagement. The project involved designing the entire webpage, ensuring a visually appealing layout that aligned with the brand's identity. I also edited and optimized product images to display their offerings in a clean and professional manner. The end result was a responsive, dynamic website that showcases Aryaa Foods' products effectively.
                                    </p>
                                </div>
                                <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                                    <div className="flex items-center">
                                        <p className="text-3xl font-medium  sm:text-4xl">Animations</p>
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
                                        <p className="text-3xl font-medium  sm:text-4xl">Smooth User Experience</p>
                                    </div>
                                </div>
                                <button
                                    className='btn btn-sm mt-6 lg:h-[45px] lg:w-[200px] md:h-[40px] md:w-[180px] sm:h-[35px] sm:w-[160px] lg:text-[14px] md:text-[12px] sm:text-[11px] z-50'
                                    onClick={() => window.open("https://aryaa-react-new.vercel.app", "_blank")}
                                >
                                    Visit Website
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='min-h-[100vh] lg:min-h-[100vh] flex justify-center items-center'>
                <div className="relative font-secondary">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 sm:py-6">
                        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:grid-cols-2 gap-y-12 lg:gap-x-8 items-center">
                            <div className="relative lg:flex lg:flex-col lg:items-start lg:justify-center">
                                <div className="absolute bottom-0 left-0 overflow-hidden lg:inset-y-0">
                                    <img className="w-auto h-full" src={pattern} alt="" loading="lazy" />
                                </div>
                                <div className="text-center lg:text-left">
                                    <h3 className="mt-2 text-2xl  sm:mt-8">
                                        Under Development Projects :
                                    </h3>
                                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj text-shadow-xl">
                                        Project Hello Social
                                    </h1>
                                    <h3 className="mt-2 text-2xl  sm:mt-8">
                                        Hello Social is a digital marketing and web development firm situated in UAE
                                    </h3>
                                    <p className="mt-2 text-lg sm:mt-8">
                                        The Hello Social website is currently under development but is accessible for viewing. Built using React and Tailwind CSS, the project emphasizes modern, interactive UI designs aimed at enhancing user experience. We are focusing on crafting a visually appealing and highly functional digital presence for Hello Social, blending responsive design with engaging user interactions.
                                    </p>
                                </div>
                                <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                                    <div className="flex items-center">
                                        <p className="text-3xl font-medium  sm:text-4xl">Innovative</p>
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
                                        <p className="text-3xl font-medium  sm:text-4xl">Sustainable</p>
                                    </div>
                                </div>
                                <button
                                    className='btn btn-sm mt-6 lg:h-[45px] lg:w-[200px] md:h-[40px] md:w-[180px] sm:h-[35px] sm:w-[160px] lg:text-[14px] md:text-[12px] sm:text-[11px] z-50'
                                    onClick={() => window.open("https://hellosocial.in", "_blank")}
                                >
                                    Visit Website
                                </button>
                            </div>
                            <div className="relative max-w-full mx-auto lg:ml-auto lg:max-w-[800px]">
                                <img className="w-full" src={img4} alt="Hello Social Project" loading="lazy" />
                            </div>
                            {/* <div className="relative max-w-full mx-auto lg:ml-auto lg:max-w-[800px]">
                                <iframe
                                    src="https://sarab-shipping.vercel.app/" // replace with the URL of the website you want to display
                                    title="External Website"
                                    className="w-[500px] h-[500px]" // you can adjust the height and width as needed
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className='min-h-[100vh] lg:min-h-[100vh] flex justify-center items-center '>
                <div className="relative font-secondary">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 sm:py-6">
                        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:grid-cols-2 gap-y-12 lg:gap-x-8 items-center">
                            <div className="relative max-w-full mx-auto lg:ml-auto lg:max-w-[800px]">
                                <img className="w-full" src={img5} alt="Urban Horticulture Project" loading="lazy" />
                            </div>
                            <div className="relative lg:flex lg:flex-col lg:items-start lg:justify-center">
                                <div className="absolute bottom-0 left-0 overflow-hidden lg:inset-y-0">
                                    <img className="w-auto h-full" src={pattern} alt="" loading="lazy" />
                                </div>
                                <div className="text-center lg:text-left">
                                    <h3 className="mt-2 text-2xl  sm:mt-8">
                                        Under Development Projects :
                                    </h3>
                                    <h1 className="text-4xl font-bold leading-tight sm:text-4xl sm:leading-tight lg:leading-tight lg:text-5xl font-pj text-shadow-xl">
                                        Project Urban Horticulture
                                    </h1>
                                    <h3 className="mt-2 text-xl  sm:mt-8">
                                        Urban Horticulture Farm is a UAE-based start-up company that provides farming-related equipment, nets, and sheds.
                                    </h3>
                                    <p class="mt-2 text-lg sm:mt-8">
                                        Urban Horticulture provides essential farming equipment, such as nets and sheds, for small to medium-scale farmers in the UAE. The website features a clean and responsive design, offering detailed information about the company's products and services. Built with HTML, CSS, and JavaScript, it ensures an easy-to-navigate user experience, highlighting the company's expertise in the agricultural sector.
                                    </p>
                                </div>
                                <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                                    <div className="flex items-center">
                                        <p className="text-3xl font-medium  sm:text-4xl">User-friendly</p>
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
                                        <p className="text-3xl font-medium  sm:text-4xl">Minimalistic</p>
                                    </div>
                                </div>
                                <button
                                    className='btn btn-sm mt-6 lg:h-[45px] lg:w-[200px] md:h-[40px] md:w-[180px] sm:h-[35px] sm:w-[160px] lg:text-[14px] md:text-[12px] sm:text-[11px] z-50'
                                    onClick={() => window.open("https://urban-horticulture-farm.vercel.app", "_blank")}
                                >
                                    Visit Website
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* SpotCard Project */}
            <section className='min-h-[100vh] lg:min-h-[100vh] flex justify-center items-center '>
                <div className="relative font-secondary">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 sm:py-6">
                        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:grid-cols-2 gap-y-12 lg:gap-x-8 items-center">
                            <div className="relative lg:flex lg:flex-col lg:items-start lg:justify-center">
                                <div className="absolute bottom-0 left-0 overflow-hidden lg:inset-y-0">
                                    <img className="w-auto h-full" src={pattern} alt="" loading="lazy" />
                                </div>
                                <div className="text-center lg:text-left">
                                    <h3 className="mt-2 text-2xl  sm:mt-8">
                                        My Startups :
                                    </h3>
                                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj text-shadow-xl">
                                        SpotCard
                                    </h1>
                                    <h3 className="mt-2 text-2xl  sm:mt-8">
                                        Digital Business Card Platform
                                    </h3>
                                    <p className="mt-2 text-lg sm:mt-8">
                                        SpotCard is a modern digital business card platform that revolutionizes how professionals share their contact information. Built with React and modern web technologies, it allows users to create, customize, and share digital business cards with QR codes. The platform features profile management, contact sharing, and seamless networking capabilities, making traditional paper business cards obsolete.
                                    </p>
                                </div>
                                <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                                    <div className="flex items-center">
                                        <p className="text-3xl font-medium  sm:text-4xl">Digital</p>
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
                                        <p className="text-3xl font-medium  sm:text-4xl">Modern</p>
                                    </div>
                                </div>
                                <button
                                    className='btn btn-sm mt-6 lg:h-[45px] lg:w-[200px] md:h-[40px] md:w-[180px] sm:h-[35px] sm:w-[160px] lg:text-[14px] md:text-[12px] sm:text-[11px] z-50'
                                    onClick={() => window.open("https://spotcard.in", "_blank")}
                                >
                                    Visit Website
                                </button>
                            </div>
                            <div className="relative max-w-full mx-auto lg:ml-auto lg:max-w-[800px]">
                            <img className="w-full" src={img6} alt="Urban Horticulture Project" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Invite SpotCard Project */}
            <section className='min-h-[100vh] lg:min-h-[100vh] flex justify-center items-center '>
                <div className="relative font-secondary">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 sm:py-6">
                        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:grid-cols-2 gap-y-12 lg:gap-x-8 items-center">
                            <div className="relative max-w-full mx-auto lg:ml-auto lg:max-w-[800px]">
                            <img className="w-full" src={img7} alt="Urban Horticulture Project" loading="lazy" />

                            </div>
                            <div className="relative lg:flex lg:flex-col lg:items-start lg:justify-center">
                                <div className="absolute bottom-0 left-0 overflow-hidden lg:inset-y-0">
                                    <img className="w-auto h-full" src={pattern} alt="" loading="lazy" />
                                </div>
                                <div className="text-center lg:text-left">
                                    <h3 className="mt-2 text-2xl  sm:mt-8">
                                        My Startups :
                                    </h3>
                                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj text-shadow-xl">
                                        Invite SpotCard
                                    </h1>
                                    <h3 className="mt-2 text-2xl  sm:mt-8">
                                        Event Invitation Platform
                                    </h3>
                                    <p className="mt-2 text-lg sm:mt-8">
                                        Invite SpotCard is an innovative event invitation platform that simplifies event management. Built with modern web technologies, it allows users to create beautiful digital invitations, manage RSVPs, track guest responses, and handle event details all in one place. The platform offers seamless guest management and real-time updates for event organizers.
                                    </p>
                                </div>
                                <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                                    <div className="flex items-center">
                                        <p className="text-3xl font-medium  sm:text-4xl">Event</p>
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
                                        <p className="text-3xl font-medium  sm:text-4xl">Management</p>
                                    </div>
                                </div>
                                <button
                                    className='btn btn-sm mt-6 lg:h-[45px] lg:w-[200px] md:h-[40px] md:w-[180px] sm:h-[35px] sm:w-[160px] lg:text-[14px] md:text-[12px] sm:text-[11px] z-50'
                                    onClick={() => window.open("https://invite.spotcard.in", "_blank")}
                                >
                                    Visit Website
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Muthayammal NEET Project */}
            <section className='min-h-[100vh] lg:min-h-[100vh] flex justify-center items-center '>
                <div className="relative font-secondary">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 sm:py-6">
                        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:grid-cols-2 gap-y-12 lg:gap-x-8 items-center">
                            <div className="relative lg:flex lg:flex-col lg:items-start lg:justify-center">
                                <div className="absolute bottom-0 left-0 overflow-hidden lg:inset-y-0">
                                    <img className="w-auto h-full" src={pattern} alt="" loading="lazy" />
                                </div>
                                <div className="text-center lg:text-left">
                                    <h3 className="mt-2 text-2xl  sm:mt-8">
                                        Educational Platform :
                                    </h3>
                                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj text-shadow-xl">
                                        Muthayammal NEET
                                    </h1>
                                    <h3 className="mt-2 text-2xl  sm:mt-8">
                                        NEET Coaching & Educational Services
                                    </h3>
                                    <p className="mt-2 text-lg sm:mt-8">
                                        Muthayammal NEET is a comprehensive educational platform designed for NEET aspirants. The website provides information about coaching programs, course details, faculty, and admission procedures. Built with modern web technologies, it offers an intuitive user experience with responsive design, ensuring students can easily access information about courses, schedules, and educational resources.
                                    </p>
                                </div>
                                <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                                    <div className="flex items-center">
                                        <p className="text-3xl font-medium  sm:text-4xl">Educational</p>
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
                                        <p className="text-3xl font-medium  sm:text-4xl">Professional</p>
                                    </div>
                                </div>
                                <button
                                    className='btn btn-sm mt-6 lg:h-[45px] lg:w-[200px] md:h-[40px] md:w-[180px] sm:h-[35px] sm:w-[160px] lg:text-[14px] md:text-[12px] sm:text-[11px] z-50'
                                    onClick={() => window.open("http://muthayammalneet.com/", "_blank")}
                                >
                                    Visit Website
                                </button>
                            </div>
                            <div className="relative max-w-full mx-auto lg:ml-auto lg:max-w-[800px]">
                            <img className="w-full" src={img5} alt="Urban Horticulture Project" loading="lazy" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects;