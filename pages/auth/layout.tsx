import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../../app/globals.css";
import NavBar from "@/components/pages/landing-page/navbar/navbar-component";
// import NavBar from "../components/pages/landing-page/navbar.component"
import bg from "../../public/images/background-pattern.png"
import StoreProvider from "@/app/StoreProvider";
import { Toaster } from "@/components/ui/toaster";
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
  return (

<StoreProvider>
<div className={poppins.className}>
      <NavBar/>
    <main   className="w-full flex items-center justify-center  bg-no-repeat  bg-bottom h-screen  " >
    {children}
    </main>
    <Toaster/>
        </div>
</StoreProvider>
   
  );
}


// style={{backgroundImage:`url(/images/background-pattern.png)`,backgroundPositionX:"right",backgroundSize:553}}