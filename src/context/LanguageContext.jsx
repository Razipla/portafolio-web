/**
 * @copyright 2025 allanalpizar
 * @license Apache-2.0
 */

import { createContext, useContext, useState } from "react";

export const LanguageContext = createContext();

const dictionary = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      work: "Portafolio",
      purpose: "Propósito",
      softskills: "Habilidades",  
      contact: "Contacto",
    },
    hero: {
      subtitle: "Disponibilidad inmediata",
      title: "Transformo ideas en experiencias web.",
      download: "Descargar CV",
      scroll: "Explorar más",
    },
    footer: {
      title: "¡Empecemos hoy!",
      start: "Empecemos",
      sitemap: "Mapa del sitio",
      socials: "Sociales",
      copyright: "Todos los derechos reservados",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About me",
      work: "Portfolio",
      purpose: "Purpose",
      softskills: "Soft Skills",  
      contact: "Contact",
    },
    hero: {
      subtitle: "Available now",
      title: "I turn ideas into web experiences.",
      download: "Download CV",
      scroll: "Scroll down",
    },
    footer: {
      title: "Let’s get started today!",
      start: "Let’s Start",
      sitemap: "Sitemap",
      socials: "Socials",
      copyright: "All rights reserved",
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const t = dictionary[language];
  return { language, toggleLanguage, t };
};
