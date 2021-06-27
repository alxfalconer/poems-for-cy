import React from 'react';
import { Link } from 'react-router-dom';
import money from "./money.gif"

const Premise = () => (
    <div>
      <h1>IT HAPPENED.</h1>
      <h4>You put your life savings into crypto.</h4>
      <h4>The market took off. You're filthy rich.</h4>
      <img src={money} alt=""/>
      <h4>You left your career in the custodial arts to become a <em>fine</em> art collector.</h4>
      <h5>(Art is an appreciating asset; you're a smart investor.)</h5>
      <h4>The Art Institute of Chicago opens its doors to you, Moneybags McGee.</h4>
      <h4>Come in. Peruse the gallery. Submit works if you please.</h4>
      <Link to="/artworks">Step in to the gallery</Link>
      <p></p>
    </div>
  ); 

  export default Premise;
  