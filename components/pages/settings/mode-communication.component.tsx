import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { useGetUserDetailsQuery, useUpdateModesMutation } from "@/services/user";
// import {useState } from "react";

const ModeOfCommunication = () => {
  const { data: userData } = useGetUserDetailsQuery("");
  // const [updDateMode,{isLoading,isError,isSuccess,error}]:any = useUpdateModesMutation()
  // const [callMode, setCallMode] = useState(true);
  // const [chatMode, setChatMode] = useState(true);
  // const {toast} = useToast()
  // const chatHandler = () => {
  //   setChatMode((prevMode) => !prevMode);
  //   if (chatMode === true) {
  //         updDateMode({text:"0",call:"1"})
  //   }
  //   else {
  //         updDateMode({text:"1",call:"1"})
  //   }
  // };

//   const callHandler = () => {
//     setCallMode((prevMode) => !prevMode);
//     if (callMode === true) {
//       updDateMode({call:"0",text:"1",})
// }
// else {
//       updDateMode({call:"1",text:"1",})
// }
//   };

  // useEffect(() => {
  //   if (userData?.modes?.text === "1") {
  //     setChatMode(true);
  //   } else {
  //     setChatMode(false);
  //   }

  //   if (userData?.modes?.call === "1") {
  //     setCallMode(true);
  //   } else {
  //     setCallMode(false);
  //   }
  // }, [userData]);

  // useEffect(()=>{

  //   if (isSuccess) {
  //     toast({
  //       title:"Mode of communication updated"
  //     })
  //   }
  //   else if(isError){
  //     toast({
  //       title:"Ooops!",
  //       description:`${error?.message  ?  error?.message  : "Something went wrong"}`
  //     })
  //   }
  // },[isError,isSuccess])
  return (
    <div className="w-full">
      <div className="w-full mt-3">
        <p className="text-left font-medium text-[13px] md:text-lg">Mode of Communication</p>
      </div>
      <div className="w-full flex items-center justify-start gap-4 mt-3">
        <div className="flex items-center space-x-2">
          <Checkbox  disabled id="call" />
          <label   htmlFor="call" className="text-[13px] text-light_grey md:text-sm font-medium leading-none">
            Call
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox checked={true}  id="chat" />
          <label htmlFor="chat" className="text-[13px] md:text-sm font-medium leading-none">
            Chat
          </label>
        </div>
      </div>
    </div>
  );
};

export default ModeOfCommunication;
