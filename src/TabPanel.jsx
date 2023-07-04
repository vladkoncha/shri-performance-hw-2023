import React from "react";
import { TABS, TABS_KEYS } from "./tabs";
import { useEffect, useRef, useState } from "react";
import Event from "./Event";

function TabPanel({ activeTab }) {
  const [hasRightScroll, setHasRightScroll] = useState(false);
  const ref = useRef();

  let widths = 0;
  const onSize = (size) => {
    widths += size;
  };

  useEffect(() => {
    console.log(widths);
    const newHasRightScroll = widths > ref.current.offsetWidth;
    if (newHasRightScroll !== hasRightScroll) {
      setHasRightScroll(newHasRightScroll);
    }
  });

  const onArrowCLick = () => {
    const scroller = ref.current.querySelector(
      ".section__panel:not(.section__panel_hidden)"
    );
    if (scroller) {
      scroller.scrollTo({
        left: scroller.scrollLeft + 400,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="section__panel-wrapper" ref={ref}>
      {TABS_KEYS.map((key) => (
        <div
          key={key}
          role="tabpanel"
          className={
            "section__panel" +
            (key === activeTab ? "" : " section__panel_hidden")
          }
          aria-hidden={key === activeTab ? "false" : "true"}
          id={`panel_${key}`}
          aria-labelledby={`tab_${key}`}
        >
          <ul className="section__panel-list">
            {TABS[key].items.map((item, index) => (
              <Event key={index} {...item} onSize={onSize} />
            ))}
          </ul>
        </div>
      ))}
      {hasRightScroll && (
        <div className="section__arrow" onClick={onArrowCLick}></div>
      )}
    </div>
  );
}

export default TabPanel;
