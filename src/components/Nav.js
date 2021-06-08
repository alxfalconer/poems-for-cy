import React from 'react';
import { Link } from 'react-router-dom';
import collector from "./collector.png"

const Nav = () => {

  const navStyle = {
    color: "white"
  };

  return ( 
    <nav>
      <a href="/">
      <h3><img className="collector" src={collector} alt="collector"/></h3>
      </a>
      <ul className="nav-links">
        <Link style={navStyle} to="/premise">
          <li>Premise</li>
        </Link>
        <Link style={navStyle} to="/artworks">
        <li>Our Artworks</li>
        </Link>
        <Link style={navStyle} to="/collection">
        <li>Your Collection</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;