'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
const User = () => {
  const router = useRouter();

  const users = [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Jane Smith",
    },
    {
      id: 3,
      name: "Alice Johnson",
    },
    {
      id: 4,
      name: "Bob Brown",
    },
  ]
  const handleClick = (id: number) => {
    router.push('/user/' + id);
      console.log("User clicked");
  }
  return (
    <div className='container mx-auto px-5'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5'>
      {
          users.map((user) => (
              <h1 onClick={() => handleClick(user.id)} key={user.id} className='p-4 bg-amber-200 text-md cursor-pointer font-bold underline'>
                  {user.name}
              </h1>
          ))  
          }
    </div>
      </div>
  )
}

export default User