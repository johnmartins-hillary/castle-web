import React from "react";
import DashboardLayout from "../dashboard/layout";

const ChatLayout = ({children}:Readonly<{
    children: React.ReactNode;
  }>) => {
    return ( 
        <>
        <DashboardLayout>
            {children}
        </DashboardLayout>
        </>
     );
}
 
export default ChatLayout;