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
            <ChatHeader/>

            <MessageComposer/>
        </DashboardLayout>
        </>
     );
}
 
export default Chat;