import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fundAmountHandler } from "@/redux/slices/wallet";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const AmountSetter = () => {
  const amount = useSelector(({wallet}:any)=>wallet?.amount)
  const dispatch = useDispatch()
  const handleChange=useCallback((e:any)=>{
      dispatch(fundAmountHandler(e.target.value))
  },[amount])
    return ( 
   <>
        <div className="w-full mt-8 flex flex-col items-start md:flex-row imd:tems-center justify-between " >
            <div className="w-full  flex items-center justify-between md:w-1/2 md:flex-row md:items-center gap-3" >
                <p className="font-semibold text-base" >Amount</p>
              <div className=" w-[227px] bg-light_grey rounded-sm flex p-[9px] items-center justify-between gap-[23px] md:gap-2 flex-1 md:flex-none " >
              <p className="font-semibold text-base flex-1" >NGN</p>
              <Input onChange={(e)=>{handleChange(e)}} value={amount} type={"number"} className="flex-[2] bg-transparent  text-black p-2  outline-none "/>
              </div>
            </div>

        </div>
   </>
     );
}
 
export default AmountSetter;