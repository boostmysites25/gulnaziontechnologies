import React, { useState } from "react";
import {
  aiPortfolio,
  appPortfolio,
  blockchainPortfolio,
  ecommercePortfolio,
  shopifyPortfolio,
  webPortfolio,
} from "../../constant";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import banner from "../../assets/images/whyus2.jpg";

const Portfolio = () => {
  const [activePortfolio, setActivePortfolio] = useState("web");

  const portfolioTypes = [
    { key: "web", label: "Web Projects" },
    { key: "app", label: "Mobile Apps" },
    { key: "blockchain", label: "Blockchain" },
    { key: "ecommerce", label: "Ecommerce" },
    { key: "aiProject", label: "AI Projects" },
    { key: "shopifyPortfolio", label: " Shopify" },
  ];

  const getCurrentPortfolio = () => {
    switch (activePortfolio) {
      case "web":
        return webPortfolio;
      case "app":
        return appPortfolio;
      case "blockchain":
        return blockchainPortfolio;
      case "ecommerce":
        return ecommercePortfolio;
      case "aiProject":
        return aiPortfolio;
      case "shopifyPortfolio":
        return shopifyPortfolio;
      default:
        return webPortfolio;
    }
  };

  // Function to get category based on portfolio type
  const getCategory = (portfolioType) => {
    switch (portfolioType) {
      case "web":
        return "Corporate Website";
      case "app":
        return "Mobile App";
      case "blockchain":
        return "Blockchain";
      case "ecommerce":
        return "Ecommerce";
      case "aiProject":
        return "AI Project";
      case "shopifyPortfolio":
        return "Shopify";
      default:
        return "Web Project";
    }
  };

  return (
    <div className="">
      <div
        data-aos="fade-down"
        className=" h-[40vh] sm:h-[55vh] md:h-[70vh] relative"
      >
        <img
          src={banner}
          className="object-cover object-center h-full w-full"
          alt=""
        />
        <div className="absolute top-0 w-full h-full bg-black/50"></div>
        <div className="absolute py-2 top-[40%] left-1/2 -translate-x-1/2 w-full flex flex-col items-center px-3">
          <h1
            data-aos="fade-up"
            className="heading text-white text-center font-raleway text-[2.18rem] md:text-7xl font-bold leading-tight"
          >
            Portfolio
          </h1>
          <div
            data-aos="fade-up"
            className="mt-5 text-base sm:text-xl font-medium px-3 py-2 w-fit rounded-full  flex flex-wrap justify-center text-white items-center gap-1 sm:gap-2"
          >
            <Link to="/">Home</Link>
            <IoIosArrowForward />
            <h4 className="text-white">Portfolio</h4>
          </div>
        </div>
      </div>
      <div className="wrapper pt-[4rem] paddingbottom ">
        <h2 className="heading-2 text-center">My Portfolio</h2>

        <div className="flex sm:flex-row flex-col  gap-5 justify-center my-8 ">
          {portfolioTypes.map((type) => (
            <button
              key={type.key}
              onClick={() => setActivePortfolio(type.key)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activePortfolio === type.key
                  ? "bg-primary text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 pb-[4rem]">
          {getCurrentPortfolio().map((project) => (
            <div
              key={project.id}
              onClick={() => {
                if (project.slug) {
                  window.location.href = `/portfolio/${project.slug}`;
                }
              }}
              className={`${
                project.slug ? "cursor-pointer" : ""
              } bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              {/* Image Section - Light Gray Placeholder */}
              <div className="h-48 bg-gray-200 flex items-center justify-center relative">
                {project.img ? (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Image Placeholder</span>
                  </div>
                )}
              </div>
              
              {/* Content Section */}
              <div className="p-4">
                {/* Category Tag */}
                <div className="mb-2">
                  <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md">
                    {getCategory(activePortfolio)}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="font-bold text-gray-800 text-lg mb-2">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
                
                {/* Action Link */}
                <div className="flex justify-between items-center">
                  {project.slug && (
                    <Link
                      to={`/portfolio/${project.slug}`}
                      className="text-primary hover:text-primary/80 transition-colors font-medium text-sm"
                    >
                      Case Study
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
