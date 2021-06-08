import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Artworks = () => {
    const [artworks, setData] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3004/data')
      .then(res => {
          return res.json();
      })
      .then(data => {
          setData(data);
      });
  }, []);

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