"use client";

import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Event = forwardRef((props, ref) => {
  const eventRef = useRef();

  useImperativeHandle(ref, () => eventRef.current);

  return (
    <li ref={eventRef} className={"event" + (props.slim ? " event_slim" : "")}>
      <button className="event__button">
        <span
          className={`event__icon event__icon_${props.icon}`}
          role="img"
          aria-label={props.iconLabel}
        ></span>
        <h4 className="event__title">{props.title}</h4>
        {props.subtitle && (
          <span className="event__subtitle">{props.subtitle}</span>
        )}
      </button>
    </li>
  );
});

export default React.memo(Event);
