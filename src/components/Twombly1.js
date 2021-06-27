import React from 'react';
import twombly1 from "./images/twombly1.jpeg";
import PoemList from './PoemList';

const Twombly1 = () => (
    <div>
      <br></br>
      <img className="twombly1" src={twombly1} alt="twombly1"/>
      <br></br>
      <PoemList />
    </div>
  ); 

  export default Twombly1;