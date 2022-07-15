import React from "react";
import { Cell } from "./Cell";
import { textStyle } from "./constant";

const CustomRow = (props) => {
  const { key1, data, dataIndex, setValues, headLength } = props;

  const info = data[dataIndex];
  const [editIndex, setEditIndex] = React.useState(null);

  const handleChange = (event, valueKey) => {
    // map() method used to update indicated value with state copy
    const findValueIndex = data.findIndex((item) => item.id === data[dataIndex].id);
    if (findValueIndex !== -1) {
      const temp = JSON.parse(JSON.stringify(data));
      temp[findValueIndex][valueKey] = event.target.value;
      setValues([...temp]);
    }
  };

  const handleIndexChange = (index) => {
    console.log(index);
    setEditIndex(index);
  };

  return (
    <div
      style={{
        height: props.height,
        top: props.top,
        position: "absolute",
        display: "block",
        width: "100%",
        zIndex: 0,
      }}
      key={key1}
    >
      <div style={{ display: "flex", padding: 0 }}>
        {/* <div className="border-class fixed-cell">
          <span style={textStyle}>{info.id}</span>
        </div> */}
        {Object.keys(info)
          .splice(1)
          .map((key, index) => {
            return (
              <Cell
                key={`${dataIndex}${index}`}
                idx={`${dataIndex}${index}`}
                editIndex={editIndex}
                component="div"
                valueKey={key}
                value={info[key]}
                onChange={handleChange}
                handleIndexChange={handleIndexChange}
                headLength={headLength}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CustomRow;
