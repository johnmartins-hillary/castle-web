import { CheckIcon } from "@/components/icons/icons";
import Image from "next/image";

const GetVerifiedBanner = () => {

    return (  
        <>
        <div className="w-full flex flex-col items-center justify-between rounded-xl bg-primary_color mt-14 md:flex-row " >
            <div className=" w-full p-[12px] flex justify-start items-center gap-2 md:w-2/5 md:p-14 " >
                <CheckIcon color={'white'} size={33} />
                <p className=" text-white text-sm   md:text-base font-light"  >Get Verified</p>
            </div>
            <div className=" w-full p-[12px] md:p-0 md:w-3/5">
                <p className="text-start font-light text-white text-xs leading-6 md:text-base " >When you are verified, users will <br className=" hidden md:block" />pay by the minute when they<br className=" hidden md:block" /> consult you</p>
            </div>
        </div>

        </>
    );
}
 
export default GetVerifiedBanner;