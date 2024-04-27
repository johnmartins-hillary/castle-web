"use client"
import EmailVerv from "@/components/pages/email-verification";
import AuthLayout from "./layout";
import Head from "next/head";

const EmailVerification = () => {

    return ( 
        <>
        <Head>
            <title>Email Verification - Carsle</title>
        </Head>
        <AuthLayout>
            <EmailVerv/>
        </AuthLayout>
        </>
     );
}
 
export default EmailVerification;