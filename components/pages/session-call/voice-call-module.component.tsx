import { SpeakeronIcon } from "@/components/icons/icons";
import { MicIcon } from "lucide-react";

const VoiceCallModule = () => {
    return ( 
        <>
        <div className="w-full flex items-center justify-center gap-3 mt-24 " >
            <SpeakeronIcon size={35} className={'bg-black p-2 rounded-sm'} color={'white'} />
            <MicIcon size={27} />
        </div>
        </>
     );
}
 
export default VoiceCallModule;