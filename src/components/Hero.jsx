/**
* @copyright 2025 allanalpizar
* @license Apache-2.0
*/

// Components
import { ButtonPrimary, ButtonOutline } from "./Button";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Hero = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    es: {
      availability: "Disponibilidad inmediata",
      heading: "Transformo ideas en experiencias web.",
      downloadCV: "Descargar CV",
      scrollDown: "Desplazar abajo"
    },
    en: {
      availability: "Available now",
      heading: "I turn ideas into web experiences.",
      downloadCV: "Download CV",
      scrollDown: "Scroll down"
    }
  };

  const t = translations[language];

  // Define la ruta del archivo según el idioma
  const cvLink = language === "es" ? "/docs/CV_es.pdf" : "/docs/CV_en.pdf";

  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img src={`${import.meta.env.BASE_URL}images/avatar-1.jpg`} width={40} height={40} alt="Allan imagen" className="img-cover" />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              {t.availability}
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            {t.heading}
          </h2>

          <div className="flex items-center gap-3">
          <ButtonPrimary
                href={language === "es" ? "/docs/CV_es.pdf" : "/docs/CV_en.pdf"}
                label={t.downloadCV}
                icon="download"
                target="_blank"
                download
/>
          </div>
        </div>

        <div className="hidden lg:block">
        <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-slate-900 to-65% rounded-[60px] overflow-hidden">
  <img 
    src={`${import.meta.env.BASE_URL}images/hero.jpg`} 
    width={656} 
    height={800} 
    alt="banner1" 
    className="w-full animate-float shadow-[0_25px_35px_-12px_rgba(0,0,0,0.35)] rounded-[60px] object-cover"
/>
</figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;