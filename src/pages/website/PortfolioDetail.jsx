import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { portfolioDetails } from "../../data/portfolioDetails";
import { IoIosArrowForward } from "react-icons/io";
import banner from "../../assets/images/whyus2.jpg";
import { FaCheck, FaLightbulb, FaRocket, FaCode, FaUsers, FaChartLine, FaTools, FaRegLightbulb, FaImage } from "react-icons/fa";
import { MdOutlineError, MdTimeline, MdOutlineDesignServices, MdOutlineIntegrationInstructions } from "react-icons/md";
import { BsLightningChargeFill, BsStars } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { GiAchievement } from "react-icons/gi";
import { appPortfolio, webPortfolio, blockchainPortfolio, ecommercePortfolio, aiPortfolio, shopifyPortfolio } from "../../constant";

const PortfolioDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the project with the matching slug
    const foundProject = portfolioDetails.find((item) => item.id === slug);
    
    // Find the portfolio image from the corresponding portfolio array
    let portfolioImage = null;
    
    // Check in all portfolio arrays to find the matching image
    const allPortfolios = [
      { type: 'app', data: appPortfolio },
      { type: 'web', data: webPortfolio },
      { type: 'blockchain', data: blockchainPortfolio },
      { type: 'ecommerce', data: ecommercePortfolio },
      { type: 'ai', data: aiPortfolio },
      { type: 'shopify', data: shopifyPortfolio }
    ];
    
    for (const portfolio of allPortfolios) {
      const matchingItem = portfolio.data.find(item => item.slug === slug);
      if (matchingItem) {
        portfolioImage = matchingItem.img;
        break;
      }
    }
    
    // Set the project with the image
    setProject(foundProject ? { ...foundProject, portfolioImage } : null);
    setLoading(false);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="relative">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-primary"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-12 w-12 rounded-full bg-white"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-primary font-bold">GT</div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen px-4 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="p-8 bg-white rounded-2xl shadow-xl max-w-2xl w-full text-center">
          <MdOutlineError className="text-7xl text-red-500 mb-6 mx-auto" />
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Project Not Found</h1>
          <p className="text-xl text-gray-600 text-center mb-8">
            The portfolio project you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/portfolio"
            className="px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/80 transition-all inline-flex items-center gap-2 text-lg font-medium"
          >
            <FaRocket className="text-xl" /> Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  // Generate random metrics for project impact section
  const getRandomMetric = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const metrics = {
    userGrowth: getRandomMetric(30, 85),
    performanceImprovement: getRandomMetric(40, 95),
    conversionIncrease: getRandomMetric(25, 75),
    timeReduction: getRandomMetric(30, 70)
  };

  // Development phases for project timeline
  const developmentPhases = [
    {
      phase: "Discovery & Planning",
      description: "Conducted in-depth research, stakeholder interviews, and competitive analysis to define project scope and requirements.",
      icon: <FaLightbulb className="text-yellow-500" />
    },
    {
      phase: "Design & Prototyping",
      description: "Created wireframes, user flows, and interactive prototypes to visualize the solution and gather early feedback.",
      icon: <MdOutlineDesignServices className="text-blue-500" />
    },
    {
      phase: "Development",
      description: "Built the core functionality using modern development practices, with regular code reviews and quality assurance.",
      icon: <FaCode className="text-green-500" />
    },
    {
      phase: "Testing & Refinement",
      description: "Conducted thorough testing across devices and user scenarios, refining the solution based on feedback and performance metrics.",
      icon: <FaTools className="text-purple-500" />
    },
    {
      phase: "Deployment & Launch",
      description: "Deployed the solution to production environments with monitoring systems in place to ensure smooth operation.",
      icon: <FaRocket className="text-red-500" />
    }
  ];

  // Generate testimonial for the project
  const testimonial = {
    quote: `The ${project.title} project exceeded our expectations in every way. The team's technical expertise and innovative approach helped us achieve our business goals faster than anticipated.`,
    author: "Client Stakeholder",
    position: `${project.category} Director`
  };

  return (
    <>
      {/* Hero Banner with Parallax Effect */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-110"
          style={{ 
            backgroundImage: `url(${banner})`,
            transform: 'translateZ(0)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-blue-900/80 mix-blend-multiply"></div>
        
        {/* Animated Overlay Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div 
              data-aos="fade-up" 
              className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium mb-4"
            >
              {project.category} • {project.type.toUpperCase()} DEVELOPMENT
            </div>
            <h1 
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-white text-center font-raleway text-[2rem] md:text-[3.5rem] font-bold leading-tight mb-6"
            >
              {project.title}
            </h1>
            <p 
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8"
            >
              {project.problemStatement}
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-wrap justify-center gap-3 text-white"
            >
              <Link to="/">Home</Link>
              <IoIosArrowForward className="mt-1" />
              <Link to="/portfolio">Portfolio</Link>
              <IoIosArrowForward className="mt-1" />
              <span>{project.title}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-12">
        <div className="wrapper">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div 
              data-aos="fade-up"
              className="bg-white p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-all"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaUsers className="text-2xl text-primary" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">{metrics.userGrowth}%</h3>
              <p className="text-gray-600">User Growth</p>
            </div>
            
            <div 
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-white p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-all"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <BsLightningChargeFill className="text-2xl text-primary" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">{metrics.performanceImprovement}%</h3>
              <p className="text-gray-600">Performance Boost</p>
            </div>
            
            <div 
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-all"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaChartLine className="text-2xl text-primary" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">{metrics.conversionIncrease}%</h3>
              <p className="text-gray-600">Conversion Increase</p>
            </div>
            
            <div 
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-white p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-all"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <MdTimeline className="text-2xl text-primary" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">{metrics.timeReduction}%</h3>
              <p className="text-gray-600">Time Reduction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="wrapper py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project Overview - Left Column */}
          <div className="lg:col-span-2">
            {/* Project Overview */}
            <div 
              data-aos="fade-up"
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaRegLightbulb className="text-xl text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Project Overview</h2>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our team approached this project with a focus on delivering exceptional user experience while ensuring robust functionality and scalability. By leveraging cutting-edge technologies and best practices in {project.type} development, we created a solution that not only meets current needs but is also positioned for future growth and adaptation.
                </p>
              </div>
            </div>

            {/* Project Showcase - Futuristic Design */}
            {project.portfolioImage && (
              <div 
                data-aos="fade-up"
                className="mb-16"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <FaImage className="text-xl text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Project Showcase</h2>
                </div>
                
                <div className="bg-gradient-to-r p-8 rounded-2xl shadow-lg border border-blue-500/30 relative overflow-hidden min-h-[80vh]">
                  {/* Decorative Elements */}
                  {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-400"></div>
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div> */}
                  
                  {/* Grid Pattern Overlay */}
                  {/* <div className="absolute inset-0 opacity-10" 
                       style={{
                         backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)',
                         backgroundSize: '50px 50px'
                       }}>
                  </div> */}
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative group">
                      {/* Main Image with Futuristic Frame */}
                      <div className="p-2 bg-gradient-to-r  rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.5)] max-h-[60vh] overflow-hidden">
                        <div className="bg-black p-1 rounded-md overflow-hidden">
                          <img 
                            src={project.portfolioImage} 
                            alt={`${project.title} Project`}
                            className="rounded max-h-[55vh] w-auto object-contain mx-auto"
                          />
                        </div>
                      </div>
                      
                      {/* Animated Highlight Effect */}
                      {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent -translate-x-full animate-shimmer rounded-lg"></div> */}
                      
                      {/* Project Info Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm p-4 rounded-md border border-blue-500/30 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <h3 className="text-blue-400 text-xl font-bold">{project.title}</h3>
                        <p className="text-white/80 text-sm">{project.category} • {project.type.toUpperCase()} DEVELOPMENT</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <p className="pt-6 text-black max-w-3xl">
                        This {project.type} project for {project.title} showcases our commitment to delivering exceptional user experiences through innovative design and robust development practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Problem & Solution */}
            <div 
              data-aos="fade-up"
              className="mb-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-bl-full -mr-16 -mt-16 transition-all duration-300 group-hover:scale-110"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <TbTargetArrow className="text-xl text-red-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">The Challenge</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      {project.problemStatement}
                    </p>
                    <p className="text-gray-700">
                      This presented significant challenges in terms of user experience design, technical implementation, and ensuring seamless integration with existing systems.
                    </p>
                    
                    {project.challenges && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Key Challenges:</h4>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-red-500 mt-1">•</span>
                              <span className="text-gray-700">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-bl-full -mr-16 -mt-16 transition-all duration-300 group-hover:scale-110"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <BsStars className="text-xl text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">Our Solution</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      {project.outcome}
                    </p>
                    <p className="text-gray-700">
                      Our approach combined innovative design thinking with technical excellence to deliver a solution that exceeded expectations and set new standards in the {project.category} space.
                    </p>
                    
                    {project.solutions && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Our Approach:</h4>
                        <ul className="space-y-2">
                          {project.solutions.map((solution, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-green-500 mt-1">•</span>
                              <span className="text-gray-700">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

        </div>
          </div>
            {/* Technology Stack */}
            <div 
              data-aos="fade-up"
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <MdOutlineIntegrationInstructions className="text-xl text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Technology Stack</h2>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We carefully selected the following technologies to ensure optimal performance, scalability, and maintainability for the {project.title} project:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {project.techStack && project.techStack.map((tech, index) => (
                    <div 
                      key={index}
                      className="bg-gray-50 p-4 rounded-xl flex flex-col items-center text-center hover:shadow-md transition-all hover:bg-primary/5"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                        <FaCode className="text-xl text-primary" />
                      </div>
                      <span className="font-medium text-gray-800">{tech}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <p className="text-gray-700">
                    This technology stack was chosen to provide a balance between cutting-edge capabilities and proven reliability. Each component plays a crucial role in delivering the robust functionality and exceptional user experience that defines the {project.title} project.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div 
              data-aos="fade-up"
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <GiAchievement className="text-xl text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Key Features</h2>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The {project.title} project includes a comprehensive set of features designed to deliver exceptional value and address the core needs of users:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.features && project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="mt-1 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all">
                        <FaCheck className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800 mb-2">
                          {feature.split(' ').slice(0, 3).join(' ')}
                        </h3>
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                  <p className="text-gray-700 italic">
                    "These features work together to create a cohesive and powerful solution that addresses the complex needs of {project.category} users while maintaining an intuitive and engaging user experience."
                  </p>
                </div>
              </div>
            </div>

            {/* Development Timeline */}
            <div 
              data-aos="fade-up"
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <MdTimeline className="text-xl text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Development Journey</h2>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The development of {project.title} followed a structured approach to ensure quality, efficiency, and alignment with project goals:
                </p>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  
                  {/* Timeline items */}
                  <div className="space-y-8">
                    {developmentPhases.map((phase, index) => (
                      <div key={index} className="relative pl-12">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-1 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center z-10">
                          {phase.icon}
                        </div>
                        
                        <div className="bg-gray-50 p-6 rounded-xl">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {phase.phase}
                          </h3>
                          <p className="text-gray-700">
                            {phase.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div 
              data-aos="fade-up"
              className="mb-16"
            >
              <div className="bg-primary p-8 md:p-12 rounded-2xl shadow-lg relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
                
                <div className="relative">
                  <div className="text-5xl text-white/30 mb-6">"</div>
                  <p className="text-xl md:text-2xl text-white mb-8 italic font-light leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.author}</h4>
                      <p className="text-white/80">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* Project Details - Right Column */}
          <div className="lg:col-span-1">
            <div 
              data-aos="fade-left"
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 sticky top-24"
            >
              <h3 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-200 text-gray-800">
                Project Details
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-600 mb-2">Category</h4>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-primary rounded-full"></span>
                    <p className="text-xl font-medium text-gray-800">{project.category}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-600 mb-2">Project Type</h4>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-primary rounded-full"></span>
                    <p className="text-xl font-medium text-gray-800 capitalize">{project.type} Development</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-600 mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack && project.techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6">
                  <Link
                    to="/contact-us"
                    className="block w-full py-4 px-6 bg-primary text-white text-center rounded-xl hover:bg-primary/90 transition-all font-medium text-lg shadow-lg shadow-primary/20 hover:shadow-primary/30"
                  >
                    Discuss Similar Project
                  </Link>
                </div>
                
                <div className="pt-4">
                  <Link
                    to="/portfolio"
                    className="block w-full py-3 px-6 bg-gray-100 text-gray-800 text-center rounded-xl hover:bg-gray-200 transition-all"
                  >
                    View More Projects
                  </Link>
                </div>
              </div>
              
              {/* Related Services */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Related Services</h4>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      to="/services/Web Development" 
                      className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                    >
                      <IoIosArrowForward className="text-primary" />
                      <span>Web Development</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/services/Mobile App Development" 
                      className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                    >
                      <IoIosArrowForward className="text-primary" />
                      <span>Mobile App Development</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/services/UI/UX Design" 
                      className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                    >
                      <IoIosArrowForward className="text-primary" />
                      <span>UI/UX Design</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/services/AI Development" 
                      className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                    >
                      <IoIosArrowForward className="text-primary" />
                      <span>AI Development</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary to-secondary py-20">
        <div className="wrapper">
          <div 
            data-aos="fade-up"
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-2 text-white mb-6">Ready to Build Your Next Digital Solution?</h2>
            <p className="text-xl text-white/90 mb-10">
              Let's transform your ideas into reality with our expert team and proven development process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact-us"
                className="px-8 py-4 bg-white text-primary rounded-full hover:bg-gray-100 transition-all font-medium text-lg shadow-lg"
              >
                Start Your Project
              </Link>
              <Link
                to="/book-consultation"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-all font-medium text-lg"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetail;