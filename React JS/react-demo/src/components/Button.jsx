import React from 'react'

const Button = ({name, onClick: handleClick}) => {
  return (
      <button onClick={() => handleClick(name)}>
          {name}
    </button>
  )
}

export default Button