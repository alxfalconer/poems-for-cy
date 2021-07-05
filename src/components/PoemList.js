import React, { useState } from 'react';
import PoemForm from './PoemForm';
import User from './User';
import Poem from './Poem';


function PoemList() {
  const [poems, setPoems] = useState([]);

  const addPoem = poem => {
    const newPoems = [...poems, poem];
    setPoems(newPoems);
  };

  const updatePoem = (poemId, newValue) => {
    setPoems(prev => prev.map(poem => (poem.id ===poemId ? newValue : poem)));
  };

  const removePoem = id => {
    const removedArr = [...poems].filter(poem => poem.id !== id);
    setPoems(removedArr);
  };

  const completePoem = id => {
    let updatedPoems = poems.map(poem => {
      return poem;
    });
    setPoems(updatedPoems);
  };

  return (
    <>
    <br></br>
    <User />
      <PoemForm onSubmit={addPoem} />
      <Poem
        poems={poems}
        completePoem={completePoem}
        removePoem={removePoem}
        updatePoem={updatePoem}
      />
    </>
  );
}

export default PoemList;