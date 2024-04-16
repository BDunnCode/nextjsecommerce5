"use client";
import Image from "next/image";
import {useState} from "react";

const Details = ({product}) => {
  // const [selectedImage, setSelectedImage] = useState(product?.image);
  // const [selectedColor, setSelectedColor] = useState(product?.colors[0]);

  const [qty, setQty] = useState(1);

  const handleQtyChange = (e) => {
    let newQty = parseInt(e.target.value);

    // Check if new quantity is less than 1
    if (newQty < 1) {
      newQty = 1;
    }

    setQty(newQty);
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
        <div className="relative h-96">
          <Image  
            src={product.image}
            alt="Image of Product"
            className="object-cover"
            fill
          />
        </div>

        <div className="border-gray-200 border-t-4 flex flex-col px-5 gap-6 bg-slate-100 lg:bg-white lg:border-none">
          <h3 className="text-primary text-3xl font-semibold mt-6">{product.name}</h3>
          <p className="text-gray-500 text-lg">{product.description}</p> 
          <p className="text-primary font-semibold text-xl">${product.price}</p>
          <div className="flex flex-col">
            <label className="text-gray-500 ml-2">Qty</label>
            <input 
              type="number" 
              className="border-gray-300 border rounded-lg w-20 h-10 p-4"
              value={qty}
              onChange={handleQtyChange}
            />
          </div>
          <div>
            <button className="bg-primary text-white py-3 px-5 rounded-lg">Add to Cart</button>
          </div>

        </div>
      </div>

      <div className="mt-2">
        <ul className="flex gap-4 overflow-x-auto">
          <li className="w-20 h-20 relative overflow-hidden aspect-square cursor-pointer"></li>
        </ul>
      </div>

    </div>
  )
};

export default Details;