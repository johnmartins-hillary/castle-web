"use client";
import { useRouter } from 'next/navigation';
import { CloseIcon } from '../icons/icons';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button';
import Modal from '../modal/modal.component';
import { useToast } from '../ui/use-toast';
import { useEffect } from 'react';
import { useLogOutUserMutation } from '@/services/auth';
interface Props{
    showModal?:boolean | any,
    setShowModal?:any
}
const MainMobileMenu = ({showModal,setShowModal}:Props) => {
    const router = useRouter();
    const pathname = usePathname()
    const [logOutUser,{isLoading,isSuccess,data,isError}] = useLogOutUserMutation()
const {toast} = useToast()
const logOutHandler =()=>{
    logOutUser()
}
useEffect(()=>{
    if (isSuccess) {
        router.push("/auth/sign-in")
        toast({
            title:"Logout Successful"
        })
    }
},[isSuccess,router])

useEffect(()=>{
    if (isError) {
        router.push("/auth/sign-in")
        toast({
            title:"Logout Successful"
        })
    }
},[isError,router])

    const routes=[
        {
            name:"Home",
            icon:"/images/home-icon.png",
            path:"/dashboard"
        },
        {
            name:"Explore",
            icon:"/images/gps-icon.png",
            path:"/explore"
        },
        {
            name:"Profile",
            icon:"/images/user-icon.png",
            path:"/profile"
        },
        {
            name:"Notifications",
            icon:"/images/bell-icon.png",
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
            path:"/your-circle"
        },
        {
            name:"Get Verified",
            icon:"/images/check-icon.png",
            path:"/get-verified"
        },
        {
            name:"Settings",
            icon:"/images/setting-icon.png",
            path:"/settings"
        },
    ]
    return ( 
        <>
         <Modal
         onClose={()=>{
            setShowModal(false)
         }}
      open={showModal}
    >

<div className=" bg-white shadow-[#00000040] shadow-lg z-20 rounded-[18px] p-[13px] h-[445px] w-[392px] flex flex-col items-center justify-center">
<CloseIcon color={'black'} className={'absolute z-10 right-[34px] top-[65px]'} size={24}  onClick={()=>{setShowModal(false)}}/>
     

     <div className="w-full mt-1 px-2 "  >
         <ul className="w-full p-0">
             {routes.map(({name,icon,path})=>(
                 <div key={name} className="w-full flex items-center justify-start gap-2 mb-[13px]" >
                 <Image src={icon} height={5} width={25} className=" object-contain" alt="icon" />
                 <Link onClick={()=>{
                       setShowModal(false)
                 }} href={path} key={name} className={` ${pathname === path ? 'font-bold ' :" font-normal"} font-normal text-xs cursor-pointer  p-0 mt-1`} > 
                     {name}
                 </Link>
                 </div>
             ))}
         </ul>
     </div>
     <div className="w-full mt-2 flex items-center justify-end px-3 "  >
     <button onClick={logOutHandler} className="bg-primary_color rounded-xl py-3 text-xs text-white w-[107px] " >
     {isLoading ? <Image src={'/images/loader.gif'} width={45} height={45} alt="loader" /> : "Log Out"}
     </button>
     </div>
</div>
      
    </Modal>
        </>
     );
}
 
export default MainMobileMenu;