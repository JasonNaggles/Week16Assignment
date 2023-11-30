import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import CatRandomFeed from "./Components/CatRandomFeed";
import CatList from "./Components/CatList";
import CatDetail from "./Components/CatDetail";
import CatForm from "./Components/CatForm";
import CatEditForm from "./Components/CatEditForm";
import CatDeleteForm from "./Components/CatDeleteForm";
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
          <Route path="/cats/add" component={CatForm} />
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


