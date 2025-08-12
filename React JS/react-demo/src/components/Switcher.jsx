import React, { useState } from 'react'

const Switcher = () => {
    const [swc, setSw] = useState(false)
  return (
      <div>
          <span style={{display: 'block', fontSize: '20px', marginBottom: "5px"}}>{swc ? 'Dark' : 'Light'}</span>
          <input type="text" key={swc ? 'dark' : 'light'} />
          <button onClick={() => setSw(prev => !prev)}>Switch</button>
    </div>
  )
}

export default Switcher