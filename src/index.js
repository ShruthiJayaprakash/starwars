import React from "react";
import ReactDOM from "react-dom";
import Logo from "./components/Logo";
import ButtonClick from "./components/ButtonClick";

import "./styles.css";

function App() {
  return (
    <div className="container-main">
      <div />
      <div className="container-wrapper">
        <Logo />;
        <ButtonClick />
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
