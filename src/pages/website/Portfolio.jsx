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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-[4rem]">
          {getCurrentPortfolio().map((project) => (
            <div
              key={project.id}
              className="bg-white  dark:bg-darkblack rounded-lg dark:hover:shadow-primary shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="small-heading text-black font-semibold text-lg mb-2">
                  {project.title}
                </h3>
                <div className="flex justify-between items-center">
                  {/* {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-800 transition-colors"
                    >
                      View Live
                    </a>
                  ) : (
                    <span className="text-gray-500">
                      Live Link Unavailable
                    </span>
                  )} */}
                  
                  {project.slug && (
                    <Link
                      to={`/portfolio/${project.slug}`}
                      className="text-primary hover:text-primary/80 transition-colors font-medium"
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
