import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useLazyVerifyEmailQuery } from "@/services/auth";
import { getParameterByName } from "@/utilities/helpers";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const EmailVerv = () => {
    const token = getParameterByName('token');
    const [trigger,{isLoading,isError,isSuccess,error}]:any  = useLazyVerifyEmailQuery()
    const router = useRouter()
    const {toast} = useToast()
    useEffect(()=>{
       if (token) {
        trigger({token:token})
       }
    },[token])
    useEffect(()=>{
      if (isSuccess) {
        router.replace('/auth/sign-in')
      }
    },[isSuccess])

    useEffect(()=>{
        if (isError) {
            toast({
                title:`${error?.data?.error}`
            })   
        }
    },[isError])
    return ( 
        <>
        <div  className=" w-[85%] lg:w-1/3 flex flex-col items-center justify-center mt-10  md:max-lg:w-2/5 " >
               {isLoading ? <div className="w-full flex flex-col items-center justify-center" >
                <Image src={'/images/loader.gif'} alt="loader" width={120} height={120} />
                <p className="font-semibold text-lg" >Verifying Account</p>
           </div>  : <>  <div className="w-full" >
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
               </div> </>}
            </div>
        </>
     );
}
 
export default EmailVerv;