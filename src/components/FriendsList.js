import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FriendsList() {
  const [friendsList, setFriendsList] = useState([]);
  useEffect(() => {
    let token = localStorage.getItem("token");
    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          authorization: token,
        },
      })
      .then((resp) => {
        let data = resp.data;
        console.log(data);

        setFriendsList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h2>Friends List</h2>
      {friendsList.map((friend, i) => {
        return (
          <div
            key={i}
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <p>{friend.name}</p>
            <p>{friend.email}</p>
          </div>
        );
      })}
    </div>
  );
}
