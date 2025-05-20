import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../componets/landingPages/Contact";
import aboutUsImg from "../../assets/images/aboutuscontent.jpg";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
import ReactPlayer from "react-player";
import { homeBannerVideo } from "../../constant";
import OurServices from "../../componets/website/OurServices";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import Testimonials from "../../componets/common/Testimonials";
import Faqs from "../../componets/common/Faqs";
import Credibility from "../../componets/common/Credibility";
import CommonProject from "../../componets/website/CommonProject";

const Home = () => {
  return (
    <>
      <div id="banner" className="h-screen relative">
        <ReactPlayer
          url={homeBannerVideo}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          className="absolute"
          pip={false}
          config={{
            file: {
              attributes: {
                style: {
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                },
                controlsList: "nodownload noplaybackrate",
                disablePictureInPicture: true,
                playsinline: true,
              },
            },
          }}
        />
        <div className="bg-gradient-to-r to-black/50 from-transparent absolute w-full h-full"></div>
        <div className="pt-[3rem] wrapper flex items-center h-full">
          <div
            data-aos="fade-up"
            className="relative z-10 px-6 justify-center h-full text-white flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto"
          >
            <div className="rounded-text-box border-white/70 font-medium">
              IT Services
            </div>
            <h1 className="heading-1">
              Empowering Your Business with
              <span className="text-primary"> Digital Solutions </span>
            </h1>
            <p className="desc">
              At Gulnazion Technologies, we create state-of-the-art AI-powered
              IT solutions designed to meet the ever-changing demands of
              businesses, driving greater efficiency, long-term growth, and
              constant innovation through smart automation and data-powered
              insights.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link to="/contact-us" className="primary-btn mt-2">
                Get Started
              </Link>
              <Link to="/book-consultation" className="secondary-btn mt-2">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="py-[3rem] text-primarytextcolor wrapper">
        <div
          data-aos="fade-right"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          About Us
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-right" className="flex h-full flex-col gap-7">
            <div className="flex flex-col gap-7 text-center lg:text-start">
              <h2 className="heading-2">
                Transforming Operations with AI-Driven Innovation
              </h2>
              <p className="desc">
                At Gulnazion Technologies, we are not just a service
                provider—we’re your strategic partner in building the digital
                future of your business. With a team of highly skilled
                designers, developers, and strategists, we are committed to
                delivering exceptional, tailor-made solutions that meet your
                unique needs and goals. We combine the latest technology with
                creative problem-solving to ensure that your business stays
                ahead of the competition and continues to thrive in an
                ever-evolving digital landscape.
              </p>
            </div>
            <div className="flex gap-5 mt-4 justify-center lg:justify-start flex-wrap">
              <Link to="/services" className="secondary-btn">
                Our Services
              </Link>
              <Link to="/book-consultation" className="primary-btn">
                Book Consultation
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="h-full max-h-[300px] max-w-[400px] lg:max-w-full  lg:max-h-[382px] "
          >
            <img
              src={aboutUsImg}
              className=" h-full rounded-lg w-full  mx-auto object-cover"
              alt=""
            />
          </div>
        </div>
      </section>
      <OurServices length={3} />
      <section
        // data-aos-offset={-400}
        // data-aos-anchor-placement="top-bottom"
        // data-aos-anchor="selector"
        className="py-[3rem] bg-[#333333] text-white"
      >
        <div
          data-aos-offset={-400}
          // data-aos-anchor-placement="bottom-center"
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-3"
        >
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Who We Are
          </div>
          <h1 className="heading-2 bg-gradient-to-r from-primary max-w-[50rem] mx-auto to-secondary bg-clip-text text-transparent">
            Dependable AI-Powered IT Solutions Tailored to Your Business
            Requirements{" "}
          </h1>
          <p className="desc max-w-[50rem] mx-auto">
            At Gulnazion Technologies, we understand that your website is not
            just an online presence—it's a vital part of your brand, a powerful
            business tool, and often the first point of contact with potential
            customers. In today's fast-paced world, making a memorable first
            impression is key. That's why we take web design beyond the basics,
            incorporating advanced AI-powered features to optimize performance,
            personalize user experiences, and provide actionable insights. Our
            strategy focuses on increasing engagement, driving conversions, and
            accelerating your business growth.
          </p>
        </div>
      </section>
      <CommonProject />
      {/* <Faqs /> */}
      {/* <WhyChooseUs /> */}
      <UnlockEfficiency />
      <Testimonials />
      <Credibility />
      <Faqs />
      {/* <EndlessOpportunitiesSection /> */}
      <div>
        <Contact />
      </div>
    </>
  );
};

export default Home;
