import { Checkbox } from "@/components/ui/checkbox";
import { useGetUserDetailsQuery } from "@/services/user";
import { useState } from "react";

const ModeOfCommunication = () => {
  const {data:userData} = useGetUserDetailsQuery("");
  const [callMode,setCallMode] = useState(userData?.modes?.text);
  const [ chatMode,setChatMode] = useState(userData?.modes?.call)

  const chatModeHandler =()=>{
      if (chatMode === 1) {
        setChatMode("0")
      }
      setChatMode("1")
  }
    return ( 
        <>
        <div className="w-full" >
            <div className="w-full mt-3" >
                <p className="text-left font-medium text-[13px] md:text-lg" >Mode of Communication</p>
            </div>
            <div className="w-full flex items-center justify-start gap-4 mt-3" >
            <div className="flex items-center space-x-2">
      <Checkbox checked={callMode === "1" ? true : false} onChange={chatModeHandler} id="call" />
      <label
        htmlFor="call"
        className=" text-[13px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
       Call
      </label>
    </div>
            <div className="flex items-center space-x-2">
      <Checkbox checked={chatMode === "1" ? true : false}  id="call" />
      <label
        htmlFor="call"
        className=" text-[13px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
      Chat
      </label>
    </div>
            </div>
        </div>
        </>
     );
}
 
export default ModeOfCommunication;