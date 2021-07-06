import React, { useState } from "react";
const url = "http://127.0.0.1:9393/"

function User() {
  const [username_name, setUsername] = useState('');

  const userSubmit = (e) => {
      e.preventDefault();
    const data = { "name": username_name};
    fetch(url + "usernames", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
  }).then(() => {
    setUsername('');
    });
  };
  return (
    <div className="loginContainer">
      <form onSubmit={userSubmit}>
                <input placeholder="Enter your username"
                type="text"
                required
                value={username_name}
                onChange={(e) => setUsername(e.target.value)}/>
                <button onClick={userSubmit}>Submit</button>
                </form>
    </div>
  );
}

export default User