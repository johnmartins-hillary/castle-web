import ChatArea from "@/components/pages/consultant/chat/chat-area.component";
import ChatHeader from "@/components/pages/consultant/chat/chat-header.component";
import MessageComposer from "@/components/pages/consultant/chat/message-composer.component";
import TestComposer from "@/components/pages/consultant/chat/test-composer";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/pages/dashboard/layout";
import { useGetChatDetailsQuery } from "@/services/chat";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import ChatTimer from "@/components/pages/consultant/chat/chat-timer.component";
const Chat = () => {
  const router = useRouter();
  const slugs: any = router.query.index;
  const chatAreaRef = useRef<any>();
  const chatBottom = useRef<any>();
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState("");
  const [showChatActions,setShowChatActions] = useState(false)
  const [startTime,setStartTime] = useState(false)
  let eventSrc;
  const scrollToBottom = () => {
    if (chatBottom) {
      chatBottom.current?.scrollIntoView({behavior:"smooth"})
    }
  };
  useEffect(()=>{
    scrollToBottom()
  },[])
  return (
    <>
      <Head>
        <title>Chat - {slugs?.[2]}</title>
      </Head>
      <DashboardLayout showBottomTab={false}>
        <div className="w-full overflow-y-hidden flex-col flex h-full relative  ">
          <ChatHeader eventSrc={eventSrc} showChatActions={showChatActions} />
          <ChatArea chatRef={chatAreaRef} scrollToBottom={scrollToBottom} />
          <div ref={chatBottom} />
          <MessageComposer
          setShowChatActions={setShowChatActions}
            scrollToBottom={scrollToBottom}
            eventSrc={eventSrc}
            showEmoji={showEmoji}
            setStartTime={setStartTime}
            setShowEmoji={setShowEmoji}
            message={message}
            setMessage={setMessage}
          />
          {showEmoji && (
            <EmojiPicker
              style={{position:"absolute",bottom:"10%",right:"10%"}}
              onEmojiClick={(prop) => {
                setMessage(prop?.emoji);
                setShowEmoji(false);
              }}
            />
          )}
          {/* <TestComposer/> */}
          <ChatTimer startTime={startTime} />
          {/* <div className=" bg-red-600 flex-1 p-9 " />
            <div className=" bg-green-600 flex-[2] p-9 "/>
            <div className=" bg-blue-600 flex-1 p-9 " /> */}
        </div>
      </DashboardLayout>
    </>
  );
};

export default Chat;
