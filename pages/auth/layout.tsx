"use client"

import {useState, useEffect} from "react"
import { Poppins } from "next/font/google";
import "../../app/globals.css";
import NavBar from "@/components/pages/landing-page/navbar/navbar-component";
// import NavBar from "../components/pages/landing-page/navbar.component"
import bg from "../../public/images/background-pattern.png"
import StoreProvider from "@/app/StoreProvider";
import { Toaster } from "@/components/ui/toaster";
import {useRouter} from "next/navigation"
const poppins = Poppins({
  weight: ['400', '500','600','700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [userToken, setUserToken] = useState<any>()
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("authorization") || null
      setUserToken(token)
    }
  },[])

  useEffect(() => {
      if(userToken) {
        router.replace("/dashboard")
      }
  },[userToken])

  return (

<StoreProvider>
  <div className={poppins.className}>
      <NavBar/>
    <main   className="w-full flex items-center justify-center  bg-no-repeat  bg-bottom h-auto  sticky pt-[140px]" >
    {children}
    </main>
    <Toaster/>
  </div>
</StoreProvider>
  );
}


// style={{backgroundImage:`url(/images/background-pattern.png)`,backgroundPositionX:"right",backgroundSize:553}}