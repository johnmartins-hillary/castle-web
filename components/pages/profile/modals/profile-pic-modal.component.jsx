// import { Button } from "@/components/ui/button";
"use client"
import Modal from "@/components/modal/modal.component"
import { setProfilePicHandler } from "@/redux/slices/user/user-profile.slice";
import { useUploadProfilePicMutation } from "@/services/user";
import Image from "next/image";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import imageCompression from "browser-image-compression"
const ProfilePicModal = ({ openModal, setOpenModal }) => {
    const [uploadProfilePic, { isLoading }] = useUploadProfilePicMutation()
    const profile_image = useSelector(({ userprofile }) => userprofile.profile_image)
    const profileState = useSelector(({ userprofile }) => userprofile)
    const dispatch = useDispatch()
    const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true
    }
    const [image, setImage] = useState(null)
    const onClose = () => {
        setOpenModal(false)
    }
    const profileImageHandler = async (e) => {
        const [file] = e.target.files;
        // e.target.files && e.target.files[0]
        console.log("file", file)
        console.log("target file", e.target.files[0])
        if (file) {

            const compressedFile = await imageCompression(file, options)
            dispatch(setProfilePicHandler(file))
            setImage(URL.createObjectURL(file))
        }
    }

    const handleSubmit = () => {
        uploadProfilePic(profile_image)
    }
    console.log(profile_image)
    return (
        <>
            <Modal
                onClose={() => {
                    setOpenModal(false)
                }} open={openModal} >
                <div className=" bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] h-[416px] md:w-[655px]  lg:w-[758px] md:flex md:flex-col md:items-center md:justify-center  md:px-[123px] lg:px-[93px]  " >

                    <input
                        onChange={(e) => {
                            profileImageHandler(e);
                        }}
                        type="file" id="profile-picture-upload" className="hidden" />

                    {image && <Image src={image} width={161} height={161} alt="profile-image" className=" w-[161px] h-[161px] rounded-full mx-auto mb-4  object-cover " />}

                    <div className={` w-full flex ${image ? "h-auto" : "h-full"} flex-col items-center justify-center ${image ? "md:flex md:flex-row-reverse md:items-baseline md:justify-start md:gap-[22px]" : "md:block"} `} >
                        {image ? <button onClick={handleSubmit} disabled={isLoading} className="w-[135px] bg-black rounded-[22px] py-[13px] text-center text-white text-[17px] mx-auto cursor-pointer  lg:m-[inherit] " >
                            {isLoading ? "Saving..." : "Save"}
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