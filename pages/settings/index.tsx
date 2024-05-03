import ModeOfCommunication from "@/components/pages/settings/mode-communication.component";
import DashboardLayout from "../dashboard/layout";
import Head from "next/head";
import Referrall from "@/components/pages/settings/referral.component";
import Rate from "@/components/pages/settings/rate.component";
import ReachOut from "@/components/pages/settings/reach-out.component";
import AboutUs from "@/components/pages/settings/about-us.component";
import MobileNavbar from "@/components/pages/landing-page/navbar/mobile-navbar.component";
import Image from "next/image"
import GetVeified from "@/components/pages/settings/get-veriied.component";
import SettingsLogOut from "@/components/pages/settings/logout.component";
const Settings = () => {
    return ( 
        <>
        <Head>
            <title>Settings</title>
        </Head>
        <DashboardLayout>
            <MobileNavbar title="Settings" iconStyles={"hidden md:block"} icon={<Image src={"/images/setting-icon.png"} height={5} width={25} className=" object-contain" alt="icon" />} />
            <div className="w-full md:max-lg:my-12" />
            <ModeOfCommunication/>
            <GetVeified/>
            <Referrall/>
            <Rate/>
            <ReachOut/>
            <AboutUs/>
            <SettingsLogOut/>
        </DashboardLayout>
        </>
     );
}
 
export default Settings;
