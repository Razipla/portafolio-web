/**
 * @copyright 2025 allanalpizar
 * @license Apache-2.0
 */

// Node modules
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// Components
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { toggleLanguage, language } = useLanguage();

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-white to-white/0 text-black">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="logo">
            <img
              src="/images/logotipo.png"
              width={100}
              height={100}
              alt="logo"
            />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden text-black"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <div className="flex items-center gap-2 md:justify-self-end">
          <a href="#contact" className="btn btn-secondary max-md:hidden text-black">
            {language === "es" ? "Contacto" : "Contact"}
          </a>

          {/* Botón de idioma */}
          <button
            onClick={toggleLanguage}
            className="w-10 h-10 rounded-full text-xs uppercase ring-1 ring-inset hover:bg-[#fbc531] text-black transition"
            aria-label="Cambiar idioma"
          >
            {language === "es" ? "EN" : "ES"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
