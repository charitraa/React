import './App.css'

function App () {
  let name = 'Charitra Shrestha'
  let currrDate = new Date().toLocaleDateString()
  let currTime = new Date().toLocaleTimeString()
  return (
    <div>
      <h1>My name is {name}</h1>
      <p> Current Date is = {currrDate}</p>
      <p>Current Time is = {currTime}</p>
    </div>
  )
}

export default App
