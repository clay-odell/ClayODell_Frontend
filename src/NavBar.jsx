import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
      hamburger.style.display = isOpen ? 'flex' : 'none';
    }
  };

  return (
    <nav>
      <div id="brand">
        <Link to="/">
          <img src="/CODell_Logo.png" alt="Clay O'Dell's Logo" />
        </Link>
      </div>
      <div id="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul id="menu" className={isOpen ? "open" : ""}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/experience">Resumé/CV</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
