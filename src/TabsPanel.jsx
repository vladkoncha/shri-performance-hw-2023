import React, { useRef } from "react";
import TabPanel from "./TabPanel";

function TabsPanel({ activeTab, tabs, tabsKeys }) {
  const ref = useRef();
  return (
      <div className="section__panel-wrapper" ref={ref}>
        {tabsKeys.map((key) => (
            <TabPanel
                key={key}
                parentRef={ref}
                activeTab={activeTab}
                tabKey={key}
                tabs={tabs}
            />
        ))}
      </div>
  );
}

export default TabsPanel;