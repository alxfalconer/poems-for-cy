import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Detail = ({ match }) => {
    useEffect(() => {
      fetchData();
  },[]);

  const [details, setData] = useState({
    data: {},
  });

  const fetchData = async () => {
      fetch(`https://api.artic.edu/api/v1/artworks/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => {
      setData(data)
  })
}
  return (
    <div>
        <u>
        <h1 id="title">{details.data.title}</h1>
        </u>
        <h2 id="artist">{details.data.artist_title}</h2>
        <h3 id="origin">{details.data.place_of_origin}, {details.data.date_display}</h3>
        <h4 id="materials">{details.data.medium_display}</h4>
        <img id="image" src={`https://www.artic.edu/iiif/2/${details.data.image_id}/full/843,/0/default.jpg`} alt=""/> 
        <p></p>
        <Link to="/collection">Add to Collection</Link>
        <p></p>

    </div>
  );
}

export default Detail;