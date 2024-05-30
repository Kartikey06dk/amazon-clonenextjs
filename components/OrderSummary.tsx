import { useAppSelector } from '@/lib/supabase/hooks/redux'
import { supabase } from '@/lib/supabase/products'
import { getCart } from '@/redux/cartSlice'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import React from 'react'



const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY!)

const OrderSummary = ({totalPrice}:{totalPrice:any}) => {

    // alert(process.env.NEXT_STRIPE_PUBLISHABLE_KEY!);
    // console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY!)

    const cart = useAppSelector(getCart)

    const createStripeSession = async () => {

        const {data:{user}} = await supabase.auth.getUser();

        const stripe = await stripePromise;

        const checkoutSession = await axios.post("/api/checkout-sessions", {
            items:cart,
            email:user?.email
        })

        // console.log(checkoutSession)

        //redirect to checkout session
        const result = await stripe?.redirectToCheckout({
            sessionId:checkoutSession.data.id,
        })
        if(result?.error){
            console.log(result.error.message)
        }
    }

    return (
        <div className='border border-gray p-4 mt-5 h-fit'>
            <div>
                <h1 className='font-bold text-xl px-5 mb-5'>Order Summary</h1>
                <div className='text-xs'>
                    <div className='flex items-center justify-between'>
                        <p>Items:</p>
                        <p>$78</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>Delivery:</p>
                        <p>$40</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>Total:</p>
                        <p>$118</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>Promotion Applied:</p>
                        <p>-$4</p>
                    </div>
                    <div className='flex justify-between w-full font-bold text-lg text-[#B12704] py-1 my-1 border-b border-t border-gray-300'>
                        <h1>Order Total:</h1>
                        <h1>${totalPrice}</h1>
                    </div>
                </div>
                <button onClick={createStripeSession} className='bg-[#FFD814] w-full  font-bold rounded-md px-4 py-1 my-3'>Place Your Order Now</button>
            </div>
        </div>
    )
}

export default OrderSummary