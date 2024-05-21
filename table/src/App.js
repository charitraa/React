import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios'
import './App.css'

function App () {
  const [data, setData] = useState([])

  useEffect(() => {
    // Fetch data from the API using axios
    axios
      .get('http://universities.hipolabs.com/search?country=United+States')
      .then(response => {
        const res = response.data
        console.log(res)
        setData(res)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [data])
  console.log(data)

  const columns = [
    {
      name: 'NAme',
      selector: row => row.name
    },
    {
      name: 'country',
      selector: row => row.country
    }
  ]

  // const datas = [
  //   {
  //     id: 1,
  //     title: 'Beetlejuice',
  //     year: '1988'
  //   },
  //   {
  //     id: 2,
  //     title: 'Ghostbusters',
  //     year: '1984'
  //   }
  // ]

  return (
    <div className='App'>
      <h1>User Data Table</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default App
