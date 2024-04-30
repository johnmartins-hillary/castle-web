// import { Button } from "@/components/ui/button";
"use client"
import Modal from "@/components/modal/modal.component"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useEditUsersLinkMutation } from "@/services/user";
import { useEffect, useState } from "react";

const EditlinksModal = ({openModal,setOpenModal,url,text,id}:any) => {

        const [platform,setPlatForm] = useState(text)
        const [link,setLink] = useState(url)
        const {toast} = useToast()
    const [editUserLink,{isLoading,isError,isSuccess,error}]:any = useEditUsersLinkMutation()

    const handleSubmit =()=>{
        const data = {platform:platform,url:link,id:id}
        editUserLink(data)
    }


    useEffect(()=>{
        if (isSuccess) {
            setOpenModal(false)
            toast({
                title:"Link modified successfully"
            })
        }

        else if (isError) {
            setOpenModal(false)
            toast({
                title:"Link modification failed",   
                description:`${error?.data?.message ? error?.data?.message : 'Something went wrong' }`
            })
        }
        // return()=>{
        //     setLink("")
        //     setPlatForm("")
        // }
    },[isSuccess,isLoading,isError])
    const disableBtn = platform ==="" && link === "" ? true : false
    return (
        <>
            <Modal 
                     onClose={()=>{
                        setOpenModal(false)
                     }} 
            open={openModal} >
                <div className=" bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] h-[416px]  md:w-[655px] lg:w-[758px] md:flex-col md:flex md:items-center md:justify-center md:px-[143px] lg:px-[195px] " >

                <div className="w-full mt-[38px] " >
                <p className="text-left text-[16px] font-bold" >Links</p>
                </div>
                   <div className=" md:flex md:items-center md:justify-between mt-[30px]" >
                   <div className="w-full  md:w-[45%]" >
                    <Label className=" text-[14px] text-left font-normal  relative left-[15px] mb-2 " >Text</Label>
                    <Input value={platform} onChange={(e:any)=>{
                        setPlatForm(e.target.value)
                    }} className="w-full bg-light_grey rounded-[11px] p-[12px] " />
                   </div>
                   <div className="w-full  md:w-[45%] mt-[30px] md:mt-0" >
                    <Label className=" text-[14px] text-left font-normal  relative left-[15px] mb-2 " >Url</Label>
                    <Input type="url" value={link} onChange={(e:any)=>{
                        setLink(e.target.value)
                    }}  className="w-full bg-light_grey rounded-[11px] p-[12px] " />
                   </div>
                   </div>
                  
        
                   <div className="w-full flex items-center justify-end mt-[50px]" >
                    <button disabled={isLoading || disableBtn} onClick={handleSubmit} className="w-[135px] bg-black rounded-[11px] py-[13px] text-center text-white text-[17px] md:py-[8px] " >
                            Save
                        </button>
                   </div>
                </div>
            </Modal>
        </>
    );
}

export default EditlinksModal;




                  