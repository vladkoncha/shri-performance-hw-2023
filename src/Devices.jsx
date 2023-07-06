"use client";

import React from "react";
import TabList from "./TabList";
import TabsPanel from "./TabsPanel";
import { useEffect, useRef, useState } from "react";

function Devices({ tabs, tabsKeys }) {
  const [activeTab, setActiveTab] = useState("all");
  const initedRef = useRef(false);

  useEffect(() => {
    if (!activeTab && !initedRef.current) {
      initedRef.current = true;
      setActiveTab(new URLSearchParams(location.search).get("tab") || "all");
    }
  });

  const onSelectInput = (event) => {
    setActiveTab(event.target.value);
  };

  return (
    <section className="section main__devices">
      <div className="section__title">
        <h2 className="section__title-header">Избранные устройства</h2>
        <select
          className="section__select"
          defaultValue="all"
          onInput={onSelectInput}
        >
          {tabsKeys.map((key) => (
            <option key={key} value={key}>
              {tabs[key].title}
            </option>
          ))}
        </select>
        <TabList
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
          tabsKeys={tabsKeys}
        />
      </div>
      <TabsPanel activeTab={activeTab} tabs={tabs} tabsKeys={tabsKeys} />
    </section>
  );
}

export default Devices;
