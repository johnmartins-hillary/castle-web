import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../../app/globals.css";
import NavBar from "@/components/pages/landing-page/navbar/navbar-component";
// import NavBar from "../components/pages/landing-page/navbar.component"
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

      <div className={poppins.className}>
      <NavBar/>
    <main className="w-full flex items-center justify-center" >
    {children}
    </main>
        </div>
   
  );
}
