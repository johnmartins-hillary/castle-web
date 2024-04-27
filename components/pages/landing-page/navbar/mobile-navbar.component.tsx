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
    // "w-full pt-[100px] pb-[35px] md:pt-[13px]  flex md:px-[13px] items-stretch justify-between h-[140px] overflow-hidden
    return ( 
        <>
        <div className=" flex items-center justify-between pt-[35px] pb-[35px] md:pt-[13px]  w-full z-100" style={{zIndex: 100}}>
            <div className={`w-1/2 items-center justify-start gap-2 ${title || icon ? 'flex' : 'hidden'} `} >
                {icon}
                <p className="text-lg font-bold" >{title}</p>
            </div>
            <div className={` ${title || icon ? "w-1/2" : "w-full"} items-center justify-end flex `} >
            <MenuIcon  color="black" size={24} onClick={()=>{setShowModal(true)}} className="cursor-pointer w-[24px] h-[24px] lg:hidden  "/>
            </div>
            <MainMobileMenu setShowModal={setShowModal} showModal={showModal} />
        </div>
        </>
     );
}
 
export default MobileNavbar;