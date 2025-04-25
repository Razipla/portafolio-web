/**
* @copyright 2025 allanalpizar
* @license Apache-2.0
*/

import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    visible && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-5 right-5 w-11 h-11 rounded-full bg-[#273c75] text-white flex items-center justify-center text-xl shadow-md transition-all duration-300 z-50 hover:bg-[#fbc531] hover:text-[#273c75] active:scale-95"
      >
        <span className="material-symbols-rounded">arrow_upward</span>
      </button>
    )
  );
};

export default ScrollToTop;