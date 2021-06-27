import React, { useState } from 'react';
import PoemForm from './PoemForm';
import Poem from './Poem';

function PoemList() {
  const [poems, setPoems] = useState([]);

  const addPoem = poem => {
    if (!poem.text || /^\s*$/.test(poem.text)) {
      return;
    }

    const newPoems = [poem, ...poems];

    setPoems(newPoems);
    console.log(...poems);
  };

  const updatePoem = (poemId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }

    setPoems(prev => prev.map(item => (item.id ===poemId ? newValue : item)));
  };

  const removePoem = id => {
    const removedArr = [...poems].filter(poem => poem.id !== id);

    setPoems(removedArr);
  };

  const completePoem = id => {
    let updatedPoems = poems.map(poem => {
      if (poem.id === id) {
        poem.isComplete = !poem.isComplete;
      }
      return poem;
    });
    setPoems(updatedPoems);
  };

  return (
    <>
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