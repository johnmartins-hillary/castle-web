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
    <div className="w-full pt-[100px] pb-[35px] md:pt-[13px]  flex md:px-[13px] items-stretch justify-between h-[140px] overflow-hidden">
      <div className="w-1/2 flex items-center">
        <Image
          width={120}
          height={194}
          src={"/images/logo-black.png"}
          className="h-[194px] w-[120px] lg:w-[194] "
          alt="logo"
        />
      </div>

      {/* Display UL menu on large screens */}
      <div className="hidden lg:flex items-center  w-1/2 justify-center">
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
      <div className="flex pr-[35px]  lg:hidden items-center justify-end w-1/2">
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
