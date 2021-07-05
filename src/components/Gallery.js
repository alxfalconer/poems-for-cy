import React, {useState, useEffect} from 'react';
import PoemList from './PoemList'

function Gallery() {

  useEffect(() => {
      fetchData();
  },[]);

  const [artworks, setData] = useState([]); 

  const fetchData = async () => {
    const data = await fetch('https://api.artic.edu/api/v1/artworks?limit=10')
    const artworks = await data.json()
    setData(artworks.data);
    
  }

  const getArt = () => {
    const art = { "painting_id": artworks.id};
    fetch("http://127.0.0.1:9393/paintings", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(art)
    .then(res => res.json())
  })
}

return (
    <div>
        <br></br>
        <h1 style={{fontSize: "20px"}}>Choose a piece that inspires you</h1>
        <h1 style={{fontSize: "20px"}}>and contribute a line of poetry.</h1>
        <br></br>
      {artworks.map(data => (
        <h2 getArt={getArt} className="artworks" key={data.id}>
          <img id="image" src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`} alt=""/>
          <PoemList />
          </h2>
      ))}
    </div>
  );
}

  export default Gallery;