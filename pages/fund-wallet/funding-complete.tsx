import { CheckIcon } from "@/components/icons/icons";
import DashboardLayout from "../dashboard/layout";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import MobileNavbar from "@/components/pages/landing-page/navbar/mobile-navbar.component";

const FundingComplete = () => {
    return (
        <>
        <Head>
            <title>Funding Completed </title>
        </Head>
        <DashboardLayout>
            <MobileNavbar/>
            <div className="w-full" >
                <p className="font-bold text-xl text-center" >Funding Completed</p>
            </div>

            <div className="w-full flex flex-1 items-center justify-center my-6 " >
                <CheckIcon size={386} className={'m-auto'} />
            </div>

            <div className="w-full mt-10  flex items-center justify-center" >
            <Button className=" w-[442px] m-auto p-6 rounded-2xl bg-black text-center text-white text-xs " >
             Proceed to Consult
            </Button>
            </div>
        </DashboardLayout>
        </>
      );
}
 
export default FundingComplete;