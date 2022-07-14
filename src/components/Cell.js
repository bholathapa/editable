import React from "react";

const itemStyle = {
    padding: "2px",
    fontFamily: "Arial",
    fontSize: "13px",
    width: "150px",
  };
  
  const textStyle = {
    ...itemStyle,
    padding: "5px 4px",
  };
  
  const inputStyle = {
    padding: "2px",
    //   flex: "1",
    //   fontFamily: "Arial",
    fontSize: "13px",
    //   border: 0,
  };
  

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
            className="form-control form-control-sm"
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
        <Component style={textStyle} onDoubleClick={() => handleEditClick()} {...componentProps}>
          {text}
        </Component>
      );
    }
    return null;
  };
  