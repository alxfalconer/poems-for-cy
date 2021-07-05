import React, { useState } from 'react';
import PoemForm from './PoemForm';
import Like from './Like';

function Poem({ poems, readPoem, removePoem, updatePoem }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  
  const submitUpdate = value => {
    updatePoem(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };


  if (edit.id) {
    return <PoemForm edit={edit} onSubmit={submitUpdate} />;
  }

  return poems.map((poem, index) => (
    <div
      className={poem.isComplete ? 'poem-row complete' : 'poem-row'}
      key={index}
    >
      <div key={poem.id} onClick={() => readPoem(poem.id)}>
        {poem.text}
      </div>
      <div>
        <button
          onClick={() => removePoem(poem.id)}
          >Delete</button>
        <button
          onClick={() => setEdit({ id: poem.id, value: poem.text })}
          >Edit</button>
        <Like />
      </div>
    </div>
  ));
};

export default Poem;