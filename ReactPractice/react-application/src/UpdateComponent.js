import React from "react";

class UpdateComponets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sohaib",
      address: "Nazimabad",
      currentLocation: "Home",
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { address: props.currentAddress };
  }
  changeAddress = () => {
    
    this.setState({
        currentLocation: "Nisum"
    })

  };

  render() {
    return (
      <>
        <h2>Name is: {this.state.name}</h2>
        <h2>Address is: {this.state.address}</h2>
        <h2>Location: {this.state.currentLocation}</h2>
        <button type="button" onClick={this.changeAddress}>
          Change Location
        </button>
      </>
    );
  }
}

export default UpdateComponets;
