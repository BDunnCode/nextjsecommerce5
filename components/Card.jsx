import Image from "next/image";
import Link from "next/link";

const Card = ({ product }) => {
  return (
    <div className="flex flex-col relative shadow-lg max-w-[400px]">
      <Link href={`product-details/${product.slug}`}>
        <div className="relative h-96">
          <Image 
              src={product.image}
              alt="product image"
              fill              
              className="hover:scale-105 transition duration-300 object-cover"
            />
        </div>

          <div className="flex flex-col justify-start mt-10 mb-16">
            <h3 className="text-primary mb-3 font-semibold text-2xl text-center">{product.name}</h3>
            <p className="text-gray-600 text-xl text-center truncate px-4">{product.description}</p>
          </div>
        <span className="absolute bottom-0 right-0 text-primary font-semibold bg-[#e8e5f0] p-2">
            ${product.price}
        </span>
        </Link>
    </div>
  )
}

export default Card;