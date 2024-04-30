"use client"
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
// import { useToast } from "@/components/ui/use-toast";
import { useGetUserDetailsQuery, useVerifyProfileMutation } from "@/services/user";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import YourAreVerified from "./your-are-verified.component";

const VerificationSteps =()=>{
    const [verifyProfile,{data,isLoading,isSuccess,isError,error}]:any = useVerifyProfileMutation()
    const {data:userdata}:any = useGetUserDetailsQuery("")
    const [photo_id_front,setPhototFront] = useState<any>()
    const [photo_id_back,setPhototBack] = useState("");
    const [couponCode,setCouponCode] = useState("");
    const router = useRouter()
    const {toast} = useToast()
    const isVerified = userdata?.user?.verification_status === "1" ? true : false;
    const handlePhoto=(e:any)=>{
        const [file] = e.target.files;
        setPhototFront(e.target.files[0])
        if (e.target.files[0]) {
            toast({
                title:"File Selected",
            })
        }
    }
    const handleSubmit=()=>{
        if (userdata?.portfolio?.length >0 && userdata?.social?.length >0 && userdata?.user?.bio !== null && userdata?.user?.category !== null && userdata?.user?.profile_image !== null && userdata?.user?.name !== null ) {
            verifyProfile({photo_id_front,code:couponCode})
            setCouponCode("")
            setPhototFront("")
        }
        else{
            toast({
                title:"Oops!",
                description:"Fill all your profile fields before verifying"
            })
            router.push("/profile")
        }
    }


    useEffect(()=>{

        if (isSuccess) {
            if (data?.message?.includes("Insufficient")) {
                toast({
                    title:"Oops",
                    description:`${data?.message}`,
                })
            }

            else{
                toast({
                    title:`${data?.message}`,
                })
                router.push("/get-verified/verification-submitted")
            }
        }
        else if(isError){
            toast({
                title:"Oops",

             description:`${error?.data?.message ? error?.data?.message : 'Something went wrong' }`
})
        }

    },[isLoading,isSuccess,isError,error])
    const disableBtn = photo_id_front === ""  ? true : false

    return(
        <>
       {isVerified && <YourAreVerified/> }
       {!isVerified &&  <div className="w-full mt-9 pb-[75px] ">

<div className="w-full" >
    <p className="font-bold text-sm md:text-lg text-left" >Steps</p>
</div>

<div className="w-full flex flex-col items-center justify-between mt-1 md:mt-9 md:flex-row " >
    <div className="w-full mt-4 md:w-2/5 md:mt-0" >
    <div className="w-full" >
    <p className="font-normal text-sm md:text-lg text-left md:max-lg:text-base " >Step 1</p>
    <p className="font-normal text-xs md:text-sm mt-5 " >Go to your <Link href={'/profile'} className="font-bold text-black cursor-pointer underline">profile</Link> and correctly fill all the fields </p>
    <p className="font-normal text-[10px] md:text-xs mt-3 " >Make sure to sell yourself using images and lots of information </p>
    </div>
    </div>
    <div className="w-full mt-4 md:w-2/5 md:mt-0" >
    <div className="w-full" >
    <p className="font-normal text-sm md:text-lg text-left md:max-lg:text-base" >Step 2</p>
        <Label htmlFor="photo-front" className="flex items-start justify-start gap-4 w-full mt-5" >
        <input onChange={(e)=>{handlePhoto(e)}}  type="file" className="hidden" id="photo-front"/>
            <Image src={'/images/upload-icon.png'} width={100} height={89} alt="upload" />
            <div className=" w-auto" >
            <p className="font-normal text-xs md:text-sm" >Upload a valid ID card</p>
            <p className="font-normal text-[10px] md:text-xs mt-3 " >Your data is safe with us.</p>
            <p className="font-normal text-[10px] md:text-xs mt-3 " >Your ID: {photo_id_front?.name}</p>
            </div>
       
        </Label>
    </div>
    </div>
</div>

<div className="w-full flex flex-col items-center justify-between mt-12 md:flex-row md:max-lg:flex-col md:max-lg:items-start " >
    <div className=" w-full md:w-2/5 md:max-lg:w-full" >
    <div className="w-full" >
    <p className="font-normal text-sm md:text-lg text-left md:max-lg:text-base " >Step 3</p>
    <p className="font-normal text-xs md:text-sm mt-5 " >Pay Verification fee of NGN 2, 000</p>

            <div className="w-full flex items-center justify-start gap-[43px] mt-8 md:max-lg:justify-start md:max-lg:gap-8 " >
        <Button className="w-[142px] text-xs bg-primary_color rounded-[12px] p-3" >
            Pay from Wallet
        </Button>
        <Input placeholder="Enter Coupon Code" value={couponCode} onChange={({target})=>{
                setCouponCode(target.value)
        }}  className="w-[142px] text-xs bg-white rounded-[12px] px-3 border-primary_color border-[0.6px] " />
            </div>

            <div className="w-full mt-12 " >
                <p className="text-xs font-normal underline text-center cursor-pointer md:max-lg:text-start" >Fund Wallet</p>
            </div>
    </div>
    </div>
    <div className=" w-full flex items-center justify-center md:block md:w-2/5 mt-14 md:mt-0 md:max-lg:w-full md:max-lg:mt-8 " >
       <Button disabled={isLoading || disableBtn}  onClick={handleSubmit}  className="w-[248px] m-auto md:m-0 bg-primary_color rounded-[12px] py-3" >
            {isLoading ? "Submitting..." : "Submit Application"}
        </Button>
         

    </div>
</div>




</div>}
        </>
    )
}

export default VerificationSteps;



const Indicator = ({photo_id_front,photo_id_back,setPhototFront,setPhototBack}:any)=>{

    const ptfCheck = photo_id_front ? true : false
    const ptbCheck = photo_id_back ? true : false;
    const handlePhoto=(e:any,t:string)=>{
        const [file] = e.target.files;
        console.log("target file", e.target.files[0])
        if (file) {
            if (t === "ptf") {
                setPhototFront(e.target.files[0])
            }
            else{
                setPhototBack( e.target.files[0])
            }
        }
    }
    return(
        <>
        <div className="w-full flex items-center justify-between mt-[25px] " >
            <div className="w-1/2 flex items-center justify-start gap-[12px]" >
                <Checkbox checked={ptfCheck} />
                <Label htmlFor="photo-front" className="text-xs md:text-sm" >Photo Id Front</Label>
            </div>
            <div className="w-1/2 flex items-center justify-start gap-[12px]" >
                <input onChange={(e)=>{handlePhoto(e,"ptb")}} type="file" className="hidden" id="photo-back" />
                <Checkbox checked={ptbCheck} />
                <Label htmlFor="photo-back" className="text-xs md:text-sm" >Photo Id Back</Label>
            </div>
        </div>
        </>
    )
}