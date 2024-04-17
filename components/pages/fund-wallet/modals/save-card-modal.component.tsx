// import { Button } from "@/components/ui/button";
"use client"
import Modal, { modalProps } from "@/components/modal/modal.component"
import AmountSetter from "../amount-setter.component";
import { Button } from "@/components/ui/button";


const SaveCardModal = ({openModal,setOpenModal,callBackFunction}:modalProps) => {
    return (
        <>
            <Modal open={openModal} >
                <div className=" bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] h-[auto]  md:w-[655px] md:h-[654px] md:flex md:flex-col md:items-center md:justify-center  lg:h-auto " >

                <div className=" w-full md:w-[417px]">
                <div className="w-full mt-[38px] " >
                <p className="text-left text-[16px] font-bold" >Saved Cards</p>
                </div>
                   <div className="w-full mt-[30px]" >
                    <AmountSetter/>
                   </div>
                <div className="w-full mt-[68px] " >
                <p className="font-normal text-sm text-left relative left-2">
                   Select a Card
                    </p>
                    <input value={"4566 **** **** 7889"} className="w-full bg-light_grey rounded-2xl p-3 mt-[26px] "  />
                    <input value={"5123 **** **** 7889"} className="w-full bg-light_grey rounded-2xl p-3 mt-[26px] "  />
                </div>


       

                 <div className="w-full flex items-center justify-end mt-10 " >
                <Button onClick={callBackFunction} className=" w-[98px] p-[9px] rounded-[12px] bg-black text-center text-white text-xs " >
                        Fund      
                 </Button>
                </div>
                </div>
                  
                </div>
            </Modal>
        </>
    );
}

export default SaveCardModal;




                  