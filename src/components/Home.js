import React from 'react';
import phototwombly from "./images/phototwombly.jpg"

const Home = () => (
    <div>
        <h1>Welcome to...</h1>
        <a href="/premise">
        <h3><img className="clickme" src={phototwombly} alt="clickme"/></h3>
        </a>
    </div>
  ); 

  export default Home;
  