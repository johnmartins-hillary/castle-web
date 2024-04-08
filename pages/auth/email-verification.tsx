import { RiSendPlaneFill } from "react-icons/ri";
import AuthLayout from "./layout";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Head from "next/head";

const EmailVerification = () => {
    return ( 
        <>
        <Head>
            <title>Email Verification - Carsle</title>
        </Head>
        <AuthLayout>
            <div  className=" w-[85%] lg:w-1/3 flex flex-col items-center justify-center mt-10  md:max-lg:w-2/5 " >
               <div className="w-full" >
               <Image src={'/images/Send_fill.png'}  width={190} height={190} className=" object-contain m-auto" alt="email-verfication" />
               </div>

               <div className="w-full mt-10" >
                <p className=" text-center text-xl  text-primary_color font-semibold" > 
                Confirmation email has been <br/>sent
                </p>
               </div>
               <div className="w-full mt-10" >
                <p className=" text-center text-xs text-primary_color font-normal" > 
                Please click the link in the confirmation email that<br/>we have just sent you.
                </p>
               </div>
               <div className="w-full mt-10" >
                <Button className="bg-primary_color rounded-3xl py-7 text-white w-full " >
                    Open Email
                </Button>
               </div>

               <div className="w-full mt-10 pb-5 " >
                <p className=" text-center text-xs text-primary_color font-normal cursor-pointer"  >Resend Email</p>
               </div>
            </div>
        </AuthLayout>
        </>
     );
}
 
export default EmailVerification;