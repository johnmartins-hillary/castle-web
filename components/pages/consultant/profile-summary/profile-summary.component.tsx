import AvatarWithBadge from "@/components/avatar/avatar.component";
import ProfileImage from "./profile-image.component";
import SummarySection from "./summary-section.component";
import { useParams } from "next/navigation";
import { useGetSingleUserQuery } from "@/services/search/get-users";
import { useAppSelector } from "@/lib/hooks";
import { useSelector } from "react-redux";
import Head from "next/head";
import { Skeleton } from "@/components/ui/skeleton";

const ProfileSummary = () => {
    const params = useParams<any>();
    const singleUser = useSelector(({singleUser}:any)=>singleUser?.data?.user)
    const {data,isLoading,isSuccess} = useGetSingleUserQuery({id:params?.id})
    const isVerified = singleUser?.verification_status === "0" ? false : true
    return ( 
        <>
          <Head>
            <title>{singleUser?.name ? singleUser?.name : singleUser?.username} - Carsle</title>
        </Head>
        <div className="w-full flex items-center mt-4 md:mt-[30px] justify-between gap-5 md:gap-0" >
            <div className="w-1/5 flex items-center justify-start  "  >
            {!isSuccess ? <Skeleton className="  w-[114px] h-[60px] rounded-[114px]" /> : <>
                <AvatarWithBadge isVerified={isVerified} profile_image={singleUser?.profile_image} width={114} height={0} className="w-[100px] h-[65px] rounded-[100px] md:w-[90px] md:h-[90px] md:rounded-[90px] lg:w-[100px] lg:h-[100px] lg:rounded-[100px] " />
                </>
}
            </div>

            <SummarySection/>
        </div>
        </>
     );
}
 
export default ProfileSummary;