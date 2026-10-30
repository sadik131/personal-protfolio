/**
 * Centralized Portfolio Data Configuration
 * Edit this file to update personal details, skills, projects, and journey milestones
 * without touching multiple components.
 */

export const personalInfo = {
  name: 'Salatus Sadik (Supto)',
  firstName: 'Supto',
  handle: 'sadik131',
  role: 'Full-Stack Web Developer',
  tagline: 'Building Modern Web Experiences with Clean Code and Creative Thinking.',
  heroIntro: "HELLO, I'M A WEB DEVELOPER",
  heroHeading: 'Turning Ideas Into Powerful Digital Experiences.',
  heroSupportingText:
    'I build modern web applications with thoughtful design, scalable architecture, and clean development practices.',
  introduction:
    'I am a passionate web developer focused on building modern, responsive, and user-friendly web applications. I enjoy working across frontend and backend technologies, designing scalable application structures, integrating databases, and turning ideas into functional digital products.\n\nMy development journey includes working with modern JavaScript frameworks, PHP-based backend technologies, databases, and contemporary development tools. I continuously explore new technologies and improve my problem-solving skills through hands-on projects.',
  location: 'Dhaka, Bangladesh',
  email: 'salatussadik.dev@gmail.com',
  availableForWork: true,
  statusText: 'Open for Opportunities',
  resumeUrl: '/resume.pdf', // Place your resume.pdf in public/ directory
  social: {
    github: 'https://github.com/sadik131',
    linkedin: 'https://www.linkedin.com/in/salatus-sadik-1a22a3212/',
    twitter: 'https://twitter.com/SuptoSarka48161',
    facebook: 'https://www.facebook.com/naim.sarker.716',
  },
};

export const skillsCategories = [
  {
    category: 'Frontend',
    description: 'Modern, reactive and accessible user interfaces',
    skills: [
      { name: 'HTML5', level: 'Hands-on Experience', desc: 'Semantic, accessible structure' },
      { name: 'CSS3', level: 'Hands-on Experience', desc: 'Modern layouts, flexbox, grid, animations' },
      { name: 'JavaScript ES6+', level: 'Hands-on Experience', desc: 'Async/await, DOM, closures, modern ES' },
      { name: 'React.js', level: 'Project Experience', desc: 'Hooks, component architecture, state' },
      { name: 'Next.js', level: 'Project Experience', desc: 'App router, server rendering, routing' },
      { name: 'Vue.js', level: 'Familiar With', desc: 'Reactivity, component composition' },
    ],
  },
  {
    category: 'Styling',
    description: 'Responsive systems and modern CSS frameworks',
    skills: [
      { name: 'Tailwind CSS', level: 'Hands-on Experience', desc: 'Utility-first rapid styling system' },
      { name: 'Bootstrap 5', level: 'Hands-on Experience', desc: 'Grid systems, responsive utilities' },
    ],
  },
  {
    category: 'Backend',
    description: 'Server architectures, REST APIs and server logic',
    skills: [
      { name: 'PHP', level: 'Project Experience', desc: 'Object-oriented programming, scripting' },
      { name: 'Laravel', level: 'Project Experience', desc: 'MVC architecture, routing, controllers' },
      { name: 'Node.js', level: 'Project Experience', desc: 'Runtime environment, asynchronous I/O' },
    ],
  },
  {
    category: 'Database & ORM',
    description: 'Data modeling, schema design and querying',
    skills: [
      { name: 'MySQL', level: 'Project Experience', desc: 'Relational data modeling, queries' },
      { name: 'MongoDB', level: 'Project Experience', desc: 'NoSQL collections, document indexing' },
      { name: 'Prisma', level: 'Project Experience', desc: 'Type-safe database ORM for Next.js' },
      { name: 'Eloquent ORM', level: 'Project Experience', desc: 'Laravel active-record ORM' },
    ],
  },
  {
    category: 'State & Auth',
    description: 'State management and secure authentication',
    skills: [
      { name: 'Redux Toolkit', level: 'Project Experience', desc: 'Centralized state slices & selectors' },
      { name: 'Pinia', level: 'Familiar With', desc: 'Intuitive state management for Vue' },
      { name: 'NextAuth', level: 'Project Experience', desc: 'OAuth & credentials authentication' },
      { name: 'Laravel Sanctum', level: 'Familiar With', desc: 'Token-based API authentication' },
    ],
  },
  {
    category: 'Dev Tools & Cloud',
    description: 'Environment, version control and content tools',
    skills: [
      { name: 'Git & GitHub', level: 'Hands-on Experience', desc: 'Version control, branches, PRs' },
      { name: 'Linux / Ubuntu', level: 'Hands-on Experience', desc: 'Terminal workflows, permissions, shell' },
      { name: 'VS Code', level: 'Hands-on Experience', desc: 'Debugging, extensions, configurations' },
      { name: 'Postman', level: 'Hands-on Experience', desc: 'API testing, payloads, documentation' },
      { name: 'Vite & npm', level: 'Hands-on Experience', desc: 'Fast bundling, package management' },
      { name: 'Composer', level: 'Hands-on Experience', desc: 'PHP dependency management' },
      { name: 'XAMPP', level: 'Hands-on Experience', desc: 'Local Apache & MySQL server environment' },
      { name: 'Cloudinary', level: 'Project Experience', desc: 'Cloud image upload & asset optimization' },
      { name: 'Tiptap', level: 'Project Experience', desc: 'Rich text editor integration' },
    ],
  },
  {
    category: 'Design & No-Code',
    description: 'Design systems and visual development',
    skills: [
      { name: 'Framer', level: 'Currently Learning', desc: 'Interactive prototyping & modern web' },
      { name: 'Webflow', level: 'Currently Learning', desc: 'Visual development & CMS structures' },
    ],
  },
];

