import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Dogs from "./Components/DogAdd";
import DogDetail from "./Components/DogDetail";
import DogEditForm from "./Components/DogEditForm";
import DogDeleteForm from "./Components/DogDeleteForm";
import NotFound from "./Components/NotFound";
import DogAdd from "./Components/DogAdd";


export default function App() {

  return (
  <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={DogAdd} />
          <Route path="/:name" component={DogDetail} />
          <Route path="/edit" component={DogEditForm} />
          <Route path="/delete" component={DogDeleteForm} />
          <Route path="/notfound" component={NotFound} />
        </Switch>
        <Footer />
      </div>
  </BrowserRouter>
  );
};


