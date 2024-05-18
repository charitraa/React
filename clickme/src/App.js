import React, { useState } from 'react'
import './App.css'

function App () {
  let [count, setCount] = useState(0)

  let IncNumber = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={IncNumber}>Click Me</button>
    </div>
  )
}

export default App
