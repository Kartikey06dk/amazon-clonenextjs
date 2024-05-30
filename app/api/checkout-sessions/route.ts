import { NextRequest, NextResponse } from "next/server";

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)
export async function POST(req:NextRequest, res:NextResponse){
    const body = await req.json();

    // console.log(body);

    const {items, email} = body;

    //stripe payment gateway
    const arrangedItems = items.map((item:any) => ({
        price_data : {
            currency:'usd',
            product_data:{
                name:item.title,
                images:[item.images]
            },
            unit_amount:Math.floor(item.price*72)
        },
        quantity:1
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_address_collection:{
            allowed_countries:['US', 'CA', 'GB']
        },
        line_items:arrangedItems,
        mode:'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata:{
            email,
            images:JSON.stringify(items.map((item:any) => item.images))
        }
    })
    // console.log(items);
    // console.log(email);

    return NextResponse.json({
        id:session.id
    })

}





























// import { NextRequest, NextResponse } from "next/server";
// const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

// export async function POST(req: NextRequest, res: NextResponse) {
//     try {
//         const body = await req.json();
//         const { items, email } = body;

//         // Validate request body
//         if (!items || !email) {
//             return NextResponse.json({ error: "Missing items or email" }, { status: 400 });
//         }

//         // Arrange items for Stripe
//         const arrangedItems = items.map((item: any) => ({
//             price_data: {
//                 currency: 'usd',
//                 product_data: {
//                     name: item.title,
//                     images: [item.images],
//                 },
//                 unit_amount: Math.floor(item.price * 72),
//             },
//             quantity: 1,
//         }));

//         // Create Stripe checkout session
        
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ['card'],
//             shipping_address_collection: {
//                 allowed_countries: ['US', 'CA', 'GB'],
//             },
//             line_items: arrangedItems,
//             mode: 'payment',
//             success_url: `${process.env.HOST}/success`,
//             cancel_url: `${process.env.HOST}/checkout`,
//             metadata: {
//                 email,
//                 images: JSON.stringify(items.map((item: any) => item.images)),
//             },
//         });

//         return NextResponse.json({ id: session.id });
//     } catch (error) {
//         console.error("Error creating Stripe session:", error);
//         return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//     }
// }

// requestId: 'req_0IiVBbJTf1J1gt',
// statusCode: 400,
// charge: undefined,
// decline_code: undefined,
// payment_intent: undefined,
// payment_method: undefined,
// payment_method_type: undefined,
// setup_intent: undefined,
// source: undefined
// }

