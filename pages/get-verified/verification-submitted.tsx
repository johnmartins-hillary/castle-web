import { CheckIcon } from "lucide-react";
import DashboardLayout from "../dashboard/layout";
import Head from "next/head";
import { IoCheckbox } from "react-icons/io5";
import MobileNavbar from "@/components/pages/landing-page/navbar/mobile-navbar.component";

const VerificationSubmitted = () => {
    return ( 
        <>
        <Head>
            <title>Verification Submitted - Carsle</title>
        </Head>
        <DashboardLayout>
            <MobileNavbar/>
        <div className="w-full flex flex-col  h-screen items-center justify-center md:max-lg:h-auto md:max-lg:mt-36  " >
                <IoCheckbox  size={163}  />
                {/* <div className="w-full mt-10  flex items-center justify-center" > */}
            <p className="font-light text-lg text-center mt-3" >You’ll be notified once your<br/>submission is reviewed</p>
            {/* </div> */}
            </div>

        
        </DashboardLayout>
        </>
     );
}
 
export default VerificationSubmitted;