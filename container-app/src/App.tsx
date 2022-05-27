import React from "react";
import ReactDOM from "react-dom";
import AreaExclusiva from "remote/AreaExclusiva";
import { AppContextProvider } from "./AppContext";
import "./index.css";

const TestandoComponent = () => {
  return <p>Olá mundo!</p>;
};

const App = () => (
  <AppContextProvider>
    <div className="container">
      <AreaExclusiva />
      <TestandoComponent />
    </div>
  </AppContextProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
