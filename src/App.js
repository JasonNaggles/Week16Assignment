import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./Components/Home";
import UpdateFriends from "./Components/UpdateFriends";
import AddFriends from "./Components/AddFriends";
import DeleteFriends from "./Components/DeleteFriends";
import DisplayFriends from "./Components/DisplayFriends";




export default function App() {

  return (
  <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav>
          <Nav.Link href="/Home">Home</Nav.Link>
          <Nav.Link href="/UpdateFriends">Update Friends</Nav.Link>
          <Nav.Link href="/AddFriends">Add Friends</Nav.Link>
          <Nav.Link href="/DeleteFriends">Delete Friends</Nav.Link>
          <Nav.Link href="/DisplayFriends">Display Friends</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
        <Switch>
          <Route path="/DisplayFriends">
            <DisplayFriends />
          </Route>
          <Route path="/UpdateFriends">
          <UpdateFriends />
          </Route>
          <Route path="/AddFriends">
          <AddFriends />
          </Route>
          <Route path="/DeleteFriends">
          <DeleteFriends />
          </Route>
          <Route path="/">
          <Home />
          </Route>
        </Switch>
      </div>
  </BrowserRouter>
  );
};


