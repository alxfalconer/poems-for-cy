import React, { useState } from 'react';
import PoemForm from './PoemForm';
import Like from './Like';

const Poem = ({ poems, completePoem, removePoem, updatePoem }) => {
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
      <div key={poem.id} onClick={() => completePoem(poem.id)}>
        {poem.text}
      </div>
      <div className='icons'>
        <button
          onClick={() => removePoem(poem.id)}
          className='delete-icon'>Delete</button>
        <button
          onClick={() => setEdit({ id: poem.id, value: poem.text })}
          className='edit-icon'>Edit</button>
        <Like />
      </div>
    </div>
  ));
};

export default Poem;