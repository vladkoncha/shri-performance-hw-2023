import React, { useCallback, useEffect, useRef, useState } from "react";
import { TABS } from "./tabs";
import Event from "./Event";
import { createPortal } from "react-dom";

const TabPanel = ({ tabKey, activeTab, parentRef }) => {
  const [hasRightScroll, setHasRightScroll] = useState(false);
  const observerRef = useRef();
  const [items, setItems] = useState(TABS[tabKey].items);

  const onArrowCLick = useCallback(() => {
    const scroller = parentRef.current.querySelector(
      ".section__panel:not(.section__panel_hidden)"
    );
    if (scroller) {
      scroller.scrollTo({
        left: scroller.scrollLeft + 400,
        behavior: "smooth",
      });
    }
  }, [parentRef]);

  useEffect(() => {
    setHasRightScroll(
      (observerRef.current?.offsetWidth ?? 0) * items.length >
        parentRef.current.offsetWidth
    );
  });

  return (
    <>
      <div
        key={tabKey}
        role="tabpanel"
        className={
          "section__panel" +
          (tabKey === activeTab ? "" : " section__panel_hidden")
        }
        aria-hidden={tabKey === activeTab ? "false" : "true"}
        id={`panel_${tabKey}`}
        aria-labelledby={`tab_${tabKey}`}
      >
        <ul className="section__panel-list">
          {items.map((item, index) => (
            <Event
              ref={index === 0 && tabKey === activeTab ? observerRef : null}
              key={index}
              {...item}
            />
          ))}
        </ul>
      </div>
      {hasRightScroll &&
        createPortal(
          <div className="section__arrow" onClick={onArrowCLick}></div>,
          document.body.querySelector(".section__panel-wrapper") ??
            document.body
        )}
    </>
  );
};

export default TabPanel;
