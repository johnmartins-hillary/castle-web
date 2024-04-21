"use client"
import { MenuIcon } from "@/components/icons/icons";
import MainMobileMenu from "@/components/mobile-menus/main-mobile-menu";
import { useGetUserDetailsQuery } from "@/services/user";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hello = () => {
    const [showModal,setShowModal] = useState(false)
    const {data,isLoading} = useGetUserDetailsQuery("")
    const user = data?.user
    return ( 
        <>
        
        <div className="w-full  flex items-center justify-start gap-4  pt-[50px] pb-[35px]  h-[140px] md:px-[24px] lg:pt-0  "  >
    <div  className=" w-14 h-14 rounded-full flex items-center justify-center bg-faint_grey  shadow-md shadow-faint_grey" >
            <Image className="w-full h-full rounded-full object-cover "  src={ user?.profile_image ? user?.profile_image : '/images/user-icon.png'} width={34.84} height={17.42} alt="user-placeholder" />
        </div>
        <div className="flex flex-1 " >
            <h3 className="font-normal text-base lg:text-3xl   md:max-lg:text-xl" ><span className="font-bold" >Hello</span>, {user?.name ? user?.name : user?.username}</h3>
        </div>

        <div className=" flex items-center justify-center lg:hidden " >
            <MenuIcon color={'black'} size={24} onClick={()=>{setShowModal(true)}} className="cursor-pointer w-[24px] h-[24px] "/>
        </div>
        </div>
        <MainMobileMenu setShowModal={setShowModal} showModal={showModal} />
        </>
     );
}
 
export default Hello;