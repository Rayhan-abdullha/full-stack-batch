import React from 'react'
import Todo from './components/Todo'
const todos = {
  1: { id: 1, task: "Buy groceries", completed: false },
  2: { id: 2, task: "Walk the dog", completed: true },
  3: { id: 3, task: "Finish project report", completed: false },
  4: { id: 4, task: "Read a book", completed: false },
  5: { id: 5, task: "Call mom", completed: true },
  6: { id: 6, task: "Pay utility bills", completed: false },
  7: { id: 7, task: "Clean the kitchen", completed: true },
  8: { id: 8, task: "Workout for 30 minutes", completed: false },
  9: { id: 9, task: "Check emails", completed: true },
  10: { id: 10, task: "Plan weekend trip", completed: false }
};

const App = () => {
  return (
      <div>
          <Todo todos={todos} />
    </div>
  )
}

export default App