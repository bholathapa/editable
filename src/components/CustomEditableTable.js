import React from "react";
import { headers } from "./constant";
import CustomRow from "./CustomRow";
import FixedList from "./SpreadSheet/FixedList";

const CustomEditableTable = ({ data }) => {
  const [values, setValues] = React.useState(data);

  const handleStateChange = (state) => {
    setValues(state);
  };

  return (
    <div style={{ overflow: "hidden", height: `calc(100vh - 385px)` }}>
      <FixedList
        height={250}
        thead={
          <div className="sticky-head">
            <div className="d-flex p-0 bg-white">
              {headers.map((item, idx) => {
                return (
                  <div className="border-header fixed-cell py-2" key={idx}>
                    <span style={{ width: "160px" }}>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        }
        headLength={headers.length}
        rowComponent={CustomRow}
        setValues={handleStateChange}
        data={values}
        rowHeight={25}
      />
    </div>
  );
};

export default CustomEditableTable;
