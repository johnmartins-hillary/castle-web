// import { Button } from "@/components/ui/button";
"use client"
import Modal, { modalProps } from "@/components/modal/modal.component"
import AmountSetter from "../amount-setter.component";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@/components/icons/icons";
import {TiCancel} from "react-icons/ti"
import Image from "next/image";
import WithdrawalForm from "../../withdrawal/withdrawal-form.component";
const WithdrawalModal = ({openModal,setOpenModal}:modalProps) => {
    return (
        <>
            <Modal open={openModal} >
                <div className=" bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] py-[60px] h-[auto] md:w-[535px] md:h-[654px] md:flex md:flex-col md:items-center md:justify-center  " >

           <WithdrawalForm/>
               
                </div>
            </Modal>
        </>
    );
}

export default WithdrawalModal;




                  