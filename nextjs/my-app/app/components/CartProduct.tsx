import React from 'react'
import icon from '@/public/icon.json'

const CartProduct = () => {
    return (
        <div className='flex gap-2 items-center justify-between border-b border-gray-200 mb-2'>
            <div>
                <h3 className='text-[10px] font-medium mb-1'>{'Classic Tiramisu'}</h3>
                <div className='flex justify-between text-[10px] gap-2'>
                    <p className='text-red-800 font-bold'>1x</p>
                    <p className='text-gray-500'>@$7.00</p>
                    <p className='pb-2 text-gray-500'>$28.00</p>
                </div>
            </div>
            <img className='w-4 cursor-pointer border border-gray-400 rounded-full p-1' src={icon.remove} alt="remove" />
        </div>
    )
}

export default CartProduct