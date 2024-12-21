import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar_page.css";
import imglogo from "../images/Updated-Logo/COPY_Updated_Logo_B-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <Link to="/home" className="navbar-logo-link">
          <img src={imglogo} className="navbar-logo" alt="Logo" />
        </Link>

        <div className={`navbar-links ${isOpen ? "navbar-links-open" : ""}`}>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/raise">Raise</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="navbar-menu-icon" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
