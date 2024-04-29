
"use client"
import { DrawerProvider } from "@/context/drawer-context";
import { useState } from "react";
import DashboardLayout from "../dashboard/layout";
import MobileNavbar from "@/components/pages/landing-page/navbar/mobile-navbar.component";
import ProfileSummary from "@/components/pages/consultant/profile-summary/profile-summary.component";
import Actions from "@/components/pages/consultant/actions/actions.component";
import Bio from "@/components/pages/consultant/bio/bio.component";
import PhotoGraphs from "@/components/pages/consultant/photographs.component";
import ConsultDrawer from "@/components/pages/consultant/consult-drawer.component";
import ConsultMobileMenu from "@/components/pages/consultant/consult-mobile-menu.component";

const ConsultantProfile = () => {
    const  [openConsultModal, setOpenConsultModal] = useState(false)
    return ( 
        <>
        <DrawerProvider>
        <DashboardLayout>
            {/* <div className="block md:hidden"  >
            <MobileNavbar/>
            </div> */}
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
