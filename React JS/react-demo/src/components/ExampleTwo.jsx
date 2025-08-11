
import { useState } from 'react'
import Button from './Button'
const App = () => {
  const [color, setColor] = useState('gray')
  const handleSetColor = (prop = '') => {
    setColor(prop.toLowerCase())
  }
  return (
      <div style={{backgroundColor: `${color}`, padding: "50px"}}>
      <Button name="Red" onClick={handleSetColor} />
      <Button name="green" onClick={handleSetColor} />
      <Button name="Yellow" onClick={handleSetColor} />
      <Button name="Gray" onClick={handleSetColor} />
    </div>
  )
}

export default App