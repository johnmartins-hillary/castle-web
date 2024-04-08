import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Image from "next/image";

const UserPhotographs = () => {
    return ( 
        <>
        <div className="w-full mt-24">
        <div className=" mb-1 flex items-center justify-start gap-2 " >
        <p className=" font-light text-left text-base" >Photographs</p>
        <CirclePlus size={16} />
        </div>

        <div className="w-full flex items-center justify-between mt-5 gap-4 " >
        <div className="grid w-3/5 max-w-sm items-center gap-1.5">
        <Image src={'/images/upload-icon.png'} alt="upload" width={91} height={81} className="object-contain" />
        </div>
        <div className=" w-2/5 flex items-center justify-center ">
        <Button className="bg-primary_color rounded-xl py-4 text-white w-full " >
          Save
        </Button>
        </div>
        </div>
        </div>
        </>
     );
}
 
export default UserPhotographs;