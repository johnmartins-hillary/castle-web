// import { Button } from "@/components/ui/button";
"use client"
import Modal from "@/components/modal/modal.component"
import { useToast } from "@/components/ui/use-toast";
import { useCreateUserPhotoMutation } from "@/services/user";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { FaPlusCircle } from "react-icons/fa";

const PhotoModal = ({openModal,setOpenModal}:any) => {
    const [image,setImage] = useState("")
    const [img,setImg] = useState(null)
    const [createUserPhoto,{data,isError,isLoading,isSuccess,error}]:any = useCreateUserPhotoMutation()
    const {toast} = useToast()
    const profileImageHandler = (e:any) => {
        const [file] = e.target.files;
        if (file) {
           setImage(URL.createObjectURL(file)) 
           setImg(file)
          }
        }
        const disableBtn = img === "" ? true : false;
        const handleSubmit =()=>{
            createUserPhoto({image:img})
        }
        useEffect(()=>{
            if (isSuccess) {
                setOpenModal(false)
                toast({
                    title:"Photo Uploaded Successfully "
                })
            }

            else if (isError) {
                setOpenModal(false)
                toast({
                    title:"Photo Upload Failed ",

                 description:`${error?.data?.message ? error?.data?.message : 'Something went wrong' }`
    })
            }
        },[isLoading,isLoading,error,isSuccess])
    return (
        <> 
            <Modal
            
            onClose={()=>{
                setOpenModal(isLoading)
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
                      {image ? <button onClick={handleSubmit} disabled={isLoading || disableBtn} className="w-[135px] bg-black rounded-[22px] py-[13px] text-center text-white text-[17px] mx-auto " >
                           {isLoading ? "Saving..." : "Save"}
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