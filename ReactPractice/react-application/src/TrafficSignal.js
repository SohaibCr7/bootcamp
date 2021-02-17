import React, { useState, useEffect } from "react";
import "./TrafficSignal.css";
import Signals from "./Signals.js";

let counter = 36;
//   const [seconds, setSeconds] = useState(60);
//   const [counter, setCounter] = useState(240);
let seconds = 9;
function TrafficSignal() {
  const [l1, setColorRed] = useState("red");
  const [l2, setColorYellow] = useState(null);
  const [l3, setColorGreen] = useState(null);

  const [b1, setColorRedB] = useState("red");
  const [b2, setColorYellowB] = useState(null);
  const [b3, setColorGreenB] = useState(null);

  const [r1, setColorRedR] = useState("red");
  const [r2, setColorYellowR] = useState(null);
  const [r3, setColorGreenR] = useState(null);

  const [t1, setColorRedT] = useState("red");
  const [t2, setColorYellowT] = useState(null);
  const [t3, setColorGreenT] = useState(null);

  useEffect(() => {
    var myInterval = setInterval(() => {
      if (counter <= 36 && counter > 27) {
        if (seconds <= 9 && seconds > 6) {
          setColorRed("red");
        } else if (seconds <= 6 && seconds > 3) {
          setColorYellow("yellow");
          setColorRed("");
        } else if (seconds <= 3 && seconds > 1) {
          setColorGreen("#006400");
          setColorYellow("");
        } else if (seconds <= 1 || seconds > 0) {
          setColorRed("red");
          setColorGreen("");
          seconds = 9;
        }
      } else if (counter <= 27 && counter > 18) {
        if (seconds <= 9 && seconds > 6) {
          setColorRedB("red");
        } else if (seconds <= 6 && seconds > 3) {
          setColorYellowB("yellow");
          setColorRedB("");
        } else if (seconds <= 3 && seconds > 1) {
          setColorGreenB("#006400");
          setColorYellowB("");
        } else if (seconds <= 1 || seconds > 0) {
          setColorGreenB("");
          setColorRedB("red");
          seconds = 9;
        }
      } else if (counter <= 18 && counter > 9) {
        if (seconds <= 9 && seconds > 6) {
          setColorRedR("red");
          setColorGreenR("");
        } else if (seconds <= 6 && seconds > 3) {
          setColorYellowR("yellow");
          setColorRedR("");
        } else if (seconds <= 3 && seconds > 1) {
          setColorGreenR("#006400");
          setColorYellowR("");
        } else if (seconds <= 1 || seconds > 0) {
          setColorGreenR("");
          setColorRedR("red");
          seconds = 9;
        }
      } else if (counter <= 9 && counter > 1) {
        if (seconds <= 9 && seconds > 6) {
          setColorRedT("red");
          setColorGreenR("");
        } else if (seconds <= 6 && seconds > 3) {
          setColorYellowT("yellow");
          setColorRedT("");
        } else if (seconds <= 3 && seconds > 1) {
          setColorGreenT("#006400");
          setColorYellowT("");
        } else if (seconds <= 1 || seconds > 0) {
          setColorGreenT("");
          setColorRedT("red");
          seconds = 9;
        }
      } else if (counter <= 0) {
        
        seconds = 9;
        counter = 36;
      }
      console.log("Seconds::", seconds);
      console.log("Counter value: ", counter);
      seconds--;
      counter--;

      //   setCounter(counter - 1);
      //   setSeconds(seconds - 1);
    }, 1000);
  }, []);

  return (
    <>
      <div className="trafficSignalTop" id="trafficLight">
        <Signals heading="Top-Signal" red={t1} yellow={t2} green={t3} />
      </div>
      <div className="leftSignal-RightSignal-Container">
        <div className="trafficSignalLeft" id="trafficLight">
          <Signals heading="Left-Signal" red={l1} yellow={l2} green={l3} />
        </div>
        <div className="trafficSignalRight" id="trafficLight">
          <Signals heading="Right-Signal" red={r1} yellow={r2} green={r3} />
        </div>
      </div>
      <div className="trafficSignalBottom" id="trafficLight">
        <Signals heading="Bottom-Signal" red={b1} yellow={b2} green={b3} />
      </div>
    </>
  );
}

export default TrafficSignal;
