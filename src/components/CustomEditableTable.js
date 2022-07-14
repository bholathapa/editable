import React from "react";
import { headers } from "./constant";
import CustomRow from "./CustomRow";
import FixedList from "./SpreadSheet/FixedList";

const CustomEditableTable = ({ data }) => {
  const [values, setValues] = React.useState(data);

  return (
    <div style={{ overflow: "hidden", height: `calc(100vh - 385px)` }}>
      <FixedList
        height={520}
        thead={
          <thead>
            <tr>
              {headers.map((item, idx) => {
                return (
                  <th key={idx} scope="col">
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
        }
        rowComponent={CustomRow}
        data={values}
        rowHeight={52}
      />
      {/* <table className="table">
        <thead>
          <tr>
            {headers.map((item, idx) => {
              return (
                <th key={idx} scope="col">
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {values?.map((item, idx) => {
            const handleChange = (event, valueKey) => {
              // map() method used to update indicated value with state copy
              const findValueIndex = values.findIndex((item) => item.id === values[idx].id);
              if (findValueIndex !== -1) {
                const temp = JSON.parse(JSON.stringify(values));
                temp[findValueIndex][valueKey] = event.target.value;
                setValues([...temp]);
              }
            };
            return (
              <tr key={idx}>
                <th scope="row">{item.id}</th>
                {Object.keys(item)
                  .splice(1)
                  .map((key, index) => {
                    return (
                      <Cell
                        key={`${index}${idx}`}
                        component="td"
                        valueKey={key}
                        value={item[key]}
                        onChange={handleChange}
                      />
                    );
                  })}
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
};

export default CustomEditableTable;
