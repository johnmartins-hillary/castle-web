import { Button } from "@/components/ui/button";
import Image from "next/image"
interface Props{
    action?:boolean,
    title?:string,
    id?:number,
    notice?:string,
    status:string,
    created_at:string,
}
const NotificationItem = ({action,notice,title,id,status,created_at}:Props) => {
    return ( 
        <>
        <div className="w-full mb-12" >
        <div className="w-full flex items-center justify-between gap-[23px]" >
            <div className="w-[10%] md:w-[5%] flex items-center justify-center " >
                <Image src={'/images/bell-icon2.png'} width={24} height={24} alt="notification" />
            </div>
            <div className="w-[90%] md:w-[95%]" >
                    <p className=" text-xs md:text-[16px] text-left font-bold mb-1" >{title}</p>
                    <p className=" text-xs md:text-sm text-left font-light" >{notice}</p>
            </div>
        </div>
            
            {/* <div className="w-full flex items-center justify-start gap-4 mt-8 " >
                   {   status?.includes("unread") && <Button className="w-[142px] text-xs bg-primary_color rounded-[12px] p-3  relative left-[50px]" >
                   Mark as read
                    </Button>}
                    <Button className="w-[142px] text-xs bg-white rounded-[12px] px-9 border-primary_color border-[0.6px] " variant="outline" >
               Decline
                    </Button>
                        </div> */}
        </div>
      
        </>
     );
}
 
export default NotificationItem;