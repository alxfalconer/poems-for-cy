import React from 'react';
import twomblyhome from "./images/twomblyhome.jpg"

const Home = () => (
    <div>
        <a href="/gallery">
        <h3><img className="twomblyhome" src={twomblyhome} alt="twomblyhome"/></h3>
        </a>
        <div id="viewerContainer">
        <p>Abstract painter Cy Twombly (1928-2011) drew on poetry to inspire his chaotic works, gathering lines from disparate sources to provide foundations for his abstractions.</p>
        <p>Here on POEMS FOR CY we ask users to do the opposite; to create poetry by drawing inspiration from artworks themselves.</p>
        <p>Users can build on eachother's lines, creating a confluence of varying perspectives and styles.</p>
        <p>The artworks have been pulled from the Art Institute of Chicago and presented without context in order to ensure complete creative freedom for our poets.</p>
        <p>Click the image above to enter the gallery and get started.</p>
        </div>
    </div>
  ); 

  export default Home;
  