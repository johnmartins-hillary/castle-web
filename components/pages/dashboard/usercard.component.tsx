'use client'
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
                <Image src={'/images/user-image.png'} width={174} height={174} priority alt="profile-image"  />
            </div>

            <div className=" flex flex-col  flex-flex_3  justify-center " >
                <p className=" text-sm font-medium" >{name}</p>
                <p className=" text-xs font-light" >57 minutes ago</p>
            </div>

            <div className=" flex flex-flex_2 justify-center items-center gap-3 " >
                <div className={` w-4 h-4 ${ offline ? "bg-light_grey" :"bg-green-500 "} rounded-full`} />
            <p className={` text-xs font-light text-primary_color`}>{offline ? 'Offline' : 'Online'}</p>
            </div>
            <div className=" flex flex-flex_2 justify-center items-center gap-3 " >
            <div onClick={()=>{router.push(`/chat/val`)}} className={`w-8  h-8 ${ offline ? 'bg-light_grey' : 'bg-primary_color'} rounded-full items-center justify-center p-2 cursor-pointer `} >
            <img src={'/images/chat-conversation.png'}   className=" object-cover w-24" alt="chat-conversation"  />
            </div>
                <div  onClick={()=>{router.push(`/session-call`)}} className={`w-8  h-8 ${ offline ? 'bg-light_grey' : 'bg-primary_color'} rounded-full items-center justify-center p-2 cursor-pointer `} >
                <img  src={'/images/hang-up.png'}   className=" object-cover w-24" alt="hang-up"  />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default UserCard;