"use client";

import Image from "next/image";
import Link from "next/link";

import {UserButton} from "@clerk/nextjs";
import { FaShoppingCart, FaTruck } from "react-icons/fa";
import useCartStore from '@/cartStore'

const Header = () => {
  const totalItems = useCartStore((state) => state.totalItems);
  
  return (
    <div className="border-b-2">
      <div className="flex justify-between items-center p-3 max-w-7xl mx-auto">

        <Link href="/">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
            />
            <div className="text-2xl lg:text-3xl font-bold">
              TechHouse
            </div>
          </div>
        </Link>

        <div className="flex gap-3 items-center relative">
          <Link href="/cart">
            <FaShoppingCart className="text-3xl hover:scale-125 text-primary transform duration-150" />
          </Link>
          { totalItems > 0 && (
              <div className="bg-blue-500 h-5 w-5 rounded-full text-white text-xs flex items-center justify-center">
                {totalItems}
              </div>
            )
          }

          <Link href="/orders">
            <FaTruck className="text-3xl hover:scale-125 text-primary transform duration-150" />
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>

      </div>
    </div>
  )
};

export default Header;