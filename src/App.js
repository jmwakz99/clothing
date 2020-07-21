import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import SHOP from "./pages/shop/shop.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={SHOP} />
      </Switch>
    </div>
  );
}

export default App;
