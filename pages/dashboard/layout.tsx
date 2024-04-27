"use client";

import { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import "../../app/globals.css";
import SideBar from "@/components/sidebar/sidebar";
import StoreProvider from "@/app/StoreProvider";
import { Toaster } from "@/components/ui/toaster";
import { VoiceCallProvider } from "@/context/app-context";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap"
});

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <VoiceCallProvider>
        <div className={`${poppins.className}`}>
          <div className="hidden lg:block lg:fixed lg:left-0 lg:top-0 lg:bottom-0 lg:w-[300px] lg:bg-sidebar_bg lg:p-4  ">
            <SideBar />
          </div>
          <div className=" w-full m-0 min-h-screen p-[30px] md:p-[20px] md:px-[43px] lg:w-auto lg:ml-[300px] lg:px-14  relative   ">
            {children}
          </div>
          <Toaster />
        </div>
      </VoiceCallProvider>
    </StoreProvider>
  );
}
