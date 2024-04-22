"use client";
import { ChatOption, Counter } from './consult-drawer.component';
import { CloseIcon } from '@/components/icons/icons';
import Modal from '@/components/modal/modal.component';
import { useEffect, useState } from 'react';
import { useGetSingleUserQuery } from '@/services/search/get-users';
import { useParams } from 'next/navigation';
interface Props{
    showModal?:boolean | any,
    setShowModal?:any
}
const ConsultMobileMenu = ({showModal,setShowModal}:Props) => {
  const params = useParams<any>();
  const  {isLoading,isError,isSuccess,data:consultantData}:any = useGetSingleUserQuery({id:params?.id})
  const [bill,setBill] = useState(0)
  const [minute, setMinutes] = useState(0);
  useEffect(()=>{
    setBill(consultantData?.user?.rate * minute)
},[minute])

 
    return ( 
        <>
         <Modal
         onClose={()=>{
          setShowModal(false)
         }}
      open={showModal}
    >
<div className=" bg-white shadow-[#00000040] shadow-lg z-20 rounded-[18px] p-[13px] h-[564px] w-[392px] flex flex-col items-center justify-center py-[40px] ">
        <CloseIcon  color={'black'} className={'absolute z-10 right-[34px] top-[65px]'} size={14}  onClick={()=>{setShowModal(false)}}/>
     

     <div className="w-full mb-5 ">
       <p className=" text-center font-bold text-base">Consult: {consultantData?.user?.name}</p>
     </div>
     <div className="mb-9 p-3 py-6 rounded-md border-primary_color border w-56 m-auto ">
       <p className=" text-center font-semibold text-base">
         NGN {consultantData?.user?.rate} per minute
       </p>
     </div>
     <div className=" w-full mb-5 ">
       <p className=" text-center font-normal text-[13px]">
         How many minutes would you like to consult {consultantData?.user?.name} for?
       </p>
     </div>
     <Counter minute={minute} setMinutes={setMinutes} />
     <div className="w-full mb-5 ">
       <p className=" text-center font-bold text-lg">Bill: NGN {bill  ? bill : 0}</p>
     </div>
     <ChatOption />
    </div>
    </Modal>
        </>
     );
}
 
export default ConsultMobileMenu;