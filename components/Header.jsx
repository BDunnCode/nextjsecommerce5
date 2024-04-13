import Image from "next/image";

import { FaShoppingCart, FaTruck } from "react-icons/fa";

const Header = () => {
  return (
    <div className="border-b-2">
      <div className="flex justify-between items-center p-3 max-w-7xl mx-auto">

        <div className="flex items-center gap-3">
          <Image
            src="/logoplaceholder.webp"
            alt="logo"
            width={50}
            height={50}
          />
          <div className="text-2xl lg:text-3xl font-bold">
            TechTrove
          </div>
        </div>

        <div className="flex gap-3">
          <FaShoppingCart className="text-3xl hover:scale-125 text-primary transform duration-150" />
          <FaTruck className="text-3xl hover:scale-125 text-primary transform duration-150" />
        </div>


      </div>
    </div>
  )
};

export default Header;