import React from "react";

class UpdateComponets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sohaib"
    //   address: "Nazimabad",
    //   currentLocation: "Home",
    };
  }

// Update the state
  componentDidMount(){
      setInterval(() => {
          this.setState({
              name: "Farooqui"
          })
      }, 2000);
  }
getSnapshotBeforeUpdate(beforeProp,beforeState){
    document.getElementById('div1').innerHTML = "Before update: "+beforeState.name;
}

componentDidUpdate(){
    document.getElementById('div2').innerHTML = "After Update: "+this.state.name;
}


// Should Component:::::::::::::

// shouldComponentUpdate(){
//     return true
// }

// changeName = () => {

//     this.setState({
//         name: "farooqui"
//     })
// }

//   static getDerivedStateFromProps(props, state) {
//     return { address: props.currentAddress };
//   }

//   changeAddress = () => {
    
//     this.setState({
//         address: "North Nazimabad"
//     });

//   };

  render() {
    return (
      <>
        {/* <h2>Name is: {this.state.name}</h2> */}
        <div id="div1"></div>
        <div id="div2"></div>
        {/* <button type="submit" onClick={this.changeName}>Shoud Update</button> */}

        {/* <h2>Address is: {this.state.address}</h2>
        <h2>Location: {this.state.currentLocation}</h2>
        <button type="button" onClick={this.changeAddress}>
          Change Location
        </button> */}
      </>
    );
  }
}

export default UpdateComponets;
