import Image from "next/image";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const ProfileImage = () => {
    return ( 
        <>
        <div className="relative" >
        <Image src={'/images/val-pic.png'} width={114} height={0} className="rounded-full object-contain" alt="profile-image" />
        <RiVerifiedBadgeFill color="#3897F0" className="relative left-24 z-10 -top-24"  size={24} />
        </div>
        </>
     );
}
 
export default ProfileImage;