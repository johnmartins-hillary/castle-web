'use client'
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link"
import {useRouter} from "next/navigation"
import { usePathname } from 'next/navigation'
const SideBar = () => {
const route = useRouter()
const pathname = usePathname()
const logOutHandler =()=>{
    route.push("/auth/sign-in")
}
    const sideBarLinks=[
        {
            name:"Home",
            icon:"/images/home-icon.png",
            path:"/dashboard"
        },
        {
            name:"Explore",
            icon:"/images/gps-icon.png",
            path:"/explore"
        },
        {
            name:"Profile",
            icon:"/images/user-icon.png",
            path:"/profile"
        },
        {
            name:"Notifications",
            icon:"/images/bell-icon.png",
            path:"/notifications"
        },
        {
            name:"Wallet",
            icon:"/images/wallet-icon.png",
            path:"/fund-wallet"
        },
        {
            name:"Your Circle",
            icon:"/images/user-plus-icon.png",
            path:"/your-circle"
        },
        {
            name:"Get Verified",
            icon:"/images/check-icon.png",
            path:"/get-verified"
        },
        {
            name:"Settings",
            icon:"/images/setting-icon.png",
            path:"/settings"
        },
    ]
    return ( 
        <>
        <div className=" w-min[300px] w-[300px] flex flex-col justify-start bg-sidebar_bg left-0 min-h-screen px-4  top-0 fixed  " >
        <div className="w-full " >
            <Image src={'/images/logo-black.png'} className="" width={94} height={0} alt="logo" />
        </div>

        <div className="w-full mt-1 px-7 "  >
            <ul className="w-full p-0">
                {/* {sideBarLinks.map(({name,icon,path})=>{
                    <></>
            })} */}
            {sideBarLinks.map(({name,icon,path})=>{
                const isActive = pathname === path;
                console.log(isActive,pathname)
                return(
                    <div key={name} className={`w-full flex items-center justify-start gap-2 mb-7`} >
                    <Image src={icon} height={5} width={25} className=" object-contain" alt="icon" />
                    <Link href={path} key={name} className={` text-black font-normal text-base cursor-pointer  p-0 mt-1`} > 
                        {name}
                    </Link>
                    </div>
                )
            })}
            </ul>
        </div>
        <div className="w-full mt-2 px-6 "  >
                <Button onClick={logOutHandler} className="bg-primary_color rounded-xl py-7 text-white w-48 " >
                Log Out
                </Button>
        </div>
        </div>
        </>
     );
}
 
export default SideBar;