export const journeyMilestones = [
  {
    date: 'JULY 2026',
    title: 'Foundations & Web Exploration',
    description:
      'Started documenting my web development learning journey, focusing on website structure, semantic HTML, Bootstrap layouts, and exploring PHP & Laravel backend fundamentals.',
    tags: ['HTML5', 'Bootstrap', 'PHP Basics', 'Website Structure'],
    accent: '#8BFF6A',
  },
  {
    date: 'AUGUST 2026',
    title: 'Responsive UI & Architecture Exploration',
    description:
      'Practiced responsive website sections, complex UI development, Bootstrap layouts, and explored Laravel and Vue.js-based application architecture.',
    tags: ['Responsive Design', 'Bootstrap 5', 'Laravel MVC', 'Vue.js Intro'],
    accent: '#63B3FF',
  },
  {
    date: 'SEPTEMBER 2026',
    title: 'Linux Environments, Backends & Next.js',
    description:
      'Worked with Linux/Ubuntu development environments, PHP, Composer, Laravel, MySQL, Git, GitHub, and initiated Next.js full-stack project development.',
    tags: ['Linux / Ubuntu', 'MySQL', 'Laravel', 'Next.js', 'Git / GitHub'],
    accent: '#8BFF6A',
  },
  {
    date: 'OCTOBER 2026',
    title: 'Next.js Applications, Prisma & State Architecture',
    description:
      'Worked on Next.js applications, Prisma and MongoDB integration, Redux Toolkit state architecture, and developed a YouTube lecture quiz application.',
    tags: ['Next.js 16', 'Prisma ORM', 'MongoDB', 'Redux Toolkit', 'Quiz App'],
    accent: '#63B3FF',
  },
];

export const currentlyExploring = [
  'Advanced JavaScript Patterns',
  'Modern Full-Stack Architecture',
  'Framer Interactive Prototyping',
  'Webflow Visual Development',
  'Scalable Backend Design',
  'Performance & Accessibility',
];

