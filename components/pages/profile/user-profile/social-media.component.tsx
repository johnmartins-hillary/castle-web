import { CirclePlus } from "lucide-react";
import Platform from "./platform.component";
import Url from "./url.component";
import Links from "./links.component";

const SocialMedia = () => {
    return ( 
        <>
      <div className=" mb-1 flex items-center justify-start gap-2 " >
        <p className=" font-light text-left text-base" >Social Media</p>
        <CirclePlus size={16} />
        </div>


        <div className="w-full mt-7 " >
       <Platform/>
       <Url/>
       <Links/>
        </div>
        </>
     );
}
 
export default SocialMedia;