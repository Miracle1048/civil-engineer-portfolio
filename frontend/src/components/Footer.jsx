import "../styles/footer.css";

import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Download,
} from "lucide-react";

import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      {/* Decorative Background */}

      <div className="footer-grid"></div>

      <div className="footer-container">

        {/* ===========================================
            BRAND SECTION
        =========================================== */}

        <div className="footer-brand">

          <div className="footer-logo">

            <span>GMJ</span>

          </div>

          <h2>

            Gabriel Miracle Junior

          </h2>

          <p>

            Building sustainable infrastructure through
            engineering excellence, digital construction,
            research, and innovative project delivery.

          </p>

          <div className="footer-social">

            <a
              href="mailto:gabriel.miracle.junior@gmail.com"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/miracle-gabriel-junior"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              style={{ cursor: "pointer" }}
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://github.com/Miracle1048"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ cursor: "pointer" }}
            >
              <FaGithub size={20} />
            </a>

          </div>

        </div>

        {/* ===========================================
            QUICK LINKS
        =========================================== */}

        <div className="footer-column">

          <h3>

            Quick Links

          </h3>

          <ul>

            <li><a href="#home">Home</a></li>

            <li><a href="#about">About</a></li>

            <li><a href="#services">Services</a></li>

            <li><a href="#projects">Projects</a></li>

            <li><a href="#research">Research</a></li>

            <li><a href="#contact">Contact</a></li>

          </ul>

        </div>

        {/* ===========================================
            SPECIALIZATIONS
        =========================================== */}

        <div className="footer-column">

          <h3>

            Specializations

          </h3>

          <ul>

            <li>Civil Engineering</li>

            <li>Project Management</li>

            <li>BIM & Digital Construction</li>

            <li>Research & Innovation</li>

            <li>Sustainable Infrastructure</li>

            <li>Technical Documentation</li>

          </ul>

        </div>

        {/* ===========================================
            CONTACT
        =========================================== */}

        <div className="footer-column">

          <h3>

            Contact

          </h3>

          <div className="footer-contact">

            <div>

              <Mail size={18} />

              <span>

                gabriel.miracle.junior@gmail.com

              </span>

            </div>

            <div>

              <Phone size={18} />

              <span>

                +234 903 806 2683

              </span>

            </div>

            <div>

              <MapPin size={18} />

              <span>

                Ibadan, Oyo State, Nigeria

              </span>

            </div>

          </div>

          <div className="footer-buttons">

            <a
              href="/cv.pdf"
              download
              className="footer-btn"
            >

              <Download size={18} />

              Resume

            </a>

          </div>

        </div>

      </div>

      {/* ===========================================
          FOOTER BOTTOM
      =========================================== */}

      <div className="footer-bottom">

        <p>

          © {year} Gabriel Miracle Junior.
          All Rights Reserved.

        </p>

        <button
          onClick={scrollTop}
          className="back-top"
        >

          <ArrowUp size={18} />

        </button>

      </div>

    </footer>
  );
}