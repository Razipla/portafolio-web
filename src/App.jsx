/**
* @copyright 2025 allanalpizar
* @license Apache-2.0
*/

// node modules
import { ReactLenis } from 'lenis/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

// Registro gsap plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

// Components
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Review from './components/Review';
import Contact from "./components/contact";
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollTop';
import SoftSkills from "./components/SoftSkills";
const App = () => {
    useGSAP(() => {
        const elements = gsap.utils.toArray('.reveal-up');
        elements.forEach((element) => {
          gsap.set(element, { y: 50, opacity: 0 }); // Estado inicial
          gsap.to(element, {
            scrollTrigger: {
              trigger: element,
              start: '-200 bottom',
              scrub: true,
              // markers: true, // dejalo activado si estás depurando
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
          });
        });
      });
    return (
        <ReactLenis root>
            <Header/>
            <main>
                <Hero/>
                <About/>
                <Review/>
                <Skill/>
                <Work/>
                <SoftSkills />
                <Contact/>
                <ScrollToTop />
            </main>
            <Footer/>

        </ReactLenis>
    )
}
export default App;
