"use client";
import { Input } from "@/components/ui/input";
import { MicIcon, SmileIcon } from "lucide-react";
import { RiChatNewLine } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import {
  useGetChatDetailsQuery,
  useInChatMutation,
  useSendMessageMutation
} from "@/services/chat";
import { useRouter } from "next/router";
import { getLocalStorageData } from "@/utilities/helpers";
import ChatModal from "./chat-modal.component";
import { useToast } from "@/components/ui/use-toast";
import { BASE_URL } from "@/constants";
import { useEndAppointmentMutation } from "@/services/booking";
import { setMessages } from "@/redux/slices/chats";
import { useDispatch } from "react-redux";
const MessageComposer = () => {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const storage = getLocalStorageData("user");
  const slugs: any = router.query.index;
  const { data, isLoading }: any = useGetChatDetailsQuery({
    id: slugs?.[0],
    booking_ref: slugs?.[1]
  });
  const [
    inChatHandler,
    { data: inChatData, isLoading: inChatloading, isSuccess, isError, error }
  ]: any = useInChatMutation();
  const [endAppoiintment] = useEndAppointmentMutation();
  const [showModal, setShowModal] = useState(false);
  const [btnText, setBtnText] = useState("Starting Chat");
  const { toast } = useToast();
  const [showInput, setShowInput] = useState(false);
  const [showBtn, setShowBtn] = useState(true);
  const dispatch = useDispatch();
  const booking_ref = data?.appointment?.booking_ref;

  const [
    sendMessage,
    { data: sendMessageData, isLoading: sendMessageLoading }
  ] = useSendMessageMutation();

  useEffect(() => {
    if (inChatloading) {
      setShowModal(true);
      setBtnText("Starting Chat");
    } else if (isSuccess && inChatData?.other === false) {
      setBtnText(`Waiting for ${data?.user?.name} to start chat`);
      setShowModal(true);
    } else if (isError) {
      setShowModal(false);
      toast({
        title: "Oops!",
        description: `${
          error?.message ? error?.message : "Something went wrong"
        }`
      });
    }
  }, [inChatloading, inChatData, isSuccess, isError, error]);
  const inChatFunction = () => {
    inChatHandler({ booking_ref: booking_ref, user_id: storage?.id });
  };

  const messagingCall = async () => {
    const eventSrc = new EventSource(
      `${BASE_URL}message/${data?.room_id}/${data?.user?.id}/${booking_ref}`
    );

    eventSrc.onmessage = (event: any) => {
      const res = JSON.parse(event?.data);
      const inChat = res?.[0]?.inchat;
      console.log(inChat);
      if (
        inChat?.agent_in?.includes("1") &&
        inChat?.customer_in?.includes("1")
      ) {
        setShowModal(false);
        setShowInput(true);
        setShowBtn(false);
      }

      if (inChat?.time_left === 2) {
        toast({
          title: "You have less than 2 minutes left"
        });
      } else if (inChat?.time_left === 0 && inChat?.time_left !== null ) {
        eventSrc.close();
        endAppoiintment({ booking_ref: booking_ref });
        toast({
          title: "Chat ended"
        });
        setShowInput(false);
      }
    };
  };

  useEffect(() => {
    if (isSuccess) {
      messagingCall();
    }
  }, [inChatData, isSuccess]);

  const user = getLocalStorageData("user");
  const userId = user?.id;
  const messengerHandler = () => {
    if (message?.trim() !== "") {
      sendMessage({
        message: message,
        roomid: data?.room_id,
        touserId: data?.user?.id
      });
      dispatch(
        setMessages({
          message: message,
          to_id: data?.user?.id,
          from_id: userId,
          id: Math.floor(Math.random() * 1000)
        })
      );
      // dispatch(setMessages(reduxMessage))
      setMessage("");
    }
  };

  return (
    <div className="fixed bottom-[0px] bg-white left-0 w-[-webkit-fill-available] flex items-center justify-center lg:ml-[300px] shadow-md shadow-gray-400  p-4 ">
      {showInput && (
        <div className=" w-auto flex-1 md:w-[689px] md:max-w-[696px] flex items-center justify-between gap-2">
          <div className="bg-slate-100 shadow-lg px-4 py-3 rounded-3xl flex items-center gap-4 flex-1">
            <SmileIcon size={23} />
            <input
              value={message}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  messengerHandler();
                }
              }}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 outline-none border-none bg-transparent text-sm"
              placeholder="Type your message..."
            />
            {
              message?.length > 0 && (
                <IoMdSend
                  onClick={messengerHandler}
                  size={23}
                  className="cursor-pointer"
                />
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
      )}

      {showBtn && data?.appointment?.status === "accepted" && (
        <Button onClick={inChatFunction}>Start Chat</Button>
      )}
      {showBtn && data?.appointment?.status === "pending" && (
        <Button className=" bg-orange-500 hover:bg-orange-400 cursor-default " >Still Pending</Button>
      )}
      {data?.appointment?.status === "ended" && userId ===  data?.appointment?.customer && (
        <Button onClick={()=>{
          router.replace(`/consultant/${data?.user?.id}`)
        }}>Book again</Button>
      )}
      <ChatModal
        showModal={showModal}
        setShowModal={setShowModal}
        isLoading={inChatloading}
        btnText={btnText}
      />
    </div>
  );
};

export default MessageComposer;
