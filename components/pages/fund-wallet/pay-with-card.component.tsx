'use client'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HiMiniInformationCircle } from "react-icons/hi2";
const PayWithCard=()=>{
    const router = useRouter()
    return(
        <>
          <form className="w-full" >
                <div className="w-full mb-8 " >
                    <p className="font-bold text-base text-left m-0" >
                        Pay with new card
                    </p>
                </div>
                <div className="w-full" >
                    <input className="w-full bg-light_grey rounded-2xl p-3" id="card-number" />
                    <label className="font-normal text-sm text-left relative left-2" htmlFor="card-number" >
                        Card number
                    </label>
                </div>


                <div className="w-full flex items-center justify-between mt-5 " >
                    <div className="w-2/5" >
                        <input className="w-full bg-light_grey rounded-2xl p-3" id="expiry-date" />
                        <label className="font-normal text-sm text-left relative left-2" htmlFor="expiry-date" >
                            Expiry date
                        </label>
                    </div>
                    <div className="w-2/5 relative " >
                        <input className="w-full bg-light_grey rounded-2xl p-3" id="cvv" />
                        <label className="font-normal text-sm  relative  right-0" htmlFor="cvv" >
                            CVV
                        </label>
                    </div>
                </div>

                <div className="w-full flex items-center justify-between mt-10 " >
                <div className="flex items-center space-x-2 ">
             <Checkbox id="terms" className=" bg-light_grey" />
                 <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                    Save Card details
                    </label>
                 </div>
                <Button className=" w-[98px] p-1 rounded-md bg-black text-center text-white text-xs " >
                        Fund      
                 </Button>
                </div>



                <div className="w-full mt-9 flex items-start justify-start gap-3 " >
                <HiMiniInformationCircle size={20} />
                    <p className=" text-xs leading-4 font-normal" >Would you like to place a withdrawal? <br/>Use the button below</p>
                </div>
                <div className="w-full mt-9 flex items-start justify-start gap-3 " >
                <Button  onClick={(e)=>{
                    e.preventDefault();
                    router.push(`/withdrawal`)
                }}  className="bg-primary_color w-[334px] rounded-xl py-6 text-sm text-white flex justify-start gap-5 items-center" >
                   <Image src={'/images/import-icon.png'} width={33} height={33} alt="upload" /> Place a Withdrawal
                 </Button>
                </div>
            </form>
        </>
    )
}


export default PayWithCard