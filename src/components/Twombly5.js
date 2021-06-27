import React from 'react';
import twombly5 from "./images/twombly5.jpeg";
import PoemList from './PoemList';

const Twombly5 = () => (
    <div>
      <br></br>
      <img className="twombly5" src={twombly5} alt="twombly5"/>
      <br></br>
      <PoemList />
    </div>
  ); 

  export default Twombly5;