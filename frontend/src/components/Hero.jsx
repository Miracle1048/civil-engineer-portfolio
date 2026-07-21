import "../styles/home.css";
import { Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="tag">
          CIVIL ENGINEER
        </p>

        <h1>
          Building Today,
          <br />
          Shaping <span>Tomorrow.</span>
        </h1>

        <p className="hero-text">
          Motivated Civil Engineering professional with
          experience in construction support,
          infrastructure assessment, quality control,
          technical reporting and project coordination.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            <Download size={18}/>
            Download CV
          </button>

          <button className="secondary-btn">
            <Mail size={18}/>
            Contact Me
          </button>

        </div>

      </div>

      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
          alt="Civil Engineer"
        />
      </div>

    </section>
  );
}