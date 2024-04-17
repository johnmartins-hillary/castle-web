import { Button } from "@/components/ui/button";
import { Linkedin, X } from "lucide-react";
import { RiFacebookLine, RiInstagramLine } from "react-icons/ri";
import { FaFacebook, FaInstagramSquare, FaLinkedin} from "react-icons/fa";
import { FaSquareXTwitter} from "react-icons/fa6";
import { DrawerTrigger } from "@/components/ui/drawer";
import { useDrawer } from "@/context/drawer-context";
import Image from "next/image";

const Actions = ({setOpenModal}:any) => {
  const { openDrawer, setOpenDrawer } = useDrawer();
    const socialMedia =[
        {
          icon:<FaLinkedin color="black" size={30} />,
          id:1
        },
        {
          icon:<FaInstagramSquare color="black" size={30} />,
          id:2
        },
        {
          icon:<FaSquareXTwitter color="black" size={30}  />,
          id:3,
        },
        {
          icon:<FaFacebook color="black" size={30}  />,
          id:4
        },
    ]


    return ( 
        <>
        <div className=" w-full gap-4 m-auto mt-5 flex items-center  justify-between md:max-lg:w-[60%] lg:m-auto lg:w-3/5 " >
            <div className=" flex-1 md:w-1/3 " > 
            <Button onClick={()=>{setOpenModal(true)}} className=" w-full bg-primary_color py-3  rounded-[11px] text-white md:w-1/2  md:hidden md:max-lg:w-[119px] lg:w-full " >
                Consult
            </Button>
            <Button onClick={()=>{setOpenDrawer(true)}} className=" w-full bg-primary_color py-3  rounded-[11px] text-white md:w-1/2  hidden md:block md:max-lg:w-[119px] lg:w-full " >
                Consult
            </Button>
            </div>
            <div className=" flex-flex_2 md:w-1/3 flex items-center justify-start gap-3 " >
                <Image width={24} height={24} alt="user-plus-icon" src="/images/user-plus-icon.png" className=" object-contain w-6 h-6 md:w-8 md:h-8 " />
                <div className={` w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full  `} />
            <p className={` text-xs font-light text-primary_color`}>Online</p>
            </div>
            <div className=" hidden  gap-0 md:w-1/3 md:flex items-center justify-center md:gap-1 " >
            {socialMedia.map(({icon,id})=>(
                  <div  key={id} >
                    {icon}
                   </div>
                    ))}
             
            </div>
        </div>
        </>
     );
}
 
export default Actions;