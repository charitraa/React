import './App.css'
import React, { useState } from 'react'

function App() {
  let [inputList, setInputList] = useState("")
  
  let [ Items ,setItems] = useState([])
  let itemEvent = (event) => {
    setInputList(event.target.value)  
  }

  let ListofItems = () => {
    setItems((data) => {
      return [...data, inputList];
    
    } 
  )  }
  return <div>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>Todo List</h1>
        <br />
        <input type="text" placeholder='Add a Items' onChange={itemEvent}/>
        <button onClick={ListofItems}>+</button>
      </div>
      <ol>
        {Items.map((item) => {
          return <li> { item}</li>
        })}
      </ol>
    </div>
  </div>
}

export default App
