import React, { Component } from "react";
import "./App.css";

class ToDoClass extends Component {
  //   Constructor
  constructor(props) {
    super(props);

   this.state = {
      inputValue: "",
      list: [],
      editRecordData : null
    };
  }

  //   User input Values
  userInput(input) {
    this.setState(
      {
        inputValue: input,
      },console.log(...input)
    );
  }
  // On click pay save hogi value user ka input list may..
  saveValue(inputValue) {

    if (this.state.editRecordData) {
        const temp = [...this.state.list];
        temp[this.state.editRecordData.id] = this.state.inputValue;

        this.setState({
            list : temp,
            inputValue: ""
        })
  
      } 
    else
    {
        let listArray = this.state.list;
        listArray.push(this.state.inputValue);

        this.setState(
        {
            list: listArray,
            inputValue: "",
        }, );}
  }

  deleteItem(id) {

      const value = this.state.list.filter( (val) => val !== this.state.list[id] )
      console.log("updated values :::::" + value)
      this.setState({ list: value });
    
  }

  upDateItem(val,id){
    this.setState({
        inputValue : val    
    })
    this.setState({
        editRecordData : {id}
    })
  }


  render() {
    return (
      <>
        <div className="todoClass">
          <h2>ToDo With Class Class Component</h2>
          <div className="center_div">
            <input
              type="text"
              value={this.state.inputValue}
              onChange={(e) => this.userInput(e.target.value)} />

            <button type="submit" onClick={() => this.saveValue(this.state.userInput)}>+</button>

            <ol>
              {this.state.list.map((val, index) => (
                <li key={index}>
                    {val}
                <button onClick={(i) => this.deleteItem(index)}>X</button>
                <button onClick={(i) => this.upDateItem(val,index)}>Edit</button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </>
    );
  }
}

export default ToDoClass;
