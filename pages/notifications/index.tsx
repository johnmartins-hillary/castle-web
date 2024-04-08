import Hello from "@/components/pages/dashboard/hello.component";
import DashboardLayout from "../dashboard/layout";
import NotificationItem from "@/components/pages/notification/notification-item.component";
import Head from "next/head"
const Notification = () => {
    return ( 
        <>
        <Head>
            <title>Notifications</title>
        </Head>
        <DashboardLayout>
            <Hello/>
            <div className="w-full mt-14" >
                <p className="font-bold text-lg text-left" >Notifications</p>
            </div>
            <div className="w-full mt-8" >
                <NotificationItem action/>
                <NotificationItem  />
                <NotificationItem/>
                <NotificationItem/>
                <NotificationItem/>
            </div>
        </DashboardLayout>
        </>
     );
}
 
export default Notification;