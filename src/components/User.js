import React, { useState } from "react";
import {useHistory} from "react-router-dom";

function User() {
  const [username, setUsername] = useState("");
  const newUser = useHistory();

  const User = () => {
    const data = { username: username};
    fetch("http://localhost:3001/auth/login", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
  }).then(() => {
      newUser.push(``)

    });
  };
  return (
    <div className="loginContainer">
      <label>Username:</label>
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />

      <button onClick={User}> Add username </button>
    </div>
  );
}

export default User