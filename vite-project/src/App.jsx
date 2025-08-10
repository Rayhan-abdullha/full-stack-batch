import React, { useState } from 'react'
import StateLifting from './components/StateLifting'

const App = () => {
    const [count, setCount] = useState(0)
    function handleClick() {
        setCount(prev => prev+ 1)
    }
  return (
      <div>
          <h1>count: {count}</h1>
          <StateLifting handleClick={handleClick} />
    </div>
  )
}

export default App