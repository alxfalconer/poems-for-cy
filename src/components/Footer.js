import React from 'react';
import logo from "./images/logo.png";

const Footer = () => {
    
  return ( 
    <footer className="footer">
      <div>
      <h4>Brought to you by A. Falconer and...</h4>
      <a href="https://www.artic.edu/">
      <h3><img className="logo" src={logo} alt="logo"/></h3>
      </a>
      </div>
    </footer>
  );
}

export default Footer;