import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyLogo</div>
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
  );
};

export default Navbar;