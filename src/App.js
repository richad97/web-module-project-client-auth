import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import Logout from "./components/Logout";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/">Login</Link>
        <Link to="/friendList">Friends List</Link>
        <Link to="/friends/add">Add Friend</Link>
        <Link to="/logout">Log Out</Link>
      </nav>

      <h2>Client Auth Project</h2>

      <Route exact path="/">
        <Login />
      </Route>

      <PrivateRoute exact path="/friendList" component={FriendsList} />
      <PrivateRoute exact path="/friends/add" component={AddFriend} />
      <PrivateRoute exact path="/logout" component={Logout} />
    </div>
  );
}

export default App;
