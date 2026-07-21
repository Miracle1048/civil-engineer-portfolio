import "../styles/home.css";
import { Download, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <div className="logo-icon">🏗️</div>

        <div>
          <h2>MIRACLE</h2>
          <span>GABRIEL</span>
        </div>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <button className="cv-btn">
        <Download size={18}/>
        Download CV
      </button>

      <button className="menu-btn">
        <Menu />
      </button>

    </nav>
  );
}