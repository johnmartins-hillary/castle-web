"use client";
import { Input } from "@/components/ui/input";
import { MicIcon, SmileIcon } from "lucide-react";
import { RiChatNewLine } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { useGetChatDetailsQuery } from "@/services/chat";
import { useRouter } from "next/router";
const MessageComposer = () => {
  const [message, setMessage] = useState("");
  const router = useRouter()
  const slugs:any = router.query.index;
  const {data,isLoading}:any = useGetChatDetailsQuery({id:slugs?.[0],  booking_ref:slugs?.[1]})
  return (
    <div className="fixed bottom-[12px] left-0 w-[-webkit-fill-available] flex items-center justify-center lg:ml-[300px]  p-4 ">
      {/* <div className=" w-auto md:w-[689px] md:max-w-[696px] flex items-center justify-between gap-2">
        <div className="bg-slate-100 shadow-lg px-4 py-3 rounded-3xl flex items-center gap-4 flex-1">
          <SmileIcon size={23} />
          <input
          onChange={(e)=>setMessage(e.target.value)}
            className="flex-1 outline-none border-none bg-transparent text-sm"
            placeholder="Type your message..."
          />
            {message?.length > 0 ? <IoMdSend size={23} className="cursor-pointer" /> : <>
            <RiChatNewLine size={23} className="cursor-pointer" />
          <AiFillInstagram size={23} className="cursor-pointer" />
            </>}
        </div>
        {message.length > 0 ? null :    <Button className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
          <MicIcon size={16} color="white" />
        </Button>}
      </div> */}

      <Button>
        Start Chat
      </Button>
    </div>
  );
};

export default MessageComposer;

//fixed bottom-0 left-0 md:mx-auto lg:left-[28em] right-0 bg-white p-4
