import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useGetChatDetailsQuery } from "@/services/chat";
import { setMessages } from "@/redux/slices/chats";
import { useToast } from "@/components/ui/use-toast";
import { getLocalStorageData } from "@/utilities/helpers";

const ChatArea = ({ chatRef, scrollToBottom }: any) => {
  const router = useRouter();
  const chatBox = useRef<any>()
  const reduxMessages = useSelector(({ chat }: any) => chat?.messages);
  const chatBottom = useRef<any>(null);
  const user = getLocalStorageData("user");
  const slugs = router.query.index;
  const { data, isLoading, isSuccess, isFetching, isError }: any =
    useGetChatDetailsQuery({
      id: slugs?.[0],
      booking_ref: slugs?.[1],
    });
  const messages = data?.messages;
  const { toast } = useToast();
  const dispatch = useDispatch();




  // useEffect(()=>{
  //   if (chatBox) {
  //     chatBox.current.addEventListener('DOMNodeInserted',(event:any)=>{
  //       const {currentTarget:target} = event;
  //       target?.scroll({top:target.scrollHeight,behavior:'smooth'})
  //     })
  //   }
  // },[])



  useEffect(() => {
    messages?.map((item: any) => {
      dispatch(setMessages(item));
    });
  }, [data, isSuccess]);



  useEffect(() => {
    if (isError) {
      toast({
        title: "Problem getting messages",
        description: "Check internet connection",
      });
    }
  }, [isError]);

  useEffect(()=>{
    chatBottom.current.scrollIntoView()
  },[reduxMessages])

  const userId = user?.id;
  return (
    <>
      <div
        className="overflow-y-scroll no-scrollbar  w-full  py-[30px] px-[25px] top-[90px]  lg:h-[500px] lg:min-h-[500px] relative xl:h-[900px] xl:min-h-[900px] "
      >
        {isFetching ? (
          <p className=" text-sm font-bold mt-6 text-center text-zinc-200">
            Loading messages
          </p>
        ) : reduxMessages?.length > 0 ? (
          <>
            {reduxMessages?.map(({ message, id, from_id }: any) => (
              <div
                key={id}
                className={`flex items-center ${
                  from_id === userId ? "justify-end" : " justify-start"
                } w-full  mb-[15px] `}
              >
                <div
                  style={{ wordWrap: "break-word" }}
                  className={` min-w-[103px]  rounded py-[10px] px-[13px] ${
                    from_id === userId ? "bg-slate-200" : " bg-black"
                  }  `}
                >
                  <p
                    className={` font-medium text-[15px] leadiing-[25px] text-left ${
                      from_id === userId ? "text-primary_color" : "text-white"
                    } `}
                  >
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
                  <div ref={chatBottom} className="py-5 w-full"  id="bottom" />
      </div>
    </>
  );
};

export default ChatArea;
