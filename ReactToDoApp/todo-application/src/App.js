// import React from "react";
import React, { useState } from "react";
import "./App.css";

import ToDOList from "./ToDoList";

function App() {
  const [inputList, setInputList] = useState(null);

  const [items, setItems] = useState([]);

  const itemEvent = (item) => {
    setInputList(item.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    var a = document.getElementById("edit");
    a.value = "";
  };

  const updateItem = (itemId,id) => {  
    console.log(itemId,id);
    document.getElementById("edit").value = itemId;

    // setItems( (items) =>{
    //   items == itemId;
    // })

  };

  const deleteItems = (id) => {
    // console.log("deleded");
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            id="edit"
            type="text"
            placeholder="Add Item"
            onChange={itemEvent}
          />
          <button type="submit" onClick={listOfItems}>
            {" "}
            +{" "}
          </button>

          <ol>
            {/* <li>{inputList}</li> */}
            {items.map((itemval, index) => {
              return (
                <ToDOList
                  text={itemval}
                  key={index}
                  onSelect={deleteItems}
                  id={index}
                  onClick={updateItem}
                />
              );
              // return <ToDOList key={i}/>
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
