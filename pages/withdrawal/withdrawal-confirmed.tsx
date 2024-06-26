
import Head from "next/head";
import DashboardLayout from "../dashboard/layout";
import { CheckIcon } from "@/components/icons/icons";
import MobileNavbar from "@/components/pages/landing-page/navbar/mobile-navbar.component";

const WithdrawalConfirmed = () => {
    return (
        <>
        <Head>
            <title>Withdrawal Completed</title>
        </Head>
        <DashboardLayout>
            <MobileNavbar/>
            <div className="w-full h-[60vh] flex flex-col items-center justify-center"  >
            <div className="w-full flex items-center justify-center my-6 " >
                <CheckIcon color={'black'} onClick={()=>{}}   size={311} className={'m-auto w-[100px] h-[100px] md:w-[311px] md:h-[311px] '} />
            </div>

            <div className="w-full   flex items-center justify-center" >
            <p className="font-normal text-sm text-center " >The amount will be disbursed in your<br/> account soon!</p>
            </div>
            <div className="w-full mt-8 block md:hidden" >
            <p className="font-bold text-sm text-center underline" >Home</p>
            </div>
            </div>
        </DashboardLayout>
        </>
      );
}
 
export default WithdrawalConfirmed;