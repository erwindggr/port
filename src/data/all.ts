const messages = [
  `"Building efficient web applications — with style."`,
  `"Delivering fast, responsive apps"`,
  `"Designing smooth, reliable interfaces"`,
  `"Creating web experiences that just work."`,
  `"Making web apps that feel good — and run even better."`,
  `"Simple, effective solutions — with a sense of design."`,
  `"Shipping fast, user-friendly web apps"`,
];

const tools = [
  "P.Automate",
  "Chakra UI",
  "C#",
  "Docker",
  ".NET",
  "Git",
  "GSAP",
  "JavaScript",
  "MS SQL",
  "MySQL",
  "Next.js",
  "Node",
  "MS Office",
  "Prisma",
  "React",
  "SourceTree",
  "Tailwind",
  "TypeScript",
];

const projects = [
  {
    title: "Basic POS",
    year: 2025,
    description: "POS System",
    tags: "Fullstack Development",
    image: "/projects/othello-1.png",
    url: "/projects/basicpos",
  },
  {
    title: "Smart Vision",
    year: 2025,
    description: "Landing Page",
    tags: "Front-end Development",
    video: "/projects/smartVision.mp4",
    image: "/projects/recipePal-2.png",
    url: "/projects/smartvision",
  },
  {
    title: "Recipe Pal",
    year: 2024,
    description: "Recipe App",
    tags: "Front-end Development",
    image: "/projects/recipePal-1.png",
    url: "/projects/recipepal",
  },
  {
    title: "Othello",
    year: 2023,
    description: "Board Game",
    tags: "Front / Game Development",
    image: "/projects/othello-2.png",
    url: "/projects/othello",
  },
  {
    title: "Kopi O",
    year: 2023,
    description: "POS System",
    tags: "Fullstack Development",
    image: "/projects/othello-1.png",
    url: "/projects/kopio",
  },
  {
    title: "KasirPedia",
    year: 2023,
    description: "POS System",
    tags: "Frontend Development",
    image: "/projects/othello-1.png",
    url: "/projects/kasirpedia",
  },
  {
    title: "Netflix Clone",
    year: 2023,
    description: "UI Clone",
    tags: "Frontend Development",
    image: "/projects/othello-1.png",
    url: "/projects/netflixclone",
  },
  {
    title: "Nabook",
    year: 2023,
    description: "E-commerce",
    tags: "Frontend Development",
    image: "/projects/othello-1.png",
    url: "/projects/nabook",
  },
];

const aboutMe = [
  "I'm Erwin Gunawan — I've been a fullstack developer for 2 years, building websites with React and .NET. I create engaging, accessible user interfaces that not only work well, but feel great to use.",
  "Currently a Fullstack Developer at CLV Innovation Technology, a software house where I develop and maintain systems for a Singapore-based F&B chain.",
];

const experience = [
  {
    company: "CLV Innovation Technology",
    role: "Fullstack Developer",
    desc: "Software House",
    work: "Maintained and extended food delivery integrations (Grabfood, Foodpanda, Deliveroo), building custom dashboards and automation tools for multi-branch operations using .NET, C# and JavaScript.",
    from: "2023",
    to: "Present",
  },
  {
    company: "Purwadhika Digital Technology School",
    role: "Fullstack Developer Trainee",
    desc: "Coding Bootcamp",
    work: "Intensive program covering JavaScript, React, Node.js, MySQL, Docker, Git, and modern web development best practices through real-world projects and team collaboration.",
    from: "2022",
    to: "2023",
  },
  {
    company: "PT Infinity Packaging Solutions",
    role: "Customer Service",
    desc: "Manufacture",
    work: "Managed customer communication, delivery scheduling, invoicing, and shipment handling.",
    from: "2022",
    to: "2022",
  },
  {
    company: "PT Koh Brothers Indonesia",
    role: "Admin & Legal",
    desc: "Property Management",
    work: "Managed customer service, contracts, billing, procurement, and vendor coordination to ensure smooth office operations.",
    from: "2018",
    to: "2022",
  },
  {
    company: "PT Mitra Sintera",
    role: "Admin",
    desc: "Distributor",
    work: "Handled sales data entry, stock record maintenance, and incoming goods inspection.",
    from: "2018",
    to: "2018",
  },
];

