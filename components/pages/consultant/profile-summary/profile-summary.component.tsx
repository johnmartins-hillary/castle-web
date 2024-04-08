import AvatarWithBadge from "@/components/avatar/avatar.component";
import ProfileImage from "./profile-image.component";
import SummarySection from "./summary-section.component";

const ProfileSummary = () => {
    return ( 
        <>
        <div className="w-full flex items-center mt-4 md:mt-0 justify-between gap-5 md:gap-0" >
            <div className="w-1/5 flex items-center justify-start  "  >
                {/* <ProfileImage/> */}
                <AvatarWithBadge width={114} height={0} />
            </div>
            <SummarySection/>
        </div>
        </>
     );
}
 
export default ProfileSummary;