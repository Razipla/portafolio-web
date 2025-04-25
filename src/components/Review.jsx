/**
 * @copyright 2025 allanalpizar
 * @license Apache-2.0
 */

// Node modules
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

// Component
import ReviewCard from "./ReviewCard";

gsap.registerPlugin(ScrollTrigger);

const content = {
  es: [
    {
      title: "Misión",
      icon: "target",
      content: "Desarrollar soluciones web que mejoren la experiencia del usuario, aplicando conocimientos de frontend y backend para crear productos accesibles y funcionales."
    },
    {
      title: "Visión",
      icon: "visibility",
      content: "Aportar innovación, mejorar la comunicación en la web e impulsar la transformación digital con soluciones accesibles, eficientes y de calidad."
    },
    {
      title: "Valores",
      icon: "star",
      content: [
        {
          title: "Responsabilidad",
          desc: "Cumplir cada tarea garantizando entregas puntuales sin comprometer la calidad."
        },
        {
          title: "Compromiso",
          desc: "Ofrecer soluciones valiosas con actitud profesional y proactiva."
        },
        {
          title: "Honestidad",
          desc: "Actuar según la ética y proyectar los valores de la empresa como propios."
        }
      ]
    }
  ],
  en: [
    {
      title: "Mission",
      icon: "target",
      content: "Develop web solutions that enhance user experience, using frontend and backend knowledge to create accessible and functional products."
    },
    {
      title: "Vision",
      icon: "visibility",
      content: "Drive innovation, improve online communication, and boost digital transformation with accessible, efficient, and high-quality solutions."
    },
    {
      title: "Values",
      icon: "star",
      content: [
        {
          title: "Responsibility",
          desc: "Fulfill tasks on time without sacrificing project quality."
        },
        {
          title: "Commitment",
          desc: "Provide valuable solutions with a proactive and professional approach."
        },
        {
          title: "Honesty",
          desc: "Act ethically and reflect the company’s values as my own."
        }
      ]
    }
  ]
};

const Review = () => {
  const { language } = useLanguage();

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      xPercent: -10, // más sutil y relativo al ancho
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: true,
        // markers: true
      }
    });
  });

  return (
    <section className="section overflow-hidden" id="reviews">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          {language === "es" ? "Misión, Visión y Valores" : "Mission, Vision & Values"}
        </h2>
        <div className="scrub-slide flex flex-wrap justify-center gap-6">
          {content[language].map(({ title, icon, content }, key) => (
            <ReviewCard
              key={key}
              title={title}
              icon={icon}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;