'use client'
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link"
import {useRouter} from "next/navigation"
import { usePathname } from 'next/navigation'
import { useLogOutUserMutation } from "@/services/auth";
import { useEffect } from "react";
import { useToast } from "../ui/use-toast";
const SideBar = () => {
const route = useRouter()
const pathname = usePathname()
const [logOutUser,{isLoading,isSuccess,data,isError}] = useLogOutUserMutation()
const {toast} = useToast()

const logOutHandler =()=>{
    logOutUser()
}
    const sideBarLinks=[
        {
            name:"Home",
            icon:"/images/home-icon.png",
            activeIcon: "",
            path:"/dashboard"
        },
        {
            name:"Explore",
            icon:"/images/gps-icon.png",
            activeIcon: "",
            path:"/explore"
        },
        {
            name:"Profile",
            icon:"/images/user-icon.png",
            activeIcon: "",
            path:"/profile"
        },
        {
            name:"Notifications",
            icon:"/images/bell-icon.png",
            activeIcon: "",
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
            activeIcon: "",
            path:"/your-circle"
        },
        {
            name:"Get Verified",
            icon:"/images/check-icon.png",
            activeIcon: "",
            path:"/get-verified"
        },
        {
            name:"Settings",
            icon:"/images/setting-icon.png",
            activeIcon: "",
            path:"/settings"
        },
    ]

    useEffect(()=>{
        if (isSuccess) {
            route.push("/auth/sign-in")
            toast({
                title:"Logout Successful"
            })
        }
    },[isSuccess])

    useEffect(()=>{
        if (isError) {
            route.push("/auth/sign-in")
            toast({
                title:"Logout Successful"
            })
        }
    },[isError])
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
                    {isLoading ? <Image src={'/images/loader.gif'} width={45} height={45} alt="loader" /> : "Log Out"}
                </Button>
        </div>
        </div>
        </>
     );
}
 
export default SideBar;