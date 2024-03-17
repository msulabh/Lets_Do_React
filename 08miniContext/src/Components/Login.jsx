import React, { useContext, useState } from "react";
import userContext from "../Context/UserContext";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, password });
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="username"
        ></input>
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        ></input>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
