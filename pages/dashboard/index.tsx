"use client"
import Head from "next/head";
import DashboardLayput from "./layout";
import DashboardBanner from "@/components/pages/dashboard/dashboard-banner.component";
import Hello from "@/components/pages/dashboard/hello.component";
import BookingHistory from "@/components/pages/dashboard/bookings/booking-history.component";

const Dashboard = () => {
    return ( 
        <>
        <Head>
            <title>
                Dashboard - Carsle
            </title>
        </Head>
        <DashboardLayput>
        <div className="w-full" >
            <Hello/>
            {/* <div className={"w-full mb-[12px] md:hidden"} >
                <p className="text-center font-light text-xs" >Home</p>
            </div> */}
           <DashboardBanner/>
        </div>
        {/* <BookingHistory/> */}
        </DashboardLayput>
        </>
     );
}
 
export default Dashboard;