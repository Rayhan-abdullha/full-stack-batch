import React, { useContext } from 'react'
import { Context } from '../context/Context'

const ExampleFive = () => {
        const {state} = useContext(Context)
  return (
      <h1>Length: { state.length}</h1>
  )
}

export default ExampleFive