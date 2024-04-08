import UserName from "@/components/pages/profile/user-name.component";
import DashboardLayout from "../dashboard/layout";
import UserBio from "@/components/pages/profile/user-bio.component";
import UserProfile from "@/components/pages/profile/user-profile";

const Profile = () => {
    return ( 
        <>
        <DashboardLayout>
            <UserName/>
            <UserBio/>
            <UserProfile/>
        </DashboardLayout>
        </>
     );
}
 
export default Profile;