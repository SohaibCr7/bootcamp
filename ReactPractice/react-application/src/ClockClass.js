import React from "react";

class ClockClass extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      date: new Date()
    };
  }

// Mount Time 
componentDidMount(){
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // Unmout the time when its rendered
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState ({
      date: new Date()
    })
    // console.log(this.state.date)
  }

  render(){

    return (
      <h1>By Class {this.state.date.toLocaleTimeString()}</h1> 
    )

  }

}

export default ClockClass;
