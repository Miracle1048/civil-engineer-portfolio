import "../styles/about.css";
import img0 from "../public/images/AboutPhoto.png";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-image">

          <img
            src={img0}
            alt="Civil Engineer"
          />

          <div className="experience-cardAbout">
            <h2>2+</h2>
            <p>Years of Professional Experience</p>
          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="about-content">

          <span className="section-tag">
            ABOUT ME
          </span>

          <h2>
            Engineering Solutions Built on
            <span> Quality, Innovation </span>
            and Sustainability.
          </h2>

          <p>
            I am a motivated Civil Engineering graduate with
            experience in construction support,
            infrastructure assessment, quality control,
            technical reporting and project coordination.
            My passion lies in developing innovative,
            sustainable infrastructure while embracing
            modern engineering technologies such as
            Building Information Modelling (BIM).
          </p>

          <div className="about-list">

            <div>
              <CheckCircle size={20} />
              Construction Management
            </div>

            <div>
              <CheckCircle size={20} />
              Quality Control & Assurance
            </div>

            <div>
              <CheckCircle size={20} />
              Infrastructure Assessment
            </div>

            <div>
              <CheckCircle size={20} />
              Project Coordination
            </div>

            <div>
              <CheckCircle size={20} />
              Technical Documentation
            </div>

            <div>
              <CheckCircle size={20} />
              BIM & Digital Construction
            </div>

          </div>

          <div className="stats">

            <div className="stat-box">
              <h3>10+</h3>
              <span>Projects</span>
            </div>

            <div className="stat-box">
              <h3>100%</h3>
              <span>Commitment</span>
            </div>

            <div className="stat-box">
              <h3>5+</h3>
              <span>Core Skills</span>
            </div>

          </div>

          <button className="about-btn">
            Read More
            <ArrowRight size={18} />
          </button>

        </div>

      </div>
    </section>
  );
}