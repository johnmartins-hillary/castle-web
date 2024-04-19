// import { Button } from "@/components/ui/button";
"use client"
import Modal from "@/components/modal/modal.component"
import Image from "next/image";
import { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { FaPlusCircle } from "react-icons/fa";

const PhotoModal = ({openModal,setOpenModal}:any) => {
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
            <Modal
            
            onClose={()=>{
                setOpenModal(false)
             }} 
            open={openModal} >
                <div className=" bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] h-[416px] flex flex-col items-center justify-center  md:flex-row md:items-center md:justify-between md:w-[655px] lg:w-[758px] lg:px-[95px] " >
             
                    <input     
                    onChange={(e) => {
                        profileImageHandler(e);
                    }} 
                        type="file" id="picture-upload"  className="hidden"/>

                          <div className="md:w-1/2" >
                          {image  ? 
                            <Image src={image} width={161} height={161} alt="photograph" className=" w-[161px] h-[161px] rounded-full mx-auto mb-4  md:rounded-none md:w-[245px] md:h-[281px]" />
                         : 
                        <div className="w-full flex items-center justify-center my-[23px]" >
                            <CiImageOn size={136} color="#7e7e7e"  />
                        </div>}
                          </div>

                     
                      <div className="md:w-1/2 md:flex md:flex-col-reverse" >
                      {image ? <button className="w-[135px] bg-black rounded-[22px] py-[13px] text-center text-white text-[17px] mx-auto " >
                            Save
                        </button> :  
                        <label htmlFor="picture-upload" className=" bg-[#E8E8E8] rounded-[21px] w-full flex items-center justify-center gap-2 py-[15px] ">
                        <FaPlusCircle size={20} />
                        Upload a picture
                    </label>}

                    <p onClick={()=>{setOpenModal(false)}} className="text-center  text-[20px] font-normal mt-5 cursor-pointer md:mb-3 " >
                        Cancel
                    </p>
                      </div>
                </div>
            </Modal>
        </>
    );
}

export default PhotoModal;