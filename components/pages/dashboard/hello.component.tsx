"use client"
import { MenuIcon } from "@/components/icons/icons";
import MainMobileMenu from "@/components/mobile-menus/main-mobile-menu";
import { useGetUserDetailsQuery } from "@/services/user";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Hello = () => {
    const [showModal,setShowModal] = useState(false)
    const {data,isLoading} = useGetUserDetailsQuery("")
    const user = data?.user
    return ( 
        <>
        
        <div className="w-full  flex items-center justify-start gap-4  pt-[20px] pb-[25px]  h-[80px] md:px-[4px] lg:pt-[50px] lg:mb-[35px] lg-[140px]  "  >
    <div  className=" relative w-[27.5px] h-[27.5px] md:w-[71.65px] md:h-[71.65px] lg:w-14 lg:h-14 rounded-full flex items-center justify-center bg-faint_grey  shadow-md shadow-faint_grey" >
            <Image className="w-full h-full rounded-full object-cover "  src={ user?.profile_image ? user?.profile_image : '/images/user-icon.png'} width={34.84} height={17.42} alt="user-placeholder" />
            <div
        // style={{
        //   position: "absolute",
        //   top: "12%",
        //   right: "-5%",
        // }}
        className=" absolute top-[2%] right-[-10px] md:right-[-10px] "
      >
        {user?.verification_status === "1" &&
          <RiVerifiedBadgeFill
            color="#3897F0"
            size={20}
            className="  size-[12px] md:size-[20px]"
          />}
      </div>
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