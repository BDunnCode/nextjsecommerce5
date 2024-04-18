import Card from "@/components/Card";
import Image from "next/image";
import { getProducts, client } from "@/sanity/lib/sanity-utils";
import Link from "next/link";

export default async function Home() {

  const products = await getProducts();
  console.log('Here are the products:', products)

  return (
    <div className="mt-10 flex flex-col max-w-7xl mx-auto px-4">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl font-bold text-primary text-center">Get the Best Gadgets at TechHouse!</h1>
        <p className="text-xl text-gray-500 text-center">Explore the latest in technology and elevate your lifestyle with cutting-edge gadgets.</p>
      </div>

      <div className="mt-10 space-y-6 flex justify-center items-center">
          <div className="col-span-1 lg:col-span-7 max-w-screen-xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 lg:mb-8 max-w-2xl opacity-80">Discover Tech Wonders at TechHouse!</h2>
            <p className="text-gray-500 font-light mb-6 lg:mb-8 lg:text-xl max-w-2xl">
              From innovative gadgets to cutting-edge tech, 
              TechHouse is your gateway to the future of technology. 
              Explore Now or speak to our tech experts.
            </p>

            <div className="flex gap-4">
              <Link href="/store">
                <button className="bg-primary text-white py-3 px-6 rounded-lg flex items-center hover:bg-white hover:text-primary">
                  Shop Now
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </Link>
              <Link href="/">
                <button className="bg-white text-primary border-primary border py-3 px-6 rounded-lg hover:text-white hover:bg-primary">Contact Us</button>
              </Link>
            </div>

          </div>
          <div className="hidden lg:block lg:col-span-5">
            <Image 
              src="/hero.jpg"
              alt="tech gear display"
              height={550}
              width={550}
            />
          </div>
        </div>


        <div className="flex flex-col justify-center items-center my-10 space-y-4">
            <h2 className="text-primary text-center font-bold text-4xl my-10">Featured Tech</h2>

            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {products.map((product) => (
                <li key={product.name}>
                  <Card product={product} />
                </li>
              ))}
            </ul>
          
        </div>
      
    </div>
  );
};
