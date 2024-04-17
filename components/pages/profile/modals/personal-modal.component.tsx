// import { Button } from "@/components/ui/button";
"use client"
import Modal from "@/components/modal/modal.component"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const PersonalDataModal = ({openModal,setOpenModal}:any) => {
    return (
        <>
            <Modal open={openModal} >
                <div className=" bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] h-[531px] md:w-[655px] md:px-[196px] lg:w-[758px] lg:px-[162px]  " >

                <div className="w-full mt-[38px] " >
                <p className="text-left text-[16px] font-bold" >Personal</p>
                <p className="text-left text-[14px] font-light" >This information is not available to the public</p>
                </div>

                <div className="w-full flex justify-between items-center mt-[30px] " >
                <div className="w-[45%]  " >
                    <Input style={{outline:"none",borderBottom:"1px solid black"}}  placeholder="Signup-acct@mailprovider" className="w-full bg-transparent border-none rounded-none  border-b-black border-b-2 p-[12px] " />
                      <Label className=" text-[14px] text-left font-bold  top-[14px] relative " >Email</Label>
                   </div>
                <div className="w-[45%]  " >
                <Select>
                        <SelectTrigger style={{outline:"none",borderBottom:"1px solid black"}} className="w-full bg-transparent border-none border-b-black border-b-2 p-[12px] rounded-none " >
                          <SelectValue/>
                        </SelectTrigger>
                        <SelectContent className=" bg-light_grey" >
                          <SelectGroup className=" bg-light_grey" >
                            <SelectLabel></SelectLabel>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Label className=" text-[14px] text-left font-bold  top-[14px] relative " >Gender</Label>
                   </div>
                </div>

                <div className="w-full flex justify-between items-center mt-[30px] " >
                <div className="w-[45%]  " >
                    <Input type="date" style={{outline:"none",borderBottom:"1px solid black"}}  className="w-full bg-transparent border-none border-b-black border-b-2 p-[12px] rounded-none " />
                      <Label className=" text-[14px] text-left font-bold  top-[14px] relative " >Date of Birth</Label>
                   </div>
                <div className="w-[45%]  " >
                <Select>
                        <SelectTrigger style={{outline:"none",borderBottom:"1px solid black"}} className="w-full bg-transparent border-none border-b-black border-b-2 p-[12px] rounded-none " >
                          <SelectValue/>
                        </SelectTrigger>
                        <SelectContent className=" bg-light_grey" >
                          <SelectGroup className=" bg-light_grey" >
                            <SelectLabel></SelectLabel>
                            <SelectItem value="male">Nigeria</SelectItem>
                            <SelectItem value="female">Ghana</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Label className=" text-[14px] text-left font-bold  top-[14px] relative " >Country</Label>
                   </div>
                </div>
                <div className="w-full flex justify-between items-center mt-[30px] " >
                <div className="w-[45%]  " >
                <Select>
                        <SelectTrigger style={{outline:"none",borderBottom:"1px solid black"}} className="w-full bg-transparent border-none border-b-black border-b-2 p-[12px] rounded-none " >
                          <SelectValue/>
                        </SelectTrigger>
                        <SelectContent className=" bg-light_grey" >
                          <SelectGroup className=" bg-light_grey" >
                            <SelectLabel></SelectLabel>
                            <SelectItem value="male">Abia</SelectItem>
                            <SelectItem value="female">Lagos</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Label className=" text-[14px] text-left font-bold  top-[14px] relative " >State</Label>
                   </div>
                   <div className="w-[45%] flex items-center justify-end " >
                    <button onClick={()=>{setOpenModal(false)}} className="w-[135px] bg-black rounded-[10px] py-[13px] text-center text-white text-[17px] lg:py-[8px] " >
                            Save
                        </button>
                   </div>
                </div>
        


             
                </div>
            </Modal>
        </>
    );
}

export default PersonalDataModal;




                  