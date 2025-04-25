/**
 * @copyright 2025 allanalpizar
 * @license Apache-2.0
 */

import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useLanguage } from "../context/LanguageContext";

const Navbar = ({ navOpen }) => {
  const { language } = useLanguage();

  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
    }
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);
    return () => window.removeEventListener("resize", initActiveBox);
  }, [language]);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + "px";
    activeBox.current.style.left = event.target.offsetLeft + "px";
    activeBox.current.style.width = event.target.offsetWidth + "px";
    activeBox.current.style.height = event.target.offsetHeight + "px";
  };

  const navItems = [
    {
      label: language === "es" ? "Inicio" : "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: language === "es" ? "Sobre mí" : "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: language === "es" ? "Propósito" : "Purpose",
      link: "#reviews",
      className: "nav-link",
    },
    {
      label: language === "es" ? "Habilidades" : "Soft Skills",
      link: "#softskills",
      className: "nav-link",
    },
    {
      label: language === "es" ? "Proyectos" : "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: language === "es" ? "Contacto" : "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          className={`${className} min-w-[80px] text-center`}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
