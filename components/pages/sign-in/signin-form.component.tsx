"use client"
import { GoogleIcon } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import { yupResolver } from "@hookform/resolvers/yup"
import { Input } from "@/components/ui/input";
import {useRouter} from "next/navigation"
import { useForm } from "react-hook-form";
import {SignInSchema} from "../../../utilities/schemas/sign-in.schema"
import { useEffect, useState } from "react";
import { useGoogleAuthQuery, useSignInUserMutation } from "@/services/auth";
import { useToast } from "@/components/ui/use-toast";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "@/redux/slices/user";
const SignInForm = () => {
    const router = useRouter()
    const {toast} = useToast()
    const dispatch = useDispatch()
    const [googleLink,setGoogleLink] = useState("")
    const {data,isSuccess:googleAuthSuccess}:any = useGoogleAuthQuery()
    const [signInUser,{isLoading,isSuccess,error,isError,data:signInData}]:any = useSignInUserMutation()
    const onSubmit =async(values:any)=>{
        const data ={email:values?.email,password:values?.password}
        signInUser(data)
    }
    const {handleSubmit,register,formState:{errors,}} = useForm(
        {
            defaultValues:{
                email:"",
                password:""
            },
            resolver:yupResolver(SignInSchema)
        }
    )

    useEffect(() => {
        if (isSuccess) {
            dispatch(setUser({user:signInData?.user}))
            dispatch(setToken({authorization:signInData?.authorization}))
            toast({
                title:"Sign In Successful",
            })
            router.push("/dashboard")
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

      useEffect(()=>{
        if (googleAuthSuccess) {
            setGoogleLink(data?.url)
        }
       },[googleAuthSuccess])
    return ( 
        <>
        <div className=" lg:w-1/3 flex flex-col items-center justify-center mt-10  md:max-lg:w-2/5 w-[85%]  " >
        <div className="w-full" >
            <h3 className="font-bold text-center text-lg" >Sign in</h3>
        </div>
        <div className="w-full mt-10 flex items-center justify-center "  >
        <Button  onClick={()=>{router.replace(googleLink)}} className=" w-full md:w-96 bg-light_grey rounded-2xl text-black hover:bg-slate-200 hover:text-black cursor-pointer  py-7 md:max-lg:w-full" >
            <GoogleIcon  color={''} onClick={()=>{}} size={50} className="mr-2 h-4 w-4" />Sign in with Google
         </Button>
        </div>

            <div className="w-full mt-9" >
                <div className="w-full mb-5" >
                <label className="font-normal text-sm text-left relative left-3"  htmlFor="email">
                   Email
                </label>
                </div>

                <div className="w-full" >
                    <Input type="email"  {...register("email")} id="email"  className="w-full bg-light_grey rounded-2xl text-black py-6  outline-none " />
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
                    <Input type="password"  {...register("password")} id="password"  className="w-full bg-light_grey rounded-2xl text-black py-6  outline-none " />
                </div>
                <p className=" mt-5  text-red-600 text-sm text-left left-[12px] " >{errors.password?.message}</p>
                <div className="mt-2 w-full" >
        <p className="text-right text-xs font-normal italic " >? Forgot password</p>
      </div>
            </div>

          
    <div className="w-full mt-10" >
        <Button  disabled={isLoading}  onClick={handleSubmit(onSubmit)}  className="bg-primary_color rounded-3xl py-7 text-white w-full " >
                {isLoading ? "Loggin In..." : "Login"}
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

