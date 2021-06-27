import React from 'react';
import twombly2 from "./images/twombly2.jpeg";
import PoemList from './PoemList';

const Twombly2 = () => (
    <div>
      <br></br>
      <img className="twombly2" src={twombly2} alt="twombly2"/>
      <br></br>
      <PoemList />
    </div>
  ); 

  export default Twombly2;