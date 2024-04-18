"use client";

import Image from 'next/image';
import Link from 'next/link';

import { FaTrash } from 'react-icons/fa';
import useCartStore from "@/cartStore";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from 'react';
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { createOrder } from '@/sanity/lib/sanity-utils';

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const totalItems = useCartStore((state) => state.totalItems);
  const cartTotal = useCartStore((state) => state.cartTotal);
  const [ loading, setLoading ] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  const stripe = useStripe();
  const elements = useElements();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  }
  
  const onSubmit = async (e) => {
    const cardElement = elements?.getElement("card")
    e.preventDefault();
    setLoading(true);

    try {
      if(!stripe || !elements){
        return
      }

      const data = await axios.post("/api/stripe", {
        data:{
          amount:cartTotal.toFixed(0)
        }
      })

      const res = await stripe.confirmCardPayment(data?.data?.intent,{
        payment_method:{
          card:cardElement
        }
      })

      const status = res?.paymentIntent?.status;
      if(status === 'succeeded'){
        setLoading(false);
        console.log('success')
        const email = user?.emailAddresses[0]?.emailAddress;
        console.log(email)
        const res = await createOrder(email, cart);
        if(res){
          router.push('/orders')
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='max-w-3xl mx-auto mt-20'>
      <h1 className="text-3xl text-center font-semibold text-primary mb-6">{totalItems} Items in Cart</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-primary border-b border-gray-200">
            <th className="py-2 px-4">Product</th>
            <th className="py-2 px-4">Quantity</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map((item) => (
            <tr key={item?.name} className="hover:bg-gray-50 text-center border-b border-gray-300 text-primary">
              <td className="py-2 px-4 flex items-center">
                <Image 
                  src={item?.image} 
                  className='mr-2' 
                  alt="item" 
                  height={30}
                  width={50}
                  />
                  
                {item?.name}
              </td>
              <td className="py-2 px-4">{item?.quantity}</td>
              <td className="py-2 px-4">${item?.price}</td>
              <td className="py-2 px-4">
                <FaTrash onClick={()=>{handleRemoveFromCart(item._id)}} className="text-primary mx-auto cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total Section */}
         <div className="mt-4 text-primary ml-auto">
            <p className="text-lg font-semibold text-right mr-4">Total: ${cartTotal.toFixed(2)}</p>
         </div>

         <div className="my-6 bg-gray-200 p-10">
          {
            cartTotal > 0 && (<>
              <CardElement />
            </>)
          }
         </div>


          <div className="mt-6 text-primary max-w-sm mx-auto space-y-4">
            
            {
              cartTotal > 0 && (
                <button onClick={onSubmit} className="text-lg w-full font-semibold text-center mr-4 bg-primary  text-white py-2 px-4 rounded hover:text-primary hover:bg-white border border-primary">
                  { loading ? "Loading..." : "Checkout" }
                </button>    
              )
            }
           
            <button className="text-lg w-full font-semibold text-center mr-4 bg-white hover:bg-primary hover:text-white text-primary border border-primary py-2 px-4 rounded">
              <Link className='' href="/">
                Back to Shopping
              </Link>  
            </button>   
        </div>
    </div>
  );};

export default Cart;