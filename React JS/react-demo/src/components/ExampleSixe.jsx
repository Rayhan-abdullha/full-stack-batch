import { useReducer } from 'react'
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            }
        case 'decrement':
            return {
                ...state,
                count: state.count - 1
            }
        case 'rest':
            return {
                ...state,
                count: 0
            }
        default:
            return state
    }
}
const initialState = {count: 0}
const ExampleSix = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleCount = () => {
        dispatch({type: 'increment'})
    }
    const handleDec = () => {
        dispatch({type: 'decrement'})
    }
    const handleRes = () => {
        dispatch({type: 'rest'})
    }
  return (
      <div>
          <h1>{state.count}</h1>
          <button onClick={handleCount}>+</button>
          <button onClick={handleDec}>-</button>
          <button onClick={handleRes}>Rest</button>
    </div>
  )
}

export default ExampleSix