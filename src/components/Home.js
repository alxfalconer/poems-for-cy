import React from 'react';
import clickme from "./clickme.jpg"

const Home = () => (
    <div>
        <h1>Welcome to...</h1>
        <a href="/premise">
        <h3><img className="clickme" src={clickme} alt="clickme"/></h3>
        </a>
    </div>
  ); 

  export default Home;
  