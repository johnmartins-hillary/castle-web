import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { setRateHandler } from "@/redux/slices/user/user-profile.slice";
import { useGetUserDetailsQuery, useUpdateUserProfileMutation } from "@/services/user";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Rate = () => {
    const dispatch = useDispatch()
    const [updateProfile,{isSuccess,isError,isLoading,error}]:any = useUpdateUserProfileMutation()
    const {data:userData}:any = useGetUserDetailsQuery("")
    const rate = useSelector(({userprofile}:any)=>userprofile?.rate)
    const profileState = useSelector(({ userprofile }: any) => userprofile);
    const isVerified = userData?.verification_status?.includes("0") ? false : true
    const submitHandler=()=>{
        updateProfile(profileState)
    }

    const { toast } = useToast();
    useEffect(() => {
        if (isSuccess ) {
          toast({
            title: "Rate updated"
          });
        } else if (isError) {
          toast({
            title:"Oops",
    
            description: `${
              error?.data?.message ? error?.data?.message : "Something went wrong"
            }`
          });
        }
      }, [
        isSuccess,
        isError,
        error,
      ]);
      const disableBtn = rate === "" ? true : false;
    return ( 
        <>
        <div className="w-full mt-12" >
            <p className="font-medium text-[13px] md:text-lg text-left" >Referral (For verified users only)</p>
            <div className="w-full flex items-baseline justify-start gap-2" >
                <div className=" w-[238px] rounded-md bg-light_grey p-2 flex items-center justify-between gap-2 "  >
                    <p className="text-[13px] md:text-sm" >NGN</p>
                    <Separator orientation="vertical" className="bg-primary_color h-[23px]" />
                    <input disabled={!isVerified} value={rate} placeholder={isVerified ? ""  :"You are not verified"} onChange={(e)=>{
                            dispatch(setRateHandler(e.target.value))
                    }}  type="number" className=" bg-transparent flex flex-1 p-0 outline-none text-sm " />
                </div>
                <Button onClick={submitHandler} disabled={isLoading || disableBtn} className=" w-[112px]  p-2 rounded-[15px] bg-primary_color text-white text-center mt-5 " >
                    {isLoading ? "Saving..." :"Save"}
            </Button>
            </div>

            <p className=" text-start text-[12px] md:text-sm font-normal mt-7" >Add the amount you charge per minute</p>
        </div>
        </>
     );
}
 
export default Rate;