import Image from "next/image";
import Portfolio from "./portfolio.component";
import UserPhotographs from "./photographs.component";
import Personal from "./personal.component";
import SocialMedia from "./social-media.component";
import Head from "next/head";

const UserProfile = () => {
    return ( 
        <>
        <Head>
            <title>Profile - Carsle</title>
        </Head>
        <div className="w-full mt-3">

        <div className="w-full flex items-start justify-between mt-14 md:max-lg:flex-col md:max-lg:items-start  " >
        <div className="w-2/5  md:max-lg:w-[60%]" >
        <Portfolio/>
        </div>
        <div className="w-2/5  md:max-lg:w-[60%] md:max-lg:mt-10 " >
        <SocialMedia/>
        </div>
        </div>

        <div className="w-2/5 mt-14 md:max-lg:w-[60%]  " >
        <UserPhotographs/>
        <Personal/>
        </div>
        </div>
        </>
     );
}
 
export default UserProfile;