"use client";

import { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import "../../app/globals.css";
import SideBar from "@/components/sidebar/sidebar";
import StoreProvider from "@/app/StoreProvider";
import { Toaster } from "@/components/ui/toaster";
import { VoiceCallProvider } from "@/context/app-context";
import BottomTabBar from "@/components/bottom_nav/bottom_nav.component";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap"
});

export default function DashboardLayout({
  children,
  mainContentStyle,
  showBottomTab = true // Default value set to true
}: Readonly<{
  children: React.ReactNode;
  mainContentStyle?: string;
  showBottomTab?: boolean; // Optional prop for showing/hiding bottom tab
}>) {
  return (
    <StoreProvider>
      <VoiceCallProvider>
        <div className={`${poppins.className}`}>
          <div className="hidden lg:block lg:fixed lg:left-0 lg:top-0 lg:bottom-0 lg:w-[300px] lg:bg-sidebar_bg lg:p-4  ">
            <SideBar />
          </div>
          <div
            className={
              mainContentStyle
                ? mainContentStyle
                : `w-full m-0 min-h-screen p-[30px] md:p-[20px] md:px-[43px] lg:w-auto lg:ml-[300px] lg:px-14  relative `
            }
          >
            {children}
            {showBottomTab && <BottomTabBar />}{" "}
            {/* Conditionally render bottom tab */}
          </div>
          <Toaster />
        </div>
      </VoiceCallProvider>
    </StoreProvider>
  );
}
