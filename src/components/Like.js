import React, {useState} from 'react';

const Like = () => {
    const [counter, setCounter] = useState(0)
    const newCounter = () => {
        return setCounter(counter+1);
    };

    return (
        <div>
            <button onClick={newCounter}>Like: {counter}</button>
        </div>
    )

}

export default Like;