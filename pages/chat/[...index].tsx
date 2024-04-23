import ChatArea from "@/components/pages/consultant/chat/chat-area.component";
import ChatHeader from "@/components/pages/consultant/chat/chat-header.component";
import MessageComposer from "@/components/pages/consultant/chat/message-composer.component";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/pages/dashboard/layout";
import { useGetChatDetailsQuery } from "@/services/chat";
import Head from "next/head";
import { useRouter } from "next/router";

const Chat = () => {
    const router = useRouter()
    const slugs:any = router.query.index;
    // const {data,isLoading}:any = useGetChatDetailsQuery({id:slugs?.[0],  booking_ref:slugs?.[1]})
    // const chatStatus = data?.appointment?.status
    return ( 
        <>
        <Head>
            <title>Chat - {slugs?.[2]}</title>
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