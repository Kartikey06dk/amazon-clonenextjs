import Image from 'next/image'
import React from 'react'
import Ratings from './shared/Ratings'
import AddToCartContainer from './AddToCartContainer'

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
    return (
        <div className='w-[90%] mx-auto mt-10'>
            <div className='flex justify-between'>
                {
                    singleProduct.map((product: any) => {
                        return (
                            <div className='flex' key={product.id}>
                                <div className='flex' >
                                    <div className='bg-gray-100'>
                                        <Image className='mix-blend-multiply p-4' src={product.images} width={300} height={300} alt={product.title} />
                                    </div>
                                    <div className='mx-4 w-[60%]'>
                                        <h1 className='font-bold text-lg'>{product.title}</h1>
                                        <p>{product.description}</p>
                                        <Ratings ratings={product.rating} />
                                        <h1 className='font-bold'>{`$${product.price}`}</h1>
                                        <div>
                                            <h1 className='font-bold text-sm'>About this item</h1>
                                            <ul className="list-disc ml-4">
                                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquam et, consequuntur distinctio maiores non, at optio dicta ex, provident cupiditate deserunt!</li>
                                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquam et, consequuntur distinctio maiores non, at optio dicta ex, provident cupiditate deserunt!</li>
                                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquam et, consequuntur distinctio maiores non, at optio dicta ex, provident cupiditate deserunt!</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <AddToCartContainer product={product} />
                                </div>
                            </div>

                        )
                    })
                }

            </div>
        </div>
    )
}

export default SingleProduct