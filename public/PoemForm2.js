import React, { useState } from 'react';
const url = "http://127.0.0.1:9393/"

function PoemForm2(props) {
  const [input, setInput] = useState([]);

//   [props.edit ? props.edit.value : '']


  const getInput = e => {
    e.preventDefault();
    setInput(e.target.value);
    const text = { text: input};
    
    fetch(url + "poems", {
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
        
//   const deleteInput = (id) => {
//       fetch(url + `poems/${id}`, {
//           method: 'DELETE'
//       }).then((res) => {
//           res.json().then((res) => {
//           console.log(res)
//           getInput()
//           })
//         })
//     }

    const updateInput = (id) => {
    const edit = {
        text: input,
        id: input.id
    }
    fetch(url + `poems/${id}`, {
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(edit)
    }).then((res) => {
        res.json().then((res) => {
            console.log(res)
            setInput()
        })
    })
}



  return (
    <div>
    <form onSubmit={getInput} className='poem-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your line'
            value={input}
            onChange={(e)=>{ e.preventDefault();
                setInput(e.target.value)}}
            type='text'
            className='poem-input edit'
          />
          <button onClick={updateInput} className='poem-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Contribute a line'
            value={input}
            onChange={(e)=>{ e.preventDefault();
                setInput(e.target.value)}}
            name='text'
            className='poem-input'
          />
          <button onClick={getInput} className='poem-button'>
            Add
          </button>
        </>
      )}
    </form>
    </div>
  );
}

export default PoemForm2;