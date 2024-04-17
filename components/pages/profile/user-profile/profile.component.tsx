import Image from "next/image";
import ShareProfileModal from "../modals/share-profile- modal.component";

const ProfileLink = () => {
    return ( 
        <>
        <div className="w-full mt-5 mb-1 flex items-center justify-start gap-2 " >
        <p className="font-semibold text-left text-[13px] md:text-[18px] lg:text-[20px]">Profile</p>
        <Image width={16} height={13} src={'/images/return-icon.png  '} className="cursor-pointer" alt="return-icon" />
        </div>
        <ShareProfileModal/>
        </>
     );
}
 
export default ProfileLink;