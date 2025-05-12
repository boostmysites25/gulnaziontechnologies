import React, { useEffect } from "react";
import Banner from "../../componets/website/Banner";

const BookConsultation = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Banner page="Book a Consultation" />
      <div className="wrapper mb-[3rem] py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center mb-10" data-aos="fade-up">
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Schedule a Meeting
          </div>
          <h2 className="heading-2 mb-4">Book Your Consultation</h2>
          <p className="desc max-w-2xl mx-auto">
            Take the first step towards transforming your digital presence.
            Schedule a personalized consultation with our experts to discuss
            your project requirements and explore how we can help you achieve
            your goals.
          </p>
        </div>

        <div className="" data-aos="fade-up">
          <div className="backdrop-blur-sm rounded-xl h-full">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/gulnazion-technologies"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookConsultation;
