import ChatArea from "@/components/pages/consultant/chat/chat-area.component";
import ChatHeader from "@/components/pages/consultant/chat/chat-header.component";
import MessageComposer from "@/components/pages/consultant/chat/message-composer.component";
import TestComposer from "@/components/pages/consultant/chat/test-composer";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/pages/dashboard/layout";
import { useGetChatDetailsQuery } from "@/services/chat";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import ChatTimer from "@/components/pages/consultant/chat/chat-timer.component";
const Chat = () => {
  const router = useRouter();
  const slugs: any = router.query.index;
  const chatAreaRef = useRef<any>();
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState("");
  const [showChatActions,setShowChatActions] = useState(false)
  const [startTime,setStartTime] = useState(false)
  let eventSrc;
  return (
    <>
      <Head>
        <title>Chat - {slugs?.[2]}</title>
      </Head>
      <DashboardLayout mainContentStyle={'w-full m-0  max-h-[inherit]  p-[30px] md:p-[20px] md:px-[43px] lg:w-auto lg:ml-[300px] lg:px-14  relative lg:max-h-[100vh] lg:h-[100vh] lg:overflow-y-hidden '} showBottomTab={false}>
        <div className="w-full h-full relative  ">
          <ChatHeader eventSrc={eventSrc} showChatActions={showChatActions} />
          <ChatArea chatRef={chatAreaRef} />
          <MessageComposer
          setShowChatActions={setShowChatActions}
            // scrollToBottom={scrollToBottom}
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
          <ChatTimer startTime={startTime} />
        </div>
      </DashboardLayout>
    </>
  );
};

export default Chat;
