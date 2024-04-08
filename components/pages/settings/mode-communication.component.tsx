import { Checkbox } from "@/components/ui/checkbox";

const ModeOfCommunication = () => {
    return ( 
        <>
        <div className="w-full" >
            <div className="w-full mt-3" >
                <p className="text-left font-medium text-[13px] md:text-lg" >Mode of Communication</p>
            </div>
            <div className="w-full flex items-center justify-start gap-4 mt-3" >
            <div className="flex items-center space-x-2">
      <Checkbox id="call" />
      <label
        htmlFor="call"
        className=" text-[13px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
       Call
      </label>
    </div>
            <div className="flex items-center space-x-2">
      <Checkbox id="call" />
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