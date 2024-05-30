"use client";

import { useAppDispatch } from '@/lib/supabase/hooks/redux'
import { clearAllCart, decrementQuantity, incrementQuantity, removeFromTheCart } from '@/redux/cartSlice'
import Image from 'next/image'
import React from 'react'
import SubTotal from './shared/SubTotal';

const ShoppingCart = ({cart, totalPrice} : {cart:any, totalPrice:number}) => {
    const dispatch = useAppDispatch();

    return (
        <div className='w-[70%]'>
            <div className='flex justify-between items-center border-b border-gray-400 py-5'>
                <h1 className='font-bold text-2xl '>Shopping Cart</h1>
                <h1 className='font-bold'>Price</h1>
            </div>
            {
                cart.map((product:any) => {
                    return (
                        <div key={product.id} className='py-4 flex justify-between border-b border-gray-400'>
                            <div className='flex'>
                                <div>
                                    <Image src={product.images} width={100} height={100} alt={product.title}/>
                                </div>
                                <div className='ml-4'>
                                    <h1 className='font-medium'>{product.title}</h1>
                                    <p className='text-[#007600] font-bold my-1 text-xs'>In Stock</p>
                                    <span onClick={() => {
                                        dispatch(removeFromTheCart(product.id));
                                    }} className='font-bold text-red-600 cursor-pointer'>Remove</span>
                                    <div className='flex my-3 text-xl font-medium items-center justify-between w-fit bg-gray-200 rounded-md px-5 py-1'>
                                        <div onClick={() => {
                                            product.quantity > 1 && dispatch(decrementQuantity(product));
                                        }} className='cursor-pointer mr-4'>-</div>
                                        <div>{product.quantity}</div>
                                        <div onClick={() => {
                                            dispatch(incrementQuantity(product));
                                        }} className='cursor-pointer ml-4'>+</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className='font-bold text-xl'>{`$${product.price}`}</h1>
                                <p className='text-zinc-500 text-xs py-1'>M.R.P. <span className='line-through'>99,330</span></p>
                            </div>
                        </div>
                    )
                })
            }
            <span onClick={() => {
                dispatch(clearAllCart());
            }} className='text-red-600 font-bold cursor-pointer py-2'>CLEAR ALL</span>
            <SubTotal left={false} length={cart.length} totalPrice={totalPrice}/>
            {/* <h1 className='text-right text-lg'>{`Subtotal (${cart.length} items): `}<span className='font-bold'>{`Rs. ${totalPrice}`}</span></h1> */}
        </div>
    )
}

export default ShoppingCart