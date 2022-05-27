import React from "react";
import ReactDOM from "react-dom";
import AreaExclusiva from "./AreaExclusiva";

import "./index.css";

const App = () => (
  <div className="container">
    <AreaExclusiva />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
