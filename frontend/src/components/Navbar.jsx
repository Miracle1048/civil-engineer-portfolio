import "../styles/home.css";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const handleActiveSection = () => {
    const scrollY = window.scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollY >= sectionTop &&
        scrollY < sectionTop + sectionHeight
      ) {
        setActiveSection(section.id);
      }
    });
  };

  window.addEventListener("scroll", handleActiveSection);

  return () =>
    window.removeEventListener("scroll", handleActiveSection);
}, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Overlay */}

      <div
        className={`nav-overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      />

      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

        {/* Logo */}

        <a href="#home" className="logo">

          <div className="logo-icon">
            <img src={"../public/images/favicon.ico.png"} alt="logo" />
          </div>

          <div>

            <h2>MIRACLE</h2>

            <span>GABRIEL</span>

          </div>

        </a>

        {/* Desktop Navigation */}

        <ul className="desktop-nav">

          <li>
            <a 
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            >
            Home
            </a>
            </li>

          <li>
           <a
             href="#about"
             className={activeSection === "about" ? "active" : ""}
           >
            About
            </a>
          </li>

          <li>
            <a 
             href="#experience"
             className={activeSection === "experience" ? "active" : ""}
            >
              Experience
            </a>
          </li>

          <li>
            <a 
            href="#education"
            className={activeSection === "education" ? "active" : ""}
            >
              Education
            </a>
          </li>

          <li>
            <a 
            href="#research"
            className={activeSection === "research" ? "active" : ""}
            >
              Research
            </a>
          </li>

          <li>
            <a
             href="#projects"
             className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>

          <li>
            <a href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Resume Button */}

        <a
          href="/cv.pdf"
          download
          className="cv-btn"
        >

          <Download size={18} />

          Download Resume

        </a>

        {/* Hamburger */}

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(true)}
        >

          <Menu size={28} />

        </button>

      </nav>

      {/* Mobile Sidebar */}

      <aside className={`mobile-nav ${menuOpen ? "open" : ""}`}>

        <button
          className="close-btn"
          onClick={closeMenu}
        >

          <X size={30} />

        </button>

        <ul>

          <li><a href="#home" onClick={closeMenu}>Home</a></li>

          <li><a href="#about" onClick={closeMenu}>About</a></li>

          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>

          <li><a href="#education" onClick={closeMenu}>Education</a></li>

          <li><a href="#research" onClick={closeMenu}>Research</a></li>

          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>

          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>

        </ul>

        <a
          href="/cv.pdf"
          download
          className="mobile-resume-btn"
        >

          <Download size={18} />

          Download Resume

        </a>

      </aside>
    </>
  );
}

















































// import "../styles/home.css";
// import { Download, Menu, X } from "lucide-react";
// import { useState } from "react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <nav className="navbar">

//       {/* Logo */}
//       <div className="logo">
//         <div className="logo-icon">🏗️</div>

//         <div>
//           <h2>MIRACLE</h2>
//           <span>GABRIEL</span>
//         </div>
//       </div>

//       {/* Navigation */}

//       <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

//         <li>
//           <a href="#home" onClick={closeMenu}>
//             Home
//           </a>
//         </li>

//         <li>
//           <a href="#about" onClick={closeMenu}>
//             About
//           </a>
//         </li>

//         <li>
//           <a href="#services" onClick={closeMenu}>
//             Services
//           </a>
//         </li>

//         <li>
//           <a href="#projects" onClick={closeMenu}>
//             Projects
//           </a>
//         </li>

//         <li>
//           <a href="#contact" onClick={closeMenu}>
//             Contact
//           </a>
//         </li>

//       </ul>

//       {/* Download CV */}

//       <a href="/cv.pdf" download className="cv-btn">
//         <Download size={18} />
//         Download CV
//       </a>

//       {/* Hamburger */}

//       <button
//         className="menu-btn"
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         {menuOpen ? <X size={28} /> : <Menu size={28} />}
//       </button>

//     </nav>
//   );
// }