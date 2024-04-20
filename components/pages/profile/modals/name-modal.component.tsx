// import { Button } from "@/components/ui/button";
"use client"
import Modal from "@/components/modal/modal.component"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAppSelector } from "@/lib/hooks";
import { setNameHandler, setUserNameHandler } from "@/redux/slices/user/user-profile.slice";
import { useUpdateUserProfileMutation } from "@/services/user";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UsernameModal = ({openModal,setOpenModal}:any) => {
  const dispatch = useDispatch()
  const name = useSelector(({userprofile}:any)=>userprofile.name)
  const profileState = useSelector(({userprofile}:any)=>userprofile)
  const username = useSelector(({userprofile}:any)=>userprofile.username)
  const [updateUserProfile,{data,isLoading,isError,isSuccess}] = useUpdateUserProfileMutation()
  const handleSubmit =()=>{
        updateUserProfile(profileState)
  }

  useEffect(()=>{
    if (isSuccess) {
      setOpenModal(false)
    }
  },[isSuccess])
    return (
        <>
            <Modal          
            onClose={()=>{
            setOpenModal(false)
         }}  open={openModal} >
                <div className=" bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] h-[531px] md:w-[655px]  lg:w-[758px] lg:h-[416px]  " >

                <div className="w-full mt-[38px] " >
                <p className="text-left text-[16px] font-bold" >Name and Category</p>
                </div>
                <div className="  mt-[30px] lg:flex lg:items-center lg:justify-between" >
                <div className="w-full  lg:w-[45%] ]" >
                    <Input value={name} onChange={(e)=>{
                      dispatch(setNameHandler(e.target.value))
                    }}  className="w-[246px] bg-light_grey rounded-[21px] p-[12px] " />
                    <Label className=" text-[14px] text-left font-light  top-[14px] relative left-[15px] " >Fullname</Label>
                   </div>
                   <div className="w-full lg:w-[45%]" >
                   <Select>
                        <SelectTrigger className="w-[246px] bg-light_grey rounded-[21px] p-[12px mt-[30px]">
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
                    <Input value={username} onChange={(e)=>{
                      dispatch(setUserNameHandler(e.target.value))
                    }}   className="w-[246px] bg-light_grey rounded-[21px] p-[12px] " />
                    <Label className=" text-[14px] text-left font-light  top-[14px] relative left-[15px] " >Username</Label>
                   </div>

                   <div className="w-full flex items-center justify-end mt-[50px] lg:mt-[0px] lg:justify-start " >
                    <Button  disabled={isLoading} onClick={handleSubmit} className="w-[135px] bg-black rounded-[22px] py-[13px] text-center text-white text-[17px] " >
                          {isLoading ? "Saving..." : "Save"}
                        </Button>
                   </div>
              </div>
                </div>
            </Modal>
        </>
    );
}

export default UsernameModal;




                  