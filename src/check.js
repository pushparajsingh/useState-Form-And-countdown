import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

function Counter() {
  const [time, setTime] = useState(50);
  const [state, setState] = useState(false);
  

  const reset = () => {
    setState(false);
    setTime(50);
  };

  if (state) {
    if (time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }

  return (
    <div style={{ height: "100vh", backgroundColor: "yellow" }}>
      <h2>{time}</h2>
      <Button
        onClick={() => setState(true)}
        className={`continueBtn ${time == 0 ? "disabled" : ""}`}
      >
        Start
      </Button>{" "}
      &nbsp;&nbsp;
      <Button onClick={() => reset()}>RESET</Button>
    </div>
  );
}

export default Counter;
