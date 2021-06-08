import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';


const Detail = ({ match }) => {
    const [details, setData] = useState({
    data: {},
  }); 

  useEffect(() => {
    fetch(`http://localhost:3004/data/${match.params.id}`)
    .then(res => {
        return res.json();
    })
    .then(data => {
        setData(data);
    });
}, []);

 
  return (
    <div>
        <u>
       <h1 id="title">{details.title}</h1>
        </u>
        <h2 id="artist">{details.artist_title}</h2>
        <h3 id="origin">{details.place_of_origin}, {details.date_display}</h3>
        <h4 id="materials">{details.medium_display}</h4>
        <img id="image" src={`https://www.artic.edu/iiif/2/${details.image_id}/full/843,/0/default.jpg`} alt=""/> 
        <p></p>
        <Link to="/collection">Add to Collection</Link>
        <p></p>

    </div>
  );
}

export default Detail;