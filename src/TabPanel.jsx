import React, { useEffect, useRef, useState } from "react";
import { TABS } from "./tabs";
import Event from "./Event";
import { createPortal } from "react-dom";

const TabPanel = ({ tabKey, activeTab, parentRef }) => {
  const [hasRightScroll, setHasRightScroll] = useState(false);
  const observerRef = useRef();
  const [items, setItems] = useState(TABS[tabKey].items);

  function addItems(activeTab) {
    if (activeTab === "all" && items.length < 512) {
      setItems(items.concat(TABS.all.items));
    }
  }

  const onArrowCLick = () => {
    const scroller = parentRef.current.querySelector(
      ".section__panel:not(.section__panel_hidden)"
    );
    if (scroller) {
      scroller.scrollTo({
        left: scroller.scrollLeft + 400,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setHasRightScroll(
        (observerRef.current?.offsetWidth ?? 0) * items.length >
          parentRef.current.offsetWidth
      );
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setHasRightScroll(
      (observerRef.current?.offsetWidth ?? 0) * items.length >
        parentRef.current.offsetWidth
    );
  });

  // intersection for "infinite" scroll on "all" tab
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          addItems(activeTab);
        }
      });
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [activeTab, items]);

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
              ref={
                index === items.length - 1 && tabKey === activeTab
                  ? observerRef
                  : null
              }
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
