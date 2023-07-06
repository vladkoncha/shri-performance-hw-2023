import React, { useRef } from "react";
import { TABS_KEYS } from "./tabs";
import TabPanel from "./TabPanel";

function TabsPanel({ activeTab }) {
  const ref = useRef();
  return (
      <div className="section__panel-wrapper" ref={ref}>
        {TABS_KEYS.map((key) => (
            <TabPanel
                key={key}
                parentRef={ref}
                activeTab={activeTab}
                tabKey={key}
            />
        ))}
      </div>
  );
}

export default TabsPanel;