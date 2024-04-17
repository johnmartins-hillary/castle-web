"use client"
import { EditIcon, MenuIcon } from "@/components/icons/icons";
import Image from "next/image";
import ProfilePicModal from "./modals/profile-pic-modal.component";
import { useState } from "react";
import UsernameModal from "./modals/name-modal.component";
const UserName = () => {
    const [pictureModal,setPictureModal] = useState(false)
    const [nameModal,setNameModal] = useState(false)
    return ( 
        <>
       <div className="w-full my-4" >

        <div className="w-full flex items-center justify-between" >


            <div className="w-[20%] md:w-[10%]" >
            <div  className=" w-[40.19px] h-[40.19px] rounded-full flex items-center justify-center bg-faint_grey  shadow-md shadow-faint_grey relative " >
            <Image src={'/images/user-icon.png'} width={34.84} height={17.42} alt="user-placeholder" onClick={()=>{setPictureModal(true)}}/>
        </div>
        <Image width={35} height={35} src={'/images/edit-icon.png'} alt="edit-icon" className={'absolute w-[22px] h-[22px]  top-[65px] left-[60px]  md:w-[35px] md:h-[35px] md:top-[50px] md:left-[70px] lg:left-[85px]  cursor-pointer'} onClick={()=>{setPictureModal(true)}}  />
            </div>


            <div className=" w-[70%] flex items-center justify-start gap-1 md:w-[90%] " >
            <h3 className="font-normal text-[18px] md:text-xl lg:text-3xl " >Emmanuel Eze</h3>
            <Image width={35} height={35} src={'/images/edit-icon.png'} alt="edit-icon" className={' w-[22px] h-[22px]   md:w-[35px] md:h-[35px] cursor-pointer '} onClick={()=>{setNameModal(true)}}  />
            </div>

            <div className=" flex w-[10%] items-center justify-center ld:hidden " >
            <MenuIcon  size={24} onClick={()=>{}} color={''} className="cursor-pointer w-[24px] h-[24px] "/>
        </div>

        </div>
        <div className="w-[60%] flex items-center justify-start mx-auto gap-[13px] mt-1 md:w-[80%]" >
            <p className="font-light text-xs cursor-pointer " >Add a Nickname</p>
            <p className="font-light text-xs cursor-pointer">Category</p>
        </div>
     
       </div>
       <ProfilePicModal openModal={pictureModal} setOpenModal={setPictureModal} />
       <UsernameModal openModal={nameModal} setOpenModal={setNameModal} />
        </>
     );
}
 
export default UserName;