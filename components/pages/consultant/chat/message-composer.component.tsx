import { Input } from "@/components/ui/input";
import { MicIcon, SmileIcon } from "lucide-react";
import { RiChatNewLine } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { Button } from "@/components/ui/button";
const MessageComposer = () => {
  return (
    <div className="fixed bottom-0 left-0 md:mx-auto lg:left-[28em] right-0 bg-white p-4">
      <div className="max-w-[696px] flex items-center justify-between gap-2">
        <div className="bg-slate-100 shadow-lg px-4 py-3 rounded-3xl flex items-center gap-4 flex-1">
          <SmileIcon size={23} />
          <input
            className="flex-1 outline-none border-none bg-transparent text-sm"
            placeholder="Type your message..."
          />
          <RiChatNewLine size={23} className="cursor-pointer" />
          <AiFillInstagram size={23} className="cursor-pointer" />
        </div>
        <Button className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
          <MicIcon size={16} color="white" />
        </Button>
      </div>
    </div>
  );
};

export default MessageComposer;