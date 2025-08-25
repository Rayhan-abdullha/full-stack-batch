import React from 'react'
import CartProduct from './CartProduct'
import {tree} from '@/public/icon.json'

const Cart = () => {
  return (
      <div className='bg-white p-4 rounded-md'>
          <h1 className='text-red-800 font-medium mb-2'>Your Cart (7)</h1>
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <div className='flex justify-between items-center mt-4'>
            <h2 className='font-medium text-[12px] text-gray-600'>Order Total</h2>
            <p className='font-bold'>$300</p>
          </div>
          <div className='bg-amber-50 p-2 rounded-md flex items-center justify-center gap-2 mt-4'>
              <img src={ tree} alt="notfound" />
              <p className='text-[12px]'>This is a <strong>curbon natural</strong> delivery</p>
          </div>
            <button className='w-full bg-red-800 cursor-pointer text-white py-2 px-5 text-[12px] rounded-full mt-4 font-medium hover:bg-red-800/80'>Confirm Order</button>
    </div>
  )
}

export default Cart