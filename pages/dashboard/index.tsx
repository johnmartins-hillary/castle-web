"use client"
import Head from "next/head";
import DashboardLayput from "./layout";
import DashboardBanner from "@/components/pages/dashboard/dashboard-banner.component";
import Hello from "@/components/pages/dashboard/hello.component";
import History from "@/components/pages/dashboard/history.component";
import Offline from "@/components/pages/dashboard/offline";

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
           <DashboardBanner/>
        </div>

        <div className="w-full mt-14 flex flex-col items-start justify-between gap-9 md:max-lg:flex-col lg:flex-row " >
            <History/>
            <Offline/>
        </div>
        </DashboardLayput>
        </>
     );
}
 
export default Dashboard;