import Image from "next/image";

const Card = () => {
  return (
    <div className="flex flex-col relative shadow-lg">
      <div>
        <Image 
          src="/logoplaceholder.webp"
          alt="product image"
          height={300}
          width={300}
        />
      </div>
      <div className="relative">
        <h3>Macbook Pro M3 2023</h3>
        <p>DESCRIPTION</p>
        <span className="absolute top-0 right-0">
          $15
        </span>
      </div>
    </div>
  )
}

export default Card;