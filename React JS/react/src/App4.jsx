import React, { useEffect, useState } from 'react'

const App = () => {
    const [state, setState] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setState(data))
    }, [])
  return (
      <div>
          {
              state.map(item => (
                  <div key={item.id}>
                      <h3>{item.name}</h3>
                      <p>{item.email}</p>
                  </div>
              ))
          }
    </div>
  )
}

export default App