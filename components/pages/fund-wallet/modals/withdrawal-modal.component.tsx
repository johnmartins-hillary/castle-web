// import { Button } from "@/components/ui/button";
"use client"
import Modal, { modalProps } from "@/components/modal/modal.component"
import WithdrawalForm from "../../withdrawal/withdrawal-form.component";
import { useWithdrawMutation } from "@/services/withdrawal";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
const WithdrawalModal = ({openModal,setOpenModal,callBackFunction}:modalProps) => {
      
    return (
        <>
            <Modal  onClose={()=>{
                setOpenModal(false)
            }}  open={openModal} >
                <div className=" bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] py-[60px] h-[auto] md:w-[535px] md:h-[654px] md:flex md:flex-col md:items-center md:justify-center  lg:h-auto lg:py-[48px]  " >

           <WithdrawalForm callBackFunction={callBackFunction} setOpenModal={setOpenModal}  />
               
                </div>
            </Modal>
        </>
    );
}

export default WithdrawalModal;




                  