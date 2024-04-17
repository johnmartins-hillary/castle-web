"use client"
import Actions from "@/components/pages/consultant/actions/actions.component";
import Bio from "@/components/pages/consultant/bio/bio.component";
import ConsultDrawer from "@/components/pages/consultant/consult-drawer.component";
import ConsultMobileMenu from "@/components/pages/consultant/consult-mobile-menu.component";
import PhotoGraphs from "@/components/pages/consultant/photographs.component";
import ProfileSummary from "@/components/pages/consultant/profile-summary/profile-summary.component";
import MobileNavbar from "@/components/pages/landing-page/navbar/mobile-navbar.component";
import { Drawer } from "@/components/ui/drawer";
import { DrawerProvider } from "@/context/drawer-context";
import DashboardLayout from "@/pages/dashboard/layout";
import Head from "next/head";
import { useState } from "react";

const ConsultantProfile = () => {
    const  [openConsultModal, setOpenConsultModal] = useState(false)
    return ( 
        <>

        <Head>
            <title>Val Okafor - Carsle</title>
        </Head>
        <DrawerProvider>
        <DashboardLayout>
            <div className="block md:hidden"  >
            <MobileNavbar/>
            </div>
            <div className="w-full xl:w-[70%]" >
            <ProfileSummary/>
        <Actions setOpenModal={setOpenConsultModal} />
        <Bio/>
        <PhotoGraphs/>
            <div className=" hidden md:block" >
            <ConsultDrawer/>  
            </div>
            <div className=" block md:hidden" >
            <ConsultMobileMenu showModal={openConsultModal} setShowModal={setOpenConsultModal} />  
            </div>
            </div>
        </DashboardLayout>
        </DrawerProvider>
        </>
     );
}
 
export default ConsultantProfile;