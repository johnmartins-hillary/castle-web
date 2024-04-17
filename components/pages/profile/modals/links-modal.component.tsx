// import { Button } from "@/components/ui/button";
"use client"
import Modal from "@/components/modal/modal.component"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LinksModal = ({openModal,setOpenModal}:any) => {
    return (
        <>
            <Modal open={openModal} >
                <div className=" bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] h-[416px]  md:w-[655px] lg:w-[758px] md:flex-col md:flex md:items-center md:justify-center md:px-[143px] lg:px-[195px] " >

                <div className="w-full mt-[38px] " >
                <p className="text-left text-[16px] font-bold" >Links</p>
                </div>
                   <div className=" md:flex md:items-center md:justify-between mt-[30px]" >
                   <div className="w-full  md:w-[45%]" >
                    <Label className=" text-[14px] text-left font-normal  relative left-[15px] mb-2 " >Text</Label>
                    <Input className="w-full bg-light_grey rounded-[11px] p-[12px] " />
                   </div>
                   <div className="w-full  md:w-[45%] mt-[30px] md:mt-0" >
                    <Label className=" text-[14px] text-left font-normal  relative left-[15px] mb-2 " >Url</Label>
                    <Input className="w-full bg-light_grey rounded-[11px] p-[12px] " />
                   </div>
                   </div>
                  
        
                   <div className="w-full flex items-center justify-end mt-[50px]" >
                    <button onClick={()=>{setOpenModal(false)}} className="w-[135px] bg-black rounded-[11px] py-[13px] text-center text-white text-[17px] md:py-[8px] " >
                            Save
                        </button>
                   </div>
                </div>
            </Modal>
        </>
    );
}

export default LinksModal;




                  