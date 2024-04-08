import { MenuIcon } from "@/components/icons/icons";

const SummarySection = () => {
    return ( 
        <>
        <div className=" w-4/5 relative md:max-lg:-top-4 lg:-top-6  " >
         <div className="w-full  md:mb-4 flex items-center justify-between " >
            <p className=" font-bold text-primary_color text-base text-left md:text-xl " >Val Okafor</p>
            <MenuIcon   className=" hidden cursor-pointer w-[24px] h-[24px] md:max-lg:flex " />
         </div>
         <div className="w-full" >
            <p  className=" font-normal text-primary_color text-xs leading-4 text-left md:text-sm ">Leadership and Productivity Strategist || Transformational Speaker || Social Innovator</p>
         </div>
        </div>
        </>
     );
}
 
export default SummarySection;