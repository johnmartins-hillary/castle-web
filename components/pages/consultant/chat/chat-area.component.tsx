import { setMessages } from "@/redux/slices/chats";
import { useGetChatDetailsQuery } from "@/services/chat";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ChatArea = () => {
    const router = useRouter();
    const reduxMessages = useSelector(({chat}:any)=>chat?.messages)
    const slugs = router.query.index;
    const {data,isLoading}:any = useGetChatDetailsQuery({id:slugs?.[0],  booking_ref:slugs?.[1]})
    const messages = data?.messages;
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setMessages(messages))
    },[])

    return ( 
        <>
        <div className=" flex flex-[1.2] overflow-y-scroll  w-full  flex-grow-1 " >
            {reduxMessages?.length > 0 ? null : <><p className=" text-sm font-bold mt-6 text-center text-light_grey
            " >No messages</p></>}
        </div>
        </>
     );
}
 
export default ChatArea;