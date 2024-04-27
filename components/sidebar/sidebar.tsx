'use client'
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link"
import {useRouter} from "next/navigation"
import { usePathname } from 'next/navigation'
import { useLogOutUserMutation } from "@/services/auth";
import { useEffect } from "react";
import { useToast } from "../ui/use-toast";
import { useGetNotificationsQuery } from "@/services/notifications";
const SideBar = () => {
const route = useRouter()
const pathname = usePathname()
const [logOutUser,{isLoading,isSuccess,isError}] = useLogOutUserMutation()
const {toast} = useToast()
const {data}:any = useGetNotificationsQuery()
const notifications = data?.notifications?.data;
const unread = notifications?.filter((item:any) => item?.status === "unread");

console.log(notifications,unread)
const logOutHandler =()=>{
    logOutUser()
}
    const sideBarLinks=[
        {
            name:"Home",
            icon:"/images/home-icon.png",
            activeIcon: "/images/navicon/Home_fill.png",
            path:"/dashboard"
        },
        {
            name:"Explore",
            icon:"/images/gps-icon.png",
            activeIcon: "/images/navicon/Gps_fixed_fill.png",
            path:"/explore"
        },
        {
            name:"Profile",
            icon:"/images/user-icon.png",
            activeIcon: "/images/navicon/User_alt_fill.png",
            path:"/profile"
        },
        {
            name:"Notifications",
            icon:"/images/bell-icon.png",
            activeIcon: "/images/navicon/Bell_pin_fill.png",
            path:"/notifications"
        },
        {
            name:"Wallet",
            icon:"/images/wallet-icon.png",
            activeIcon: "/images/navicon/Wallet_fill.png",
            path:"/fund-wallet"
        },
        {
            name:"Your Circle",
            icon:"/images/user-plus-icon.png",
            activeIcon: "/images/navicon/User_fill_add.png",
            path:"/your-circle"
        },
        {
            name:"Get Verified",
            icon:"/images/check-icon.png",
            activeIcon: "/images/navicon/Check_round_fill.png",
            path:"/get-verified"
        },
        {
            name:"Settings",
            icon:"/images/setting-icon.png",
            activeIcon: "/images/navicon/Setting_alt_fill.png",
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
        <div className=" w-min[300px] w-[300px] flex flex-col justify-start bg-sidebar_bg left-0 h-screen  top-0 fixed  " >
        <div className="w-full px-4" >
            <Image src={'/images/logo-black.png'} className="" width={94} height={0} alt="logo" />
        </div>

        <div className="w-full mt-1 h-full"   >
            <ul className="w-full p-0 ">
                {/* {sideBarLinks.map(({name,icon,path})=>{
                    <></>
            })} */}
            {sideBarLinks.map(({name,icon,path,activeIcon})=>{
                const isActive = pathname === path;
                return(
                    <div key={name} className={`w-full flex items-center px-10 py-2 justify-start gap-2 mb-2 ${isActive ? "bg-black " : "bg-transparent"}`} >
                    <Image src={isActive ? activeIcon : icon} height={5} width={25} className=" object-contain" alt="icon" />
                    <Link href={path} key={name} className={`  font-normal text-base cursor-pointer  p-0 mt-1  ${isActive ? "text-white" : " text-black"}`} > 
                        {name}
                    </Link>
                    {name === "Notifications" && unread?.length > 0 && unread !== undefined && <div className="bg-red-400 w-[10px] h-[10px] rounded-[10px] right-3" />}
                    </div>
                )
            })}
            </ul>
             <div className="pt-4 px-10"  >
                <Button onClick={logOutHandler} className="bg-primary_color rounded-xl  text-white w-40 " >
                    {isLoading ? <Image src={'/images/loader.gif'} width={45} height={45} alt="loader" /> : "Log Out"}
                </Button>
        </div>
        </div>
       
        </div>
        </>
     );
}
 
export default SideBar;