"use client"

import { useSupabase } from '@/lib/supabase/hooks/useSupabase'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import CategoryWiseProduct from './shared/CategoryWiseProduct'

const HomePage = () => {

    const {
        mensProduct,
        getMensClothing,
        womensProduct,
        getWomensClothing,
        jewelleryProduct, getJewellery } = useSupabase()


    useEffect(() => {
        getMensClothing();
        getWomensClothing();
        getJewellery();
    }, [getMensClothing,getWomensClothing,getJewellery])

    // console.log("mensProduct : ", mensProduct);
    // console.log("jewellery : ", jewelleryProduct);

    // console.log("womensProduct : ", womensProduct);


    return (
        <div>
            <Image
            style={{
                maskImage:'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))'
            }}
            src={"https://i.gadgets360cdn.com/large/amazon-main-banner-1200x675_1696706103200.jpg"} width={10000} height={1000} alt='banner' />

            <div className='w-[90%] mx-auto grid grid-cols-3 gap-2 relative -top-64'>
                {
                    mensProduct.map((product: any) => {
                        return (
                            <div key={product.id}>
                                <CategoryWiseProduct product={product} />
                            </div>
                        )
                    })
                }
                {
                    womensProduct.map((product: any) => {
                        return (
                            <div key={product.id}>
                                <CategoryWiseProduct product={product} />
                            </div>
                        )
                    })
                }
                {
                    jewelleryProduct.map((product: any) => {
                        return (
                            <div key={product.id}>
                                <CategoryWiseProduct product={product} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HomePage