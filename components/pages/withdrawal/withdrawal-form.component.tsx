"use router"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useRouter } from "next/navigation";
const WithdrawalForm = () => {
  const router = useRouter()
    return (
        <>
        <form className="w-full mt-16 " >

            <div className="w-full flex items-center justify-start gap-3" >
            <div className="w-2/5" >
            <div className="w-full mb-5" >
                <label className="font-normal text-sm text-left relative left-3"  htmlFor="amount">
                Amount
                </label>
                </div>

                <div className="w-full" >
                    <Input id="amount"  className="w-full bg-light_grey rounded-md text-black py-6  outline-none " />
                </div>
            </div>


            <div className="w-2/5" >
            <div className="w-full mb-5" >
                <label className="font-normal text-sm text-left relative left-3"  htmlFor="account-number">
              Account Number
                </label>
                </div>

                <div className="w-full" >
                    <Input id="account-number"  className="w-full bg-light_grey rounded-md text-black py-6  outline-none " />
                </div>
            </div>
            </div>



            <div className=" w-full mt-8" >
            <div className=" w-2/5 max-w-sm grid items-center gap-1.5">
        <label htmlFor="year" className="font-normal mt-3 mb-1 text-sm text-left " >Bank</label>
        <Select>
      <SelectTrigger className="w-full  outline-none border-none bg-light_grey rounded-lg py-6 ">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent className=" bg-light_grey" >
        <SelectGroup className=" bg-light_grey " >
          <SelectLabel></SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
            </div>

        <div className=" w-full mt-16  ">
        <Button onClick={(e)=>{
          e.preventDefault();
          router.push("/withdrawal/withdrawal-confirmed")
        }}   className="bg-primary_color rounded-sm py-6 text-white w-[268px] " >
        Withdraw
        </Button>
        </div>
        </form>
        </>
      );
}
 
export default WithdrawalForm;