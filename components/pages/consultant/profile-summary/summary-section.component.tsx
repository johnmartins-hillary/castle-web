import { MenuIcon } from "@/components/icons/icons";
import MainMobileMenu from "@/components/mobile-menus/main-mobile-menu";
import { useGetSingleUserQuery } from "@/services/search/get-users";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams} from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
const SummarySection = () => {
   const [openMenu,setOpenMenu] = useState(false)
   const singleUser = useSelector(({singleUser}:any)=>singleUser?.data?.user)
   const params = useParams<any>();
   const {data,isSuccess}:any = useGetSingleUserQuery({id:params?.index?.[0]})
   const name =  singleUser?.name;
   const username = singleUser?.username
   const bio = singleUser?.bio;
   const isVerified = singleUser?.verification_status === "0" ? false : true
    return ( 
        <>
        <div className={` w-4/5 relative   ${isVerified === false ? ' md:max-lg:-top-0 lg:top-0' : ' md:max-lg:-top-4 lg:-top-6 '} ` }>
         <div className="w-full  md:mb-4 flex items-center justify-between " >
         {!isSuccess ? <Skeleton className="w-[150px] h-[13px] rounded-none mb-2 " /> :  <p className=" font-bold text-primary_color text-base text-left md:text-xl font-poppins capitalize " >{name ?  name : username}</p>}
            <MenuIcon size={24} onClick={()=>{setOpenMenu(true)}} color={'black'}   className=" hidden cursor-pointer w-[24px] h-[24px] md:max-lg:flex " />
         </div>
         <div className="w-full" >
         {!isSuccess ? <Skeleton className="w-[100px] h-[13px] rounded-none mb-2 " /> :    <p  className=" font-normal text-primary_color text-xs leading-4 text-left md:text-sm ">{bio}</p>}
         </div>
        </div>
        <MainMobileMenu showModal={openMenu} setShowModal={setOpenMenu} />
        </>
     );
}
 
export default SummarySection;