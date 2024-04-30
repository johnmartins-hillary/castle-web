'use client'
import { useEffect, useState } from "react";
import Consultant from "../explore/consultant.component";
import { useGetCircleQuery } from "@/services/circle";
import { useToast } from "@/components/ui/use-toast";


const YourConsultants = () => {
    const {toast} = useToast()
    const {data:circleData,isError,isLoading,error}:any = useGetCircleQuery()
    
    useEffect(()=>{
        if (isError) {
          toast({
            title:'Oops!',
            description:`${error?.data?.message ? error?.data?.message : 'Something went wrong' }`
          })
        }
      },[isError,isLoading,error])
    return ( 
        <>
        
        <div className={`w-full flex items-center ${circleData?.circles.length > 1 ? 'justify-center' :'justify-start'} gap-[16px] flex-wrap  mt-14 md:justify-between md:gap-0 pb-[75px] `} >
            {isLoading ? <p>Loading...</p> :  circleData?.circles?.length >0 ? <>
                {circleData?.circles?.map(({name,username,id,verification_status,profile_image}:any)=>(
     <Consultant name={name} username={username} verification_status={verification_status} profile_image={profile_image} id={id} key={id} />
                ))}
            </> : <div className="w-full flex items-center justify-center mt-3 " >
                <p className=" font-medium text-lg md:text-xl" >You do not have anyone in your circle</p>
            </div> }
        </div>
        </>
     );
}
 
export default YourConsultants;