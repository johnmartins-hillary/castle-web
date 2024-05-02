import { Button } from "@/components/ui/button";

const Referrall = () => {
    return ( 
        <>
        <div className="w-full mt-[24px] md:mt-12" >
            <p className="text-left font-bold text-[13px] md:text-lg" >Referral</p>
            <Button className=" w-[150px] text-xs md:text-sm md:w-[327px] rounded-[15px] bg-primary_color text-white text-center mt-5 " >
            Generate referral link
            </Button>
        </div>
        </>
     );
}
 
export default Referrall;