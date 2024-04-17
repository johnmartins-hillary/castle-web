// import { Button } from "@/components/ui/button";
"use client"
import Modal from "@/components/modal/modal.component"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const UsernameModal = ({openModal,setOpenModal}:any) => {
    return (
        <>
            <Modal open={openModal} >
                <div className=" bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] h-[531px] md:w-[655px]  lg:w-[758px] lg:h-[416px]  " >

                <div className="w-full mt-[38px] " >
                <p className="text-left text-[16px] font-bold" >Name and Category</p>
                </div>
                <div className="  mt-[30px] lg:flex lg:items-center lg:justify-between" >
                <div className="w-full  lg:w-[45%] ]" >
                    <Input className="w-[246px] bg-light_grey rounded-[21px] p-[12px] " />
                    <Label className=" text-[14px] text-left font-light  top-[14px] relative left-[15px] " >User Name</Label>
                   </div>
                   <div className="w-full lg:w-[45%]" >
                   <Select>
                        <SelectTrigger className="w-[246px] bg-light_grey rounded-[21px] p-[12px">
                          <SelectValue/>
                        </SelectTrigger>
                        <SelectContent className=" bg-light_grey" >
                          <SelectGroup className=" bg-light_grey" >
                            <SelectLabel></SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    <Label className=" text-[14px] text-left font-light  top-[14px] relative left-[15px] " >Category</Label>
                   </div>
                </div>
              <div className=" w-full lg:flex lg:items-center lg:justify-between lg:mt-[25px]" >
              <div className="w-full mt-[30px]" >
                    <Input className="w-[246px] bg-light_grey rounded-[21px] p-[12px] " />
                    <Label className=" text-[14px] text-left font-light  top-[14px] relative left-[15px] " >Nick Name</Label>
                   </div>

                   <div className="w-full flex items-center justify-end mt-[50px] lg:mt-[0px] lg:justify-start " >
                    <button onClick={()=>{setOpenModal(false)}} className="w-[135px] bg-black rounded-[22px] py-[13px] text-center text-white text-[17px] " >
                            Save
                        </button>
                   </div>
              </div>
                </div>
            </Modal>
        </>
    );
}

export default UsernameModal;




                  