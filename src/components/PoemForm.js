import React, { useState, useEffect, useRef } from 'react';

function PoemForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='poem-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your poem'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='poem-input edit'
          />
          <button onClick={handleSubmit} className='poem-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a poem'
            value={input}
            onChange={handleChange}
            name='text'
            className='poem-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='poem-button'>
            Add poem
          </button>
        </>
      )}
    </form>
  );
}

export default PoemForm;