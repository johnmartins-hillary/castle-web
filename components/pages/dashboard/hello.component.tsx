"use client"
import { MenuIcon } from "@/components/icons/icons";
import MainMobileMenu from "@/components/mobile-menus/main-mobile-menu";
import Image from "next/image";
import { useState } from "react";

const Hello = () => {
    const [showModal,setShowModal] = useState(false)
    return ( 
        <>
        
        <div className="w-full mb-7 flex items-center justify-start gap-4 "  >
    <div  className=" w-14 h-14 rounded-full flex items-center justify-center bg-faint_grey  shadow-md shadow-faint_grey" >
            <Image src={'/images/user-icon.png'} width={34.84} height={17.42} alt="user-placeholder" />
        </div>
        <div className="flex flex-1 " >
            <h3 className="font-normal text-base lg:text-3xl   md:max-lg:text-xl" ><span className="font-bold" >Hello</span>, Emmanuel Eze</h3>
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