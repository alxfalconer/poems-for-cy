import React, {useState} from 'react';
import PoemList from '../src/components/PoemList'
import twombly1 from "./images/twombly1.jpeg";
import twombly2 from "./images/twombly2.jpeg";
import twombly3 from "./images/twombly3.jpeg";
import twombly4 from "./images/twombly4.jpeg";
import twombly5 from "./images/twombly4.jpeg";

const images = (twombly1, twombly2, twombly3, twombly4, twombly5)

const Gallery = () => (
    <div>
        <br></br>
      <img id="1" className="twombly1" src={twombly1} alt="twombly1"/>
      <br></br>
      <PoemList id="1"/>
      <br></br>
      <img id="2" className="twombly2" src={twombly2} alt="twombly2"/>
      <br></br>
      <PoemList id="2"/>
      <br></br>
      <img id="3" className="twombly3" src={twombly3} alt="twombly3"/>
      <br></br>
      <PoemList id="3"/>
      <br></br>
      <img id="4" className="twombly4" src={twombly4} alt="twombly4"/>
      <br></br>
      <PoemList id="4"/>
      <br></br>
      <img id="5" className="twombly5" src={twombly5} alt="twombly5"/>
      <br></br>
      <PoemList id="5"/>
      <br></br>
    </div>
    );

  export default Gallery;