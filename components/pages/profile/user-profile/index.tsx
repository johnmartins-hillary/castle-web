"use client"
import Image from "next/image";
import Portfolio from "./portfolio.component";
import UserPhotographs from "./photographs.component";
import Personal from "./personal.component";
import SocialMedia from "./social-media.component";
import Head from "next/head";
import ProfileLink from "./profile.component";
import Links from "./links.component";
import { useGetUserDetailsQuery } from "@/services/user";

const UserProfile = () => {
    const { data } = useGetUserDetailsQuery("");

    const user = data?.user;
    return ( 
        <>
        <div className="w-full mt-3 pb-[75px] ">


        { user?.verification_status === "1"&& <ProfileLink/>}
        <Personal/>
        <Portfolio/>
        <SocialMedia/>
        <UserPhotographs/>
        <Links/>
        {/* <div className="w-full flex flex-col md:flex-row items-start justify-between mt-14 md:max-lg:flex-col md:max-lg:items-start  " >
        <div className=" w-full lg:w-2/5  md:max-lg:w-[60%]" >
        <Portfolio/>
        </div>
        <div className=" w-full lg:w-2/5  md:max-lg:w-[60%] md:max-lg:mt-10 " >
        <SocialMedia/>
        </div>
        </div>

        <div className=" w-full lg:w-2/5 mt-14 md:max-lg:w-[60%]  " >
        <UserPhotographs/>
        <Personal/>
        </div> */}
        </div>
        </>
     );
}
 
export default UserProfile;