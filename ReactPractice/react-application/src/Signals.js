import React from "react";
function Signals(props) {
  return (
    <>
      <h2>{props.heading}</h2>
      <div
        className="redLight bulb"
        style={{ backgroundColor: props.red }}
      ></div>

      <div
        className="yellowLight bulb"
        style={{ backgroundColor: props.yellow }}
      ></div>

      <div
        className="greenLight bulb"
        style={{ backgroundColor: props.green }}
      ></div>
    </>
  );
}

export default Signals;
