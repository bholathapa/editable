import React from "react";
import { inputStyle, itemStyle, textStyle } from "./constant";
import { keyCodes } from "./keycodes";

export const Cell = ({
  value,
  valueKey,
  onChange,
  idx,
  headLength,
  editIndex,
  component,
  componentProps,
  handleIndexChange,
}) => {
  const [text, setText] = React.useState(value ?? "");
  const wrapperRef = React.useRef(null);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      handleIndexChange(null);
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

  const handleKeyPressed = (event) => {
    if (event.keyCode === keyCodes.TAB || event.keyCode === keyCodes.ENTER) {
      event.preventDefault();
      event.stopPropagation();
      if (headLength !== editIndex + 1) handleIndexChange(editIndex + 1);
    }
  };

  if (editIndex === parseInt(idx)) {
    return (
      <div ref={wrapperRef} className="dataset" dataTag={idx} style={itemStyle}>
        <input
          ref={(ref) => ref && ref.focus()}
          className=""
          type="text"
          value={text}
          onFocus={(e) => e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
          style={inputStyle}
          onChange={(e) => {
            setText(e.target.value);
            onChange(e, valueKey);
          }}
          onKeyDown={(e) => handleKeyPressed(e)}
        />
      </div>
    );
  }

  if (editIndex !== parseInt(idx)) {
    const handleEditClick = (e) => {
      const tag = e.currentTarget.dataset.tag;
      handleIndexChange(parseInt(tag));
    };

    const Component = component || "div";

    return (
      <Component
        data-tag={idx}
        className="border-class fixed-cell dataset"
        onDoubleClick={(e) => handleEditClick(e)}
        {...componentProps}
      >
        <span style={textStyle}>{text}</span>
      </Component>
    );
  }
  return null;
};
