"use client"
import Hello from "@/components/pages/dashboard/hello.component";
import DashboardLayout from "../dashboard/layout";
import Head from "next/head";
import AmountView from "@/components/pages/fund-wallet/amount-view.component";
import Image from "next/image";
import AmountSetter from "@/components/pages/fund-wallet/amount-setter.component";
import PayWithCard from "@/components/pages/fund-wallet/pay-with-card.component";
import TransactionHistory from "@/components/pages/fund-wallet/transaction-history.component";
import { LogoutIcon } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import FundWalletModal from "@/components/pages/fund-wallet/modals/fund-wallet-modal.component";
import SaveCardModal from "@/components/pages/fund-wallet/modals/save-card-modal.component";
import FundingCompleteModal from "@/components/pages/fund-wallet/modals/funding-complete-modal.component";
import FundingMethodModal from "@/components/pages/fund-wallet/modals/funding-method-modal.component";
import WithdrawalModal from "@/components/pages/fund-wallet/modals/withdrawal-modal.component";
import WithdrawalCompleteModal from "@/components/pages/fund-wallet/modals/withdrawal-completed-modal.component";

const FundWallet = () => {
    const [openFundWallet,setOpenFundWallet] = useState(false)
    const [opensaveCard,setOpenSaveCard] = useState(false)
    const [openFundingComplete,setOpenFundingComplete] = useState(false)
    const [openFundingMethod,setOpenFundingMethod] = useState(false)
    const [openWithdrawal,setOpenWithdrawal] = useState(false)
    const [openWithdrawalComplete,setOpenWithdrawalComplete] = useState(false)
    return (
        <>
        <Head>
            <title>Fund wallet - Carsle</title>
        </Head>
        <DashboardLayout>
            <Hello/>
            <AmountView/>

            <div className="w-full mt-7 " >
            <Button  onClick={(e)=>{
                setOpenFundWallet(true)
                }}  className="bg-primary_color w-[220px] text-[16px] rounded-xl py-3 mb-5 text-sm text-white flex justify-between items-center" >
                   Fund Your Wallet
                   <Image src={'/images/money-icon.png'} width={24} height={24} alt="money-icon" />
                 </Button>
            {/* <Button       
                variant="outline"  onClick={(e)=>{
                    setOpenSaveCard(true)
                }}  className="bg-white w-[220px] border-primary_color text-[16px] rounded-xl py-3 text-sm text-black flex justify-start gap-5 items-center" >
                Pay with card
                 </Button> */}
            </div>
            {/* <AmountSetter/> */}


            <div className="w-full flex flex-col items-stretch justify-between mt-10 md:flex-row " >
                <div className="w-full md:w-1/2" >
            <PayWithCard setOpenFundingMethod={setOpenFundingMethod} setOpenWithdrawal={setOpenWithdrawal} />
                </div>
            </div> 


            <TransactionHistory/>
            <FundWalletModal openModal={openFundWallet} setOpenModal={setOpenFundWallet} callBackFunction={setOpenFundingComplete} />
        <SaveCardModal openModal={opensaveCard} setOpenModal={setOpenSaveCard}  />
        <FundingCompleteModal openModal={openFundingComplete} setOpenModal={setOpenFundingComplete} />
        <FundingMethodModal openModal={openFundingMethod} setOpenModal={setOpenFundingMethod} />
        <WithdrawalModal openModal={openWithdrawal} setOpenModal={setOpenWithdrawal} />
        <WithdrawalCompleteModal openModal={openWithdrawalComplete} setOpenModal={setOpenWithdrawalComplete} />
        </DashboardLayout>
        
        </>
      );
}
 
export default FundWallet;