export const projectsData = [
  {
    id: 'afree_edu',
    title: 'AFREE_EDU',
    subtitle: 'Modern Education Services Management Platform',
    status: 'Project Experience',
    category: 'Full-Stack Next.js',
    description:
      'A modern education services management application built around Study, Tour, and Work service categories. Features structured service workflows, rich content authoring, and a centralized management dashboard.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'MongoDB',
      'Redux Toolkit',
      'NextAuth',
      'Cloudinary',
      'Tailwind CSS',
      'Tiptap',
    ],
    highlights: [
      'Service management architecture for Study, Tour, and Work models',
      'Normalized database schema design with Prisma and MongoDB',
      'Full CRUD operations with secure authentication via NextAuth',
      'Global state management with Redux Toolkit',
      'Cloudinary image uploading and Tiptap rich-text integration',
      'Admin dashboard with intuitive management controls',
    ],
    myContribution:
      'Architected service models, integrated database schemas with Prisma, built authentication flows, and implemented dashboard controls.',
    liveUrl: 'https://shiko.vercel.app/', // Existing live link or fallback
    repoUrl: 'https://github.com/sadik131',
    hasRealRepo: false, // Set to true if standalone public repo URL is confirmed
    featured: true,
  },
  {
    id: 'women_cooperative',
    title: 'Women-Led Cooperative Marketplace',
    subtitle: 'Community E-Commerce Marketplace Concept',
    status: 'Project Concept / In Development',
    category: 'Full-Stack Vue & Laravel',
    description:
      'An e-commerce marketplace concept focused on empowering women-led businesses to showcase and sell their artisanal and local products with role-based dashboards.',
    technologies: [
      'Vue.js',
      'Laravel',
      'MySQL',
      'Pinia',
      'Axios',
      'Bootstrap 5',
      'Laravel Sanctum',
    ],
    highlights: [
      'Multi-tier dashboard architecture: Admin, Seller, and Buyer',
      'Product catalog management with categories and variants',
      'Interactive shopping cart and checkout pipeline with Pinia',
      'Order tracking and fulfillment workflow',
      'Seller verification and onboarding system',
      'Sanctum-based token authentication for API requests',
    ],
    myContribution:
      'Designed marketplace workflow diagrams, planned database relations in MySQL, and prototyped user dashboard layouts.',
    liveUrl: 'https://mobile-shop-project-eight.vercel.app/',
    repoUrl: 'https://github.com/sadik131',
    hasRealRepo: false,
    featured: true,
  },
  {
    id: 'laravel_ecommerce',
    title: 'Laravel E-Commerce',
    subtitle: 'Backend-Driven Commercial Storefront',
    status: 'Backend Development',
    category: 'Laravel & PHP',
    description:
      'A Laravel-based e-commerce application developed while mastering backend development, MVC architecture, Eloquent ORM relationships, and Linux-based development workflows.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Composer', 'XAMPP', 'Linux / Ubuntu'],
    highlights: [
      'MVC architecture with modular controllers and blade views',
      'Product and category database schemas with Eloquent migrations',
      'Shopping cart session management and order storage',
      'Admin product CRUD operations with image asset handling',
      'Developed and tested in native Linux / Ubuntu environment',
    ],
    myContribution:
      'Built backend routing, database migrations, controllers, and tested workflows using Linux environment.',
    liveUrl: 'https://mobile-shop-project-eight.vercel.app/',
    repoUrl: 'https://github.com/sadik131/mobile_Shop_project',
    hasRealRepo: true,
    featured: false,
  },
  {
    id: 'youtube_quiz',
    title: 'YouTube Lecture Quiz Application',
    subtitle: 'Interactive Video-Based Assessment Tool',
    status: 'Ongoing Development Project',
    category: 'Next.js 16',
    description:
      'A Next.js application exploring the combination of YouTube lecture content and interactive quiz-based learning to evaluate comprehension during or after video lectures.',
    technologies: ['Next.js 16', 'JavaScript', 'TypeScript', 'npm', 'Turbopack'],
    highlights: [
      'YouTube video integration with timestamped reference points',
      'Interactive multi-choice quiz system with immediate feedback',
      'Scoring computation and result summary displays',
      'Fast development workflows powered by Turbopack in Next.js 16',
    ],
    myContribution:
      'Implemented quiz component logic, time synchronization concepts, and modular Next.js application structure.',
    liveUrl: 'https://shiko.vercel.app/',
    repoUrl: 'https://github.com/sadik131',
    hasRealRepo: false,
    featured: false,
  },
  {
    id: 'responsive_ui_collection',
    title: 'Responsive Website UI Collection',
    subtitle: 'Curated Suite of Tested Interface Components',
    status: 'Component Suite',
    category: 'Frontend & UI',
    description:
      'A comprehensive collection of responsive website sections and interface development exercises demonstrating pixel-accurate layout skills and responsive web design standards.',
    technologies: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript ES6+'],
    highlights: [
      'Responsive sticky navigation bars with mobile drawer toggles',
      'High-impact hero banners with call-to-action styling',
      'Service and feature grids with responsive flexbox & CSS grid',
      'Academic calendars, team showcases, and client testimonial sliders',
      'Accessible, clean footer layouts with social integration',
    ],
    myContribution:
      'Designed and coded the entire component collection across multiple device breakpoints.',
    liveUrl: 'https://melodic-vacherin-cf23a5.netlify.app/',
    repoUrl: 'https://github.com/sadik131',
    hasRealRepo: false,
    featured: false,
  },
];

