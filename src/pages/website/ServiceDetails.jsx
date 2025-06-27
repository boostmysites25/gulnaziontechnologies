import React from "react";
import { useParams } from "react-router-dom";
import Testimonials from "../../componets/common/Testimonials";
import { allServices } from "../../constant";

const ServiceDetails = () => {
  const { title } = useParams();
  const details = allServices.find((service) => service.title === title);

  const splitIntoParagraphs = (text, numParagraphs = 3) => {
    const sentences = text.split(". ").map((sentence) => sentence + ".");
    const chunkSize = Math.ceil(sentences.length / numParagraphs);
    const paragraphs = [];

    for (let i = 0; i < sentences.length; i += chunkSize) {
      paragraphs.push(sentences.slice(i, i + chunkSize).join(" "));
    }

    return paragraphs;
  };

  return (
    <div className="flex flex-col gap-10">
      <img
        data-aos="fade-up"
        src={details.image}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt={title}
      />
      <div className="flex flex-col gap-4 md:px-5">
        {/* Service Title */}
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          {details.title}
        </h2>

        {/* Service Description */}
        <p data-aos="fade-up" className="description">
          {splitIntoParagraphs(details.detailContent).map(
            (paragraph, index) => (
              <p key={index} className="py-2">
                {paragraph}
              </p>
            )
          )}
        </p>
        {/* Tech Stack */}
        <div data-aos="fade-up" className="pt-4">
          <h3 className="text-xl font-semibold">Technologies We Use</h3>
          <ul className="w-full flex flex-wrap  gap-3 sm:pl-6 mt-5">
            {details.techStack.map((tech, index) => (
              <li
                key={index}
                className="text-base group w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-0.75rem)] rounded-lg bg-primary hover:bg-white/30 hover:shadow-2xl border border-transparent hover:border-slate-200 backdrop-blur-md p-6 hover:scale-105 transition-all duration-700 flex items-center gap-3"
              >
                <span className="group-hover:animate-bounce duration-300 transition-all ">
                  {tech.icon}
                </span>
                <span className="text-lg font-semibold group-hover:text-secondary duration-300 transition-all">
                  {tech.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <Testimonials />
      </div>
    </div>
  );
};

export default ServiceDetails;
