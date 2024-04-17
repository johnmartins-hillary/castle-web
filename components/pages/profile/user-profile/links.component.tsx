import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import LinksModal from "../modals/links-modal.component";
const Links = () => {
  const [openModal,setOpenModal] = useState(false)
    return ( 
        <>
        <div className="w-full mt-8 ">
        <div className=" mb-1 flex items-center justify-start gap-2 " >
        <p className=" font-light text-left text-[15px]" >Links</p>
        <CirclePlus onClick={()=>{setOpenModal(true)}} size={16} />
        </div>

        {/* <div className="w-full flex items-center justify-between mt-5 gap-7 " >
        <div className="grid w-2/5 max-w-sm items-center gap-1.5">
        <label htmlFor="name" className="font-normal mt-3 mb-1 text-sm" >Name</label>
      <input type="text" id="name" placeholder="" className="w-full bg-light_grey rounded-2xl text-black p-2  outline-none " />
        </div>
        <div className=" w-2/5 max-w-sm grid items-center gap-1.5">
        <label htmlFor="url" className="font-normal mt-3 mb-1 text-sm text-left " >Url</label>
        <input type="text" id="url" placeholder="" className="w-full bg-light_grey rounded-2xl text-black p-2  outline-none " />
        </div>
        </div> */}


        {/* <div className="w-full mt-5 flex items-center justify-end " >
                    <Button className="bg-primary_color  rounded-xl py-4 text-white w-[107px] " >
                    Save
                    </Button>
                    </div> */}
        </div>
        <LinksModal openModal={openModal} setOpenModal={setOpenModal} />
        </>
     );
}
 
export default Links;