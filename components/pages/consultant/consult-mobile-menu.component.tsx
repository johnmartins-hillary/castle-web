"use client";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ChatOption, Counter } from './consult-drawer.component';
import { CloseIcon } from '@/components/icons/icons';
import { useDrawer } from '@/context/drawer-context';
import Modal from '@/components/modal/modal.component';
interface Props{
    showModal?:boolean | any,
    setShowModal?:any
}
const ConsultMobileMenu = ({showModal,setShowModal}:Props) => {
    const { openDrawer, setOpenDrawer } = useDrawer();
 
    return ( 
        <>
         <Modal
      open={showModal}
    >
<div className=" bg-white shadow-[#00000040] shadow-lg z-20 rounded-[18px] p-[13px] h-[564px] w-[392px] flex flex-col items-center justify-center py-[40px] ">
        <CloseIcon  color={'black'} className={'absolute z-10 right-[34px] top-[65px]'} size={14}  onClick={()=>{setShowModal(false)}}/>
     

     <div className="w-full mb-5 ">
       <p className=" text-center font-bold text-base">Consult: Val Okafor</p>
     </div>
     <div className="mb-9 p-3 py-6 rounded-md border-primary_color border w-56 m-auto ">
       <p className=" text-center font-semibold text-base">
         NGN 200 per minute
       </p>
     </div>
     <div className=" w-full mb-5 ">
       <p className=" text-center font-normal text-[13px]">
         How many minutes would you like to consult Val for?
       </p>
     </div>
     <Counter />
     <div className="w-full mb-5 ">
       <p className=" text-center font-bold text-lg">Bill: NGN 6, 000</p>
     </div>
     <ChatOption />
    </div>
    </Modal>
        </>
     );
}
 
export default ConsultMobileMenu;