"use client";
import Image from 'next/image';
import React from 'react'
import { FaTrash } from 'react-icons/fa';

const Orders = () => {
  const products = [
    { id: 1, name: 'Product 1', qty: 1, paid: 100, paymentStatus: "paid", deliveryStatus: "in transit" },
    { id: 2, name: 'Product 2', qty: 1, paid: 100, paymentStatus: "paid", deliveryStatus: "delivered" },
    { id: 3, name: 'Product 3', qty: 1, paid: 100, paymentStatus: "paid", deliveryStatus: "in transit" },
  ];

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
          {products?.map((product) => (
            <tr key={product?._id} className="hover:bg-gray-50 text-center border-b border-gray-300 text-primary">
              <td className="py-2 px-4 flex items-center">
                <Image className='mr-2' src={product?.image} width={50} height={30} alt="art" />
                {product?.name}
              </td>
              <td className="py-2 px-4">{product?.qty}</td>
              <td className="py-2 px-4">${product?.paid}</td>
              <td className="py-2 px-4">
                {/* <FaTrash onClick={()=>{}} className="text-[#5B20B6] mx-auto cursor-pointer" /> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Orders;