"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useState } from "react";
import PersonalDataModal from "../modals/personal-modal.component";

const Personal = () => {
    const [openModal,setOpenModal] = useState(false)
    return (
        <>
            <div className="w-full mt-0 md:mt-12">
                <div className="mb-1 flex items-center justify-start gap-2 ">
                    <p className="font-semibold text-left text-[20px]">Personal</p>
                    {/* <p className="font-light text-left text-sm mt-2">This information is not available to the public</p> */}
                    <Image onClick={()=>{setOpenModal(true)}} width={20.58} height={20.58} src={'/images/edit-icon.png'} alt="edit-icon" className={' w-[20.58px] h-[20.58px]   md:w-[35px] md:h-[35px] '} />
                </div>

                {/* <div className="w-full mt-5">
                    <div className="w-full flex items-center justify-between gap-5">
                        <div className="w-1/2">
                            <input className="w-full mb-5 border-b-2 border-b-light_grey p-2 outline-none" />
                            <Label className="font-bold text-sm text-left">Email</Label>
                        </div>
                        <div className="w-1/2">
                            <Select>
                                <SelectTrigger style={{  outline: "none", border: "none", borderBottom: "2px solid #EFEFEF", borderRadius:"0px" }} className="w-full mb-5">
                                    <SelectValue placeholder="" />
                                </SelectTrigger>
                                <SelectContent className="bg-light_grey">
                                    <SelectGroup className="bg-light_grey">
                                        <SelectLabel></SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Label className="font-bold text-sm text-left">Gender</Label>
                        </div>
                    </div>


                    <div className="w-full flex items-center justify-between gap-5 mt-5 ">
                        <div className="w-1/2">
                            <input className="w-full mb-5 border-b-2 border-b-light_grey p-2 outline-none" />
                            <Label className="font-bold text-sm text-left">Date of Birth</Label>
                        </div>
                        <div className="w-1/2">
                            <Select>
                                <SelectTrigger style={{  outline: "none", border: "none", borderBottom: "2px solid #EFEFEF", borderRadius:"0px" }} className="w-full mb-5">
                                    <SelectValue placeholder="" />
                                </SelectTrigger>
                                <SelectContent className="bg-light_grey">
                                    <SelectGroup className="bg-light_grey">
                                        <SelectLabel></SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Label className="font-bold text-sm text-left">Country</Label>
                        </div>
                    </div>

                    <div className="w-full flex items-center justify-between gap-5 mt-10 ">
                        <div className="w-1/2">
                            <Select>
                                <SelectTrigger style={{  outline: "none", border: "none", borderBottom: "2px solid #EFEFEF", borderRadius:"0px" }} className="w-full mb-5">
                                    <SelectValue placeholder="" />
                                </SelectTrigger>
                                <SelectContent className="bg-light_grey">
                                    <SelectGroup className="bg-light_grey">
                                        <SelectLabel></SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Label className="font-bold text-sm text-left">State</Label>
                        </div>

                        <div className="w-1/2 flex items-center justify-center " >
                    <Button className="bg-primary_color  rounded-xl py-4 text-white w-[107px] " >
                    Save
                    </Button>
                    </div>
                    </div>
                </div> */}
            </div>
            <PersonalDataModal openModal={openModal} setOpenModal={setOpenModal} />
        </>
    );
}

export default Personal;
