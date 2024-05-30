"use client"

import SingleProduct from '@/components/SingleProduct'
import { useSupabase } from '@/lib/supabase/hooks/useSupabase'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function ProductPage() {
    // on /dashboard/[id] where pathname is /dashboard/nextjs
    const { id } = useParams() // id === "nextjs"
    const { singleProduct, getSingleProduct } = useSupabase();

    useEffect(()=>{
        getSingleProduct(Number(id))
    },[id, getSingleProduct])

    // console.log(singleProduct);
    
    return (
        <div>
            <SingleProduct singleProduct={singleProduct}/>
        </div>
    )
}




// const page = () => {
//     const {id} = useParams()
//     return (
//         <div>
//             <SingleProduct />
//             <h1>{id}</h1>
//         </div>
//     )
// }

// export default page