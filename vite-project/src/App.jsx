import React, { useState } from 'react'

const App = () => {
    const [state, setState] = useState(0)
    const handleClick = (props) => {
        if (props === '+') {
            setState(prev => prev+1)
        }
        if (props === '-' && state > 0) {
            setState(prev => prev-1)
        }
    }
  return (
      <div>App
          <h1>{state}</h1>
          <button onClick={() => handleClick('+')}>Increment</button>
          <button onClick={() => handleClick('-')}>Decrement</button>
    </div>
  )
}

export default App