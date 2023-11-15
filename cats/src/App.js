import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from ".Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import CatList from "./Components/CatList";
import CatDetail from "./Components/CatDetail";
import CatForm from "./Components/CatForm";
import CatEditForm from "./Components/CatEditForm";
import CatDeleteForm from "./Components/CatDeleteForm";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cats" component={CatList} />
          <Route exact path="/cats/add" component={CatForm} />
          <Route exact path="/cats/:id" component={CatDetail} />
          <Route exact path="/cats/:id/edit" component={CatEditForm} />
          <Route exact path="/cats/:id/delete" component={CatDeleteForm} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;