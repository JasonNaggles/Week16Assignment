import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import CatList from "./components/CatList";
import CatDetail from "./components/CatDetail";
import CatForm from "./components/CatForm";
import CatEditForm from "./components/CatEditForm";
import CatDeleteForm from "./components/CatDeleteForm";
import NotFound from "./components/NotFound";

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