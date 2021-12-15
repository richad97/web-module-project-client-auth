import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

export default function Login() {
  let history = useHistory();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9000/api/login", credentials)
      .then((resp) => {
        console.log(resp);

        let token = resp.data.token;

        localStorage.setItem("token", token);
        history.push("/friendList");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <label>
        Username:
        <input name="username" onChange={handleChange} />
      </label>
      <label>
        Password:
        <input name="password" onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
