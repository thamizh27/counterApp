import React, { useEffect, useState } from "react";

const url = "http://numbersapi.com";
function Fetch() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setValue(data);
      });
  }, []);

  return (
    <React.Fragment>
      <h1>{value}</h1>
      <button>click me</button>
    </React.Fragment>
  );
}

export default Fetch;
