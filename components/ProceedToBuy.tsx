import React from 'react'
import SubTotal from './shared/SubTotal'
import { useRouter } from 'next/navigation'


const ProceedToBuy = ({ length, totalPrice }: {length: number, totalPrice: number}) => {

    const router = useRouter();



    return (
        <div className='w-[25%] h-fit border border-gray-400 ml-4'>
            <div className='p-4 text-sm'>
                <p className='text-green-500 font-medium'>Your order is eligible for FREE Delivery.</p>
                <p>Choose <span className='text-green-500 font-medium'>FREE Delivery</span> option at checkout.</p>
                <SubTotal left={true} length={length} totalPrice={totalPrice}/>

                <button 
                onClick={() => {
                    router.push("/checkout");
                }}
                className='bg-[#FFD814] w-full py-1 rounded-md shadow-md my-4'>Proceed To Buy</button>
            </div>
        </div>
    )
}

export default ProceedToBuy