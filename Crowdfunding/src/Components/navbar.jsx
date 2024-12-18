import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/navbar.css';
import imglogo from "../images/Updated-Logo/CROP_Updated_Logo_W-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <Link to="/" className="logo-link">
          <img src={imglogo} className="navlogo" alt="Logo" />
        </Link>
        
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/pages">Pages</Link>
          <Link to="/contact">Contact</Link>
          <button className="make-a-donate">Make a Donate</button>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
