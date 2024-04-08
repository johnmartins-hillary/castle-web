import { Badge } from "@/components/ui/badge";

const AmountView = () => {
    return ( 
        <>
        <div className="w-full mt-14 flex flex-col-reverse items-start md:mt-20 md:items-center md:justify-between  md:flex-row " >
        <Badge className="p-2 mt-4  rounded-md w-[187px] md:mt-0 md:w-[291px] flex items-center justify-center " variant="destructive">Insufficient Amount</Badge>
        <p className=" font-bold text-base md:max-lg:text-lg lg:text-4xl  " >NGN 0. 00</p>
        </div>
        </>
     );
}
 
export default AmountView;