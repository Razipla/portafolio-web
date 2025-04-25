/**
 * @copyright 2025 allanalpizar
 * @license Apache-2.0
 */

// Node modules
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import SkillCard from "./SkillCard";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const skillItem = [
  {
    imgSrc: `${import.meta.env.BASE_URL}images/adobexd.png`,
    label: "AdobeXD",
    desc: {
      es: "Diseño prototipos para organizar visualmente antes de programar.",
      en: "I design prototypes to visually organize before coding.",
    },
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/css3.svg`,
    label: "CSS",
    desc: {
      es: "Aplico estilos para dar vida y estructura visual al sitio.",
      en: "I apply styles to bring structure and life to the site.",
    },
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/javascript.svg`,
    label: "JavaScript",
    desc: {
      es: "Doy interactividad al sitio, desde animaciones hasta formularios.",
      en: "I add interactivity to the site, from animations to forms.",
    },
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/nodejs.svg`,
    label: "NodeJS",
    desc: {
      es: "Creo el servidor y toda la lógica del backend.",
      en: "I build the server and all backend logic.",
    },
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/expressjs.svg`,
    label: "ExpressJS",
    desc: {
      es: "Organizo las rutas y peticiones del backend de forma sencilla.",
      en: "I organize backend routes and requests easily.",
    },
  },
  {
    imgSrc:`${import.meta.env.BASE_URL}images/mongodb.svg`,
    label: "MongoDB",
    desc: {
      es: "Guardo y consulto datos como usuarios y formularios.",
      en: "I store and query data like users and forms.",
    },
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/react.svg`,
    label: "React",
    desc: {
      es: "Creo componentes reutilizables para construir interfaces dinámicas.",
      en: "I build reusable components for dynamic interfaces.",
    },
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/tailwindcss.svg`,
    label: "TailwindCSS",
    desc: {
      es: "Aplico estilos de forma rápida con clases utilitarias.",
      en: "I style elements fast using utility-first classes.",
    },
  },
];

const Skill = () => {
  const { language } = useLanguage();

  useGSAP(() => {
    gsap.fromTo(
      ".zoom-reveal",
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".zoom-reveal",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="section bg-white text-black">
      <div className="container px-6 py-16 lg:px-20 lg:py-24">
        <h2 className="headline-2 reveal-up text-[#273c75] font-extrabold">
          {language === "es"
            ? "Herramientas esenciales que utilizo"
            : "Essential tools I use"}
        </h2>
        <p className="mt-3 mb-8 max-w-[60ch] text-base text-[#444] font-medium reveal-up">
          {language === "es"
            ? "Descubre las herramientas y tecnologías que uso para crear sitios web y aplicaciones increíbles y de alto rendimiento."
            : "Discover the tools and technologies I use to build amazing and high-performance websites and applications."}
        </p>
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc[language]}
              classes="zoom-reveal"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
