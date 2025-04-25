/**
* @copyright 2025 allanalpizar
* @license Apache-2.0
*/

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const aboutItems = [
  {
    label: {
      es: "Promedio carrera",
      en: "Career GPA"
    },
    number: "90%"
  },
  {
    label: {
      es: "Años de experiencia",
      en: "Years of experience"
    },
    number: 0
  }
];

const About = () => {
  const { language } = useContext(LanguageContext);

  const descriptions = {
    es: `Soy un desarrollador web en formación con enfoque Full-Stack, con conocimientos en tecnologías como HTML, CSS, JavaScript, React, Node.js y MongoDB. Me interesa crear soluciones digitales funcionales, atractivas y seguras que mejoren la experiencia del usuario. Me considero una persona responsable, organizada y adaptable, con una gran disposición para el aprendizaje continuo. También tengo experiencia en áreas administrativas, lo que me permite aportar una visión integral a los proyectos.`,

    en: `I'm a web developer in training with a Full-Stack focus, knowledgeable in technologies such as HTML, CSS, JavaScript, React, Node.js, and MongoDB. I’m passionate about creating functional, attractive, and secure digital solutions that enhance user experience. I consider myself responsible, organized, and adaptable, with a strong commitment to continuous learning. I also have experience in administrative areas, which allows me to bring a holistic vision to projects.`
  };

  return (
    <section id="about" className="section bg-white">
      <div className="container text-black">
        <h2 className="headline-2 mb-6 font-extrabold text-[#273c75]">
          {language === "es" ? "Acerca de mí" : "About me"}
        </h2>

        <div className="bg-[#f0f0f0] p-7 rounded-2xl md:p-12 shadow-md">
          <p className="text-zinc-700 text-base font-medium leading-relaxed mb-6 md:mb-10 md:max-w-[65ch]">
            {descriptions[language]}
          </p>

          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-baseline gap-1 md:mb-1">
                  <span className="text-4xl md:text-5xl font-extrabold text-[#273c75]">{number}</span>
                  <span className="text-2xl font-bold text-[#7f8fa6]">+</span>
                </div>
                <p className="text-sm text-[#273c75] font-semibold tracking-wide">
                  {label[language]}
                </p>
              </div>
            ))}

            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="Logo"
              width={90}
              className="ml-auto md:w-[70px] md:h-[70px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
