import { Button } from "@/components/ui/button";
import { MdPhone } from "react-icons/md";
const EndCall = () => {
    return ( 
        <>
        <div className="w-full flex items-center justify-center mt-14 " >
          <Button className=" bg-red-400  w-[56.11px] h-[56.11px] rounded-2xl hover:bg-red-500   " >
          <MdPhone size={24} className=" -rotate-45" />
          </Button>
        </div>
        </>
     );
}
 
export default EndCall;