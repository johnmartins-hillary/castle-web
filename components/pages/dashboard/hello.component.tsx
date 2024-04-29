"use client"
import { MenuIcon } from "@/components/icons/icons";
import MainMobileMenu from "@/components/mobile-menus/main-mobile-menu";
import { useGetNotificationsQuery } from "@/services/notifications";
import { useGetUserDetailsQuery } from "@/services/user";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Hello = () => {
    const [showModal,setShowModal] = useState(false)
    const {data,isLoading} = useGetUserDetailsQuery("")
    const user = data?.user
    const {data:notificationData}:any = useGetNotificationsQuery()
    const notifications = notificationData?.notifications?.data;
    const unread = notifications?.filter((item:any) => item?.status === "unread");
    const router = useRouter()
    return ( 
        <>
        
        <div className="w-full  flex items-start justify-start gap-4  pt-[20px] pb-[25px]  h-[80px] md:px-[4px] lg:pt-[50px] md:mb-[35px] lg-[140px]  "  >
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
        <div className="flex flex-1 w-[230px] " >
            <h3 className="font-bold text-base lg:text-3xl truncate leading-[.9rem]  md:max-lg:text-xl" ><span className="font-normal" >Hello,</span><br className="md:hidden" /> {user?.name ? user?.name : user?.username}</h3>
        </div>

        <div className=" items-center hidden md:flex justify-center lg:hidden " >
            <MenuIcon color={'black'} size={24} onClick={()=>{setShowModal(true)}} className="cursor-pointer w-[24px] h-[24px] "/>
        </div>
        <div className=" flex items-center justify-end gap-4 md:hidden " >
        <div className="w-auto relative" >
        <Image onClick={()=>{router.push("/notifications")}}  width={26} height={26} src={'/images/bell-icon.png'} alt="notification-icon" />
        {  unread?.length > 0 && unread !== undefined &&  <div className=" bg-red-600 absolute w-[8px] h-[8px] rounded-[8px] top-[2px] right-[3px] " />}  
        </div>
          <Image onClick={()=>{router.push("/settings")}} width={26} height={26} src={'/images/setting-icon.png'} alt="setting-icon" />
        </div>
        </div>
        <MainMobileMenu setShowModal={setShowModal} showModal={showModal} />
        </>
     );
}
 
export default Hello;