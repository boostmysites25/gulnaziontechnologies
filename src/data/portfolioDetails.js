// Portfolio details with comprehensive information about each project
export const portfolioDetails = [
  // App Development Portfolio
  {
    id: "akash-mega-mart",
    title: "Akash Mega Mart",
    category: "E-commerce",
    techStack: ["Flutter", "Firebase", "Razorpay", "GetX", "Cloud Functions"],
    problemStatement: "Create a seamless shopping app covering groceries, fashion, electronics with a unified experience across diverse product categories.",
    outcome: "Unified app with advanced filters, secure checkout, live order tracking, and personalized recommendations that increased customer retention by 45%.",
    description: "Akash Mega Mart is a comprehensive e-commerce mobile application that revolutionizes the shopping experience by unifying multiple product categories including groceries, fashion, and electronics under a single, intuitive platform. The app leverages advanced technologies to provide personalized shopping experiences, intelligent product recommendations, and seamless checkout processes. With its robust architecture and user-centric design, Akash Mega Mart has transformed how customers discover, purchase, and receive products across diverse categories.",
    features: [
      "Multi-category product browsing with intelligent categorization",
      "Advanced search with filters, voice search, and image recognition",
      "Secure checkout with multiple payment options via Razorpay integration",
      "Real-time order tracking with live map visualization",
      "Personalized user recommendations based on shopping patterns",
      "User reviews and ratings with photo/video capabilities",
      "Wishlist functionality with price drop notifications",
      "Push notifications for order updates and personalized offers",
      "Offline browsing capabilities for previously viewed products",
      "Multi-language support for regional accessibility",
      "Loyalty program with points and rewards system",
      "Augmented reality product visualization for select categories"
    ],
    challenges: [
      "Integrating multiple product categories with different attributes and specifications",
      "Implementing a scalable database structure to handle thousands of products",
      "Ensuring seamless payment processing with robust security measures",
      "Optimizing app performance with large product catalogs and image assets",
      "Creating a unified user experience across diverse product categories",
      "Developing an efficient inventory management system with real-time updates",
      "Implementing personalized recommendation algorithms with limited initial data",
      "Ensuring consistent performance across various device specifications"
    ],
    solutions: [
      "Designed a flexible product schema with dynamic attributes to accommodate various categories",
      "Utilized Firebase for real-time database capabilities with optimized query structures",
      "Implemented robust error handling and security protocols for payment processing",
      "Applied lazy loading, image optimization, and pagination for improved performance",
      "Created a modular UI architecture that maintains consistency while adapting to category-specific needs",
      "Developed a hybrid inventory system that synchronizes with multiple supplier databases",
      "Built a recommendation engine that combines collaborative filtering with content-based approaches",
      "Implemented extensive performance testing across device profiles with automated optimization"
    ],
    type: "app"
  },
  {
    id: "vetlab",
    title: "Vetlab",
    category: "Health / Veterinary",
    techStack: ["Flutter", "Firebase", "Node.js", "Express", "MongoDB", "WebRTC"],
    problemStatement: "Digitize complex veterinary diagnostic processes with secure test booking, sample tracking, and comprehensive digital reporting for improved pet healthcare outcomes.",
    outcome: "Streamlined testing workflow reducing diagnostic time by 60%, with secure digital reports and integrated telehealth consultations that revolutionized veterinary care delivery.",
    description: "Vetlab is a pioneering digital platform that transforms traditional veterinary diagnostics into a streamlined, accessible ecosystem. The application bridges the gap between pet owners, veterinarians, and diagnostic laboratories through an integrated digital workflow. By digitizing the entire diagnostic journey—from test ordering to result delivery and follow-up consultations—Vetlab has significantly reduced diagnostic turnaround times while improving accuracy and accessibility of veterinary healthcare. The platform incorporates advanced features like digital sample tracking, AI-assisted preliminary assessments, and integrated telehealth capabilities, creating a comprehensive solution that serves all stakeholders in the veterinary care ecosystem.",
    features: [
      "Sophisticated test booking system with veterinarian authorization workflows",
      "Real-time sample collection tracking with GPS integration",
      "Secure digital report delivery with interactive result visualization",
      "Comprehensive notification system for all stages of the diagnostic process",
      "Historical health record repository with trend analysis",
      "Seamless integration with major veterinary practice management systems",
      "Multi-modal digital payment processing with installment options",
      "Integrated telehealth consultation for result interpretation",
      "AI-powered preliminary result assessment for critical alerts",
      "Digital prescription generation and medication reminders",
      "Laboratory capacity management and dynamic scheduling",
      "Anonymized data analytics for veterinary research support"
    ],
    challenges: [
      "Ensuring compliance with complex veterinary healthcare standards and regulations",
      "Creating an intuitive interface accessible to both technical and non-technical users",
      "Securely handling and transmitting sensitive pet health information",
      "Integrating with diverse legacy veterinary management systems",
      "Developing accurate sample tracking across various geographic locations",
      "Balancing comprehensive functionality with simplicity for everyday use",
      "Accommodating the unique workflows of different veterinary specialties",
      "Ensuring reliable operation in areas with limited connectivity"
    ],
    solutions: [
      "Established a veterinary advisory board to guide compliance and feature development",
      "Implemented iterative design with extensive user testing across all stakeholder groups",
      "Developed a proprietary end-to-end encryption system for all health data transmission",
      "Created a flexible API gateway with adapters for various veterinary system integrations",
      "Built a hybrid location tracking system that functions even with intermittent connectivity",
      "Designed role-specific interfaces that present relevant functionality based on user type",
      "Developed specialty-specific modules that adapt to different veterinary practice areas",
      "Implemented robust offline capabilities with background synchronization"
    ],
    type: "app"
  },
  {
    id: "feelit",
    title: "Feelit",
    category: "Social Networking",
    techStack: ["Flutter", "Firebase", "AI Sentiment Detection"],
    problemStatement: "Allow emotional expression and wellness sharing through mood-based posts.",
    outcome: "Community for anonymous emotional support and expression.",
    description: "Feelit is an innovative social networking application focused on emotional wellness and expression. The platform allows users to share their feelings anonymously through mood-based posts and connect with others experiencing similar emotions. By incorporating AI sentiment detection, the app provides personalized support and resources based on users' emotional states.",
    features: [
      "Anonymous emotional expression",
      "AI-powered sentiment analysis",
      "Community support networks",
      "Mood tracking and analytics",
      "Personalized wellness resources",
      "Moderated safe spaces for vulnerable users"
    ],
    challenges: [
      "Creating a safe environment for emotional vulnerability",
      "Accurately detecting sentiment from user posts",
      "Balancing anonymity with community safety",
      "Providing appropriate resources for various emotional states"
    ],
    solutions: [
      "Implemented robust content moderation systems",
      "Developed custom sentiment analysis algorithms",
      "Created community guidelines and reporting tools",
      "Partnered with mental health professionals for resource curation"
    ],
    type: "app"
  },
  {
    id: "klikomics",
    title: "Klikomics",
    category: "Entertainment / Comics",
    techStack: ["Flutter", "Firebase"],
    problemStatement: "Deliver interactive comic reading experience via app.",
    outcome: "Increased engagement through animated graphic novels.",
    description: "Klikomics is a digital comic reading platform that transforms traditional comics into interactive, animated experiences. The application features a vast library of graphic novels with enhanced reading features like panel-by-panel navigation, sound effects, and subtle animations that bring stories to life while maintaining the essence of comic book reading.",
    features: [
      "Interactive comic reading experience",
      "Panel-by-panel navigation",
      "Sound effects and background music",
      "Subtle animations for enhanced storytelling",
      "Offline reading capability",
      "Personalized recommendations",
      "Creator subscription options"
    ],
    challenges: [
      "Balancing interactivity without losing comic book feel",
      "Optimizing large graphic files for mobile devices",
      "Creating an intuitive reading interface",
      "Supporting various comic formats and styles"
    ],
    solutions: [
      "Developed custom animation framework for comics",
      "Implemented advanced compression techniques",
      "Conducted extensive UX research with comic readers",
      "Created flexible rendering engine for different comic styles"
    ],
    type: "app"
  },
  {
    id: "autosnap",
    title: "AutoSnap",
    category: "Real Estate / Photography",
    techStack: ["Flutter", "AI tools", "Firebase"],
    problemStatement: "Help realtors quickly take and process property images.",
    outcome: "Boosted listing efficiency with photo automation.",
    description: "AutoSnap is a specialized tool for real estate professionals that streamlines the property photography process. Using AI-powered image enhancement and automated categorization, the app helps realtors quickly capture, process, and organize property photos. The solution significantly reduces the time from property visit to online listing while improving image quality and consistency.",
    features: [
      "AI-powered image enhancement",
      "Automatic room categorization",
      "One-click photo editing",
      "Virtual staging options",
      "Direct integration with listing platforms",
      "Photo organization by property",
      "Collaborative sharing with team members"
    ],
    challenges: [
      "Accurately identifying room types from photos",
      "Providing professional-quality enhancements automatically",
      "Ensuring fast processing on mobile devices",
      "Maintaining image quality while optimizing file sizes"
    ],
    solutions: [
      "Trained custom AI models for room recognition",
      "Developed specialized image enhancement algorithms for real estate",
      "Optimized processing for mobile performance",
      "Implemented smart compression techniques"
    ],
    type: "app"
  },
  {
    id: "eva",
    title: "Eva People App",
    category: "Corporate / HR",
    techStack: ["Flutter", "Firebase", "Node.js"],
    problemStatement: "Monitor employee satisfaction and workplace wellness digitally.",
    outcome: "HR tool enabling feedback, wellness tracking, and insights.",
    description: "Eva People App is a comprehensive HR solution designed to monitor and improve employee satisfaction and workplace wellness. The platform provides tools for anonymous feedback, wellness tracking, and data-driven insights that help organizations create healthier, more productive work environments. The application has become an essential tool for modern HR departments focused on employee experience.",
    features: [
      "Anonymous feedback channels",
      "Wellness tracking and challenges",
      "Recognition and rewards system",
      "Pulse surveys and sentiment analysis",
      "Data visualization for HR insights",
      "Integration with HRIS systems",
      "Personalized wellness recommendations"
    ],
    challenges: [
      "Ensuring anonymity while preventing misuse",
      "Creating engaging wellness experiences",
      "Providing actionable insights from diverse data",
      "Balancing employee privacy with organizational needs"
    ],
    solutions: [
      "Developed secure anonymization protocols",
      "Implemented gamification elements for wellness activities",
      "Created customizable analytics dashboards",
      "Established clear data usage policies and controls"
    ],
    type: "app"
  },
  {
    id: "planta",
    title: "Planta",
    category: "Health / Wellness",
    techStack: ["Flutter", "Firebase"],
    problemStatement: "Track habits and wellness routines digitally.",
    outcome: "Users manage hydration, nutrition, and health goals.",
    description: "Planta is a holistic wellness application focused on helping users develop and maintain healthy habits related to hydration, nutrition, and overall wellbeing. The app provides personalized tracking, gentle reminders, and progress visualization to encourage consistent healthy behaviors. With its plant-inspired design and growth metaphors, Planta makes wellness tracking engaging and rewarding.",
    features: [
      "Personalized hydration tracking",
      "Nutrition logging and analysis",
      "Habit formation tools",
      "Visual progress tracking",
      "Smart reminders based on user patterns",
      "Goal setting and milestone celebrations",
      "Community challenges and support"
    ],
    challenges: [
      "Creating habit-forming experiences without being intrusive",
      "Accurately tracking diverse wellness metrics",
      "Personalizing recommendations for different user needs",
      "Maintaining user engagement over time"
    ],
    solutions: [
      "Implemented behavioral science principles in notification systems",
      "Developed flexible tracking frameworks for various metrics",
      "Created adaptive recommendation algorithms",
      "Designed progressive engagement features and milestones"
    ],
    type: "app"
  },
  {
    id: "serviz",
    title: "Serviz",
    category: "On-Demand Services",
    techStack: ["Flutter", "Razorpay", "Firebase"],
    problemStatement: "Aggregate household repair and cleaning professionals.",
    outcome: "On-demand booking with secure payment options.",
    description: "Serviz is a comprehensive on-demand service platform that connects homeowners with verified professionals for household repairs, maintenance, and cleaning services. The application streamlines the process of finding, booking, and paying for home services while ensuring quality through verified reviews and professional vetting. Serviz has transformed how people manage home maintenance by making professional help accessible with just a few taps.",
    features: [
      "Service provider verification system",
      "Real-time availability and booking",
      "Secure in-app payments",
      "Service tracking and updates",
      "Verified reviews and ratings",
      "Service history and documentation",
      "Emergency service options"
    ],
    challenges: [
      "Verifying service provider qualifications",
      "Managing real-time availability across providers",
      "Ensuring consistent service quality",
      "Handling peak demand periods efficiently"
    ],
    solutions: [
      "Developed multi-stage verification process",
      "Created dynamic scheduling algorithms",
      "Implemented quality control and feedback systems",
      "Built surge pricing and priority systems for peak times"
    ],
    type: "app"
  },
  {
    id: "fresh-and-fresh",
    title: "Fresh and Fresh",
    category: "E-commerce / Grocery",
    techStack: ["Flutter", "Firebase", "Razorpay"],
    problemStatement: "Daily grocery delivery with order tracking features.",
    outcome: "Clean UI, delivery scheduling, and online payments.",
    description: "Fresh and Fresh is a specialized grocery delivery application focused on providing farm-fresh produce and daily essentials with same-day delivery options. The platform features an intuitive interface for browsing products, scheduling deliveries, and tracking orders in real-time. With its emphasis on product freshness and delivery reliability, Fresh and Fresh has become a preferred choice for quality-conscious consumers.",
    features: [
      "Curated fresh produce selection",
      "Same-day delivery scheduling",
      "Real-time order tracking",
      "Subscription options for regular items",
      "Freshness guarantee policies",
      "Contactless delivery options",
      "Personalized product recommendations"
    ],
    challenges: [
      "Ensuring product freshness throughout delivery",
      "Managing inventory for perishable items",
      "Optimizing delivery routes for efficiency",
      "Handling temperature-sensitive products"
    ],
    solutions: [
      "Implemented just-in-time inventory systems",
      "Developed specialized packaging protocols",
      "Created AI-powered route optimization",
      "Designed insulated delivery containers for temperature control"
    ],
    type: "app"
  },
  
  // Web Development Portfolio
  {
    id: "5g-homes",
    title: "5G Homes",
    category: "Telecommunications / Real Estate",
    techStack: ["React", "Next.js", "Node.js", "Express", "MongoDB", "MapBox API", "TailwindCSS", "Redux", "Socket.io"],
    problemStatement: "Create a sophisticated platform for high-speed 5G internet services targeting residential properties with real-time coverage data, personalized plan recommendations, and streamlined service activation.",
    outcome: "Interactive website with precision coverage mapping, AI-driven plan recommendations, and automated installation scheduling that increased conversion rates by 78% and reduced service activation time by 65%.",
    description: "5G Homes represents a paradigm shift in how residential customers discover, evaluate, and adopt next-generation internet services. This comprehensive web platform bridges the technological complexity of 5G infrastructure with an intuitive user experience that guides customers from initial interest to active service. The platform leverages advanced geospatial technology to provide address-level coverage accuracy, AI-driven plan recommendations based on household needs, and a seamless digital onboarding process. Beyond initial service adoption, 5G Homes provides customers with a sophisticated self-service portal for real-time performance monitoring, usage analytics, and service optimization. The platform has transformed customer acquisition and retention strategies for telecommunications providers while democratizing access to ultra-high-speed connectivity.",
    features: [
      "Precision coverage mapping with address-level accuracy and signal strength visualization",
      "Interactive plan comparison tools with usage simulation based on household profiles",
      "AI-powered service recommendations analyzing user needs and property characteristics",
      "Streamlined digital application process with real-time verification and approval",
      "Automated installation scheduling with technician matching and preparation checklists",
      "Comprehensive customer dashboard for account management and service monitoring",
      "Real-time service performance monitoring with historical trending and analysis",
      "Integrated speed testing tools with optimization recommendations",
      "Proactive support system with predictive issue detection and resolution",
      "Community features showing neighborhood adoption rates and satisfaction metrics",
      "Detailed usage analytics with personalized optimization suggestions",
      "Self-service upgrade pathways with instant provisioning capabilities"
    ],
    challenges: [
      "Developing accurate, real-time coverage mapping at address-level precision",
      "Translating complex technical specifications into understandable consumer benefits",
      "Simplifying the evaluation and selection process for diverse service options",
      "Creating a frictionless application and activation experience across digital channels",
      "Integrating with multiple backend provisioning and activation systems",
      "Ensuring accurate service qualification across diverse property types",
      "Developing intuitive visualizations for technical performance metrics",
      "Balancing comprehensive functionality with simple, accessible user experiences"
    ],
    solutions: [
      "Engineered a proprietary coverage mapping system combining network data with terrain analysis",
      "Developed an adaptive content framework that adjusts technical complexity to user sophistication",
      "Created an interactive decision engine that guides users through personalized plan selection",
      "Implemented a streamlined application workflow reducing required fields by 60%",
      "Built a flexible integration layer with adapters for various backend systems",
      "Developed a sophisticated property qualification algorithm incorporating multiple data sources",
      "Designed intuitive data visualizations that transform technical metrics into actionable insights",
      "Implemented progressive disclosure patterns to manage interface complexity while maintaining depth"
    ],
    type: "web"
  },
  {
    id: "cold-creekcap",
    title: "Cold Creekcap",
    category: "Finance / Investment",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    problemStatement: "Develop a professional platform for a capital investment firm.",
    outcome: "Sophisticated website showcasing investment strategies and portfolio management.",
    description: "Cold Creekcap is a premium web platform for a capital investment firm that showcases their investment philosophy, portfolio performance, and client services. The website features elegant design elements, interactive financial visualizations, and secure client portals. The platform effectively communicates the firm's expertise while providing valuable tools for both prospective and existing clients.",
    features: [
      "Investment strategy presentations",
      "Interactive portfolio performance charts",
      "Secure client portal",
      "Team member profiles",
      "Investment calculator tools",
      "Market insights and reports",
      "Contact and consultation scheduling"
    ],
    challenges: [
      "Presenting complex financial information clearly",
      "Balancing sophistication with accessibility",
      "Ensuring security for financial data",
      "Creating a premium brand experience"
    ],
    solutions: [
      "Developed custom data visualization components",
      "Implemented progressive disclosure of complex information",
      "Built enterprise-grade security protocols",
      "Created cohesive premium design system"
    ],
    type: "web"
  },
  {
    id: "think-reality",
    title: "Think Reality",
    category: "Real Estate",
    techStack: ["React", "Node.js", "MongoDB"],
    problemStatement: "Create an immersive property listing and viewing platform for UAE market.",
    outcome: "Feature-rich real estate platform with virtual tours and advanced filtering.",
    description: "Think Reality is a cutting-edge real estate platform serving the UAE market with immersive property listings and advanced search capabilities. The website features virtual property tours, detailed neighborhood information, and sophisticated filtering options that help buyers find their ideal properties. The platform has revolutionized how properties are marketed and explored in the region.",
    features: [
      "360° virtual property tours",
      "Advanced property search and filtering",
      "Neighborhood insights and analytics",
      "Mortgage calculator tools",
      "Agent connection platform",
      "Saved searches and alerts",
      "Comparative market analysis"
    ],
    challenges: [
      "Handling large volumes of high-resolution media",
      "Creating intuitive search for complex property criteria",
      "Providing accurate neighborhood data",
      "Supporting multiple languages for international buyers"
    ],
    solutions: [
      "Implemented progressive loading and optimization for media",
      "Developed faceted search with natural language processing",
      "Integrated with multiple data sources for neighborhood insights",
      "Built comprehensive localization system"
    ],
    type: "web"
  },
  
  // Blockchain Portfolio
  {
    id: "nanoflow",
    title: "Nanoflow",
    category: "Blockchain / Finance",
    techStack: ["Solidity", "React", "Next.js", "Web3.js", "Polygon", "IPFS", "The Graph", "Hardhat", "Ethers.js", "TailwindCSS"],
    problemStatement: "Create a decentralized micropayment ecosystem for content creators that eliminates intermediaries, reduces transaction costs, and provides transparent revenue distribution while maintaining an accessible user experience for mainstream audiences.",
    outcome: "Revolutionary blockchain platform enabling sub-cent microtransactions with 99.7% fee reduction, transparent revenue sharing, and an intuitive interface that achieved 85% adoption among non-crypto users.",
    description: "Nanoflow represents a paradigm shift in content monetization, leveraging blockchain technology to create a direct value exchange between creators and their audiences. This decentralized platform eliminates traditional intermediaries and their associated fees, enabling microtransactions as small as $0.01 to be economically viable. Built on layer-2 scaling solutions, Nanoflow combines the security and transparency of blockchain with the speed and cost-efficiency needed for practical micropayments. The platform features programmable smart contracts that enable sophisticated revenue distribution models, including multi-party splits, time-based vesting, and conditional payments. With its intuitive interface that abstracts blockchain complexity while preserving its benefits, Nanoflow has democratized content monetization for creators across diverse mediums—from writers and musicians to video producers and digital artists. The platform has fundamentally transformed creator economics by enabling direct audience support at unprecedented granularity and scale.",
    features: [
      "Advanced smart contract-based payment distribution with programmable revenue splits",
      "Seamless creator wallet integration with non-custodial security",
      "Flexible monetization options including microtransactions, subscriptions, and tiered access",
      "Comprehensive analytics dashboard with revenue attribution and audience insights",
      "Multi-chain and multi-currency support with automatic conversion",
      "Granular content access management with token-gated experiences",
      "Creator discovery marketplace with algorithmic and curated recommendations",
      "Automated royalty distribution for collaborative works",
      "Decentralized content storage with permanent availability",
      "Transparent on-chain verification of payments and distributions",
      "Gasless transactions for mainstream user accessibility",
      "Cross-platform embedding capabilities for monetization across the web"
    ],
    challenges: [
      "Achieving sub-cent transaction viability by minimizing blockchain fees",
      "Creating intuitive interfaces that abstract blockchain complexity for non-technical users",
      "Ensuring transaction speed and reliability at scale during usage spikes",
      "Developing compliant solutions within evolving regulatory frameworks",
      "Balancing decentralization principles with user experience requirements",
      "Designing secure yet accessible wallet management for mainstream users",
      "Implementing cross-chain functionality while maintaining consistent user experience",
      "Ensuring content persistence and availability in a decentralized architecture"
    ],
    solutions: [
      "Implemented custom layer-2 scaling solution with optimistic rollups for fee reduction",
      "Developed an abstraction layer that shields users from blockchain complexity",
      "Created an innovative batched transaction processing system with priority queuing",
      "Built a flexible compliance framework with jurisdictional adaptability",
      "Designed a progressive decentralization approach that evolves with user sophistication",
      "Implemented social recovery and multi-factor security for non-custodial wallets",
      "Developed a unified cross-chain API that normalizes interactions across networks",
      "Created a hybrid storage solution combining IPFS with strategic redundancy mechanisms"
    ],
    type: "blockchain"
  },
  
  // E-commerce Portfolio
  {
    id: "banjaaran",
    title: "Banjaaran",
    category: "E-commerce / Fashion",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    problemStatement: "Create an authentic ethnic fashion e-commerce platform.",
    outcome: "Culturally rich shopping experience with artisan storytelling features.",
    description: "Banjaaran is a specialized e-commerce platform showcasing authentic ethnic fashion and handcrafted accessories from artisans across India. The website features rich cultural storytelling, artisan profiles, and detailed product information that highlights traditional craftsmanship. With its focus on ethical sourcing and cultural preservation, Banjaaran has created a unique shopping experience that connects consumers with authentic cultural products.",
    features: [
      "Artisan profiles and stories",
      "Region-based product categorization",
      "Craft technique explanations",
      "Ethical sourcing information",
      "Cultural context for products",
      "Custom sizing and personalization options",
      "Fair trade certification display"
    ],
    challenges: [
      "Accurately representing handcrafted products online",
      "Communicating cultural significance respectfully",
      "Managing inventory for artisanal products",
      "Balancing authentic presentation with modern e-commerce expectations"
    ],
    solutions: [
      "Developed specialized product photography guidelines",
      "Created content framework for cultural storytelling",
      "Implemented flexible inventory management for handcrafted items",
      "Designed culturally authentic yet user-friendly interfaces"
    ],
    type: "ecommerce"
  }
];