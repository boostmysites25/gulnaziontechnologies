import { allServices, serviceaidevelopment } from "../../../constant";
import Testimonials from "../../common/Testimonials";

const ArtificialIntelligence = () => {
  const details = allServices[3]; // Updated to index 3 for Artificial Intelligence service
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
        src={serviceaidevelopment}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="artificial intelligence"
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
          <ul className="w-full flex flex-wrap justify-between gap-3 sm:pl-6 mt-5">
            {details.techStack.map((tech, index) => (
              <li
                key={index}
                className="text-base w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-0.75rem)] rounded-lg bg-primary hover:bg-opacity-30 p-6 hover:scale-105 transition-all duration-700 flex items-center gap-3"
              >
                {tech.icon}
                <span className="text-lg font-semibold">{tech.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Testimonials */}
        <div data-aos="fade-up" className="pt-4">
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default ArtificialIntelligence;
