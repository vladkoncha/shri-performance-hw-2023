import React from "react";
import { TABS, TABS_KEYS } from "./tabs";

function TabList({ activeTab, setActiveTab }) {
  return (
    <ul role="tablist" className="section__tabs">
      {TABS_KEYS.map((key) => (
        <li
          key={key}
          role="tab"
          aria-selected={key === activeTab ? "true" : "false"}
          tabIndex={key === activeTab ? "0" : undefined}
          className={
            "section__tab" + (key === activeTab ? " section__tab_active" : "")
          }
          id={`tab_${key}`}
          aria-controls={`panel_${key}`}
          onClick={() => setActiveTab(key)}
        >
          {TABS[key].title}
        </li>
      ))}
    </ul>
  );
}

export default TabList;
