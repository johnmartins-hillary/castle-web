import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomTabBar = () => {
  const pathname = usePathname();
  const routes = [
    {
      name: "Home",
      icon: "/images/home-icon.png",
      activeIcon: "/images/navicon/Home_fill.png",
      path: "/dashboard"
    },
    {
      name: "Explore",
      icon: "/images/gps-icon.png",
      activeIcon: "/images/navicon/Gps_fixed_fill.png",
      path: "/explore"
    },
    {
      name: "Wallet",
      icon: "/images/wallet-icon.png",
      activeIcon: "/images/navicon/Wallet_fill.png",
      path: "/fund-wallet"
    },
    {
      name: "My Circle",
      icon: "/images/user-plus-icon.png",
      activeIcon: "/images/navicon/User_fill_add.png",
      path: "/your-circle"
    },


  ];
  return (
    <>
      <div className="w-full fixed left-0 right-0 z-[999] bg-white shadow shadow-black p-[23px] bottom-0  md:hidden">
        <div className="w-full flex items-center justify-between" >
          {routes.map(({ name, icon, path, activeIcon }) => {
            const isActive = pathname === path;

            return (
              <div
                key={name}
                className={`w-[25%]  after:w-[27px] ${isActive && "after:h-[1px] after:absolute after:bg-red-600 after:bottom-[10px]"}  flex flex-col items-center justify-center`}
              >
                <Image
                  src={icon}
                  height={5}
                  width={25}
                  className=" object-contain"
                  alt="icon"
                />
                <Link
                  href={path}
                  key={name}
                  className={` ${
                    pathname === path ? "font-bold " : " font-normal"
                  } font-normal text-xs cursor-pointer  p-0 mt-1`}
                >
                  {name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BottomTabBar;
