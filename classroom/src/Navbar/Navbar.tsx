import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="" height={75} width={200} />
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
      <div className="navbar-links">
        <NavLink to="/">
          <span>Home</span>
        </NavLink>
        <NavLink to="/about">
          <span>About</span>
        </NavLink>
        <NavLink to="/service">
          <span>Service</span>
        </NavLink>
        <NavLink to="/contact">
          <span>Contact</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
