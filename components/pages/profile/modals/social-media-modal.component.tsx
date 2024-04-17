// import { Button } from "@/components/ui/button";
"use client"
import Modal from "@/components/modal/modal.component"
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const SocialMediaModal = ({openModal,setOpenModal}:any) => {
    const platforms =[
        {
            name:"Facebook",
            value:"facebook"
        },
        {
            name:"Instagram",
            value:"instagram"
        },
        {
            name:"LinkedIn",
            value:"linkedIn"
        }
    ]
    return (
        <>
            <Modal open={openModal} >
                <div className=" bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] h-[416px] md:w-[655px] md:px-[143px] lg:w-[758px] lg:px[195px]  " >

                <div className="w-full mt-[38px] " >
                <p className="text-left text-[16px] font-bold" >Social Media</p>
                </div>
                   <div className="w-full  mt-[30px]" >
                    <Label className=" text-[14px] text-left font-normal  relative left-[15px] mb-2 " >Social Media</Label>
                    <Select>
                        <SelectTrigger className="w-full bg-light_grey rounded-[11px] p-[12px">
                          <SelectValue/>
                        </SelectTrigger>
                        <SelectContent className=" bg-light_grey" >
                          <SelectGroup className=" bg-light_grey" >
                            <SelectLabel></SelectLabel>
                            {platforms.map(({name,value})=>(
                             <SelectItem key={value} value={value}>{name}</SelectItem>
                            ))}
             
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      
                   </div>
                   <div className="w-full mt-[30px]" >
                    <Label className=" text-[14px] text-left font-normal  relative left-[15px] mb-2 " >Url</Label>
                    <Input className="w-full bg-light_grey rounded-[11px] p-[12px] " />
                   </div>
                  
        
                   <div className="w-full flex items-center justify-end mt-[50px]" >
                    <button onClick={()=>{setOpenModal(false)}} className="w-[135px] bg-black rounded-[11px] py-[13px] text-center text-white text-[17px] " >
                            Save
                        </button>
                   </div>
                </div>
            </Modal>
        </>
    );
}

export default SocialMediaModal;




                  