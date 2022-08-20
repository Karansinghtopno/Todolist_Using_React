import React, { useState } from "react";
import todo from "../images/todo-1.jpg";
import "./ToDoList.css";
// import {FaHandPeace} from 'react-icons/fa'

const ToDoList = () => {
  //state for input data
  const [inputData, setInputData] = useState("");
  //state for storing data
  const [items, setItems] = useState([]);
  //function for adding the items to an empty array
  const addItem = () => {
    if (!inputData) return;
    setItems([...items, inputData]);
    setInputData("");
  };
  //deleting an item in an item list
  const deleteItem=(index)=>{
    console.log("removing from index: ",index);
    const updatedItems= items.filter(( element, ind)=>{
      return ind !== index;

    })
    setItems(updatedItems);
  }
  //removing all the items at once
  const removeAll=()=>{
    setItems([]);
  }
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img className="image" src={todo} alt="todo logo" />
            <figcaption>
              {" "}
              Add Your List Here{" "}
              <span>
                <i class="fa-solid fa-pen-clip"></i>
              </span>
            </figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items..."
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
            <i
              title="Add Item"
              class="fa-solid fa-plus icon"
              onClick={addItem}
            ></i>
          </div>
          <div className="showItems">
            {items.map((element, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3>{element}</h3>
                  <i title="Delete Item" class="fa-solid fa-trash-can" onClick={()=> deleteItem(ind)}></i>
                </div>
              );
            })}
          </div>
          <div className="button-div">
            <button onClick={removeAll}> Remove All</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;