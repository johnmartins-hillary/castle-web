import AvatarWithBadge from "@/components/avatar/avatar.component";
import { Button } from "@/components/ui/button";
import { MdPhone } from "react-icons/md";
import { PiSlidersHorizontalLight } from "react-icons/pi";
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { BanIcon, LinkIcon } from "@/components/icons/icons";
import {IoIosArrowBack} from "react-icons/io"
import {useRouter} from "next/router"
type Checked = DropdownMenuCheckboxItemProps["checked"]
const ChatHeader = () => {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)
  const router = useRouter()

    return ( 
        <>
        <div className="w-full h-[70px] flex items-stretch justify-center  " >
            <div className="w-3/5 flex items-center justify-start gap-5 " >
              <IoIosArrowBack className=" w-[23px] h-[23px] md:w-[34px] md:h-[34px]" onClick={()=>{  router.back()}} />
                <AvatarWithBadge width={70} height={70} className="w-[45px] h-[45px] md:w-auto md:h-auto" />
                <p className="font-bold text-sm md:text-xl" >Val Okafor</p>
            </div>

            <div className="w-2/5  flex items-center justify-end gap-5 px-3 " >
          


     
     
      <Button className=" bg-black w-[35px] h-[35px] rounded-[12px] p-[10px] md:p-[10px]  md:w-[46.11px] md:h-[46.11px]  md:rounded-2xl hover:bg-black rotate-45  " >
          <MdPhone size={50} className=" -rotate-45" />
          </Button>
 
     

            <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="outline-none" ><PiSlidersHorizontalLight  className="cursor-pointer w-[23px] h-[23px] md:w-[35px] md:h-[35px] " /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-light_grey shadow-none ">
        <DropdownMenuItem
        style={{fontFamily:"Poppins"}}
        className=" font-normal gap-3 "
        >
       <LinkIcon size={16} className="rotate-95" /> Attachments
        </DropdownMenuItem>
        <DropdownMenuItem
              style={{fontFamily:"Poppins"}}
              className=" font-normal gap-3 "
          
        >
           <BanIcon size={16} /> End Chat
        </DropdownMenuItem>
      </DropdownMenuContent>
          </DropdownMenu>
            </div>
        </div>
        </>
     );
}
 
export default ChatHeader;