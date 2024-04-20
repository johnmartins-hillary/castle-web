// import { Button } from "@/components/ui/button";
"use client"
import Modal, { modalProps } from "@/components/modal/modal.component"
import AmountSetter from "../amount-setter.component";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@/components/icons/icons";
import {TiCancel} from "react-icons/ti"
import Image from "next/image";
const FundingMethodModal = ({openModal,setOpenModal}:modalProps) => {
    return (
        <>
            <Modal  onClose={()=>{
                setOpenModal(false)
            }}  open={openModal} >
                <div className=" bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] py-[60px] h-[auto] md:w-[655px] md:h-[654px] md:flex md:flex-col md:items-center md:justify-center lg:h-auto  " >

            <div className="w-full flex flex-1 items-center justify-center" >
               <Image src={'/images/Subtract.png'} width={90.5} height={90.5} alt="method-image" className=" object-contain" />
            </div>

            <div className="w-full" >
                <p className="font-bold text-[28px] text-center" >Sorry</p>
            </div>

            <div className="w-full mt-[16px]  flex items-center justify-center" >
            <p className=" font-light text[32px] text-center" >
            No other funding method for<br/>now. We’re working on other<br/>channels.
            </p>
            </div>
               
                </div>
            </Modal>
        </>
    );
}

export default FundingMethodModal;




                  