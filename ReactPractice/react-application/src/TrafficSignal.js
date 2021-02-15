import React, { useState, useEffect } from "react";
import "./TrafficSignal.css";

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

//   const [counter, setCounter] = useState(240);

    let counter = 240;
//   const [seconds, setSeconds] = useState(60);
var seconds = 60;
  useEffect(() => {
    var myInterval = setInterval(() => {
      if (counter <= 240 && counter > 180) {
        if (seconds <= 60 && seconds > 35) {
          setColorRed("red");
        } else if (seconds <= 35 && seconds > 25) {
          setColorYellow("yellow");
          setColorRed("");
        } else if (seconds <= 25 && seconds > 1) {
          setColorGreen("#006400");
          setColorYellow("");
        } else if (seconds >= 0 || seconds > 1) {
          setColorRed("red");
          setColorGreen("");
          seconds = 60;
          // return(myInterval)
        }
      } else if (counter <= 180 && counter > 120) {
        if (seconds <= 60 && seconds > 35) {
          setColorRedB("red");
        } else if (seconds <= 35 && seconds > 25) {
          setColorYellowB("yellow");
          setColorRedB("");
        } else if (seconds <= 25 && seconds > 1) {
          setColorGreenB("#006400");
          setColorYellowB("");
        } else if (seconds <= 1) {
          setColorGreenB("");
          setColorRedB("red");
          seconds = 60;
          // return(myInterval)
        }
      } else if (counter <= 120 && counter > 60) {
        if (seconds <= 60 && seconds > 35) {
          setColorRedR("red");
          setColorGreenR("");
        } else if (seconds <= 35 && seconds > 25) {
          setColorYellowR("yellow");
          setColorRedR("");
        } else if (seconds <= 25 && seconds > 1) {
          setColorGreenR("#006400");
          setColorYellowR("");
        } else if (seconds <= 1) {
          setColorGreenR("");
          setColorRedR("red");
          seconds = 60;
          // return(myInterval)
        }
      } else if (counter <= 60 && counter > 1) {
        if (seconds <= 60 && seconds > 35) {
          setColorRedT("red");
          setColorGreenR("");
        } else if (seconds <= 35 && seconds > 25) {
          setColorYellowT("yellow");
          setColorRedT("");
        } else if (seconds <= 25 && seconds > 1) {
          setColorGreenT("#006400");
          setColorYellowT("");
        } else if (seconds <= 1) {
          setColorGreenT("");
          setColorRedT("red");
          seconds = 60;
          // return(myInterval)
        }
      } 
      else if(counter<=1){
          counter = 240;
          
      }
      
      seconds--;
      counter--;
      console.log("Seconds::", seconds);
      console.log("Counter value: ", counter);
      
    //   setCounter(counter - 1);
    //   setSeconds(seconds - 1);
        
     
    }, 100);
    // if (seconds <= 1) {
    //   setSeconds(60);
    // }
    // if (counter <= 1) {
    //   setCounter(240);
    // }
    return () => clearTimeout(myInterval =>{console.log(myInterval)});

  },[]);

  //   useEffect(() => {
  //     setInterval(() => setColorYellow("yellow"), 3000);
  //   }, []);

  //   useEffect(() => {
  //     setInterval(() => setColorGreen("#006400"), 6000);
  //   }, []);

  //   const setRedColor = () => {
  // setColorGreen("#111")
  // setColorRed("red");   };

  //   const setYellowColor = () => {
  // setColorRed("#111");
  // setColorYellow("yellow");
  //   };

  //   const setGreenColor = () => {
  // setColorYellow("#111");
  // setColorGreen("#006400");
  //   };

  return (
    <>
      {/* Top Signal */}
      <div className="trafficSignalTop  " id="trafficLight">
        <h2>Top Signal</h2>
        <div className="redLight bulb" style={{ backgroundColor: t1 }}></div>

        <div className="yellowLight bulb" style={{ backgroundColor: t2 }}></div>

        <div className="greenLight bulb" style={{ backgroundColor: t3 }}></div>
      </div>

      <div className="leftSignal-RightSignal-Container">
        {/* Left Signal */}
        <div className="trafficSignalLeft" id="trafficLight">
          <h2>Left Signal</h2>
          <div className="redLight bulb" style={{ backgroundColor: l1 }}></div>

          <div
            className="yellowLight bulb"
            style={{ backgroundColor: l2 }}
          ></div>

          <div
            className="greenLight bulb"
            style={{ backgroundColor: l3 }}
          ></div>
        </div>
        {/* Right Signal */}
        <div className="trafficSignalRight" id="trafficLight">
          <h2>Right Signal</h2>
          <div className="redLight bulb" style={{ backgroundColor: r1 }}></div>

          <div
            className="yellowLight bulb"
            style={{ backgroundColor: r2 }}
          ></div>

          <div
            className="greenLight bulb"
            style={{ backgroundColor: r3 }}
          ></div>
        </div>
      </div>

      {/* Bottom Signal */}
      <div className="trafficSignalBottom" id="trafficLight">
        <h2>Bottom Signal</h2>
        <div className="redLight bulb" style={{ backgroundColor: b1 }}></div>

        <div className="yellowLight bulb" style={{ backgroundColor: b2 }}></div>

        <div className="greenLight bulb" style={{ backgroundColor: b3 }}></div>
      </div>
    </>
  );
}

export default TrafficSignal;
