/**
* @copyright 2025 allanalpizar
* @license Apache-2.0
*/

import { useState } from "react";

const LanguageToggle = ({ onToggle }) => {
  const [language, setLanguage] = useState("es");

  const handleToggle = () => {
    const newLang = language === "es" ? "en" : "es";
    setLanguage(newLang);
    onToggle(newLang);
  };

  return (
    <button
      onClick={handleToggle}
      className="btn btn-outline fixed bottom-6 right-6 z-50"
    >
      {language === "es" ? "English" : "Español"}
    </button>
  );
};

export default LanguageToggle;
