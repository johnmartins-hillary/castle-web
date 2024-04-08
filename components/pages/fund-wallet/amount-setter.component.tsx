import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AmountSetter = () => {
    return ( 
   <>
        <div className="w-full mt-8 flex flex-col items-start md:flex-row imd:tems-center justify-between" >
            <div className="w-full  flex  flex-col items-start justify-start md:w-1/2 md:flex-row md:items-center gap-3" >
                <p className="font-semibold text-base" >Amount</p>
              <div className=" flex items-center justify-between gap-[23px] md:gap-2 flex-1 md:flex-none " >
              <Input className="w-[134px] bg-light_grey rounded-sm text-black p-2  outline-none "/>
                <p className="font-semibold text-base" >NGN</p>
              </div>
            </div>
            <div className="w-1/2 mt-7 md:mt-0 flex items-center justify-end" >
            <Button className=" w-[198px] p-2 rounded-md bg-black text-center text-white text-xs " >
            Pay with Saved Card
            </Button>
            </div>
        </div>
   </>
     );
}
 
export default AmountSetter;