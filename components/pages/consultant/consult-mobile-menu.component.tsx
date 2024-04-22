"use client";
import { ChatOption, Counter } from './consult-drawer.component';
import { CloseIcon } from '@/components/icons/icons';
import Modal from '@/components/modal/modal.component';
import { useEffect, useState } from 'react';
import { useGetSingleUserQuery } from '@/services/search/get-users';
import { useParams } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { useBookConsultantMutation } from '@/services/booking';
interface Props{
    showModal?:boolean | any,
    setShowModal?:any
}
const ConsultMobileMenu = ({showModal,setShowModal}:Props) => {
  const params = useParams<any>();
  const  {isLoading,isError,isSuccess,data:consultantData}:any = useGetSingleUserQuery({id:params?.id})
  const [bookConsultant,{data,isSuccess:consultIsSuccess,isError:consultIsError,error,isLoading:booking}]:any = useBookConsultantMutation()
  const [bill,setBill] = useState(0)
  const [minute, setMinutes] = useState(0);
  const {toast} = useToast()

  useEffect(()=>{
    setShowModal(false)
    if (consultIsSuccess) {
      toast({
        title:`${data?.status ? "Appointment is booked" : data?.message}`
      })

    }
    else if (consultIsError) {
      setShowModal(false)
      toast({
        title:"Oops!",
        description: `${
          error?.data?.message ? error?.data?.message : "Something went wrong"
        }`
      })
    }
  },[consultIsSuccess,consultIsError,error,isLoading,booking])

  const handleSubmitCall =()=>{
    bookConsultant({agentId:params?.id,timeInMin:minute,mode:consultantData?.modes?.call})
  }
  const handleSubmitChat =()=>{
    bookConsultant({agentId:params?.id,timeInMin:minute,mode:consultantData?.modes?.text})
  }


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
       <p className=" text-center font-bold text-lg">Bill: NGN{bill  ? bill?.toFixed(2) : 0}</p>
     </div>
     { bill >0 && <ChatOption handleSubmitCall={handleSubmitCall} handleSubmitChat={handleSubmitChat}  />}
    </div>
    </Modal>
        </>
     );
}
 
export default ConsultMobileMenu;