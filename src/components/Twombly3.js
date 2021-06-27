import React from 'react';
import twombly3 from "./images/twombly3.jpeg";
import PoemList from './PoemList';

const Twombly3 = () => (
    <div>
      <br></br>
      <img className="twombly3" src={twombly3} alt="twombly3"/>
      <br></br>
      <PoemList />
    </div>
  ); 

  export default Twombly3;