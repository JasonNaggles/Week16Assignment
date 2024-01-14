import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./Components/Home";
import FriendsDetailCRUD from "./Components/FriendsDetailCRUD";
import AddFriends from "./Components/AddFriends";
import DeleteFriends from "./Components/DeleteFriends";


export default function App() {

  return (
  <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav>
          <Nav.Link href="/Home">Home</Nav.Link>
          <Nav.Link href="/FriendsDetailCRUD">Friends</Nav.Link>
          <Nav.Link href="/AddFriends">Add Friends</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
        <Switch>
          <Route path="/FriendsDetailCRUD">
          <FriendsDetailCRUD />
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


