"use client"

import React from 'react'
import Image from 'next/image';
import { FaLock } from 'react-icons/fa6'
import amazonLogo from '../public/amazon-logo.png'

import OrderSummary from './OrderSummary';
import DeliveryAddress from './DeliveryAddress';
import { useAppSelector } from '@/lib/supabase/hooks/redux';
import { getCart } from '@/redux/cartSlice';

const CheckOut = () => {

    const cart = useAppSelector(getCart)

    let totalPrice = 0;
    cart.forEach((item:any) => {
        totalPrice += item.price * item.quantity;
    });


    return (
        <div className='absolute top-0 w-full p-10 bg-white'>
            <div className='flex items-center w-[80%] mx-auto border-b border-gray-400 pb-5 justify-between '>
                    <div>
                        <Image src={amazonLogo} alt={'amazon-logo'} width={150} height={150} />
                    </div>
                    <div>
                        <h1 className='font-bold text-2xl'>Checkout</h1>
                    </div>
                    <div className='text-gray-400'>
                        <FaLock size={"30px"} />
                    </div>
                </div>
            <div className='w-[80%] flex justify-between mx-auto'>
                <div className='w-[70%]'>
                    <DeliveryAddress />
                </div>
                <div className='w-[25%]'>
                    <OrderSummary totalPrice={totalPrice}/>
                </div>
            </div>
        </div>
    )
}

export default CheckOut;