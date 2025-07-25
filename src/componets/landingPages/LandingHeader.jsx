import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { Link as CustomLink } from "react-router-dom";
import { Link } from "react-scroll";
import { logoImg } from "../../constant";
const options = [
  {
    name: "Home",
    path: "banner",
  },
  {
    name: "About Us",
    path: "about",
  },
  {
    name: "Services",
    path: "services",
  },
  // {
  //   name: "FAQs",
  //   path: "faqs",
  // },
  {
    name: "Contact Us",
    path: "contacts",
  },
];

const LandingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`py-3 fixed backdrop-blur-md top-0 w-full z-50  ${
        isScrolled ? "bg-white/20 text-black" : "bg-black/20 text-white"
      }`}
    >
      <div className="wrapper flex justify-between items-center gap-10">
        <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
          <Link
            smooth={true}
            to="banner"
            className="flex items-center gap-2 h-[3rem] md:h-[4rem] cursor-pointer"
          >
            <img
              src={logoImg}
              className="h-[3rem] md:h-[4rem] md:ml-5 scale-125"
              alt="logo"
            />
            <span
              className={`${
                isScrolled ? "text-black" : "text-white"
              } heading-3 !leading-tight font-medium text-lg`}
            >
              Gulnazion Technologies
            </span>
          </Link>
          <div className="lg:flex items-center mt-7 gap-10 hidden">
            {options.map((option) =>
              option.name === "Home" ? (
                <CustomLink key={option.path} to={`/`} className="link text-sm">
                  Home
                </CustomLink>
              ) : (
                <Link
                  to={option.path}
                  className="link text-sm"
                  key={option.path}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                  activeClass="active-link"
                >
                  {option.name}
                </Link>
              )
            )}
            <Link className={`link text-sm `}>Blogs</Link>
            <CustomLink
              to="/book-consultation"
              className="text-white hover:text-white cursor-pointer font-light tracking-wide border bg-primary/60 border-primary hover:bg-primary text-sm hover:-translate-y-1 shadow-2xl shadow-transparent rounded-[.3rem] px-4 py-2 transition-all duration-300"
            >
              Book Consultation
            </CustomLink>
          </div>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="py-4 px-10 z-10"
        >
          <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-[2.2rem]"
            >
              <IoMdClose />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {options.map((option) =>
              option.name === "Home" ? (
                <CustomLink key={option.path} to={`/`} className="link text-sm">
                  Home
                </CustomLink>
              ) : (
                <Link
                  to={option.path}
                  className="link text-sm"
                  key={option.path}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                  activeClass="active-link"
                >
                  {option.name}
                </Link>
              )
            )}
            <Link className={`link text-sm `}>Blogs</Link>
            <CustomLink
              to="/book-consultation"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-white cursor-pointer font-light tracking-wide border bg-primary/60 border-primary hover:bg-primary text-sm hover:-translate-y-1 shadow-2xl shadow-transparent rounded-[.3rem] px-4 py-2 transition-all duration-300 w-fit"
            >
              Book Consultation
            </CustomLink>
          </div>
        </Drawer>
        <div
          className="block lg:hidden justify-self-end"
          onClick={toggleDrawer}
        >
          <Hamburger
            color="white"
            size="23"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
