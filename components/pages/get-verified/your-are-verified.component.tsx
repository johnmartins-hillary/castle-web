import { RiVerifiedBadgeFill } from "react-icons/ri";

const YourAreVerified = () => {
    return ( 
        <>
        <div className="w-full  flex flex-col items-center justify-center h-[50vh] " >
            <div className="w-full flex items-center justify-start gap-[5px] " >
                <h3 className=" font-bold text-left leading-[30px] text-[20px]" >You're verified</h3>
                <RiVerifiedBadgeFill
            color="#3897F0"
            size={20}
            className="  size-[18px] md:size-[20px]"
          />
          </div>

          <div className="w-full mt-[26px] " >
            <p className="text-left text-wrap font-normal text-[20px] w-[257px]" >Your account has been verified. Click on settings to add your Charge Per Minute</p>
          </div>
        </div>
        </>
     );
}
 
export default YourAreVerified;