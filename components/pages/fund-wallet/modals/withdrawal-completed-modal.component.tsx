// import { Button } from "@/components/ui/button";
"use client"
import Modal, { modalProps } from "@/components/modal/modal.component"
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@/components/icons/icons";
import { useRouter } from "next/navigation";


const WithdrawalCompleteModal = ({openModal,setOpenModal}:modalProps) => {
    const router = useRouter()
    return (
        <>
            <Modal open={openModal} >
                <div className=" bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] py-[60px] h-[auto] md:w-[655px] md:h-[654px] md:flex md:flex-col md:items-center md:justify-center  " >

            <div className="w-full flex flex-1 items-center justify-center" >
                <CheckIcon color={'black'} onClick={()=>{}}  size={115.5} className={'m-auto'} />
            </div>

            <div className="w-full mt-[15px]  flex items-center justify-center" >
            <p className=" font-light text[32px] text-center" >
            The amount will be disbursed<br/>in your account soon!
            </p>
            </div>
            <div className="w-full mt-[15px]  flex items-center justify-center" >
            <p onClick={()=>{router.push("/dashboard")}} className=" font-bold md:text-[20px] text-center underline cursor-pointer " >
          Home
            </p>
            </div>
               
                </div>
            </Modal>
        </>
    );
}

export default WithdrawalCompleteModal;




                  