export const servicesData = [
  {
    id: 'frontend',
    number: '01',
    title: 'Frontend Development',
    description:
      'Building clean, modular, and reactive user interfaces using modern JavaScript frameworks like React and Next.js, prioritizing performance and user experience.',
  },
  {
    id: 'backend',
    number: '02',
    title: 'Backend Development',
    description:
      'Developing structured backend services and REST APIs with PHP/Laravel and Node.js, focusing on clean controller logic, routing, and data handling.',
  },
  {
    id: 'fullstack',
    number: '03',
    title: 'Full-Stack Web Development',
    description:
      'Bridging client interfaces with server architectures, providing connected end-to-end functionality from database schemas to polished frontend views.',
  },
  {
    id: 'responsive',
    number: '04',
    title: 'Responsive Website Development',
    description:
      'Crafting adaptable web layouts with Tailwind CSS and Bootstrap 5 that render flawlessly on mobile phones, tablets, and widescreen desktop monitors.',
  },
  {
    id: 'database',
    number: '05',
    title: 'Database Integration',
    description:
      'Designing relational schemas in MySQL and document collections in MongoDB, integrated through modern ORM tools like Prisma and Eloquent.',
  },
  {
    id: 'dashboard',
    number: '06',
    title: 'Admin Dashboard Development',
    description:
      'Building organized administration panels with authentication, data tables, metrics cards, and CRUD operations to manage web applications efficiently.',
  },
  {
    id: 'api',
    number: '07',
    title: 'API Integration',
    description:
      'Connecting third-party services, RESTful endpoints, and asynchronous data pipelines to extend web application capabilities.',
  },
];

export const workflowSteps = [
  {
    step: '01',
    title: 'Understanding Requirements',
    description: 'Analyzing the problem statement, user personas, and project goals to define clear functional boundaries.',
  },
  {
    step: '02',
    title: 'Planning Architecture',
    description: 'Selecting appropriate tools, planning database schemas, mapping component hierarchies, and routing structures.',
  },
  {
    step: '03',
    title: 'Designing Interface',
    description: 'Structuring clean visual hierarchies, wireframing responsive layouts, and ensuring intuitive navigation.',
  },
  {
    step: '04',
    title: 'Frontend Development',
    description: 'Coding modular, accessible, and reactive user interfaces with modern React, Next.js, or Vue components.',
  },
  {
    step: '05',
    title: 'Backend & DB Integration',
    description: 'Building REST endpoints, configuring ORMs (Prisma/Eloquent), and connecting databases with validation.',
  },
  {
    step: '06',
    title: 'Testing & Debugging',
    description: 'Testing responsiveness across devices, inspecting edge cases, and verifying API payload flows.',
  },
  {
    step: '07',
    title: 'Deployment & Optimization',
    description: 'Deploying to cloud platforms (Vercel, Netlify), configuring environment variables, and optimizing load times.',
  },
];

export const githubConfig = {
  username: 'sadik131',
  profileUrl: 'https://github.com/sadik131',
  featuredRepos: [
    {
      name: 'shiko',
      description: 'Educational & interactive form platform built with React & modern frontend tooling.',
      language: 'JavaScript',
      url: 'https://github.com/sadik131/shiko',
    },
    {
      name: 'mobile_Shop_project',
      description: 'E-commerce mobile shop project with catalog, cart calculation, and responsive design.',
      language: 'JavaScript',
      url: 'https://github.com/sadik131/mobile_Shop_project',
    },
    {
      name: 'personal-protfolio',
      description: 'Interactive developer portfolio built with React, Vite, Framer Motion, and modern UI design.',
      language: 'JavaScript',
      url: 'https://github.com/sadik131/personal-protfolio',
    },
  ],
};
