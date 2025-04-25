/**
 * @copyright 2025 allanalpizar
 * @license Apache-2.0
 */

import { useLanguage } from "../context/LanguageContext";

const sitemap = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "work", href: "#work" },
  { key: "purpose", href: "#reviews" },
  { key: "softskills", href: "#softskills" }, 
  { key: "contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/Razipla" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/allan-alp%C3%ADzar-094271352/" },
];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="section bg-white text-[#1a1a1a]">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
        
          <div className="mb-10">
            <h2 className="headline-1 text-[#273c75] mb-8 lg:max-w-[12ch] font-bold reveal-up">
              {t.footer.title}
            </h2>

            <a
              href="https://wa.me/50687127414"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[#25D366] font-semibold text-lg reveal-up hover:underline"
            >
              <img src={`${import.meta.env.BASE_URL}images/whatsapp.png`} alt="WhatsApp" className="w-6 h-6" />
              {t.footer.start}
            </a>
          </div>

      
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 text-[#273c75] font-semibold reveal-up">
                {t.footer.sitemap}
              </p>
              <ul>
                {sitemap.map(({ key, href }) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-[#1a1a1a] py-1 font-medium hover:text-[#fbc531] transition-colors reveal-up"
                    >
                      {t.nav[key]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 text-[#273c75] font-semibold reveal-up">
                {t.footer.socials}
              </p>
              <ul>
                {socials.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="block text-sm text-[#1a1a1a] py-1 font-medium hover:text-[#fbc531] transition-colors reveal-up"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

    
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 mt-10 border-t border-zinc-200 text-sm text-zinc-600 gap-3">
          <a href="/" className="logo reveal-up">
            <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="logo" width={70} height={70} />
          </a>
          <p className="reveal-up">
            &copy; 2025 <span className="text-[#273c75] font-semibold">Allan Alpízar</span> — {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;