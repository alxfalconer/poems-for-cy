import React, {useState} from 'react';

const Like = () => {
    const [counter_count, setCounter] = useState(0)
    const newCounter = () => {
        return setCounter(counter_count+1);
    };

    const likeSubmit = (e) => {
        e.preventDefault();
      const data = { "count": (counter_count+1)};
      fetch("http://127.0.0.1:9393/likes", {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(data)
    }).then(() => {
      newCounter('');
      });
    };

    return (
        <div>
            <form onSubmit={likeSubmit}
                
                required
                value={counter_count+1}
                onChange={(e) => newCounter(e.target.value)}>
                    <button onClick={likeSubmit}>Like: {counter_count}</button>
                </form>
              
        </div>
    )

}

export default Like;