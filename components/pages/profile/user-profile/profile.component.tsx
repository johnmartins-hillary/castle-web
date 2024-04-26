"use client";
import Image from "next/image";
import { useState } from "react";
import ShareProfileModal from "../modals/share-profile- modal.component";

const ProfileLink = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="w-full mt-5 mb-1 flex items-center justify-start gap-2 ">
        <p className="font-semibold text-left text-[13px] md:text-[18px] lg:text-[20px]">
          Profile
        </p>
        <Image
          width={16}
          height={13}
          src={"/images/return-icon.png"}
          onClick={() => {
            setOpenModal(true);
          }}
          className="cursor-pointer"
          alt="return-icon"
        />
      </div>
      <ShareProfileModal setOpenModal={setOpenModal} openModal={openModal} />
    </>
  );
};

export default ProfileLink;
