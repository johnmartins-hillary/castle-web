import Hello from "@/components/pages/dashboard/hello.component";
import DashboardLayout from "../dashboard/layout";
import GetVerifiedBanner from "@/components/pages/get-verified/get-verified-banner.component";
import VerificationSteps from "@/components/pages/get-verified/verificaiton-steps.component";
import Head from "next/head";

const GetVerified = () => {
    return ( 
        <>
        <Head>
            <title>Get Verified - Carsle</title>
        </Head>
        <DashboardLayout>
            <Hello/>

            <GetVerifiedBanner/>
            <VerificationSteps/>
        </DashboardLayout>
        </>
     );
}
 
export default GetVerified;