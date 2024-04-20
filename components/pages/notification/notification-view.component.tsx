import { useGetNotificationsQuery } from "@/services/notifications";
import NotificationItem from "./notification-item.component";

const NotificationView = () => {
    const {data,isLoading,isError,error} = useGetNotificationsQuery()
    console.log("notification data",data)
    return ( 
        <>
        <div className="w-full mt-8" >
                <NotificationItem action/>
                <NotificationItem  />
                <NotificationItem/>
                <NotificationItem/>
                <NotificationItem/>
            </div>
        </>
     );
}
 
export default NotificationView;