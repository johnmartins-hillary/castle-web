import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../../app/globals.css";
import SideBar from "@/components/sidebar/sidebar";

const poppins = Poppins({
  weight: ['400', '500','600','700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${poppins.className}`}>
      <div className="hidden lg:block lg:fixed lg:left-0 lg:top-0 lg:bottom-0 lg:w-[300px] lg:bg-sidebar_bg lg:p-4  ">
        <SideBar/>
      </div>
      {/* <div className=" ml-0 w-full  min-h-screen  py-14 px-8 lg:ml-[300px] lg:p-14 md:max-lg:ml-0 md:max-lg:w-full md:max-lg:min-h-screen overflow-hidden   ">
        {children}
      </div> */}
      <div className=" w-full m-0 min-h-screen p-[30px] md:p-[20px] md:px-[43px] lg:w-auto lg:ml-[300px] lg:px-14  relative   ">
        {children}
      </div>
    </div>
  );
}
 