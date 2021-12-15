import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function AddFriend() {
  let history = useHistory();

  const [credentials, setCredentials] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    let token = localStorage.getItem("token");

    axios
      .post("http://localhost:9000/api/friends", credentials, {
        headers: {
          authorization: token,
        },
      })
      .then((resp) => {
        console.log(resp);

        history.push("/friendList");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <>
      <h2>Add Friend</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <label>
          Friend Name:
          <input name="name" onChange={handleChange} />
        </label>
        <label>
          Friend E-Mail:
          <input name="email" onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
