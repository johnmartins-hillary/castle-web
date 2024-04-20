"use client"
import { useToast } from "@/components/ui/use-toast";
import { setToken, setUser } from "@/redux/slices/user";
import { useLazyGoogleAuthCallBackQuery } from "@/services/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const GoogleCallback = () => {
    const [trigger,{data,isSuccess,isError,error}]:any = useLazyGoogleAuthCallBackQuery({})
    const {toast} = useToast()
    const dispatch = useDispatch()
    const router = useRouter()
useEffect(()=>{
    if (typeof window !== "undefined") {
        trigger({location:location.search})
    }
},[])
    useEffect(()=>{
        if (isSuccess) {
            dispatch(setUser({user:data?.user}))
            dispatch(setToken({authorization:data?.authorization}))
            toast({
                title:"Sign In Successful",
            })
            router.replace("/dashboard")
            
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
        <div className="w-full flex flex-col items-center justify-center" >
                <Image src={'/images/loader.gif'} alt="loader" width={160} height={160} />
                <p className="font-semibold text-lg" >Processing Account</p>
           </div>
        </>
     );
}
 
export default GoogleCallback;