import { Skeleton } from "../ui/skeleton"

export const BookingItemLoader = ()=>{
    return(
        <>
        
        </>
    )
}


export const UsersLoader=()=>{
    return(
     <div className="w-[30%] md:w-1/5 flex flex-col items-center justify-center " >
        <Skeleton className="w-[65px] h-[65px] rounded-[65px] md:w-[90px] md:h-[90px] md:rounded-[90px] lg:w-[85px] lg:h-[85px] lg:rounded-[85px]"/>
        <Skeleton className="w-[60px] h-[10px] mt-4"  />
     </div>
    )
}