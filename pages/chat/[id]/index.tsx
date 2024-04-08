import ChatArea from "@/components/pages/consultant/chat/chat-area.component";
import ChatHeader from "@/components/pages/consultant/chat/chat-header.component";
import MessageComposer from "@/components/pages/consultant/chat/message-composer.component";
import DashboardLayout from "@/pages/dashboard/layout";
import Head from "next/head";

const Chat = () => {
    return ( 
        <>
        <Head>
            <title>Chat - Victor</title>
        </Head>
        <DashboardLayout>
         <div className="w-full overflow-y-hidden flex-col flex h-full  " >
         <ChatHeader/>
            <ChatArea/>
            <MessageComposer/>

            {/* <div className=" bg-red-600 flex-1 p-9 " />
            <div className=" bg-green-600 flex-[2] p-9 "/>
            <div className=" bg-blue-600 flex-1 p-9 " /> */}
         </div>
        </DashboardLayout>
        </>
     );
}
 
export default Chat;