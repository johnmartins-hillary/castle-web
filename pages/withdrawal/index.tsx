import Hello from "@/components/pages/dashboard/hello.component"
import DashboardLayout from "../dashboard/layout"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import WithdrawalForm from "@/components/pages/withdrawal/withdrawal-form.component"
import Head from "next/head"
const Withdrawal =()=>{
    return(
        <>
        <Head>
            <title>Withdrawal - Carsle</title>
        </Head>
        <DashboardLayout>
            <Hello/>
            <div className="w-full mt-24 flex items-start justify-start gap-3 " >
                <Button className="bg-primary_color w-[187px] md:w-[323px] rounded-xl py-6 text-sm text-white flex justify-start gap-5 items-center" >
                   <Image src={'/images/import-icon.png'} width={33} height={33} alt="upload" />Withdrawals
                 </Button>
                </div>

                <WithdrawalForm/>
        </DashboardLayout>
        </>
    )
}


export default Withdrawal