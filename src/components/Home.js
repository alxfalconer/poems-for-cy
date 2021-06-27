import React from 'react';
import twomblyhome from "./images/twomblyhome.jpg"

const Home = () => (
    <div>
        <a href="/about">
        <h3><img className="twomblyhome" src={twomblyhome} alt="twomblyhome"/></h3>
        </a>
    </div>
  ); 

  export default Home;
  