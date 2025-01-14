import logoImg from "./assets/images/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.jpg";
import webDevBanner from "./assets/images/web-landing-banner.jpg";
import webLandingAbout from "./assets/images/web-landing-about1.jpg";
import appLandingAbout from "./assets/images/app-landing-about.jpg";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.jpg";
import aboutUsBanner from "./assets/images/aboutusbanner.jpg";
import contactusbanner from "./assets/images/contactusbanner1.jpg";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";
import profileImg1 from "./assets/images/profileimg-1.jpg";
import profileImg2 from "./assets/images/profileimg-2.jpg";
import serviceswebdevelopment from "./assets/images/services/serviceswebdevelopment.jpg";
import serviceaidevelopment from "./assets/images/services/serviceaidevelopment.jpg";
import chatbotdevelopment from "./assets/images/services/chatbotdevelopment.jpg";
import datadevelopment from "./assets/images/services/datadevelopment.jpg";
import gamedevelopment from "./assets/images/services/gamedevelopment.jpg";
import blockchaindevelopment from "./assets/images/services/blockchaindevelopment.jpg";
import machinelearning from "./assets/images/services/machinelearning.jpg";
import clouddevelopment from "./assets/images/services/clouddevelopment.jpg";
import rpa from "./assets/images/services/rpa.jpg";
import aboutone from "./assets/images/aboutone.jpg";
import abouttwo from "./assets/images/abouttwo.jpg";
import aboutthree from "./assets/images/aboutthree.jpg";
import aboutfour from "./assets/images/aboutfour.jpg";
import aboutfive from "./assets/images/aboutfive.jpg";
import aboutusintroone from "./assets/images/aboutusintroone.jpg";
import aboutusintrotwo from "./assets/images/aboutusintrotwo.jpg";
import allbgimage from "./assets/images/allbgimage.jpg";
import { lazy } from "react";
import { BiBrain, BiBulb, BiRocket } from "react-icons/bi";
import { GoFileMedia, GoGraph } from "react-icons/go";
import { SlBadge } from "react-icons/sl";
import {
  MdCloudQueue,
  MdDeveloperMode,
  MdOutlineAutoGraph,
  MdOutlineDashboardCustomize,
  MdOutlineDeveloperMode,
  MdOutlineSmartToy,
} from "react-icons/md";
import {
  GiArtificialIntelligence,
  GiRobotLeg,
  GiVendingMachine,
} from "react-icons/gi";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FaAppStoreIos, FaGamepad } from "react-icons/fa";
import { SiFlutter, SiHiveBlockchain } from "react-icons/si";
import { IoLogoAndroid, IoMdCloudDone } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaMobileScreen } from "react-icons/fa6";

const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  serviceswebdevelopment,
  serviceaidevelopment,
  chatbotdevelopment,
  datadevelopment,
  gamedevelopment,
  blockchaindevelopment,
  machinelearning,
  clouddevelopment,
  rpa,
  contactusbanner,
  aboutusintroone,
  aboutusintrotwo,
  allbgimage,
};

