import React, { useState } from "react";
import BirthdayData from "./11.Project notification clear/data.json";
const App = () => {
  const [data, setData] = useState(BirthdayData);
  function handleclear() {
    setData([]);
  }
  return (
    <div>
      <h1>Birthday Reminder : {data.length}</h1>
      {data.map((item, index) => {
        return (
          <div>
            <span>{item.name}</span>
            <img src={"item.img"} height={"400px"} width={"500px"} />
          </div>
        );
      })}
      <button onClick={handleclear}>Clear</button>
    </div>
  );
};

export default App;
