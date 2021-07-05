import React, { useState, useEffect, useRef } from 'react';

function PoemForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });


  const handleChange = e => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setInput(e.target.value);
    const text = { text: input};
    
    fetch("http://127.0.0.1:9393/poems", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(text)
  }).then(() => {
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  })
}

  return (
    <div>
    <form onSubmit={handleSubmit} className='poem-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your line'
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
            placeholder='Contribute a line'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='poem-input'
          />
          <button onClick={handleSubmit} className='poem-button'>
            Add
          </button>
        </>
      )}
    </form>
    </div>
  );
}

export default PoemForm;