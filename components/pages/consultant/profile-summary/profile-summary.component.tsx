import AvatarWithBadge from "@/components/avatar/avatar.component";
import ProfileImage from "./profile-image.component";
import SummarySection from "./summary-section.component";
import { useParams } from "next/navigation";
import { useGetSingleUserQuery } from "@/services/search/get-users";
import { useAppSelector } from "@/lib/hooks";
import { useSelector } from "react-redux";
import Head from "next/head";

const ProfileSummary = () => {
    const params = useParams<any>();
    console.log("id",params)
    const singleUser = useSelector(({singleUser}:any)=>singleUser?.data?.user)
    const {data,isLoading,isSuccess} = useGetSingleUserQuery({id:params?.id})
    console.log('consultant data',singleUser)
    const isVerified = singleUser?.verification_status === "0" ? false : true
    return ( 
        <>
          <Head>
            <title>{singleUser?.name ? singleUser?.name : singleUser?.username} - Carsle</title>
        </Head>
        <div className="w-full flex items-center mt-4 md:mt-0 justify-between gap-5 md:gap-0" >
            <div className="w-1/5 flex items-center justify-start  "  >
                {/* <ProfileImage/> */}
                <AvatarWithBadge isVerified={isVerified} profile_image={singleUser?.profile_image} width={114} height={0} />
            </div>
            <SummarySection/>
        </div>
        </>
     );
}
 
export default ProfileSummary;