// company details
export const companyDetails = {
  phone: "+918890131500",
  whatsapp: "+918890131500",
  whatsappbox: "+918890131500",
  email: "abc@example.com",
  address: "Bairwa Basti Nayapura Anta, Dist. Baran, Rajasthan, 325202, India",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Blogs",
    path: "",
    component: "",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "How do I get started with your services?",
    answer:
      "Starting is simple! Schedule a free consultation where you can share your ideas. We'll work with you to develop a plan to turn your vision into a successful AI-driven solution for your business.",
  },
  {
    id: 2,
    question: "Do I need technical expertise to launch an AI business?",
    answer:
      "Not at all! You don’t need any technical knowledge. Our team of AI experts will handle all the technical aspects, while you focus on your business vision and strategy.",
  },
  {
    id: 3,
    question: "How long will it take to launch my AI product?",
    answer:
      "The timeline can vary depending on the complexity, but typically it takes about 3 to 6 months to develop a Minimum Viable Product (MVP) and begin the launch phase.",
  },
  {
    id: 4,
    question: "How can I assess if my AI idea is viable?",
    answer:
      "We provide an initial consultation to evaluate your idea’s viability, assess its market potential, and offer recommendations on how to refine it for success.",
  },
  {
    id: 5,
    question: "What AI solutions do you offer?",
    answer:
      "We offer a wide range of AI solutions, including predictive analytics, natural language processing, computer vision, and custom AI model development, all tailored to meet your specific business requirements.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    img: <CgWebsite />,
    description:
      "Empowering online businesses with tailored e-commerce solutions powered by AI. Our platforms enhance customer engagement, streamline operations, and drive substantial revenue growth through personalized shopping experiences and intelligent recommendations.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    img: <GoFileMedia />,
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Creating custom social media websites that captivate audiences with AI-driven content recommendations and engagement strategies, building brand loyalty and driving growth effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    img: <TfiLayoutMediaRightAlt />,
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      "Crafting high-converting landing pages with AI-enhanced design and user behavior tracking to grab attention and inspire action. Designs that showcase your brand’s message and maximize conversions through personalized experiences.",
  },
  {
    id: 4,
    title: "Custom Websites",
    img: <MdOutlineDashboardCustomize />,
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering bespoke websites powered by AI to meet your unique business needs. Our solutions seamlessly combine creativity, functionality, and AI-driven features for an exceptional online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    img: <FaAppStoreIos />,
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Specializing in iOS app development using Swift and Objective-C. Delivering apps optimized for performance, speed, and responsiveness with AI-powered features like predictive analytics and personalized user experiences.",
  },
  {
    id: 2,
    title: "Android App Development",
    img: <IoLogoAndroid />,
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "Designing and developing Android apps tailored to your business goals. Leveraging Java and Kotlin alongside AI technologies to create robust, efficient applications with intelligent automation and enhanced user engagement.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    img: <SiFlutter />,

    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Using Flutter to create apps for both iOS and Android with a single codebase. Integrating AI-driven solutions to overcome challenges, enhance performance, and deliver smarter, feature-rich applications.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    img: <TbDeviceMobileCode />,
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "Developing feature-rich hybrid apps tailored to your business needs. Incorporating AI-powered tools to create mobile-friendly apps that work seamlessly across iOS and Android platforms while delivering intelligent insights and improved functionality.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    img: <MdOutlineDeveloperMode className="w-6 h-6" />,
    image: require("./assets/images/services/serviceswebdevelopment.jpg"),
    title: "Web Development",
    desc: "Build robust, scalable, and responsive websites to enhance your online presence. Our web development services ensure seamless functionality, engaging user interfaces, and compatibility across all devices.",
    detailContent:
      "Our web development team combines technical expertise with creative flair to deliver websites that not only look great but also perform excellently. We specialize in creating dynamic, user-friendly websites using modern frameworks like React, Angular, and Vue.js. From e-commerce platforms to content management systems, our custom solutions are tailored to meet your business goals. With a strong focus on performance optimization, security, and SEO, we ensure your website stands out in today's competitive digital landscape. Our services include full-cycle development, from ideation and wireframing to deployment and maintenance, providing end-to-end support for all your web development needs.",
  },
  {
    id: 2,
    img: <FaMobileScreen className="w-6 h-6" />,
    image: require("./assets/images/services/appdevelopment.webp"),
    title: "App Development",
    desc: "Create intuitive and engaging mobile applications designed to enhance user experiences and streamline operations. Our app development services focus on delivering high-performance, scalable, and visually appealing solutions tailored to your unique business needs.",
    detailContent:
      "We specialize in crafting mobile applications that resonate with your audience and fulfill your business objectives. From concept to deployment, our team ensures each app is user-friendly, feature-rich, and optimized for performance. Using the latest tools and frameworks, we create applications that work seamlessly across various platforms and devices. We prioritize user engagement by incorporating intuitive designs and functionality. Whether you need a standalone mobile app or an extension of your digital ecosystem, our end-to-end app development process includes wireframing, design, development, testing, and support. By integrating advanced technologies like AI and IoT, we deliver innovative apps that drive growth and provide a competitive edge. Our commitment to quality and scalability ensures that your app evolves with your business, offering long-term value and superior user experiences.",
  },
  {
    id: 3,
    img: <SiHiveBlockchain className="w-6 h-6" />,
    image: require("./assets/images/services/blockchain.webp"),
    title: "Blockchain Development",
    desc: "Revolutionize your business operations with secure, transparent, and decentralized blockchain solutions. Our blockchain development services focus on creating innovative applications tailored to your business needs.",
    detailContent:
      "Our blockchain development services are designed to empower businesses with robust and scalable decentralized applications. We specialize in building custom blockchain solutions, including smart contracts, cryptocurrency wallets, decentralized finance (DeFi) platforms, and supply chain solutions. Leveraging technologies like Ethereum, Hyperledger, and Binance Smart Chain, we ensure your solutions are secure, transparent, and efficient. Whether you're looking to implement blockchain for business transparency or to create innovative blockchain-powered applications, our team has the expertise to help you achieve your goals.",
  },
  {
    id: 4,
    img: <MdOutlineSmartToy className="w-6 h-6" />,
    image: require("./assets/images/services/ai.webp"),
    title: "Artificial Intelligence",
    desc: "Harness the power of AI to drive automation, enhance decision-making, and deliver personalized experiences. Our AI services enable businesses to stay ahead in a rapidly evolving digital landscape.",
    detailContent:
      "Our AI services encompass a wide range of solutions, including natural language processing, computer vision, predictive analytics, and chatbot development. We help businesses integrate AI-driven tools to optimize processes, improve customer engagement, and gain actionable insights. By leveraging machine learning algorithms and advanced data analysis techniques, we create intelligent systems that adapt and evolve with your business needs.",
  },
  {
    id: 5,
    img: <MdOutlineAutoGraph className="w-6 h-6" />,
    image: require("./assets/images/services/machine-learning.webp"),
    title: "Machine Learning Service",
    desc: "Unlock the potential of data with machine learning solutions tailored to your business needs. Our machine learning services help you uncover patterns, predict trends, and make data-driven decisions.",
    detailContent:
      "Our machine learning services include developing custom models, implementing deep learning techniques, and creating data-driven applications. From predictive analytics to recommendation engines, our solutions help businesses leverage data for competitive advantage. We work with diverse datasets and use advanced frameworks like TensorFlow and PyTorch to deliver high-performing machine learning models.",
  },
  {
    id: 6,
    img: <MdCloudQueue className="w-6 h-6" />,
    image: require("./assets/images/services/cloud.webp"),
    title: "Cloud Computing Services",
    desc: "Scale your business with reliable and secure cloud computing solutions. Our services include cloud migration, infrastructure management, and customized solutions to meet your unique needs.",
    detailContent:
      "Our cloud computing services help businesses transition to the cloud with minimal disruption. We specialize in cloud infrastructure management, data migration, and the development of cloud-native applications. With expertise in AWS, Azure, and Google Cloud, we ensure your cloud infrastructure is secure, scalable, and optimized for performance. From DevOps implementation to disaster recovery planning, we provide end-to-end cloud solutions that drive efficiency and innovation.",
  },
  {
    id: 7,
    img: <BsFillClipboard2DataFill className="w-6 h-6" />,
    image: require("./assets/images/services/uiux.webp"),
    title: "UI & UX Design",
    desc: "Create impactful digital experiences with our innovative UI/UX design services. We blend aesthetics with functionality to deliver designs that captivate and engage users.",
    detailContent:
      "Our UI/UX design services focus on creating intuitive and visually compelling interfaces that provide a seamless user experience. By conducting in-depth user research and usability testing, we understand your audience and tailor designs to meet their needs. From wireframes and prototypes to high-fidelity designs, we use tools like Figma, Adobe XD, and Sketch to bring ideas to life. Our designs prioritize accessibility, responsiveness, and brand alignment, ensuring that every interaction with your product is meaningful and engaging. Whether you need a fresh design for a new product or a redesign to improve existing workflows, our team is dedicated to delivering solutions that delight users and achieve your business objectives.",
  },
];

