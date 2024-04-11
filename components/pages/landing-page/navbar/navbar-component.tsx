"use client";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react"; // Import useState hook for managing state
import LandingPageMenu from "@/components/mobile-menus/landing-page-menu.component";

const NavBar = () => {
  const routes = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full flex items-stretch justify-between h-16 max-lg:px-14 max-lg:py-14 max-sm:px-3 ">
      <div className="w-1/2 flex items-center">
        <Image
          width={120}
          height={120}
          src={"/images/logo-black.png"}
          className="h-[120px] w-auto lg:w-[120px] "
          alt="logo"
        />
      </div>

      {/* Display UL menu on large screens */}
      <div className="flex max-lg:hidden items-center  w-1/2 justify-center">
        <ul className="flex items-center justify-center gap-4">
          {routes.map(({ name }, index) =>
            <li
              key={index}
              className="font-semibold text-sm cursor-pointer mx-2"
            >
              {name}
            </li>
          )}
        </ul>
      </div>

      {/* Display menu icon on mobile and tablet screens */}
      <div className="hidden max-lg:flex items-center justify-end w-1/2">
        <CiMenuBurger
          className="cursor-pointer w-[24px] h-[24px] "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      <LandingPageMenu setShowModal={setIsMenuOpen} showModal={isMenuOpen} />
    </div>
  );
};

export default NavBar;
