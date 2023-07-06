import "../reset.css";
import "../styles.css";
import Header from "../src/Header";
import Main from "../src/Main";
import React from "react";
import { TABS, TABS_KEYS } from "../src/tabs";

export default function Page() {
  const tabs = TABS;
  const tabsKeys = TABS_KEYS;
  const props = {
    tabs,
    tabsKeys,
  };

  return (
    <>
      <Header />
      <Main {...props} />
    </>
  );
}
