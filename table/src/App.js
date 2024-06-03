import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios'
import './App.css'

function App () {
  const [data, setData] = useState([])

  useEffect(() => {
    // Fetch data from the API using axios
    axios
      .get('http://127.0.0.1:8000/todo-list/')
      .then(response => {
        if (!response.ok) {
          console.log('slight server error')
        }
        const res = response.data
        return res.json()
      })
      .then(function (datas) {
        setData(datas)
        console.log(datas)
      })
  }, [data])
  console.log(data)

  const columns = [
    {
      name: 'Name',
      selector: row => row.name
    },
    {
      name: 'country',
      selector: row => row.country
    }
  ]

  return (
    <div className='App'>
      <h1>User Data Table</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default App
