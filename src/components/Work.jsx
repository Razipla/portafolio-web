/**
 * @copyright 2025 allanalpizar
 * @license Apache-2.0
 */

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.png",
    title: "Questify",
    tags: ["Web-design", "Development", "API"],
    projectLink: "https://github.com/Razipla/Questify_api",
  },
  {
    imgSrc: "/images/project-3.png",
    title: "Super EL Pueblo website",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/Razipla/Comunication",
  },
  {
    imgSrc: "/images/project-2.png",
    title: "Supernova website",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/Razipla/proyecto_DIWEB",
  },
  {
    imgSrc: "/images/project-1.jpg",
    title: "Full stack music app",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://musify-5al0.onrender.com/",
  },

];

const Work = () => {
  const { language } = useLanguage();
  const carouselRef = useRef(null);

  const scrollCarousel = (dir) => {
    const el = carouselRef.current;
    const scrollAmount = el.offsetWidth * 0.85;
    if (dir === "next") {
      if (el.scrollLeft + el.offsetWidth >= el.scrollWidth - 5) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    } else {
      if (el.scrollLeft <= 0) {
        el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
      } else {
        el.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => scrollCarousel("next"), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="work" className="section bg-white text-black overflow-hidden">
      <div className="container relative">
        <h2 className="headline-2 mb-8 text-[#273c75] font-extrabold">
          {language === "es" ? "Mi Portafolio Web" : "My Web Portfolio"}
        </h2>

        {/* Botones */}
        <div className="absolute -top-14 right-0 flex gap-4 z-10 backdrop-blur-md bg-white/30 border border-[#273c75]/20 rounded-xl px-3 py-1 shadow-md">
          <button
            onClick={() => scrollCarousel("prev")}
            className="material-symbols-rounded text-[#273c75] hover:text-[#fbc531] transition text-xl"
          >
            arrow_back
          </button>
          <button
            onClick={() => scrollCarousel("next")}
            className="material-symbols-rounded text-[#273c75] hover:text-[#fbc531] transition text-xl"
          >
            arrow_forward
          </button>
        </div>

        {/* Carrusel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
        >
          {works.map(({ imgSrc, title, tags, projectLink }, i) => (
            <ProjectCard
              key={i}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="min-w-[280px] sm:min-w-[320px] md:min-w-[380px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;