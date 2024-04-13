import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-10 flex flex-col max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl font-bold text-primary text-center">Get the Best Gadgets at TechTrove!</h1>
        <p className="text-xl text-gray-500 text-center">Explore the latest in technology and elevate your lifestyle with cutting-edge gadgets.</p>
      </div>

      <div className="mt-10 space-y-4 px-4 py-8 grid grid-cols-1 lg:grid-cols-12 lg:py-16 lg:gap-8 xl:gap-0">
          <div className="col-span-7">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 max-w-2xl">Discover Tech Wonders at GadgetGrove!</h2>
            <p className="text-gray-500 font-light mb-6 lg:mb-8 lg:text-xl max-w-2xl">
              From innovative gadgets to cutting-edge tech, 
              GadgetGrove is your gateway to the future of technology. 
              Explore Now or speak to our tech experts.
            </p>

            <div className="flex gap-4">
              <button className="bg-primary text-white py-3 px-6 rounded-lg">Get started</button>
              <button className="bg-primary text-white py-3 px-6 rounded-lg">Speak to Sales</button>
            </div>

          </div>
          <div className="col-span-5">
            <Image 
              src="/logoplaceholder.webp"
              alt="cell phones"
              height={400}
              width={400}
            />
          </div>
        </div>


        <div className="">
          <h2 className="text-primary text-center font-bold text-4xl">Featured Products</h2>
          <Card />
          
        </div>
      
    </div>
  );
};
