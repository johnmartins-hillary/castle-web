// import { Button } from "@/components/ui/button";
"use client"
import Modal, { modalProps } from "@/components/modal/modal.component"
import AmountSetter from "../amount-setter.component";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@/components/icons/icons";


const FundingCompleteModal = ({openModal,setOpenModal}:modalProps) => {
    return (
        <>
            <Modal open={openModal} >
                <div className=" bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] py-[60px] h-[auto]   md:w-[655px] md:h-[654px] md:flex md:flex-col md:items-center md:justify-center lg:h-auto " >

                <div className="w-full" >
                <p className="font-bold text-xl text-center md:text-[32px]" >Funding Completed</p>
            </div>

            <div className="w-full flex flex-1 items-center justify-center" >
                <CheckIcon color={'black'} onClick={()=>{}}  size={242} className={'m-auto'} />
            </div>

            <div className="w-full mt-10  flex items-center justify-center" >
            <Button onClick={()=>{setOpenModal(false)}} className=" w-[442px] m-auto p-6 rounded-2xl bg-black text-center text-white text-xs md:text-[32px] " >
             Proceed to Consult
            </Button>
            </div>
               
                </div>
            </Modal>
        </>
    );
}

export default FundingCompleteModal;




                  