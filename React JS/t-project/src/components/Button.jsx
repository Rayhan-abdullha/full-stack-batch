import React from 'react'

const Button = ({children, handleClick}) => {
  return (
      <button onClick={handleClick} className='border border-amber-950'>{children}</button>
  )
}

export default Button