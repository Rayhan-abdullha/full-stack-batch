import React, { FC } from 'react'
import data from '@/public/data.json'
import {cart} from '@/public/icon.json'
import ProductItem, { Prodcut } from './components/ProductItem'
import Cart from './components/Cart'
import Image from 'next/image'
// import cartIcon from '@/public/assets/images/image-baklava-desktop.jpg'

const Home: FC = () => {

  return (
    <div className='container mx-auto px-4 py-5 md:py-12'>
      <div className='flex justify-between items-center mb-5 border-b border-gray-200 pb-3'>
        <h1 className='text-2xl font-medium'>Desserts</h1>
        <button className='block md:hidden cursor-pointer'>
          <Image src={cart} alt="cart" width={25} height={25} />
        </button>
      </div>
      <div className='flex gap-4 md:justify-between'>
        <div className='w-full md:w-3/4 grid sm:grid-cols-2  md:grid-cols-3 space-x-4 gap-y-8'>
          {
            data.map((item: Prodcut, index) => (
              <ProductItem key={index} product={item} />
            ))
          }
        </div>
        <div className='w-full md:w-1/4 hidden md:block'>
          <Cart/>
        </div>
    </div>
    </div>
  )
}

export default Home