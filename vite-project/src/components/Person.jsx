import React from 'react'

const Person = ({person: {name, age}}) => {
  return (
      <div style={{ backgroundColor: 'gray', padding: '20px', marginBottom: "10px"}}>
          <h3>{name}</h3>
          <h3>{age}</h3>
    </div>
  )
}

export default Person