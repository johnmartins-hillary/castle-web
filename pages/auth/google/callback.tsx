import { useEffect } from "react";
import AuthLayout from "../layout";
import { BASE_URL } from "@/constants";

const CallBack = () => {
    const googleCallbackHandler =async()=>{
        const response = await fetch(`${BASE_URL}auth/google/callback/${location.search}`)
        const data = await response.json();
        console.log(data)
    }
    useEffect(()=>{
        googleCallbackHandler()
    },[])
    return ( 
        <>
        <AuthLayout>
            <h1>Call Back</h1>
        </AuthLayout>
        </>
     );
}
 
export default CallBack;