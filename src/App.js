import React from "react";
import Menu from "./Menu";
import Mounting from "./Mounting";
import Unmounting from "./Unmounting";
import Updating from "./Updating";
import "./Menucss.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="Heading3">
        <h1 className="Heading1">Component Life Cycle</h1>
        <Menu />
        <Switch>
          <div className="Content">
            <Route path="/mounting" component={Mounting} />
            <Route path="/updating" component={Updating} />
            <Route path="/unmounting" component={Unmounting} />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
