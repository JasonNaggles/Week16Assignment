import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Dog from "./Components/Dog";
import DogDetail from "./Components/DogDetail";
import DogEditForm from "./Components/DogEditForm";
import DogDeleteForm from "./Components/DogDeleteForm";
import NotFound from "./Components/NotFound";
import { BrowserRouter } from "react-router-dom";


export default function App() {

  return (
  <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/dogs/add" component={Dog} />
          <Route path="/dogs/:id" component={DogDetail} />
          <Route path="/dogs/:id/edit" component={DogEditForm} />
          <Route path="/dogs/:id/delete" component={DogDeleteForm} />
          <Route path="/" component={NotFound} />
        </Switch>
        <Footer />
      </div>
  </BrowserRouter>
  );
};


