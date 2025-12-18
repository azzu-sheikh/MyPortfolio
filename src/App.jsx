import Navbar from "./components/Navbar/Navbar"; // Corrected path if needed
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Certifications from "./components/Certifications";
import Contact from "./components/ContactUs/ContactUs"; // Fixed path
import Footer from "./components/Footer/Footer";
import Features from "./components/Features/Features"; // Added

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Experience />
      <Projects />
      <Research />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}