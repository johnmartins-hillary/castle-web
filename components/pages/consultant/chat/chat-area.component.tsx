import { useToast } from "@/components/ui/use-toast";
import { setMessages } from "@/redux/slices/chats";
import { useGetChatDetailsQuery } from "@/services/chat";
import { getLocalStorageData } from "@/utilities/helpers";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ChatArea = ({chatRef,scrollToBottom}:any) => {
  const router = useRouter();
  const reduxMessages = useSelector(({ chat }: any) => chat?.messages);
  const slugs = router.query.index;
  const { data, isLoading, isSuccess,isFetching,isError }: any = useGetChatDetailsQuery({
    id: slugs?.[0],
    booking_ref: slugs?.[1]
  });
  const messages = data?.messages;
  const {toast} = useToast()
  const dispatch = useDispatch();
  useEffect(() => {
    messages?.map((item: any) => {
      dispatch(setMessages(item));
    });
    return()=>{
      scrollToBottom()
    }
  }, [data, isSuccess]);

  useEffect(()=>{
    if (isError) {
      toast({
        title:"Problem getting messages",
        description:"Check internet connection"
      })
    }
  },[isError])

  const user = getLocalStorageData("user");
  const userId = user?.id;
  return (
    <>
      <div ref={chatRef} className=" flex flex-col flex-[1.2] overflow-y-scroll no-scrollbar  w-full  flex-grow-1  py-[30px] px-[25px]">
        { isFetching ?  
        <p className=" text-sm font-bold mt-6 text-center text-zinc-200">
             Loading messages
            </p> : reduxMessages?.length > 0 ? (
          <>
            {  reduxMessages?.map(({ message, id, from_id }: any) => (
              <div
                key={id}
                className={`flex items-center ${
                  from_id === userId ? "justify-end" : " justify-start"
                } w-full  mb-[15px] `}
              >
                <div
                  style={{ wordWrap: "break-word" }}
                  className={` min-w-[103px]  rounded py-[10px] px-[13px] ${
                    from_id === userId ?  " bg-slate-200" : " bg-primary_color "
                  } `}
                >
                  <p className={` font-medium text-[15px] leadiing-[25px] text-left ${from_id === userId ? "text-primary_color" : "text-white"}`}>
                    {message}
                  </p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <p className=" text-sm font-bold mt-6 text-center text-zinc-200">
              No messages
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default ChatArea;
