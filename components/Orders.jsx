import Image from 'next/image';
import React from 'react'
import { currentUser } from "@clerk/nextjs";
import { getOrdersByEmail } from '@/sanity/lib/sanity-utils';

export default async function Orders() {
  const user = await currentUser();

  if(!user){
    return <div className="text-center mt-20">Please sign in to view your orders</div>
  }

  const Orders = await getOrdersByEmail(user?.emailAddresses[0].emailAddress);

  return (
    <div className="max-w-3xl mx-auto mt-20">
      <h1 className="text-3xl text-center font-semibold text-primary">Orders</h1>
      <table className="w-full border-collapse mt-10">
        <thead>
          <tr className="text-primary border-b border-gray-300">
            <th className="py-2 px-4">Product</th>
            <th className="py-2 px-4">Quantity</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Payment Status</th>
            <th className="py-2 px-4">Delivery Status</th>
          </tr>
        </thead>
        <tbody>
          {Orders?.map((order) => (
            <tr key={order?._id} className="hover:bg-gray-50 text-center border-b border-gray-300 text-primary">
              <td className="py-2 px-4 flex items-center">
                {order?.name}
              </td>
              <td className="py-2 px-4">{order?.qty}</td>
              <td className="py-2 px-4">${order?.price}</td>
              <td className="py-2 px-4">{order?.paid ? (<span className="text-green-500">Paid</span>) : (<span className="text-red-500">Unpaid</span>)}</td>
              <td className="py-2 px-4">{order?.delivered ? (<span className="text-green-500">Delivered</span>) : (<span className="text-primary">In Transit</span>)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

