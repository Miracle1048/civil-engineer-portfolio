import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPreview from "./components/AboutPreview";
import Services from "./components/Services";
import FeaturedProjects from "./components/FeaturedProjects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Leadership from "./components/Leadership";
import Research from "./components/Research";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutPreview />
        <Services />
        <FeaturedProjects />
        <Skills  />
        <Experience />
        <Education />
        <Leadership />
        <Research />
        <Contact />
        <Footer />
      </main>
    
    </>
  );
}

export default App;