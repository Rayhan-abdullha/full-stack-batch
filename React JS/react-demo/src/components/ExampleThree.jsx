import React, { useEffect, useState } from 'react'

const ExampleThree = () => {
    const [name, setName] = useState(stateName)
    function stateName() {
        const saveName = localStorage.getItem('name')
        return saveName ? JSON.parse(saveName) : ''
    }
    const handleChange = e => {
        const value = e.target.value
        setName(value)
    }
    const handleClear = () => {
        localStorage.removeItem('name')
    }
    useEffect(() => {
        localStorage.setItem('name', JSON.stringify(name))
    }, [name])
    
  return (
      <div>
          <h1>{name}</h1>
          <input onChange={handleChange} type="text" placeholder='Type Name' />
            <button onClick={handleClear}>Clear Me</button>
      </div>
  )
}

export default ExampleThree