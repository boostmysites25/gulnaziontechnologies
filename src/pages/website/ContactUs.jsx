import React, { lazy, useEffect, useState } from "react";
import Banner from "../../componets/website/Banner";
import { Link, useNavigate } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { companyDetails } from "../../constant";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const MapComponent = lazy(() => import("../../componets/website/MapComponent"));

const ContactUs = () => {
  const [spinner, setSpinner] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setSpinner(true);

    var emailBody = "Name: " + data.name + "\n\n";
    emailBody += "Email: " + data.email + "\n\n";
    emailBody += "Phone: " + data.phone + "\n\n";
    emailBody += "Subject: " + data.subject + "\n\n";
    emailBody += "Message:\n" + data.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: "You have a new message from Gulnazion Technologies",
      body: emailBody,
      name:"Gulnazion Technologies",
    };

    await fetch("https://send-mail-redirect-boostmysites.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          return toast.error(res.error);
        }
        toast.success("Email sent successfully");
        reset();
        navigate("/thank-you");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Banner page="Contact Us" />
      <div className="wrapper py-[5rem] grid lg:grid-cols-[45%_auto] gap-7">
        <div
          data-aos="fade-right"
          className="bg-gradient-to-r flex flex-col gap-2 text-white from-primarytextcolor to-primarytextcolor p-4 rounded-xl"
        >
          <div className="gradient-rounded-text-box">Contact Us</div>
          <h2 className="heading-2 mt-5">Reach Out to Us</h2>

          <p className="desc">
            Got a question or want to discuss a project? We’re here to help.
            Whether you’re looking to start a new venture, need support, or just
            want to chat about your ideas, feel free to reach out. Our team is
            eager to assist you and provide the guidance you need.
          </p>
          <Link
            to={`tel:${companyDetails.phone}`}
            className="flex items-start gap-3 w-fit mt-5"
          >
            <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-primary flex justify-center items-center">
              <FaPhone className="text-2xl scale-x-[-1]" />
            </div>
            <div className="flex flex-col h-full">
              <p className="font-medium">Call Us</p>
              <p className="desc">{companyDetails.phone}</p>
            </div>
          </Link>
          <Link
            to={`mailto:${companyDetails.email}`}
            className="flex items-start gap-3 w-fit mt-5"
          >
            <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-primary flex justify-center items-center">
              <IoMail className="text-3xl scale-x-[-1]" />
            </div>
            <div className="flex flex-col h-full">
              <p className="font-medium">Email</p>
              <p className="desc">{companyDetails.email}</p>
            </div>
          </Link>
          <div className="flex items-start gap-3 w-fit mt-5">
            <div className="min-w-[2.5rem] w-[2.5rem] h-[2.5rem] rounded-full bg-primary flex justify-center items-center">
              <FaLocationDot className="text-2xl scale-x-[-1]" />
            </div>
            <div className="flex flex-col h-full">
              <p className="font-medium">Location</p>
              <p className="desc max-w-[20rem]">{companyDetails.address}</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="h-full flex flex-col justify-between gap-7"
        >
          <div className="p-[1px] text-white h-full bg-gradient-to-r from-secondary to-primary rounded-lg">
            <div className="rounded-lg h-full bg-primarytextcolor p-4">
              <h3 className="text-lg">Have Any Question?</h3>
              <form
                className="flex flex-col gap-4 mt-5"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    className="border-primary/40 p-2 rounded-md border outline-none bg-transparent"
                    placeholder="Name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <input
                      type="email"
                      className="border-primary/40 p-2 rounded-md border outline-none bg-transparent"
                      placeholder="Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <input
                      type="tel"
                      className="border-primary/40 p-2 rounded-md border outline-none bg-transparent"
                      placeholder="Phone Number"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Invalid phone number",
                        },
                      })}
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-sm">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <input
                    type="tel"
                    className="border-primary/40 p-2 rounded-md border outline-none bg-transparent"
                    placeholder="Subject"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                  />
                  {errors.subject && (
                    <span className="text-red-500 text-sm">
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <textarea
                    rows="6"
                    className="border-primary/40 p-2 rounded-md border outline-none bg-transparent"
                    placeholder="Message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.message && (
                    <span className="text-red-500 text-sm">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="text-white hover:text-white cursor-pointer font-light tracking-wide  border bg-primary/60 border-primary hover:bg-primary text-sm  hover:-translate-y-1 shadow-2xl shadow-transparent rounded-[.3rem] px-4 py-4 min-w-[7rem] flex justify-center text-center transition-all duration-300"
                >
                  {spinner ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex lg:col-span-2 gap-5 items-center text-primarytextcolor mb-1 mx-auto">
          <p>Follow Us On:</p>
          <div className="flex items-center gap-3">
            <Link
              to={companyDetails.instagram}
              className="group w-[2.5rem] h-[2.5rem] rounded-full border-primary border flex justify-center items-center"
            >
              <BsInstagram className="text-xl text-primarytextcolor group-hover:text-primary transition-all duration-300" />
            </Link>
            <Link
              to={companyDetails.linkedIn}
              className="group w-[2.5rem] h-[2.5rem] rounded-full border-primary border flex justify-center items-center"
            >
              <BsLinkedin className="text-xl text-primarytextcolor group-hover:text-primary transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
      <div className="wrapper mb-[3rem] py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative z-10 text-center mb-10" data-aos="fade-up">
          <div className="gradient-rounded-text-box mx-auto mb-4">Schedule a Meeting</div>
          <h2 className="heading-2 mb-4">Book a Consultation</h2>
          <p className="desc max-w-2xl mx-auto">
            Take the first step towards transforming your digital presence. Schedule a personalized consultation 
            to discuss your project requirements and explore how we can help you achieve your goals.
          </p>
        </div>
        
        <div className="" data-aos="fade-up">
          <div className="backdrop-blur-sm rounded-xl">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/gulnazion-technologies"
            />
          </div>
        </div>
      </div>
      <MapComponent />
    </>
  );
};

export default ContactUs;