// about us page why choose content
export const whyChooseUsContent = [
  {
    img: <BiBrain className="w-6 h-6" />,
    title: "Transforming Ideas into Innovative Solutions",
    desc: "We collaborate with you to fully understand your vision and turn it into creative, tech-driven solutions that not only meet but exceed your expectations, tailored to your specific business requirements.",
  },
  {
    img: <BiRocket className="w-6 h-6" />,
    title: "Equipping Your Business with Advanced Technology",
    desc: "With our expertise in cutting-edge technologies, we ensure that every solution we provide strengthens your position in the competitive landscape, preparing your business for future success.",
  },
  {
    img: <BiBulb className="w-6 h-6" />,
    title: "Maximizing Efficiency through Innovation",
    desc: "We put innovation at the core of everything, automating processes and crafting intelligent solutions that enhance the efficiency and effectiveness of your business operations.",
  },
  {
    img: <GoGraph className="w-6 h-6" />,
    title: "Driving Growth with Data Insights",
    desc: "Our data-driven approach offers you valuable insights that empower you to make strategic decisions, identify growth opportunities, and stay ahead of the competition.",
  },
  {
    img: <SlBadge className="w-6 h-6" />,
    title: "Committed to Excellence and Partnership",
    desc: "We are dedicated to providing outstanding service and building lasting relationships, supporting you every step of the way, from the initial idea to the final implementation and beyond.",
  },
];

