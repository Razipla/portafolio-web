/**
 * @copyright 2025 allanalpizar
 * @license Apache-2.0
 */

import SoftSkillCard from "./SoftSkillCard";
import { useLanguage } from "../context/LanguageContext";
import teamwork from "../assets/animations/Animation1.json";
import communication from "../assets/animations/Animation2.json";
import creativity from "../assets/animations/Animation3.json";
import adaptability from "../assets/animations/Animation4.json";

const SoftSkills = () => {
  const { language } = useLanguage();

  const skills = [
    {
      title: language === "es" ? "Trabajo en equipo" : "Teamwork",
      description: language === "es"
        ? "Colaboro de forma efectiva para lograr objetivos comunes."
        : "I collaborate effectively to achieve common goals.",
      animation: teamwork
    },
    {
      title: language === "es" ? "Comunicación" : "Communication",
      description: language === "es"
        ? "Transmito ideas claras y escucho activamente."
        : "I communicate ideas clearly and listen actively.",
      animation: communication
    },
    {
      title: language === "es" ? "Creatividad" : "Creativity",
      description: language === "es"
        ? "Encuentro soluciones innovadoras para los desafíos."
        : "I find innovative solutions to challenges.",
      animation: creativity
    },
    {
      title: language === "es" ? "Adaptabilidad" : "Adaptability",
      description: language === "es"
        ? "Me ajusto con facilidad a cambios y contextos nuevos."
        : "I easily adapt to changes and new contexts.",
      animation: adaptability
    },
  ];

  return (
    <section id="softskills" className="section overflow-hidden">

      <div className="container">
        <h2 className="headline-2 text-[#273c75] font-bold mb-8 text-center">
          {language === "es" ? "Habilidades Blandas" : "Soft Skills"}
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">

          {skills.map((skill, index) => (
            <SoftSkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
