import React from 'react';
import prime from "../public/prime-logo.png";
import Image from "next/image";
import { useAppDispatch } from '@/lib/supabase/hooks/redux';
import { addToCart } from '@/redux/cartSlice';
import { useRouter } from 'next/navigation';


const AddToCartContainer = ({product}: {product:any}) => {
    const dispatch = useAppDispatch();

    const router = useRouter();

    return (
        <div className='border border-gray-300 rounded-md h-fit text-sm'>
            <div className='p-4'>
                <Image src={prime} width={40} height={40} alt='prime-logo'/>
            </div>
            <div className='p-4'>
                <h1><span className='text-[#147C8F]'>FREE delivery</span> Thursday, 19 November. <span className='text-[#147C8F]'>Details</span></h1>
                <h1 className='mt-4'>Or fastest delivery <span className='font-bold'>Tomorrow</span>, 18 November. Order within <span className='font-bold'>17 hrs 17 mins.</span> Details</h1>
                <p className='text-[#147C8F] my-2'>Delivered to Kartikey - 211132</p>

                <button onClick={() => {
                    dispatch(addToCart(product));
                    router.push("/cart")
                }} className=' bg-[#FFD814] w-full rounded-full py-2'>Add to Cart</button>
                <button onClick={() => {
                    dispatch(addToCart(product));
                    router.push("/checkout")
                }} className=' bg-[#ff7606] w-full rounded-full py-2 my-2'>Buy Now</button>
            </div>
        </div>
    )
}

export default AddToCartContainer