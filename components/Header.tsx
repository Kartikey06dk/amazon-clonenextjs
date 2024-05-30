"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import amazonLogo from '../public/amazon-logo-2.webp'
import { BiCart } from 'react-icons/bi'
import { CgSearch } from 'react-icons/cg'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/lib/supabase/hooks/redux'
import { getCart } from '@/redux/cartSlice'
import { supabase } from '@/lib/supabase/products'

const belowHeadersItems = [
    
"All",
"Amazon miniTV",
"Sell",
"Today's Deals",
"Mobiles",
"Electronics",
"Prime",
"Home & Kitchen",
"Fashion",
"New Releases",
"Amazon Pay",
"Computers"

]
const Header = () => {


    const [query,setQuery] = useState<string>("");

    const [user,setUser] = useState<any>(null);

    const router = useRouter();

    //for adding product to cart...
    const cart = useAppSelector(getCart);

    const searchHandler = () => {
        console.log("clicked!!!")
        router.push(`/search/${query}`)
    }

    useEffect(()=>{
        const getUserData = async () => {
            const {data:{user}} = await supabase.auth.getUser()
            setUser(user);
        }
        getUserData()
    },[])

    // console.log(user);
    

    return (
        <>
        
            <div className='bg-[#131921] text-white py-1'>
                <div className='flex items-center justify-between w-[90%] mx-auto'>
                    <Link href='/' className='w-[10%]'>
                        <Image src={amazonLogo} alt='logo' height={130} width={130} />
                    </Link>
                    <div className='flex items-center w-[60%]'>
                        <input 
                        className='w-full p-2 rounded-l-md outline-none text-black' 
                        onChange={(e) => setQuery(e.target.value)}
                        type='text' placeholder='Search Amazon.in'/>
                        
                        <div
                        onClick={searchHandler}
                        className='bg-[#FEBD69] cursor-pointer hover:bg-[#f8ad4b] p-2 rounded-r-md'>
                            <CgSearch size={"24px"} className='text-black'/>
                        </div>
                    </div>
                    <div className='flex items-center justify-around w-[23%]'>
                        <div className='cursor-pointer'>
                            <h1
                            onClick={() => router.push("/signin")}
                            className='text-xs hover:underline'>{`Hello ${user ? user?.identities[0]?.identity_data.name : "Signin"}`}</h1>
                            <h2 className='font-medium text-sm'>Accounts & Lists</h2>
                        </div>
                        <div>
                            <p className='text-xs'>Returns</p>
                            <h1 className='font-medium text-sm'>& Orders</h1>
                        </div>
                        <div className='cursor-pointer'>
                            <Link href='/cart'>
                            
                                <p className='relative top-3 left-5 text-[#FEBD69]'>{cart.length}</p>
                                <div className='flex'>
                                    <div>
                                        <BiCart size={"40px"}/>
                                    </div>
                                    <h1 className='mt-4'>cart</h1>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            {/* Below Header... */}
            <div className='bg-[#232F3E] w-full text-white p-2 flex justify-between items-center'>
                <div>

                {
                    belowHeadersItems.map((items ,idx) => {
                        
                        return(
                            <Link href={`/${items}`} key={idx}
                            className='mx-2 hover:border border border-transparent hover:border-white p-1' 
                            >{items}</Link>
                        )
                    })
                }
                </div>

                <div className="mr-5">
                    <h1 onClick={ async () => {
                        const {error} = await supabase.auth.signOut();
                        router.push("/signin");
                    }} className='text-[#FEBD69] font-bold cursor-pointer hover:underline'>Sign out</h1>
                </div>
            </div>


        </>
    )
}

export default Header