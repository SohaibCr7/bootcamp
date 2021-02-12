import React, { useState, useEffect } from "react";
import "./TrafficSignal.css";

function TrafficSignal() {
  const [color1, setColorRed] = useState("null");
  const [color2, setColorYellow] = useState("null");
  const [color3, setColorGreen] = useState("null");

  //   const setBlackColor = () => {
  //     setColor("black");
  //   };
  useEffect(() => {
    setInterval(() => setColorRed("red"), 2000);
  }, []);

  useEffect(() => {
    setInterval(() => setColorYellow("yellow"), 3000);
  }, []);

  useEffect(() => {
    setInterval(() => setColorGreen("#006400"), 6000);
  }, []);

  const setRedColor = () => {
    // setColorGreen("#111")
    // setColorRed("red");
  };

  const setYellowColor = () => {
    // setColorRed("#111");
    // setColorYellow("yellow");
  };

  const setGreenColor = () => {
    // setColorYellow("#111");
    // setColorGreen("#006400");
  };

  return (
    <>
      {/* Traffic signal Div */}
      <div className="trafficSignal" id="trafficLight">
        <div className="redLight bulb" style={{ backgroundColor: color1 }}>
          <button type="submit" onClick={setRedColor}>
            red
          </button>
        </div>

        <div className="yellowLight bulb" style={{ backgroundColor: color2 }}>
          <button type="submit" onClick={setYellowColor}>
            Yellow
          </button>
        </div>

        <div className="greenLight bulb" style={{ backgroundColor: color3 }}>
          <button type="submit" onClick={setGreenColor}>
            Green
          </button>
        </div>
      </div>
    </>
  );
}

export default TrafficSignal;
