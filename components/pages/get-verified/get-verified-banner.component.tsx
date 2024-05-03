import { CheckIcon } from "@/components/icons/icons";
import { useGetUserDetailsQuery } from "@/services/user";
import Image from "next/image";

const GetVerifiedBanner = () => {
    const {data:userdata}:any = useGetUserDetailsQuery("")
    const isVerified = userdata?.user?.verification_status === "1" ? true : false;
    return (  
        <>
        {/* <div className="w-full flex flex-col p-[23px] items-center justify-between rounded-[24px]  bg-primary_color mt-1 md:flex-row" >
            <div className=" w-full p-[12px] flex justify-start items-center gap-2 md:w-auto md:p-0 " >
                <CheckIcon className={""} onClick={()=>{}} color={'white'} size={33} />
                <p className=" text-white text-sm   md:text-base font-light"  >Get Verified</p>
            </div>
            <div className=" w-full p-[12px]  md:p-0 md:w-[423px] ">
                <p className="text-start font-light text-white text-xs leading-6 md:text-base " >When you are verified, users will <br className=" hidden md:block" />pay by the minute when they<br className=" hidden md:block" /> consult you</p>
            </div>
            
        </div> */}

      { !isVerified &&  <div className="w-full hidden md:flex flex-col p-[23px] items-center justify-between md:p-[35px] rounded-[24px] bg-primary_color mt-1 md:flex-row 2xl:w-[65%] 2xl:mx-auto " >
            <div className=" w-full flex-1 md:flex-[1] flex items-center justify-start gap-2" >
            <CheckIcon className={""} onClick={()=>{}} color={'white'} size={33} />
                <p className=" text-white text-sm   md:text-base font-light"  >Get Verified</p>
            </div>
            <div className=" w-full mt-3 flex-1 md:flex-[2] md:mt-0  ">
            <p className="text-start font-light text-white text-xs leading-6 md:text-base " >When you are verified, users will <br className=" hidden md:block" />pay by the minute when they<br className=" hidden md:block" /> consult you</p>
            </div>
        </div>}
        {!isVerified && <div className="w-full md:hidden " >
            <Image src={'/images/verified-mobile-banner.png'} width={362} height={160} alt="verfied-banner" className=" w-[362px] h-[160px]" />
            </div>}
        </>
    );
}
 
export default GetVerifiedBanner;