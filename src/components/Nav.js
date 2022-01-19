import React from 'react';
import { Link } from 'react-router-dom';
import signature4 from './images/signature4.jpg'

const Nav = () => {
  const learnMore = () => {
    window.open("https://en.wikipedia.org/wiki/Cy_Twombly", '_blank')
}

  return ( 
    <div className="nav">
    <nav className="nav-links">
    
         <a href="/">
      <h3><img className="signature4" src={signature4} alt="signature4"/></h3>
      </a>
      <Link style={{color: "white"}} to="/gallery">
          <li>Gallery</li>
        </Link>
        <Link style={{color: "white"}} onClick={learnMore}>
          <li>Learn More</li>
        </Link>
     
    </nav>
    </div>
  );
}

export default Nav;