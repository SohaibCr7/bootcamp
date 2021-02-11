import "./App.css";
import Details from "./UserDetails";
import Clock from "./Clock";
import ClockClass from "./ClockClass"
import React, { useState, useEffect } from "react";

// Importing State And Components Class
import States from "./States"
import UpdateComponet from "./UpdateComponent"


function User(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  
  return (
    <>
      <div className="App">
        <User name="sohaib" />
        <User name="Farooqui" />
        <User name="abc" />
        <User name="xyz" />
      </div>
      <Details name={"sohaib"} />
      <Clock />
      <ClockClass />
      {/* <States favouriteColor="Yellow"/> */}
      <States />
      <UpdateComponet currentAddress={"Defence"}/>
    </>
  );
}

// setInterval(Clock, 1000);
export default App;
