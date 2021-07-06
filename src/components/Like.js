import React, {useState} from 'react';
const url = "http://127.0.0.1:9393/"

const Like = () => {
    const [counter_count, setCounter] = useState(0)
    const newCounter = () => {
        return setCounter(counter_count+1);
    };

    const likeSubmit = (e) => {
        e.preventDefault();
      const data = { "count": (counter_count)};
      fetch(url + "likes", {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(data)
    }).then(() => {
      newCounter(data);
      });
    };

    return (
        <div>
            <form onSubmit={likeSubmit}
                
                required
                value={newCounter}
                name = 'count'
                onChange={(e) => newCounter(e.target.value)}>
                    <button onClick={likeSubmit}>Like: {counter_count}</button>
                </form>   
        </div>
    )
}

export default Like;