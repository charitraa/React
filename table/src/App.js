import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios'
import './App.css'

function App () {
  const [data, setData] = useState()

  useEffect(() => {
    // Fetch data from the API using axios
    axios
      .get('http://127.0.0.1:8000/todo-list/')
      .then(response => {
        const res = response.data
        setData(res)
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  const columns = [
    {
      name: 'Title',
      selector: row => row.title
    },
    {
      name: 'Year',
      selector: row => row.year
    }
  ]

  const datas = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988'
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984'
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
