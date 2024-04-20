import { Badge} from "@/components/ui/badge";
import { useSelector } from "react-redux";

const AmountView = () => {
    const balance = useSelector(({userState}:any)=>userState?.user?.balance)
    return ( 
        <>
        <div className="w-full mt-8" >
        <p className=" font-bold text-base md:max-lg:text-lg lg:text-4xl  " >Balance: <span className=" font-extrabold" >NGN {balance}</span> </p>
        {/* <Badge className="p-2 mt-4  rounded-md w-[187px] md:mt-[12px] md:w-[291px] flex items-center justify-center " variant="destructive">Insufficient Amount</Badge> */}
        </div>
        </>
     );
}
 
export default AmountView;