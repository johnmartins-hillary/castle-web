import { Button } from "@/components/ui/button";
import Image from "next/image"
interface Props{
    action?:boolean
}
const NotificationItem = ({action}:Props) => {
    return ( 
        <>
        <div className="w-full mb-12" >
        <div className="w-full flex items-center justify-between" >
            <div className="w-[10%] md:w-[5%] flex items-center justify-center " >
                <Image src={'/images/bell-icon2.png'} width={24} height={24} alt="notification" />
            </div>
            <div className="w-[90%] md:w-[95%]" >
                    <p className=" text-xs md:text-sm text-left font-light" >User, Emmanuel Eze just requested a 30 mins call session with you</p>
            </div>
        </div>

            {action && <div className="w-full flex items-center justify-start gap-4 mt-8 " >
                    <Button className="w-[142px] text-xs bg-primary_color rounded-[12px] p-3" >
                    Accept
                    </Button>
                    <Button className="w-[142px] text-xs bg-white rounded-[12px] px-9 border-primary_color border-[0.6px] " variant="outline" >
               Decline
                    </Button>
                        </div>}
        </div>
        </>
     );
}
 
export default NotificationItem;