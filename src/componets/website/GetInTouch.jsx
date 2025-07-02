import React, { useState } from "react";
import image from "../../assets/images/contactimage.webp";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { companyDetails } from "../../constant";

const GetInTouch = () => {
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
      name: "Gulnazion Technologies",
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
        toast.error(error.message || "Failed to send email. Please try again.");
      })
      .finally(() => setSpinner(false));
  };

  return (
    <div id="contact" className="pb-[5rem] relative">
      <div className="wrapper grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-stretch items-center gap-7">
        <div className="flex flex-col gap-5">
          <h2 className="text-center heading-2 lg:text-start">
            Ready to Lead with Innovation? <br /> Let's Start Your Project
          </h2>
          <p className="description text-center lg:text-start">
            Reach out to discover how our tech solutions can propel your
            business forward.
          </p>
          <img
            src={image}
            alt=""
            className="max-h-[25rem] object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col h-full items-start gap-3">
          <p className="gradient-text uppercase">Let's connect</p>
          <div className="bg-gradient-to-b h-full text-white from-primary to-secondary rounded-2xl w-fit p-7">
            <h2 className="text-3xl font-medium">
              Connect With Our Team to Get Started!
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-3 mt-3"
            >
              <div className="grid lg:grid-cols-2 gap-3">
                <div className="">
                  <label htmlFor="name">Name*</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full outline-none p-3 rounded-lg text-black"
                    autoComplete="off"
                    placeholder="Enter your name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <span className="text-red-700 text-sm">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full outline-none p-3 rounded-lg text-black"
                    autoComplete="off"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-red-700 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-3">
                <div className="">
                  <label htmlFor="subject">Subject*</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full outline-none p-3 rounded-lg text-black"
                    autoComplete="off"
                    placeholder="Enter subject"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                  />
                  {errors.subject && (
                    <span className="text-red-700 text-sm">
                      {errors.subject.message}
                    </span>
                  )}
                </div>
                <div className="">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full outline-none p-3 rounded-lg text-black"
                    autoComplete="off"
                    placeholder="Enter your phone number"
                    {...register("phone", {
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Invalid phone number",
                      },
                    })}
                  />
                  {errors.phone && (
                    <span className="text-red-700 text-sm">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="">
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Enter your message here"
                  className="w-full outline-none p-3 rounded-lg text-black"
                  autoComplete="off"
                  {...register("message", {
                    required: "Message is required",
                  })}
                />
                {errors.message && (
                  <span className="text-red-700 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>
              <button 
                type="submit"
                className="mt-4 bg-white text-black px-5 py-3 rounded-full hover:text-primary hover:-translate-y-1 duration-300 transition-all"
                disabled={spinner}
              >
                {spinner ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;