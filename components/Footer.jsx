import Link from "next/link";
import Image from "next/image";

import { siteConfig } from "./../config/site";


const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto px-6 py-6 sm:py-10 sm:p">
        <nav className="" aria-label="">
        <ul className="flex justify-center gap-5">
            {siteConfig.socialLinks.map((item) => (
              <li key={item.name} className="hover:bg-primary p-3 rounded-full">
                <Link href="#">
                  <Image
                    src={item.link}
                    alt={item.name}
                    height={24}
                    width={24}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <ul className="columns-2 sm:flex sm:justify-center sm:space-x-12 mt-10">
            {siteConfig.footer.map((item) => (
              <li key={item.name} className="hover:bg-primary">
                <Link href="/" className="text-sm leading-6">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link 
          href="#"
          className="mt-10 flex justify-center text-xs leading-5"
        >
          <p className="flex justify-center hover:bg-primary max-w-2xl">
            &copy; {new Date().getFullYear()} {siteConfig.name} LLC. All rights reserved.
          </p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;