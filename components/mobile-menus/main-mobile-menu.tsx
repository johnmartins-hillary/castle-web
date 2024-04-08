"use client";
import { Modal } from '@milon27/react-modal';
import '@milon27/react-modal/dist/style.css';
import { useRouter } from 'next/navigation';
import { CloseIcon } from '../icons/icons';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button';
interface Props{
    showModal?:boolean | any,
    setShowModal?:any
}
const MainMobileMenu = ({showModal,setShowModal}:Props) => {
    const router = useRouter();
    const pathname = usePathname()
    const logOutHandler =()=>{
        router.push("/auth/sign-in")
    }

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
      show={showModal}
      className=" bg-white rm-bg-white shadow-md shadow-light_grey rounded-[18px] p-[3px]  flex flex-1 flex-col items-center justify-center "
      bgStyleClassName="rm-bg-black-600 rm-bg-opacity-10"
      
      contentStyleClassName=' flex-flex_2 flex w-full flex-col justify-between bg-white p-0 '
      onClose={() => {
        setShowModal(false)
        console.log("closing the modal");
      }}
    >

        <CloseIcon  className={'absolute z-10 right-3 top-[-10%]'} size={24}  onClick={()=>{setShowModal(false)}}/>
     

        <div className="w-full mt-1 px-2 "  >
            <ul className="w-full p-0">
                {routes.map(({name,icon,path})=>(
                    <div key={name} className="w-full flex items-center justify-start gap-2 mb-4" >
                    <Image src={icon} height={5} width={25} className=" object-contain" alt="icon" />
                    <Link href={path} key={name} className={` ${pathname === path ? 'font-bold ' :" font-normal"} font-normal text-xs cursor-pointer  p-0 mt-1`} > 
                        {name}
                    </Link>
                    </div>
                ))}
            </ul>
        </div>
        <div className="w-full mt-2 flex items-center justify-end p-3 "  >
        <button onClick={logOutHandler} className="bg-primary_color rounded-xl py-3 text-xs text-white w-[107px] " >
                Log Out
        </button>
        </div>
    </Modal>
        </>
     );
}
 
export default MainMobileMenu;