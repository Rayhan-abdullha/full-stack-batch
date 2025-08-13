import React, { useRef, useState } from 'react'

const UseRef = () => {
    const [todo, setTodo] = useState([])
    const inputRef = useRef(null)
    const focusElement = () => {
        const data = {
            id: todo.length + 1,
            text: inputRef.current.value
        }
        setTodo(prev => {
            return [data, ...prev]
        })
    }

    return (
        <div>
            <h1 className='text-2xl'>Use Ref</h1>
            <input className='border-1 p-2 rounded' type="text" ref={inputRef} />
            <button
                onClick={focusElement}
                className="cursor-pointer px-6 py-2 border border-[#3B9DF8] hover:bg-[#3B9DF8] text-primary hover:text-[#fff]  transition duration-300 rounded ">
                Button 2
            </button>

            <div className='output bg-amber-500'>
                <ul>
                    {
                       todo.map(item => (
                            <li key={item.id} className='bg-amber-100'>
                                <h3 className='text-xl text-blue-500 '>{item.text}</h3>
                            </li>
                       ))
                    }
                </ul>
            </div>
    </div>
  )
}

export default UseRef