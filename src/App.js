import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Dogs from "./Components/Dogs";
import DogDetail from "./Components/DogDetail";
import DogEditForm from "./Components/DogEditForm";
import DogDeleteForm from "./Components/DogDeleteForm";
import NotFound from "./Components/NotFound";


export default function App() {

  return (
  <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/dogs/add" component={Dogs} />
          <Route path="/dogs/dog" component={DogDetail} />
          <Route path="/dogs/edit" component={DogEditForm} />
          <Route path="/dogs/delete" component={DogDeleteForm} />
          <Route path="/" component={NotFound} />
        </Switch>
        <Footer />
      </div>
  </BrowserRouter>
  );
};


