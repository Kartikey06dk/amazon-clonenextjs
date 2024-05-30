"use client"

import { useAppSelector } from '@/lib/supabase/hooks/redux'
import { getCart } from '@/redux/cartSlice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Success = () => {
    const cart = useAppSelector(getCart)
    return (
        <div className='absolute top-0 w-full bg-white py-12'>
            <div className='mx-auto w-[70%]'>
                <h1>Thankyou for ordering with Amazon.in</h1>
                <div>
                    <h1 className='font-bold py-3 underline '>Order Details</h1>
                    {
                        cart.map((product: any) => {
                            return (
                                <div key={product.id}>
                                    <div className='flex'>
                                        <Image src={product.images} alt={product.title} width={100} height={100} />
                                        <div className='ml-5 font-bold'>
                                            <h1>{product.title}</h1>
                                            <h1>${product.price}</h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='my-5'>
                    <Link className='bg-[#59fc28] px-4 font-bold text-xl py-1 rounded-md' href={"/"}>Buy more Products</Link>
                </div>
            </div>
        </div>
    )
}

export default Success