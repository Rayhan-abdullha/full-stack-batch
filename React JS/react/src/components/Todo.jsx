import React from 'react'

const Todo = ({ todos }) => {
    const myTodos = Object.values(todos)
  return (
      <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          {
              myTodos.map(item => (
                  <div key={item.id} style={{ display: 'flex', gap: '5px'}}>
                      <input checked={item.completed ? true : false} type="checkbox" name="" id="" />
                      <h3 style={{}}>{item.task}</h3>
                  </div>
              ))
          }
    </div>
  )
}

export default Todo