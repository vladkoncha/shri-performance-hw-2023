import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
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
