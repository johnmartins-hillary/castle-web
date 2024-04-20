// import { Button } from "@/components/ui/button";
"use client"
import Modal from "@/components/modal/modal.component"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { setDobHandler } from "@/redux/slices/user/user-profile.slice";
import { useGetCountriesQuery } from "@/services/countries";
import { useUpdateUserProfileMutation } from "@/services/user";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select"
const PersonalDataModal = ({openModal,setOpenModal}:any) => {
  const [selectedCountry,setSelectedCountry] = useState("")

  const email = useSelector(({userprofile}:any)=>userprofile.email)
  const dispatch = useDispatch()
  const dateofbirth = useSelector(({userprofile}:any)=>userprofile.dateofbirth)
  // const {data:countriesData,isLoading,isSuccess}:any = useGetCountriesQuery()
  const {toast} = useToast()
  const profileState = useSelector(({userprofile}:any)=>userprofile)
  const [updateUserProfile,{data,isLoading,isError,isSuccess,error}]:any = useUpdateUserProfileMutation()
  const handleSubmit =()=>{
        updateUserProfile(profileState)
  }

  useEffect(()=>{
    if (isSuccess) {
      setOpenModal(false)
      toast({
        title:"Updated Succcessful"
      })
      if (isError) {
        toast({
          title:'Oops!',
          description:`${error?.data?.message ? error?.data?.message : 'Something went wrong' }`
        })
      }
    }
  },[isSuccess,isError,error,isError])
  const genderOption=[
    {
      value:'male',
      label:'Male'
    },
    {
      value:'femmale',
      label:'Female'
    },
  ]
    return (
        <>
            <Modal          
            onClose={()=>{
            setOpenModal(isLoading)
         }}  open={openModal} >
                <div className=" bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] h-[531px] md:w-[655px] md:px-[196px] lg:w-[758px] lg:px-[162px]  " >

                <div className="w-full mt-[38px] " >
                <p className="text-left text-[16px] font-bold" >Personal</p>
                <p className="text-left text-[14px] font-light" >This information is not available to the public</p>
                </div>

                <div className="w-full flex justify-between items-center mt-[30px] " >
                <div className="w-[45%]  " >
                    <Input disabled={true} value={email} style={{outline:"none",borderBottom:"1px solid black"}}  placeholder="Signup-acct@mailprovider" className="w-full bg-transparent border-none rounded-none  border-b-black border-b-2 p-[12px] " />
                      <Label className=" text-[14px] text-left font-bold  top-[14px] relative " >Email</Label>
                   </div>
                <div className="w-[45%]  " >
                <Select className="w-full bg-transparent border-none rounded-none  border-b-black border-b-2 p-[12px] "  options={genderOption}/>
                      <Label className=" text-[14px] text-left font-bold  top-[14px] relative " >Gender</Label>
                   </div>
                </div>

                <div className="w-full flex justify-between items-center mt-[30px] " >
                <div className="w-[45%]  " >
                    <Input value={dateofbirth} onChange={(e)=>{
                        dispatch(setDobHandler(e.target.value))
                    }} type="date" style={{outline:"none",borderBottom:"1px solid black"}}  className="w-full bg-transparent border-none border-b-black border-b-2 p-[12px] rounded-none " />
                      <Label className=" text-[14px] text-left font-bold  top-[14px] relative " >Date of Birth</Label>
                   </div>
                <div className="w-[45%]  " >

                      <Label className=" text-[14px] text-left font-bold  top-[14px] relative " >Country</Label>
                   </div>
                </div>
                <div className="w-full flex justify-between items-center mt-[30px] " >
                <div className="w-[45%]  " >
                
                      <Label className=" text-[14px] text-left font-bold  top-[14px] relative " >State</Label>
                   </div>
                   <div className="w-[45%] flex items-center justify-end " >
                    <button onClick={handleSubmit} className="w-[135px] bg-black rounded-[10px] py-[13px] text-center text-white text-[17px] lg:py-[8px] " >
                    {isLoading ? "Saving..." : "Save"}
                        </button>
                   </div>
                </div>
        


             
                </div>
            </Modal>
        </>
    );
}

export default PersonalDataModal;




                  