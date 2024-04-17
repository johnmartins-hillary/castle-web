// import { Button } from "@/components/ui/button";
    "use client"
import Modal from "@/components/modal/modal.component"
import Image from "next/image";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const ProfilePicModal = ({openModal,setOpenModal}:any) => {
    const [image,setImage] = useState("")
        const onClose =()=>{
            setOpenModal(false)
        }
    const profileImageHandler = (e:any) => {
        const [file] = e.target.files;
        if (file) {
           setImage(URL.createObjectURL(file)) 
          }
        }
    return (
        <>
            <Modal open={openModal} >
                <div className=" bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] h-[416px] md:w-[655px]  lg:w-[758px] md:flex md:flex-col md:items-center md:justify-center  md:px-[123px] lg:px-[93px]  " >
             
                    <input     
                    onChange={(e) => {
                        profileImageHandler(e);
                    }} 
                        type="file" id="profile-picture-upload"  className="hidden"/>

                        {image &&  <Image src={image} width={161} height={161} alt="profile-image" className=" w-[161px] h-[161px] rounded-full mx-auto mb-4  object-cover " />}
                        
                    <div className={` w-full ${image ? "md:flex md:flex-row-reverse md:items-baseline md:justify-start md:gap-[22px]" : "md:block"} `} >
                    {image ? <button className="w-[135px] bg-black rounded-[22px] py-[13px] text-center text-white text-[17px] mx-auto cursor-pointer  lg:m-[inherit] " >
                            Save
                        </button> :  
                        <label htmlFor="profile-picture-upload" className=" bg-[#E8E8E8] rounded-[21px] w-full flex items-center justify-center gap-2 py-[15px] cursor-pointer ">
                        <FaPlusCircle size={20} />
                        Upload a picture
                    </label>}

                    <p onClick={onClose} className="text-center  text-[20px] font-normal mt-5 cursor-pointer " >
                        Cancel
                    </p>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ProfilePicModal;