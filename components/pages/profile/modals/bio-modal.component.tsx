// import { Button } from "@/components/ui/button";
"use client"
import Modal from "@/components/modal/modal.component"
import { Textarea } from "@/components/ui/textarea";

const BioModal = ({openModal,setOpenModal}:any) => {
    return (
        <>
            <Modal open={openModal} >
                <div className=" bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] h-[416px] md:w-[655px] lg:w-[758px] lg:px-[162px]  " >

                <div className="w-full mt-[38px] " >
                <p className="text-left text-[16px] font-bold left-[15px]" >Bio</p>
                </div>
                   <div className="w-full  mt-[18px]" >
                    <Textarea className="w-full bg-light_grey rounded-[21px] p-[12px] h-[163px] " />
                    <p className=" text-[14px] text-left font-light  top-[14px] relative left-[15px] text-muted-foreground " >Write a short and concise bio</p>
                   </div>
                   <div className="w-full flex items-center justify-end mt-[50px]" >
                    <button onClick={()=>{setOpenModal(false)}} className="w-[135px] bg-black rounded-[22px] py-[13px] text-center text-white text-[17px] " >
                            Save
                        </button>
                   </div>
                   </div>
            </Modal>
        </>
    );
}

export default BioModal;




                  