import React from "react";
import { inputStyle, itemStyle, textStyle } from "./constant";

export const Cell = ({ value, valueKey, onChange, component, componentProps }) => {
  const [mode, setMode] = React.useState("read");
  const [text, setText] = React.useState(value ?? "");
  const wrapperRef = React.useRef(null);

  const handleClickOutside = (event, textValue) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setMode("read");
    }
  };

  React.useEffect(() => {
    // Bind the event listener
    document?.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document?.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  if (mode === "edit") {
    return (
      <div ref={wrapperRef} style={itemStyle}>
        <input
          className=""
          type="text"
          value={text}
          style={inputStyle}
          onChange={(e) => {
            setText(e.target.value);
            onChange(e, valueKey);
          }}
        />
      </div>
    );
  }
  if (mode === "read") {
    const handleEditClick = () => {
      setMode("edit");
    };

    const Component = component || "div";

    return (
      <Component className="border-class fixed-cell" onDoubleClick={() => handleEditClick()} {...componentProps}>
        <span style={textStyle}>{text}</span>
      </Component>
    );
  }
  return null;
};
