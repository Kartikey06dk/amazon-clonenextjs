
import React from 'react'
import rating from '../../public/star-icon.png'
import Image from 'next/image'

interface RatingsProps {
    ratings: string; // Assume ratings is a JSON string
}

const Ratings: React.FC<RatingsProps> = ({ ratings }) => {
    let parsedRatings;

    try {
        parsedRatings = JSON.parse(ratings);
    } catch (error) {
        console.error("Failed to parse ratings:", error);
        parsedRatings = { count: 0 }; // Fallback in case of parsing error
    }

    return (
        <div className='flex items-center'>
            {
                Array(4).fill(1).map((dummyData, index) => (
                    <Image key={index} src={rating} alt="product's rating" width={20} height={20}/>
                ))
            }
            <h1 className='text-[#4688eb] ml-2 font-medium'>{parsedRatings.count} ratings</h1>
        </div>
    )
}


export default Ratings

