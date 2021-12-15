import React from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

export default function Logout() {
  let history = useHistory();
  const handleLogout = () => {
    let token = localStorage.getItem("token");
    axios
      .post(
        "http://localhost:9000/api/logout",
        {},
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.removeItem("token");
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h2>Logout?</h2>
      <button onClick={handleLogout}>Logout</button>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Go Back
      </button>
    </>
  );
}
