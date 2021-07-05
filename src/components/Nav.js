import React from 'react';
import { Link } from 'react-router-dom';
import signature4 from './images/signature4.jpg'

const Nav = () => {

  const navStyle = {
    color: "white"
  };

  return ( 
    <nav>
      <ul className="nav-links">
         <a href="/">
      <h3><img className="signature4" src={signature4} alt="signature4"/></h3>
      </a>
      <Link style={navStyle} to="/gallery">
          <li>Gallery</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;