import { useGetNotificationsQuery } from "@/services/notifications";
import NotificationItem from "./notification-item.component";

const NotificationView = () => {
    const {data,isLoading,isError,error}:any = useGetNotificationsQuery()
    console.log("notification data",data)
    return ( 
        <>
        <div className="w-full mt-8" >
                { isLoading ?  <div className="w-full " >
                    <p className="text-base text-center" >Loading</p>
                    </div>: data?.notifications?.data?.length > 0 ? null : <div className="w-full " >
                    <p className="text-base text-left" >No notification available</p>
                    </div>}
            </div>
        </>
     );
}
 
export default NotificationView;