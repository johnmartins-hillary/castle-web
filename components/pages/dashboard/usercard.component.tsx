'use client'
import AvatarWithBadge from "@/components/avatar/avatar.component";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface UserCardsProps{
    name?:string,
    profileImage?:string,
    offline?:boolean
}
const UserCard = ({name,offline}:UserCardsProps) => {
    const router = useRouter()
    return ( 
        <>
        <div className="w-full flex  items-stretch justify-between mb-12  gap-2 " >
            <div className=" flex flex-flex_1 " >
                {/* <Image src={'/images/user-image.png'} width={174} height={174} priority alt="profile-image"  /> */}
                <AvatarWithBadge/>
            </div>

            <div className=" flex flex-col flex-[4]  md:flex-flex_3  justify-center pl-[12px] " >
                <p className=" text-[13px] font-medium" >{name}</p>
                <p className=" text-xs font-light" >57 minutes ago</p>
            </div>

            <div className=" flex flex-flex_2 justify-center items-center gap-3 " >
                <div className={` w-[13px] h-[13px] md:w-4 md:h-4 ${ offline ? "bg-light_grey" :"bg-green-500 "} rounded-full`} />
            <p className={` text-xs font-light text-primary_color`}>{offline ? 'Offline' : 'Online'}</p>
            </div>
            <div className=" flex flex-1 md:flex-flex_2 justify-center items-center gap-3 " >
            <div onClick={()=>{router.push(`/chat/val`)}} className={` w-[21.92px] h-[21.92px] flex md:w-8  md:h-8 ${ offline ? 'bg-light_grey' : 'bg-primary_color'} rounded-full items-center justify-center md:p-2 cursor-pointer `} >
            <Image width={96} height={96} src={'/images/chat-conversation.png'}   className=" object-cover w-[10.85px] md:w-24" alt="chat-conversation"  />
            </div>
                <div  onClick={()=>{router.push(`/session-call`)}} className={` w-[21.92px] h-[21.92px] flex md:w-8  md:h-8 ${ offline ? 'bg-light_grey' : 'bg-primary_color'} rounded-full items-center justify-center md:p-2 cursor-pointer `} >
                <Image width={96} height={96} src={'/images/hang-up.png'}   className=" object-cover w-[10.85px] md:w-24" alt="hang-up"  />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default UserCard;