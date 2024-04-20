// import { Button } from "@/components/ui/button";
"use client"
import Modal, { modalProps } from "@/components/modal/modal.component"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AmountSetter from "../amount-setter.component";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useInitializeWalletDepositMutation } from "@/services/wallet";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { fundAmountHandler } from "@/redux/slices/wallet";
import { getParameterByName } from "@/utilities/helpers";


const FundWalletModal = ({openModal,setOpenModal,callBackFunction}:modalProps) => {
    const  [initializeWalletDeposit,{data,isLoading,isSuccess}]:any = useInitializeWalletDepositMutation();
    const amount = useSelector(({wallet}:any)=>wallet?.amount)
    const pathname = usePathname()
    const dispatch = useDispatch();
    const router = useRouter()
    const handleSubmit=()=>{
        initializeWalletDeposit({amount:amount})
    }
        useEffect(()=>{
            if (isSuccess) {
                router.push(data?.payment_url)
                dispatch(fundAmountHandler(""))
            }
        },[isSuccess])
    return (
        <>
            <Modal onClose={()=>{
                setOpenModal(false)
            }} open={openModal} >
                <div className=" bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] h-[auto] md:w-[655px] md:h-[654px] md:flex md:flex-col md:items-center md:justify-center lg:h-auto lg:py-[48px]  " >

              <div className="w-full md:w-[417px]" >
              <div className="w-full " >
                <p className="text-left text-[16px] font-bold" >Fund Your Wallet</p>
                </div>
                   <div className="w-full mt-[30px]" >
                    <AmountSetter/>
                   </div>
                {/* <div className="w-full mt-[68px] " >
                    <input className="w-full bg-light_grey rounded-2xl p-3" id="card-number" />
                    <label className="font-normal text-sm text-left relative left-2" htmlFor="card-number" >
                        Card number
                    </label>
                </div> */}

{/* 
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
                </div> */}

                 <div className="w-full flex items-center justify-end mt-10 " >
                {/* <div className="flex items-center space-x-2 ">
             <Checkbox id="terms" className=" bg-light_grey" />
                 <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                    Save Card details
                    </label>
                 </div> */}
                <Button disabled={isLoading} onClick={handleSubmit} className=" w-[98px] p-[9px] rounded-[12px] bg-black text-center text-white text-xs " >
                     {   isLoading ? "Initializing..." :"Fund"      }
                 </Button>
                </div>
              </div>
                  
                </div>
            </Modal>
        </>
    );
}

export default FundWalletModal;




                  