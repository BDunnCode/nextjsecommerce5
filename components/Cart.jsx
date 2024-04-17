"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FaTrash } from 'react-icons/fa';


const Cart = () => {
  const products = [
    {name: "item1", qty: 2, price: 300, color: "black"}, 
    {name: "item2", qty: 1, price: 400, color: "blue"},
    {name: "item3", qty: 1, price: 400, color: "blue"},
    {name: "item4", qty: 1, price: 400, color: "blue"},
    {name: "item5", qty: 1, price: 400, color: "blue"},
    {name: "item6", qty: 1, price: 400, color: "blue"},
    {name: "item7", qty: 1, price: 400, color: "blue"},
    {name: "item8", qty: 1, price: 400, color: "blue"},
    {name: "item9", qty: 1, price: 400, color: "blue"},
    {name: "item10", qty: 1, price: 400, color: "blue"},
    {name: "item11", qty: 1, price: 400, color: "blue"},
  ];

  const total = products.reduce((a,b) => a * a.price * a.qty + b * b.price * b.qty, 0)

  return (
    <div className='max-w-3xl mx-auto mt-20'>
      <h1 className="text-3xl text-center font-semibold text-[#5B20B6] mb-6">{products.length} items in Cart</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-[#5B20B6] border-b border-gray-200">
            <th className="py-2 px-4">Product</th>
            <th className="py-2 px-4">Quantity</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Remove</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product?.name} className="hover:bg-gray-50 text-center border-b border-gray-300 text-[#5B20B6]">
              <td className="py-2 px-4 flex items-center">
                <Image className='mr-2' src={product?.image} width={50} height={30} alt="art" />
                {product?.name}
              </td>
              <td className="py-2 px-4">{product?.quantity}</td>
              <td className="py-2 px-4">${product?.price}</td>
              <td className="py-2 px-4">
                <FaTrash onClick={()=>{}} className="text-[#5B20B6] mx-auto cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total Section */}
         <div className="mt-4 text-[#5B20B6] ml-auto">
            <p className="text-lg font-semibold text-right mr-4">Total: $0</p>
         </div>
          

          
       
          <div className="mt-6 text-[#5B20B6] max-w-sm mx-auto space-y-4">
            
            <button onClick={() => {}} className="text-lg w-full font-semibold text-center mr-4 bg-[#5B20B6]  text-white py-2 px-4 rounded hover:text-[#5B20B6] hover:bg-white border border-[#5B20B6]">
              Pay
            </button>  
            
           
            <button className="text-lg w-full font-semibold text-center mr-4 bg-white hover:bg-[#5B20B6] hover:text-white text-[#5B20B6] border border-[#5B20B6] py-2 px-4 rounded">
              <Link className='' href="/">
                Back to Shopping
              </Link>  
            </button>   
        </div>
    </div>
  );};

export default Cart;