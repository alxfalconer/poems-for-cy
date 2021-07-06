import React, { useState } from 'react';
import PoemForm from './PoemForm';
import User from './User';
import Poem from './Poem';

function PoemList() {
  const [poems, setPoems] = useState([]);

  const createPoem = poem => {
    const newPoems = [...poems, poem];
    setPoems(newPoems);
  };

  const readPoem = () => {
    let updatedPoems = poems.map(poem => {
      return poem;
    });
    setPoems(updatedPoems);
  };

  const updatePoem = (poemId, newValue) => {
    setPoems(prev => prev.map(poem => (poem.id ===poemId ? newValue : poem)));
  };

  const deletePoem = id => {
    const deleteArr = [...poems].filter(poem => poem.id !== id);
    setPoems(deleteArr);
  };

  return (
    <>
    <br></br>
    <User />
      <PoemForm onSubmit={createPoem} />
      <Poem
        poems={poems}
        readPoem={readPoem}
        updatePoem={updatePoem}
        deletePoem={deletePoem}
      />
    </>
  );
}

export default PoemList;