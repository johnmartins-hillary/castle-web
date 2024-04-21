"use client"
import { CirclePlus, Trash2 } from "lucide-react";
import SocialMediaModal from "../modals/social-media-modal.component";
import { useEffect, useState } from "react";
import { useDeleteUsersSocialsMutation, useGetUserSocialsQuery } from "@/services/user";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";

const SocialMedia = () => {
  const [openModal,setOpenModal] = useState(false)
  const {data:socials,isLoading}:any = useGetUserSocialsQuery()
  const [deleteUsersSocials, {isLoading:deleting,isError:isDeleteError,isSuccess:deleteSuccess,error:deleteError} ]:any = useDeleteUsersSocialsMutation()
  const {toast} = useToast()

  useEffect(()=>{
    if (deleteSuccess) {
      toast({
        title:"Social Deleted"
      })
    }

    else if (isDeleteError) {
      toast({
        title:"Oops! Failed",
        description:`${deleteError?.data?.message ? deleteError?.data?.message : 'Something went wrong' }`
      })
    }
  },[deleting,isDeleteError,deleteError,deleteSuccess])
  const handleDelete =(id:any)=>{
    deleteUsersSocials({id})
  }
    return ( 
        <>
      <div className=" mt-8 flex items-center justify-start gap-2 " >
        <p className=" font-light text-left text-[15px]" >Social Media</p>
        <CirclePlus onClick={()=>{setOpenModal(true)}} size={16} />
        </div>
        {socials?.socials?.map(({platform,url,id}:any)=>(
                <div key={id} className="w-full mt-[12px]" >
                  <p className="font-bold text-[14px] text-primary_color" >{platform}</p>

                <div className="w-auto flex items-center justify-between md:justify-start gap-4" >
                <Link target="_blank" href={url} className="font-light text-[13px] text-gray-500 underline" >{url}</Link>
                <Trash2 color="red" size={13} cursor={'pointer'} onClick={()=>handleDelete(id)} />
                </div>
                

                </div>
              ))
            }

        <SocialMediaModal openModal={openModal} setOpenModal={setOpenModal} />
        </>
     );
}
 
export default SocialMedia;