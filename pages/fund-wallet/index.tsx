import Hello from "@/components/pages/dashboard/hello.component";
import DashboardLayout from "../dashboard/layout";
import Head from "next/head";
import AmountView from "@/components/pages/fund-wallet/amount-view.component";
import Image from "next/image";
import AmountSetter from "@/components/pages/fund-wallet/amount-setter.component";
import PayWithCard from "@/components/pages/fund-wallet/pay-with-card.component";
import TransactionHistory from "@/components/pages/fund-wallet/transaction-history.component";
import { LogoutIcon } from "@/components/icons/icons";

const FundWallet = () => {
    return (
        <>
        <Head>
            <title>Fund wallet - Carsle</title>
        </Head>
        <DashboardLayout>
            <Hello/>
            <AmountView/>

            <div className="w-full flex items-center justify-start gap-2 mt-7 " >
                <Image src={'/images/wallet-icon.png'} alt="wallet" width={39.75} height={26.5}  />
                <h1 className="font-bold text-base  md:max-lg:text-lg lg:text-2xl " >Fund Your Wallet</h1>
            </div>
            <AmountSetter/>


            <div className="w-full flex flex-col items-stretch justify-between mt-10 md:flex-row " >
                <div className="w-full md:w-1/2" >
            <PayWithCard/>
                </div>
                <div className="w-full  flex mt-5   items-center justify-start gap-2 md:w-1/2 md:mt-0 md:justify-center " >
                    <p className="font-bold text-sm" >Other Funding methods</p>
                    <LogoutIcon size={26} className={"cursor-pointer"} />
                </div>
            </div>


            <TransactionHistory/>
        </DashboardLayout>
        </>
      );
}
 
export default FundWallet;