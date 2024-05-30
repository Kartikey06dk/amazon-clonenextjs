"use client"
import SearchResult from '@/components/SearchResult';
import { useSupabase } from '@/lib/supabase/hooks/useSupabase';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'



export default function SearchPage() {
    // on /dashboard/[team] where pathname is /dashboard/nextjs
    const { query } = useParams() // team === "nextjs"
    const {filterData, getFilteredData} = useSupabase();

    useEffect(()=>{
        getFilteredData(query.toString());
    },[query, getFilteredData])

    return (
        <div>
            <SearchResult filterData={filterData}/>
        </div>
    )
}















// const page = () => {
//     const {query} = useParams();
//     const {filterData, getFilteredData} = useSupabase();

//     useEffect(()=>{
//         getFilteredData(query.toString());
//     },[])

//     return (
//         <div>
//             <SearchResult filterData={filterData}/>
//         </div>
//     )
// }

// export default page
