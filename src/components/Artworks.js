import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
const url = 'https://api.artic.edu/api/v1/artworks?limit=50';

const Artworks = () => {

  useEffect(() => {
    fetchData();
  },[]);

  const [artworks, setData] = useState([]); 

  const fetchData = async () => {
    const rawData = await fetch(url)
    const artworks = await rawData.json()
    setData(artworks.data);
  }

  return (
    
    <div>
      <h1>Our Artworks:</h1>
      <h3>Click the pieces you'd like to learn more about.</h3>
      {artworks.map(data => (
        <h2>
          <Link to={`artworks/${data.id}`}>
          <img id="image" src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`} alt=""/>
          </Link>
          </h2>
      ))}
    </div>
  );
}

export default Artworks;