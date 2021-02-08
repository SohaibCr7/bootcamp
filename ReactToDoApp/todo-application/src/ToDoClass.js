import React, { Component } from "react";
import "./App.css";

class ToDoClass extends Component {
  //   Constructor
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      list: [],
    };
  }

  //   User input Values
  userInput(input) {
    this.setState(
      {
        inputValue: input,
      },console.log(...input));
  }
  // On click pay save hogi value user ka input list may..
  saveValue(inputValue) {
    let listArray = this.state.list;
    listArray.push(this.state.inputValue);

    this.setState(
      {
        
        list: listArray,
        inputValue: "",
      },
      console.log("List: " + this.state.list)
    );
  }

  deleteItem(id){
      const list = [this.state.list]

      const updateList = list.filter(val => val.id !== id);

      this.setState({list: updateList})
  }

  render() {
    return (
      <>
        <div className="todoClass">
          <h2>ToDo With Class</h2>
          <div className="center_div">
            <input type="text" value={this.state.inputValue} onChange={(e) => this.userInput(e.target.value)} />

            <button type="submit" onClick={() => this.saveValue(this.state.userInput)}> + </button>

            <ol>
              {this.state.list.map((val, i) => ( <li key={i}> {val}
              <button onClick={() => this.deleteItem(val.id)}>X</button> </li> ))}
              
                
            </ol>
          </div>
          
        </div>
      </>
    );
  }
}

export default ToDoClass;
