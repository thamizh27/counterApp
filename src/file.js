import React, { useState } from "react";

function File() {
  const [state, setState] = useState(0);

  const increaseValue = () => {
    setState(state + 1);
  };
  const decreaseValue = () => {
    setState(state - 1);
  };

  const app = {
    margin: "auto",
    textAlign: "center",
    height: "100vh",
    width: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const btn = {
    display: "flex",
    justifyContent: "sapceBetween",
  };

  const button = {
    width: 100,
    margin: "auto",
    marginTop: 30,
    padding: "5px 10px",
    fontSize: "1rem",
    fontWeight: "bold",
    border: "2px solid black",
    borderRadius: 5,
    backgroundColor: "black",
    color: "white",
    cursor: "pointer",
  };

  const styles = {
    height: "30%",
    width: "100%",
    border: "1px solid black",
    borderRadius: "10px",
  };

  return (
    <div>
      <section style={app}>
        <div style={styles}>
          <h1>Counter App</h1>
          {state < 0 ? (
            <p>
              <b>We can't show negative values, Press Reset!</b>
            </p>
          ) : (
            <h1>{state}</h1>
          )}
          <div style={btn}>
            <button style={button} onClick={decreaseValue}>
              Decrease
            </button>
            <button style={button} onClick={increaseValue}>
              Increase
            </button>
            <button style={button} onClick={() => setState(0)}>
              Reset
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default File;
