import './App.css'
import React, { useState } from 'react'
import Timer from './components/Timer'
import useFetch from './Hook/useFetch'
import Button from './components/Button'
// import UseRef from './components/UseRef'
const url = 'https://jsonplaceholder.typicode.com/users'
function App() {
  const [val, setVal] = useState('')
  const [data, setState] = useFetch(url)
  const handleChange = e => {
    setVal(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const d = {
      id: data.length,
      name: val,
    }
    console.log(d)
    setState([...data, d])
    setVal('')
  } 
  return (
    <div>
      {
        data?.map((item, idx) => (
          <div key={idx}>
            <p>{item.name}</p>
          </div>
        ))
      }
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={val}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
