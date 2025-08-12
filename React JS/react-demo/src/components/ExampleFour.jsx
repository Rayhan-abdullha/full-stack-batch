import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import ExampleFive from './ExampleFive'

const ExampleFour = () => {
    const {state, setState} = useContext(Context)

    useEffect(() => {
        async function getPosts() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const post = await res.json()
            if (post && post.length) {
                setState(post)
            }
        }
        getPosts()
    },[setState])
  return (
      <div>
          <ExampleFive/>
          <ul>
                {
                  state.map(post => (
                      <li key={post.id}>
                          <h3>{post.title}</h3>
                          <p>{post.body}</p>
                          <div>
                              <button>Like</button>
                              <button>Comment</button>
                              <button>Share</button>
                          </div>
                      </li>
                  ))
              }
        </ul>
    </div>
  )
}

export default ExampleFour