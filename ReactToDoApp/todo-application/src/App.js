// import React from "react";
import React, { useState } from "react";
import "./App.css";
import ToDoClass from "./ToDoClass";

import ToDOList from "./ToDoList";

function App() {

  const [inputValue, setInputValue] = useState("");

  const [editRecordData, setEditRecordData] = useState(null);

  const [items, setItems] = useState([]);

  const onInputChange = (item) => {
    setInputValue(item.target.value);
  };

  const saveItem = () => {
    if (editRecordData) {
      const temp = [...items];
      temp[editRecordData.itemId] = inputValue;
      setItems(temp);

    } else {
      setItems((oldItems) => {
        console.log(oldItems);
        return [...oldItems, inputValue];
      });
      setInputValue("");
    }
  };

  const onEdit = (text, itemId) => {
    console.log(text + " " + itemId);
    setInputValue(text);
    setEditRecordData({ itemId });
  };

  const onDelete = (id) => {
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
          <h1>ToDo List Functional Component</h1>
          <br />
          <input
            id="edit"
            type="text"
            placeholder="Add Item"
            onChange={onInputChange}
            value={inputValue /* editRecordData?.itemText */}
          />
          <button type="submit" onClick={saveItem}>+</button>

          <ol>
            {/* <li>{inputList}</li> */}
            {items.map((itemval, index) => {
              return (
                <ToDOList text={itemval} key={index} onDelete={onDelete} id={index} onEdit={onEdit} />
              );
             
            })}
          </ol>
        </div>
      </div>

      <ToDoClass />

    </>
  );
}

export default App;
