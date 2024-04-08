"use client"
import { GoogleIcon } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {useRouter} from "next/navigation"
const SignUpForm = () => {
    const router = useRouter()
    return ( 
        <>
        <div className=" w-[85%] lg:w-1/3 flex flex-col items-center justify-center mt-10 md:max-lg:w-2/5  " >
        <div className="w-full" >
            <h3 className="font-bold text-left md:text-center text-lg" > Create account</h3>
        </div>
        <div className="w-full mt-10 items-center flex justify-center "  >
        <Button  className=" w-full md:w-96 bg-light_grey rounded-2xl text-black hover:bg-slate-200 hover:text-black cursor-pointer  py-7 md:max-lg:w-full " >
            <GoogleIcon  size={50} className="mr-2 h-4 w-4" />Sign up with Google
         </Button>
        </div>

            <div className="w-full mt-9" >
                <div className="w-full mb-5" >
                <label className="font-normal text-sm text-left relative left-3"  htmlFor="username">
                    Username
                </label>
                </div>

                <div className="w-full" >
                    <Input id="username"  className="w-full bg-light_grey rounded-2xl text-black py-6  outline-none " />
                </div>
            </div>
            <div className="w-full mt-3" >
                <div className="w-full mb-5" >
                <label className="font-normal text-sm text-left relative left-3"  htmlFor="email">
                   Email
                </label>
                </div>

                <div className="w-full" >
                    <Input id="email"  className="w-full bg-light_grey rounded-2xl text-black py-6  outline-none " />
                </div>
            </div>
            <div className="w-full mt-3" >
                <div className="w-full mb-5" >
                <label className="font-normal text-sm text-left relative left-3"  htmlFor="password">
                   Password
                </label>
                </div>

                <div className="w-full" >
                    <Input id="password"  className="w-full bg-light_grey rounded-2xl text-black py-6  outline-none " />
                </div>
            </div>
            <div className="items-top flex space-x-2 mt-8 ">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none ">
        <label
          htmlFor="terms1"
          className="text-xs font-normal text-primary_color leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
        By creating an account you agree with our Terms of service,
        </label>
        <p className="text-xs text-primary_color">
        Privacy policy, and Notification settings.
        </p>
      </div>

     
    </div> 
    <div className="w-full mt-10" >
        <Button onClick={()=>router.push("/auth/email-verification")}  className="bg-primary_color rounded-3xl py-7 text-white w-full " >
        Sign Up
        </Button>
      </div>
      <div className="mt-4 w-full pb-10" >
        <p className="text-center text-sm font-normal" >Already have an account? <span onClick={()=>router.push("/auth/sign-in")} className="font-bold cursor-pointer" >Sign in</span></p>
      </div>
        </div>
        
        </>
     );
}
 
export default SignUpForm;

