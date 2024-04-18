import { MenuIcon } from "@/components/icons/icons";
import MainMobileMenu from "@/components/mobile-menus/main-mobile-menu";
import { useState } from "react";

const SummarySection = () => {
   const [openMenu,setOpenMenu] = useState(false)
    return ( 
        <>
        <div className=" w-4/5 relative md:max-lg:-top-4 lg:-top-6  " >
         <div className="w-full  md:mb-4 flex items-center justify-between " >
            <p className=" font-bold text-primary_color text-base text-left md:text-xl font-poppins " >Val Okafor</p>
            <MenuIcon size={24} onClick={()=>{setOpenMenu(true)}} color={'black'}   className=" hidden cursor-pointer w-[24px] h-[24px] md:max-lg:flex " />
         </div>
         <div className="w-full" >
            <p  className=" font-normal text-primary_color text-xs leading-4 text-left md:text-sm ">Leadership and Productivity Strategist || Transformational Speaker || Social Innovator</p>
         </div>
        </div>
        <MainMobileMenu showModal={openMenu} setShowModal={setOpenMenu} />
        </>
     );
}
 
export default SummarySection;