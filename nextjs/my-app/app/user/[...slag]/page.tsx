'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
const Page = ({params}: {params: {slag: string}}) => {
    const router = useRouter()
    const { slag } = params;
  return (
      <div>
          <button onClick={() => router.back()} className='bg-slate-700 py-1 px-4 text-md text-white cursor-pointer'>Back</button>
          <h1 className='text-3xl font-bold underline'>
            {slag}
          </h1>
    </div>
  )
}

export default Page