import React from 'react'
import icon from '@/public/icon.json'

export type Prodcut = {
    name: string;
    price: number;
    category: string;
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    }
}
const ProductItem = ({ product }: { product: Prodcut }) => {
    return (
        <div className="relative group">
            <img
                src={product.image.desktop}
                alt="notfound"
                className="rounded-md hover:border-2 hover:border-amber-800"
            />

            {/* Add to Cart Button */}
            <button
                className="bg-white absolute bottom-[74px] left-1/2 -translate-x-1/2 
               flex items-center gap-2 border border-gray-400 
               px-4 py-[6px] rounded-full text-[10px] font-medium 
               cursor-pointer hover:bg-red-100 hover:text-black
               group-hover:hidden"
            >
                <img className="w-4" src={icon.cart} alt="cart" />
                Add to Cart
            </button>

            {/* Quantity Counter (hidden until hover) */}
            <div
                className="hidden group-hover:flex absolute bottom-[74px] left-1/2 -translate-x-1/2 
               items-center border border-gray-400 bg-white 
               px-4 py-[6px] rounded-full text-[10px] font-medium gap-3"
            >
                <button className="px-2 py-1 rounded-full border border-gray-300 hover:bg-gray-100">-</button>
                <span className="text-sm font-semibold">1</span>
                <button className="px-2 py-1 rounded-full border border-gray-300 hover:bg-gray-100">+</button>
            </div>

            {/* Product Info */}
            <div className="mt-7">
                <p className="text-[10px] font-medium text-gray-700">{product.category}</p>
                <h2 className="text-sm font-medium my-[2px]">{product.name}</h2>
                <h4 className="text-sm font-medium text-amber-500">${product.price}</h4>
            </div>
        </div>


    )
}

export default ProductItem