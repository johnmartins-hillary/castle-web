import SignInForm from "@/components/pages/sign-in/signin-form.component";
import AuthLayout from "./layout";
import Head from "next/head"
const SignIn = () => {
    return ( 
        <>
        <Head>
            <title>Sign In - Carsle</title>
        </Head>
        <AuthLayout>
            <SignInForm/>
        </AuthLayout>
        </>
     );
}
 
export default SignIn;