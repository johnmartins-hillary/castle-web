// import { Button } from "@/components/ui/button";
"use client"
import Modal from "@/components/modal/modal.component"
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useUploadSocialLinkMutation } from "@/services/user";
import { useEffect, useState } from "react";
import Select from "react-select"
const SocialMediaModal = ({openModal,setOpenModal}:any) => {
    const [platform,setPlatForm] = useState("")
    const [socialLink,setSocialLink] = useState("")
    const {toast} = useToast()
    const platforms =[
        {
            label:'Facebook',
            value:'facebook'
        },
        {
            label:'Instagram',
            value:'instagram'
        },
        {
            label:'LinkedIn',
            value:'linkedIn'
        }
    ]

    const [uploadSocialLink,{isLoading,isError,isSuccess,error}]:any = useUploadSocialLinkMutation()

    const handleSubmit =()=>{
        const data = {platform:platform,url:socialLink}
        uploadSocialLink(data)
    }


    useEffect(()=>{
        if (isSuccess) {
            setOpenModal(false)
            toast({
                title:"Social link uploaded successfully"
            })
        }

        else if (isError) {
            setOpenModal(false)
            toast({
                title:"Social link upload failed",
                description:`${error?.data?.message ? error?.data?.message : 'Something went wrong' }`
            })
            
        }
    },[isSuccess,isLoading,isError])
    const customStyles ={
        control:(provided:any)=>({
            ...provided,
            background:"#EFEFEF",
            border:"none",
            borderRadius:11,
            padding:8
        })
    }
    const disableBtn = platform ==="" && socialLink === "" ? true : false
    return (
        <>
            <Modal 
                     onClose={()=>{
                        setOpenModal(isLoading)
                     }} 
            open={openModal} >
                <div className=" bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] h-[416px] md:w-[655px] md:px-[143px] lg:w-[758px] lg:px[195px]  " >

                <div className="w-full mt-[38px] " >
                <p className="text-left text-[16px] font-bold" >Social Media</p>
                </div>
                   <div className="w-full  mt-[30px]" >
                    <Label className=" text-[14px] text-left font-normal  relative left-[15px] mb-2 " >Social Media</Label>
                    <Select placeholder={""} styles={customStyles} onChange={(e:any)=>{
                       setPlatForm(e?.value)
                    }} options={platforms} />
                       
                   </div>
                   <div className="w-full mt-[30px]" >
                    <Label className=" text-[14px] text-left font-normal  relative left-[15px] mb-2 " >Url</Label>
                    <Input  type="url" value={socialLink} onChange={({target})=>{
                            setSocialLink(target.value)
                    }} className="w-full bg-light_grey rounded-[11px] p-[12px] " />
                   </div>
                  
        
                   <div className="w-full flex items-center justify-end mt-[50px]" >
                    <Button disabled={isLoading || disableBtn}  onClick={handleSubmit} className="w-[135px] bg-black rounded-[11px] py-[13px] text-center text-white text-[17px] " >
                            {isLoading ? "Saving..." :"Save"}
                        </Button>
                   </div>
                </div>
            </Modal>
        </>
    );
}

export default SocialMediaModal;




                  