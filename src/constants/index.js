import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    figma,
    docker,
    threejs
  } from "../assets";
  import php from "../assets/tech/php.webp"
  import photoshop from "../assets/tech/photoshop.webp"
  import python from "../assets/tech/python.webp"
  


  
  const services = [
    {
      title: "React.js Development",
      icon: mobile,
    },
    {
      title: "Full Stack Solutions",
      icon: web,
    },
    {
      title: "API Integration",
      icon: backend,
    },
    {
      title: "Performance Optimization",
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
      name: "python",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "photoshop",
      icon: photoshop,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const services2 = [
    {
      name: 'Frontend Development',
      description: "I build responsive, high-performance React.js applications with modern UI/UX. Specialized in creating interactive dashboards with D3.js visualizations, optimizing performance by 30%+ using code-splitting and lazy loading, and ensuring cross-browser compatibility for 5,000+ active users.",
      link: "Learn More",
  
    },
    {
      name: 'Full Stack Solutions',
      description: "I develop end-to-end web applications combining React.js frontends with PHP/Node.js backends. Expertise in state management with Context API, custom hooks, RESTful APIs, and real-time data synchronization. I've architected SaaS ecosystems supporting 1,000+ users.",
      link: "Learn More",
  
    },
    {
      name: 'Process Automation',
      description: "I automate complex workflows and business processes, reducing manual work by 87%+. Specialized in payment gateway integrations (Stripe, Razorpay), server deployment automation, e-invoicing systems, and CI/CD pipelines. Saved 200+ engineering hours monthly through automation.",
      link: "Learn More",
  
    },
  
  ]
  
  export { services, technologies ,services2};