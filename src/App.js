import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./Components/Home";
import UpdateFriends from "./Components/UpdateFriends";
import AddFriends from "./Components/AddFriends";
import DeleteFriends from "./Components/DeleteFriends";
import DisplayFriends from "./Components/DisplayFriends";
import FriendManage from "./Components/FriendManage";

export default function App() {

  return (
  <BrowserRouter>
      <div className="hero">
        <Navbar>
        <Container>
          <Nav>
          <Nav.Link href="/Home">Home</Nav.Link>
          <Nav.Link href="/UpdateFriends">Update Friends</Nav.Link>
          <Nav.Link href="/AddFriends">Add Friends</Nav.Link>
          <Nav.Link href="/DeleteFriends">Delete Friends</Nav.Link>
          <Nav.Link href="/DisplayFriends">Display Friends</Nav.Link>
          <Nav.Link href="FriendManage">FriendManage</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
        <Switch>
          <Route path="/DisplayFriends" component={DisplayFriends} />
          <Route path="/UpdateFriends" component={UpdateFriends} />
          <Route path="/AddFriends" component={AddFriends} />
          <Route path="/DeleteFriends" component={DeleteFriends} />
          <Route path="/" component={Home} />
          <Route path="/FriendManage" component={FriendManage} />
        </Switch>
      </div>
  </BrowserRouter>
  );
};


