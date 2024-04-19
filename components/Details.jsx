"use client";
import Image from "next/image";
import {useState} from "react";
import useCartStore from '@/cartStore'

const Details = ({product}) => {
  const [selectedImage, setSelectedImage] = useState(product?.image);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [qty, setQty] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => { 
    addToCart({ product, quantity:qty, color:selectedColor})
  }

  const handleQtyChange = (e) => {
    let newQty = parseInt(e.target.value);

    // Check if new quantity is less than 1
    if (newQty < 1) {
      newQty = 1;
    }

    setQty(newQty);
  };

  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
        <div className="relative h-96">
          <Image  
            src={selectedImage}
            alt="Image of Product"
            className="object-cover"
            fill
          />
        </div>

        <div className="border-gray-200 border-t-4 flex flex-col px-5 gap-6 bg-slate-100 lg:bg-white lg:border-none">
          <h3 className="text-primary text-3xl font-bold mt-6">{product?.name}</h3>
          <p className="text-gray-500 text-lg">{product?.description}</p> 

          <div className="flex mt-6 space-x-3">
            {
              product?.colors?.map((color) => {
                switch(color){
                  case 'Grey':
                    return <div onClick={() => {setSelectedColor(color)}} key={color} className={`${color == selectedColor ? "border-4 border-primary": ""} w-8 h-8 rounded-full bg-gray-500 cursor-pointer hover:border-4 border-primary"`} />
                  case 'Blue':
                    return <div onClick={() => {setSelectedColor(color)}} key={color} className={`${color == selectedColor ? "border-4 border-primary": ""} w-8 h-8 rounded-full bg-blue-800 cursor-pointer hover:border-4 border-primary"`} />
                  case 'Black':
                    return <div onClick={() => {setSelectedColor(color)}} key={color} className={`${color == selectedColor ? "border-4 border-primary": ""} w-8 h-8 rounded-full bg-gray-800 cursor-pointer hover:border-4 border-primary"`} />
                  default:
                    return <div onClick={() => {setSelectedColor(color)}} key={color} className={`${color == selectedColor ? "border-4 border-primary": ""} w-8 h-8 rounded-full bg-gray-500 cursor-pointer hover:border-4 border-primary"`} />
                }
              })
            }
          </div>

          <p className="text-primary font-semibold text-xl">${product?.price}</p>
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
            <button onClick={handleAddToCart} className="bg-primary text-white py-3 px-5 rounded-lg hover:opacity-80">Add to Cart</button>
          </div>

        </div>
      </div>

      <div className="mt-2 mb-4">
          <ul className="flex gap-4 overflow-x-auto">
              <li onClick={()=>{setSelectedImage(product?.image)}} className={`${selectedImage == product?.image? "border-4 border-primary":""} w-20 relative overflow-hidden aspect-ratio-1 cursor-pointer hover:border-4 border-[#5b20b6]`}>
                  <Image
                    src={product?.image}
                    fill
                    className="object-cover"
                    alt="small_art1"
                  />
                </li>
          {
            product?.extraImages?.map((image) => (
              <li key={image} onClick={()=>{setSelectedImage(image)}} className={`${selectedImage == image ? "border-4 border-primary": ""} w-20 h-20 relative overflow-hidden aspect-square cursor-pointer`}>
                <Image 
                  src={image}
                  alt="product_small"
                  className="object-cover"
                  fill
                />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Details;