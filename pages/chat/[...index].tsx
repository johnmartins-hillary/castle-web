import ChatArea from "@/components/pages/consultant/chat/chat-area.component";
import ChatHeader from "@/components/pages/consultant/chat/chat-header.component";
import MessageComposer from "@/components/pages/consultant/chat/message-composer.component";
import TestComposer from "@/components/pages/consultant/chat/test-composer";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/pages/dashboard/layout";
import { useGetChatDetailsQuery } from "@/services/chat";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";

const Chat = () => {
    const router = useRouter()
    const slugs:any = router.query.index;
    const chatAreaRef = useRef<any>()
    let eventSrc;
    const scrollToBottom =()=>{
        if (chatAreaRef.current) {
            chatAreaRef.current.scrollToTop= chatAreaRef.current?.scrollHeight
        }
    }
    return ( 
        <>
        <Head>
            <title>Chat - {slugs?.[2]}</title>
        </Head>
        <DashboardLayout>
         <div className="w-full overflow-y-hidden flex-col flex h-full  " >
         <ChatHeader eventSrc={eventSrc} />
            <ChatArea chatRef={chatAreaRef} scrollToBottom={scrollToBottom} />

             <MessageComposer  scrollToBottom={scrollToBottom} eventSrc={eventSrc}  />
              {/* <TestComposer/> */}

            {/* <div className=" bg-red-600 flex-1 p-9 " />
            <div className=" bg-green-600 flex-[2] p-9 "/>
            <div className=" bg-blue-600 flex-1 p-9 " /> */}
         </div>
        </DashboardLayout>
        </>
     );
}
 
export default Chat;