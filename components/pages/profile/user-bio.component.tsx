"use client"
import Image from "next/image";
import BioModal from "./modals/bio-modal.component";
import { useState } from "react";
import { useSelector } from "react-redux";

const UserBio = () => {
    const [openModal,setOpenModal] = useState(false)
    const bio = useSelector(({userprofile}:any)=>userprofile.bio)
    return ( 
        <>
        <div className="w-full mt-[10px] md:mt-[44px]" >

        <div className=" mb-1 flex items-center justify-start gap-2 " >
        <p className=" font-semibold text-left text-sm md:text-lg lg:text-[20px]" >Bio</p>
        <Image width={35} height={35} src={'/images/edit-icon.png'} alt="edit-icon" className={' w-[22px] h-[22px]   md:w-[35px] md:h-[35px] '} onClick={()=>{setOpenModal(true)}} />
        </div>

        <div className="w-full" >
            <p  className="font-light text-[12px] cursor-pointer text-left ">{bio}</p>
        </div>
        </div>
        <BioModal openModal={openModal} setOpenModal={setOpenModal}  />
        </>
     );
}
 
export default UserBio;