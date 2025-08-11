import React, {  useState } from 'react'
import Tostify from './Tostify'

const Copied = () => {
    const [inputValue, setInputValue] = useState('')
    const [copied, setCopied] = useState(false)
    const handleCopie = () => {
        navigator.clipboard.writeText(inputValue)
            .then(() => {
                setCopied(true)
                setTimeout(() => {
                    setCopied(false)
                }, 1000);
            })
    }
    return (
      <div>
          <input onChange={e => setInputValue(e.target.value)} type="text" value={inputValue}/>
          <button onClick={handleCopie}>Copy</button>
          {
              copied && <Tostify/>
          }
      </div>
  )
}

export default Copied