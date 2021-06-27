import React from 'react';
import { Link } from 'react-router-dom';
// import collector from "./collector.png"

const Nav = () => {

  const navStyle = {
    color: "white"
  };

  return ( 
    <nav>
      {/* <a href="/">
      <h3><img className="collector" src={collector} alt="collector"/></h3>
      </a> */}
      <ul className="nav-links">
      <Link style={navStyle} to="/twombly1">
          <li>1</li>
        </Link>
        <Link style={navStyle} to="/twombly2">
          <li>2</li>
        </Link>
        <Link style={navStyle} to="/twombly3">
          <li>3</li>
        </Link>
        <Link style={navStyle} to="/twombly4">
          <li>4</li>
        </Link>
        <Link style={navStyle} to="/twombly5">
          <li>5</li>
        </Link>
        {/* <Link style={navStyle} to="/premise">
          <li>Premise</li>
        </Link> */}
      </ul>
    </nav>
  );
}

export default Nav;