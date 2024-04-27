"use client"
import { GoogleIcon } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { BASE_URL } from "@/constants";
import { useAppDispatch } from "@/lib/hooks";
import { SignUpSchema } from "@/utilities/schemas/sign-up.schema";
import {useRouter} from "next/navigation"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerUser from  "@/pages/api/registerUser"
import { useGoogleAuthQuery, useSignUpMutation } from "@/services/auth";
import { setToken, setUser } from "@/redux/slices/user";
import { useDispatch } from "react-redux";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
const SignUpForm = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const {toast} = useToast()
    const [googleLink,setGoogleLink] = useState("")
    const {data,isSuccess:googleAuthSuccess}:any = useGoogleAuthQuery()
    const [signUp,{isLoading,isSuccess,error,isError,data:signUpData}]:any = useSignUpMutation()
    const [email,setEmail] = useState("")
    const onSubmit =async(values:any)=>{
        if (typeof window !== "undefined") {
            localStorage.setItem("email",JSON.stringify(values?.email))
        }
        const data ={email:values?.email,password:values?.password,password_confirmation:values?.password,username:values?.username}
        signUp(data)
     
    }
    const {handleSubmit,control,register,formState:{errors,defaultValues}} = useForm(
        {
            defaultValues:{
                username:"",
                email:"",
                password:""
            },
            resolver:yupResolver(SignUpSchema),
            
        }
    )

    
   useEffect(()=>{
    if (googleAuthSuccess) {
        setGoogleLink(data?.url)
    }
   },[googleAuthSuccess])


    useEffect(() => {
        if (isSuccess) {
            // dispatch(setUser({user:signUpData?.user}))
            // dispatch(setToken({authorization:signUpData?.authorization}))
            toast({
                title:"Sign Up Successful",
            })
            router.push("/auth/email-verification")
        }
        else if (isError ) {
            toast({
              title: "Oops!",
      
              description: `${
                error?.data?.message ? error?.data?.message : "Something went wrong"
              }`
            })
        }
      }, [isSuccess, dispatch,isError,error]);
      
    return ( 
        <>
        <div className=" w-[85%] mt-[155px] lg:w-1/3 flex flex-col items-center justify-center  md:max-lg:w-2/5 lg:mt-[0px]  " >
        <div className="w-full" >
            <h3 className="font-bold text-left md:text-center text-lg" > Create account</h3>
        </div>
        <div className="w-full mt-10 items-center flex justify-center "  >
        <Button  onClick={()=>{router.replace(googleLink)}} className=" w-full md:w-96 bg-light_grey rounded-2xl text-black hover:bg-slate-200 hover:text-black cursor-pointer  py-7 " >
            <GoogleIcon color={''} onClick={()=>{}}  size={50} className="mr-2 h-4 w-4" />Sign up with Google
         </Button>
        </div>

            <div className="w-full mt-9" >
                <div className="w-full mb-5" >
                <label className="font-normal text-sm text-left relative left-3"  htmlFor="username">
                    Username
                </label>
                </div>

                <div className="w-full" >
                    <Input type={"text"} {...register("username")} id="username"  className="w-full bg-light_grey rounded-2xl text-black py-6  outline-none " />
                </div>
                <p className=" mt-5  text-red-600 text-sm text-left left-[12px] " >{errors.username?.message}</p>
            </div>
            <div className="w-full mt-3" >
                <div className="w-full mb-5" >
                <label className="font-normal text-sm text-left relative left-3"  htmlFor="email">
                   Email
                </label>
                </div>

                <div className="w-full" >
                    <Input type="email" {...register("email")}  id="email"  className="w-full bg-light_grey rounded-2xl text-black py-6  outline-none " />
                </div>
                <p className=" mt-5  text-red-600 text-sm text-left left-[12px] " >{errors.email?.message}</p>
            </div>
            <div className="w-full mt-3" >
                <div className="w-full mb-5" >
                <label className="font-normal text-sm text-left relative left-3"  htmlFor="password">
                   Password
                </label>
                </div>

                <div className="w-full" >
                    <Input type="password" {...register("password")}  id="password"  className="w-full bg-light_grey rounded-2xl text-black py-6  outline-none " />
                </div>
                <p className=" mt-5  text-red-600 text-sm text-left left-[12px] " >{errors.password?.message}</p>
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
        <Button disabled={isLoading} onClick={handleSubmit(onSubmit)} className="bg-primary_color rounded-3xl py-7 text-white w-full " >
            {isLoading ? <Image src={'/images/loader.gif'} alt="loader" width={50} height={50}  /> : " Sign Up"}
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

