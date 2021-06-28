import React, {useState} from 'react';

const Like = () => {
    const [counter, setCounter] = useState(0)
    const newCounter = () => {
        return setCounter(counter+1);
    };

    const likeSubmit = (e) => {
        e.preventDefault();
      const data = { "likes": (counter+1)};
      fetch("http://127.0.0.1:9393/poems", {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(data)
    }).then(() => {
      newCounter('');
      });
    };

    return (
        <div>
            <button onClick={likeSubmit}>Like: {counter}</button>
        </div>
    )

}

export default Like;