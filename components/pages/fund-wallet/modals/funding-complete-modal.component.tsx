'use client'
import Modal, { modalProps } from "@/components/modal/modal.component"
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@/components/icons/icons";
import { useEffect} from "react";
import { getParameterByName } from "@/utilities/helpers";
import { useLazyVerifyDepositQuery } from "@/services/wallet";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CircleAlert } from "lucide-react";


const FundingCompleteModal = ({openModal,setOpenModal}:modalProps) => {
    const [trigger,{isLoading,isSuccess,isError}] = useLazyVerifyDepositQuery({})
    const router = useRouter()
    const pathname = usePathname()
    const routeHandler =()=>{
        router.replace("/explore")
        setOpenModal(false)
        
    }
    useEffect(()=>{
        if (pathname === '/fund-wallet') {
            var referenceValue = getParameterByName('reference');
            if (referenceValue) {
                console.log(referenceValue)
                setOpenModal(true)
                trigger({reference:referenceValue})
                
            } else {
                console.log('reference parameter not found in the URL');
            }
        } else {
            console.log('Current route is not /fund-wallet');
        }

        return()=>{
        }
    },[])
    console.log(isError)
    return (
        <>
            <Modal  onClose={()=>{
                setOpenModal(isLoading)
            }}  open={openModal} >
                <div className=" bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] py-[60px] h-[auto]   md:w-[655px] md:h-[654px] md:flex md:flex-col md:items-center md:justify-center lg:h-auto " >

             { isSuccess &&  <div className="w-full" >
                <p className="font-bold text-xl text-center md:text-[32px]" >Funding Completed</p>
            </div>}

            <div className="w-full flex flex-col flex-1 items-center justify-center" >
               { isSuccess && <CheckIcon color={'black'} onClick={()=>{}}  size={242} className={'m-auto'} />}
               { isError && <CircleAlert  onClick={()=>{}}  size={242} className={'m-auto text-red-600 '} />}
               { isLoading && <Image src={'/images/loader.gif'} alt="loader" width={100} height={100}  />}
               { isLoading && <p className=" text-sm lg:text-base mt-[23px] font-semibold md:text-[26px]" >Verifying funding</p>}
               { isError && <p className=" text-sm lg:text-base mt-[23px] font-semibold text-red-600 md:text-[26px]" >Failed</p>}
            </div>

            {isSuccess &&       <div className="w-full mt-10  flex items-center justify-center" >
            <Button onClick={routeHandler} className=" w-[442px] m-auto p-6 rounded-2xl bg-black text-center text-white text-xs md:text-[32px] " >
             Proceed to Consult
            </Button>
            </div>}
               
                </div>
            </Modal>
        </>
    );
}

export default FundingCompleteModal;




                  