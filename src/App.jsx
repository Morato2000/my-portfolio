import HeroGradient from "./components/common/Herogradient";
import Navbar from "./components/common/Navbar";
import Hero from "./components/pages/Hero";
import "../src/index.css";
import SubHeroSection from "./components/pages/hero/SubHeroSection";
import AboutMe from "./components/pages/AboutMe";
// import HelpSection from "./components/pages/HelpSection";
import Skills from "./components/pages/Skills";
import Experience from "./components/pages/Experience";
import Projects from "./components/pages/Projects";
import ContactMe from "./components/pages/ContactMe";
import Footer from "./components/common/Footer";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0); // Scroll to top after 100ms
    }, 100);
  }, []);
  
  return (
    <>
    <Navbar />
    <HeroGradient />
    <Hero />
    <SubHeroSection />
    <AboutMe />
    <Skills />
    <Experience />
    <Projects />
    <ContactMe />
    <Footer />
    {/* <HelpSection /> */}
    </>
  );
}

export default App;