const detailedProjects = [
  {
    title: "Basic POS",
    year: 2025,
    shortDescription: "POS System for Small Retail",
    description:
      "Basic POS is a full-featured point-of-sale system designed for real-world use in small retail environments. It supports product variations, stock monitoring, receipt reprinting, and daily sales reports—all within a mobile-friendly interface optimized for low-spec devices.",
    overview:
      "Developed as part of a team capstone project, this system includes authentication, sales tracking, and inventory features tailored to small business needs. Designed for both desktop and mobile, it's built to be deployed locally via Docker with minimal setup.",
    projectGoals: `Build a practical, user-friendly POS system with essential retail features.
Ensure offline/local deployment support using Docker.
Deliver a responsive UI suitable for budget devices and small screens.`,
    softSkill: ["Team Collaboration", "Project Planning", "Problem Solving"],
    tech: ["React", "Next.js", "Node.js", "Tailwind CSS", "MySQL", "Docker"],
    src: [
      "/projects/demo.jpg",
      "/projects/othello-1.png",
      "/projects/recipePal-1.png",
      "/projects/recipePal-2.png",
      "/projects/othello-2.png",
      "/projects/demo.jpg",
      "/projects/othello-1.png",
      "/projects/recipePal-1.png",
    ],
  },
  {
    title: "SmartVision",
    year: 2025,
    shortDescription: "Product Landing Page",
    description:
      "SmartVision is a concept landing page crafted to showcase a modern AI-powered surveillance solution. Built as a visual exercise in storytelling and motion design, it simulates a high-end product experience with emphasis on clarity, performance, and user engagement.",
    overview:
      "The project features scroll-triggered animations, responsive design, and smooth transitions that highlight product capabilities and user benefits. It's designed with marketing performance in mind—fast-loading, mobile-first, and conversion-oriented.",
    projectGoals: `Establish visual identity for a conceptual AI product.
Design and develop an immersive scroll experience.
Deliver a clean, high-converting landing page UI.`,
    softSkill: [
      "User Experience Design",
      "Creative Direction",
      "Motion Design",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "GSAP"],
    src: [
      "/projects/demo.jpg",
      "/projects/othello-1.png",
      "/projects/recipePal-1.png",
    ],
  },
  {
    title: "Recipe Pal",
    year: 2024,
    shortDescription: "Recipe Discovery App",
    description:
      "Recipe Pal is a simple yet functional recipe browsing app built to explore public API integration and dynamic routing with Next.js. It serves as a clean, beginner-friendly UI for users to search and discover food recipes with minimal distraction.",
    overview:
      "The app consists of two main pages — a general search interface and a category-based filter page. Users can type in ingredients or keywords to search for recipes, or use a dropdown to browse by category. Results are fetched live from a public food API.",
    projectGoals: `Practice building a real-world project with Next.js.
Implement dynamic routing and API integration.
Create a responsive and intuitive UI for basic user search flows.`,
    softSkill: [
      "API Integration",
      "State Management Basics",
      "Component Structuring",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "Axios", "Spoonacular API"],
    src: [
      "/projects/demo.jpg",
      "/projects/othello-1.png",
      "/projects/recipePal-1.png",
    ],
  },
  {
    title: "Othello",
    year: 2023,
    shortDescription: "Browser-Based Board Game",
    description:
      "Othello is a simple board game project built during a phase of playing the game regularly. The idea was to recreate the classic Reversi experience in the browser using React — as a way to challenge logic implementation and improve component thinking.",
    overview:
      "The game features a basic player vs bot mode. While the bot logic is non-AI and randomly selects from valid moves, the app enforces all the rules of Othello, including turn-taking, flipping pieces, and move validation. A key focus was making the game beginner-friendly with visible hints for valid player moves.",
    projectGoals: `Explore game logic implementation using React.
Apply basic state management in a non-form-based UI.
Translate static tutorial logic into a dynamic, rule-driven board game.`,
    softSkill: [
      "Logic Structuring",
      "Code Reusability",
      "Debugging through Iteration",
    ],
    tech: ["React", "JavaScript", "CSS"],
    src: [
      "/projects/demo.jpg",
      "/projects/othello-1.png",
      "/projects/recipePal-1.png",
    ],
  },
  {
    title: "Kopi O",
    year: 2023,
    shortDescription: "Fullstack POS System (Team Project)",
    description:
      "Kopi O is a fullstack Point-of-Sale system developed as the final assignment for Purwadhika Bootcamp. Built by a 3-person team, the project aimed to cover both frontend and backend competencies while simulating real-world retail workflows in a café environment.",
    overview:
      "The system includes user authentication and role-based access control, location-aware permission for multi-branch use, and an integrated payment method that allows users to upload payment proof for admin approval. Mobile responsiveness and real POS features like product management, transaction history, and stock tracking were part of the deliverables.",
    projectGoals: `Build a complete POS web application.
Ensure mobile-first responsiveness.
Implement full user flow from order to admin confirmation.
Collaborate and split frontend/backend responsibilities across team.`,
    softSkill: [
      "Team Collaboration",
      "Project Planning",
      "Task Ownership",
      "Cross-functional Communication",
    ],
    tech: ["React", "Node.js", "Express.js", "MySQL", "Chakra UI", "Git"],
    src: [
      "/projects/demo.jpg",
      "/projects/othello-1.png",
      "/projects/recipePal-1.png",
    ],
  },
];

export { messages, tools, projects, aboutMe, experience, detailedProjects };
