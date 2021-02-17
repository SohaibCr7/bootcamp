import React, { useState, useEffect} from "react";
// import "./App";


function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000);
      }, []);

  return (
    <div className="clock">
      <h1>Clock</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
