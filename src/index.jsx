import React from "react";
import ReactDOM from "react-dom/client";
import "../reset.css";
import "../fonts.css";
import "../styles.css";
import Header from "./Header";
import Main from "./Main";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <>
    <Header />
    <Main />
  </>
);