export const reviews = [
  {
    id: 1,
    profileImg: profileImg2,
    name: "David H",
    role: "Director of Operations, Elite Travel Co.",
    desc: "“Launching our startup was no easy task, but Gulnazion Technologies made the development of our website and app stress-free. Their team was approachable, responsive, and incredibly knowledgeable. They delivered a polished, high-performance platform on time and within budget, helping us make a strong entrance into the market.”",
  },
  {
    id: 2,
    profileImg: profileImg1,
    name: "Maria T",
    role: "Co-Founder, GreenTrail Ventures",
    desc: "“Collaborating with Gulnazion Technologies was one of the best decisions we made. Their team completely revamped our website, creating an intuitive, easy-to-navigate platform that enhances the user experience. From start to finish, they guided us with expert advice, and the outcome was a beautifully designed website that perfectly represents our brand. We’ve seen a noticeable increase in customer engagement and satisfaction.”",
  },
  {
    id: 3,
    profileImg: profileImg1,
    name: "Sophia R",
    role: "Founder, Modern Finds Boutique",
    desc: "“We approached Gulnazion Technologies with the task of building a custom mobile app for our business. Their team did an incredible job bringing our vision to life. They not only met our expectations but exceeded them by adding valuable features that improved the overall functionality. Thanks to them, we now have a mobile app that our users absolutely love, which has boosted our client retention rates and increased our revenue.”",
  },
  {
    id: 4,
    profileImg: profileImg2,
    name: "James L",
    role: "CEO, FitPro Solutions",
    desc: "“When we decided to integrate blockchain technology into our operations, we turned to Gulnazion Technologies for help. Their team’s knowledge and understanding of blockchain were evident from the outset. They provided us with a seamless, secure blockchain solution that’s not only improved the transparency of our processes but also enhanced security for our clients. Their expertise has been invaluable in helping us achieve our goals.”",
  },
  {
    id: 5,
    profileImg: profileImg1,
    name: "Lisa K",
    role: "Marketing Manager, TrendyTech Inc.",
    desc: "“We wanted to integrate AI and machine learning into our data analytics processes to make more informed decisions. Gulnazion Technologies delivered a solution that went beyond our expectations. They implemented a predictive analytics system that’s now crucial in helping us forecast trends and improve our decision-making. The AI-powered tools they developed are saving us time and increasing our efficiency.”",
  },
];

export const webPortfolioHomepage = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
    description:
      "A comprehensive finance platform streamlining investments and portfolio management efficiently.",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
    description:
      "A global relocation service platform for seamless student mobility and accommodations.",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
    description:
      "A networking platform connecting leaders and professionals to foster meaningful collaborations.",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
    description:
      "An innovative job marketplace connecting freelancers and employers for diverse gig opportunities.",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
    description:
      "A corporate solution provider enhancing business growth with tailored financial services.",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
    description:
      "A dynamic communication platform revolutionizing team collaboration and connectivity.",
  },
];

export const appPortfolioHomepage = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
    description:
      "An intuitive platform simplifying vehicle part exchanges and purchases.",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
    description:
      "A driver-matching app ensuring efficient and reliable transportation services.",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Artisan Express",
    description:
      "A platform connecting users with skilled artisans for home services.",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "House of Deliverance",
    description:
      "A spiritual app offering resources for faith-building and inspiration.",
  },
];

export const aboutUsItems = [
  {
    title: "Customized Solutions",
    description:
      "We don’t believe in generic approaches. We work closely with each client to craft bespoke solutions that address their specific needs and align with their goals.",
    image: aboutone,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Skilled Team",
    description:
      "Our team of professionals brings a wealth of experience and expertise across various industries. Whether it's designing intuitive interfaces or developing complex backend systems, we have the right skill set for every project.",
    image: abouttwo,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "Innovation at the Core",
    description:
      "We are constantly looking for new ways to solve problems and create value for our clients. By staying ahead of technological trends, we offer fresh, innovative solutions that help our clients lead in their respective industries.",
    image: aboutthree,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Client-Focused Approach",
    description:
      "Our clients are our top priority. We listen closely to your needs, provide regular updates, and ensure that your goals are met. We value open communication and are committed to providing ongoing support long after the project is completed.",
    image: aboutfour,
    gradient: "from-secondary/60 to-secondary/80",
  },
];
