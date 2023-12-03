import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Cat from "./Components/Dog";
import CatList from "./Components/DogList";
import CatDetail from "./Components/DogDetail";
import CatForm from "./Components/Dog";
import CatEditForm from "./Components/DogEditForm";
import CatDeleteForm from "./Components/DogDeleteForm";
import NotFound from "./Components/NotFound";
import { BrowserRouter } from "react-router-dom";

export default function App() {

  return (
  <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cats" component={CatList} />
          <Route path="/cats/add" component={CatForm} exact />
          <Route path="/cats/:id" component={CatDetail} />
          <Route path="/cats/:id/edit" component={CatEditForm} />
          <Route path="/cats/:id/delete" component={CatDeleteForm} />
          <Route path="/" component={NotFound} />
        </Switch>
        <Footer />
      </div>
  </BrowserRouter>
  );
}


