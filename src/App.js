import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button";
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
          <Button variant="primary"><Nav.Link href="/Home"><h5 className="linkText">Home</h5></Nav.Link></Button>
          <Button variant="primary"><Nav.Link href="/UpdateFriends"><h5 className="linkText">Update Friends</h5></Nav.Link></Button>
          <Button variant="primary"><Nav.Link href="/AddFriends"><h5 className="linkText">Add Friends</h5></Nav.Link></Button>
          <Button variant="primary"><Nav.Link href="/DeleteFriends"><h5 className="linkText">Delete Friends</h5></Nav.Link></Button>
          <Button variant="primary"><Nav.Link href="/DisplayFriends"><h5 className="linkText">Display Friends</h5></Nav.Link></Button>
          <Button variant="primary"><Nav.Link href="FriendManage"><h5 className="linkText">FriendManage</h5></Nav.Link></Button>
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


