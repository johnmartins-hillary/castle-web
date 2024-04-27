import { useGetNotificationsQuery, useLazyMarkAllReadQuery } from "@/services/notifications";
import NotificationItem from "./notification-item.component";
import { useEffect } from "react";

const NotificationView = () => {
    const {data,isLoading,isError,error,isSuccess}:any = useGetNotificationsQuery()
    const notifications = data?.notifications?.data;
    const [trigger] = useLazyMarkAllReadQuery() 
    useEffect(()=>{
        if (isSuccess) {
            trigger()
        }
    },[isSuccess])
    return ( 
        <>
        <div className="w-full mt-8" >
                { isLoading ?  <div className="w-full " >
                    <p className="text-base text-center" >Loading</p>
                    </div>: data?.notifications?.data?.length > 0 ? 
                    
                    <>
                    
                    {notifications?.map(({title,id,notice,status,created_at}:any)=>(
                        <NotificationItem key={title} title={title} id={id} notice={notice} status={status} created_at={created_at} />
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