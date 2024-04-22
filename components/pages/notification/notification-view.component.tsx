import { useGetNotificationsQuery } from "@/services/notifications";
import NotificationItem from "./notification-item.component";

const NotificationView = () => {
    const {data,isLoading,isError,error}:any = useGetNotificationsQuery()
    console.log("notification data",data)
    const notifications = data?.notifications?.data;
    console.log(notifications)
    return ( 
        <>
        <div className="w-full mt-8" >
                { isLoading ?  <div className="w-full " >
                    <p className="text-base text-center" >Loading</p>
                    </div>: data?.notifications?.data?.length > 0 ? 
                    
                    <>
                    
                    {notifications?.map(({title,id,notice,status,created_at}:any)=>(
                        <NotificationItem title={title} id={id} notice={notice} status={status} created_at={created_at} />
                    ))}
                    </>
                    
                    : <div className="w-full " >
                    <p className="text-base text-left" >No notification available</p>
                    </div>}
            </div>
        </>
     );
}
 
export default NotificationView;