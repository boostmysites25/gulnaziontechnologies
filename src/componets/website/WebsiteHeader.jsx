import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { logoImg, routes } from "../../constant";
import { Link, useLocation } from "react-router-dom";

const WebsiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
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
      className={`py-3 fixed backdrop-blur-md top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/20 text-black" : "bg-black/20 text-white"
      }`}
    >
      <div className="wrapper flex justify-between items-center gap-10">
        <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
          <Link to="/" className="flex items-center gap-2 h-[3rem] md:h-[4rem]">
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
          <div className="lg:flex mt-7 items-center gap-10 hidden">
            {routes
              .filter((route) => !route.path.includes(":"))
              .map(({ name, path, hideInNav }) =>
                name !== "Book Consultation" && !hideInNav ? (
                  <Link
                    to={`${path}`}
                    className={`link text-sm ${
                      pathname === `${path}` && "active-link"
                    }`}
                    key={path}
                  >
                    {name}
                  </Link>
                ) : null
              )}
            <Link to="/book-consultation" className="primary-btn">
              Book Consultation
            </Link>
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
            {routes
              .filter((route) => !route.path.includes(":"))
              .map(({ name, path }) =>
                name !== "Book Consultation" ? (
                  <Link
                    onClick={() => setIsOpen(false)}
                    key={path}
                    className="text-3xl text-white font-medium transition-colors duration-300 link"
                    to={path}
                  >
                    {name}
                  </Link>
                ) : null
              )}
            <Link
              onClick={() => setIsOpen(false)}
              to="/book-consultation"
              className="text-white hover:text-white cursor-pointer font-light tracking-wide border bg-primary/60 border-primary hover:bg-primary text-xl hover:-translate-y-1 shadow-2xl shadow-transparent rounded-[.3rem] px-4 py-2 transition-all duration-300 w-fit"
            >
              Book Consultation
            </Link>
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

export default WebsiteHeader;
