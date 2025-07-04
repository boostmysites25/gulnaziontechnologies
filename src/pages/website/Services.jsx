import React from "react";
// import OurServices from "../../componets/website/OurServices";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import Testimonials from "../../componets/common/Testimonials";
import Banner from "../../componets/website/Banner";
import CommonProject from "../../componets/website/CommonProject";
import ServiceItems from "../../componets/common/ServiceItems";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import banner from "../../assets/images/about-us-banner.jpg";

const Services = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        className=" h-[40vh] sm:h-[55vh] md:h-[70vh] relative"
      >
        <img
          src={banner}
          className="object-cover object-bottom h-full w-full"
          alt=""
        />
        <div className="absolute top-0 w-full h-full bg-black/50"></div>
        <div className="absolute py-2  top-[40%] left-1/2 -translate-x-1/2 w-full flex flex-col items-center px-3">
          <h1
            data-aos="fade-up"
            className="heading text-white text-center font-raleway text-[2.18rem] md:text-7xl font-bold leading-tight"
          >
            Services
          </h1>
          <div
            data-aos="fade-up"
            className="mt-5 text-base sm:text-xl font-medium px-3 py-2 w-fit rounded-full  flex flex-wrap justify-center text-white items-center gap-1 sm:gap-2"
          >
            <Link to="/">Home</Link>
            <IoIosArrowForward />
            <h4 className="text-white">Services</h4>
          </div>
        </div>
      </div>
      <ServiceItems />
      <UnlockEfficiency />
      <Testimonials />
    </>
  );
};

export default Services;
