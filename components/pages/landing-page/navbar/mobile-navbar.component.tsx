'use client'
import { MenuIcon } from "@/components/icons/icons";
import MainMobileMenu from "@/components/mobile-menus/main-mobile-menu";
import { useState } from "react";
interface Props{
    title?:string,
    icon?:any
}
const MobileNavbar = ({title,icon}:Props) => {
    const [showModal,setShowModal] = useState(false)
    return ( 
        <>
        <div className="hidden max-lg:flex items-center justify-between w-full max-lg:py-3 px-3">
            <div className={`w-1/2 items-center justify-start gap-2 ${title || icon ? 'flex' : 'hidden'} `} >
                {icon}
                <p className="text-lg font-bold" >{title}</p>
            </div>
            <div className={` ${title || icon ? "w-1/2" : "w-full"} items-center justify-end flex `} >
            <MenuIcon onClick={()=>{setShowModal(true)}} className="cursor-pointer w-[24px] h-[24px] "/>
            </div>
            <MainMobileMenu setShowModal={setShowModal} showModal={showModal} />
        </div>
        </>
     );
}
 
export default MobileNavbar;