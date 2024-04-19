// import { Button } from "@/components/ui/button";
"use client"
import Modal from "@/components/modal/modal.component"
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const PortfolioModal = ({openModal,setOpenModal}:any) => {
    return (
        <>
            <Modal 
            
            onClose={()=>{
              setOpenModal(false)
           }} 
            open={openModal} >
                <div className=" bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] h-[531px] lg:w-[758px] lg:px-[57px] lg:h-[416px]  " >

                <div className="w-full mt-[38px] " >
                <p className="text-left text-[16px] font-bold" >Portfolio</p>
                </div>
               <div className="w-full lg:flex lg:items-center lg:justify-between lg:gap-2" >

                <div className="lg:w-[40%] " >
                <div className="w-full  mt-[30px]" >
                    <Label className=" text-[14px] text-left font-light  relative left-[15px] mb-2 " >Role</Label>
                        <Input className="w-[246px] bg-light_grey rounded-[11px] p-[12px] " />
                   </div>
                   <div className="w-full mt-[30px]" >
                    <Label className=" text-[14px] text-left font-light  relative left-[15px] mb-2 " >Company/Organization</Label>
                       <Input className="w-[246px] bg-light_grey rounded-[11px] p-[12px] " />
                   </div>
                  
                </div>


                  <div className="lg:w-[60%]" >
                    <div className="w-full lg:flex lg:items-center lg:justify-between " >
                    <div className="w-full flex items-center justify-start gap-[7px] mt-[30px] lg:w-[60%]" >
                  <div className="w-[102px] lg:w-[45%]" >
                    <Label className=" text-[14px] text-left font-light  relative left-[15px] mb-2 " >Start Date</Label>
                    <Input className="w-full bg-light_grey rounded-[11px] p-[12px] " />
                   </div>
                  <div className="w-[102px]  lg:w-[45%]" >
                    <Label className=" text-[14px] text-left font-light  relative left-[15px] mb-2 " >End Date</Label>
                    <Input className="w-full bg-light_grey rounded-[11px] p-[12px] " />
                   </div>
                  </div>

                  <div className="w-full mt-[10px] flex items-center justify-start gap-[8px] pl-[5px] lg:w-[40%] relative lg:top-[25px]" >
                    <Checkbox  />
                    <Label className=" text-[14px] text-left font-light  relative  " >Still works here</Label>
                   </div>
                    </div>
                   <div className="w-full flex items-center justify-end mt-[50px] lg:justify-start" >
                    <button onClick={()=>{setOpenModal(false)}} className="w-[135px] bg-black rounded-[11px] py-[13px] text-center text-white text-[17px] " >
                            Save
                        </button>
                   </div>
                  </div>
               </div>
                </div>
            </Modal>
        </>
    );
}

export default PortfolioModal;




                  