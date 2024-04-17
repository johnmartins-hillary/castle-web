"use client"
import { CirclePlus } from "lucide-react";
import Platform from "./platform.component";
import Url from "./url.component";
import Links from "./links.component";
import SocialMediaModal from "../modals/social-media-modal.component";
import { useState } from "react";

const SocialMedia = () => {
  const [openModal,setOpenModal] = useState(false)
    return ( 
        <>
      <div className=" mt-8 flex items-center justify-start gap-2 " >
        <p className=" font-light text-left text-[15px]" >Social Media</p>
        <CirclePlus onClick={()=>{setOpenModal(true)}} size={16} />
        </div>


        <SocialMediaModal openModal={openModal} setOpenModal={setOpenModal} />
        </>
     );
}
 
export default SocialMedia;