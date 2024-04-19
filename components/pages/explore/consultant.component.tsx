"use client"
import AvatarWithBadge from "@/components/avatar/avatar.component";
import { useRouter } from "next/navigation";


interface Props{
    name?:string,
    username?:string,
    verification_status?:string,
    id?:number
}
const Consultant = ({name,username,id,verification_status}:Props) => {
    const router = useRouter()
    return ( 
        <>
        <div onClick={()=>{router.push(`/consultant/${id}`)}} className=" w-[30%] md:w-1/5 mb-10 relative flex flex-col items-center justify-center cursor-pointer " >
            {/* <Image src={'/images/user-image.png'} className=" m-auto" alt="consultant" width={65} height={65} />
            <RiVerifiedBadgeFill color="#3897F0" className="relative left-28 z-10 -top-14"  size={18} /> */}
            <AvatarWithBadge isVerified={verification_status === "0" ? false : true} width={65} height={65} />
            <p className=" text-center text-xs font-medium mt-4 " >{name ? name : username }</p>
            {/* <p className=" text-center text-xs font-medium" >{lastName}</p> */}
        </div>
        </>
     );
}
 
export default Consultant;