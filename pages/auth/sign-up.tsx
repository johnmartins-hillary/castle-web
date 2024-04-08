"use client"
import RootLayout from "@/app/layout";
import SignUpForm from "@/components/pages/sign-up/signup-form.component";
import AuthLayout from "./layout";
import Head from "next/head"
const SignUp = () => {
    return ( 
        <>
        <Head>
            <title>Sign Up - Carsle</title>
        </Head>
       <AuthLayout>
       <SignUpForm/>
       </AuthLayout>
 
        
        </>
     );
}
 
export default SignUp;