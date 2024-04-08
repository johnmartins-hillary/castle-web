import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Rate = () => {
    return ( 
        <>
        <div className="w-full mt-12" >
            <p className="font-medium text-[13px] md:text-lg text-left" >Referral (For verified users only)</p>
            <div className="w-full flex items-baseline justify-start gap-2" >
                <div className=" w-[238px] rounded-md bg-light_grey p-2 flex items-center justify-between gap-2 "  >
                    <p className="text-[13px] md:text-sm" >NGN</p>
                    <Separator orientation="vertical" className="bg-primary_color h-[23px]" />
                    <input className=" bg-transparent flex flex-1 p-0 outline-none text-sm " />
                </div>
                <Button className=" w-[112px]  p-2 rounded-[15px] bg-primary_color text-white text-center mt-5 " >
                    Save
            </Button>
            </div>

            <p className=" text-start text-[12px] md:text-sm font-normal mt-7" >Add the amount you charge per minute</p>
        </div>
        </>
     );
}
 
export default Rate;