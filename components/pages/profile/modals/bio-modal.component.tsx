// import { Button } from "@/components/ui/button";
"use client"
import Modal from "@/components/modal/modal.component"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { setBioHandler } from "@/redux/slices/user/user-profile.slice";
import { useUpdateUserProfileMutation } from "@/services/user";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const BioModal = ({openModal,setOpenModal}:any) => {
    const bio = useSelector(({userprofile}:any)=>userprofile.bio)
    const profileState = useSelector(({userprofile}:any)=>userprofile)
   const dispatch = useDispatch()
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
                     }} 
            open={openModal} >
                <div className=" bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] h-[416px] md:w-[655px] lg:w-[758px] lg:px-[162px]  " >

                <div className="w-full mt-[38px] " >
                <p className="text-left text-[16px] font-bold left-[15px]" >Bio</p>
                </div>
                   <div className="w-full  mt-[18px]" >
                    <Textarea value={bio} onChange={(e)=>{
                            dispatch(setBioHandler(e.target.value))
                    }} className="w-full bg-light_grey rounded-[21px] p-[12px] h-[163px] " />
                    <p className=" text-[14px] text-left font-light  top-[14px] relative left-[15px] text-muted-foreground " >Write a short and concise bio</p>
                   </div>
                   <div className="w-full flex items-center justify-end mt-[50px]" >
                    <Button onClick={handleSubmit} className="w-[135px] bg-black rounded-[22px] py-[13px] text-center text-white text-[17px] " >
                    {isLoading ? "Saving..." : "Save"}
                        </Button>
                   </div>
                   </div>
            </Modal>
        </>
    );
}

export default BioModal;




                  