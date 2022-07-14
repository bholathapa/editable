import React from "react";
import { Cell } from "./Cell";

const CustomRow = (props) => {
  const { key1, data, dataIndex, setValues } = props;
  console.log(props);
  const info = data[dataIndex];

  const handleChange = (event, valueKey) => {
    // map() method used to update indicated value with state copy
    const findValueIndex = data.findIndex((item) => item.id === data[dataIndex].id);
    if (findValueIndex !== -1) {
      const temp = JSON.parse(JSON.stringify(data));
      temp[findValueIndex][valueKey] = event.target.value;
      setValues([...temp]);
    }
  };

  return (
    <div
      style={{
        height: props.height,
        top: props.top,
        position: "absolute",
        display: "block",
      }}
      key={key1}
    >
      <th scope="row">{info.id}</th>
      {Object.keys(info)
        .splice(1)
        .map((key, index) => {
          return (
            <Cell
              key={`${index}${dataIndex}`}
              component="td"
              valueKey={key}
              value={info[key]}
              onChange={handleChange}
            />
          );
        })}
    </div>
  );
};

export default CustomRow;
