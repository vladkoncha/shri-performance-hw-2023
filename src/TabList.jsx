import React from "react";

function TabList({ activeTab, setActiveTab, tabs, tabsKeys }) {
  return (
    <ul role="tablist" className="section__tabs">
      {tabsKeys.map((key) => (
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
          {tabs[key].title}
        </li>
      ))}
    </ul>
  );
}

export default TabList;
