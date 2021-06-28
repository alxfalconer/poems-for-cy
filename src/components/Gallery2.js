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
    console.log(artworks.data);
    setData(artworks.data);
  }

return (
    <div>
      {artworks.map(data => (
        <h2 className="artworks" key={data.id}>
          <img id="image" src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`} alt=""/>
          </h2>
      ))}
      <PoemList />
    </div>
  );
}

  export default Gallery;