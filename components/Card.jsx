import Image from "next/image";

const Card = () => {
  return (
    <div className="flex flex-col relative shadow-lg max-w-[400px]">
      <div>
        <Image 
          src="/imageplaceholder.jpg"
          alt="product image"
          height={400}
          width={400}
        />
      </div>
      <div className="relative my-10">
        <div>
          <h3 className="text-primary mb-3 font-semibold text-2xl">Macbook Pro M3 2023</h3>
          <p className="text-gray-600">DESCRIPTION</p>
        </div>
      </div>
      <span className="absolute bottom-0 right-0 text-primary font-semibold">
          $15
      </span>
    </div>
  )
}

export default Card;