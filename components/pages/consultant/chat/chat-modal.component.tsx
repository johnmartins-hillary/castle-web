import Modal from "@/components/modal/modal.component";
import { useToast } from "@/components/ui/use-toast";
import { useInChatMutation } from "@/services/chat";
import Image from "next/image";
import { useEffect, useState } from "react";

const ChatModal = ({showModal,setShowModal,btnText,isLoading}:any) => {
    const {data,isLoading:inChatloading,isSuccess,isError,error}:any= useInChatMutation();
 
    return ( 
        <>
        <div>
            <Modal onClose={()=>{
                setShowModal(isLoading)
            }} open={showModal} >
                <div>
                <Image src={'/images/loader.gif'} width={30} height={30} alt="loader" className=" w-[30px] h-[30px] mx-auto"  />
                <p className={"text-base text-center font-bold  "} >
                   {btnText}
                </p>
                </div>
            </Modal>
        </div>
        </>
     );
}
 
export default ChatModal;