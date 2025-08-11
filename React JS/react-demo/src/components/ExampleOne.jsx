import React, { useState } from 'react'

const ExampleOne = () => {
    const [count, setCount] = useState(() => {
        const initial = 10
        return initial
    })
    const increment = () => {
        setCount(prev => prev+1)
    }
  return (
      <div>
          <h1>Count: {count}</h1>
          <button onClick={increment}>Count</button>
    </div>
  )
}

export default ExampleOne