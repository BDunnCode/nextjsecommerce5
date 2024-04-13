"use client";

import Image from "next/image";
import { useState } from "react";

const ProductDetails = () => {
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
        <div className="border-red-500 border relative h-96">
          <Image  
            src="/imageplaceholder.jpg"
            alt=""
            className="object-cover"
            fill
          />
        </div>

        <div className="border-gray-200 border-t-4 flex flex-col px-5 gap-6 bg-slate-100 lg:bg-white lg:border-none">
          <h3 className="text-primary text-3xl font-semibold mt-6">SAMSUNG Galaxy S23</h3>
          <p className="text-gray-500 text-lg">DO MORE w/ EPIC BATTERY POWER: Galaxy S23 FE intuitively manages your usage to conserve energy on its own so you can go all day and into the night without charging¹,²; Share, stream, connect and create with a phone that’s ready for anything ELEVATE PHOTOS w/ AI-POWERED FEATURES: Like a built-in content curator, Single Take does your creative heavy lifting. Just point and hit record, and you’ll have multiple options and formats to choose from⁴ —photos, slow-motion video clips and more, all ready to</p>
          <div className="bg-gray-500 rounded-full h-10 w-10"></div>
          <p className="text-primary font-semibold text-xl">$900</p>
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
    </div>
  )
};

export default ProductDetails;