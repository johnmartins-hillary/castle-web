"use client"
import { GoogleIcon } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {useRouter} from "next/navigation"
const SignInForm = () => {
    const router = useRouter()
    return ( 
        <>
        <div className=" lg:w-1/3 flex flex-col items-center justify-center mt-10  md:max-lg:w-2/5 w-[85%]  " >
        <div className="w-full" >
            <h3 className="font-bold text-center text-lg" >Sign in</h3>
        </div>
        <div className="w-full mt-10 flex items-center justify-center "  >
        <Button  className=" w-full md:w-96 bg-light_grey rounded-2xl text-black hover:bg-slate-200 hover:text-black cursor-pointer  py-7 md:max-lg:w-full" >
            <GoogleIcon  size={50} className="mr-2 h-4 w-4" />Sign in with Google
         </Button>
        </div>

            <div className="w-full mt-9" >
                <div className="w-full mb-5" >
                <label className="font-normal text-sm text-left relative left-3"  htmlFor="username">
                    Username / Email
                </label>
                </div>

                <div className="w-full" >
                    <Input id="username"  className="w-full bg-light_grey rounded-2xl text-black py-6  outline-none " />
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
                <div className="mt-2 w-full" >
        <p className="text-right text-xs font-normal italic " >? Forgot password</p>
      </div>
            </div>

          
    <div className="w-full mt-10" >
        <Button onClick={()=>router.push("/dashboard")}  className="bg-primary_color rounded-3xl py-7 text-white w-full " >
      Login
        </Button>
      </div>
      <div className="mt-4 w-full pb-10" >
        <p className="text-center text-sm font-normal" >Don’t have an account yet? <span onClick={()=>router.push("/auth/sign-up")}  className="font-bold  cursor-pointer " >Sign up</span></p>
      </div>
        </div>
        
        </>
     );
}
 
export default SignInForm;

