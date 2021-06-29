import React, { useState } from 'react';

function PoemForm(props) {
  const [input, setInput] = useState('');


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