import React from "react";
// import "./App";

class UserDetails extends React.Component {
  // constructor(props) {
  //     super(props);
  // this.setState(
  //     {
  //         name: this.props.name
  //     }
  // )
  //     this.state = {
  //       name: "",
  //     };
  //   }

  render() {
    return <h1>Hello world,{this.props.name}</h1>;
  }
}

export default UserDetails;
