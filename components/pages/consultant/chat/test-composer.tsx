"use client";
import { Input } from "@/components/ui/input";
import { MicIcon, SmileIcon } from "lucide-react";
import { RiChatNewLine } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { useGetChatDetailsQuery, useInChatMutation, useSendMessageMutation } from "@/services/chat";
import { useRouter } from "next/router";
import { getLocalStorageData } from "@/utilities/helpers";
import ChatModal from "./chat-modal.component";
import { useToast } from "@/components/ui/use-toast";
import { BASE_URL } from "@/constants";
import { useEndAppointmentMutation } from "@/services/booking";
import { useDispatch, useSelector } from "react-redux";
import { messageHandler, setMessages } from "@/redux/slices/chats";
const TestComposer = () => {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const storage = getLocalStorageData("user");
  const dispatch = useDispatch()
  const slugs: any = router.query.index;
  const { data, isLoading }: any = useGetChatDetailsQuery({
    id: slugs?.[0],
    booking_ref: slugs?.[1]
  });
  const user = getLocalStorageData("user");
  const userId = user?.id;
  const [
    inChatHandler,
    { data: inChatData, isLoading: inChatloading, isSuccess, isError, error }
  ]: any = useInChatMutation();
  const [btnText, setBtnText] = useState("Starting Chat");
  const { toast } = useToast();


  const booking_ref = data?.appointment?.booking_ref;

const reduxMessage = useSelector(({chat}:any)=>chat?.message)

const [sendMessage,{data:sendMessageData,isLoading:sendMessageLoading}] = useSendMessageMutation()

  const messengerHandler =()=>{

   if (message?.trim() !== "") {
    sendMessage({message:message,roomid:data?.room_id,touserId:data?.user?.id})
    dispatch(setMessages({message:message,to_id:data?.user?.id,from_id:userId,id:Math.floor(Math.random()*1000)}))
    // dispatch(setMessages(reduxMessage))
    setMessage("")
   }
  }


  return (
    <div className="fixed bottom-[12px] left-0 w-[-webkit-fill-available] flex items-center justify-center lg:ml-[300px]  p-4 ">

        <div className=" w-auto flex-1 md:w-[689px] md:max-w-[696px] flex items-center justify-between gap-2">
          <div className="bg-slate-100 shadow-lg px-4 py-3 rounded-3xl flex items-center gap-4 flex-1">
            <SmileIcon size={23} />
            <input
            value={message}
                onKeyDown={(e)=>{
                      if (  e.key === "Enter") {
                        messengerHandler() 
                      }
                }}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 outline-none border-none bg-transparent text-sm"
              placeholder="Type your message..."
            />
            {message?.length > 0 && (
              <IoMdSend onClick={messengerHandler} size={23} className="cursor-pointer" />
            ) 
            
            // : (
            //   <>
            //     <RiChatNewLine size={23} className="cursor-pointer" />
            //     <AiFillInstagram size={23} className="cursor-pointer" />
            //   </>
            // )
            }
          </div>
          {/* {message.length > 0 ? null : (
            <Button className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
              <MicIcon size={16} color="white" />
            </Button>
          )} */}
        </div>
      
    </div>
  );
};

export default TestComposer;
